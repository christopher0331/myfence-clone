import type { Metadata } from "next";
import FederalWay from "@/components/service-areas/federalway";

export const metadata: Metadata = {
  title: "Federal Way Fence Installation | Coastal & Wind-Exposed",
  description:
    "Professional fence installation in Federal Way, WA. Built for coastal influence, wind exposure, and diverse neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/federal-way" },
};

export default function federalwayServiceAreaPage() {
  return <FederalWay />;
}
