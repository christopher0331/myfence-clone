import type { Metadata } from "next";
import ThreeFtBlackHogwireFence from "@/components/pages/fence-styles/ThreeFtBlackHogwireFence";

export const metadata: Metadata = {
  title: "3' Black Hogwire Fence - Budget-Friendly Open Fencing | MyFence.com",
  description: "Affordable 3' Black Hogwire Fence with cedar frame. Ideal for flat terrain and wooded backdrops. Maintains visual openness while providing boundary definition.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/three-ft-black-hogwire-fence",
  },
};

export default function ThreeFtBlackHogwireFencePage() {
  return <ThreeFtBlackHogwireFence />;
}

