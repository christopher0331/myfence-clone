import type { Metadata } from "next";
import MapleValley from "@/components/service-areas/maplevalley";

export const metadata: Metadata = {
  title: "Maple Valley Fence Installation | Cedar Privacy | MyFence.com",
  description:
    "Cedar privacy fence installation in Maple Valley, WA. Pre-stained cedar, hogwire, and hybrid aluminum/cedar systems built for Plateau lots. Call (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/maple-valley" },
};

export default function maplevalleyServiceAreaPage() {
  return <MapleValley />;
}
