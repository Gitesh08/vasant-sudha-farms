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
    value: "Short walk",
    note: "Direct coastal access away from crowded city beaches",
  },
  {
    icon: Trees,
    label: "Operating since",
    value: SITE_FACTS.operatingSince,
    note: "Established farm grounds with coconut and chikoo trees",
  },
  {
    icon: Clock,
    label: "From Mumbai",
    value: "~2 hours",
    note: "Western Railway to Boisar or an easy drive via NH 48",
  },
] as const;

export function StorySection() {
  return (
    <section id="story" className="overflow-x-clip bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <GsapReveal className="min-w-0 lg:col-span-6">
            <FurrowRule />
            <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
              Our story
            </p>
            <h2 className="text-h2 mt-2 text-navy-700">
              A quiet coastal farm, built for unhurried stays.
            </h2>
            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-navy-900 sm:text-lg">
              Set at House No. 638 near Nandgaon Beach in Boisar, Vasant Sudha Farms has been
              welcoming Mumbai families, friend groups, and weekend travellers since 2018.
            </p>
            <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-navy-900/90 sm:text-lg">
              Instead of high-rise hotel corridors, you wake up to coconut palms, a clean
              swimming pool in the courtyard, and the Arabian Sea just down the road.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-chikoo/20 pt-6 sm:grid-cols-3">
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
              <GsapParallax yPercent={12} scaleFrom={1.06} className="rounded-[20px]">
                <Photo slot="FARM-01" aspectOverride="4 / 5" sizes="(max-width: 768px) 100vw, 25vw" />
              </GsapParallax>
              <div className="sm:mt-10">
                <GsapParallax yPercent={16} scaleFrom={1.08} className="rounded-[20px]">
                  <Photo slot="BEACH-01" aspectOverride="4 / 5" sizes="(max-width: 768px) 100vw, 25vw" />
                </GsapParallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
