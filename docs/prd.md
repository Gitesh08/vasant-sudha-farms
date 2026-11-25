# Product Requirements Document — Vasant Sudha Farms (demo)

Status: v1 draft · Owner: Gitesh · Mode: DEMO (see rules.md §1)

## 1. Summary
A fast, mobile-first website for a coastal farm resort at Nandgaon Beach, Boisar (Palghar), with a working
**request-to-book** flow and a small **owner admin**. The goal is to show the owner a believable, tasteful,
fully functional site: honest content, real availability logic, designed around their logo and place.

## 2. Context (VERIFIED from public listings — see content.md for sources and caveats)
- Farm resort near Nandgaon Beach, Boisar, Palghar 401501. Listed since 2018.
- Facilities listed: swimming pool, kids play area, kitchenette, parking, WiFi, laundry, luggage storage.
- Check-in 2:00 PM, check-out 12:00 PM. Tariff band listed roughly ₹1,000–₹2,500/night (unconfirmed).
- Tagline used on own socials: "Where Comfort Meets Nature."
- Local competitors are generic: stock-photo hero, wall of text, "call to book". Gap = clarity + trust + feel.

## 3. Goals
| # | Goal | Measure (demo) |
|---|------|----------------|
| G1 | Visitor understands what/where/how much within 10 seconds on a phone | First screen shows name, place, tagline, a price-from line, and one primary action |
| G2 | Visitor can check dates and send a booking request in < 60 seconds | Timed walkthrough, ≤ 4 taps/fields after date pick |
| G3 | Site looks and feels specific to this place | Passes `unslop` review; palette & shapes traceable to logo |
| G4 | Owner can run the demo without a developer | Admin: confirm/decline requests, block dates, edit rates |
| G5 | Fast and accessible | Quality gates in rules.md §6 |

## 4. Non-goals (v1)
Real payment processing · channel manager / OTA sync · user accounts for guests · reviews submitted by public ·
multi-property · native app · AI chatbot · blog/CMS beyond the admin sections listed.

## 5. Audiences & jobs-to-be-done
1. **Mumbai weekend families** (planning on a phone, comparing 3–4 places): "Is it clean, is there a pool for kids,
   how far, how much, can we book without 5 phone calls?"
2. **Friend groups / birthday parties** (6–20 people): "Can you host us, is there space, food, music rules?"
3. **Corporate / school outings** (day trips, team days): "Do you do group day packages? Who do I talk to?"
4. **Couples** (quiet weekend): "Is it private, is it near the beach, what's the vibe?"
5. **Owner/manager**: "See requests, say yes/no fast, stop double-bookings, change rates for season."

## 6. Information architecture
```
/                    Home
/stay                All stay types            /stay/[slug]   Stay detail + booking panel
/experiences         Farm, beach, pool, kids, food (sections, not separate pages in v1)
/food                Food at the farm (sample menu, clearly labelled)
/day-visits          Day visit / group outing enquiry (P1)
/gallery             Photo gallery (placeholders → uploads)
/plan-your-visit     Location, directions, timings, policies, what to carry, FAQ
/book                Booking flow (dates → stay → guests → details → review → sent)
/book/[ref]          Request status page (public by reference + phone last-4)
/contact             Contact + WhatsApp click-to-chat + map
/admin               Dashboard · Requests · Calendar · Stay types · Rates · Content · Outbox · Settings
/legal/*             Privacy · Terms · Cancellation (templated, flagged "sample")
```

## 7. Functional requirements
Priority: P0 = must for demo · P1 = should · P2 = nice.

### 7.1 Public site
- **P0** Home: wordmark-led hero with arch-masked image slot, sticky compact availability bar, price-from,
  stay types preview, "what's on the farm" section, location strip with map, FAQ teaser, footer.
- **P0** Stay list + detail: capacity, bedrooms, amenities, photos (placeholder), rate "from", rules, booking panel.
- **P0** Plan-your-visit: address, how to reach (verified at build time with Maps), check-in/out, house rules, FAQ.
- **P0** Contact: WhatsApp click-to-chat (env number), map embed, enquiry form.
- **P0** SEO: metadata per page, `LodgingBusiness` JSON-LD, sitemap, robots, OG image (placeholder-based).
- **P1** Gallery with categories and lightbox (keyboard accessible).
- **P1** Day visits / group enquiry form.
- **P1** Food page with sample menu (labelled sample).
- **P2** Marathi + Hindi locales. **P2** "Seasons at the farm" scroll piece (monsoon/winter/summer visuals).

### 7.2 Booking (request-to-book, no payment)
- **P0** Date-range picker (mobile friendly, 2 months desktop / 1 month mobile), disabled unavailable nights,
  min-night rules (e.g. weekend ≥ 2), clear "why disabled" tooltip.
- **P0** Live price quote with nightly breakdown (weekday/weekend/season rule), extra-guest fee, "taxes as applicable".
- **P0** Guest form: name, phone (+91 validated), email (optional), guests (adults/children), notes. Honeypot + rate limit.
- **P0** Submit → `requested` status, soft inventory hold (default 24h), confirmation screen with reference
  `VSF-XXXXXX` and a status link. In demo mode, notifications go to the **Outbox** (not sent).
- **P0** No double booking: confirming a request re-checks availability inside a transaction.
- **P1** Status page by reference + phone last 4. **P1** Cancel request by guest.
- **P2** ICS download of confirmed stay. **P2** "Pay advance" mock screen (clearly fake).

Acceptance (booking submit):
1. Given available nights, when guest submits valid data, then a `requested` booking exists with server-computed quote.
2. Given nights became unavailable since page load, when submitting, then guest sees a specific message and
   alternative dates; no booking is created.
3. Given 6th request from same IP in 10 min, then 429 with friendly message.
4. All errors are announced to screen readers and focus moves to the first error.

### 7.3 Admin (single owner login)
- **P0** Login (Auth.js credentials, seeded owner). **P0** Requests inbox with filters; confirm/decline/cancel with
  note; conflict warning before confirm.
- **P0** Calendar (month view): per stay type, booked/held/blocked; click to block/unblock dates.
- **P0** Stay types CRUD: name, summary, capacity, units, amenities, base rates (weekday/weekend), extra guest fee, active.
- **P0** Rate rules: season/date-range overrides, min nights, day-of-week.
- **P1** Content: FAQs, testimonials (flagged sample), experiences, settings (check-in/out, hold hours, contact).
- **P1** Media: map uploaded files to image slots (alt text, focal point). **P1** Outbox viewer. **P2** Audit log.

## 8. Business rules
- Check-in 14:00, check-out 12:00 (configurable). Night = [check_in, check_out) half-open.
- Weekend nights = Fri & Sat. Season rules override base. Highest-priority rule wins; ties → most specific.
- Capacity per stay type: base occupancy + max occupancy; extra guest fee beyond base.
- Pending holds expire after `HOLD_HOURS`; expired holds free inventory automatically.
- Taxes: do not hard-code GST. Show "taxes as applicable"; rate is a setting, off by default.
- Cancellation policy text is sample until the owner supplies theirs.

## 9. Non-functional requirements
- Perf/a11y/SEO gates in rules.md §6. Works on low-end Android + 4G. Images via `next/image` only through `<Photo>`.
- Security: Zod validation, CSRF-safe server actions, rate limiting, secure cookies, no PII in logs.
- Privacy: collect only name/phone/email/notes; privacy page explains; admin export/delete a request.
- Reliability: booking logic fully unit-tested (overlaps, boundaries, holds, DST-free IST dates).

## 10. Demo script (what success looks like in a 5-minute pitch)
1. Open on phone: hero, tagline, "from ₹X" → scroll feel (waves, sun arch).
2. Pick weekend dates → live quote → send request → reference screen.
3. Open admin on laptop → request appears → confirm → calendar updates → date now unavailable publicly.
4. Block a date range for "maintenance" → public calendar greys out.
5. Show Outbox: the WhatsApp/email message that *would* have been sent.
6. Swap a placeholder for a real photo in Media → site updates.

## 11. Risks & open questions
| Item | Risk | Mitigation / ask owner |
|---|---|---|
| Real room types, counts, rates unknown | Fake data mistaken as real | `demo:true` flags, "sample" tags, ask owner for sheet |
| Photos unavailable until later | Site feels empty | Designed placeholders with shot descriptions |
| Owner contact unverified | Misrouted enquiries | Env var placeholders; demo mode |
| Offerings (fishing/trekking/events) only on low-quality listings | Overclaiming | Mark "to confirm" in content.md |
| Cancellation, GST, house rules | Legal wrongness | Templated + "sample" until owner confirms |

**Questions to resolve before going beyond demo:** unit inventory and names · real rates & seasons · pool timings ·
food policy (outside food? veg/non-veg) · music/events policy · group/day-visit pricing · distance/route · who handles WhatsApp.
