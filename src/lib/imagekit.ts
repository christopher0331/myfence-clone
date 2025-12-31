import type { ImageLoader } from "next/image";

// ImageKit loader for next/image that:
// - preserves existing query params (ex: updatedAt=...)
// - applies width-based transforms
// - uses lower quality for smaller widths (mobile) to reduce transfer size
export const imageKitLoader: ImageLoader = ({ src, width, quality }) => {
  const url = new URL(src);

  const inferredQuality =
    quality ??
    // Aggressive on mobile to improve Lighthouse.
    (width <= 360
      ? 42
      : width <= 420
        ? 46
        : width <= 560
          ? 52
          : width <= 640
            ? 56
            : width <= 768
              ? 62
              : 74);

  // Use ImageKit's transformation query param.
  // If the URL already contains `tr`, we overwrite it so Next's responsive widths stay accurate.
  url.searchParams.set("tr", `w-${width},q-${inferredQuality}`);
  return url.toString();
};


