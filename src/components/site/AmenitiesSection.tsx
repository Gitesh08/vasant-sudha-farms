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
    name: "Freshwater Swimming Pool",
    note: "Courtyard pool surrounded by coconut palms for relaxing dips and gatherings",
  },
  {
    icon: Trees,
    name: "Expansive Celebration Lawns",
    note: "Wide green lawns for shaded day picnics, family sports, and outdoor functions",
  },
  {
    icon: Users,
    name: "800-Guest Event Grounds",
    note: "Ground-floor banquet hall and lawn accommodating 800 seating and dining",
  },
  {
    icon: Car,
    name: "100+ Car & 300 Bike Parking",
    note: "Spacious dedicated parking within the estate perimeter with valet convenience",
  },
  {
    icon: BedDouble,
    name: "Boutique AC Suites & Cottages",
    note: "Air-conditioned accommodations with private verandas for family retreats",
  },
  {
    icon: Lock,
    name: "In-Room Secure Lockers",
    note: "Dedicated locker facilities inside each room for peace of mind",
  },
  {
    icon: UtensilsCrossed,
    name: "Farm-to-Table Konkan Dining",
    note: "Fresh coastal specialties, regional vegetarian thalis, and custom event menus",
  },
  {
    icon: Wifi,
    name: "Wi-Fi & 24/7 Caretaker",
    note: "High-speed wireless connectivity, on-site caretaker, and doctor on call",
  },
] as const;

export function AmenitiesSection() {
  return (
    <section id="amenities" className="overflow-x-clip bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <GsapReveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <FurrowRule />
              <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
                Estate Amenities
              </p>
              <h2 className="text-h2 mt-2 text-navy-700">Everything needed for unhurried comfort</h2>
            </div>
            <p className="max-w-[42ch] text-sm text-navy-700">
              Thoughtful infrastructure designed to host intimate family weekends, pool outings,
              and full-scale destination events.
            </p>
          </div>
        </GsapReveal>

        <GsapStaggerGrid
          className="mt-10 grid grid-cols-1 border-t border-l border-chikoo/20 bg-foam sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.04}
        >
          {AMENITIES.map(({ icon: Icon, name, note }) => (
            <div
              key={name}
              className="border-r border-b border-chikoo/20 p-5 transition-colors hover:bg-sand/40 sm:p-6"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sand text-sun-600">
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-700">{name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-navy-600 sm:text-sm">{note}</p>
            </div>
          ))}
        </GsapStaggerGrid>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[24px]">
            <Photo slot="POOL-01" sizes="(max-width: 768px) 100vw, 48vw" />
          </GsapParallax>
          <GsapParallax yPercent={12} scaleFrom={1.06} className="rounded-[24px]">
            <Photo slot="KIDS-01" sizes="(max-width: 768px) 100vw, 48vw" />
          </GsapParallax>
        </div>
      </div>
    </section>
  );
}
