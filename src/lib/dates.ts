import { tz, TZDate } from "@date-fns/tz";
import { addDays, differenceInCalendarDays, format, getDay, parseISO } from "date-fns";

export const PROPERTY_TZ = "Asia/Kolkata";
const ist = tz(PROPERTY_TZ);

/**
 * Branded ISO date-only string (`YYYY-MM-DD`) in Asia/Kolkata.
 * All stay, availability, and rate logic must use this instead of raw JS Date.
 */
export type DateString = string & { readonly __brand: "DateString" };

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function toDateString(value: string): DateString {
  if (!DATE_RE.test(value)) {
    throw new Error(`Invalid DateString: "${value}". Expected YYYY-MM-DD.`);
  }
  const parsed = parseISO(value);
  if (Number.isNaN(parsed.getTime()) || format(parsed, "yyyy-MM-dd") !== value) {
    throw new Error(`Calendar-invalid DateString: "${value}".`);
  }
  return value as DateString;
}

export function todayIST(now: Date = new Date()): DateString {
  const zoned = new TZDate(now.getTime(), PROPERTY_TZ);
  return format(zoned, "yyyy-MM-dd") as DateString;
}

export function addDaysToDateString(dateStr: DateString, days: number): DateString {
  const d = parseISO(dateStr);
  return format(addDays(d, days), "yyyy-MM-dd", { in: ist }) as DateString;
}

export function nightsBetween(checkIn: DateString, checkOut: DateString): number {
  const diff = differenceInCalendarDays(parseISO(checkOut), parseISO(checkIn));
  return Math.max(0, diff);
}

export function eachNight(checkIn: DateString, checkOut: DateString): DateString[] {
  const count = nightsBetween(checkIn, checkOut);
  const nights: DateString[] = [];
  for (let i = 0; i < count; i++) {
    nights.push(addDaysToDateString(checkIn, i));
  }
  return nights;
}

/** 0 = Sunday ... 6 = Saturday. Weekend nights are Friday (5) and Saturday (6). */
export function dayOfWeek(dateStr: DateString): number {
  return getDay(parseISO(dateStr));
}

export function isWeekendNight(dateStr: DateString): boolean {
  const dow = dayOfWeek(dateStr);
  return dow === 5 || dow === 6;
}

export function formatDisplayDate(dateStr: DateString): string {
  return format(parseISO(dateStr), "d MMM yyyy");
}
