import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { PalmFrond } from "@/components/brand/PalmFrond";
import { Photo } from "@/components/media/Photo";
import { FARM_EXPERIENCES } from "@/content/site";

export function FarmSection() {
  return (
    <section id="farm" className="bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex items-start justify-between gap-6">
          <div>
            <FurrowRule />
            <h2 className="text-h2 mt-4 text-navy-700">On the farm</h2>
            <p className="mt-3 max-w-[58ch] text-base text-navy-900 sm:text-lg">
              Set between coconut palms and the Nandgaon shoreline — built for unhurried weekends
              with family and friends.
            </p>
          </div>
          <PalmFrond className="hidden h-20 w-24 shrink-0 sm:block" />
        </div>

        <div className="mt-12 space-y-14 sm:space-y-20">
          {FARM_EXPERIENCES.map((item, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={item.id}
                className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12"
              >
                <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
                  <Photo
                    slot={item.imageSlot}
                    sizes="(max-width: 768px) 100vw, 48vw"
                  />
                </div>
                <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
                  <p className="text-xs font-semibold tracking-wide text-palm-600 uppercase">
                    {item.detail}
                  </p>
                  <h3 className="text-h3 mt-2 text-navy-700">{item.title}</h3>
                  <p className="mt-3 max-w-[52ch] text-base text-navy-900 sm:text-lg">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
