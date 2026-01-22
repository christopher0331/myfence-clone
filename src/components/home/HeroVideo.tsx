"use client";

import { useEffect, useState } from "react";

/**
 * Client component that defers mounting the YouTube iframe
 * This keeps the third-party JS off the main thread during initial load
 */
export default function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Defer mounting the iframe until after the first paint
    const id = window.requestAnimationFrame(() => {
      setShowVideo(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  if (!showVideo) return null;

  return (
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/LlFKNi-35Mk?autoplay=1&mute=1&loop=1&playlist=LlFKNi-35Mk&controls=0&playsinline=1&modestbranding=1&rel=0"
      allow="autoplay; encrypted-media; picture-in-picture"
      referrerPolicy="no-referrer-when-downgrade"
      title="MyFence.com installation montage"
      loading="lazy"
    />
  );
}
