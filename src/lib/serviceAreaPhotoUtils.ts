import serviceAreaPhotos from "@/data/serviceAreaPhotos.json";

export const IMAGEKIT_SERVICE_AREA_BASE =
  "https://ik.imagekit.io/xft9mcl5v/service-area-photos";

export interface ServiceAreaPhoto {
  file: string;
  width: number;
  height: number;
  city: string;
  neighborhood: string | null;
  cityAlt: string;
  neighborhoodAlt: string | null;
  lat: number;
  lng: number;
}

const photos = serviceAreaPhotos as ServiceAreaPhoto[];

export function slugifyLocation(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function getAllServiceAreaPhotos(): ServiceAreaPhoto[] {
  return photos;
}

export function getCityPhotosBySlug(citySlug: string): ServiceAreaPhoto[] {
  return photos.filter((photo) => slugifyLocation(photo.city) === citySlug);
}

export function getNeighborhoodPhotosBySlugs(
  citySlug: string,
  neighborhoodSlug: string
): ServiceAreaPhoto[] {
  return photos.filter(
    (photo) =>
      slugifyLocation(photo.city) === citySlug &&
      photo.neighborhood &&
      slugifyLocation(photo.neighborhood) === neighborhoodSlug
  );
}

export function getCityNameBySlug(citySlug: string): string | null {
  const match = photos.find((photo) => slugifyLocation(photo.city) === citySlug);
  return match ? match.city : null;
}

export function getNeighborhoodNameBySlugs(
  citySlug: string,
  neighborhoodSlug: string
): string | null {
  const match = photos.find(
    (photo) =>
      slugifyLocation(photo.city) === citySlug &&
      photo.neighborhood &&
      slugifyLocation(photo.neighborhood) === neighborhoodSlug
  );
  return match?.neighborhood ?? null;
}

export function getNeighborhoodsForCity(citySlug: string): string[] {
  const names = new Set<string>();
  for (const photo of getCityPhotosBySlug(citySlug)) {
    if (photo.neighborhood) {
      names.add(photo.neighborhood);
    }
  }
  return Array.from(names);
}

export function buildImageUrl(file: string, width?: number): string {
  const base = `${IMAGEKIT_SERVICE_AREA_BASE}/${file}`;
  if (!width) return base;
  return `${base}?tr=w-${width}`;
}

export function buildResponsiveSrcSet(
  file: string,
  maxWidth: number
): string {
  const candidates = [300, 400, 600, 800].filter(
    (width) => width < maxWidth
  );
  if (maxWidth <= 800) candidates.push(maxWidth);

  const unique = Array.from(new Set(candidates)).sort((a, b) => a - b);
  return unique.map((width) => `${buildImageUrl(file, width)} ${width}w`).join(", ");
}
