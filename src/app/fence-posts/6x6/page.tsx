import type { Metadata } from "next";
import SixBySixPostsPage from "@/components/pages/posts/SixBySixPostsPage";

export const metadata: Metadata = {
  title: "6x6 Fence Posts Seattle: Premium 30-Year Cedar Posts | MyFence",
  description:
    "Premium 6x6 cedar fence posts (5.5x5.5 actual) with 30-year life expectancy. Perfect for high-wind areas, gate posts, and craftsman aesthetics. Professional Seattle installation.",
  alternates: {
    canonical: "https://myfence.com/fence-posts/6x6",
  },
};

export default function SixBySixPostsRoute() {
  return <SixBySixPostsPage />;
}
