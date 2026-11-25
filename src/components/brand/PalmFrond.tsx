import React from "react";

interface PalmFrondProps {
  className?: string;
}

export function PalmFrond({ className = "" }: PalmFrondProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 78 C 36 48, 68 30, 108 20"
        stroke="#2E7D1F"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M34 56 C 24 40, 26 26, 36 16 M52 44 C 46 28, 52 16, 62 10 M72 34 C 70 20, 78 12, 88 8 M42 52 C 56 54, 68 62, 74 72 M62 40 C 76 42, 88 48, 96 58 M82 29 C 94 31, 104 36, 110 44"
        stroke="#4A9B2F"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
