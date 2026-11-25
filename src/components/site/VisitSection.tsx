import { ArrowRight, Car, Clock, MapPin, Phone, Sun, TrainFront, Waves } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";
import { GsapParallax, GsapReveal, GsapStaggerGrid } from "@/components/ui/GsapMotion";
import { FAQS, SITE_FACTS } from "@/content/site";

const TIMELINE = [
  { icon: Clock, time: "9:30 AM / 2:00 PM", title: "Arrival & Welcome", detail: "Check in for day picnic or stay" },
  { icon: Waves, time: "Afternoon", title: "Freshwater Pool & Orchards", detail: "Swim, lawn games, and coconut shade" },
  { icon: Sun, time: "Sunset", title: "Nandgaon Beach Walk", detail: "Gentle 3-minute stroll to the sea" },
  { icon: Clock, time: "Evening / 12:00 PM", title: "Starlit Dinner & Departure", detail: "Farm-fresh Konkan feasts" },
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
          <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
            Location &amp; Connectivity
          </p>
          <h2 className="text-h2 mt-2 text-navy-700">Plan your journey to the coast</h2>
          <p className="mt-3 max-w-[60ch] text-base text-navy-900 sm:text-lg">
            {SITE_FACTS.address}
          </p>
        </GsapReveal>

        {/* Coastal day rhythm */}
        <GsapStaggerGrid
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {TIMELINE.map(({ icon: Icon, time, title, detail }) => (
            <div
              key={time + title}
              className="h-full rounded-[22px] border border-chikoo/20 bg-foam p-5 transition-colors hover:border-wave-500/50"
            >
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-sun-600">
                <Icon className="h-4 w-4" />
                <span>{time}</span>
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-navy-700">{title}</p>
              <p className="mt-1 text-xs text-navy-500 sm:text-sm">{detail}</p>
            </div>
          ))}
        </GsapStaggerGrid>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12">
          <GsapReveal className="min-w-0 space-y-5 lg:col-span-5">
            <GsapParallax yPercent={10} scaleFrom={1.05} className="rounded-[24px]">
              <Photo slot="LOC-01" sizes="(max-width: 1024px) 100vw, 40vw" />
            </GsapParallax>

            <div className="rounded-[22px] border border-chikoo/20 bg-foam p-5 sm:p-6">
              <h3 className="inline-flex items-center gap-2 font-display text-xl font-semibold text-navy-700">
                <MapPin className="h-5 w-5 text-sun-600" />
                <span>Getting here</span>
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-navy-700 sm:text-sm">
                {SITE_FACTS.address}
              </p>

              <ul className="mt-4 space-y-3 text-xs leading-relaxed text-navy-700 sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <TrainFront className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" />
                  <span>
                    <strong className="font-semibold text-navy-900">By train:</strong> Boisar
                    Station on the Western Railway Line (approx. 90 km from Mumbai), followed by a
                    quick 20-minute auto-rickshaw ride directly to Nandgaon Beach.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Car className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" />
                  <span>
                    <strong className="font-semibold text-navy-900">By car:</strong> Around 95 to
                    110 km from Mumbai or Thane via National Highway 48 (approx. 2.5 hours of smooth
                    highway drive).
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={SITE_FACTS.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-navy-700 px-5 py-2 text-xs font-semibold text-foam transition-colors hover:bg-navy-900"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`https://wa.me/${SITE_FACTS.demoWhatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-line bg-sand px-4 py-2 text-xs font-semibold tabular-nums text-navy-700 transition-colors hover:bg-sand/70"
                >
                  <Phone className="h-3.5 w-3.5 text-palm-600" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </GsapReveal>

          <GsapReveal delay={0.08} className="min-w-0 lg:col-span-7">
            <div id="faq">
              <h3 className="text-h3 mb-4 text-navy-700">Frequently Asked Questions</h3>
              <Accordion items={faqEntries} />
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  );
}
