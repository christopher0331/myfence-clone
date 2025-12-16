import type { Metadata } from "next";
import Sammamish from "@/components/service-areas/sammamish";

export const metadata: Metadata = {
  title: "sammamish Fence Installation | Plateau & Lake Views",
  description:
    "Fence installation in sammamish, WA. Engineered for lake views, steep lots, and HOA requirements.",
  alternates: { canonical: "https://myfence.com/service-areas/sammamish" },
};

export default function sammamishServiceAreaPage() {
  return <Sammamish />;
}
