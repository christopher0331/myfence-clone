import type { Metadata } from "next";
import MapleValleyHeightsPage from "@/components/neighborhoods/MapleValleyHeightsPage";
export const metadata: Metadata = {
  title: "Maple Valley Heights Fence Installation | Renton | MyFence.com",
  description: "Hillside fence installation in Maple Valley Heights, Renton. Slope-following cedar, hogwire & hybrid fencing. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/renton/maple-valley-heights" },
};
export default function MapleValleyHeightsRentonPage() { return <MapleValleyHeightsPage />; }
