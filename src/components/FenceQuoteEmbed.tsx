"use client";

import { useEffect, useRef, useState } from "react";

const EMBED_ORIGIN = "https://seattlefencequote.com";
const EMBED_URL = `${EMBED_ORIGIN}/`;
// Reasonable starting height so the page doesn't jump when the first
// message arrives. Will be corrected within ~1s of the app loading.
const INITIAL_HEIGHT = 900;

type ResizeMessage = {
  type: "fence-builder:resize";
  height: number;
  path: string;
};

export default function FenceQuoteEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(INITIAL_HEIGHT);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Security: only accept messages from the embedded app's origin.
      if (event.origin !== EMBED_ORIGIN) return;

      const data = event.data as ResizeMessage;
      if (data?.type !== "fence-builder:resize") return;
      if (typeof data.height !== "number" || data.height <= 0) return;

      setHeight(data.height);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // In case the iframe finished loading before our listener attached,
  // ask the app to re-send its current height.
  const handleIframeLoad = () => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "fence-builder:request-height" },
      EMBED_ORIGIN
    );
  };

  return (
    <iframe
      ref={iframeRef}
      src={EMBED_URL}
      onLoad={handleIframeLoad}
      scrolling="no"
      title="Instant Fence Quote Builder"
      style={{
        display: "block",
        width: "100%",
        height: `${height}px`,
        border: "none",
        overflow: "hidden",
        transition: "height 0.25s ease",
      }}
    />
  );
}
