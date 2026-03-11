import type { Metadata } from "next";
import MapleRidgeEstatesPage from "@/components/neighborhoods/MapleRidgeEstatesPage";
export const metadata: Metadata = {
  title: "Maple Ridge Estates Fence Installation | Renton | MyFence.com",
  description: "Fence installation in Maple Ridge Estates, Renton. Cedar, hogwire & hybrid fencing for East Plateau properties. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/renton/maple-ridge-estates" },
};
export default function MapleRidgeEstatesRentonPage() { return <MapleRidgeEstatesPage />; }
