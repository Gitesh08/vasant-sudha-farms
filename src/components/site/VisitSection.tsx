import { ArrowRight, Car, Clock, MapPin, Phone, Sun, TrainFront, Waves } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";
import { GsapParallax, GsapReveal, GsapStaggerGrid } from "@/components/ui/GsapMotion";
import { FAQS, SITE_FACTS } from "@/content/site";

const TIMELINE = [
  { icon: Clock, time: "2:00 PM", title: "Check-in & welcome", detail: "Settle in under the palms" },
  { icon: Waves, time: "4:00 PM", title: "Pool & orchard walk", detail: "Afternoon dip and shade" },
  { icon: Sun, time: "6:00 PM", title: "Nandgaon Beach sunset", detail: "Short walk down the road" },
  { icon: Clock, time: "12:00 PM", title: "Next-day check-out", detail: "Unhurried morning tea" },
] as const;

export function VisitSection() {
  const faqEntries: AccordionEntry[] = FAQS.map((f) => ({
    id: f.id,
    title: f.question,
    body: f.answer,
  }));

  return (
    <section id="visit" className="overflow-x-clip bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <GsapReveal>
          <FurrowRule />
          <h2 className="text-h2 mt-4 text-navy-700">Plan your visit</h2>
          <p className="mt-3 max-w-[60ch] text-base text-navy-900 sm:text-lg">
            {SITE_FACTS.address}
          </p>
        </GsapReveal>

        {/* Simple 4-step coastal day rhythm */}
        <GsapStaggerGrid className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {TIMELINE.map(({ icon: Icon, time, title, detail }) => (
            <div
              key={time + title}
              className="h-full rounded-[20px] border border-chikoo/20 bg-foam p-5 transition-colors hover:border-wave-500/50"
            >
              <p className="inline-flex items-center gap-1.5 text-sm font-bold tabular-nums text-sun-600">
                <Icon className="h-4 w-4" />
                <span>{time}</span>
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-navy-700">{title}</p>
              <p className="mt-1 text-sm text-navy-500">{detail}</p>
            </div>
          ))}
        </GsapStaggerGrid>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12">
          <GsapReveal className="min-w-0 space-y-5 lg:col-span-5">
            <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[20px]">
              <Photo slot="LOC-01" sizes="(max-width: 1024px) 100vw, 40vw" />
            </GsapParallax>
            <div className="rounded-[20px] border border-chikoo/20 bg-foam p-5 sm:p-6">
              <h3 className="inline-flex items-center gap-2 font-display text-xl font-semibold text-navy-700">
                <MapPin className="h-5 w-5 text-sun-600" />
                <span>Getting here</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900">{SITE_FACTS.address}</p>
              <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-navy-700">
                <li className="flex items-start gap-2">
                  <TrainFront className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" />
                  <span>
                    <strong className="font-semibold">By train:</strong> Boisar Station (Western
                    Line, ~90–100 km from Mumbai), then ~10 km (~20–25 min) west by auto.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Car className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" />
                  <span>
                    <strong className="font-semibold">By road:</strong> ~95–110 km via NH 48
                    (~2.5–3 hrs from Mumbai).
                  </span>
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={SITE_FACTS.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-navy-700 px-5 py-2 text-sm font-semibold text-foam transition-colors hover:bg-navy-900"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <span className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line bg-sand px-4 py-2 text-sm font-semibold tabular-nums text-navy-700">
                  <Phone className="h-4 w-4 text-palm-600" />
                  <span>{SITE_FACTS.demoWhatsapp}</span>
                </span>
              </div>
            </div>
          </GsapReveal>

          <GsapReveal delay={0.08} className="min-w-0 lg:col-span-7">
            <div id="faq">
              <h3 className="text-h3 mb-4 text-navy-700">Questions we get a lot</h3>
              <Accordion items={faqEntries} />
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  );
}
