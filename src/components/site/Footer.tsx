import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Wordmark } from "@/components/brand/Wordmark";
import { SITE_FACTS } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-foam pt-12 pb-24 sm:pb-12">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-[46ch] text-sm text-navy-500">
              {SITE_FACTS.address}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <FurrowRule className="mb-1" />
            <a
              href={SITE_FACTS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-wave-600 underline underline-offset-4 hover:text-navy-900"
            >
              Instagram @{SITE_FACTS.instagramHandle}
            </a>
            <a
              href={SITE_FACTS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-wave-600 underline underline-offset-4 hover:text-navy-900"
            >
              Directions on Google Maps
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs text-navy-500">
          <p>
            Demo concept built to show what a site for Vasant Sudha Farms could look like. Not the
            official website.
          </p>
        </div>
      </div>
    </footer>
  );
}
