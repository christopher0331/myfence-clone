import type { Metadata } from "next";
import HorizontalLatticeFence from "@/components/pages/fence-styles/HorizontalLatticeFence";

export const metadata: Metadata = {
  title: "Horizontal Lattice Fence Seattle | Premium 5/8 Inch Thick Cedar Strips",
  description: "Premium horizontal lattice fence with 5/8 inch thick strips, craftsman foundation, stainless steel fasteners. Seattle's finest lattice work. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/horizontal-lattice-fence",
  },
};

export default function HorizontalLatticeFencePage() {
  return <HorizontalLatticeFence />;
}

