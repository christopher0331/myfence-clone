import { getAllBlogPosts } from "@/lib/blog";
import BlogSection from "./BlogSection";

interface BlogSectionWithDataProps {
  limit?: number;
}

/** Server component wrapper that fetches blog posts and passes to BlogSection */
export default function BlogSectionWithData({ limit }: BlogSectionWithDataProps) {
  const articles = getAllBlogPosts();
  return <BlogSection articles={articles} limit={limit} />;
}
