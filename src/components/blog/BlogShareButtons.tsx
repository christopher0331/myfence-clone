"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Link2, Share2, Twitter } from "lucide-react";

interface BlogShareButtonsProps {
  title: string;
  url: string;
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

  return (
    <div className="mb-8 rounded-lg border bg-card px-3 py-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground sm:text-sm">
          <Share2 className="h-3.5 w-3.5" />
          Share
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
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
          {typeof navigator !== "undefined" && navigator.share && (
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
