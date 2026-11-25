import {
  BedDouble,
  Car,
  Lock,
  Trees,
  Users,
  UtensilsCrossed,
  Waves,
  Wifi,
} from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { GsapParallax, GsapReveal, GsapStaggerGrid } from "@/components/ui/GsapMotion";

const AMENITIES = [
  {
    icon: Waves,
    name: "Freshwater Pool",
    note: "Clean swimming pool shaded by coconut palms for refreshing dips",
  },
  {
    icon: Trees,
    name: "Open Green Lawns",
    note: "Spacious lawns for day picnics, sports, and outdoor relaxation",
  },
  {
    icon: Users,
    name: "800 Guest Capacity",
    note: "Open lawn and indoor banquet hall hosting gatherings of any scale",
  },
  {
    icon: Car,
    name: "100+ Car Parking",
    note: "Secure on-property parking with space for 100 cars and 300 bikes",
  },
  {
    icon: BedDouble,
    name: "AC Cottages & Villas",
    note: "Air-conditioned rooms with private sit-outs for overnight stays",
  },
  {
    icon: Lock,
    name: "In-Room Lockers",
    note: "Dedicated private locker in each room for peace of mind",
  },
  {
    icon: UtensilsCrossed,
    name: "Konkan Farm Dining",
    note: "Fresh coastal seafood, vegetarian thalis, and custom group menus",
  },
  {
    icon: Wifi,
    name: "Wi-Fi & Caretaker",
    note: "High-speed internet, on-site caretakers, and doctor on call",
  },
] as const;

export function AmenitiesSection() {
  return (
    <section id="amenities" className="overflow-x-clip bg-sand py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <GsapReveal>
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <FurrowRule />
              <p className="mt-3 text-xs font-semibold tracking-widest text-palm-600 uppercase">
                Farm Amenities
              </p>
              <h2 className="text-h2 mt-1 text-navy-900">Everything needed for unhurried comfort</h2>
            </div>
            <p className="max-w-[42ch] text-xs sm:text-sm text-navy-700">
              Thoughtful infrastructure for family weekends, pool day picnics, and celebrations.
            </p>
          </div>
        </GsapReveal>

        {/* Always 2 columns on mobile, 4 columns on large screens */}
        <GsapStaggerGrid
          className="mt-8 grid grid-cols-2 border-t border-l border-line bg-foam sm:mt-10 lg:grid-cols-4"
          stagger={0.04}
        >
          {AMENITIES.map(({ icon: Icon, name, note }) => (
            <div
              key={name}
              className="border-r border-b border-line p-3.5 transition-colors hover:bg-sand/40 sm:p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sand text-sun-600 sm:h-9 sm:w-9">
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <h3 className="mt-2 text-xs font-bold text-navy-900 sm:text-base">{name}</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-navy-600 sm:text-xs">{note}</p>
            </div>
          ))}
        </GsapStaggerGrid>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <GsapParallax yPercent={8} scaleFrom={1.04} className="rounded-[22px]">
            <Photo slot="POOL-01" sizes="(max-width: 768px) 100vw, 48vw" />
          </GsapParallax>
          <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[22px]">
            <Photo slot="POOL-02" sizes="(max-width: 768px) 100vw, 48vw" />
          </GsapParallax>
        </div>
      </div>
    </section>
  );
}
