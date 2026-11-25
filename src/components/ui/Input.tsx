import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, id, className = "", ...props }: InputProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-semibold text-navy-700">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        className={`min-h-[44px] w-full rounded-[14px] border bg-foam px-3.5 py-2.5 text-base text-navy-900 placeholder:text-navy-500/70 transition-colors ${
          error
            ? "border-sun-600 bg-sand/50"
            : "border-line hover:border-wave-500 focus:border-wave-600"
        } ${className}`}
        {...props}
      />
      {hint && !error ? (
        <p id={hintId} className="text-xs text-navy-500">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="text-xs font-semibold text-sun-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
