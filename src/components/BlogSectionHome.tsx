"use client";

import BlogSectionClient from "@/components/BlogSectionClient";

/** Home page blog strip: 1 row of 4 on desktop, 1 column of 3 on mobile, with View more. */
export default function BlogSectionHome() {
  return <BlogSectionClient limit={4} />;
}
