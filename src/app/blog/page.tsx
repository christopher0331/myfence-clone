import type { Metadata } from "next";
import BlogSectionWithData from "@/components/BlogSectionWithData";

export const metadata: Metadata = {
  title: "Fence Builder Guides & Seattle Fence Tips | MyFence.com",
  description:
    "Seattle fence builder guides on pricing, permits, cedar care, staining, and install tips. In-depth articles for Pacific Northwest homeowners. Browse now.",
  alternates: {
    canonical: "https://myfence.com/blog",
  },
};

export default function BlogPage() {
  return <BlogSectionWithData />;
}

