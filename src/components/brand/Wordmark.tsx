import React from "react";

interface WordmarkProps {
  variant?: "horizontal" | "compact";
  tone?: "light" | "dark";
}

export function Wordmark({ variant = "horizontal", tone = "light" }: WordmarkProps) {
  const isDark = tone === "dark";

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      {/* Compact sun + twin wave emblem */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M8 21a10 10 0 0 1 20 0H8Z" fill="#F59B23" />
        <path
          d="M4 24.5c4.5-2.2 9.5-2.2 14 0s9.5 2.2 14 0"
          stroke={isDark ? "#8CCBE3" : "#0E4A72"}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M7 29.5c3.8-1.5 7.2-1.5 11 0s7.2 1.5 11 0"
          stroke="#1B8DBE"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${
            isDark ? "text-foam" : "text-navy-700"
          }`}
        >
          <span>Vasant </span>
          <span className="text-sun-600">Sudha</span>
          {variant === "horizontal" ? (
            <span className="ml-1.5 font-script text-xl font-normal text-wave-600 sm:text-2xl">
              Farms
            </span>
          ) : null}
        </span>
        {variant === "horizontal" ? (
          <span
            className={`mt-0.5 text-[11px] font-semibold tracking-wide uppercase ${
              isDark ? "text-wave-300" : "text-navy-500"
            }`}
          >
            Nandgaon Beach · Boisar
          </span>
        ) : null}
      </span>
    </span>
  );
}
