import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import {
  getNeighborhoodsForCity,
  slugifyLocation,
} from "@/lib/serviceAreaPhotoUtils";

export const metadata: Metadata = {
  title: "Auburn Fence Installation & Repair | MyFence.com",
  description:
    "Professional fence installation in Auburn, WA. Craftsman spindle-top privacy, cedar, hogwire & hybrid fencing. Free quotes. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/auburn",
  },
};

export default function AuburnPage() {
  const neighborhoods = getNeighborhoodsForCity("auburn").map((name) => ({
    name,
    description: `Fence installation and replacement projects completed in ${name}, Auburn.`,
    link: `/service-areas/auburn/${slugifyLocation(name)}`,
  }));

  return (
    <ServiceAreaTemplate
      city="Auburn"
      state="WA"
      neighborhoods={neighborhoods}
      heroTitle="Professional Fence Services in Auburn"
      heroDescription="Craftsman spindle-top privacy, cedar, and hybrid fencing for Auburn neighborhoods. See recent projects and get a free quote from MyFence.com."
      metaTitle="Auburn Fence Installation | Craftsman & Cedar | MyFence.com"
      metaDescription="Professional fence installation in Auburn, WA. Craftsman spindle-top privacy, cedar, hogwire & hybrid fencing for south King County homes. Free quotes. (253) 455-1885."
    />
  );
}
