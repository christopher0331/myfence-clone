"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const QUOTE_ORIGIN = "https://seattlefencequote.com";
const QUOTE_URL = `${QUOTE_ORIGIN}/?source=myfence`;

/** Fallback until the child app posts its real height (see docs/seattlefencequote-embed-height-bridge.js). */
const FALLBACK_HEIGHT = 5200;
const MIN_HEIGHT = 720;

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
}

/**
 * Embeds seattlefencequote.com and resizes to match content height when the
 * child page runs the bridge script (docs/seattlefencequote-embed-height-bridge.js).
 */
export default function SeattleFenceQuoteEmbed({
  className = "",
  title = "SeattleFenceQuote.com - Instant Online Quote",
}: SeattleFenceQuoteEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(FALLBACK_HEIGHT);
  const [hasDynamicHeight, setHasDynamicHeight] = useState(false);

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
      if (next == null) return;
      setHasDynamicHeight(true);
      setHeight(Math.max(MIN_HEIGHT, Math.ceil(next) + 32));
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const onIframeLoad = useCallback(() => {
    requestChildHeight();
    for (const ms of [100, 400, 1000, 2500]) {
      window.setTimeout(requestChildHeight, ms);
    }
  }, [requestChildHeight]);

  useEffect(() => {
    if (!hasDynamicHeight) return;
    const interval = window.setInterval(requestChildHeight, 2000);
    return () => clearInterval(interval);
  }, [hasDynamicHeight, requestChildHeight]);

  return (
    <iframe
      ref={iframeRef}
      src={QUOTE_URL}
      width="100%"
      height={height}
      style={{
        height,
        minHeight: hasDynamicHeight ? undefined : "85vh",
        overflow: "hidden",
      }}
      frameBorder={0}
      scrolling="no"
      loading="lazy"
      title={title}
      onLoad={onIframeLoad}
      className={`w-full border-0 rounded-lg block ${className}`}
    />
  );
}
