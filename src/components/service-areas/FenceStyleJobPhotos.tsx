"use client";

import { usePathname } from "next/navigation";
import {
  buildImageUrl,
  cssAspectRatioFromPhoto,
  getPhotosByFenceStyleSlug,
} from "@/lib/serviceAreaPhotoUtils";
import ProjectBeforeAfter from "@/components/service-areas/ProjectBeforeAfter";

const MAX_STYLE_PHOTOS = 12;

export default function FenceStyleJobPhotos() {
  const pathname = usePathname() || "";
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] !== "fence-styles" || parts.length < 2) return null;

  const fenceStyleSlug = parts[1];
  const photos = getPhotosByFenceStyleSlug(fenceStyleSlug).slice(
    0,
    MAX_STYLE_PHOTOS
  );

  if (!photos.length) {
    return <ProjectBeforeAfter fenceStyleSlug={fenceStyleSlug} />;
  }

  return (
    <>
      <ProjectBeforeAfter fenceStyleSlug={fenceStyleSlug} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Recent installations
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Field photos from completed jobs tagged as this fence style.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {photos.map((photo) => (
              <div
                key={photo.file}
                className="rounded-lg overflow-hidden shadow-lg bg-muted/50 w-[280px] md:w-[320px] max-w-[min(100vw-2rem,320px)]"
                style={{ aspectRatio: cssAspectRatioFromPhoto(photo) }}
              >
                <img
                  src={buildImageUrl(photo.file, 600)}
                  alt={photo.neighborhoodAlt || photo.cityAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
