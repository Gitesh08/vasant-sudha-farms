# AGENTS.md — Vasant Sudha Farms (demo)

Entry point for any coding agent. Keep this file short; details live in the linked docs.

**Project:** demo website + request-to-book flow + owner admin for Vasant Sudha Farms, a coastal farm
resort at Nandgaon Beach, Boisar, Palghar (Maharashtra, India).

**Read order:** `rules.md` → `docs/prd.md` → `docs/design.md` → `docs/architecture.md` →
`docs/phases.md` → `docs/content.md` → `docs/images.md` → `memory.md`.

**Non-negotiables**
1. `rules.md` overrides your defaults. If a rule seems wrong, say so — do not silently break it.
2. Run the `taste`, `ui-ux-pro` and `unslop` skills for UI and copy work (see `rules.md` §3).
3. Images are placeholders via `<Photo slot="…">` until the owner uploads real ones.
4. Demo mode is ON: no real payments, no real outbound messages, no real owner contact data in code.
5. Update `memory.md` at the end of every task. Work is not done until it is logged.
6. Ask before adding dependencies not listed in `docs/architecture.md`.

**Commands:** `pnpm dev` · `pnpm lint` · `pnpm typecheck` · `pnpm test` · `pnpm db:push` · `pnpm db:seed`
