import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredGTM from "@/components/DeferredGTM";
import { SITE_CONFIG } from "@/constants/siteConfig";

// Optimize font loading with Next.js font optimization
// This automatically handles font-display: swap and preloading
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
        {/* Preload the LCP Hero Image for faster production loading */}
        <link 
          rel="preload" 
          as="image" 
          href="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/father-son-fencing-pic.webp?tr=w-432,h-324,fo-auto,q-40"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <DeferredGTM />
        <Script id="smartlook-init" strategy="afterInteractive">
          {`
            window.smartlook || (function (d) {
              var o = (window.smartlook = function () { o.api.push(arguments); });
              var h = d.getElementsByTagName("head")[0];
              var c = d.createElement("script");
              o.api = new Array();
              c.async = true;
              c.type = "text/javascript";
              c.charset = "utf-8";
              c.src = "https://web-sdk.smartlook.com/recorder.js";
              h.appendChild(c);
            })(document);
            window.smartlook("init", "96d5d4b768684eadbd4ef7c17d4310fb2e7cc980", { region: "eu" });
          `}
        </Script>
        <Header />
        {/* Add top padding so content clears the fixed header */}
        <main className="flex-1 pt-24 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
