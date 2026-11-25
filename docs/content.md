# content.md — facts, placeholders, copy bank

## 1. VERIFIED (from public listings, found Nov 2026 — owner must confirm before any real launch)
| Fact | Value | Source type | Confidence |
|---|---|---|---|
| Name | Vasant Sudha Farms (Resort) | Google Maps listing, Justdial | High |
| Place | Nandgaon Beach, Nandgaon, Boisar, Taluka/Dist. Palghar, Maharashtra 401501 | Justdial, Booking aggregator | High |
| Address line | "House No. 638, Nandgaon Beach" | Justdial | Medium |
| Coordinates | 19.76659, 72.68853 (from the shared Maps link) | Google Maps | High |
| Operating since | 2018 | Justdial | Medium |
| Check-in / out | 2:00 PM / 12:00 PM | Justdial | Medium |
| Facilities listed | Swimming pool, kids play area, kitchenette, parking, WiFi, laundry, luggage storage, doctor on call | Justdial | Medium |
| Public rating | ~4.3–4.5 on Justdial from ~76–108 ratings (varies by page) | Justdial | Medium — **do not show as our own rating** |
| Guest themes | beach nearby, good food, clean cozy rooms, helpful staff, peaceful | Justdial summaries | Medium — paraphrase only |
| Tagline | "Where Comfort meets Nature" | Property's Instagram caption | High |
| Instagram | `vasant.sudha_farms.resort` | Instagram/Pinterest | High |
| Region | Palghar district, Konkan coast, north of Mumbai | General | High |

## 2. UNVERIFIED — treat as "to confirm with owner" (do NOT state as fact on the site)
- Villa description "2 bedrooms, 2 bathrooms, private pool, sea-view balcony, buffet breakfast" (single booking aggregator).
- Activities "farming, fishing, trekking" (low-quality travel listing).
- Nightly tariff "₹1,000–₹2,500" and "from ₹1,600" (aggregators, undated).
- Phone/WhatsApp number on Justdial: **not copied into this kit on purpose**; owner supplies it.
- Number of units, room names, menu, pool timings, outside-food policy, events/music policy, group pricing, cancellation policy.
- Driving route and distance from Mumbai: agent verifies with Maps at build time and cites "approx."

## 3. DEMO SEED (all `demo: true`, labelled "Sample" in UI where a visitor could take it as real)
| Slug | Name (placeholder) | Sleeps | Bedrooms | Units | Weekday | Weekend | Notes |
|---|---|---|---|---|---|---|---|
| `sea-breeze-villa` | Sea Breeze Villa | 6 (base 4) | 2 | 2 | ₹2,400 | ₹3,200 | Pool-facing, balcony |
| `farm-cottage` | Farm Cottage | 4 (base 2) | 1 | 4 | ₹1,600 | ₹2,200 | Garden side |
| `garden-room` | Garden Room | 3 (base 2) | 1 | 6 | ₹1,200 | ₹1,700 | Entry level |
Extra guest fee ₹400/night. Rate rules: "Monsoon weekdays" (Jun 15–Sep 15, Mon–Thu) −15%; "Diwali week" +25%; weekend min 2 nights in peak.
These names/prices are inventions for the demo. Replace when the owner provides real data.

## 4. Copy bank (drafts for `unslop`; keep short, plain, specific)
- **Hero headline (options):** "Comfort, close to the sea." · "A farm stay, a short walk from Nandgaon Beach." · "Palms, a pool, and the Arabian Sea down the road."
- **Hero sub:** "Farm stays at Nandgaon Beach, Boisar — about two hours from Mumbai." *(verify the time)*
- **Price line:** "Stays from ₹1,200 a night" *(demo)*.
- **Booking CTA:** "Check dates" · "Send booking request" · confirmation: "Request sent. We'll confirm on WhatsApp." *(in demo: "Demo — nothing was sent.")*
- **Empty availability:** "These dates are taken. Try Fri–Sun the week after, or send us a note."
- **Plan your visit headings:** "Getting here" · "Check-in and check-out" · "House rules" · "What to bring" · "Questions we get a lot".
- **Footer demo note:** "Demo concept built to show what a site for Vasant Sudha Farms could look like. Not the official website."
- **Sample testimonial tag:** "Sample" badge + "Placeholder text for layout."

## 5. FAQ seeds (answers marked `to confirm` stay hidden in production)
Is there a pool? *(yes — listed)* · Is it near the beach? *(Nandgaon Beach — listed)* · Check-in time? *(2 PM — listed)* ·
Is food available? *(to confirm)* · Can we bring outside food? *(to confirm)* · Do you host groups/day visits? *(to confirm)* ·
Is music allowed? *(to confirm)* · Are pets allowed? *(to confirm)* · How do I pay? *(to confirm)* · Cancellation? *(to confirm — sample policy)*

## 6. Ban list reminder
See `rules.md` §4. Run a grep over `src/content` and page files before every gate.
