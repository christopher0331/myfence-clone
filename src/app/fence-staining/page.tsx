import type { Metadata } from "next";
import FenceStainingPage from "@/components/pages/FenceStainingPage";

export const metadata: Metadata = {
  title: "Cedar Fence Staining Seattle | MyFence.com",
  description:
    "Cedar fence staining guide from a Seattle fence builder. When and why to stain in the Pacific Northwest wet climate. Expert tips. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-staining",
  },
};

export default function FenceStainingRoute() {
  return <FenceStainingPage />;
}
