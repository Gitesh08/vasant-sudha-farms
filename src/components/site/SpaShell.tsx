"use client";

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
        <Hero onOpenBooking={(mode) => openBooking(mode ?? "stay")} />
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
