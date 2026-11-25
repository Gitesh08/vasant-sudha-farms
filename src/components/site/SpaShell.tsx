"use client";

import React, { useState } from "react";
import { BookingSheet } from "@/components/booking/BookingSheet";
import { WaveDivider } from "@/components/brand/WaveDivider";
import { EveningsSection } from "@/components/site/EveningsSection";
import { FarmSection } from "@/components/site/FarmSection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { StaysSection } from "@/components/site/StaysSection";
import { VisitSection } from "@/components/site/VisitSection";
import { Button } from "@/components/ui/Button";
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
      <Nav onOpenBooking={() => openBookingForStay()} />

      <main>
        <Hero onOpenBooking={() => openBookingForStay()} />
        <WaveDivider variant="calm" className="bg-foam" />
        <FarmSection />
        <WaveDivider variant="swell" className="bg-sand" />
        <StaysSection onSelectStay={(id) => openBookingForStay(id)} />
        <WaveDivider variant="ripple" className="bg-foam" />
        <EveningsSection />
        <WaveDivider variant="calm" className="bg-sand" />
        <VisitSection />
      </main>

      <Footer />

      {/* Sticky mobile availability bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-foam/95 px-4 py-2.5 shadow-[0_-4px_16px_rgba(11,34,54,0.08)] sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="leading-tight">
            <p className="text-xs font-semibold text-navy-500">Sample stays</p>
            <p className="text-sm font-bold tabular-nums text-navy-900">From ₹1,200 / night</p>
          </div>
          <Button variant="sun" onClick={() => openBookingForStay()}>
            Check dates
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
