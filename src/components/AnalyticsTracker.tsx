"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView, trackCtaClick, type CtaType } from "@/lib/analytics";

/**
 * Site-wide analytics instrumentation:
 *  - fires a page_view on every App Router route change
 *  - uses a single delegated click listener to capture Contact / Quote / Call CTA clicks
 *    on any page (covers the ~30 hand-built neighborhood pages without editing each one)
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href) return;

      let ctaType: CtaType | null = null;
      if (href === "/contact" || href.startsWith("/contact/") || href.startsWith("/contact?")) {
        ctaType = "contact";
      } else if (href === "/quote" || href.startsWith("/quote/") || href.startsWith("/quote?")) {
        ctaType = "quote";
      } else if (href.startsWith("tel:")) {
        ctaType = "phone";
      }

      if (!ctaType) return;
      trackCtaClick({ ctaType, ctaDestination: href });
    };

    // Capture phase so the event is recorded before client-side navigation unmounts the link.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
