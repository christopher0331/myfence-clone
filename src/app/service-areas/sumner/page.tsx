import type { Metadata } from "next";
import Sumner from "@/components/service-areas/sumner";

export const metadata: Metadata = {
  title: "Sumner Fence Installation | Valley & Small-Town Properties | MyFence.com",
  description:
    "Fence installation in Sumner, WA. Designed for valley-floor lots, older homes, and small-town neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/sumner" },
};

export default function sumnerServiceAreaPage() {
  return <Sumner />;
}
