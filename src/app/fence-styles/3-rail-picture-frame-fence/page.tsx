import type { Metadata } from "next";
import ThreeRailPictureFrameFence from "@/components/pages/fence-styles/ThreeRailPictureFrameFence";

export const metadata: Metadata = {
  title: "3 Rail Picture Frame Fence | Seattle | MyFence.com",
  description: "Cedar 3 rail picture frame fences in Seattle. Extra rail and trim for added structure and a refined craftsman look. Get a fast quote today.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/3-rail-picture-frame-fence",
  },
};

export default function ThreeRailPictureFrameFencePage() {
  return <ThreeRailPictureFrameFence />;
}

