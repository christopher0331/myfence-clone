import type { Metadata } from "next";
import ClearCedarPage from "@/components/pages/upgrades/ClearCedarPage";

export const metadata: Metadata = {
  title: "Clear Cedar Fence Boards Upgrade | Premium Seattle Fencing",
  description:
    "Upgrade to clear cedar fence boards in Seattle. Knot-free, uniform appearance that lasts longer. No knots falling out. Premium Western Red Cedar fencing.",
  alternates: {
    canonical: "https://myfence.com/fence-upgrades/clear-cedar",
  },
};

export default function ClearCedarRoute() {
  return <ClearCedarPage />;
}


