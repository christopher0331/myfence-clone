"use client";

import { useCallback } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Link2, Share2, Twitter } from "lucide-react";

interface BlogShareButtonsProps {
  title: string;
  url: string;
}

type PreferredSourceClient = {
  init: (options: { theme?: "light" | "dark"; lang?: string }) => void;
  addPreferredSource: () => void;
};

declare global {
  interface Window {
    PREFERRED_SOURCE?: Array<(client: PreferredSourceClient) => void> | PreferredSourceClient;
  }
}

function openPreferredSource() {
  const queue = window.PREFERRED_SOURCE;
  if (Array.isArray(queue)) {
    queue.push((client) => {
      client.init({ theme: "light", lang: "en" });
      client.addPreferredSource();
    });
    return;
  }
  if (queue && typeof queue.addPreferredSource === "function") {
    queue.addPreferredSource();
  }
}

export default function BlogShareButtons({ title, url }: BlogShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Twitter,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
  ];

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
  };

  const nativeShare = async () => {
    if (!navigator.share) return;
    await navigator.share({ title, url });
  };

  const addPreferredSource = useCallback(() => {
    openPreferredSource();
  }, []);

  return (
    <div className="mb-8 rounded-lg border bg-card px-3 py-2">
      <Script
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="afterInteractive"
        {...{ "preferred-sources-control": "manual" }}
        onReady={() => {
          const queue = (window.PREFERRED_SOURCE = window.PREFERRED_SOURCE || []);
          if (Array.isArray(queue)) {
            queue.push((client) => client.init({ theme: "light", lang: "en" }));
          }
        }}
      />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground sm:text-sm">
          <Share2 className="h-3.5 w-3.5" />
          Share
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          <Button
            type="button"
            variant="outline"
            onClick={addPreferredSource}
            aria-label="Add MyFence as a Preferred Source on Google"
            className="h-8 shrink-0 gap-1.5 px-2.5 text-xs font-medium"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Preferred
          </Button>
          {shareLinks.map(({ label, href, icon: Icon }) => (
            <Button key={label} variant="outline" size="icon" asChild className="h-8 w-8">
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`}>
                <Icon className="h-3.5 w-3.5" />
              </a>
            </Button>
          ))}
          <Button variant="outline" size="icon" onClick={copyLink} aria-label="Copy article link" className="h-8 w-8">
            <Link2 className="h-3.5 w-3.5" />
          </Button>
          {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
            <Button
              variant="outline"
              size="icon"
              onClick={nativeShare}
              aria-label="Open device share dialog"
              className="h-8 w-8"
            >
              <Share2 className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
