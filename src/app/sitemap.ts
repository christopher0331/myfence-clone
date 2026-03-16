import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/siteConfig";
import serviceAreaPhotos from "@/data/serviceAreaPhotos.json";

const APP_DIR = path.join(process.cwd(), "src", "app");
const BLOG_CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");
const PAGE_FILE_PATTERN = /^page\.(tsx|ts|jsx|js|mdx|md)$/;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Extracts all valid service-area routes from the photo manifest.
 * This catches cities/neighborhoods served by the [city] and [neighborhood]
 * dynamic routes that don't have their own static directories.
 */
function collectDynamicServiceAreaRoutes(): string[] {
  const citySet = new Set<string>();
  const neighborhoodSet = new Set<string>();

  for (const photo of serviceAreaPhotos) {
    const citySlug = slugify(photo.city);
    citySet.add(`/service-areas/${citySlug}`);

    if (photo.neighborhood) {
      const nbSlug = slugify(photo.neighborhood);
      neighborhoodSet.add(`/service-areas/${citySlug}/${nbSlug}`);
    }
  }

  return Array.from(citySet).concat(Array.from(neighborhoodSet));
}

async function collectAppRoutes(dir: string, routePath = ""): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const hasPageFile = entries.some(
    (entry) => entry.isFile() && PAGE_FILE_PATTERN.test(entry.name),
  );

  const routes: string[] = [];

  if (hasPageFile && !routePath.startsWith("/api")) {
    routes.push(routePath || "/");
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;

    if (name === "api" || name.startsWith("_")) continue;

    // Skip dynamic segments — their URLs are collected separately.
    if (name.startsWith("[") && name.endsWith("]")) continue;

    const nextRoutePath =
      name.startsWith("(") && name.endsWith(")")
        ? routePath
        : `${routePath}/${name}`;

    const childDir = path.join(dir, name);
    routes.push(...(await collectAppRoutes(childDir, nextRoutePath)));
  }

  return routes;
}

async function collectBlogRoutes(): Promise<string[]> {
  try {
    const entries = await fs.readdir(BLOG_CONTENT_DIR, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry) => `/blog/${entry.name.replace(/\.mdx$/, "")}`);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [appRoutes, blogRoutes] = await Promise.all([
    collectAppRoutes(APP_DIR),
    collectBlogRoutes(),
  ]);

  const dynamicServiceAreaRoutes = collectDynamicServiceAreaRoutes();

  const allRoutes = Array.from(
    new Set([...appRoutes, ...blogRoutes, ...dynamicServiceAreaRoutes]),
  ).sort();
  const now = new Date();

  return allRoutes.map((route) => {
    const isHome = route === "/";
    const isBlog = route.startsWith("/blog");
    const isServiceArea = route.startsWith("/service-areas");

    return {
      url: new URL(route, SITE_CONFIG.url).toString(),
      lastModified: now,
      changeFrequency: isHome || isBlog ? "weekly" : "monthly",
      priority: isHome ? 1 : isServiceArea ? 0.8 : 0.7,
    };
  });
}
