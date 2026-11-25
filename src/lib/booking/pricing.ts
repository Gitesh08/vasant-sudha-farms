import type { StayType } from "@/content/site";
import { eachNight, isWeekendNight, toDateString, type DateString } from "@/lib/dates";

export interface NightLine {
  date: DateString;
  isWeekend: boolean;
  rate: number;
}

export interface QuoteBreakdown {
  nights: number;
  lines: NightLine[];
  roomSubtotal: number;
  extraGuests: number;
  extraGuestTotal: number;
  total: number;
}

/**
 * Computes a transparent nightly quote for a stay in Asia/Kolkata.
 * Nights are half-open [checkIn, checkOut). Fri & Sat are weekend nights.
 */
export function computeStayQuote(params: {
  stay: StayType;
  checkIn: string;
  checkOut: string;
  guests: number;
}): QuoteBreakdown {
  const ci = toDateString(params.checkIn);
  const co = toDateString(params.checkOut);
  const nightsList = eachNight(ci, co);

  if (nightsList.length === 0) {
    throw new Error("Check-out must be after check-in.");
  }

  const lines: NightLine[] = nightsList.map((date) => {
    const weekend = isWeekendNight(date);
    return {
      date,
      isWeekend: weekend,
      rate: weekend ? params.stay.rateWeekend : params.stay.rateWeekday,
    };
  });

  const roomSubtotal = lines.reduce((sum, line) => sum + line.rate, 0);
  const extraGuests = Math.max(0, params.guests - params.stay.baseOccupancy);
  const extraGuestTotal = extraGuests * params.stay.extraGuestFee * lines.length;

  return {
    nights: lines.length,
    lines,
    roomSubtotal,
    extraGuests,
    extraGuestTotal,
    total: roomSubtotal + extraGuestTotal,
  };
}

export function generateDemoRef(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `VSF-${code}`;
}
