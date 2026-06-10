"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const QUOTE_ORIGIN = "https://seattlefencequote.com";
const QUOTE_URL = `${QUOTE_ORIGIN}/?source=myfence&embed=1`;
const INITIAL_EMBED_HEIGHT = 720;

interface SeattleFenceQuoteEmbedProps {
  className?: string;
  title?: string;
  /** Flush, borderless layout — reads as part of the host page, not a boxed iframe. */
  seamless?: boolean;
}

/**
 * Embeds seattlefencequote.com and auto-resizes the iframe to match the child
 * page's content height via the `fence-builder:resize` postMessage protocol,
 * so the tool grows/shrinks with the host page instead of scrolling internally.
 */
export default function SeattleFenceQuoteEmbed({
  className = "",
  title = "SeattleFenceQuote.com - Instant Online Quote",
  seamless = true,
}: SeattleFenceQuoteEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(INITIAL_EMBED_HEIGHT);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== QUOTE_ORIGIN) return;

      const data = event.data;
      if (
        data &&
        data.type === "fence-builder:resize" &&
        typeof data.height === "number"
      ) {
        setHeight(data.height);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div
      className={cn(
        "quote-embed-root w-full overflow-hidden",
        seamless ? "bg-background" : "rounded-lg border bg-card shadow-sm",
        className
      )}
    >
      <iframe
        ref={iframeRef}
        id="fence-builder"
        src={QUOTE_URL}
        width="100%"
        height={height}
        style={{
          height: `${height}px`,
          display: "block",
        }}
        frameBorder={0}
        scrolling="no"
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
