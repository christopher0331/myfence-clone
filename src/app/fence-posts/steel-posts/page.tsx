import type { Metadata } from "next";
import SteelPostsPage from "@/components/pages/posts/SteelPostsPage";

export const metadata: Metadata = {
  title: "4x4 Steel Fence Posts Seattle | MyFence",
  description:
    "Metal fence posts are powder coated with Polyester or Super Durable Polyester (SDP), often meeting AAMA 2604 or 2605 standards for high UV resistance and durability. Barrier Boss 4x4 black steel posts in 9' and 12' heights. Professional Seattle installation.",
  alternates: {
    canonical: "https://myfence.com/fence-posts/steel-posts",
  },
};

export default function SteelPostsRoute() {
  return <SteelPostsPage />;
}
