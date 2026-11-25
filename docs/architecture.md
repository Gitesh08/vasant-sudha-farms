# architecture.md — Vasant Sudha Farms

## 1. Overview
Monolithic Next.js app (App Router). Public site is mostly static/ISR; booking and admin use server actions backed by
Postgres via Drizzle. No separate API service. Demo mode keeps all side effects inside the database.

```
Browser ──► Next.js (RSC + server actions + route handlers)
              ├─ content/ (typed copy, image manifest, i18n messages)
              ├─ lib/booking (pure: availability, pricing, holds)  ◄─ unit tested
              ├─ db/ (Drizzle schema, queries, seed)  ──► Postgres (Neon or Supabase)
              ├─ auth (Auth.js credentials → admin only)
              └─ notifications (outbox table; real senders behind DEMO_MODE=false)
```

## 2. Stack (approved dependencies — ask before adding others)
| Area | Choice | Why |
|---|---|---|
| Framework | Next.js latest stable, App Router, TS strict | Per brief |
| Styling | Tailwind CSS (tokens via `@theme`) | Tokens map 1:1 to design.md |
| Primitives | Radix UI primitives (dialog, popover, accordion, select) | Accessible behaviour, fully restyled |
| Motion | `motion` (Framer Motion) | Reveal + sheet transitions |
| DB | Postgres + Drizzle ORM + drizzle-kit | Typed, light, SQL-first |
| Validation | Zod | Shared client/server schemas |
| Auth | Auth.js (credentials, single owner) | No hand-rolled auth |
| i18n | next-intl (only `en` enabled at start) | mr/hi later without refactor |
| Dates | `date-fns` + `@date-fns/tz` (Asia/Kolkata) | Date-only logic |
| Phone | `libphonenumber-js` | +91 validation |
| Email | Resend (only when DEMO_MODE=false) | Simple |
| Rate limit | Upstash Ratelimit (prod) / in-memory (dev) | Booking abuse control |
| Testing | Vitest + Playwright | Pure logic + flows |
| Lint/format | ESLint, Prettier, `prettier-plugin-tailwindcss` | Consistency |
Package manager: pnpm. Node LTS.

## 3. Folder structure
```
.
├─ AGENTS.md  rules.md  memory.md
├─ docs/  (prd, design, architecture, phases, content, images)
├─ public/brand/  logo-stacked.jpg  logo-horizontal.jpg
├─ public/images/  (empty until owner uploads; filenames per images.md)
├─ drizzle/                    migrations
├─ src/
│  ├─ app/
│  │  ├─ [locale]/             (en now)
│  │  │  ├─ (site)/            page.tsx, stay/, experiences/, food/, day-visits/, gallery/, plan-your-visit/, contact/, legal/
│  │  │  ├─ book/              flow + [ref]/status
│  │  │  └─ design-system/     dev-only component gallery
│  │  ├─ admin/                (protected) requests, calendar, stays, rates, content, media, outbox, settings
│  │  ├─ api/                  health, ics/[ref], auth/[...nextauth]
│  │  ├─ sitemap.ts  robots.ts  opengraph-image.tsx
│  │  └─ layout.tsx
│  ├─ components/
│  │  ├─ ui/                   Button, Input, Stepper, Sheet, Accordion, Badge...
│  │  ├─ brand/                Wordmark, WaveDivider, FurrowRule, PalmFrond, SunArch
│  │  ├─ site/                 Hero, StayCard, EditorialRow, LocationStrip, Footer, Nav
│  │  ├─ booking/              DateRangePicker, GuestStepper, PriceBreakdown, BookingFlow
│  │  ├─ admin/                AdminTable, AdminCalendar, StayForm, RateRuleForm
│  │  └─ media/                Photo.tsx (placeholder-aware)
│  ├─ content/                 site.ts (verified facts), copy/*.ts, images.ts (manifest), faqs.ts
│  ├─ db/                      schema.ts, client.ts, queries/*.ts, seed.ts
│  ├─ lib/
│  │  ├─ booking/              availability.ts pricing.ts holds.ts reference.ts (+ *.test.ts)
│  │  ├─ dates.ts  money.ts  env.ts  rate-limit.ts  notify.ts  seo.ts
│  ├─ actions/                 booking.ts  admin-*.ts  enquiry.ts
│  ├─ i18n/                    request.ts  messages/en.json
│  └─ styles/                  globals.css (tokens)
└─ tests/e2e/                  booking.spec.ts  admin.spec.ts  a11y.spec.ts
```

## 4. Data model (Drizzle / Postgres)
```
stay_types   id, slug*, name, summary, description, bedrooms, base_occupancy, max_occupancy, units_total,
             amenities text[], rate_weekday int, rate_weekend int, extra_guest_fee int, min_nights int default 1,
             sort int, active bool, demo bool default true
rate_rules   id, stay_type_id? (null = all), name, start_date, end_date, days_of_week int[]?, rate_override int?,
             multiplier numeric?, min_nights int?, priority int
blocks       id, stay_type_id, start_date, end_date, units int default all, reason, created_by
bookings     id, ref*, stay_type_id, check_in date, check_out date, adults, children, units int default 1,
             guest_name, phone, email?, notes?, quote_total int, quote_json jsonb,
             status enum('requested','confirmed','declined','cancelled','expired'),
             hold_expires_at timestamptz?, decision_note?, source, created_at, updated_at
enquiries    id, kind enum('general','group','day_visit'), name, phone, email?, message, group_size?, preferred_date?, status, created_at
experiences  id, slug, title, body, sort, image_slot, active, demo bool
faqs         id, question, answer, sort, active
testimonials id, name, text, stay_label?, is_sample bool default true, active
media        id, slot_id*, url, alt, focal_x, focal_y, width, height, updated_at
outbox       id, channel enum('email','whatsapp'), to_masked, subject?, body, booking_id?, created_at
settings     key*, value jsonb         (checkin_time, checkout_time, hold_hours, tax_rate?, whatsapp, etc.)
users        id, email*, password_hash, role='owner'
audit_log    id, actor, action, entity, entity_id, diff jsonb, at       (P2)
```
Indexes: `bookings(stay_type_id, check_in, check_out)`, `blocks(stay_type_id, start_date, end_date)`, `bookings(ref)`.
Constraints: `check_out > check_in`; `units >= 1`; phone stored E.164.

## 5. Booking logic (pure functions in `src/lib/booking`, 100% unit tested)
**Interval:** nights are `[check_in, check_out)`.
**Availability** per stay type per night `n`:
`free(n) = units_total − Σ units(confirmed overlapping n) − Σ units(requested with hold_expires_at > now overlapping n) − blocked(n)`
A request is bookable iff `free(n) ≥ units` for every night, and nights ≥ `min_nights` (max of stay type and applicable rule).
**Pricing** per night: pick rule with highest `priority` covering the date (and DOW); else weekend (Fri/Sat) / weekday base.
`override` replaces, `multiplier` scales. Sum nights → add `extra_guest_fee × max(0, guests − base_occupancy) × nights` →
optional tax from settings (default off) → `quote_json` with per-night lines. **Server is the only source of price.**
**Confirm** (admin): `BEGIN … SERIALIZABLE` → recompute availability excluding this booking's own hold → conflict ⇒ reject with reason → set `confirmed`, clear hold.
**Expiry:** lazily on read + a cron route (`/api/cron/expire`) every 15 min in prod.
**Reference:** `VSF-` + 6 chars from unambiguous alphabet (no 0/O/1/I), collision-checked.
**Edge cases to test:** same-day turnover (check_out == next check_in is OK), 1-night, month/year boundaries, multi-unit,
block overlapping partial stay, expired hold freeing dates, min-night on weekend, extra guests, rule priority ties.

## 6. Interfaces
Server actions (Zod-validated, return typed `Result<T, E>`):
`getAvailability(stayId, monthRange)` · `getQuote(input)` · `createBookingRequest(input)` · `cancelBookingByGuest(ref, phoneLast4)` ·
`submitEnquiry(input)` · admin: `confirmBooking` `declineBooking` `cancelBooking` `createBlock` `deleteBlock` `upsertStayType` `upsertRateRule` `upsertContent` `assignMedia`.
Route handlers: `GET /api/health`, `GET /api/ics/[ref]` (confirmed only), `POST /api/cron/expire` (secret header).

## 7. Images & the `<Photo>` component
- `src/content/images.ts` is the **manifest**: `{ [slotId]: { src: string|null, alt, aspect, shape: 'arch'|'rect'|'circle', focal?, caption } }`.
- `<Photo slot="HERO-01" priority? sizes? />` reads the manifest (or the `media` table override). `src === null` ⇒ render the designed placeholder
  from design.md §8. Otherwise `next/image` with `fill`, `sizes`, AVIF/WebP, blur placeholder generated at upload.
- Owner uploads: drop file into `public/images/<slot-id>.jpg` then set `src` (or use Admin → Media in P1). No code changes in pages.
- `NEXT_PUBLIC_SHOW_PLACEHOLDER_CAPTIONS=true` in dev/demo; false in production.

## 8. Auth & security
Auth.js credentials provider, one `owner` user seeded from env (`ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH` argon2/bcrypt). Middleware guards `/admin/*`.
Session cookie `httpOnly`, `secure`, `sameSite=lax`. Server actions re-check session. Rate limit: booking 5/10min/IP, login 5/10min/IP+email.
Honeypot field + minimum-fill-time on public forms. Security headers via `next.config` (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
No PII in logs; masked phone in Outbox display.

## 9. Demo mode
`NEXT_PUBLIC_DEMO_MODE=true` (default) ⇒ demo ribbon + footer note · notifications write to `outbox` only · no payment UI except labelled mock ·
seed data flagged `demo:true` · `robots` disallow all + `noindex` meta (so the demo isn't mistaken for the official site).
Flip to `false` only with the owner's written go-ahead and real content.

## 10. Environment variables (`.env.example`, never commit real values)
`DATABASE_URL` · `AUTH_SECRET` · `ADMIN_EMAIL` · `ADMIN_PASSWORD_HASH` · `NEXT_PUBLIC_SITE_URL` · `NEXT_PUBLIC_DEMO_MODE` ·
`NEXT_PUBLIC_SHOW_PLACEHOLDER_CAPTIONS` · `DEMO_WHATSAPP_NUMBER` (placeholder) · `HOLD_HOURS=24` · `CRON_SECRET` ·
`RESEND_API_KEY?` · `UPSTASH_REDIS_REST_URL?` · `UPSTASH_REDIS_REST_TOKEN?` · `NEXT_PUBLIC_MAPS_EMBED_URL`

## 11. Rendering & caching
Marketing pages: static + ISR (revalidate 1h; on-demand revalidate when admin edits content). Stay detail: static shell + client availability fetch.
Booking & admin: dynamic. Fonts via `next/font` (no layout shift). Images: AVIF/WebP, responsive `sizes`, lazy except hero.

## 12. SEO
Per-page metadata, canonical, `LodgingBusiness` JSON-LD (address, check-in/out, amenities, `geo` 19.7666, 72.6885 — verify), sitemap, OG image.
All **noindex** while in demo mode.

## 13. Testing & CI
Vitest for `lib/booking`, `dates`, `money`. Playwright: booking happy path, conflict path, admin confirm → calendar, a11y (axe) on key pages,
390px & 1440px screenshots. GitHub Actions: install → lint → typecheck → test → build. Lighthouse CI on Home + Stay + Book.

## 14. Deployment
Vercel (app) + Neon/Supabase (Postgres). Preview per branch with its own DB branch where supported. Seed script idempotent (`pnpm db:seed`).

## 15. Decisions log pointers
Record any deviation from this file in `memory.md` → "Decisions".
