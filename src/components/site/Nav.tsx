"use client";

import { Calendar, Menu, Phone } from "lucide-react";
import React, { useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { Sheet } from "@/components/ui/Sheet";
import { SITE_FACTS } from "@/content/site";

interface NavProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { href: "#estate", label: "The Estate" },
  { href: "#experiences", label: "Experiences" },
  { href: "#stays", label: "Stays" },
  { href: "#celebrations", label: "Celebrations" },
  { href: "#amenities", label: "Amenities" },
  { href: "#dining", label: "Dining" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
] as const;

export function Nav({ onOpenBooking }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-foam/90 backdrop-blur-md transition-all duration-200">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <a
          href="#top"
          className="flex items-center rounded-lg transition-opacity hover:opacity-90 focus-visible:outline-offset-4"
          aria-label="Vasant Sudha Farms Home"
        >
          <Wordmark />
        </a>

        <nav aria-label="Primary Navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wider text-navy-700/90 uppercase transition-colors hover:text-sun-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button
            variant="sun"
            onClick={onOpenBooking}
            className="hidden min-h-[38px] px-4 py-1.5 text-xs font-semibold tracking-wider uppercase sm:inline-flex"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Enquire / Book</span>
          </Button>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-navy-700 transition-colors hover:bg-sand lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen} title="Vasant Sudha Farms">
        <div className="flex flex-col justify-between py-2">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-semibold text-navy-900 transition-colors hover:bg-sand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 border-t border-line pt-4">
            <Button
              variant="sun"
              className="w-full text-xs font-semibold tracking-wider uppercase"
              onClick={() => {
                setMenuOpen(false);
                onOpenBooking();
              }}
            >
              <Calendar className="h-4 w-4" />
              <span>Enquire / Check availability</span>
            </Button>

            <a
              href={`https://wa.me/${SITE_FACTS.demoWhatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex min-h-[42px] w-full items-center justify-center gap-2 rounded-full border border-line bg-sand text-xs font-semibold text-navy-700 transition-colors hover:bg-sand/70"
            >
              <Phone className="h-3.5 w-3.5 text-palm-600" />
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </Sheet>
    </header>
  );
}
