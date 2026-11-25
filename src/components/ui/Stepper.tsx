import React from "react";

interface StepperProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (next: number) => void;
}

export function Stepper({ label, value, min, max, onChange }: StepperProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[14px] border border-line bg-foam px-3.5 py-2">
      <span className="text-sm font-semibold text-navy-900">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-lg font-bold text-navy-700 transition-colors hover:bg-sand disabled:cursor-not-allowed disabled:opacity-40"
        >
          −
        </button>
        <span className="min-w-[2ch] text-center text-base font-bold tabular-nums text-navy-900">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`Increase ${label}`}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-lg font-bold text-navy-700 transition-colors hover:bg-sand disabled:cursor-not-allowed disabled:opacity-40"
        >
          +
        </button>
      </div>
    </div>
  );
}
