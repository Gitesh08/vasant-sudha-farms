"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface HeroProps {
  onOpenBooking: (mode?: "stay" | "picnic" | "event") => void;
}

const HERO_SLIDES = [
  {
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617591/hero-image-1_jowaea.jpg",
    alt: "Coconut palms and lush greens at Vasant Sudha Farms",
  },
  {
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617598/swimming-pool_gksjwr.jpg",
    alt: "Freshwater pool at Vasant Sudha Farms",
  },
  {
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617589/wedding-decor-image_ibeugl.jpg",
    alt: "Elegantly decorated lawn at Vasant Sudha Farms",
  },
  {
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617588/property-view-evening_oghuzz.jpg",
    alt: "Vasant Sudha Farms at golden hour",
  },
  {
    src: "https://res.cloudinary.com/db7h39kx9/image/upload/v1795617593/property-view-1_dchzx1.jpg",
    alt: "Open grounds and lawns at Vasant Sudha Farms",
  },
] as const;

export function Hero({ onOpenBooking }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-[100dvh] min-h-[640px] w-full flex-col justify-end overflow-hidden"
    >
      {/* Full-bleed background image slider covering behind navbar too */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              unoptimized
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Soft top gradient so navbar stays legible while trees show through */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 via-black/20 to-transparent"
        />

        {/* Bottom gradient so text has strong contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/85 via-black/45 to-transparent"
        />
      </div>

      {/* Hero content anchored towards bottom left */}
      <div className="relative z-10 w-full px-5 pb-10 sm:px-10 sm:pb-14 lg:px-16">
        <div className="max-w-[760px]">
          {/* Location eyebrow */}
          <p className="font-sans text-[11px] font-semibold tracking-[0.28em] text-white/60 uppercase mb-2 sm:mb-3">
            Nandgaon Beach, Boisar
          </p>

          {/* Brand title in Playfair Display */}
          <h1 className="font-serif font-normal leading-[1.05] text-white">
            <span className="block text-[2.5rem] sm:text-[3.75rem] lg:text-[5rem] drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
              Vasant Sudha Farms
            </span>
            <span className="block mt-1 text-[1.35rem] sm:text-[1.95rem] lg:text-[2.4rem] italic font-light text-white/85 drop-shadow">
              A place to truly unwind
            </span>
          </h1>

          {/* Short, honest copy */}
          <p className="mt-4 font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-[46ch]">
            Pool stays, shaded picnics, and open lawns for celebrations of every size.
          </p>

          {/* Action buttons */}
          <div className="mt-6 sm:mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpenBooking("stay")}
              className="inline-flex h-11 sm:h-12 items-center rounded-full bg-white px-7 font-sans text-xs font-semibold tracking-wider text-navy-900 shadow-lg transition-all duration-200 hover:bg-white/90 active:scale-95 cursor-pointer"
            >
              Plan a Visit
            </button>

            <a
              href="#experiences"
              className="inline-flex h-11 sm:h-12 items-center rounded-full border border-white/35 bg-white/10 px-7 font-sans text-xs font-semibold tracking-wider text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* Image slider dots on right bottom horizontally */}
      <div className="absolute right-5 sm:right-8 bottom-6 sm:bottom-8 z-10 flex flex-row items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentSlide(idx)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide
                ? "w-6 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
