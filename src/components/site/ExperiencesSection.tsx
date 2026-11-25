import { ArrowRight, Sun, Trees, Users } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Button } from "@/components/ui/Button";
import { GsapReveal, GsapStaggerGrid } from "@/components/ui/GsapMotion";
import { EXPERIENCE_PILLARS } from "@/content/site";

interface ExperiencesProps {
  onPlanExperience: () => void;
}

const EXPERIENCE_ICONS = [Sun, Trees, Users] as const;

export function ExperiencesSection({ onPlanExperience }: ExperiencesProps) {
  return (
    <section id="experiences" className="overflow-x-clip bg-sand/60 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <GsapReveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <FurrowRule />
              <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
                Curated Experiences
              </p>
              <h2 className="text-h2 mt-2 text-navy-700">Designed for every occasion</h2>
            </div>
            <p className="max-w-[44ch] text-sm text-navy-700">
              From spontaneous weekend day picnics to multi-day celebrations and grand weddings,
              the estate adapts naturally to your party size.
            </p>
          </div>
        </GsapReveal>

        <GsapStaggerGrid className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-3" stagger={0.1}>
          {EXPERIENCE_PILLARS.map((exp, idx) => {
            const Icon = EXPERIENCE_ICONS[idx % EXPERIENCE_ICONS.length]!;
            return (
              <div
                key={exp.title}
                className="flex flex-col justify-between rounded-[22px] border border-chikoo/20 bg-foam p-6 transition-all duration-300 hover:-translate-y-1 hover:border-wave-500/50 hover:shadow-md sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sand text-sun-600">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="rounded-full border border-line bg-sand px-3 py-1 text-[11px] font-semibold text-navy-700 uppercase tracking-wider">
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy-700">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-palm-600">{exp.subtitle}</p>

                  <p className="mt-4 text-sm leading-relaxed text-navy-900/90">{exp.description}</p>

                  <ul className="mt-6 space-y-2 border-t border-line/70 pt-4 text-xs font-medium text-navy-700">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-wave-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <Button
                    variant="secondary"
                    className="w-full text-xs font-semibold tracking-wider uppercase"
                    onClick={onPlanExperience}
                  >
                    <span>Enquire for this</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </GsapStaggerGrid>
      </div>
    </section>
  );
}
