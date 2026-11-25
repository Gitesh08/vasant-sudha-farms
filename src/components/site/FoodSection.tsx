import { Coffee, Sun, Utensils } from "lucide-react";
import React from "react";
import { Photo } from "@/components/media/Photo";
import { GsapParallax, GsapReveal } from "@/components/ui/GsapMotion";
import { SAMPLE_FOOD_ITEMS } from "@/content/site";

export function FoodSection() {
  return (
    <section
      id="food"
      className="relative overflow-x-clip overflow-y-hidden bg-night py-16 text-foam sm:py-24"
    >
      {/* Subtle warm sun-400 disc accent on the single dark section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-4 h-44 w-44 rounded-full bg-sun-400/15 sm:right-12 sm:h-56 sm:w-56"
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <GsapReveal className="min-w-0 lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-sun-400 uppercase">
              <Sun className="h-4 w-4" />
              <span>Food & evenings</span>
            </div>
            <h2 className="text-h2 mt-3 text-foam">Home-style Konkan food, served fresh</h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-foam/85 sm:text-lg">
              Good, simple food is half the reason families come back. From morning poha and masala
              chai to unhurried dinners under the palms after sunset at Nandgaon Beach.
            </p>

            <div className="mt-8 border-t border-wave-300/20 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="inline-flex items-center gap-2 font-display text-xl font-semibold text-foam">
                  <Utensils className="h-4 w-4 text-sun-400" />
                  <span>At the table</span>
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-wave-300">
                  <Coffee className="h-3.5 w-3.5" />
                  <span>Home-style kitchen</span>
                </span>
              </div>

              <ul className="mt-4 divide-y divide-wave-300/15">
                {SAMPLE_FOOD_ITEMS.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-wrap items-baseline justify-between gap-2 py-3.5 text-sm"
                  >
                    <span className="font-semibold text-foam">{item.name}</span>
                    <span className="text-xs text-wave-300">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GsapReveal>

          <div className="min-w-0 space-y-6 lg:col-span-6">
            <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[20px]">
              <Photo
                slot="FOOD-01"
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="border-wave-300/25"
              />
            </GsapParallax>
            <GsapParallax yPercent={14} scaleFrom={1.06} className="rounded-[20px]">
              <Photo
                slot="EVENING-01"
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="border-wave-300/25"
              />
            </GsapParallax>
          </div>
        </div>
      </div>
    </section>
  );
}
