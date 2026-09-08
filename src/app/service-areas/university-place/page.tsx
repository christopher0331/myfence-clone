import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import {
  getNeighborhoodsForCity,
  slugifyLocation,
} from "@/lib/serviceAreaPhotoUtils";

export const metadata: Metadata = {
  title: "University Place Fence Installation & Repair | MyFence.com",
  description:
    "Professional fence installation, repair, and replacement services in University Place, WA. Cedar, hogwire & hybrid fencing. Free quotes. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/university-place",
  },
};

export default function UniversityPlacePage() {
  const neighborhoods = getNeighborhoodsForCity("university-place").map((name) => ({
    name,
    description: `Fence installation and replacement projects completed in ${name}.`,
    link: `/service-areas/university-place/${slugifyLocation(name)}`,
  }));

  return (
    <ServiceAreaTemplate
      city="University Place"
      state="WA"
      neighborhoods={neighborhoods}
      heroTitle="Professional Fence Services in University Place"
      heroDescription="See recent fence installations and neighborhood projects in University Place. Get a free quote from MyFence.com today."
    />
  );
}
