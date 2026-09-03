import serviceAreaPhotos from "@/data/serviceAreaPhotos.json";
import projectBeforeAfter from "@/data/projectBeforeAfter.json";

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
  /** Optional full ImageKit URL (same asset as `file`); gallery still uses `file` + transforms. */
  url?: string;
  phase?: "before" | "after" | "locate";
  fenceStyle?: string | null;
  fenceStyleSlug?: string | null;
  workOrderId?: string;
}

export interface ProjectBeforeAfterPair {
  workOrderId: string;
  completedAt?: string | null;
  city: string;
  neighborhood: string | null;
  fenceStyle: string;
  fenceStyleSlug: string | null;
  lat: number;
  lng: number;
  beforeFile: string;
  afterFile: string;
  beforeAlt: string;
  afterAlt: string;
}

/** Section labels in serviceAreaPhotos.json — use `{ "__manifestSection": "..." }` (JSON does not allow // comments). */
function isManifestPhotoRow(entry: unknown): entry is ServiceAreaPhoto {
  if (!entry || typeof entry !== "object") return false;
  const row = entry as Record<string, unknown>;
  if ("__manifestSection" in row) return false;
  if (typeof row.file !== "string" || !row.file.trim()) return false;
  if (typeof row.city !== "string" || !row.city.trim()) return false;
  if (typeof row.lat !== "number" || typeof row.lng !== "number") return false;
  if (typeof row.width !== "number" || typeof row.height !== "number") return false;
  if (typeof row.cityAlt !== "string") return false;
  return true;
}

const photos = (serviceAreaPhotos as unknown[]).filter(isManifestPhotoRow);

const beforeAfterPairs = (projectBeforeAfter as unknown[]).filter(
  (entry): entry is ProjectBeforeAfterPair => {
    if (!entry || typeof entry !== "object") return false;
    const row = entry as Record<string, unknown>;
    return (
      typeof row.workOrderId === "string" &&
      typeof row.city === "string" &&
      typeof row.beforeFile === "string" &&
      typeof row.afterFile === "string"
    );
  }
);

function isGalleryPhoto(photo: ServiceAreaPhoto): boolean {
  return !photo.phase || photo.phase === "after";
}

export function slugifyLocation(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function getAllServiceAreaPhotos(): ServiceAreaPhoto[] {
  return photos.filter(isGalleryPhoto);
}

export function getCityPhotosBySlug(citySlug: string): ServiceAreaPhoto[] {
  return photos.filter(
    (photo) => isGalleryPhoto(photo) && slugifyLocation(photo.city) === citySlug
  );
}

export function getNeighborhoodPhotosBySlugs(
  citySlug: string,
  neighborhoodSlug: string
): ServiceAreaPhoto[] {
  return photos.filter(
    (photo) =>
      isGalleryPhoto(photo) &&
      slugifyLocation(photo.city) === citySlug &&
      photo.neighborhood &&
      slugifyLocation(photo.neighborhood) === neighborhoodSlug
  );
}

export function getPhotosByFenceStyleSlug(fenceStyleSlug: string): ServiceAreaPhoto[] {
  return photos.filter(
    (photo) =>
      isGalleryPhoto(photo) &&
      photo.fenceStyleSlug &&
      photo.fenceStyleSlug === fenceStyleSlug
  );
}

export function getProjectBeforeAfterPairs(filter: {
  city?: string;
  neighborhood?: string;
  fenceStyleSlug?: string;
}): ProjectBeforeAfterPair[] {
  const citySlug = filter.city ? slugifyLocation(filter.city) : null;
  const nbSlug = filter.neighborhood ? slugifyLocation(filter.neighborhood) : null;
  const styleSlug = filter.fenceStyleSlug || null;

  return beforeAfterPairs.filter((pair) => {
    if (styleSlug && pair.fenceStyleSlug !== styleSlug) return false;
    if (citySlug && slugifyLocation(pair.city) !== citySlug) return false;
    if (nbSlug) {
      return pair.neighborhood
        ? slugifyLocation(pair.neighborhood) === nbSlug
        : false;
    }
    return true;
  });
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

/** CSS `aspect-ratio` from manifest pixels so portrait vs landscape frames match the photo. */
export function cssAspectRatioFromPhoto(photo: ServiceAreaPhoto): string {
  const { width, height } = photo;
  if (width > 0 && height > 0) return `${width} / ${height}`;
  return "4 / 3";
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
