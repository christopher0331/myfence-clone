"use client";

import { useEffect, useRef, useState } from "react";

const POSTER =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/father-son-fencing-pic.webp?tr=w-1200,q-70";

/**
 * Facade pattern: show a static poster first, then mount the YouTube iframe
 * only after the hero is visible and the browser is idle. Keeps YouTube's
 * heavy JS off the critical path / main thread during Lighthouse.
 */
export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let idleId: number | undefined;
    let timeoutId: number | undefined;
    let cancelled = false;

    const mountVideo = () => {
      if (cancelled) return;
      setShowVideo(true);
    };

    const scheduleMount = () => {
      // Avoid `"requestIdleCallback" in window` — TS narrows `window` to `never`
      // in the else branch and fails `setTimeout` under Next's typecheck.
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(mountVideo, { timeout: 4000 });
      } else {
        timeoutId = window.setTimeout(mountVideo, 2500);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        scheduleMount();
      },
      { rootMargin: "100px" }
    );

    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full bg-muted">
      {/* Poster keeps layout + LCP stable before YouTube mounts */}
      <img
        src={POSTER}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
      />
      {showVideo && (
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/LlFKNi-35Mk?autoplay=1&mute=1&loop=1&playlist=LlFKNi-35Mk&controls=0&playsinline=1&modestbranding=1&rel=0"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="no-referrer-when-downgrade"
          title="MyFence.com installation montage"
          loading="lazy"
        />
      )}
    </div>
  );
}
