import type { Metadata } from "next";
import HighlandsAtCedarDownsPage from "@/components/neighborhoods/HighlandsAtCedarDownsPage";

export const metadata: Metadata = {
  title: "Highlands at Cedar Downs Fence Installation | Maple Valley | MyFence.com",
  description:
    "Fence installation in Highlands at Cedar Downs, Maple Valley. Cedar, hogwire & hybrid fencing. HOA-compliant designs. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/maple-valley/highlands-at-cedar-downs",
  },
};

export default function HighlandsAtCedarDownsRoute() {
  return <HighlandsAtCedarDownsPage />;
}
