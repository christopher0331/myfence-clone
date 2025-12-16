import type { Metadata } from "next";
import SoilHaulAwayPage from "@/components/pages/upgrades/SoilHaulAwayPage";

export const metadata: Metadata = {
  title: "Soil Haul-Away Service | Fence Installation Cleanup | Seattle",
  description:
    "Professional soil removal service for Seattle fence installations. Keep your property clean with our excavation debris haul-away service. Learn about costs and benefits.",
  alternates: {
    canonical: "https://myfence.com/fence-upgrades/soil-haul-away",
  },
};

export default function SoilHaulAwayRoute() {
  return <SoilHaulAwayPage />;
}
