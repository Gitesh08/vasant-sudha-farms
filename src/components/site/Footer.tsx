import { ExternalLink, Instagram } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Wordmark } from "@/components/brand/Wordmark";
import { SITE_FACTS } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-foam pt-12 pb-24 sm:pb-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-[46ch] text-sm text-navy-500">{SITE_FACTS.address}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <FurrowRule className="mb-1" />
            <a
              href={SITE_FACTS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-wave-600 underline underline-offset-4 hover:text-navy-900"
            >
              <Instagram className="h-4 w-4" />
              <span>@{SITE_FACTS.instagramHandle}</span>
            </a>
            <a
              href={SITE_FACTS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-wave-600 underline underline-offset-4 hover:text-navy-900"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Directions on Google Maps</span>
            </a>
          </div>
        </div>

        <div className="mt-10 space-y-1 border-t border-line pt-6 text-xs text-navy-500">
          <p>
            Demo concept built for Vasant Sudha Farms. Sample room names, tariffs, and scene
            photos are placeholders until confirmed by the property.
          </p>
        </div>
      </div>
    </footer>
  );
}
