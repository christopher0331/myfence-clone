import type { Metadata } from "next";
import FenceStylesIndexPage from "@/components/fence-styles/FenceStylesIndexPage";

export const metadata: Metadata = {
  title: "Seattle Cedar Fence Styles: Picture Frame, Horizontal",
  description:
    "Expert fence styles in Seattle, WA: picture frame cedar, horizontal, hogwire, craftsman designs. 30+ years experience. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles",
  },
  openGraph: {
    title: "Seattle Cedar Fence Styles: Picture Frame, Horizontal",
    description:
      "Expert fence styles in Seattle, WA: picture frame cedar, horizontal, hogwire, craftsman designs. 30+ years experience. Call (253) 455-1885.",
    url: "https://myfence.com/fence-styles",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
        width: 1200,
        height: 630,
        alt: "Seattle cedar fence styles by MyFence.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle Cedar Fence Styles: Picture Frame, Horizontal",
    description:
      "Expert fence styles in Seattle, WA: picture frame cedar, horizontal, hogwire, craftsman designs. 30+ years experience. Call (253) 455-1885.",
    images: ["https://myfence.com/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png"],
  },
};

export default function FenceStylesPage() {
  return <FenceStylesIndexPage />;
}
