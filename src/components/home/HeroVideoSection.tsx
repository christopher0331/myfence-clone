"use client";

import { useEffect, useState } from "react";

export const HeroVideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Defer mounting the iframe until after the first paint
    const id = window.requestAnimationFrame(() => {
      setShowVideo(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative h-64 sm:h-72 md:h-screen w-full border-b">
      <div className="relative h-full w-full">
        <div className="video-hero" aria-hidden="true">
          {showVideo && (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LlFKNi-35Mk?autoplay=1&mute=1&loop=1&playlist=LlFKNi-35Mk&controls=0&playsinline=1&modestbranding=1&rel=0"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="no-referrer-when-downgrade"
              title="MyFence.com installation montage"
              loading="lazy"
            />
          )}
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-32 bg-gradient-to-b from-transparent to-background"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
