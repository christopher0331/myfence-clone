"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  buildImageUrl,
  getCityPhotosBySlug,
  getNeighborhoodPhotosBySlugs,
  slugifyLocation,
} from "@/lib/serviceAreaPhotoUtils";

interface ServiceAreaPhotoGalleryProps {
  city: string;
  neighborhood?: string;
  title?: string;
  description?: string;
}

export default function ServiceAreaPhotoGallery({
  city,
  neighborhood,
  title,
  description,
}: ServiceAreaPhotoGalleryProps) {
  const speedOptions = [1, 2, 3, 4, 5];
  const [speedIndex, setSpeedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const currentSpeed = speedOptions[speedIndex];

  const citySlug = slugifyLocation(city);
  const neighborhoodSlug = neighborhood ? slugifyLocation(neighborhood) : null;

  const photos = neighborhoodSlug
    ? getNeighborhoodPhotosBySlugs(citySlug, neighborhoodSlug)
    : getCityPhotosBySlug(citySlug);

  useEffect(() => {
    const section = document.getElementById("service-area-carousel");
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

  if (!photos.length) {
    return null;
  }

  const useCarousel = photos.length > 3;

  const heading =
    title ??
    (neighborhood
      ? `Recent Fence Installations in ${neighborhood}`
      : `Recent Fence Installations in ${city}`);

  const bodyText =
    description ??
    (neighborhood
      ? `Examples of recent fence projects completed in ${neighborhood}, ${city}.`
      : `Examples of recent fence projects completed throughout ${city}.`);

  const cycleSpeed = () => {
    setSpeedIndex((prev) => (prev + 1) % speedOptions.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  if (!useCarousel) {
    return (
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{heading}</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            {bodyText}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {photos.map((photo) => {
              const alt = neighborhood
                ? photo.neighborhoodAlt || photo.cityAlt
                : photo.cityAlt;
              return (
                <div
                  key={photo.file}
                  className="rounded-lg overflow-hidden shadow-lg bg-muted/50 w-[280px] md:w-[320px]"
                >
                  <picture>
                    <source media="(max-width: 767px)" srcSet={buildImageUrl(photo.file, 400)} />
                    <source media="(min-width: 768px)" srcSet={buildImageUrl(photo.file, 600)} />
                    <img
                      src={buildImageUrl(photo.file, 600)}
                      alt={alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  const tripled = [...photos, ...photos, ...photos];
  const allImages = [...tripled, ...tripled];

  return (
    <section id="service-area-carousel" className="py-16 overflow-hidden bg-muted/50">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{heading}</h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          {bodyText}
        </p>

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
        <div
          className={[
            "flex items-center w-max will-change-transform scrolling-marquee",
            isPaused || !isInView ? "scrolling-marquee-paused" : "",
          ].join(" ")}
          style={
            {
              ["--marquee-duration" as string]: `${55 / currentSpeed}s`,
            } as React.CSSProperties
          }
        >
          {allImages.map((photo, index) => {
            const isDuplicateSet = index >= tripled.length;
            const alt = neighborhood
              ? photo.neighborhoodAlt || photo.cityAlt
              : photo.cityAlt;

            return (
              <div
                key={`img-${index}`}
                aria-hidden={isDuplicateSet ? "true" : undefined}
                className="relative flex-shrink-0 mx-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-muted/50 w-[180px] h-[240px] md:w-[220px] md:h-[293px]"
              >
                <picture>
                  <source media="(max-width: 767px)" srcSet={buildImageUrl(photo.file, 220)} />
                  <source media="(min-width: 768px)" srcSet={buildImageUrl(photo.file, 300)} />
                  <img
                    src={buildImageUrl(photo.file, 300)}
                    alt={isDuplicateSet ? "" : alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
