import type { Metadata } from "next";
import IssaquahHighlandsPage from "@/components/neighborhoods/IssaquahHighlandsPage";

export const metadata: Metadata = {
  title: "Issaquah Highlands Fence Installation | HOA-Compliant Experts | MyFence.com",
  description:
    "Professional fence installation in Issaquah Highlands. Specialized in HOA-compliant designs for hillside homes. Cedar, hogwire & hybrid fencing solutions. Free quotes.",
  alternates: {
    canonical: "https://myfence.com/service-areas/issaquah-highlands",
  },
};

export default function IssaquahHighlandsServiceAreaPage() {
  return <IssaquahHighlandsPage />;
}
