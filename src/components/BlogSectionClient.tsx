"use client";

import { useEffect, useState } from "react";
import BlogSection from "./BlogSection";
import type { BlogPostListItem } from "@/lib/blog";

interface BlogSectionClientProps {
  limit?: number;
}

/** Client component that fetches blog posts and renders BlogSection */
export default function BlogSectionClient({ limit }: BlogSectionClientProps) {
  const [articles, setArticles] = useState<BlogPostListItem[]>([]);

  useEffect(() => {
    fetch("/api/blog-posts")
      .then((res) => res.json())
      .then(setArticles)
      .catch(() => setArticles([]));
  }, []);

  if (articles.length === 0) return null;
  return <BlogSection articles={articles} limit={limit} />;
}
