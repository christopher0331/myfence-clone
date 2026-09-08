import type { Metadata } from "next";
import FallingWaterPage from "@/components/neighborhoods/FallingWaterPage";

export const metadata: Metadata = {
  title: "Falling Water Fence Installation | Bonney Lake Neighborhood Experts",
  description:
    "Professional fence installation in Falling Water, Bonney Lake. HOA-aligned cedar, hogwire, and hybrid fencing built for hillside lots and active households.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bonney-lake/falling-water",
  },
};

export default function FallingWaterServiceAreaPage() {
  return <FallingWaterPage canonical="https://myfence.com/service-areas/bonney-lake/falling-water" />;
}
