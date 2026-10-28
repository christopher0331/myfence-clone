import type { Metadata } from "next";
import BeaconHillPage from "@/components/neighborhoods/BeaconHillPage";

export const metadata: Metadata = {
  title:
    "Beacon Hill Fence Installation | Seattle | Ridge Lots & City Views | MyFence.com",
  description:
    "Professional fence installation in Beacon Hill, Seattle, WA. Cedar, hogwire & hybrid fencing for ridge lots, I-5 noise, and Jefferson Park yards. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/beacon-hill",
  },
};

export default function BeaconHillSeattlePage() {
  return <BeaconHillPage />;
}
