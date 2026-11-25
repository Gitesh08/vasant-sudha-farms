import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";
import { FAQS, SITE_FACTS } from "@/content/site";

const TIMELINE = [
  { time: "2:00 PM", title: "Check-in & fresh coconut", detail: "Listed check-in time" },
  { time: "4:00 PM", title: "Pool & orchard walk", detail: "Shade under the palms" },
  { time: "6:00 PM", title: "Nandgaon Beach at sunset", detail: "Short walk down the road" },
  { time: "12:00 PM", title: "Check-out next day", detail: "Listed check-out time" },
] as const;

export function VisitSection() {
  const faqEntries: AccordionEntry[] = FAQS.map((f) => ({
    id: f.id,
    title: f.question,
    body: f.answer,
    badge: f.status === "to-confirm" ? "To confirm" : undefined,
  }));

  return (
    <section id="visit" className="bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <FurrowRule />
        <h2 className="text-h2 mt-4 text-navy-700">Plan your visit</h2>
        <p className="mt-3 max-w-[58ch] text-base text-navy-900 sm:text-lg">
          {SITE_FACTS.address}
        </p>

        {/* Simple 4-step coastal day rhythm */}
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((step) => (
            <li
              key={step.time}
              className="rounded-[20px] border border-chikoo/20 bg-foam p-5"
            >
              <p className="text-sm font-bold tabular-nums text-sun-600">{step.time}</p>
              <p className="mt-1 font-display text-lg font-semibold text-navy-700">
                {step.title}
              </p>
              <p className="mt-1 text-sm text-navy-500">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <Photo slot="LOC-01" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="rounded-[20px] border border-chikoo/20 bg-foam p-5">
              <h3 className="font-display text-xl font-semibold text-navy-700">
                Location & contact
              </h3>
              <p className="mt-2 text-sm text-navy-900">{SITE_FACTS.address}</p>
              <p className="mt-1 text-xs font-semibold tabular-nums text-navy-500">
                Coordinates: {SITE_FACTS.coordinates.lat}, {SITE_FACTS.coordinates.lng}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={SITE_FACTS.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center rounded-full bg-navy-700 px-5 py-2 text-sm font-semibold text-foam transition-colors hover:bg-navy-900"
                >
                  Open in Google Maps
                </a>
                <span className="inline-flex min-h-[44px] items-center rounded-full border border-line bg-sand px-4 py-2 text-sm font-semibold tabular-nums text-navy-700">
                  WhatsApp (demo): {SITE_FACTS.demoWhatsapp}
                </span>
              </div>
            </div>
          </div>

          <div id="faq" className="lg:col-span-7">
            <h3 className="text-h3 mb-4 text-navy-700">Questions we get a lot</h3>
            <Accordion items={faqEntries} />
          </div>
        </div>
      </div>
    </section>
  );
}
