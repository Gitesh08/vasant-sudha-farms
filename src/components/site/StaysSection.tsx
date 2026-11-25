import { ArrowRight, BedDouble, Calendar, Check, Users } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { Button } from "@/components/ui/Button";
import { GsapReveal, GsapStaggerGrid } from "@/components/ui/GsapMotion";
import { DEMO_STAYS } from "@/content/site";
import { formatRupees } from "@/lib/money";

interface StaysSectionProps {
  onSelectStay: (stayId: string) => void;
}

export function StaysSection({ onSelectStay }: StaysSectionProps) {
  return (
    <section id="stays" className="overflow-x-clip bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <GsapReveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <FurrowRule />
              <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
                Accommodation
              </p>
              <h2 className="text-h2 mt-2 text-navy-700">Stays at the farm</h2>
            </div>
            <p className="max-w-[44ch] text-sm text-navy-700">
              Villas, cottages, and garden rooms set around the pool and lawn.
            </p>
          </div>
        </GsapReveal>

        <GsapStaggerGrid className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3" stagger={0.1}>
          {DEMO_STAYS.map((stay) => (
            <article
              key={stay.id}
              className="flex w-full flex-col justify-between rounded-[20px] border border-chikoo/15 bg-foam p-4 transition-all duration-300 hover:-translate-y-1 hover:border-wave-500/60 sm:p-5"
            >
              <div>
                <Photo
                  slot={stay.imageSlot}
                  shapeOverride="arch"
                  aspectOverride="4 / 5"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <h3 className="text-h3 mt-5 text-navy-700">{stay.name}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-navy-500">
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-navy-700" />
                    {stay.bedrooms} {stay.bedrooms === 1 ? "bedroom" : "bedrooms"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-navy-700" />
                    Up to {stay.maxOccupancy} guests
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-navy-900 sm:text-base">
                  {stay.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {stay.amenities.map((a) => (
                    <li
                      key={a}
                      className="inline-flex items-center gap-1 rounded-full border border-line bg-sand/60 px-3 py-1 text-xs font-semibold text-navy-700"
                    >
                      <Check className="h-3 w-3 text-palm-600" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-line pt-4">
                <div className="flex items-baseline justify-between gap-2 text-sm">
                  <span className="text-navy-500">Weekday</span>
                  <span className="text-base font-bold tabular-nums text-navy-900">
                    {formatRupees(stay.rateWeekday)} / night
                  </span>
                </div>
                <div className="mt-1 flex items-baseline justify-between gap-2 text-sm">
                  <span className="text-navy-500">Fri–Sat</span>
                  <span className="font-semibold tabular-nums text-navy-700">
                    {formatRupees(stay.rateWeekend)} / night
                  </span>
                </div>
                <Button
                  variant="primary"
                  className="mt-4 w-full"
                  onClick={() => onSelectStay(stay.id)}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Check dates</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </GsapStaggerGrid>
      </div>
    </section>
  );
}
