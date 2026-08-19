import type { Metadata } from "next";
import ServiceAreasSection from "@/components/ServiceAreasSection";

export const metadata: Metadata = {
  title: "Fence Service Areas | Seattle Metro Region | MyFence.com",
  description:
    "We serve homeowners across the Greater Seattle metro area with expert fence installation, repair, and pre-staining services.",
  alternates: { canonical: "https://myfence.com/service-areas" },
};

export default function ServiceAreasIndexPage() {
  return <ServiceAreasSection isPage={true} />;
}
