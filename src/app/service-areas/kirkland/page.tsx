import type { Metadata } from "next";
import Kirkland from "@/components/service-areas/kirkland";

export const metadata: Metadata = {
  title: "Kirkland Fence Installation | Waterfront & Urban Homes | MyFence.com",
  description:
    "Fence installation in Kirkland, WA. Designed for waterfront estates, urban infill, and HOA neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/kirkland" },
};

export default function kirklandServiceAreaPage() {
  return <Kirkland />;
}
