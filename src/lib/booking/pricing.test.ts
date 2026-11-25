import { describe, expect, it } from "vitest";
import { DEMO_STAYS } from "@/content/site";
import { computeStayQuote } from "./pricing";

describe("computeStayQuote", () => {
  const cottage = DEMO_STAYS[1]!; // base 2, max 4, weekday 1600, weekend 2200, extra 400

  it("applies weekday and weekend (Fri/Sat) rates accurately", () => {
    // 2026-11-26 is Thu (weekday), 2026-11-27 is Fri (weekend)
    const quote = computeStayQuote({
      stay: cottage,
      checkIn: "2026-11-26",
      checkOut: "2026-11-28",
      guests: 2,
    });

    expect(quote.nights).toBe(2);
    expect(quote.roomSubtotal).toBe(1600 + 2200);
    expect(quote.extraGuestTotal).toBe(0);
    expect(quote.total).toBe(3800);
  });

  it("adds extra guest fee per night beyond base occupancy", () => {
    const quote = computeStayQuote({
      stay: cottage,
      checkIn: "2026-11-27", // Fri
      checkOut: "2026-11-29", // Sun -> Fri + Sat = 2 weekend nights
      guests: 4, // 2 extra guests
    });

    expect(quote.extraGuests).toBe(2);
    expect(quote.extraGuestTotal).toBe(2 * 400 * 2);
    expect(quote.total).toBe(2200 * 2 + 1600);
  });

  it("rejects check-out on or before check-in", () => {
    expect(() =>
      computeStayQuote({
        stay: cottage,
        checkIn: "2026-11-27",
        checkOut: "2026-11-27",
        guests: 2,
      })
    ).toThrow();
  });
});
