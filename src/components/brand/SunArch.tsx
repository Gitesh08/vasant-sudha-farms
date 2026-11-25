import React from "react";

interface SunArchProps {
  children: React.ReactNode;
  showSunDisc?: boolean;
  className?: string;
}

export function SunArch({ children, showSunDisc = false, className = "" }: SunArchProps) {
  return (
    <div className={`relative ${className}`}>
      {showSunDisc ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 -right-4 h-36 w-36 rounded-t-full bg-sun-400/90 sm:-top-8 sm:-right-6 sm:h-44 sm:w-44"
        />
      ) : null}
      <div className="relative overflow-hidden rounded-t-[9999px] rounded-b-[20px]">
        {children}
      </div>
    </div>
  );
}
