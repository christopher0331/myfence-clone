import type { Metadata } from "next";
import DowntownBellevuePage from "@/components/neighborhoods/DowntownBellevuePage";

export const metadata: Metadata = {
  title:
    "Downtown Bellevue Fence Installation | Townhome & Patio Screens | MyFence.com",
  description:
    "Professional fence installation in Downtown Bellevue, WA. Cedar, hogwire & hybrid fencing for Old Bellevue lots, townhome courtyards, and ground-floor patio screens. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/downtown-bellevue",
  },
};

export default function DowntownBellevueCityPage() {
  return <DowntownBellevuePage />;
}
