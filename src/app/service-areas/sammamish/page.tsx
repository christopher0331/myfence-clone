import type { Metadata } from "next";
import Sammamish from "@/components/service-areas/sammamish";

export const metadata: Metadata = {
  title: "Sammamish Fence Installation | Plateau & Lake Views | MyFence.com",
  description:
    "Fence installation in Sammamish, WA. Engineered for lake views, steep lots, and HOA requirements.",
  alternates: { canonical: "https://myfence.com/service-areas/sammamish" },
};

export default function sammamishServiceAreaPage() {
  return <Sammamish />;
}
