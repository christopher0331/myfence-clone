import type { Metadata } from "next";
import GeorgetownPage from "@/components/neighborhoods/GeorgetownPage";

export const metadata: Metadata = {
  title:
    "Georgetown Fence Installation | Seattle | Duwamish Valley Lots | MyFence.com",
  description:
    "Professional fence installation in Georgetown, Seattle, WA. Cedar, hogwire & hybrid fencing for Airport Way lots, Boeing Field noise, and Duwamish Valley yards. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/georgetown",
  },
};

export default function GeorgetownSeattlePage() {
  return <GeorgetownPage />;
}
