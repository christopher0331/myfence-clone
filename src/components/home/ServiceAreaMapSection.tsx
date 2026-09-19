"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Homepage service-area map.
 *
 * Deferral (so LCP / hero / above-the-fold JS are not competing with Maps):
 * 1. Wait for `window` `load` (hero media and critical assets are done).
 * 2. Then `requestIdleCallback` (2s timeout) before importing GoogleBusinessMap
 *    and fetching the Maps script/tiles.
 * 3. IntersectionObserver (400px rootMargin) can start the same load earlier if
 *    the user scrolls toward this section before idle fires.
 *
 * There is no click-to-reveal gate. A pulse placeholder holds layout until the
 * interactive map mounts.
 */
const MapPlaceholder = () => (
  <div
    className="h-[360px] w-full rounded-lg bg-muted/20 animate-pulse"
    aria-hidden="true"
  />
);

export default function ServiceAreaMapSection() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (shouldLoad) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const startLoad = () => {
      if (cancelled) return;
      setShouldLoad(true);
    };

    const afterAboveTheFold = () => {
      if (cancelled) return;
      const ric = window.requestIdleCallback?.bind(window);
      if (ric) {
        idleId = ric(startLoad, { timeout: 2000 });
      } else {
        timeoutId = setTimeout(startLoad, 1);
      }
    };

    if (document.readyState === "complete") {
      afterAboveTheFold();
    } else {
      window.addEventListener("load", afterAboveTheFold, { once: true });
    }

    const el = sectionRef.current;
    const observer = el
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) startLoad();
          },
          { rootMargin: "400px 0px" },
        )
      : null;
    if (el && observer) observer.observe(el);

    return () => {
      cancelled = true;
      window.removeEventListener("load", afterAboveTheFold);
      if (idleId != null) window.cancelIdleCallback?.(idleId);
      if (timeoutId != null) clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [shouldLoad]);

  const LazyMap = useMemo(() => {
    if (!shouldLoad) return null;
    return dynamic(() => import("@/components/GoogleBusinessMap"), {
      ssr: false,
      loading: () => <MapPlaceholder />,
    });
  }, [shouldLoad]);

  return (
    <section ref={sectionRef} className="container py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Service Area</h2>
      <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
        Proudly serving the greater Seattle area within a 28-mile radius
      </p>

      <div className="relative min-h-[360px] w-full rounded-xl overflow-hidden bg-muted/10 border">
        {LazyMap ? (
          <LazyMap city="Maple Valley" state="WA" radiusMiles={28} showBusinessInfo={false} />
        ) : (
          <MapPlaceholder />
        )}
      </div>
    </section>
  );
}
