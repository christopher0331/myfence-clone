import type { Metadata } from "next";
import Sumner from "@/components/service-areas/sumner";

export const metadata: Metadata = {
  title: "sumner Fence Installation | Valley & Small-Town Properties",
  description:
    "Fence installation in sumner, WA. Designed for valley-floor lots, older homes, and small-town neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/sumner" },
};

export default function sumnerServiceAreaPage() {
  return <Sumner />;
}
