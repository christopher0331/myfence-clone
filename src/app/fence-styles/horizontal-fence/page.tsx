import type { Metadata } from "next";
import HorizontalFence from "@/components/pages/fence-styles/HorizontalFence";

export const metadata: Metadata = {
  title: "Horizontal Cedar Fence Seattle | Modern Framed Construction",
  description: "Premium horizontal cedar fence with external 2x4 frame, center rail support, Seattle's favorite modern style. 30+ years craftsmanship. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/horizontal-fence",
  },
  openGraph: {
    title: "Horizontal Cedar Fence Seattle | Modern Framed Construction",
    description: "Premium horizontal cedar fence with external 2x4 frame, center rail support, Seattle's favorite modern style. 30+ years craftsmanship. Call (253) 455-1885.",
    url: "https://myfence.com/fence-styles/horizontal-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png",
        width: 1200,
        height: 630,
        alt: "Horizontal cedar fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function HorizontalFencePage() {
  return <HorizontalFence />;
}

