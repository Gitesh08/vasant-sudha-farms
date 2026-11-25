# rules.md — hard rules for all agents

These override agent defaults. If a rule blocks you, stop and raise it. Do not work around it.

## 1. Scope & honesty
- This is a **demo** for a real business. Never imply it is the official site. Footer + a small ribbon
  show "Demo concept — not the official website" while `NEXT_PUBLIC_DEMO_MODE=true`.
- Facts about the property come only from `docs/content.md` (VERIFIED). Everything else is labelled
  `demo: true` in data and flagged "sample" in the UI where a visitor could mistake it for real.
- Do not copy photos, text or reviews from Justdial, Instagram, Booking sites or any third party.
- No real phone number, email or WhatsApp number of the owner in source code or seed data. Use env vars
  and `+91 00000 00000` style obvious placeholders.

## 2. Stack & code
- Next.js (latest stable, App Router), TypeScript `strict`, Tailwind CSS (tokens in CSS via `@theme`),
  Drizzle ORM + Postgres, Zod, Auth.js (admin), next-intl (en active; mr/hi later), Motion (Framer) for animation.
- Server Components by default. `"use client"` only for interaction (calendar, forms, motion wrappers).
- Validate every input with Zod at the boundary (server actions and route handlers). Never trust client prices.
- No `any`, no `@ts-ignore`, no commented-out code, no dead files. No console.log in committed code.
- Dates are **date-only** strings (`YYYY-MM-DD`) in Asia/Kolkata. Never use JS `Date` for stay logic without
  going through `src/lib/dates.ts`. Currency: integers in paise-free rupees, formatted with `en-IN`.
- Files < 250 lines. One component per file. Co-locate tests (`*.test.ts`) for all pure logic in `src/lib`.
- Do not hand-roll auth, crypto, or sessions. Do not store secrets in the repo.
- Dependencies: only those in `docs/architecture.md` §2. Ask first for anything else.

## 3. Skills protocol
- Before any UI/copy task: read `taste`, `ui-ux-pro`, `unslop` instructions fresh (do not rely on memory of them).
- `taste`: decide type, colour, spacing, layout, motion. Justify one decision per page in `memory.md`.
- `ui-ux-pro`: forms, states (empty/loading/error/disabled/focus), touch targets, flows, a11y.
- `unslop`: mandatory final pass per page. Record "unslopped: <page>, <date>" in `memory.md`.
- If any skill contradicts `docs/design.md`, `docs/design.md` wins; log the conflict in `memory.md`.

## 4. Anti-slop ban list (design, code, copy)
**Visual:** purple/indigo gradients · glassmorphism · neon glows · stock "blob" backgrounds ·
dark-overlay-on-photo centred hero · three-card icon feature row · emoji as icons · identical rounded-2xl
cards everywhere · gradient text · bounce/spin animations · parallax on everything · carousels that autoplay.
**Copy — never write:** "Escape to paradise", "nestled", "oasis", "tranquil", "serene retreat",
"hidden gem", "unforgettable", "curated", "elevate", "immerse yourself", "unwind and recharge",
"your home away from home", "a slice of heaven", "where memories are made", "whether you're … or …",
any sentence starting "Experience the …". No exclamation marks in headings. No "Welcome to".
**Content:** no lorem ipsum. No fake counters ("10,000+ happy guests"). No fake star ratings. Sample
testimonials must carry a visible "Sample" tag.
**Code:** no UI kit look-alike (do not ship default shadcn styling; primitives may be used, but restyle fully).
Prefer specific over generic: real place words (Nandgaon, Boisar, chikoo, coconut, the Arabian Sea, Konkan coast)
only where `docs/content.md` allows.

## 5. Design rules
- Tokens only: colours, radii, spacing, type come from `docs/design.md` tokens. No raw hex in components.
- Signature shapes must appear: sun-arch image mask, wave divider, triple-line rule (see design.md §4).
- Mobile first. Primary audience is a phone in Mumbai on 4G. Design at 390px, then scale up.
- Touch targets ≥ 44px. Visible focus rings. Respect `prefers-reduced-motion`.
- Contrast: body text AA minimum (AAA for navy on sand/foam). Orange/green/teal are **never** small text.
- Every image slot uses `<Photo>` with alt text from the manifest. No `<img>` and no raw `next/image` in pages.

## 6. Performance & quality gates (checked per phase)
- Lighthouse mobile: Perf ≥ 90, A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- LCP < 2.5s on simulated 4G; CLS < 0.05; no layout shift from fonts (use `next/font`).
- Keyboard-only walkthrough of booking flow passes. Screen-reader labels on all form controls.
- `pnpm lint && pnpm typecheck && pnpm test` green before any commit.

## 7. Process
- Plan → approval → build → verify (browser screenshots at 390 & 1440) → unslop → log → commit.
- One phase at a time. Stop at each phase gate in `docs/phases.md` and wait for the human.
- Commit style: Conventional Commits. One logical change per commit.
- `memory.md` is updated at the end of every task by the agent that did the work. See its protocol.
- Disagree openly. If docs are wrong or underspecified, write it in the report; don't guess silently.

## 8. Definition of done (any task)
Code works · types/lint/tests pass · verified in browser at 2 widths · copy unslopped · a11y checked ·
placeholders still placeholders (no stray stock images) · `memory.md` updated · summary written.
