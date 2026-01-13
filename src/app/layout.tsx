import type { ReactNode } from "react";
import Script from "next/script";
import "../index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) - loads the library async */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DHHBT3S03P"
          strategy="afterInteractive"
        />

        {/* Inline config script - runs after the library loads */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DHHBT3S03P');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
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
