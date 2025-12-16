import type { Metadata } from "next";
import Kirkland from "@/components/service-areas/kirkland";

export const metadata: Metadata = {
  title: "kirkland Fence Installation | Waterfront & Urban Homes",
  description:
    "Fence installation in kirkland, WA. Designed for waterfront estates, urban infill, and HOA neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/kirkland" },
};

export default function kirklandServiceAreaPage() {
  return <Kirkland />;
}
