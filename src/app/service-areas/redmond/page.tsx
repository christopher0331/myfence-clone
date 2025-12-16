import type { Metadata } from "next";
import Redmond from "@/components/service-areas/redmond";

export const metadata: Metadata = {
  title: "redmond Fence Installation | Tech Corridor Properties",
  description:
    "Fence installation in redmond, WA. Built for Microsoft country neighborhoods, HOAs, and PNW climate.",
  alternates: { canonical: "https://myfence.com/service-areas/redmond" },
};

export default function redmondServiceAreaPage() {
  return <Redmond />;
}
