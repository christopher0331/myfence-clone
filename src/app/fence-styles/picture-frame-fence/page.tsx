import type { Metadata } from "next";
import PictureFrameFence from "@/components/pages/fence-styles/PictureFrameFence";

export const metadata: Metadata = {
  title: "Picture Frame Cedar Fence Seattle | Premium Privacy Fencing",
  description: "Seattle's most popular picture frame cedar fence. Clean trim details, strong construction, 30+ years experience. Free estimates. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/picture-frame-fence",
  },
};

export default function PictureFrameFencePage() {
  return <PictureFrameFence />;
}

