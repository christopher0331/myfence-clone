import type { Metadata } from "next";
import FenceGeniusPage from "@/components/pages/FenceGeniusPage";

export const metadata: Metadata = {
  title: "Fence Genius: Precision Cedar Fences Seattle",
  description:
    "Revolutionary Fence Genius technology for perfect fence installation in Seattle, WA. Eliminate guesswork with algorithmic precision. Call (253) 455-1885 for consultation.",
  alternates: {
    canonical: "https://myfence.com/fence-genius",
  },
};

export default function FenceGeniusRoute() {
  return <FenceGeniusPage />;
}
