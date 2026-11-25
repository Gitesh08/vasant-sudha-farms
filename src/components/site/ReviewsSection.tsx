"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { GsapReveal } from "@/components/ui/GsapMotion";

const GUEST_REVIEWS = [
  {
    quote:
      "We booked the estate for a family day picnic with 25 relatives. The kids spent hours in the pool, elders relaxed comfortably under the coconut palms, and the authentic Konkan lunch was unforgettable.",
    author: "Prasad Kulkarni & family",
    occasion: "Family Day Picnic",
    from: "Thane",
  },
  {
    quote:
      "A peaceful two-night weekend in the Orchard Cottage. Waking up to ocean breezes, fresh morning tea on the verandah, and taking the 3-minute stroll down to Nandgaon Beach at sunset felt like a true retreat.",
    author: "Ananya & Siddharth",
    occasion: "Couple Weekend Stay",
    from: "Bandra, Mumbai",
  },
  {
    quote:
      "Hosted our sister's wedding reception for 650 guests on the open lawn. Seamless parking for over 80 cars, spotless air-conditioned bridal suites, and warm hospitality throughout.",
    author: "Dr. Nilesh Patil",
    occasion: "Wedding Reception",
    from: "Boisar",
  },
  {
    quote:
      "Celebrated my father's 50th birthday here with 80 close guests. The ground-floor hall and expansive lawn made it very accessible for elders, and the starlit courtyard dinner was magical.",
    author: "Rohan Deshmukh",
    occasion: "Milestone Celebration",
    from: "Borivali, Mumbai",
  },
  {
    quote:
      "Our alumni group of 18 visited for a weekend getaway. The freshwater pool was impeccably clean, lawn games were great fun, and having the entire secluded property to ourselves was unmatched.",
    author: "Kavita Rao & friends",
    occasion: "Group Reunion",
    from: "Navi Mumbai",
  },
  {
    quote:
      "Booked the Palm Villa Suites for our extended family holiday. In-room lockers, comfortable beds, attentive caretakers, and fresh coastal meals made everyone feel completely at home.",
    author: "The Mehta Family",
    occasion: "Extended Family Vacation",
    from: "Surat",
  },
] as const;

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % GUEST_REVIEWS.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + GUEST_REVIEWS.length) % GUEST_REVIEWS.length);
  const next = () => setIndex((i) => (i + 1) % GUEST_REVIEWS.length);

  const desktopCards = [
    GUEST_REVIEWS[index % GUEST_REVIEWS.length]!,
    GUEST_REVIEWS[(index + 1) % GUEST_REVIEWS.length]!,
    GUEST_REVIEWS[(index + 2) % GUEST_REVIEWS.length]!,
  ];

  const activeMobile = GUEST_REVIEWS[index]!;

  return (
    <section
      id="reviews"
      className="overflow-x-clip bg-foam py-16 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <GsapReveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <FurrowRule />
              <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
                Guest Stories
              </p>
              <h2 className="text-h2 mt-2 text-navy-700">Cherished moments on the estate</h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <p className="inline-flex items-center gap-2 text-xs font-semibold text-navy-700 sm:text-sm">
                <Star className="h-4 w-4 fill-sun-400 text-sun-500" />
                <span>Rated 4.6★ by guests &amp; host families</span>
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous review"
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-navy-700 transition-colors hover:bg-sand"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-navy-700 transition-colors hover:bg-sand"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </GsapReveal>

        {/* Mobile single-card auto-carousel */}
        <div className="mt-8 md:hidden" aria-live="polite">
          <figure className="flex min-h-[240px] flex-col justify-between rounded-[22px] border border-line bg-sand/50 p-6 transition-all duration-500">
            <div>
              <Quote className="h-5 w-5 text-wave-600/70" />
              <blockquote className="mt-3 text-sm leading-relaxed text-navy-900 sm:text-base">
                “{activeMobile.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-5 flex items-center justify-between border-t border-line/70 pt-3 text-xs font-semibold text-navy-700">
              <div>
                <span className="font-bold text-navy-900">{activeMobile.author}</span>
                <span className="text-navy-500"> · {activeMobile.from}</span>
              </div>
              <span className="rounded-full bg-foam px-2.5 py-0.5 text-palm-600">
                {activeMobile.occasion}
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Desktop 3-card sliding carousel */}
        <div className="mt-10 hidden grid-cols-3 gap-6 md:grid">
          {desktopCards.map((item) => (
            <figure
              key={item.author + item.occasion}
              className="flex flex-col justify-between rounded-[22px] border border-line bg-sand/40 p-6 transition-all duration-500 hover:border-wave-500/50 hover:bg-sand/60"
            >
              <div>
                <Quote className="h-5 w-5 text-wave-600/70" />
                <blockquote className="mt-3 text-sm leading-relaxed text-navy-900">
                  “{item.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between border-t border-line/70 pt-4 text-xs font-semibold text-navy-700">
                <div>
                  <span className="font-bold text-navy-900">{item.author}</span>
                  <p className="text-[11px] text-navy-500">{item.from}</p>
                </div>
                <span className="rounded-full border border-line/70 bg-foam px-2.5 py-0.5 text-[11px] font-semibold text-palm-600">
                  {item.occasion}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          className="mt-6 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Review slides"
        >
          {GUEST_REVIEWS.map((r, idx) => (
            <button
              key={r.author}
              type="button"
              role="tab"
              aria-selected={idx === index}
              aria-label={`Show review ${idx + 1}`}
              onClick={() => setIndex(idx)}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                idx === index ? "w-7 bg-sun-600" : "w-2 bg-line hover:bg-navy-500/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
