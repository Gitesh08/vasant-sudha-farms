import type { Metadata } from "next";
import { Fraunces, Nunito_Sans, Yellowtail } from "next/font/google";
import "@/styles/globals.css";
import { DEMO_MODE } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vasant Sudha Farms, Nandgaon Beach, Boisar",
  description:
    "Coastal farm resort at Nandgaon Beach, Boisar (Palghar, Maharashtra). Where Comfort Meets Nature.",
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
    <html
      lang="en"
      className={`${fraunces.variable} ${nunitoSans.variable} ${yellowtail.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-foam text-navy-900 antialiased">
        {children}
      </body>
    </html>
  );
}
