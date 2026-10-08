"use client";

import { useState, type CSSProperties } from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export type YouTubeShort = {
  videoId: string;
  title: string;
  mute?: boolean;
  hideControls?: boolean;
};

/** Fixed card width. Height follows 9:16, so the grid stays even instead of stretching. */
const CARD_PX = 180;
const GAP_PX = 16;

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

/**
 * Column count that keeps a full last row when the count divides evenly:
 * 1, 2, 3 in one row; 4 as a 2×2; 6 and 9 as rows of 3; 8 as rows of 4.
 * Leftover counts (5, 7) use 3 columns so the last row centers.
 */
function desktopColumns(count: number): number {
  if (count <= 1) return 1;
  if (count === 2 || count === 4) return 2;
  if (count === 3 || count % 3 === 0) return 3;
  if (count % 4 === 0) return 4;
  return 3;
}

function desktopMaxWidth(count: number): number {
  const cols = Math.min(desktopColumns(count), count);
  return cols * CARD_PX + Math.max(0, cols - 1) * GAP_PX;
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
    <figure className="flex w-[180px] shrink-0 snap-center flex-col gap-2">
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
  if (videos.length === 0) return null;

  const scrollable = videos.length > 1;

  return (
    <div className={className}>
      {heading && (
        <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">{heading}</h2>
      )}
      {description && (
        <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground">{description}</p>
      )}
      <div
        data-shorts-gallery=""
        className={cn(
          "mx-auto flex w-full gap-4 py-2",
          scrollable
            ? "max-w-full snap-x snap-mandatory flex-nowrap overflow-x-auto [scrollbar-width:thin] md:flex-wrap md:justify-center md:overflow-visible md:snap-none md:[max-width:var(--shorts-max)]"
            : "justify-center"
        )}
        style={
          scrollable
            ? ({ "--shorts-max": `${desktopMaxWidth(videos.length)}px` } as CSSProperties)
            : undefined
        }
      >
        {videos.map((video) => (
          <YouTubeShortCard key={video.videoId} {...video} />
        ))}
      </div>
    </div>
  );
}
