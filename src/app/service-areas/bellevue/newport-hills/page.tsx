import type { Metadata } from "next";
import NewportHillsPage from "@/components/neighborhoods/NewportHillsPage";

export const metadata: Metadata = {
  title: "Newport Hills Bellevue Fence Installation | Wooded Hillside Fencing | MyFence.com",
  description:
    "Fence installation in Newport Hills, Bellevue. Steep-slope experts for wooded lots. Cedar, hogwire & hybrid fencing with reinforced posts and drainage. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/newport-hills",
  },
};

export default function NewportHillsBellevuePage() {
  return <NewportHillsPage />;
}
