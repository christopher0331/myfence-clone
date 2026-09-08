import type { Metadata } from "next";
import ServiceAreasSection from "@/components/ServiceAreasSection";

export const metadata: Metadata = {
  title: "Fence Installation Service Areas | Seattle Metro | MyFence.com",
  description:
    "Fence installation across Greater Seattle, King County, and Pierce County. Find your city and request a free quote.",
  alternates: { canonical: "https://myfence.com/service-areas" },
};

export default function ServiceAreasIndexPage() {
  return <ServiceAreasSection isPage={true} />;
}
