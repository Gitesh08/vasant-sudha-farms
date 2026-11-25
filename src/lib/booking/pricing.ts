import { eachNight, toDateString } from "@/lib/dates";

export interface StayDatesSummary {
  nights: number;
  checkInFormatted: string;
  checkOutFormatted: string;
}

export function computeStayNights(params: {
  checkIn: string;
  checkOut: string;
}): { nights: number } {
  const ci = toDateString(params.checkIn);
  const co = toDateString(params.checkOut);
  const nightsList = eachNight(ci, co);

  if (nightsList.length === 0) {
    throw new Error("Check-out must be after check-in.");
  }

  return {
    nights: nightsList.length,
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
