"use client";

import React, { useMemo, useState } from "react";
import { z } from "zod";
import { FurrowRule } from "@/components/brand/FurrowRule";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Sheet } from "@/components/ui/Sheet";
import { Stepper } from "@/components/ui/Stepper";
import { DEMO_STAYS, SITE_FACTS } from "@/content/site";
import { computeStayQuote, generateDemoRef } from "@/lib/booking/pricing";
import { addDaysToDateString, formatDisplayDate, todayIST, toDateString } from "@/lib/dates";
import { formatRupees } from "@/lib/money";

interface BookingSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedStayId: string;
  onSelectStayId: (id: string) => void;
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
}: BookingSheetProps) {
  const defaultCheckIn = useMemo(() => addDaysToDateString(todayIST(), 2), []);
  const defaultCheckOut = useMemo(() => addDaysToDateString(defaultCheckIn, 2), [defaultCheckIn]);

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [checkIn, setCheckIn] = useState<string>(defaultCheckIn);
  const [checkOut, setCheckOut] = useState<string>(defaultCheckOut);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [demoRef, setDemoRef] = useState("");

  const stay = DEMO_STAYS.find((s) => s.id === selectedStayId) ?? DEMO_STAYS[0]!;
  const totalGuests = adults + children;

  const quoteResult = useMemo(() => {
    try {
      const ci = toDateString(checkIn);
      const co = toDateString(checkOut);
      if (co <= ci) return { error: "Check-out must be after check-in." };
      return {
        quote: computeStayQuote({
          stay,
          checkIn: ci,
          checkOut: co,
          guests: totalGuests,
        }),
      };
    } catch {
      return { error: "Select valid check-in and check-out dates." };
    }
  }, [stay, checkIn, checkOut, totalGuests]);

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

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next && step === 3) handleReset();
      }}
      title="Check dates & request stay"
      description="Demo calculator — sample rates, no payment or real message sent."
    >
      <div className="mb-6 flex items-center justify-between">
        <FurrowRule activeCount={step} />
        <span className="text-xs font-semibold text-navy-500">Step {step} of 3</span>
      </div>

      {step === 1 ? (
        <div className="space-y-5">
          <div>
            <label htmlFor="stay-select" className="mb-1.5 block text-sm font-semibold text-navy-700">
              Stay type <Badge variant="sample" className="ml-1.5">Sample</Badge>
            </label>
            <select
              id="stay-select"
              value={stay.id}
              onChange={(e) => {
                onSelectStayId(e.target.value);
                setAdults(2);
                setChildren(0);
              }}
              className="min-h-[44px] w-full rounded-[14px] border border-line bg-foam px-3.5 py-2.5 text-base font-semibold text-navy-900"
            >
              {DEMO_STAYS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} (up to {s.maxOccupancy} guests · from {formatRupees(s.rateWeekday)})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

          {quoteResult.error ? (
            <p role="alert" className="rounded-[14px] border border-sun-600/40 bg-sand p-3 text-sm font-semibold text-sun-600">
              {quoteResult.error}
            </p>
          ) : quoteResult.quote ? (
            <div className="rounded-[20px] border border-line bg-sand p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-navy-700">
                  {quoteResult.quote.nights} {quoteResult.quote.nights === 1 ? "night" : "nights"} ·{" "}
                  {totalGuests} {totalGuests === 1 ? "guest" : "guests"}
                </span>
                <span className="font-display text-2xl font-semibold tabular-nums text-navy-900">
                  {formatRupees(quoteResult.quote.total)}
                </span>
              </div>
              <ul className="mt-3 space-y-1 border-t border-line pt-3 text-xs text-navy-700">
                {quoteResult.quote.lines.map((line) => (
                  <li key={line.date} className="flex justify-between tabular-nums">
                    <span>
                      {formatDisplayDate(line.date)} ({line.isWeekend ? "Weekend" : "Weekday"})
                    </span>
                    <span>{formatRupees(line.rate)}</span>
                  </li>
                ))}
                {quoteResult.quote.extraGuests > 0 ? (
                  <li className="flex justify-between tabular-nums text-chikoo">
                    <span>
                      Extra guest fee ({quoteResult.quote.extraGuests} ×{" "}
                      {quoteResult.quote.nights} nights)
                    </span>
                    <span>{formatRupees(quoteResult.quote.extraGuestTotal)}</span>
                  </li>
                ) : null}
              </ul>
              <p className="mt-2 text-xs text-navy-500">
                Sample estimate · Taxes as applicable.
              </p>
            </div>
          ) : null}

          <Button
            variant="sun"
            className="w-full"
            disabled={!quoteResult.quote}
            onClick={() => setStep(2)}
          >
            Continue to guest details
          </Button>
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
            hint="Used by the host to confirm availability."
            required
          />
          <Input
            label="Email (optional)"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="guest-notes" className="text-sm font-semibold text-navy-700">
              Notes (optional)
            </label>
            <textarea
              id="guest-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Arrival time, food preferences, or group questions"
              className="w-full rounded-[14px] border border-line bg-foam px-3.5 py-2.5 text-base text-navy-900 placeholder:text-navy-500/70"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button variant="ghost" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" variant="sun" className="flex-1">
              Send demo request
            </Button>
          </div>
        </form>
      ) : null}

      {step === 3 ? (
        <div className="space-y-5 rounded-[20px] border border-line bg-sand p-5">
          <Badge variant="demo">Demo mode — nothing was sent</Badge>
          <div>
            <p className="text-xs font-semibold tracking-wide text-navy-500 uppercase">
              Sample reference
            </p>
            <p className="font-display text-3xl font-semibold tabular-nums text-navy-700">
              {demoRef}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-navy-900">
            In the live site, {stay.name} for {totalGuests} guests (
            {formatDisplayDate(toDateString(checkIn))} to{" "}
            {formatDisplayDate(toDateString(checkOut))}) would be sent to the host at{" "}
            {SITE_FACTS.shortPlace} for WhatsApp confirmation.
          </p>
          <div className="flex gap-3">
            <Button variant="primary" className="flex-1" onClick={() => onOpenChange(false)}>
              Done
            </Button>
            <Button variant="ghost" onClick={handleReset}>
              Try another date
            </Button>
          </div>
        </div>
      ) : null}
    </Sheet>
  );
}
