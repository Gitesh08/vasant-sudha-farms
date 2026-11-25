# Kickoff prompt — paste into Antigravity (Manager view, Planning mode)

Before pasting: create an empty folder `vasant-sudha-farms/`, copy this kit's files into it
(`AGENTS.md`, `rules.md`, `memory.md`, `docs/*`), put both logo files in `public/brand/`
(`logo-stacked.jpg`, `logo-horizontal.jpg`), and open the folder as the workspace.

---

## PROMPT (copy everything below this line)

You are the lead engineer and design lead for **Vasant Sudha Farms** — a working *demo* website
and booking flow for a coastal farm resort at Nandgaon Beach, Boisar (Palghar district, Maharashtra,
~100 km north of Mumbai). Tagline from the property's own socials: "Where Comfort Meets Nature."

This is a demo to show the owner what a proper, honest, beautiful site for their place could be.
It must feel like it was designed for THIS place, not generated from a template.

### Read first, in this order (do not skip, do not skim)
1. `AGENTS.md`
2. `rules.md`  — hard rules. They override your defaults.
3. `docs/prd.md`
4. `docs/design.md`
5. `docs/architecture.md`
6. `docs/phases.md`
7. `docs/content.md` and `docs/images.md`
8. `memory.md` — project memory. You must update it as you work (protocol is inside the file).

### Skills — mandatory
I have these installed: **unslop**, **taste**, **ui-ux-pro**. Open and read each skill's instructions
before touching UI or copy. If a skill is not found under that exact name, list the skills you do
see and tell me before proceeding.
- `taste` → every aesthetic decision (type, color, spacing, layout, motion).
- `ui-ux-pro` → flows, patterns, accessibility, interaction states, form UX.
- `unslop` → final pass on every page and every string of copy. Nothing ships without it.

### What "good" means here
- The palette and shape language come from the logo: navy lettering, sun-orange, palm green,
  wave-teal; a sun semicircle, a palm, two wave bands, triple green lines. See `docs/design.md`.
- Nothing that reads as AI-generated: no purple gradients, no glass cards, no centered
  "Escape to Paradise" hero on a dark overlay, no three-icon feature row, no lorem ipsum, no invented
  stats. `rules.md` §4 has the full ban list.
- All photos are **designed placeholders** for now (component `<Photo slot="…">`). I will upload real
  images later. The slot manifest is in `docs/images.md`.
- All business facts are either marked VERIFIED in `docs/content.md` or are clearly-labelled demo
  content. Never present invented room names, prices, or reviews as real.
- Demo safety: no real payments, no messages sent to the real owner's phone/email. Demo mode is on by
  default (see `docs/architecture.md` §9).

### How to work
1. Do NOT write code yet. First produce an **Implementation Plan artifact** for **Phase 0 and Phase 1
   only** (see `docs/phases.md`): files you will create, dependencies you will add (with a one-line
   reason each), and the questions that block you (max 5).
2. Wait for my approval.
3. Then execute Phase 0 → Phase 1. Use separate agents if useful (suggested roles in `docs/phases.md`),
   but one agent owns `memory.md` updates so entries don't conflict.
4. Verify visually with the browser agent: screenshot the design-system page at 390px and 1440px and
   attach to a Walkthrough artifact.
5. Run `unslop` on the design-system page and its copy. Fix, then report.
6. Stop at the end of Phase 1. Do not start Phase 2 until I say so.

### Setup specifics for Phase 0
- Use the latest stable Next.js (App Router, TypeScript strict, `src/` dir, Tailwind CSS, ESLint, Turbopack
  if default). Package manager: pnpm.
- Install only what `docs/architecture.md` §2 lists. Anything else needs my approval.
- Create the folder structure from `docs/architecture.md` §3.
- Commit after each phase with a conventional-commit message.

### End-of-session report (keep it short)
- What was built, what was verified (with screenshots), what is still placeholder.
- Decisions you made that were not in the docs (also logged in `memory.md`).
- Anything in the docs you think is wrong or underspecified. Push back; don't silently deviate.
