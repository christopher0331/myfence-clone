import type { Metadata } from "next";
import Covington from "@/components/service-areas/covington";

export const metadata: Metadata = {
  title: "covington Fence Installation | MyFence.com",
  description:
    "Professional fence installation and repair services in covington, WA. Cedar and hybrid systems built for the PNW climate.",
  alternates: { canonical: "https://myfence.com/service-areas/covington" },
};

export default function covingtonServiceAreaPage() {
  return <Covington />;
}
