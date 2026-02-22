import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brick2Wall Infra | Value Engineers for India's Infrastructure",
  description: "India's most premium B2B infrastructure materials platform.",
  openGraph: {
    title: "Brick2Wall Infra | The Supply Chain, Perfected.",
    description: "Engineering Value. Eliminating Inefficiency. Driving the $100Bn+ Indian Infrastructure sector with relentless, data-driven execution.",
    url: "https://brick2wall.vercel.app",
    siteName: "Brick2Wall Infra",
    images: [
      {
        url: "https://brick2wall.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "Brick2Wall Infra - The Supply Chain Perfected",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brick2Wall Infra | Value Engineers",
    description: "India's most premium B2B infrastructure materials platform.",
    images: ["https://brick2wall.vercel.app/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} font-sans antialiased relative w-full`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
