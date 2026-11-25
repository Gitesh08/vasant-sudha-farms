import { ExternalLink, Instagram } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Wordmark } from "@/components/brand/Wordmark";
import { SITE_FACTS } from "@/content/site";

const FOOTER_LINKS = [
  { href: "#farm", label: "The Farm" },
  { href: "#experiences", label: "Experiences" },
  { href: "#stays", label: "Accommodations" },
  { href: "#celebrations", label: "Celebrations" },
  { href: "#amenities", label: "Amenities" },
  { href: "#dining", label: "Dining" },
  { href: "#reviews", label: "Guest Stories" },
  { href: "#visit", label: "Location & FAQ" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-foam pt-14 pb-24 sm:pb-14">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12">
          <div className="sm:col-span-5">
            <Wordmark />
            <p className="mt-4 max-w-[42ch] text-xs leading-relaxed text-navy-600 sm:text-sm">
              {SITE_FACTS.address}
            </p>
            <p className="mt-2 text-xs font-semibold text-palm-600">
              Welcoming guests and celebrations since {SITE_FACTS.operatingSince}.
            </p>
          </div>

          <div className="sm:col-span-4">
            <p className="text-xs font-semibold tracking-widest text-navy-500 uppercase">
              Explore
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-xs font-medium text-navy-700">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-sun-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 text-xs font-semibold sm:col-span-3">
            <FurrowRule className="mb-1" />
            <a
              href={SITE_FACTS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-navy-700 transition-colors hover:text-sun-600"
            >
              <Instagram className="h-4 w-4 text-sun-600" />
              <span>@{SITE_FACTS.instagramHandle}</span>
            </a>
            <a
              href={SITE_FACTS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-navy-700 transition-colors hover:text-sun-600"
            >
              <ExternalLink className="h-4 w-4 text-wave-600" />
              <span>Google Maps Directions</span>
            </a>
            <a
              href={SITE_FACTS.mandapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-navy-700 transition-colors hover:text-sun-600"
            >
              <ExternalLink className="h-4 w-4 text-wave-600" />
              <span>Mandap.com Listing</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-line/80 pt-6 text-xs text-navy-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Vasant Sudha Farms. All rights reserved.</p>
          <p className="text-[11px] text-navy-400">
            Nandgaon Beach, Boisar, Palghar · Coastal Stays, Day Picnics &amp; Celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}
