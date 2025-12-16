import type { Metadata } from "next";
import Renton from "@/components/service-areas/renton";

export const metadata: Metadata = {
  title: "renton Fence Installation | Valley & Hilltop Homes",
  description:
    "Fence installation in renton, WA. Designed for valley floors, hilltop neighborhoods, and mixed zoning.",
  alternates: { canonical: "https://myfence.com/service-areas/renton" },
};

export default function rentonServiceAreaPage() {
  return <Renton />;
}
