import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredGTM from "@/components/DeferredGTM";
import DeferredSmartlook from "@/components/DeferredSmartlook";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { SITE_CONFIG } from "@/constants/siteConfig";

// next/font self-hosts Inter with font-display: swap — no Google Fonts CDN needed
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="VhAG-XnVtDAVBO4PlEpdeDFCTvfHVMlSxY_6GaYPTFk"
        />
        {/* Preload the LCP hero poster (matches HeroVideo facade) */}
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/father-son-fencing-pic.webp?tr=w-432,h-324,fo-auto,q-40"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <DeferredGTM />
        <DeferredSmartlook />
        <AnalyticsTracker />
        <Header />
        <main className="flex-1 pt-24 md:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
