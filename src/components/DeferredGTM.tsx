"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Defer GTM until after initial load and a short delay
 * This ensures it doesn't compete with the main thread during critical hydration
 */
export default function DeferredGTM() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // 1. Wait for the window load event
    // 2. Add an additional delay to ensure everything else is settled
    const loadGTM = () => {
      setTimeout(() => {
        setShouldLoad(true);
      }, 3500); // 3.5s delay after load
    };

    if (document.readyState === "complete") {
      loadGTM();
    } else {
      window.addEventListener("load", loadGTM);
      return () => window.removeEventListener("load", loadGTM);
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DHHBT3S03P"
        strategy="afterInteractive" // Use afterInteractive here because we handle the timing ourselves
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DHHBT3S03P');
        `}
      </Script>
    </>
  );
}
