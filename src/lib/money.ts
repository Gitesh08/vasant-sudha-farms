const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/**
 * Format integer rupees in en-IN (e.g. 2400 -> "₹2,400").
 */
export function formatRupees(amount: number): string {
  if (!Number.isFinite(amount)) {
    throw new Error(`Invalid rupee amount: ${amount}`);
  }
  return inrFormatter.format(Math.round(amount));
}
