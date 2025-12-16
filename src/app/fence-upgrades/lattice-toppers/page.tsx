import type { Metadata } from "next";
import LatticeToppersPage from "@/components/pages/upgrades/LatticeToppersPage";

export const metadata: Metadata = {
  title: "Fence Lattice Toppers | Horizontal & Vertical | Seattle WA",
  description:
    "Upgrade your fence with 2' lattice toppers. Horizontal or vertical patterns for added privacy, airflow, and modern style.",
  alternates: {
    canonical: "https://myfence.com/fence-upgrades/lattice-toppers",
  },
};

export default function LatticeToppersRoute() {
  return <LatticeToppersPage />;
}
