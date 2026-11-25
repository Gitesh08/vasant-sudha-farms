import { Clock, MapPin, Trees } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { GsapParallax, GsapReveal } from "@/components/ui/GsapMotion";
import { SITE_FACTS } from "@/content/site";

const STANDOUTS = [
  {
    icon: MapPin,
    label: "Beach Walk",
    value: "3 mins",
    note: "Shoreline sunsets steps away",
  },
  {
    icon: Trees,
    label: "Established",
    value: SITE_FACTS.operatingSince,
    note: "Mature coconut orchards",
  },
  {
    icon: Clock,
    label: "From Mumbai",
    value: "~2 hrs",
    note: "Easy scenic drive or train",
  },
] as const;

export function StorySection() {
  return (
    <section id="farm" className="overflow-x-clip bg-foam py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Main content column */}
          <GsapReveal className="min-w-0 lg:col-span-6">
            <FurrowRule />
            <p className="mt-3 text-xs font-semibold tracking-widest text-palm-600 uppercase">
              The Farm
            </p>
            <h2 className="text-h2 mt-1 text-navy-900">
              A coastal farm where life slows down
            </h2>

            {/* Mobile-first photo layout: shown right below heading on mobile, hidden on desktop */}
            <div className="my-6 grid grid-cols-2 gap-3 lg:hidden">
              <div className="overflow-hidden rounded-2xl">
                <Photo
                  slot="FARM-01"
                  aspectOverride="4 / 5"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="overflow-hidden rounded-2xl mt-3">
                <Photo
                  slot="BEACH-01"
                  aspectOverride="4 / 5"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-navy-800 sm:text-base">
              Sheltered by coconut palms at House No. 638 near Nandgaon Beach, Vasant Sudha Farms pairs
              expansive green lawns with cosy cottages, welcoming families, day picnics, and celebrations
              since 2018.
            </p>

            {/* Standout stats: 3 columns on mobile and desktop */}
            <dl className="mt-6 grid grid-cols-3 gap-2.5 border-t border-line pt-6 sm:mt-8 sm:gap-6">
              {STANDOUTS.map(({ icon: Icon, label, value, note }) => (
                <div key={label} className="min-w-0">
                  <dt className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider text-navy-500 uppercase sm:text-xs">
                    <Icon className="h-3 w-3 text-sun-600 sm:h-3.5 sm:w-3.5" />
                    <span className="truncate">{label}</span>
                  </dt>
                  <dd className="mt-1 font-serif text-lg font-normal text-navy-900 sm:text-2xl">
                    {value}
                  </dd>
                  <dd className="mt-0.5 text-[11px] leading-tight text-navy-600 sm:text-xs sm:leading-relaxed">
                    {note}
                  </dd>
                </div>
              ))}
            </dl>
          </GsapReveal>

          {/* Desktop photos: side-by-side staggered with parallax */}
          <div className="hidden min-w-0 lg:col-span-6 lg:block">
            <div className="grid grid-cols-2 gap-5">
              <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[24px]">
                <Photo
                  slot="FARM-01"
                  aspectOverride="4 / 5"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </GsapParallax>
              <div className="mt-10">
                <GsapParallax yPercent={14} scaleFrom={1.07} className="rounded-[24px]">
                  <Photo
                    slot="BEACH-01"
                    aspectOverride="4 / 5"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </GsapParallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
