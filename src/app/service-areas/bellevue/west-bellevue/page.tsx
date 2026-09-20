import type { Metadata } from "next";
import WestBellevuePage from "@/components/neighborhoods/WestBellevuePage";

export const metadata: Metadata = {
  title: "West Bellevue Fence Installation | Lake Washington Shoreline | MyFence.com",
  description:
    "Professional fence installation in West Bellevue, Bellevue, WA. Cedar, hogwire & hybrid fencing for Meydenbauer Bay, Enatai, and lakeshore lots. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/west-bellevue",
  },
};

export default function WestBellevueBellevuePage() {
  return <WestBellevuePage />;
}
