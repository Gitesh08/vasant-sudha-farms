import React from "react";

interface FurrowRuleProps {
  /** Number of active/filled lines (1..3). Defaults to all 3 filled. */
  activeCount?: 1 | 2 | 3;
  className?: string;
}

export function FurrowRule({ activeCount = 3, className = "" }: FurrowRuleProps) {
  const widths = [44, 32, 20];

  return (
    <div className={`inline-flex flex-col gap-1.5 ${className}`} aria-hidden="true">
      {widths.map((w, idx) => {
        const active = idx < activeCount;
        return (
          <span
            key={w}
            style={{ width: `${w}px` }}
            className={`block h-[3px] rounded-full transition-colors duration-300 ${
              active ? "bg-furrow-500" : "bg-line"
            }`}
          />
        );
      })}
    </div>
  );
}
