import { ArrowRight, Calendar, Compass, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/Button";
import { GsapHeroStage, GsapParallax } from "@/components/ui/GsapMotion";
import { getImageSlot } from "@/content/images";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const heroImage = getImageSlot("HERO-01");

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-navy-950 text-foam sm:min-h-screen"
    >
      {/* Cinematic Full-Bleed Image Backdrop */}
      <div className="absolute inset-0 z-0">
        <GsapParallax
          yPercent={12}
          scaleFrom={1.08}
          className="relative h-full w-full"
        >
          {heroImage.src ? (
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : (
            <div className="h-full w-full bg-navy-900" />
          )}
        </GsapParallax>

        {/* Multi-layered cinematic gradient overlays */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/75"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-navy-950/30 backdrop-brightness-95"
        />
      </div>

      {/* Main Hero Content */}
      <GsapHeroStage className="relative z-20 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="max-w-[800px]">
          <div data-hero-stagger className="inline-flex items-center gap-2 rounded-full border border-foam/20 bg-navy-950/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-sun-300 uppercase backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-sun-400" />
            <span>House No. 638 · Nandgaon Beach, Boisar</span>
          </div>

          <h1
            data-hero-stagger
            className="text-display-xl mt-6 max-w-[18ch] font-normal tracking-tight text-foam"
          >
            A coastal estate under the palms.
          </h1>

          <p
            data-hero-stagger
            className="mt-6 max-w-[52ch] text-base font-light leading-relaxed text-foam/90 sm:text-xl"
          >
            Seaside cottages, a freshwater pool, and open green grounds for unhurried weekend
            stays, shaded day picnics, and starlit gatherings of up to 800 guests.
          </p>

          <div data-hero-stagger className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <Button
              variant="sun"
              onClick={onOpenBooking}
              className="px-7 py-3 text-xs font-semibold tracking-wider uppercase shadow-xl shadow-sun-600/25 sm:text-sm"
            >
              <Calendar className="h-4 w-4" />
              <span>Plan your stay or event</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <a
              href="#estate"
              className="inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold text-foam/90 underline decoration-foam/30 underline-offset-4 transition-colors hover:text-sun-300 hover:decoration-sun-300 sm:text-sm"
            >
              <Compass className="h-4 w-4 text-sun-400" />
              <span>Discover the estate</span>
            </a>
          </div>
        </div>
      </GsapHeroStage>

      {/* Floating Bottom Metadata Bar */}
      <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pb-8 sm:px-6 sm:pb-12">
        <div className="grid grid-cols-3 gap-3 rounded-2xl border border-foam/15 bg-navy-950/60 p-4 text-foam backdrop-blur-md sm:gap-6 sm:p-5">
          <div className="border-r border-foam/10 pr-2 sm:pr-4">
            <p className="text-[10px] font-semibold tracking-widest text-sun-400 uppercase sm:text-xs">
              Shoreline
            </p>
            <p className="mt-1 font-display text-base font-semibold text-foam sm:text-2xl">
              3 min walk
            </p>
            <p className="mt-0.5 hidden text-[11px] text-foam/70 sm:block">
              Steps to Nandgaon Beach
            </p>
          </div>
          <div className="border-r border-foam/10 pr-2 sm:pr-4">
            <p className="text-[10px] font-semibold tracking-widest text-sun-400 uppercase sm:text-xs">
              The Grounds
            </p>
            <p className="mt-1 font-display text-base font-semibold text-foam sm:text-2xl">
              Pool &amp; Orchards
            </p>
            <p className="mt-0.5 hidden text-[11px] text-foam/70 sm:block">
              Coconut groves &amp; lawns
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-widest text-sun-400 uppercase sm:text-xs">
              Celebrations
            </p>
            <p className="mt-1 font-display text-base font-semibold text-foam sm:text-2xl">
              Up to 800
            </p>
            <p className="mt-0.5 hidden text-[11px] text-foam/70 sm:block">
              Lawn, hall &amp; parking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
