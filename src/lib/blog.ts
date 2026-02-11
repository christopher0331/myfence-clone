import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { blogArticles } from "@/data/blogArticles";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

/** Unified blog post shape for listing */
export interface BlogPostListItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string | { src: string };
  readTime: string;
  publishDate: string;
}

/** Merge MDX posts (Studio) with legacy component-based posts. MDX wins on slug collision. */
export function getAllBlogPosts(): BlogPostListItem[] {
  const mdxPosts = getMdxBlogPosts();
  const mdxSlugs = new Set(mdxPosts.map((p) => p.slug));
  const legacyPosts = blogArticles.filter((a) => !mdxSlugs.has(a.id));
  const legacyAsList: BlogPostListItem[] = legacyPosts.map((a) => ({
    id: a.id,
    title: a.title,
    category: a.category,
    description: a.description,
    image: a.image,
    readTime: a.readTime,
    publishDate: a.publishDate,
  }));
  const mdxAsList: BlogPostListItem[] = mdxPosts.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    description: p.description,
    image: p.image,
    readTime: p.readTime,
    publishDate: p.publishDate,
  }));
  const combined = [...mdxAsList, ...legacyAsList];
  return combined.sort((a, b) => {
    const dateA = a.publishDate ? new Date(a.publishDate).getTime() : 0;
    const dateB = b.publishDate ? new Date(b.publishDate).getTime() : 0;
    return dateB - dateA;
  });
}

export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  readTime: string;
  publishDate: string;
}

export interface MdxBlogPost extends BlogPostMeta {
  body: string;
}

/** Get all MDX blog posts from src/content/blog/ (for listing) */
export function getMdxBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const posts: BlogPostMeta[] = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    posts.push({
      id: slug,
      slug,
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      category: data.category ?? "",
      image: data.image ?? data.featured_image ?? "",
      readTime: data.readTime ?? "5 min read",
      publishDate: data.publishDate ?? data.datePublished ?? "",
    });
  }

  return posts.sort((a, b) => {
    const dateA = a.publishDate ? new Date(a.publishDate).getTime() : 0;
    const dateB = b.publishDate ? new Date(b.publishDate).getTime() : 0;
    return dateB - dateA;
  });
}

/** Get a single MDX blog post by slug */
export function getMdxBlogPost(slug: string): MdxBlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    id: slug,
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    category: data.category ?? "",
    image: data.image ?? data.featured_image ?? "",
    readTime: data.readTime ?? "5 min read",
    publishDate: data.publishDate ?? data.datePublished ?? "",
    body: content,
  };
}
