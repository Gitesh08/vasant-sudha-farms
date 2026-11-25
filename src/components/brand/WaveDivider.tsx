import React from "react";

export type WaveVariant = "calm" | "swell" | "ripple";

interface WaveDividerProps {
  variant?: WaveVariant;
  className?: string;
}

const PATHS: Record<WaveVariant, { top: string; bottom: string }> = {
  calm: {
    top: "M0 18 C 240 6, 480 30, 720 18 C 960 6, 1200 30, 1440 18",
    bottom: "M80 28 C 320 20, 560 36, 800 28 C 1040 20, 1240 34, 1360 28",
  },
  swell: {
    top: "M0 22 C 200 4, 460 34, 740 14 C 1020 -2, 1240 30, 1440 16",
    bottom: "M60 31 C 300 18, 560 38, 820 24 C 1060 12, 1260 36, 1380 26",
  },
  ripple: {
    top: "M0 16 C 180 26, 360 8, 540 18 C 720 28, 900 8, 1080 18 C 1260 28, 1360 12, 1440 18",
    bottom: "M90 27 C 270 34, 450 20, 630 28 C 810 35, 990 20, 1170 28 C 1290 32, 1350 24, 1390 27",
  },
};

export function WaveDivider({ variant = "calm", className = "" }: WaveDividerProps) {
  const { top, bottom } = PATHS[variant];

  return (
    <div className={`w-full overflow-hidden py-2 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 40"
        fill="none"
        preserveAspectRatio="none"
        className="h-7 w-full sm:h-9"
      >
        <path
          d={top}
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="text-navy-700/80"
        />
        <path
          d={bottom}
          stroke="#1B8DBE"
          strokeWidth="1.75"
          strokeLinecap="round"
          className="opacity-85"
        />
      </svg>
    </div>
  );
}
