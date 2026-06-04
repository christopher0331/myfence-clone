"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const QUOTE_ORIGIN = "https://seattlefencequote.com";
const QUOTE_URL = `${QUOTE_ORIGIN}/?source=myfence&embed=1`;

/** Tall default so the full wizard is reachable via page scroll before/with bridge updates. */
const FALLBACK_HEIGHT = 9000;
const HEIGHT_PADDING = 64;

function parseEmbedHeight(data: unknown): number | null {
  if (typeof data === "number" && data > 0) return data;
  if (typeof data === "string") {
    const n = parseInt(data, 10);
    if (!Number.isNaN(n) && n > 0) return n;
  }
  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    if (o.type === "seattlefencequote:resize" && typeof o.height === "number") {
      return o.height;
    }
    if (typeof o.height === "number" && o.height > 0) return o.height;
    if (typeof o.embedHeight === "number" && o.embedHeight > 0) return o.embedHeight;
    if (o.type === "resize" && typeof o.height === "number") return o.height;
    if (typeof o["iframe-height"] === "number") return o["iframe-height"];
  }
  return null;
}

interface SeattleFenceQuoteEmbedProps {
  className?: string;
  title?: string;
  /** Flush, borderless layout — reads as part of the host page, not a boxed iframe. */
  seamless?: boolean;
}

/**
 * Embeds seattlefencequote.com. Height grows via postMessage when the child runs
 * docs/seattlefencequote-embed-height-bridge.js. Scrolling stays enabled so
 * content is never clipped if height is underestimated.
 */
export default function SeattleFenceQuoteEmbed({
  className = "",
  title = "SeattleFenceQuote.com - Instant Online Quote",
  seamless = true,
}: SeattleFenceQuoteEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(FALLBACK_HEIGHT);

  const requestChildHeight = useCallback(() => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "myfence-request-height" },
      QUOTE_ORIGIN
    );
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== QUOTE_ORIGIN) return;
      const next = parseEmbedHeight(event.data);
      if (next == null || next < 400) return;

      // Never shrink — only grow so a bad early measurement can't clip content.
      setHeight((prev) => Math.max(prev, Math.ceil(next) + HEIGHT_PADDING));
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const onIframeLoad = useCallback(() => {
    requestChildHeight();
    for (const ms of [100, 400, 1000, 2500, 5000, 8000]) {
      window.setTimeout(requestChildHeight, ms);
    }
  }, [requestChildHeight]);

  useEffect(() => {
    const interval = window.setInterval(requestChildHeight, 2000);
    return () => clearInterval(interval);
  }, [requestChildHeight]);

  return (
    <div
      className={cn(
        "quote-embed-root w-full",
        seamless ? "bg-background" : "rounded-lg border bg-card shadow-sm overflow-hidden",
        className
      )}
    >
      <iframe
        ref={iframeRef}
        src={QUOTE_URL}
        width="100%"
        height={height}
        style={{
          height,
          minHeight: FALLBACK_HEIGHT,
          display: "block",
        }}
        frameBorder={0}
        scrolling="yes"
        loading="lazy"
        title={title}
        onLoad={onIframeLoad}
        className={cn(
          "w-full border-0 bg-background",
          seamless ? "rounded-none shadow-none" : "rounded-lg"
        )}
      />
    </div>
  );
}
