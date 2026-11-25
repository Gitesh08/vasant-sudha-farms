"use client";

import React, { useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { Sheet } from "@/components/ui/Sheet";

interface NavProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { href: "#farm", label: "The farm" },
  { href: "#stays", label: "Stays" },
  { href: "#evenings", label: "Evenings & food" },
  { href: "#visit", label: "Plan your visit" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Nav({ onOpenBooking }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-foam/95 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="rounded-lg focus-visible:outline-offset-4">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-sm font-semibold text-navy-700 transition-colors hover:text-sun-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="sun" onClick={onOpenBooking} className="hidden sm:inline-flex">
            Check dates
          </Button>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-navy-700 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M3 6h14M3 10h14M3 14h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen} title="Vasant Sudha Farms">
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[48px] items-center rounded-[14px] px-3 text-lg font-semibold text-navy-900 hover:bg-sand"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="sun"
            className="mt-4 w-full"
            onClick={() => {
              setMenuOpen(false);
              onOpenBooking();
            }}
          >
            Check dates
          </Button>
        </nav>
      </Sheet>
    </header>
  );
}
