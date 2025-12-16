import type { Metadata } from "next";
import NorthBend from "@/components/service-areas/northbend";

export const metadata: Metadata = {
  title: "North Bend Fence Installation | Mountain Fencing Specialists",
  description:
    "Fence installation in North Bend, WA. Engineered for steep terrain, snow load, and wildlife pressure.",
  alternates: { canonical: "https://myfence.com/service-areas/north-bend" },
};

export default function northbendServiceAreaPage() {
  return <NorthBend />;
}
