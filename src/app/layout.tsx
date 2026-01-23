import type { ReactNode } from "react";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredGTM from "@/components/DeferredGTM";

// Optimize font loading with Next.js font optimization
// This automatically handles font-display: swap and preloading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
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
