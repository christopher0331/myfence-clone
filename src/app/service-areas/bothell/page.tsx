import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import {
  getNeighborhoodsForCity,
  slugifyLocation,
} from "@/lib/serviceAreaPhotoUtils";

export const metadata: Metadata = {
  title: "Bothell Fence Installation & Repair | MyFence.com",
  description:
    "Professional fence installation, repair, and replacement services in Bothell, WA. Cedar, modified picture frame, hogwire & hybrid fencing with steel post options. Free quotes. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bothell",
  },
};

export default function BothellPage() {
  const neighborhoods = getNeighborhoodsForCity("bothell").map((name) => ({
    name,
    description: `Fence installation and replacement projects completed in ${name}.`,
    link: `/service-areas/bothell/${slugifyLocation(name)}`,
  }));

  return (
    <ServiceAreaTemplate
      city="Bothell"
      state="WA"
      neighborhoods={neighborhoods}
      heroTitle="Professional Fence Services in Bothell"
      heroDescription="See recent fence installations and neighborhood projects in Bothell, WA. From modified picture frame to hogwire and hybrid styles — get a free quote from MyFence.com today."
      galleryForceGrid={true}
    />
  );
}
