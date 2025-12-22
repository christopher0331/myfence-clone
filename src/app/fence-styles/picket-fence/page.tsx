import type { Metadata } from "next";
import PicketFence from "@/components/pages/fence-styles/PicketFence";

export const metadata: Metadata = {
  title: "Classic Picket Fence Seattle | Traditional Front Yard Cedar Fencing",
  description: "Traditional cedar picket fence with dog ear boards. Perfect for Seattle front yards, up to 4' height. Classic American charm. Call (253) 455-1885 for quotes.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/picket-fence",
  },
};

export default function PicketFencePage() {
  return <PicketFence />;
}

