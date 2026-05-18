import type { Metadata } from "next";
import MapleWoodsPage from "@/components/neighborhoods/MapleWoodsPage";

export const metadata: Metadata = {
  title: "Maple Woods Fence Installation | Maple Valley | MyFence.com",
  description:
    "Cedar shadow box fence installation in Maple Woods, Maple Valley. Both-sides-finished privacy fencing built for tight residential lots. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/maple-valley/maple-woods",
  },
};

export default function MapleWoodsMapleValleyPage() {
  return <MapleWoodsPage />;
}
