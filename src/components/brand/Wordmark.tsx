import Image from "next/image";
import React from "react";

interface WordmarkProps {
  tone?: "light" | "dark" | "hero";
}

export function Wordmark({ tone = "light" }: WordmarkProps) {
  const isHero = tone === "hero";
  const src = isHero
    ? "/brand/vasant-sudha-logo-white.png"
    : "/brand/vasant-sudha-logo-retina.png";

  return (
    <span
      className={`inline-flex items-center select-none ${
        tone === "dark" ? "rounded-lg bg-foam px-2 py-0.5" : ""
      }`}
    >
      <Image
        src={src}
        alt="Vasant Sudha Farms"
        width={140}
        height={76}
        className="h-8 w-auto object-contain transition-opacity duration-300 sm:h-9"
        priority
      />
    </span>
  );
}
