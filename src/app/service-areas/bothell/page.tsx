import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Bothell Fence Installation & Repair | MyFence.com",
  description:
    "Professional fence installation, repair, and replacement services in Bothell, WA. Cedar, modified picture frame, hogwire & hybrid fencing with steel post options. Free quotes. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bothell",
  },
};

export default function BothellPage() {
  return (
    <ServiceAreaTemplate
      city="Bothell"
      state="WA"
      neighborhoods={[
        {
          name: "Canyon Park",
          description: "Newer developments and HOA communities near I-405 that often specify modified picture frame fencing.",
        },
        {
          name: "North Creek",
          description: "Family-oriented area with established homes near the North Creek Trail requiring privacy and boundary fencing.",
        },
        {
          name: "Norway Hill",
          description: "Hillside neighborhood with larger lots and terrain changes — slope-following installations are common here.",
        },
        {
          name: "Downtown Bothell",
          description: "Walkable downtown core with smaller lots and tighter setbacks where space-efficient fence designs matter.",
        },
        {
          name: "Thrashers Corner",
          description: "Growing area on the Snohomish County border with newer construction and active HOA fence requirements.",
        },
      ]}
      heroTitle="Professional Fence Services in Bothell"
      heroDescription="See recent fence installations and neighborhood projects in Bothell, WA. From modified picture frame to hogwire and hybrid styles — get a free quote from MyFence.com today."
      galleryForceGrid={true}
    />
  );
}
