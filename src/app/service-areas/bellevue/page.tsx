import type { Metadata } from "next";
import Bellevue from "@/components/service-areas/bellevue";

export const metadata: Metadata = {
  title: "bellevue Fence Installation | Luxury & HOA-Compliant",
  description:
    "Premium bellevue fence installation for luxury properties. Cedar, hybrid systems, HOA-compliant designs, and marine-grade materials. Call (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/bellevue" },
};

export default function bellevueServiceAreaPage() {
  return <Bellevue />;
}
