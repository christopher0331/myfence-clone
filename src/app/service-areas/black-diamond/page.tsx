import type { Metadata } from "next";
import BlackDiamond from "@/components/service-areas/blackdiamond";

export const metadata: Metadata = {
  title: "Black Diamond Fence Installation | Ten Trails Fencing Experts",
  description:
    "Professional fence installation in Black Diamond, WA. Local contractor specializing in Ten Trails HOA requirements and durable cedar systems for the foothills.",
  alternates: { canonical: "https://myfence.com/service-areas/black-diamond" },
};

export default function blackDiamondServiceAreaPage() {
  return <BlackDiamond />;
}
