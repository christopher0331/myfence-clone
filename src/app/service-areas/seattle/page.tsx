import type { Metadata } from "next";
import Seattle from "@/components/service-areas/seattle";

export const metadata: Metadata = {
  title: "seattle Fence Installation | City & Infill Lots",
  description:
    "Fence installation in seattle, WA. Built for tight urban lots, slopes, and classic city neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/seattle" },
};

export default function seattleServiceAreaPage() {
  return <Seattle />;
}
