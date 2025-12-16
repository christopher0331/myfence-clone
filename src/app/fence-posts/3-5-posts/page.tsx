import type { Metadata } from "next";
import ThreePointFivePostsPage from "@/components/pages/posts/ThreePointFivePostsPage";

export const metadata: Metadata = {
  title: "3.5\" x 3.5\" Fence Posts: Why We Don't Recommend Them | MyFence.com",
  description:
    "Learn why 3.5x3.5 inch fence posts aren't recommended for Seattle fences. Understand the risks of undersized posts including inadequate depth, rot, and twisting.",
  alternates: {
    canonical: "https://myfence.com/fence-posts/3-5-posts",
  },
};

export default function ThreePointFivePostsRoute() {
  return <ThreePointFivePostsPage />;
}
