import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/constants/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.fullName} — ${SITE_CONFIG.tagline}`,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fffae9",
    theme_color: "#fe9b44",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
