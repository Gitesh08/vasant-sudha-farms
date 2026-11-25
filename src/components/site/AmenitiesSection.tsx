import {
  Briefcase,
  Car,
  Shirt,
  Smile,
  Stethoscope,
  UtensilsCrossed,
  Waves,
  Wifi,
} from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { GsapParallax, GsapReveal, GsapStaggerGrid } from "@/components/ui/GsapMotion";

const AMENITIES = [
  { icon: Waves, name: "Swimming pool", note: "Outdoor pool surrounded by palms" },
  { icon: Smile, name: "Kids play area", note: "Dedicated lawn & play space" },
  { icon: UtensilsCrossed, name: "Kitchenette", note: "Home-style meals & tea" },
  { icon: Car, name: "Free parking", note: "On-site vehicle parking" },
  { icon: Wifi, name: "WiFi", note: "Connected common & stay areas" },
  { icon: Shirt, name: "Laundry", note: "Available for longer stays" },
  { icon: Briefcase, name: "Luggage storage", note: "Early arrival & late departure" },
  { icon: Stethoscope, name: "Doctor on call", note: "Peace of mind for families" },
] as const;

export function AmenitiesSection() {
  return (
    <section id="amenities" className="overflow-x-clip bg-foam py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <GsapReveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <FurrowRule />
              <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
                Amenities
              </p>
              <h2 className="text-h2 mt-2 text-navy-700">Everything you need for an easy stay</h2>
            </div>
            <p className="max-w-[42ch] text-sm text-navy-500">
              Listed facilities available on the property for families, couples, and weekend groups.
            </p>
          </div>
        </GsapReveal>

        <GsapStaggerGrid className="mt-10 grid grid-cols-2 border-t border-l border-line sm:mt-12 lg:grid-cols-4" stagger={0.05}>
          {AMENITIES.map(({ icon: Icon, name, note }) => (
            <div
              key={name}
              className="border-r border-b border-line p-5 transition-colors hover:bg-sand/50 sm:p-6"
            >
              <Icon className="h-5 w-5 text-navy-700" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-700">{name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-navy-500 sm:text-sm">{note}</p>
            </div>
          ))}
        </GsapStaggerGrid>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[20px]">
            <Photo slot="POOL-01" sizes="(max-width: 768px) 100vw, 48vw" />
          </GsapParallax>
          <GsapParallax yPercent={14} scaleFrom={1.06} className="rounded-[20px]">
            <Photo slot="KIDS-01" sizes="(max-width: 768px) 100vw, 48vw" />
          </GsapParallax>
        </div>
      </div>
    </section>
  );
}
