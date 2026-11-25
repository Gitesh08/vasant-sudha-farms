"use client";

import { Menu, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Sheet } from "@/components/ui/Sheet";
import { DEMO_MODE, SITE_FACTS } from "@/content/site";

interface NavProps {
  onOpenBooking: () => void;
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#farm", label: "The Farm" },
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "border-b border-line/80 bg-white/95 shadow-sm backdrop-blur-md text-navy-900"
          : "border-b-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white"
      }`}
    >
      {DEMO_MODE ? (
        <div
          role="note"
          className={`px-4 py-1 text-center text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors ${
            isScrolled
              ? "border-b border-line/60 bg-sand/80 text-navy-600"
              : "bg-transparent text-white/60"
          }`}
        >
          Demo concept &middot; Not the official website
        </div>
      ) : null}

      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <a
          href="#top"
          className="flex items-center rounded-lg transition-opacity hover:opacity-90 focus-visible:outline-offset-4"
          aria-label="Vasant Sudha Farms Home"
        >
          <Wordmark tone={isScrolled ? "light" : "hero"} />
        </a>

        <nav aria-label="Primary Navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-wider uppercase transition-colors ${
                isScrolled
                  ? "text-navy-700/90 hover:text-sun-600"
                  : "text-white/85 hover:text-white drop-shadow"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Authentic WhatsApp green button with neutral shadow (no neon glow) */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex min-h-[38px] cursor-pointer items-center gap-2 rounded-full bg-[#25D366] px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#20ba59] active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4 fill-white shrink-0" />
            <span>Enquire / Book</span>
          </button>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
            className={`inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-colors lg:hidden ${
              isScrolled
                ? "border-line text-navy-700 hover:bg-sand"
                : "border-white/30 bg-black/20 text-white hover:bg-white/20 backdrop-blur-sm"
            }`}
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

          <div className="mt-6 border-t border-line pt-4 flex flex-col gap-3">
            <button
              type="button"
              className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase shadow-sm transition-all hover:bg-[#20ba59]"
              onClick={() => {
                setMenuOpen(false);
                onOpenBooking();
              }}
            >
              <WhatsAppIcon className="h-4 w-4 fill-white" />
              <span>Enquire / Check Availability</span>
            </button>

            <a
              href={`https://wa.me/${SITE_FACTS.demoWhatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[42px] w-full items-center justify-center gap-2 rounded-full border border-line bg-sand text-xs font-semibold text-navy-700 transition-colors hover:bg-sand/70"
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
