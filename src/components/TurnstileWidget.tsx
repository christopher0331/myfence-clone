"use client";

import { useEffect, useRef } from "react";

type TurnstileInstance = {
  render: (el: HTMLElement, options: Record<string, any>) => void;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileInstance;
  }
}

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

const RAW_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SITE_KEY =
  typeof RAW_SITE_KEY === "string" && RAW_SITE_KEY.trim().length > 0
    ? RAW_SITE_KEY.trim()
    : "0x4AAAAAACKXOd-Fzgaex5Li"; // fallback to provided key

export function TurnstileWidget({ onSuccess, onExpire, onError }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    const ensureScript = () =>
      new Promise<void>((resolve) => {
        if (window.turnstile) return resolve();
        const existing = document.querySelector<HTMLScriptElement>(
          'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]',
        );
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          return;
        }
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    ensureScript().then(() => {
      if (cancelled) return;
      if (!containerRef.current || !window.turnstile) return;
      if (typeof SITE_KEY !== "string" || SITE_KEY.length === 0) {
        console.error("[Turnstile] Missing or invalid sitekey; set NEXT_PUBLIC_TURNSTILE_SITE_KEY.");
        return;
      }
      window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (token: string) => onSuccess(token),
        "expired-callback": () => onExpire?.(),
        "error-callback": () => onError?.(),
      });
    });

    return () => {
      cancelled = true;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [onError, onExpire, onSuccess]);

  return <div ref={containerRef} className="cf-turnstile" />;
}


