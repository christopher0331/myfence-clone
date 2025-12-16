import type { Metadata } from "next";
import LakeTapps from "@/components/service-areas/laketapps";

export const metadata: Metadata = {
  title: "Lake Tapps Fence Installation | View & Waterfront Ready",
  description:
    "Fence installation around Lake Tapps. Built for steep banks, view corridors, and waterfront regulations.",
  alternates: { canonical: "https://myfence.com/service-areas/lake-tapps" },
};

export default function laketappsServiceAreaPage() {
  return <LakeTapps />;
}
