import type { Metadata } from "next";
import ServiceAreasSection from "@/components/ServiceAreasSection";

export const metadata: Metadata = {
  title: "Fence Service Areas | seattle Region | MyFence.com",
  description: "We serve homeowners across the seattle metro with expert fence installation, repair, and staining.",
  alternates: { canonical: "https://myfence.com/service-areas" },
};

export default function ServiceAreasIndexPage() {
  return <ServiceAreasSection />;
}

