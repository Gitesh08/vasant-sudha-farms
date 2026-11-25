"use client";

import { Calendar, Menu } from "lucide-react";
import React, { useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { Sheet } from "@/components/ui/Sheet";

interface NavProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { href: "#story", label: "Story" },
  { href: "#amenities", label: "Amenities" },
  { href: "#stays", label: "Stays" },
  { href: "#events", label: "Events" },
  { href: "#food", label: "Food" },
  { href: "#visit", label: "Visit" },
] as const;

export function Nav({ onOpenBooking }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-foam/95 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-1.5 sm:px-6">
        <a href="#top" className="rounded-lg focus-visible:outline-offset-4">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-sun-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="sun"
            onClick={onOpenBooking}
            className="hidden min-h-[40px] px-4 py-1.5 text-sm sm:inline-flex"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Check dates</span>
          </Button>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-navy-700 transition-colors hover:bg-sand lg:hidden"
          >
            <Menu className="h-5 w-5" />
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
            <Calendar className="h-4 w-4" />
            <span>Check dates</span>
          </Button>
        </nav>
      </Sheet>
    </header>
  );
}
