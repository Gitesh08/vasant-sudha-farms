import type { Metadata } from "next";
import "@/styles/globals.css";
import { DEMO_MODE } from "@/content/site";

export const metadata: Metadata = {
  title: "Vasant Sudha Farms | Coastal Farm Resort at Nandgaon Beach, Boisar",
  description:
    "Private coastal farm resort at Nandgaon Beach, Boisar. Shaded day picnics, freshwater pool stays, and grand celebrations up to 800 guests.",
  robots: DEMO_MODE
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-foam font-sans text-navy-900 antialiased selection:bg-sun-500/20 selection:text-navy-900">
        {children}
      </body>
    </html>
  );
}
