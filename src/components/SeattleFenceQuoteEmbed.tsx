"use client";

import { cn } from "@/lib/utils";

const QUOTE_ORIGIN = "https://seattlefencequote.com";
const QUOTE_URL = `${QUOTE_ORIGIN}/?source=myfence&embed=1`;
const FIXED_EMBED_HEIGHT = "clamp(640px, 85vh, 900px)";

interface SeattleFenceQuoteEmbedProps {
  className?: string;
  title?: string;
  /** Flush, borderless layout — reads as part of the host page, not a boxed iframe. */
  seamless?: boolean;
}

/**
 * Embeds seattlefencequote.com in a fixed viewport-height window.
 * The child page scrolls internally so the map/tool does not stretch the host page.
 */
export default function SeattleFenceQuoteEmbed({
  className = "",
  title = "SeattleFenceQuote.com - Instant Online Quote",
  seamless = true,
}: SeattleFenceQuoteEmbedProps) {
  return (
    <div
      className={cn(
        "quote-embed-root w-full overflow-hidden",
        seamless ? "bg-background" : "rounded-lg border bg-card shadow-sm",
        className
      )}
    >
      <iframe
        src={QUOTE_URL}
        width="100%"
        height="720"
        style={{
          height: FIXED_EMBED_HEIGHT,
          display: "block",
        }}
        frameBorder={0}
        scrolling="yes"
        loading="lazy"
        title={title}
        className={cn(
          "w-full border-0 bg-background",
          seamless ? "rounded-none shadow-none" : "rounded-lg"
        )}
      />
    </div>
  );
}
