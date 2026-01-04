"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact";
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact";
  className?: string;
}

const RAW_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SITE_KEY =
  typeof RAW_SITE_KEY === "string" && RAW_SITE_KEY.trim().length > 0
    ? RAW_SITE_KEY.trim()
    : "0x4AAAAAACKXOd-Fzgaex5Li"; // fallback to provided key

export function TurnstileWidget({
  onSuccess,
  onExpire,
  onError,
  theme = "auto",
  size = "normal",
  className = "cf-turnstile",
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const isRenderedRef = useRef(false);
  const onSuccessRef = useRef(onSuccess);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);
  const [isLoaded, setIsLoaded] = useState(false);

  // keep callbacks stable
  useEffect(() => {
    onSuccessRef.current = onSuccess;
    onExpireRef.current = onExpire;
    onErrorRef.current = onError;
  }, [onSuccess, onExpire, onError]);

  // load script once
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]',
    );
    if (existing) {
      if (window.turnstile) {
        setIsLoaded(true);
      } else {
        existing.addEventListener("load", () => setIsLoaded(true), { once: true });
      }
      return;
    }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);
  }, []);

  // render once
  useEffect(() => {
    if (!isLoaded || !containerRef.current || !window.turnstile || isRenderedRef.current) return;
    if (!SITE_KEY || typeof SITE_KEY !== "string") {
      console.error("[Turnstile] Missing or invalid sitekey; set NEXT_PUBLIC_TURNSTILE_SITE_KEY.");
      return;
    }
    isRenderedRef.current = true;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: (token: string) => onSuccessRef.current(token),
      "expired-callback": () => onExpireRef.current?.(),
      "error-callback": () => onErrorRef.current?.(),
      theme,
      size,
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (err) {
          // already removed
        }
      }
      widgetIdRef.current = null;
      isRenderedRef.current = false;
    };
  }, [isLoaded, theme, size]);

  return <div ref={containerRef} className={className} />;
}


