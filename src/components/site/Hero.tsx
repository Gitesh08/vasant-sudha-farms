import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { SunArch } from "@/components/brand/SunArch";
import { Photo } from "@/components/media/Photo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-foam pt-10 pb-14 sm:pt-16 sm:pb-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 lg:grid-cols-12 lg:gap-12">
        <div className="relative lg:col-span-7">
          {/* Single subtle V/S monogram echo behind the hero headline */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 -left-3 font-display text-[140px] leading-none font-semibold text-wave-300/25 select-none sm:text-[200px]"
          >
            VS
          </span>

          <div className="relative">
            <div className="flex items-center gap-3">
              <FurrowRule />
              <span className="text-sm font-semibold tracking-wide text-navy-500">
                Nandgaon Beach, Boisar · Since 2018
              </span>
            </div>

            <h1 className="text-display-xl mt-5 text-navy-700">
              Comfort, close to the sea.
            </h1>

            <p className="mt-4 max-w-[48ch] text-lg text-navy-900 sm:text-xl">
              A coastal farm stay at Nandgaon Beach, Palghar — roughly two hours north of Mumbai.
              <span className="ml-2 inline-block font-script text-[28px] leading-none text-wave-600 align-baseline">
                Where comfort meets nature.
              </span>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-base font-bold tabular-nums text-navy-900">
                Stays from ₹1,200 a night
              </span>
              <Badge variant="sample">Sample tariff</Badge>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="sun" onClick={onOpenBooking}>
                Check dates
              </Button>
              <a
                href="#stays"
                className="inline-flex min-h-[44px] items-center rounded-full border-2 border-navy-700 px-6 py-2.5 text-base font-semibold text-navy-700 transition-colors hover:bg-navy-700 hover:text-foam"
              >
                See stays
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
          <SunArch showSunDisc>
            <Photo
              slot="HERO-01"
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </SunArch>
        </div>
      </div>
    </section>
  );
}
