import { Coffee, Sun, Utensils } from "lucide-react";
import React from "react";
import { Photo } from "@/components/media/Photo";
import { GsapParallax, GsapReveal } from "@/components/ui/GsapMotion";
import { DINING_HIGHLIGHTS } from "@/content/site";

export function FoodSection() {
  return (
    <section
      id="dining"
      className="relative overflow-x-clip overflow-y-hidden bg-night py-16 text-foam sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-4 h-48 w-48 rounded-full bg-sun-400/10 blur-2xl sm:right-12 sm:h-64 sm:w-64"
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <GsapReveal className="min-w-0 lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-sun-400 uppercase">
              <Sun className="h-4 w-4" />
              <span>Coastal Dining &amp; Banquets</span>
            </div>
            <h2 className="text-h2 mt-3 text-foam">
              Konkan hospitality from morning tea to starlit banquets
            </h2>
            <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-foam/85">
              Freshly prepared Konkan seafood, regional vegetarian thalis, and full banquet catering cooked on-site across the courtyard.
            </p>

            <div className="mt-8 border-t border-wave-300/20 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="inline-flex items-center gap-2 font-display text-xl font-semibold text-foam">
                  <Utensils className="h-4 w-4 text-sun-400" />
                  <span>Culinary Experiences</span>
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-wave-300">
                  <Coffee className="h-3.5 w-3.5" />
                  <span>Freshly cooked on-site</span>
                </span>
              </div>

              <ul className="mt-4 divide-y divide-wave-300/15">
                {DINING_HIGHLIGHTS.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-1 py-3.5 text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span className="font-semibold text-foam">{item.name}</span>
                    <span className="text-xs text-wave-300 sm:text-right">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GsapReveal>

          <div className="min-w-0 space-y-6 lg:col-span-6">
            <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[24px]">
              <Photo
                slot="EVENING-01"
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="border-wave-300/20"
              />
            </GsapParallax>
            <GsapParallax yPercent={12} scaleFrom={1.06} className="rounded-[24px]">
              <Photo
                slot="FOOD-01"
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="border-wave-300/20"
              />
            </GsapParallax>
          </div>
        </div>
      </div>
    </section>
  );
}
