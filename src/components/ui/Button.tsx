import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "sun";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-700 text-foam hover:bg-navy-900 active:bg-navy-900 disabled:bg-navy-500/40",
  sun: "bg-sun-600 text-foam hover:bg-navy-900 active:bg-navy-900 disabled:bg-sun-600/40",
  secondary:
    "border-2 border-sun-600 bg-transparent text-sun-600 hover:bg-sun-600 hover:text-foam active:bg-sun-600",
  ghost:
    "bg-transparent text-navy-700 hover:bg-wave-300/25 active:bg-wave-300/40",
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`group inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-2.5 text-base font-semibold transition-colors duration-200 disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
