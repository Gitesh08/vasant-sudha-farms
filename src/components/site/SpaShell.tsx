"use client";

import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { BookingSheet } from "@/components/booking/BookingSheet";
import { WaveDivider } from "@/components/brand/WaveDivider";
import { AmenitiesSection } from "@/components/site/AmenitiesSection";
import { EventsSection } from "@/components/site/EventsSection";
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

  function openBookingForStay(stayId?: string) {
    if (stayId) setSelectedStayId(stayId);
    setBookingOpen(true);
  }

  return (
    <>
      <ScrollProgress />
      <Nav onOpenBooking={() => openBookingForStay()} />

      <main className="overflow-x-clip">
        <Hero onOpenBooking={() => openBookingForStay()} />
        <WaveDivider variant="calm" className="bg-foam" />
        <StorySection />
        <AmenitiesSection />
        <WaveDivider variant="swell" className="bg-foam" />
        <StaysSection onSelectStay={(id) => openBookingForStay(id)} />
        <FoodSection />
        <ReviewsSection />
        <EventsSection onEnquire={() => openBookingForStay()} />
        <WaveDivider variant="ripple" className="bg-sand" />
        <VisitSection />
      </main>

      <Footer />

      {/* Sticky mobile availability bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-foam/95 px-4 py-2 shadow-[0_-4px_16px_rgba(11,34,54,0.08)] sm:hidden">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 leading-tight">
            <p className="truncate text-xs font-bold text-navy-900">Vasant Sudha Farms</p>
            <p className="truncate text-[11px] font-semibold text-navy-500">
              Nandgaon Beach · Boisar
            </p>
          </div>
          <Button
            variant="sun"
            onClick={() => openBookingForStay()}
            className="min-h-[40px] shrink-0 px-4 py-2 text-xs"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Check dates</span>
          </Button>
        </div>
      </div>

      <BookingSheet
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        selectedStayId={selectedStayId}
        onSelectStayId={setSelectedStayId}
      />
    </>
  );
}
