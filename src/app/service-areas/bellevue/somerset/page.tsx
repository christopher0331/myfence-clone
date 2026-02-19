import type { Metadata } from "next";
import SomersetPage from "@/components/neighborhoods/SomersetPage";

export const metadata: Metadata = {
  title: "Somerset Bellevue Fence Installation | Hillside Fencing Experts | MyFence.com",
  description:
    "Specialized fence installation for Somerset, Bellevue. Hillside slope experts with HOA-compliant cedar, hogwire & hybrid fencing. Panoramic view-friendly designs. Free quotes.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/somerset",
  },
};

export default function SomersetBellevuePage() {
  return <SomersetPage />;
}
