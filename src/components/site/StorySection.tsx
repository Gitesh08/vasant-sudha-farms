import { Clock, MapPin, Trees } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { GsapParallax, GsapReveal } from "@/components/ui/GsapMotion";
import { SITE_FACTS } from "@/content/site";

const STANDOUTS = [
  {
    icon: MapPin,
    label: "Nandgaon Beach",
    value: "3 min walk",
    note: "Quiet shoreline sunsets and sea breeze steps from our gates",
  },
  {
    icon: Trees,
    label: "Established",
    value: SITE_FACTS.operatingSince,
    note: "Mature estate grounds shaded by coconut and chikoo orchards",
  },
  {
    icon: Clock,
    label: "From Mumbai",
    value: "~2 hours",
    note: "Western Railway to Boisar or an easy scenic drive via NH 48",
  },
] as const;

export function StorySection() {
  return (
    <section id="estate" className="overflow-x-clip bg-foam py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <GsapReveal className="min-w-0 lg:col-span-6">
            <FurrowRule />
            <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
              The Estate
            </p>
            <h2 className="text-h2 mt-2 text-navy-700">
              Where coastal quiet meets generous open grounds.
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-navy-900 sm:text-lg">
              Located at House No. 638 beside Nandgaon Beach in Boisar, Vasant Sudha Farms has
              welcomed travellers and celebrations since 2018. Surrounded by flourishing coconut
              and chikoo groves, the estate balances wide open lawns with secluded, private corners.
            </p>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-navy-900/90 sm:text-lg">
              Whether you arrive as a couple seeking seaside calm, a family gathering for a shaded
              pool day picnic, or host families orchestrating a grand wedding for hundreds, the
              property provides rare privacy and natural elegance.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
              {STANDOUTS.map(({ icon: Icon, label, value, note }) => (
                <div key={label}>
                  <dt className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-navy-500 uppercase">
                    <Icon className="h-3.5 w-3.5 text-sun-600" />
                    <span>{label}</span>
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-navy-700">
                    {value}
                  </dd>
                  <dd className="mt-1 text-xs leading-relaxed text-navy-900/80">{note}</dd>
                </div>
              ))}
            </dl>
          </GsapReveal>

          <div className="min-w-0 lg:col-span-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[24px]">
                <Photo
                  slot="FARM-01"
                  aspectOverride="4 / 5"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </GsapParallax>
              <div className="sm:mt-10">
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
