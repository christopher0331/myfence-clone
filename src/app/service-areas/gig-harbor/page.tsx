import type { Metadata } from "next";
import GigHarbor from "@/components/service-areas/gigharbor";

export const metadata: Metadata = {
  title: "Gig Harbor Fence Installation | Maritime Climate Experts",
  description:
    "Fence installation in Gig Harbor and surrounding areas. Marine-aware designs for salt air, moisture, and views.",
  alternates: { canonical: "https://myfence.com/service-areas/gig-harbor" },
};

export default function gigharborServiceAreaPage() {
  return <GigHarbor />;
}
