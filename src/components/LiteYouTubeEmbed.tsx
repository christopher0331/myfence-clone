"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface LiteYouTubeEmbedProps {
  /** 11-character YouTube video ID (the part after watch?v= or /embed/). */
  videoId: string;
  /** Accessible/SEO title for the video. */
  title: string;
  /**
   * When true, swaps the thumbnail facade for the real iframe (autoplay, muted)
   * the moment the component scrolls into the viewport. Use this for B-roll.
   * When false (default), the iframe loads on user click — classic facade.
   */
  autoplayOnView?: boolean;
  /** Loop playback. Only meaningful alongside autoplayOnView. */
  loop?: boolean;
  /**
   * Tailwind aspect-ratio class for the outer wrapper.
   * Defaults to 16:9 (`aspect-video`) for horizontal video.
   */
  aspect?: string;
  /** Optional override for the poster image (e.g. a local high-res still). */
  posterSrc?: string;
  /** Extra classes for the outer wrapper. */
  className?: string;
}

/**
 * Lite YouTube facade — keeps the iframe and ~1.3 MB of YouTube player JS out
 * of the initial page load. Shows a static thumbnail until either:
 *
 *   1. The user clicks (default), or
 *   2. The element scrolls into view (when `autoplayOnView` is true).
 *
 * Built without a third-party dep so the bundle stays small.
 */
export default function LiteYouTubeEmbed({
  videoId,
  title,
  autoplayOnView = false,
  loop = false,
  aspect = "aspect-video",
  posterSrc,
  className = "",
}: LiteYouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // When autoplayOnView is on, swap to the real iframe the first time the
  // container scrolls into view. We disconnect immediately so we don't toggle
  // back-and-forth on scroll.
  useEffect(() => {
    if (!autoplayOnView || loaded) return;
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [autoplayOnView, loaded]);

  const params = new URLSearchParams();
  params.set("autoplay", "1");
  params.set("rel", "0");
  params.set("modestbranding", "1");
  if (autoplayOnView) {
    // Browser autoplay policies require muted + playsinline for unattended starts.
    params.set("mute", "1");
    params.set("playsinline", "1");
    if (loop) {
      params.set("loop", "1");
      // YouTube quirk: loop=1 only works when playlist is set to the same ID.
      params.set("playlist", videoId);
    }
  }

  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  const poster =
    posterSrc ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      ref={containerRef}
      className={`relative ${aspect} w-full overflow-hidden rounded-md bg-black ${className}`}
    >
      {loaded ? (
        <iframe
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={poster}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/90 shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
              <Play
                className="h-7 w-7 fill-white text-white sm:h-9 sm:w-9"
                aria-hidden
              />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
