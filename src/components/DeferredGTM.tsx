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
    const loadGTM = () => {
      setShouldLoad(true);
      window.removeEventListener("scroll", loadGTM);
      window.removeEventListener("mousemove", loadGTM);
      window.removeEventListener("touchstart", loadGTM);
      window.removeEventListener("keydown", loadGTM);
    };

    // Longer idle delay so GA doesn't compete with hydration / Lighthouse main-thread work.
    const timer = setTimeout(loadGTM, 10000);

    window.addEventListener("scroll", loadGTM, { passive: true, once: true });
    window.addEventListener("mousemove", loadGTM, { passive: true, once: true });
    window.addEventListener("touchstart", loadGTM, { passive: true, once: true });
    window.addEventListener("keydown", loadGTM, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadGTM);
      window.removeEventListener("mousemove", loadGTM);
      window.removeEventListener("touchstart", loadGTM);
      window.removeEventListener("keydown", loadGTM);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DHHBT3S03P"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
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
