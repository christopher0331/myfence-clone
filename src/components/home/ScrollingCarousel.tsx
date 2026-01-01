"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/MyFence.com%201080x1080%201.webp?updatedAt=1762037747463&tr=w-280,q-55",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/MyFence.com%201080x1080%201.webp?updatedAt=1762037747463&tr=w-400,q-70",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Extreme%20Terrain%20Fence%20Job.webp?updatedAt=1762037741363&tr=w-280,q-55",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Extreme%20Terrain%20Fence%20Job.webp?updatedAt=1762037741363&tr=w-400,q-70",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Full%20Panel%20With%20Before%20Fence%20Genius%20Render.webp?updatedAt=1762037786713&tr=w-280,q-55",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Full%20Panel%20With%20Before%20Fence%20Genius%20Render.webp?updatedAt=1762037786713&tr=w-400,q-70",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Bryans%20Square.webp?updatedAt=1762037737857&tr=w-280,q-55",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Bryans%20Square.webp?updatedAt=1762037737857&tr=w-400,q-70",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/MyFence.com%201280x720%20Extreme%20Terrain.webp?updatedAt=1762037743125&tr=w-380,h-220,q-60",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/MyFence.com%201280x720%20Extreme%20Terrain.webp?updatedAt=1762037743125&tr=w-570,h-320,q-72",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Craftsman%20Style/Craftsman%20Style%20Fence%20With%20Fence%20Genius%201.webp?updatedAt=1762037598601&tr=w-380,h-220,q-60",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Craftsman%20Style/Craftsman%20Style%20Fence%20With%20Fence%20Genius%201.webp?updatedAt=1762037598601&tr=w-570,h-320,q-72",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Craftsman%20Style/Craftsman%20Style%20Fence%20With%20Fence%20Genius.webp?updatedAt=1762037598862&tr=w-380,h-220,q-60",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Craftsman%20Style/Craftsman%20Style%20Fence%20With%20Fence%20Genius.webp?updatedAt=1762037598862&tr=w-570,h-320,q-72",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Horizontal%20Fence/Horizontal%20Style%20With%20Fence%20Genius.webp?updatedAt=1762037633271&tr=w-380,h-220,q-60",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Horizontal%20Fence/Horizontal%20Style%20With%20Fence%20Genius.webp?updatedAt=1762037633271&tr=w-570,h-320,q-72",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/3%20Rail%20Picture%20Frame%20Pre-Stained%20Fence%20Fence%20Genius.webp?updatedAt=1762037642699&tr=w-280,q-55",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/3%20Rail%20Picture%20Frame%20Pre-Stained%20Fence%20Fence%20Genius.webp?updatedAt=1762037642699&tr=w-400,q-70",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%201280x720%20Software%204.webp?updatedAt=1762037635822&tr=w-380,h-220,q-60",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%201280x720%20Software%204.webp?updatedAt=1762037635822&tr=w-570,h-320,q-72",
    isWide: true,
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%20Software%20and%20Actual%203.webp?updatedAt=1762037647007&tr=w-280,q-55",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%20Software%20and%20Actual%203.webp?updatedAt=1762037647007&tr=w-400,q-70",
  },
  {
    mobile: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%20Software%20and%20Actual%205.webp?updatedAt=1762037644149&tr=w-280,q-55",
    desktop: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/MyFence.com%20Software%20and%20Actual%205.webp?updatedAt=1762037644149&tr=w-400,q-70",
  },
];

export const ScrollingCarousel = () => {
  const speedOptions = [1, 2, 3, 4, 5];
  const [speedIndex, setSpeedIndex] = useState(0); // Start at 1x
  const [isPaused, setIsPaused] = useState(false);

  const [isInView, setIsInView] = useState(false);

  const currentSpeed = speedOptions[speedIndex];

  // Intersection Observer to detect when component is in viewport
  useEffect(() => {
    const section = document.getElementById("scrolling-carousel");
    if (!section) return;

    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setIsInView(true), 1500);
        } else {
          clearTimeout(timeoutId);
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const cycleSpeed = () => {
    setSpeedIndex((prev) => (prev + 1) % speedOptions.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section id="scrolling-carousel" className="py-16 overflow-hidden bg-muted/50">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Powered by Fence Genius Technology</h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          See our process from design to installation. Our 3D renderings help prefabricate panels in the warehouse for
          precision and efficiency, followed by expert installation at your property.
        </p>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={togglePause}
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            className="rounded-full"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            onClick={cycleSpeed}
            aria-label={`Change speed (current: ${currentSpeed}x)`}
            className="rounded-full min-w-[80px] gap-2"
          >
            <Gauge className="h-4 w-4" />
            <span className="font-semibold">{currentSpeed}x</span>
          </Button>
        </div>
      </div>
      <div className="relative">
        {/* CSS marquee: no layout reads, no rAF loop, and only 2x DOM duplication */}
        <div
          className={[
            "flex items-center w-max will-change-transform scrolling-marquee",
            isPaused || !isInView ? "scrolling-marquee-paused" : "",
          ].join(" ")}
          style={
            {
              // 1x ≈ 55s, faster speeds reduce duration.
              ["--marquee-duration" as any]: `${55 / currentSpeed}s`,
            } as React.CSSProperties
          }
        >
          {[...images, ...images].map((image, index) => {
            const baseIndex = index % images.length;
            const isDuplicateSet = index >= images.length;

            return (
              <div
                key={`img-${index}`}
                aria-hidden={isDuplicateSet ? "true" : undefined}
                className={`relative flex-shrink-0 mx-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-muted/50 ${
                  image.isWide
                    ? "w-[320px] h-[180px] md:w-[570px] md:h-[320px]"
                    : "w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
                }`}
              >
                {!isDuplicateSet && (
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded z-10">
                    {baseIndex + 1}
                  </div>
                )}
                <picture>
                  <source media="(max-width: 767px)" srcSet={image.mobile} />
                  <source media="(min-width: 768px)" srcSet={image.desktop} />
                  <img
                    src={image.desktop}
                    alt={isDuplicateSet ? "" : `Seattle Fence Project ${baseIndex + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <Button
          asChild
          size="lg"
          className="gap-2 text-base"
        >
          <a href="/fence-genius">
            <Gauge className="h-5 w-5" />
            See How Fence Genius Works
          </a>
        </Button>
      </div>
    </section>
  );
};
