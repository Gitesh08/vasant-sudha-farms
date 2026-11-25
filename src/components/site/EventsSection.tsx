import { ArrowRight, Calendar, Heart, Music, Users, Utensils } from "lucide-react";
import React from "react";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Photo } from "@/components/media/Photo";
import { Button } from "@/components/ui/Button";
import { GsapParallax, GsapReveal, GsapStaggerGrid } from "@/components/ui/GsapMotion";

interface EventsSectionProps {
  onEnquire: () => void;
}

const EVENT_TYPES = [
  {
    icon: Users,
    title: "Birthday gatherings",
    detail: "Poolside afternoons, lawn seating, and family dinners under the palms.",
  },
  {
    icon: Heart,
    title: "Engagements & weddings",
    detail: "Intimate coastal ceremonies and pre-wedding functions in the open garden.",
  },
  {
    icon: Utensils,
    title: "Group catering & stays",
    detail: "On-site cottages and villas so close family can stay together.",
  },
  {
    icon: Music,
    title: "Custom setups",
    detail: "Flexible lawn layout, lighting, and timings confirmed directly with the host.",
  },
] as const;

export function EventsSection({ onEnquire }: EventsSectionProps) {
  return (
    <section id="events" className="overflow-x-clip bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <GsapParallax yPercent={10} scaleFrom={1.06} className="rounded-[20px]">
              <Photo
                slot="EVENT-01"
                aspectOverride="4 / 5"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </GsapParallax>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <GsapReveal>
              <FurrowRule />
              <p className="mt-4 text-xs font-semibold tracking-widest text-palm-600 uppercase">
                Celebrations
              </p>
              <h2 className="text-h2 mt-2 text-navy-700">
                Birthdays, engagements, and intimate weddings
              </h2>
              <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-navy-900 sm:text-lg">
                Open green lawns, poolside courtyard space, and rooms on the same grounds make
                Vasant Sudha Farms an easy setting for family milestones near Mumbai.
              </p>
            </GsapReveal>

            <GsapStaggerGrid
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              stagger={0.07}
            >
              {EVENT_TYPES.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="rounded-[18px] border border-chikoo/15 bg-foam p-5 transition-colors hover:border-wave-500/50"
                >
                  <Icon className="h-5 w-5 text-sun-600" strokeWidth={1.7} />
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy-700">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-900/80">{detail}</p>
                </div>
              ))}
            </GsapStaggerGrid>

            <GsapReveal delay={0.12} className="mt-8">
              <Button variant="primary" onClick={onEnquire}>
                <Calendar className="h-4 w-4" />
                <span>Enquire for an event</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </GsapReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
