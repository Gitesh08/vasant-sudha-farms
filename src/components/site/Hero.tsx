import { ArrowRight, Calendar, Compass, MapPin } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { SunArch } from "@/components/brand/SunArch";
import { Photo } from "@/components/media/Photo";
import { Button } from "@/components/ui/Button";
import { GsapHeroStage, GsapParallax } from "@/components/ui/GsapMotion";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-x-clip bg-foam pt-8 pb-14 sm:pt-16 sm:pb-22 lg:pt-20 lg:pb-28"
    >
      <GsapHeroStage className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 lg:col-span-6">
          <div data-hero-stagger className="flex items-center gap-3">
            <FurrowRule />
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-navy-500 uppercase">
              <MapPin className="h-3.5 w-3.5 text-sun-600" />
              <span>Nandgaon Beach, Boisar</span>
            </span>
          </div>

          <h1 data-hero-stagger className="text-display-xl mt-6 text-navy-700">
            A coastal estate under the palms.
          </h1>

          <p
            data-hero-stagger
            className="mt-5 max-w-[48ch] text-base leading-relaxed text-navy-900 sm:text-xl"
          >
            Seaside cottages, a freshwater pool, and open green grounds for unhurried weekend
            stays, shaded day picnics, and gatherings of up to 800 guests.
          </p>

          <div data-hero-stagger className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-navy-700">
            <span className="inline-flex items-center rounded-full border border-line bg-sand px-3 py-1">
              Shaded Day Picnics
            </span>
            <span className="inline-flex items-center rounded-full border border-line bg-sand px-3 py-1">
              Private Villa Stays
            </span>
            <span className="inline-flex items-center rounded-full border border-line bg-sand px-3 py-1">
              Milestone Celebrations &amp; Weddings
            </span>
          </div>

          <dl
            data-hero-stagger
            className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-5"
          >
            <div>
              <dt className="text-[11px] font-semibold tracking-wider text-navy-500 uppercase">
                Shoreline
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-navy-700 sm:text-2xl">
                3 min walk
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold tracking-wider text-navy-500 uppercase">
                Estate Grounds
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-navy-700 sm:text-2xl">
                Pool &amp; Lawn
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold tracking-wider text-navy-500 uppercase">
                Celebrations
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-navy-700 sm:text-2xl">
                Up to 800
              </dd>
            </div>
          </dl>

          <div data-hero-stagger className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <Button variant="sun" onClick={onOpenBooking} className="px-6 py-2.5">
              <Calendar className="h-4 w-4" />
              <span>Plan your stay or event</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <a
              href="#estate"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-navy-700 underline decoration-wave-500 underline-offset-4 transition-colors hover:text-sun-600"
            >
              <Compass className="h-4 w-4 text-sun-600" />
              <span>Discover the estate</span>
            </a>
          </div>
        </div>

        <div
          data-hero-stagger
          className="mx-auto w-full max-w-[360px] min-w-0 sm:max-w-[420px] lg:col-span-6 lg:max-w-[470px]"
        >
          <SunArch showSunDisc>
            <GsapParallax
              yPercent={10}
              scaleFrom={1.06}
              className="rounded-t-[9999px] rounded-b-[24px]"
            >
              <Photo
                slot="HERO-01"
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
            </GsapParallax>
          </SunArch>
        </div>
      </GsapHeroStage>
    </section>
  );
}
