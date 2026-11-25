import { ArrowRight, BedDouble, Calendar, Check, Users } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { Button } from "@/components/ui/Button";
import { GsapReveal, GsapStaggerGrid } from "@/components/ui/GsapMotion";
import { DEMO_STAYS } from "@/content/site";

interface StaysSectionProps {
  onSelectStay: (stayId: string) => void;
}

export function StaysSection({ onSelectStay }: StaysSectionProps) {
  return (
    <section id="stays" className="overflow-x-clip bg-foam py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <GsapReveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <FurrowRule />
              <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
                Accommodations &amp; Stays
              </p>
              <h2 className="text-h2 mt-2 text-navy-700">Secluded living under the palms</h2>
            </div>
            <p className="max-w-[46ch] text-sm text-navy-600 sm:text-base">
              Boutique villas, shaded garden cottages, and courtyard suites equipped with modern
              climate control and private secure lockers.
            </p>
          </div>
        </GsapReveal>

        <GsapStaggerGrid
          className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3"
          stagger={0.1}
        >
          {DEMO_STAYS.map((stay) => (
            <article
              key={stay.id}
              className="group flex w-full flex-col justify-between rounded-[24px] border border-line bg-sand/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-wave-500/60 hover:bg-sand/60 hover:shadow-lg sm:p-6"
            >
              <div>
                <Photo
                  slot={stay.imageSlot}
                  aspectOverride="4 / 3"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="rounded-2xl"
                />

                <span className="mt-5 inline-block text-[11px] font-bold tracking-widest text-palm-600 uppercase">
                  {stay.tier}
                </span>

                <h3 className="mt-1 font-display text-2xl font-semibold text-navy-700">
                  {stay.name}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-navy-500">
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-3.5 w-3.5 text-navy-700" />
                    {stay.bedrooms} {stay.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-navy-700" />
                    Up to {stay.maxOccupancy} Guests
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-navy-900/90 sm:text-base">
                  {stay.summary}
                </p>

                <ul className="mt-5 space-y-2 border-t border-line/60 pt-4">
                  {stay.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs font-medium text-navy-700"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-palm-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-line pt-5">
                <Button
                  variant="primary"
                  className="w-full text-xs font-semibold tracking-wider uppercase"
                  onClick={() => onSelectStay(stay.id)}
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Check dates &amp; reserve</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </GsapStaggerGrid>
      </div>
    </section>
  );
}
