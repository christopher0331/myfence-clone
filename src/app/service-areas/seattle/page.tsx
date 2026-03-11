import type { Metadata } from "next";
import Seattle from "@/components/service-areas/seattle";

export const metadata: Metadata = {
  title: "Seattle Fence Installation | City & Infill Lots | MyFence.com",
  description:
    "Fence installation in Seattle, WA. Built for tight urban lots, slopes, and classic city neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/seattle" },
};

export default function seattleServiceAreaPage() {
  return <Seattle />;
}
