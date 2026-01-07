import type { Metadata } from "next";
import PictureFrameFence from "@/components/pages/fence-styles/PictureFrameFence";

export const metadata: Metadata = {
  title: "Picture Frame Cedar Fence Seattle | Premium Privacy Fencing",
  description: "Seattle's most popular picture frame cedar fence. Clean trim details, strong construction, 30+ years experience. Free estimates. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/picture-frame-fence",
  },
  openGraph: {
    title: "Picture Frame Cedar Fence Seattle | Premium Privacy Fencing",
    description: "Seattle's most popular picture frame cedar fence. Clean trim details, strong construction, 30+ years experience. Free estimates. Call (253) 455-1885.",
    url: "https://myfence.com/fence-styles/picture-frame-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
        width: 1200,
        height: 630,
        alt: "Picture frame cedar fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function PictureFrameFencePage() {
  return <PictureFrameFence />;
}

