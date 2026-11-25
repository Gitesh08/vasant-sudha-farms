"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { GsapReveal } from "@/components/ui/GsapMotion";

const GUEST_REVIEWS = [
  {
    quote:
      "Clean, comfortable rooms and a short walk to Nandgaon Beach. Peaceful enough for a proper weekend break from Mumbai.",
    author: "Mumbai family stay",
    tag: "Beach & rooms",
  },
  {
    quote:
      "The swimming pool kept the kids busy all afternoon, and the home-style food and tea on the terrace felt warm and unhurried.",
    author: "Weekend group",
    tag: "Pool & food",
  },
  {
    quote:
      "Helpful staff, easy parking, and plenty of green shade under the coconut palms. Simple, honest hospitality.",
    author: "Couple getaway",
    tag: "Hospitality",
  },
  {
    quote:
      "Just two hours from Mumbai via Boisar. Waking up to palm trees and walking down to an uncrowded beach was the highlight.",
    author: "Thane family",
    tag: "Location",
  },
  {
    quote:
      "Great space for a family birthday weekend. Kids had a safe play area while elders relaxed by the pool.",
    author: "Family celebration",
    tag: "Family friendly",
  },
  {
    quote:
      "Fresh Konkan meals, tidy cottages, and calm evenings under the courtyard lights. We will definitely be back.",
    author: "Borivali group",
    tag: "Food & stay",
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

  // Desktop shows a sliding 3-card window; mobile shows 1 card at a time.
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
                Guest notes
              </p>
              <h2 className="text-h2 mt-2 text-navy-700">What guests value most</h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700">
                <Star className="h-4 w-4 fill-sun-400 text-sun-500" />
                <span>4.3–4.5★ across public listings</span>
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous review"
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-navy-700 transition-colors hover:bg-sand"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-navy-700 transition-colors hover:bg-sand"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </GsapReveal>

        {/* Mobile single-card auto-carousel */}
        <div className="mt-8 md:hidden" aria-live="polite">
          <figure className="flex min-h-[220px] flex-col justify-between rounded-[20px] border border-line bg-sand/55 p-6 transition-all duration-500">
            <div>
              <Quote className="h-5 w-5 text-wave-600/70" />
              <blockquote className="mt-4 text-base leading-relaxed text-navy-900">
                “{activeMobile.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs font-semibold text-navy-500">
              <span>{activeMobile.author}</span>
              <span className="text-palm-600">{activeMobile.tag}</span>
            </figcaption>
          </figure>
        </div>

        {/* Desktop 3-card sliding carousel */}
        <div className="mt-10 hidden grid-cols-3 gap-6 md:grid">
          {desktopCards.map((item) => (
            <figure
              key={item.author + item.tag}
              className="flex flex-col justify-between rounded-[20px] border border-line bg-sand/50 p-6 transition-all duration-500"
            >
              <div>
                <Quote className="h-5 w-5 text-wave-600/70" />
                <blockquote className="mt-4 text-base leading-relaxed text-navy-900">
                  “{item.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs font-semibold text-navy-500">
                <span>{item.author}</span>
                <span className="text-palm-600">{item.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Carousel dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Review slides">
          {GUEST_REVIEWS.map((r, idx) => (
            <button
              key={r.author}
              type="button"
              role="tab"
              aria-selected={idx === index}
              aria-label={`Show review ${idx + 1}`}
              onClick={() => setIndex(idx)}
              className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                idx === index ? "w-7 bg-sun-600" : "w-2.5 bg-line hover:bg-navy-500/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
