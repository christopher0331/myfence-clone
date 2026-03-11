import type { Metadata } from "next";
import Redmond from "@/components/service-areas/redmond";

export const metadata: Metadata = {
  title: "Redmond Fence Installation | Tech Corridor Properties | MyFence.com",
  description:
    "Fence installation in Redmond, WA. Built for Microsoft country neighborhoods, HOAs, and PNW climate.",
  alternates: { canonical: "https://myfence.com/service-areas/redmond" },
};

export default function redmondServiceAreaPage() {
  return <Redmond />;
}
