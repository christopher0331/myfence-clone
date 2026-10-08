"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export type YouTubeShort = {
  videoId: string;
  title: string;
  mute?: boolean;
  hideControls?: boolean;
};

/** Fixed card width. Height follows 9:16. The row never wraps. */
const CARD_PX = 180;
const GAP_PX = 16;
const SCROLL_STEP = CARD_PX + GAP_PX;

function youtubeShortEmbedSrc(
  videoId: string,
  mute = false,
  hideControls = false,
  autoplay = false
) {
  const params = new URLSearchParams({
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    vq: "hd1080",
  });
  if (autoplay) params.set("autoplay", "1");
  if (hideControls) params.set("controls", "0");
  if (mute) params.set("mute", "1");
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

/** Vertical YouTube Short iframe matching existing service-area / style-page embeds. */
export function YouTubeShortEmbed({
  videoId,
  title,
  mute = false,
  hideControls = false,
  className = "bg-muted rounded-lg overflow-hidden",
}: YouTubeShort & { className?: string }) {
  return (
    <AspectRatio ratio={9 / 16} className={className}>
      <iframe
        src={youtubeShortEmbedSrc(videoId, mute, hideControls)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
        title={title}
        loading="lazy"
      />
    </AspectRatio>
  );
}

function YouTubeShortCard({ videoId, title, mute = false, hideControls = false }: YouTubeShort) {
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(
    `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`
  );

  return (
    <figure className="flex w-[180px] shrink-0 snap-start flex-col gap-2">
      <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-muted shadow-lg ring-1 ring-border">
        {playing ? (
          <iframe
            src={youtubeShortEmbedSrc(videoId, mute, hideControls, true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
            title={title}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src={poster}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => {
                const fallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                if (poster !== fallback) setPoster(fallback);
              }}
            />
            <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-105">
                <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption
        title={title}
        className="line-clamp-2 min-h-8 text-center text-xs font-medium leading-snug text-foreground"
      >
        {title}
      </figcaption>
    </figure>
  );
}

export function YouTubeShortsGallery({
  videos,
  heading,
  description,
  className = "",
}: {
  videos: YouTubeShort[];
  heading?: string;
  description?: string;
  className?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [overflows, setOverflows] = useState(false);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const nextOverflows = max > 4;
      setOverflows(nextOverflows);
      setCanLeft(nextOverflows && el.scrollLeft > 4);
      setCanRight(nextOverflows && el.scrollLeft < max - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [videos.length]);

  const scrollByDir = (direction: -1 | 1) => {
    scrollerRef.current?.scrollBy({ left: direction * SCROLL_STEP, behavior: "smooth" });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    if (!overflows) return;
    event.preventDefault();
    scrollByDir(event.key === "ArrowRight" ? 1 : -1);
  };

  if (videos.length === 0) return null;

  const arrowClass =
    "absolute top-[168px] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <div className={className}>
      {heading && (
        <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">{heading}</h2>
      )}
      {description && (
        <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground">{description}</p>
      )}
      <div
        className="relative outline-none focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-ring"
        role="region"
        aria-roledescription="carousel"
        aria-label={heading || "Video shorts"}
        tabIndex={overflows ? 0 : undefined}
        onKeyDown={onKeyDown}
      >
        {canLeft && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-2 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent"
          />
        )}
        {canRight && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-2 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent"
          />
        )}
        {canLeft && (
          <button
            type="button"
            className={cn(arrowClass, "left-1")}
            aria-label="Show previous videos"
            onClick={() => scrollByDir(-1)}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
        )}
        {canRight && (
          <button
            type="button"
            className={cn(arrowClass, "right-1")}
            aria-label="Show next videos"
            onClick={() => scrollByDir(1)}
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        )}
        <div
          ref={scrollerRef}
          data-shorts-gallery=""
          data-shorts-overflow={overflows ? "true" : "false"}
          className={cn(
            "flex w-full flex-nowrap gap-4 overflow-x-auto overscroll-x-contain py-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            overflows ? "justify-start" : "justify-center"
          )}
        >
          {videos.map((video) => (
            <YouTubeShortCard key={video.videoId} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
