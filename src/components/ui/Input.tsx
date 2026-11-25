import { Calendar } from "lucide-react";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, id, className = "", type, ...props }: InputProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;
  const isDate = type === "date";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-semibold text-navy-700">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={inputId}
          type={type}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={`min-h-[44px] w-full rounded-[14px] border bg-foam px-3.5 py-2.5 text-base text-navy-900 placeholder:text-navy-500/70 transition-colors ${
            isDate
              ? "pr-10 cursor-pointer appearance-none [-webkit-appearance:none] [&::-webkit-date-and-time-value]:text-left [&::-webkit-date-and-time-value]:m-0 [&::-webkit-date-and-time-value]:min-h-[1.4em] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"
              : ""
          } ${
            error
              ? "border-sun-600 bg-sand/50"
              : "border-line hover:border-wave-500 focus:border-wave-600"
          } ${className}`}
          {...props}
        />
        {isDate ? (
          <Calendar
            aria-hidden="true"
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sun-600"
          />
        ) : null}
      </div>
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
