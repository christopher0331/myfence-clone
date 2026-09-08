import type { Metadata } from "next";
import Tukwila from "@/components/service-areas/tukwila";

export const metadata: Metadata = {
  title: "Tukwila Fence Installation | Commercial & Residential Mix | MyFence.com",
  description:
    "Fence installation in Tukwila, WA. Solutions for mixed commercial zones, rentals, and residential neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/tukwila" },
};

export default function tukwilaServiceAreaPage() {
  return <Tukwila />;
}
