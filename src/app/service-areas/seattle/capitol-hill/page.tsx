import type { Metadata } from "next";
import CapitolHillPage from "@/components/neighborhoods/CapitolHillPage";

export const metadata: Metadata = {
  title: "Capitol Hill Fence Installation | Seattle | Historic District Compliant | MyFence.com",
  description:
    "Professional fence installation in Capitol Hill, Seattle, WA. Cedar, hogwire & hybrid fencing for compact lots, Harvard-Belmont review, and Broadway-adjacent yards. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/capitol-hill",
  },
};

export default function CapitolHillSeattlePage() {
  return <CapitolHillPage />;
}
