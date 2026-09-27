import type { Metadata } from "next";
import DowntownRentonPage from "@/components/neighborhoods/DowntownRentonPage";

export const metadata: Metadata = {
  title:
    "Downtown Renton Fence Installation | Compact City Lots & Cedar River | MyFence.com",
  description:
    "Professional fence installation in Downtown Renton, WA. Cedar, hogwire & hybrid fencing for Williams Avenue lots, civic-core yards, and Cedar River blocks. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/downtown-renton",
  },
};

export default function DowntownRentonRoutePage() {
  return <DowntownRentonPage />;
}
