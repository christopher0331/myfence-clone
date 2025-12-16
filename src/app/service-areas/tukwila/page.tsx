import type { Metadata } from "next";
import Tukwila from "@/components/service-areas/tukwila";

export const metadata: Metadata = {
  title: "tukwila Fence Installation | Commercial & Residential Mix",
  description:
    "Fence installation in tukwila, WA. Solutions for mixed commercial zones, rentals, and residential neighborhoods.",
  alternates: { canonical: "https://myfence.com/service-areas/tukwila" },
};

export default function tukwilaServiceAreaPage() {
  return <Tukwila />;
}
