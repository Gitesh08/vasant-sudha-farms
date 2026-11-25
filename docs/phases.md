# phases.md — build plan & agent prompts

Rule: one phase at a time. Each ends with a **gate**. The human reviews, then says "go phase N+1".
Suggested agent roles (Antigravity Manager view): **Architect** (plans, data, logic) · **Design Lead** (taste + ui-ux-pro) ·
**Builder** (implementation) · **QA/Unslop** (browser verification, a11y, unslop pass) · **Scribe** (owns `memory.md`).

---
## Phase 0 — Foundations (½ day)
**Tasks:** scaffold Next.js (latest stable, TS strict, Tailwind, pnpm) · add approved deps only · folder structure per architecture §3 ·
ESLint/Prettier/Vitest/Playwright config · `.env.example` · Drizzle config + empty schema · `next-intl` with `en` · CI workflow ·
move kit docs into place · seed `memory.md` · demo-mode scaffolding (ribbon, noindex).
**Gate 0:** `pnpm dev/lint/typecheck/test/build` green · repo structure matches · plan for Phase 1 posted.

## Phase 1 — Design system & brand (1 day) — *taste + ui-ux-pro heavy*
**Tasks:** re-sample logo colours → finalise tokens · fonts via next/font · globals.css tokens · Wordmark, WaveDivider (3 variants), FurrowRule,
PalmFrond, SunArch mask · `<Photo>` + `images.ts` manifest from docs/images.md · Button/Input/Stepper/Badge/Accordion/Sheet/Chip ·
Nav + Footer · `/design-system` page showing all components + states, at 390 & 1440 · reduced-motion handling.
**Gate 1:** screenshots reviewed by human · `unslop` pass on design-system copy · contrast report · palette traces to logo (written note in memory.md).

## Phase 2 — Public pages with placeholders (1–2 days)
**Tasks:** Home · Stay list + detail (static data) · Experiences · Food (sample) · Plan-your-visit · Gallery · Contact · Legal (sample) ·
SEO metadata + JSON-LD + sitemap · page transitions (subtle) · all images via `<Photo>`.
**Gate 2:** every page at 390/768/1440 · Lighthouse targets met on Home and Stay · full `unslop` per page · no banned phrases (grep check).

## Phase 3 — Data & booking engine (2 days) — *Architect lead*
**Tasks:** Drizzle schema + migrations + idempotent seed (demo stay types, rates, rules) · `lib/booking/*` pure logic with tests (listed edge cases) ·
availability + quote server actions · DateRangePicker (keyboard + SR) · BookingFlow (dates → stay → guests → details → review → sent) ·
holds + expiry · status page · rate limit + honeypot · outbox notifications.
**Gate 3:** unit tests ≥ 95% on `lib/booking` · Playwright happy + conflict path · a11y pass on flow · timed run ≤ 60s.

## Phase 4 — Admin (1–2 days)
**Tasks:** Auth.js owner login + middleware · requests inbox (confirm/decline/cancel with conflict check) · calendar month view + block/unblock ·
stay types CRUD · rate rules · settings · outbox viewer · (P1) content + media mapping.
**Gate 4:** demo script steps 3–6 in prd.md §10 work end-to-end · admin a11y basics · no admin route reachable unauthenticated.

## Phase 5 — Polish, motion, i18n (1–2 days)
**Tasks:** motion pass (tide principles) · gallery lightbox · OG images · performance tuning · Marathi/Hindi scaffolding if approved ·
copy re-read by `unslop` across site · empty/error/offline states · 404/500 pages in brand.
**Gate 5:** Lighthouse mobile ≥ 90/95/95/95 on Home, Stay, Book · reduced-motion verified · final unslop sign-off.

## Phase 6 — Demo hardening & handoff (½ day)
**Tasks:** seed reset command · demo walkthrough script + recording checklist · README (run, seed, env, swap images, flip demo mode) ·
deploy preview · image-swap rehearsal with 3 test photos · final `memory.md` cleanup · list of owner questions (prd §11).
**Gate 6:** demo script rehearsed twice with no surprises · deploy URL works on a real phone.

---
## Reusable prompts (paste into Antigravity)
**Start a phase**
> Read `rules.md`, `memory.md`, and the Phase N section of `docs/phases.md`. Post an Implementation Plan artifact (files, deps with reasons,
> risks, max 5 blocking questions). Do not code until I approve.

**Design review**
> Using `taste` and `ui-ux-pro`, review the pages built so far against `docs/design.md`. Take screenshots at 390 and 1440. List what feels generic,
> what breaks the sun-arch / wave / furrow language, and fix the top 5 issues. Then run `unslop`.

**Unslop pass**
> Run `unslop` on `<page or component>` — visuals, layout, and every string. Grep for the banned list in `rules.md` §4. Report findings, fix, log in `memory.md`.

**Booking logic audit**
> Without changing behaviour, audit `src/lib/booking` against `docs/architecture.md` §5. Write failing tests for any edge case not covered, then fix.

**Image swap rehearsal**
> I added files to `public/images/`. Map them to slots per `docs/images.md`, write alt text from the manifest, generate blur placeholders, and show before/after screenshots.

**End of task**
> Update `memory.md` per its protocol, then summarise in ≤ 10 lines.

## Optional Antigravity workflows (if your version reads `.agent/workflows/`)
Create `/phase-next`, `/unslop-review`, `/update-memory` as small markdown workflows containing the prompts above. If your build uses a different folder,
keep them as saved prompts instead.
