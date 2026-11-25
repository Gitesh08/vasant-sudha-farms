import { describe, expect, it } from "vitest";
import { formatRupees } from "./money";

describe("money (en-IN integer rupees)", () => {
  it("formats Indian numbering with rupee symbol and no decimals", () => {
    expect(formatRupees(1200)).toBe("₹1,200");
    expect(formatRupees(125000)).toBe("₹1,25,000");
  });

  it("rejects non-finite numbers", () => {
    expect(() => formatRupees(Number.NaN)).toThrow();
  });
});
