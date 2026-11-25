import React from "react";

type BadgeVariant = "sample" | "verified" | "demo";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const BADGE_CLASSES: Record<BadgeVariant, string> = {
  sample: "border-chikoo/30 bg-sand text-chikoo",
  verified: "border-palm-600/30 bg-palm-500/15 text-palm-600",
  demo: "border-wave-600/30 bg-wave-300/30 text-navy-700",
};

export function Badge({ variant = "sample", children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide ${BADGE_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
