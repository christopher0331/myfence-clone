import type { Metadata } from "next";
import Renton from "@/components/service-areas/renton";

export const metadata: Metadata = {
  title: "Renton Fence Installation | Valley & Hilltop Homes | MyFence.com",
  description:
    "Fence installation in Renton, WA. Designed for valley floors, hilltop neighborhoods, and mixed zoning.",
  alternates: { canonical: "https://myfence.com/service-areas/renton" },
};

export default function rentonServiceAreaPage() {
  return <Renton />;
}
