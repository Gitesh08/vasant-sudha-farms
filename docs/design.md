# design.md — Vasant Sudha Farms

Read with `rules.md` §4–5. Tokens here are the source of truth. **Re-sample colours from the real logo file
in `public/brand/` at Phase 1 and adjust within ±3% if they differ; record final values in `memory.md`.**

## 1. Reading the logo
- Wordmark: rounded, geometric sans in deep navy ("Vasant", "asant") and sun-orange ("S", "udha"); big
  oversized V and S as monogram anchors. Script "Farms" in sea-blue, hand-lettered feel.
- Symbol: a leaning coconut palm (greens) above a flat **sun semicircle** (orange → amber) sitting on **two
  wave bands** (teal/blue, different thicknesses, tapered ends). **Triple green lines** (stacked logo) /
  single green underline (horizontal logo) like furrows in a field or a horizon.
- Feeling: sunny, honest, family, coastal Konkan. Flat shapes, rounded terminals, no gradients except the
  sun's gentle two-tone. Not luxury-minimal; not rustic-kitsch. **Bright, warm, clean, local.**

## 2. Colour tokens
```css
@theme {
  /* Brand — sampled estimates from logo; verify in Phase 1 */
  --color-navy-900: #0B2236;   /* ink / body text, near-black with navy cast */
  --color-navy-700: #0E4A72;   /* logo navy: headings, primary buttons */
  --color-navy-500: #2F6F98;   /* secondary text on light, icons */
  --color-sun-600:  #B84F08;   /* orange deep: CTA bg w/ white text (AA 5:1) */
  --color-sun-500:  #E8710F;   /* logo orange: graphics, large display only */
  --color-sun-400:  #F59B23;   /* logo amber: sun disc, highlights */
  --color-palm-600: #2E7D1F;   /* green deep: text-safe on sand (AA) */
  --color-palm-500: #4A9B2F;   /* logo palm green: graphics */
  --color-furrow-500:#1FA351;  /* triple-line green */
  --color-wave-600: #0F6F9C;   /* teal deep: links on light (AA) */
  --color-wave-500: #1B8DBE;   /* logo wave: graphics */
  --color-wave-300: #8CCBE3;   /* tint for dividers, chips */

  /* Surfaces */
  --color-foam:  #F4FAFA;      /* logo background: default page */
  --color-sand:  #F6EFE3;      /* warm alternate sections */
  --color-chikoo:#7A5230;      /* sapota brown, small accents, borders on sand */
  --color-night: #0A2A43;      /* one dark section per page max */
  --color-line:  #D9E4E8;      /* hairlines */
}
```
Contrast rules: navy-700/navy-900 on foam/sand = text. White on sun-600 = button. **sun-500, sun-400, palm-500,
wave-500 are never used for small text** (all < 4.5:1 on white). Links use wave-600 + underline.
Use sand and foam alternately; use `night` for the "evening at the farm" section with sun-400 sun disc.

## 3. Typography
| Role | Font (next/font) | Notes |
|---|---|---|
| Display | **Fraunces** (SOFT 100, WONK 0, opsz auto), 500–600 | Warm, slightly soft serif — gives editorial calm against the rounded logo. If `taste` rejects: swap to **Young Serif** or **Gambetta**. |
| UI / body | **Nunito Sans** 400/600/700 | Echoes logo's rounded terminals, very legible on phones. |
| Script accent | **Yellowtail** | "Farms"-style flourish. Max once per page, ≥ 28px, never in body or buttons. |
| Devanagari (P2) | Noto Sans Devanagari / Noto Serif Devanagari | For mr/hi. |

Scale (fluid, `clamp`): display-xl 56→112 · display-l 40→72 · h2 32→48 · h3 24→30 · body 17→18 (line-height 1.6) · small 14.
Tracking: display −1.5%, body 0. Max line length 62ch. Numerals: tabular in prices.
The big **V** and **S** monogram idea can be echoed once on the home hero (oversized initial in navy/orange behind headline) — do not repeat per section.

## 4. Shape language (the signature — must appear on every page)
1. **Sun-arch mask** — images cropped as an arch (semicircle top, flat bottom), radius = half width. Used for hero,
   stay cards, gallery highlights. A flat `sun-400` semicircle peeks from behind the arch on the hero.
2. **Wave divider** — two stacked wave bands (navy-to-teal), thicker top, thin bottom, tapered ends, as in the logo.
   Use as section dividers (SVG, `currentColor`, 3 variants: calm, swell, ripple). Never repeat the same variant twice in a row.
3. **Furrow rule** — three short horizontal green lines (round caps) as heading underline / list bullet / footer divider.
4. **Round caps** everywhere: `stroke-linecap: round`, pill buttons, input radius 14px, cards radius 20px (not on every element).
5. **Palm frond** — a single hand-simplified frond SVG used sparsely as corner accent or loader. Not wallpaper.
6. Flat colour. No shadows except one soft contact shadow on floating bars. No gradients except sun two-tone.

## 5. Layout principles
- Asymmetric, left-aligned text blocks; images offset; generous whitespace; 12-col grid, 8px base spacing.
- Section rhythm: foam → sand → foam → night → sand. Wave divider between colour shifts.
- Cards: used for stay types only. Everything else is editorial rows (image + text), lists, or full-bleed bands.
- Sticky availability bar: compact pill on mobile bottom ("Check dates · from ₹X"), expands to sheet.
- Container max 1200px; text 62ch; image bleed allowed on mobile.

## 6. Motion
- Principle: **tide, not bounce.** Slow ease-in-out (600–900ms), small distances (≤ 16px), staggered fade/translate on reveal.
- Hero: sun arch rises 24px and waves drift horizontally 1–2px/s (CSS only, paused offscreen).
- Section waves: subtle path morph on scroll (optional); disabled for `prefers-reduced-motion`.
- Buttons: arrow chip slides 4px. Focus: 3px wave-500 ring + 2px offset.
- No autoplay carousels, no parallax stacks, no cursor effects.

## 7. Components (build in Phase 1, show on `/design-system`)
Wordmark/Logo (SVG recreation optional; start with supplied files) · Button (primary navy, secondary sun-600 outline, ghost) ·
Input / Select / Stepper / Textarea · DateRangePicker · GuestStepper · PriceBreakdown · Chip · StayCard (arch image) ·
EditorialRow · WaveDivider · FurrowRule · Photo (placeholder-aware) · Accordion (FAQ) · Sheet (mobile booking) ·
Toast · Skeleton · Badge ("Sample", "Demo") · Nav + Footer · AdminTable · AdminCalendar.
States for each: default, hover, focus-visible, active, disabled, error, loading, empty.

## 8. Placeholder look (`<Photo>` when `src` is null)
Arch or rectangle filled with a flat palette tint (alternating wave-300 / sand / sun-400 at 25%), a faint wave-line pattern,
and a bottom-left caption: slot id + short shot description (e.g. "HERO-01 · Palm line at golden hour, wide"). Must look
intentional and calm — like a mood board tile — never like a broken image. Hidden captions in production mode.

## 9. Page art direction
- **Home:** Left: huge Fraunces headline (e.g. "Comfort, close to the sea." — draft; unslop), Yellowtail "Farms" mark,
  price-from line, two actions (Check dates / See stays). Right: arch photo slot + sun disc. Below: wave → "On the farm"
  editorial rows (pool, beach walk, orchard/coconut, kids, food) → stays (arch cards) → night band "Evenings" → location strip → FAQ → footer.
- **Stay detail:** Arch gallery strip, key facts row (guests · bedrooms · pool), "what's included", rules, sticky booking panel (desktop right / mobile sheet).
- **Plan your visit:** timeline layout (Arrive → Check-in → Pool → Dinner → Check-out). Map in a rounded frame with wave border.
- **Gallery:** masonry of arch/rect mix by category chips; keyboard lightbox.
- **Booking:** single column, large touch targets, progress as three furrow lines filling in; summary always visible.
- **Admin:** calmer, denser, neutral (foam/white), same tokens, no decoration beyond logo and furrow rule.

## 10. Voice (feeds `unslop`)
Plain, warm, specific, short sentences. Speak like a good host, not a brochure. Use concrete nouns (pool, coconut palms,
chikoo, beach walk) only where content.md allows. No superlatives without proof. Prices and rules stated plainly.
Hinglish is okay in microcopy only if it reads natural ("Confirm hone par WhatsApp aayega") — P2, owner-approved.

## 11. Accessibility
AA everywhere; focus order logical; calendar usable with keyboard and announces range; reduced motion honoured;
alt text from manifest; form errors programmatically associated; colour never the only signal (blocked dates use pattern + label).
