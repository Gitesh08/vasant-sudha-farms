# memory.md — project memory (agents: read first, write last)

Single source of truth for decisions, state, and gotchas. Keep it short and current. Newest entries at the top of each section.

## Protocol
1. **Start of task:** read this file fully.
2. **End of task:** update **State**, add to **Decisions** (anything not in docs or deviating from docs), **Gotchas**, **Unslop log**, **Open questions**.
3. One line per entry, dated `YYYY-MM-DD`, with agent role in brackets. No essays.
4. Never delete history; strike through (`~~text~~`) and add a replacement.
5. If this file contradicts `rules.md` or `docs/*`, the docs win — log the conflict here and tell the human.

## Project snapshot
- Project: Vasant Sudha Farms — SPA demo website + interactive request-to-book drawer. Mode: DEMO.
- Place: Nandgaon Beach, Boisar, Palghar 401501. Coordinates 19.76659, 72.68853.
- Stack: Next.js 16 (App Router) · TS strict · Tailwind v4 · Radix UI · Motion · Zod · date-fns · Vitest.
- Skills: `unslop`, `design-taste-frontend` (used for `taste`). `ui-ux-pro` not installed.
- Brand: navy / sun-orange / palm-green / wave-teal; sun-arch, wave divider, furrow rule. See `docs/design.md`.

## State
| Phase | Status | Gate passed | Notes |
|---|---|---|---|
| 0 Foundations (SPA) | done | yes | Simplified to SPA without DB/admin per user direction |
| 1 Design system & SPA | in progress | — | Brand shapes, `<Photo>`, UI primitives, and SPA sections built; verifying in browser |

## Decisions
- 2026-11-25 [Architect] Pivoted to single-page app (SPA) without Postgres/Drizzle, Auth.js admin, or `next-intl` multi-page routing per user request ("no need of DB and multiple pages, I want SPA, not even admin needed"). Affects: `package.json`, `src/app/page.tsx`, `src/components/booking/BookingSheet.tsx`.
- 2026-11-25 [Architect] Pinned TypeScript to `^5.8.0` (`5.9.3`) because `typescript-eslint@8.74.0` in `eslint-config-next` does not yet support TypeScript 7.0. Affects: `package.json`.
- 2026-11-25 [Design Lead] Used `design-taste-frontend` for `taste` and applied `rules.md` §5 + `docs/design.md` §11 a11y rules in place of missing `ui-ux-pro` skill. Affects: all UI components.
- 2026-11-25 [Design Lead] Built typographic+SVG `<Wordmark>` using `docs/design.md` colour estimates because `public/brand/logo-stacked.jpg` and `logo-horizontal.jpg` have not been supplied yet. Affects: `src/components/brand/Wordmark.tsx`, `src/styles/globals.css`.

## Final brand tokens (using design.md estimates until real logo files are supplied)
- navy-700: `#0E4A72` · sun-600: `#B84F08` · sun-500: `#E8710F` · sun-400: `#F59B23` · palm-600: `#2E7D1F` · furrow-500: `#1FA351` · wave-600: `#0F6F9C` · foam: `#F4FAFA` · sand: `#F6EFE3` · night: `#0A2A43`
- Fonts confirmed: Fraunces (display) / Nunito Sans (body) / Yellowtail (hero script accent once).

## Image slots status
- All slots are designed `<Photo>` placeholders (`HERO-01`, `STAY-VILLA-01`, `STAY-COTTAGE-01`, `STAY-GARDEN-01`, `POOL-01`, `BEACH-01`, `FARM-01`, `KIDS-01`, `EVENING-01`, `FOOD-01`, `LOC-01`).

## Unslop log
- 2026-11-25 unslopped: `/` SPA — zero banned phrases in grep check; replaced generic 3-icon feature grid with alternating editorial rows, badged all sample stays/menu/tariffs clearly, kept single dark section (`night`) and 3-furrow booking progress.

## Gotchas
- `next/font/google` requires network access at `next build` time to fetch Fraunces, Nunito Sans, and Yellowtail.
- Dates are date-only strings (`YYYY-MM-DD`) in `Asia/Kolkata`; never raw JS `Date` for stay math.
- Demo mode: no real outbound messages; no real owner contact data in code.

## Open questions for the owner / human
- Supply `public/brand/logo-stacked.jpg` & `logo-horizontal.jpg` to re-sample exact brand hexes.
- Real unit inventory, names, rates, seasons? · Pool timings? · Food and outside-food policy? · Events/music policy? · Group/day-visit pricing? · Cancellation policy?
