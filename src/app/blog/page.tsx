import type { Metadata } from "next";
import BlogSectionWithData from "@/components/BlogSectionWithData";

export const metadata: Metadata = {
  title: "Fence FAQ & Learning Center | MyFence.com",
  description: "Browse in-depth fence FAQs, cost guides, and how-to articles from MyFence.com. Learn about fence pricing, neighbor rules, staining, and more for Seattle-area homeowners.",
  alternates: {
    canonical: "https://myfence.com/blog",
  },
};

export default function BlogPage() {
  return <BlogSectionWithData />;
}

