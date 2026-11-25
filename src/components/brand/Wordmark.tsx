import Image from "next/image";
import React from "react";

interface WordmarkProps {
  tone?: "light" | "dark";
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
        width={150}
        height={90}
        className="h-9 w-auto object-contain sm:h-11"
        priority
      />
    </span>
  );
}
