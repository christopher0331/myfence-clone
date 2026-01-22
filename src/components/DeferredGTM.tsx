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
    // Wait for the first user interaction (scroll, click, or mouse move)
    // or a long timeout (8 seconds) if no interaction happens.
    const loadGTM = () => {
      if (shouldLoad) return;
      setShouldLoad(true);
      window.removeEventListener("scroll", loadGTM);
      window.removeEventListener("mousemove", loadGTM);
      window.removeEventListener("touchstart", loadGTM);
    };

    const timer = setTimeout(loadGTM, 8000);

    window.addEventListener("scroll", loadGTM, { passive: true });
    window.addEventListener("mousemove", loadGTM, { passive: true });
    window.addEventListener("touchstart", loadGTM, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadGTM);
      window.removeEventListener("mousemove", loadGTM);
      window.removeEventListener("touchstart", loadGTM);
    };
  }, [shouldLoad]);

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
