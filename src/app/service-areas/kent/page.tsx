import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import {
  getNeighborhoodsForCity,
  slugifyLocation,
} from "@/lib/serviceAreaPhotoUtils";

export const metadata: Metadata = {
  title: "Kent Fence Installation & Repair | MyFence.com",
  description:
    "Professional fence installation, repair, and replacement services in Kent, WA. Cedar, hogwire & hybrid fencing with steel post options. Free quotes. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kent",
  },
};

export default function KentPage() {
  const neighborhoods = getNeighborhoodsForCity("kent").map((name) => ({
    name,
    description: `Fence installation and replacement projects completed in ${name}.`,
    link: `/service-areas/kent/${slugifyLocation(name)}`,
  }));

  neighborhoods.push({
    name: "Kenton Firs",
    description:
      "Wooded, owner-run manufactured-home community in Kent where fences need Kenton Firs AACC approval and follow City of Kent rules. See the neighborhood page or the association fencing guide. Click to learn more →",
    link: "/service-areas/kent/kenton-firs",
  });

  neighborhoods.push({
    name: "East Hill",
    description:
      "Kent's residential plateau above the valley, where fences follow City of Kent rules, corner-lot sight triangles, and any HOA covenants. Click to learn more →",
    link: "/service-areas/kent/east-hill",
  });

  neighborhoods.push({
    name: "Panther Lake",
    description:
      "North Kent neighborhood annexed in 2010, where fences now follow City of Kent rules, corner-lot sight triangles, and any HOA covenants. Click to learn more →",
    link: "/service-areas/kent/panther-lake",
  });

  neighborhoods.push({
    name: "Meridian Valley",
    description:
      "Golf-course community with a Kent address where the Meridian Valley Maintenance Association's covenants allow fences only around swimming pools. See the neighborhood page for the rules and HOA help. Click to learn more →",
    link: "/service-areas/kent/meridian-valley",
  });

  return (
    <ServiceAreaTemplate
      city="Kent"
      state="WA"
      neighborhoods={neighborhoods}
      heroTitle="Professional Fence Services in Kent"
      heroDescription="See recent fence installations and neighborhood projects in Kent. Get a free quote from MyFence.com today."
    />
  );
}
