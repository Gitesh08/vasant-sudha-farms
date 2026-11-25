"use client";

import { MessageSquare } from "lucide-react";
import React, { useMemo, useState } from "react";
import { z } from "zod";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Sheet } from "@/components/ui/Sheet";
import { Stepper } from "@/components/ui/Stepper";
import { DEMO_STAYS, SITE_FACTS } from "@/content/site";
import { computeStayNights, generateDemoRef } from "@/lib/booking/pricing";
import { addDaysToDateString, formatDisplayDate, todayIST, toDateString } from "@/lib/dates";

interface BookingSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedStayId: string;
  onSelectStayId: (id: string) => void;
  defaultMode?: "stay" | "picnic" | "event";
}

const guestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),
  email: z.string().trim().email("Enter a valid email address.").or(z.literal("")),
  notes: z.string().max(400).optional(),
});

export function BookingSheet({
  open,
  onOpenChange,
  selectedStayId,
  onSelectStayId,
  defaultMode = "stay",
}: BookingSheetProps) {
  const defaultCheckIn = useMemo(() => addDaysToDateString(todayIST(), 2), []);
  const defaultCheckOut = useMemo(() => addDaysToDateString(defaultCheckIn, 2), [defaultCheckIn]);

  const [mode, setMode] = useState<"stay" | "picnic" | "event">(defaultMode);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Stay state
  const [checkIn, setCheckIn] = useState<string>(defaultCheckIn);
  const [checkOut, setCheckOut] = useState<string>(defaultCheckOut);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Picnic state
  const [picnicDate, setPicnicDate] = useState<string>(defaultCheckIn);
  const [picnicGuests, setPicnicGuests] = useState(15);
  const [picnicMenu, setPicnicMenu] = useState("Konkan Coastal & Vegetarian");

  // Event state
  const [eventType, setEventType] = useState("Wedding & Reception");
  const [eventDate, setEventDate] = useState<string>(defaultCheckIn);
  const [eventGuests, setEventGuests] = useState(250);

  // Guest details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [demoRef, setDemoRef] = useState("");

  const stay = DEMO_STAYS.find((s) => s.id === selectedStayId) ?? DEMO_STAYS[0]!;
  const totalStayGuests = adults + children;

  const stayNightsResult = useMemo(() => {
    try {
      const ci = toDateString(checkIn);
      const co = toDateString(checkOut);
      if (co <= ci) return { error: "Check-out date must follow check-in.", nights: 0 };
      const res = computeStayNights({ checkIn: ci, checkOut: co });
      return { nights: res.nights, error: null };
    } catch {
      return { error: "Please choose valid arrival and departure dates.", nights: 0 };
    }
  }, [checkIn, checkOut]);

  function handleReset() {
    setStep(1);
    setErrors({});
    setDemoRef("");
  }

  function handleSubmitGuest(e: React.FormEvent) {
    e.preventDefault();
    const parsed = guestSchema.safeParse({ name, phone, email, notes });
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setDemoRef(generateDemoRef());
    setStep(3);
  }

  const whatsappMessage = useMemo(() => {
    if (mode === "stay") {
      return `Hello Vasant Sudha Farms, I would like to enquire about a stay at ${stay.name} from ${formatDisplayDate(toDateString(checkIn))} to ${formatDisplayDate(toDateString(checkOut))} for ${totalStayGuests} guests. Name: ${name || "Guest"}`;
    }
    if (mode === "picnic") {
      return `Hello Vasant Sudha Farms, I would like to enquire for a Day Picnic on ${formatDisplayDate(toDateString(picnicDate))} for ~${picnicGuests} guests (${picnicMenu}). Name: ${name || "Guest"}`;
    }
    return `Hello Vasant Sudha Farms, I would like to check venue availability for a ${eventType} on ${formatDisplayDate(toDateString(eventDate))} for approx ${eventGuests} guests. Name: ${name || "Guest"}`;
  }, [mode, stay.name, checkIn, checkOut, totalStayGuests, name, picnicDate, picnicGuests, picnicMenu, eventType, eventDate, eventGuests]);

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next && step === 3) handleReset();
      }}
      title="Estate Enquiries & Reservations"
      description="Plan a private stay, day picnic, or milestone celebration at Nandgaon Beach."
    >
      <div className="mb-5 flex items-center justify-between">
        <FurrowRule activeCount={step} />
        <span className="text-xs font-semibold text-navy-500">Step {step} of 3</span>
      </div>

      {step === 1 ? (
        <div className="space-y-5">
          {/* 3-Mode segmented switch */}
          <div className="grid grid-cols-3 gap-1.5 rounded-full border border-line bg-sand p-1">
            <button
              type="button"
              onClick={() => setMode("stay")}
              className={`min-h-[38px] cursor-pointer rounded-full text-xs font-semibold tracking-wide transition-colors ${
                mode === "stay" ? "bg-navy-700 text-foam" : "text-navy-700 hover:bg-foam/60"
              }`}
            >
              Private Stay
            </button>
            <button
              type="button"
              onClick={() => setMode("picnic")}
              className={`min-h-[38px] cursor-pointer rounded-full text-xs font-semibold tracking-wide transition-colors ${
                mode === "picnic" ? "bg-navy-700 text-foam" : "text-navy-700 hover:bg-foam/60"
              }`}
            >
              Day Picnic
            </button>
            <button
              type="button"
              onClick={() => setMode("event")}
              className={`min-h-[38px] cursor-pointer rounded-full text-xs font-semibold tracking-wide transition-colors ${
                mode === "event" ? "bg-navy-700 text-foam" : "text-navy-700 hover:bg-foam/60"
              }`}
            >
              Celebration
            </button>
          </div>

          {/* STAY MODE */}
          {mode === "stay" ? (
            <div className="space-y-4">
              <div>
                <label htmlFor="stay-select" className="mb-1.5 block text-xs font-semibold text-navy-700 uppercase tracking-wider">
                  Select Accommodation
                </label>
                <select
                  id="stay-select"
                  value={stay.id}
                  onChange={(e) => {
                    onSelectStayId(e.target.value);
                    setAdults(2);
                    setChildren(0);
                  }}
                  className="min-h-[44px] w-full rounded-xl border border-line bg-foam px-3.5 py-2.5 text-sm font-semibold text-navy-900"
                >
                  {DEMO_STAYS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.tier})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Input
                  label="Check-in (2:00 PM)"
                  type="date"
                  value={checkIn}
                  min={todayIST()}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
                <Input
                  label="Check-out (12:00 PM)"
                  type="date"
                  value={checkOut}
                  min={checkIn || todayIST()}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Stepper
                  label="Adults"
                  value={adults}
                  min={1}
                  max={Math.max(1, stay.maxOccupancy - children)}
                  onChange={setAdults}
                />
                <Stepper
                  label="Children"
                  value={children}
                  min={0}
                  max={Math.max(0, stay.maxOccupancy - adults)}
                  onChange={setChildren}
                />
              </div>

              {stayNightsResult.error ? (
                <p role="alert" className="rounded-xl border border-sun-600/40 bg-sand p-3 text-xs font-semibold text-sun-600">
                  {stayNightsResult.error}
                </p>
              ) : (
                <div className="rounded-2xl border border-line bg-sand/60 p-4 text-xs leading-relaxed text-navy-700">
                  <p className="font-semibold text-navy-900">
                    {stay.name} · {stayNightsResult.nights} {stayNightsResult.nights === 1 ? "night" : "nights"} for {totalStayGuests} {totalStayGuests === 1 ? "guest" : "guests"}
                  </p>
                  <p className="mt-1 text-navy-600">
                    Includes courtyard pool access, private locker, and morning coastal tea. Meal packages arranged directly with the host.
                  </p>
                </div>
              )}

              <Button
                variant="sun"
                className="w-full text-xs font-semibold tracking-wider uppercase"
                disabled={Boolean(stayNightsResult.error)}
                onClick={() => setStep(2)}
              >
                Continue to guest details
              </Button>
            </div>
          ) : null}

          {/* PICNIC MODE */}
          {mode === "picnic" ? (
            <div className="space-y-4">
              <Input
                label="Preferred picnic date"
                type="date"
                value={picnicDate}
                min={todayIST()}
                onChange={(e) => setPicnicDate(e.target.value)}
              />

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-navy-700 uppercase tracking-wider">
                  <label htmlFor="picnic-guests">Group size</label>
                  <span className="font-bold tabular-nums text-navy-900">{picnicGuests} guests</span>
                </div>
                <input
                  id="picnic-guests"
                  type="range"
                  min={5}
                  max={150}
                  step={5}
                  value={picnicGuests}
                  onChange={(e) => setPicnicGuests(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer accent-sun-600"
                />
                <span className="text-[11px] text-navy-500">Timings: 9:30 AM to 5:30 PM with pool access</span>
              </div>

              <div>
                <label htmlFor="picnic-menu" className="mb-1.5 block text-xs font-semibold text-navy-700 uppercase tracking-wider">
                  Dining Preference
                </label>
                <select
                  id="picnic-menu"
                  value={picnicMenu}
                  onChange={(e) => setPicnicMenu(e.target.value)}
                  className="min-h-[44px] w-full rounded-xl border border-line bg-foam px-3.5 py-2.5 text-sm font-semibold text-navy-900"
                >
                  <option value="Konkan Coastal & Vegetarian">Konkan Coastal Seafood &amp; Vegetarian Thalis</option>
                  <option value="Pure Vegetarian Farm Spread">Pure Vegetarian Regional Farm Spread</option>
                  <option value="Custom Group Menu">Custom Family / Corporate Menu</option>
                </select>
              </div>

              <div className="rounded-2xl border border-line bg-sand/60 p-4 text-xs leading-relaxed text-navy-700">
                Includes full access to the shaded orchard lawns, freshwater pool, changing facilities, afternoon lunch, and evening high tea.
              </div>

              <Button
                variant="sun"
                className="w-full text-xs font-semibold tracking-wider uppercase"
                onClick={() => setStep(2)}
              >
                Continue to guest details
              </Button>
            </div>
          ) : null}

          {/* EVENT MODE */}
          {mode === "event" ? (
            <div className="space-y-4">
              <div>
                <label htmlFor="event-type" className="mb-1.5 block text-xs font-semibold text-navy-700 uppercase tracking-wider">
                  Occasion
                </label>
                <select
                  id="event-type"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="min-h-[44px] w-full rounded-xl border border-line bg-foam px-3.5 py-2.5 text-sm font-semibold text-navy-900"
                >
                  <option value="Wedding & Reception">Destination Wedding &amp; Reception</option>
                  <option value="Engagement / Sangeet">Engagement / Sangeet / Haldi</option>
                  <option value="Milestone Birthday / Anniversary">Milestone Birthday / Anniversary</option>
                  <option value="Corporate Offsite / Day Gathering">Corporate Offsite / Day Gathering</option>
                </select>
              </div>

              <Input
                label="Preferred event date"
                type="date"
                value={eventDate}
                min={todayIST()}
                onChange={(e) => setEventDate(e.target.value)}
              />

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-navy-700 uppercase tracking-wider">
                  <label htmlFor="event-guests">Estimated guests</label>
                  <span className="font-bold tabular-nums text-navy-900">{eventGuests} guests (up to 800)</span>
                </div>
                <input
                  id="event-guests"
                  type="range"
                  min={30}
                  max={800}
                  step={20}
                  value={eventGuests}
                  onChange={(e) => setEventGuests(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer accent-sun-600"
                />
              </div>

              <div className="rounded-2xl border border-line bg-sand/60 p-4 text-xs leading-relaxed text-navy-700">
                Includes 800-capacity open celebration lawn, ground-floor indoor banquet hall, 100-car and 300-bike parking, and bridal room access.
              </div>

              <Button
                variant="sun"
                className="w-full text-xs font-semibold tracking-wider uppercase"
                onClick={() => setStep(2)}
              >
                Continue to contact details
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}

      {step === 2 ? (
        <form onSubmit={handleSubmitGuest} noValidate className="space-y-4">
          <Input
            label="Full name"
            name="name"
            placeholder="e.g. Rohan Deshmukh"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            required
          />
          <Input
            label="WhatsApp / Mobile (+91)"
            name="phone"
            type="tel"
            placeholder="98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phone}
            hint="Used by the host to confirm dates and arrangements."
            required
          />
          <Input
            label="Email address (optional)"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="guest-notes" className="text-xs font-semibold text-navy-700 uppercase tracking-wider">
              Notes or special requests (optional)
            </label>
            <textarea
              id="guest-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us about specific food preferences, room requirements, or function timings"
              className="w-full rounded-xl border border-line bg-foam px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-500/70"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button variant="ghost" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" variant="sun" className="flex-1 text-xs font-semibold tracking-wider uppercase">
              Submit reservation enquiry
            </Button>
          </div>
        </form>
      ) : null}

      {step === 3 ? (
        <div className="space-y-5 rounded-2xl border border-line bg-sand/70 p-5">
          <Badge variant="demo">Demo mode: direct confirmation</Badge>
          <div>
            <p className="text-xs font-semibold tracking-wide text-navy-500 uppercase">
              Enquiry Reference
            </p>
            <p className="font-display text-3xl font-semibold tabular-nums text-navy-700">
              {demoRef}
            </p>
          </div>
          <p className="text-xs leading-relaxed text-navy-900 sm:text-sm">
            {mode === "stay" &&
              `Your reservation enquiry for ${stay.name} (${totalStayGuests} guests, ${formatDisplayDate(toDateString(checkIn))} to ${formatDisplayDate(toDateString(checkOut))}) has been generated.`}
            {mode === "picnic" &&
              `Your day picnic enquiry for ${picnicGuests} guests on ${formatDisplayDate(toDateString(picnicDate))} has been recorded.`}
            {mode === "event" &&
              `Your ${eventType} celebration enquiry for ~${eventGuests} guests on ${formatDisplayDate(toDateString(eventDate))} has been recorded.`}
          </p>

          <a
            href={`https://wa.me/${SITE_FACTS.demoWhatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-palm-600 px-4 py-2 text-xs font-semibold text-foam shadow-sm transition-colors hover:bg-palm-700 uppercase tracking-wider"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Connect on WhatsApp directly</span>
          </a>

          <div className="flex gap-3 pt-1">
            <Button variant="primary" className="flex-1 text-xs uppercase" onClick={() => onOpenChange(false)}>
              Done
            </Button>
            <Button variant="ghost" className="text-xs" onClick={handleReset}>
              New enquiry
            </Button>
          </div>
        </div>
      ) : null}
    </Sheet>
  );
}
