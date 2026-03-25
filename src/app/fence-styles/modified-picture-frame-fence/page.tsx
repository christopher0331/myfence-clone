import type { Metadata } from "next";
import ModifiedPictureFrameFence from "@/components/pages/fence-styles/ModifiedPictureFrameFence";

export const metadata: Metadata = {
  title: "Modified Picture Frame Fence | HOA-Approved | MyFence.com",
  description:
    "Cedar modified picture frame fence with top cap and side trim — no bottom board. HOA-approved, more economical than full picture frame. Stainless steel fasteners standard. Free quotes.",
  alternates: {
    canonical:
      "https://myfence.com/fence-styles/modified-picture-frame-fence",
  },
  openGraph: {
    title: "Modified Picture Frame Fence | HOA-Approved | MyFence.com",
    description:
      "Cedar modified picture frame fence with top cap and side trim — no bottom board. HOA-approved, more economical than full picture frame. Stainless steel fasteners standard.",
    url: "https://myfence.com/fence-styles/modified-picture-frame-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
        width: 1200,
        height: 630,
        alt: "Modified picture frame cedar fence in Bothell by MyFence.com",
      },
    ],
  },
};

export default function ModifiedPictureFrameFencePage() {
  return <ModifiedPictureFrameFence />;
}
