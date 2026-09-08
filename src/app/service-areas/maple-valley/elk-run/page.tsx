import type { Metadata } from "next";
import ElkRunPage from "@/components/neighborhoods/ElkRunPage";

const OG_IMAGE =
  "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Maple-Valley/Elk-Run-Picture-Frame-Fence-1.webp?tr=w-1200,h-630,c-maintain_ratio";

export const metadata: Metadata = {
  title: "Elk Run Fence Installation | Maple Valley | MyFence.com",
  description:
    "Professional fence installation in Elk Run, Maple Valley. Cedar picture frame and privacy fencing for HOA-governed lots near the former golf course. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/maple-valley/elk-run" },
  openGraph: {
    title: "Elk Run Fence Installation | Maple Valley | MyFence.com",
    description:
      "Professional fence installation in Elk Run, Maple Valley. Cedar picture frame and privacy fencing for HOA-governed lots near the former golf course.",
    url: "https://myfence.com/service-areas/maple-valley/elk-run",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Cedar picture frame fence installed in Elk Run, Maple Valley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elk Run Fence Installation | Maple Valley | MyFence.com",
    description:
      "Cedar picture frame and privacy fencing for HOA-governed Elk Run properties in Maple Valley.",
    images: [OG_IMAGE],
  },
};

export default function ElkRunMapleValleyPage() {
  return <ElkRunPage />;
}
