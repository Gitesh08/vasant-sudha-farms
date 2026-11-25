"use client";

import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { BookingSheet } from "@/components/booking/BookingSheet";
import { WaveDivider } from "@/components/brand/WaveDivider";
import { AmenitiesSection } from "@/components/site/AmenitiesSection";
import { EventsSection } from "@/components/site/EventsSection";
import { ExperiencesSection } from "@/components/site/ExperiencesSection";
import { FoodSection } from "@/components/site/FoodSection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { StaysSection } from "@/components/site/StaysSection";
import { StorySection } from "@/components/site/StorySection";
import { VisitSection } from "@/components/site/VisitSection";
import { Button } from "@/components/ui/Button";
import { ScrollProgress } from "@/components/ui/Reveal";
import { DEMO_STAYS } from "@/content/site";

export function SpaShell() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedStayId, setSelectedStayId] = useState(DEMO_STAYS[0]!.id);
  const [bookingMode, setBookingMode] = useState<"stay" | "picnic" | "event">("stay");

  function openBooking(mode: "stay" | "picnic" | "event" = "stay", stayId?: string) {
    if (stayId) setSelectedStayId(stayId);
    setBookingMode(mode);
    setBookingOpen(true);
  }

  return (
    <>
      <ScrollProgress />
      <Nav onOpenBooking={() => openBooking("stay")} />

      <main className="overflow-x-clip">
        <Hero onOpenBooking={() => openBooking("stay")} />
        <WaveDivider variant="calm" className="bg-foam" />
        <StorySection />
        <ExperiencesSection onPlanExperience={() => openBooking("picnic")} />
        <AmenitiesSection />
        <WaveDivider variant="swell" className="bg-sand" />
        <StaysSection onSelectStay={(id) => openBooking("stay", id)} />
        <EventsSection onEnquire={() => openBooking("event")} />
        <FoodSection />
        <ReviewsSection />
        <WaveDivider variant="ripple" className="bg-foam" />
        <VisitSection />
      </main>

      <Footer />

      {/* Sleek sticky mobile bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line/80 bg-foam/95 px-4 py-2 shadow-[0_-4px_16px_rgba(11,34,54,0.08)] backdrop-blur-md sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 leading-tight">
            <p className="truncate text-xs font-bold text-navy-900">Vasant Sudha Farms</p>
            <p className="truncate text-[11px] font-semibold text-navy-500">
              Nandgaon Beach, Boisar
            </p>
          </div>
          <Button
            variant="sun"
            onClick={() => openBooking("stay")}
            className="min-h-[38px] shrink-0 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Enquire / Book</span>
          </Button>
        </div>
      </div>

      <BookingSheet
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        selectedStayId={selectedStayId}
        onSelectStayId={setSelectedStayId}
        defaultMode={bookingMode}
      />
    </>
  );
}
