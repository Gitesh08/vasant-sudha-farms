import Image from "next/image";
import React from "react";

interface WordmarkProps {
  variant?: "horizontal" | "stacked";
  tone?: "light" | "dark";
}

export function Wordmark({ variant = "horizontal", tone = "light" }: WordmarkProps) {
  const isStacked = variant === "stacked";
  const src = isStacked ? "/brand/logo-stacked.jpg" : "/brand/logo-horizontal.jpg";

  return (
    <span
      className={`inline-flex items-center select-none ${
        tone === "dark" ? "rounded-xl bg-foam px-2.5 py-1" : ""
      }`}
    >
      <Image
        src={src}
        alt="Vasant Sudha Farms"
        width={isStacked ? 120 : 184}
        height={isStacked ? 120 : 62}
        className={`h-auto object-contain ${
          isStacked ? "w-24 sm:w-28" : "w-36 sm:w-44"
        } ${tone === "light" ? "mix-blend-multiply" : ""}`}
        priority
      />
    </span>
  );
}
