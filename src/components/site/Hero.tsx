import { ArrowRight, Calendar, MapPin } from "lucide-react";
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
      className="relative overflow-x-clip bg-foam pt-8 pb-12 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <GsapHeroStage className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 lg:col-span-6">
          <div data-hero-stagger className="flex items-center gap-3">
            <FurrowRule />
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-navy-500 uppercase">
              <MapPin className="h-3.5 w-3.5 text-sun-600" />
              <span>Nandgaon Beach, Boisar</span>
            </span>
          </div>

          <h1 data-hero-stagger className="text-display-xl mt-6 text-navy-700">
            Comfort, close to the sea.
          </h1>

          <p
            data-hero-stagger
            className="mt-5 max-w-[44ch] text-base leading-relaxed text-navy-900 sm:text-xl"
          >
            A coastal farm stay set under coconut palms, a short walk from Nandgaon Beach and two
            hours north of Mumbai.
          </p>

          <p
            data-hero-stagger
            className="mt-3 font-script text-[28px] leading-tight text-wave-600 sm:text-[32px]"
          >
            Where comfort meets nature.
          </p>

          <div data-hero-stagger className="mt-8 flex flex-wrap items-center gap-5">
            <Button variant="sun" onClick={onOpenBooking}>
              <Calendar className="h-4 w-4" />
              <span>Check availability</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <a
              href="#story"
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-navy-700 underline decoration-wave-500 underline-offset-4 transition-colors hover:text-sun-600"
            >
              Explore the farm
            </a>
          </div>
        </div>

        <div
          data-hero-stagger
          className="mx-auto w-full max-w-[360px] min-w-0 sm:max-w-[420px] lg:col-span-6 lg:max-w-[460px]"
        >
          <SunArch showSunDisc>
            <GsapParallax yPercent={10} scaleFrom={1.06} className="rounded-t-[9999px] rounded-b-[20px]">
              <Photo
                slot="HERO-01"
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </GsapParallax>
          </SunArch>
        </div>
      </GsapHeroStage>
    </section>
  );
}
