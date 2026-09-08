import type { Metadata } from "next";
import HorizontalLatticeFence from "@/components/pages/fence-styles/HorizontalLatticeFence";

export const metadata: Metadata = {
  title: "Horizontal Lattice Fence Seattle | Premium 5/8 Inch Thick Cedar Strips",
  description: "Premium horizontal lattice fence with 5/8 inch thick strips, craftsman foundation, stainless steel fasteners. Seattle's finest lattice work. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/horizontal-lattice-fence",
  },
  openGraph: {
    title: "Horizontal Lattice Fence Seattle | Premium 5/8 Inch Thick Cedar Strips",
    description: "Premium horizontal lattice fence with 5/8 inch thick strips, craftsman foundation, stainless steel fasteners. Seattle's finest lattice work. Call (253) 455-1885.",
    url: "https://myfence.com/fence-styles/horizontal-lattice-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/8f73dbbc-942c-4ab6-9fda-bb95aa702af4.png",
        width: 1200,
        height: 630,
        alt: "Horizontal lattice cedar fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function HorizontalLatticeFencePage() {
  return <HorizontalLatticeFence />;
}

