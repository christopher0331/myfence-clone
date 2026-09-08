import type { Metadata } from "next";
import ThreeFtBlackHogwireFence from "@/components/pages/fence-styles/ThreeFtBlackHogwireFence";

export const metadata: Metadata = {
  title: "3' Black Hogwire Fence - Budget-Friendly Open Fencing | MyFence.com",
  description: "Affordable 3' Black Hogwire Fence with cedar frame. Ideal for flat terrain and wooded backdrops. Maintains visual openness while providing boundary definition.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/three-ft-black-hogwire-fence",
  },
  openGraph: {
    title: "3' Black Hogwire Fence - Budget-Friendly Open Fencing | MyFence.com",
    description: "Affordable 3' Black Hogwire Fence with cedar frame. Ideal for flat terrain and wooded backdrops. Maintains visual openness while providing boundary definition.",
    url: "https://myfence.com/fence-styles/three-ft-black-hogwire-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/96fca880-7890-4f75-83cc-4a78693640a9.png",
        width: 1200,
        height: 630,
        alt: "3' black hogwire fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function ThreeFtBlackHogwireFencePage() {
  return <ThreeFtBlackHogwireFence />;
}

