import type { Metadata } from "next";
import BarklayWoodsPage from "@/components/neighborhoods/BarklayWoodsPage";
export const metadata: Metadata = {
  title: "Barklay Woods Fence Installation | Maple Valley | MyFence.com",
  description: "Fence installation in Barklay Woods, Maple Valley. Cedar, hogwire & hybrid fencing for wooded properties. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/maple-valley/barklay-woods" },
};
export default function BarklayWoodsMapleValleyPage() { return <BarklayWoodsPage />; }
