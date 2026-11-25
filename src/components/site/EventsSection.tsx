import { ArrowRight, BedDouble, Calendar, Car, Heart, Sparkles, Users, UtensilsCrossed } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { Button } from "@/components/ui/Button";
import { GsapParallax, GsapReveal, GsapStaggerGrid } from "@/components/ui/GsapMotion";

interface EventsSectionProps {
  onEnquire: () => void;
}

const CELEBRATION_FEATURES = [
  {
    icon: Users,
    title: "800-Guest Capacity",
    detail: "Sprawling open lawn and ground-floor indoor banquet hall for 800 seating and dining.",
  },
  {
    icon: Heart,
    title: "Destination Weddings",
    detail: "Mandap ceremonies under the sky, haldi by the pool, and sangeet beneath glowing palms.",
  },
  {
    icon: Car,
    title: "100+ Car & 300 Bike Parking",
    detail: "Generous on-property parking space ensuring hassle-free guest arrival and valet access.",
  },
  {
    icon: BedDouble,
    title: "Bridal & Guest Stays",
    detail: "Air-conditioned rooms with private lockers for bridal prep and immediate family stay.",
  },
  {
    icon: UtensilsCrossed,
    title: "Banqueting & Kitchenette",
    detail: "Dedicated setup for full catering teams, live counters, and traditional festive spreads.",
  },
  {
    icon: Sparkles,
    title: "Flexible Timings & Decor",
    detail: "Open layout supporting custom stage production, floral arches, and ambient night lighting.",
  },
] as const;

export function EventsSection({ onEnquire }: EventsSectionProps) {
  return (
    <section id="celebrations" className="overflow-x-clip bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[24px]">
              <Photo
                slot="EVENT-01"
                aspectOverride="4 / 5"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </GsapParallax>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <GsapReveal>
              <FurrowRule />
              <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
                Celebrations &amp; Banquets
              </p>
              <h2 className="text-h2 mt-2 text-navy-700">
                Grand coastal celebrations, held with effortless grace.
              </h2>
              <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-navy-900 sm:text-lg">
                From milestone 50th birthdays and poolside sangeet evenings to full destination
                weddings for 800 guests, Vasant Sudha Farms provides the expansive infrastructure,
                green lawns, and bridal suites needed for an unforgettable occasion.
              </p>
            </GsapReveal>

            <GsapStaggerGrid
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              stagger={0.06}
            >
              {CELEBRATION_FEATURES.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="rounded-[18px] border border-chikoo/15 bg-foam p-5 transition-colors hover:border-wave-500/50"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sand text-sun-600">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-navy-700">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-navy-900/80 sm:text-sm">
                    {detail}
                  </p>
                </div>
              ))}
            </GsapStaggerGrid>

            <GsapReveal delay={0.12} className="mt-8">
              <Button variant="sun" onClick={onEnquire} className="px-6 py-2.5">
                <Calendar className="h-4 w-4" />
                <span>Check dates for your celebration</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </GsapReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
