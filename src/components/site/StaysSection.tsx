import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DEMO_STAYS } from "@/content/site";
import { formatRupees } from "@/lib/money";

interface StaysSectionProps {
  onSelectStay: (stayId: string) => void;
}

export function StaysSection({ onSelectStay }: StaysSectionProps) {
  return (
    <section id="stays" className="bg-foam py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <FurrowRule />
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h2 className="text-h2 text-navy-700">Stays</h2>
              <Badge variant="sample">Sample room types & rates</Badge>
            </div>
            <p className="mt-3 max-w-[58ch] text-base text-navy-900 sm:text-lg">
              Placeholder room types and tariffs for the demo. Exact room names and seasonal rates
              update once confirmed by the owner.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {DEMO_STAYS.map((stay) => (
            <article
              key={stay.id}
              className="flex flex-col justify-between rounded-[20px] border border-line bg-sand/55 p-5"
            >
              <div>
                <Photo
                  slot={stay.imageSlot}
                  shapeOverride="arch"
                  aspectOverride="4 / 5"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="mt-5 flex items-start justify-between gap-2">
                  <h3 className="text-h3 text-navy-700">{stay.name}</h3>
                  <Badge variant="sample">Sample</Badge>
                </div>
                <p className="mt-1 text-sm font-semibold text-navy-500">
                  {stay.bedrooms} {stay.bedrooms === 1 ? "bedroom" : "bedrooms"} · Up to{" "}
                  {stay.maxOccupancy} guests
                </p>
                <p className="mt-3 text-base text-navy-900">{stay.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {stay.amenities.map((a) => (
                    <li
                      key={a}
                      className="rounded-full border border-line bg-foam px-3 py-1 text-xs font-semibold text-navy-700"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-line pt-4">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-navy-500">Weekday from</span>
                  <span className="text-lg font-bold tabular-nums text-navy-900">
                    {formatRupees(stay.rateWeekday)} / night
                  </span>
                </div>
                <div className="mt-1 flex items-baseline justify-between text-sm">
                  <span className="text-navy-500">Fri–Sat from</span>
                  <span className="font-semibold tabular-nums text-navy-700">
                    {formatRupees(stay.rateWeekend)} / night
                  </span>
                </div>
                <Button
                  variant="primary"
                  className="mt-4 w-full"
                  onClick={() => onSelectStay(stay.id)}
                >
                  Check dates
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
