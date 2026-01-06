import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CINELINGO | Effortless Global Scale for Creators",
  description: "CINELINGO localizes, launches, and manages your YouTube videos in multiple languages. Expand your reach globally with our end-to-end AI dubbing and channel management.",
  keywords: ["YouTube localization", "AI dubbing", "video translation", "global growth", "content creator services"],
  icons: {
    icon: '/image/favicon.ico',
  },
  openGraph: {
    title: "Cinelingo | Effortless Global Scale",
    description: "We handle the world so you can focus on creating. End-to-end YouTube localization and management.",
    type: "website",
    locale: "en_US",
    // images: ['/og-image.jpg'], // TODO: Add OG Image later
  }
};

import { DemoModalProvider } from "@/components/DemoModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DemoModalProvider>
          {children}
        </DemoModalProvider>
      </body>
    </html>
  );
}
