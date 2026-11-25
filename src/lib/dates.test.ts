import { describe, expect, it } from "vitest";
import {
  addDaysToDateString,
  eachNight,
  formatDisplayDate,
  isWeekendNight,
  nightsBetween,
  toDateString,
} from "./dates";

describe("dates (Asia/Kolkata date-only)", () => {
  it("validates YYYY-MM-DD strings", () => {
    expect(toDateString("2026-11-25")).toBe("2026-11-25");
    expect(() => toDateString("2026-02-30")).toThrow();
    expect(() => toDateString("25-11-2026")).toThrow();
  });

  it("computes half-open nights [check_in, check_out)", () => {
    const ci = toDateString("2026-11-27");
    const co = toDateString("2026-11-29");
    expect(nightsBetween(ci, co)).toBe(2);
    expect(eachNight(ci, co)).toEqual(["2026-11-27", "2026-11-28"]);
  });

  it("handles month and year boundaries cleanly", () => {
    const nyEve = toDateString("2026-12-31");
    expect(addDaysToDateString(nyEve, 1)).toBe("2027-01-01");
  });

  it("treats Friday and Saturday as weekend nights", () => {
    expect(isWeekendNight(toDateString("2026-11-27"))).toBe(true); // Fri
    expect(isWeekendNight(toDateString("2026-11-28"))).toBe(true); // Sat
    expect(isWeekendNight(toDateString("2026-11-29"))).toBe(false); // Sun
  });

  it("formats display dates concisely", () => {
    expect(formatDisplayDate(toDateString("2026-11-27"))).toBe("27 Nov 2026");
  });
});
