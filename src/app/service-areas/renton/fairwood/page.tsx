import type { Metadata } from "next";
import FairwoodPage from "@/components/neighborhoods/FairwoodPage";

export const metadata: Metadata = {
  title: "Fairwood Fence Installation | Long Runs & Family Lots | MyFence.com",
  description:
    "Professional fence installation in Fairwood, Renton, WA. Cedar, hogwire & hybrid fencing for Petrovitsky Road lots, Fairwood Greens, and Soos Creek yards. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/fairwood",
  },
};

export default function FairwoodRentonPage() {
  return <FairwoodPage />;
}
