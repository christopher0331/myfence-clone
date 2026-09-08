import type { ImageLoader } from "next/image";

// ImageKit loader for next/image that:
// - preserves existing query params (ex: updatedAt=...)
// - applies width-based transforms
// - uses lower quality for smaller widths (mobile) to reduce transfer size
export const imageKitLoader: ImageLoader = ({ src, width, quality }) => {
  const url = new URL(src);

  const inferredQuality =
    quality ??
    // Mobile-first compression (Google/Lighthouse index mobile first), but keep desktop crisp.
    // Note: width here is the requested pixel width (often includes DPR).
    (width <= 360
      ? 38
      : width <= 420
        ? 40
        : width <= 560
          ? 42
          : width <= 640
            ? 45
            : width <= 768
              ? 55
              : width <= 1024
                ? 70
                : width <= 1440
                  ? 78
                  : 82);

  // Use ImageKit's transformation query param.
  // If the URL already contains `tr`, we overwrite it so Next's responsive widths stay accurate.
  url.searchParams.set("tr", `w-${width},q-${inferredQuality}`);
  return url.toString();
};


