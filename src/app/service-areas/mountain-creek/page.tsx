import type { Metadata } from "next";
import MountainCreekPage from "@/components/neighborhoods/MountainCreekPage";

export const metadata: Metadata = {
  title: "Mountain Creek Fence Installation | Bonney Lake Neighborhood Experts",
  description:
    "Professional fence installation in Mountain Creek, Bonney Lake. Slope-ready cedar, hogwire, and hybrid fencing designed for hillside lots and HOA-aligned neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/mountain-creek" },
};

export default function MountainCreekServiceAreaPage() {
  return <MountainCreekPage />;
}
