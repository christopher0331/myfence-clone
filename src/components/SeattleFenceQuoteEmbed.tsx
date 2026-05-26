"use client";

import { useEffect, useState } from "react";

const QUOTE_ORIGIN = "https://seattlefencequote.com";
const QUOTE_URL = `${QUOTE_ORIGIN}/?source=myfence`;

/** Tall enough for the full multi-step quote flow without an inner scrollbar. */
const DEFAULT_HEIGHT = 5200;
const MIN_HEIGHT = 900;

function parseEmbedHeight(data: unknown): number | null {
  if (typeof data === "number" && data > 0) return data;
  if (typeof data === "string") {
    const n = parseInt(data, 10);
    if (!Number.isNaN(n) && n > 0) return n;
  }
  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
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
}

/**
 * Full-height embed for seattlefencequote.com. Listens for postMessage height
 * updates from the child app when available; otherwise uses a generous default
 * so users scroll the page, not a tiny iframe viewport.
 */
export default function SeattleFenceQuoteEmbed({
  className = "",
  title = "SeattleFenceQuote.com - Instant Online Quote",
}: SeattleFenceQuoteEmbedProps) {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== QUOTE_ORIGIN) return;
      const next = parseEmbedHeight(event.data);
      if (next != null) {
        setHeight(Math.max(MIN_HEIGHT, Math.ceil(next) + 48));
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      src={QUOTE_URL}
      width="100%"
      height={height}
      style={{ height, minHeight: "85vh" }}
      frameBorder={0}
      loading="lazy"
      title={title}
      className={`w-full border-0 rounded-lg ${className}`}
    />
  );
}
