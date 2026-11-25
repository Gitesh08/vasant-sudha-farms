import Image from "next/image";
import React from "react";

interface WordmarkProps {
  tone?: "light" | "dark" | "hero";
}

export function Wordmark({ tone = "light" }: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-center select-none ${
        tone === "dark" ? "rounded-lg bg-foam px-2 py-0.5" : ""
      }`}
    >
      <Image
        src="/brand/vasant-sudha-logo.svg"
        alt="Vasant Sudha Farms"
        width={140}
        height={48}
        className={`h-7 w-auto object-contain transition-all duration-300 sm:h-8 ${
          tone === "hero" ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" : ""
        }`}
        priority
      />
    </span>
  );
}
