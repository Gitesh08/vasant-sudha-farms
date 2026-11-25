import { NextResponse } from "next/server";
import { isDemoMode } from "@/lib/env";

export async function GET() {
  return NextResponse.json({
    ok: true,
    demo: isDemoMode(),
    timestamp: new Date().toISOString(),
  });
}
