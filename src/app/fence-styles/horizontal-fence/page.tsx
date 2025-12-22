import type { Metadata } from "next";
import HorizontalFence from "@/components/pages/fence-styles/HorizontalFence";

export const metadata: Metadata = {
  title: "Horizontal Cedar Fence Seattle | Modern Framed Construction",
  description: "Premium horizontal cedar fence with external 2x4 frame, center rail support, Seattle's favorite modern style. 30+ years craftsmanship. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/horizontal-fence",
  },
};

export default function HorizontalFencePage() {
  return <HorizontalFence />;
}

