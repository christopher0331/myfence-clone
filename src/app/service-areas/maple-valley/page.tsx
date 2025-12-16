import type { Metadata } from "next";
import MapleValley from "@/components/service-areas/maplevalley";

export const metadata: Metadata = {
  title: "Maple Valley Fence Installation | Home Turf Experts",
  description:
    "Fence installation in Maple Valley, WA. Local contractor for cedar and hybrid systems built for the Plateau climate.",
  alternates: { canonical: "https://myfence.com/service-areas/maple-valley" },
};

export default function maplevalleyServiceAreaPage() {
  return <MapleValley />;
}
