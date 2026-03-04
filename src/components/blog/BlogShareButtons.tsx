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
    <div className="border rounded-lg p-4 bg-card mb-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium mr-2 inline-flex items-center gap-1">
          <Share2 className="h-4 w-4" /> Share this article:
        </span>
        {shareLinks.map(({ label, href, icon: Icon }) => (
          <Button key={label} variant="outline" size="sm" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`}>
              <Icon className="h-4 w-4 mr-1" />
              {label}
            </a>
          </Button>
        ))}
        <Button variant="outline" size="sm" onClick={copyLink} aria-label="Copy article link">
          <Link2 className="h-4 w-4 mr-1" />
          Copy link
        </Button>
        {typeof navigator !== "undefined" && navigator.share && (
          <Button variant="outline" size="sm" onClick={nativeShare} aria-label="Open device share dialog">
            <Share2 className="h-4 w-4 mr-1" />
            More
          </Button>
        )}
      </div>
    </div>
  );
}
