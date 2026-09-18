"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export type YouTubeShort = {
  videoId: string;
  title: string;
  mute?: boolean;
  hideControls?: boolean;
};

function youtubeShortEmbedSrc(videoId: string, mute = false, hideControls = false) {
  const params = new URLSearchParams({
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    vq: "hd1080",
  });
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

  const gridClass =
    videos.length === 1
      ? "grid grid-cols-1 max-w-[340px] mx-auto md:mx-0"
      : videos.length === 2
        ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
        : "grid grid-cols-2 md:grid-cols-3 gap-4";

  return (
    <div className={className}>
      {heading && (
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{heading}</h2>
      )}
      {description && (
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">{description}</p>
      )}
      <div className={gridClass}>
        {videos.map((video) => (
          <YouTubeShortEmbed key={video.videoId} {...video} />
        ))}
      </div>
    </div>
  );
}
