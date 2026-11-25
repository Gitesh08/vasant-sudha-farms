import React from "react";
import { Photo } from "@/components/media/Photo";
import { Badge } from "@/components/ui/Badge";
import { SAMPLE_FOOD_ITEMS } from "@/content/site";

export function EveningsSection() {
  return (
    <section id="evenings" className="relative overflow-hidden bg-night py-16 text-foam sm:py-24">
      {/* Warm sun-400 disc accent on the single dark section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-8 h-44 w-44 rounded-full bg-sun-400/20"
      />

      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-3 w-3 rounded-full bg-sun-400" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide text-wave-300 uppercase">
                Dusk & dining
              </span>
            </div>
            <h2 className="text-h2 mt-4 text-foam">Evenings at the farm</h2>
            <p className="mt-4 max-w-[54ch] text-base text-foam/90 sm:text-lg">
              After sunset at Nandgaon Beach, the courtyard lights come on under the palms. Simple,
              home-style Konkan meals and tea on the terrace keep evenings unhurried.
            </p>

            <div className="mt-8 rounded-[20px] border border-wave-300/20 bg-navy-900/60 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-foam">
                  On the table
                </h3>
                <Badge variant="sample">Sample menu — to confirm</Badge>
              </div>
              <ul className="mt-4 divide-y divide-wave-300/15">
                {SAMPLE_FOOD_ITEMS.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-wrap items-baseline justify-between gap-2 py-2.5 text-sm"
                  >
                    <span className="font-semibold text-foam">{item.name}</span>
                    <span className="text-xs text-wave-300">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-6">
            <Photo
              slot="EVENING-01"
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="border-wave-300/30"
            />
            <Photo
              slot="FOOD-01"
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="border-wave-300/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
