import type { Metadata } from "next";
import GigHarbor from "@/components/service-areas/gigharbor";

export const metadata: Metadata = {
  title: "Canterwood Fence Installation | Gig Harbor Area Experts | MyFence.com",
  description:
    "Fence installation in Canterwood, Gig Harbor WA. HOA-aware designs for gated-community properties, wooded lots, and coastal weather.",
  alternates: { canonical: "https://myfence.com/service-areas/gig-harbor/canterwood" },
};

export default function CanterwoodServiceAreaPage() {
  return <GigHarbor />;
}