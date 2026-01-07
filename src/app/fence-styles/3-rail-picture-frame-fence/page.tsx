import type { Metadata } from "next";
import ThreeRailPictureFrameFence from "@/components/pages/fence-styles/ThreeRailPictureFrameFence";

export const metadata: Metadata = {
  title: "3 Rail Picture Frame Fence | Seattle | MyFence.com",
  description: "Cedar 3 rail picture frame fences in Seattle. Extra rail and trim for added structure and a refined craftsman look. Get a fast quote today.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/3-rail-picture-frame-fence",
  },
  openGraph: {
    title: "3 Rail Picture Frame Fence | Seattle | MyFence.com",
    description: "Cedar 3 rail picture frame fences in Seattle. Extra rail and trim for added structure and a refined craftsman look. Get a fast quote today.",
    url: "https://myfence.com/fence-styles/3-rail-picture-frame-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png",
        width: 1200,
        height: 630,
        alt: "3 rail picture frame fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function ThreeRailPictureFrameFencePage() {
  return <ThreeRailPictureFrameFence />;
}

