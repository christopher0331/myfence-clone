import type { Metadata } from "next";
import SteelPostsPage from "@/components/pages/posts/SteelPostsPage";

export const metadata: Metadata = {
  title: "4x4 Steel Fence Posts Seattle: 40-Year Warranty | MyFence",
  description:
    "Premium 4x4 black steel fence posts from Barrier Boss with 40-year warranty. Available in 9' and 12' heights. Professional Seattle installation.",
  alternates: {
    canonical: "https://myfence.com/fence-posts/steel-posts",
  },
};

export default function SteelPostsRoute() {
  return <SteelPostsPage />;
}
