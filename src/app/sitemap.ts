import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/siteConfig";

const APP_DIR = path.join(process.cwd(), "src", "app");
const BLOG_CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");
const PAGE_FILE_PATTERN = /^page\.(tsx|ts|jsx|js|mdx|md)$/;

async function collectAppRoutes(dir: string, routePath = ""): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const hasPageFile = entries.some(
    (entry) => entry.isFile() && PAGE_FILE_PATTERN.test(entry.name),
  );

  const routes: string[] = [];

  // Add the current route if this directory has a page file.
  if (hasPageFile && !routePath.startsWith("/api")) {
    routes.push(routePath || "/");
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;

    // Skip api and framework-internal folders.
    if (name === "api" || name.startsWith("_")) continue;

    // Skip dynamic segments; include explicit static routes only.
    if (name.startsWith("[") && name.endsWith("]")) continue;

    // Route groups do not appear in URLs.
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

  const allRoutes = Array.from(new Set([...appRoutes, ...blogRoutes])).sort();
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
