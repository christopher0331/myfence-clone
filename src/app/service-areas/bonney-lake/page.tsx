import type { Metadata } from "next";
import BonneyLake from "@/components/service-areas/bonneylake";

export const metadata: Metadata = {
  title: "Bonney Lake Fence Installation | Hillside & HOA Experts",
  description:
    "Fence installation in Bonney Lake and Tehaleh. Engineered for slopes, views, and HOA standards in Pierce County communities.",
  alternates: { canonical: "https://myfence.com/service-areas/bonney-lake" },
};

export default function bonneylakeServiceAreaPage() {
  return <BonneyLake />;
}
