import type { Metadata } from "next";
import PicketFence from "@/components/pages/fence-styles/PicketFence";

export const metadata: Metadata = {
  title: "Classic Picket Fence Seattle | Traditional Front Yard Cedar Fencing",
  description: "Traditional cedar picket fence with dog ear boards. Perfect for Seattle front yards, up to 4' height. Classic American charm. Call (253) 455-1885 for quotes.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/picket-fence",
  },
  openGraph: {
    title: "Classic Picket Fence Seattle | Traditional Front Yard Cedar Fencing",
    description: "Traditional cedar picket fence with dog ear boards. Perfect for Seattle front yards, up to 4' height. Classic American charm. Call (253) 455-1885 for quotes.",
    url: "https://myfence.com/fence-styles/picket-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/be14d195-34f5-4c25-9618-a506bed8ecc1.png",
        width: 1200,
        height: 630,
        alt: "Classic picket fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function PicketFencePage() {
  return <PicketFence />;
}

