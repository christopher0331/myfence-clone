import type { Metadata } from "next";
import CanyonParkPage from "@/components/neighborhoods/CanyonParkPage";

export const metadata: Metadata = {
  title:
    "Canyon Park Bothell Fence Installation | Creek-Side & Suburban Lots | MyFence",
  description:
    "Fence installation in Canyon Park, Bothell, WA. Cedar privacy and picture-frame fences, with Bothell fence rules and North Creek wetland cautions explained. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bothell/canyon-park",
  },
};

export default function CanyonParkBothellPage() {
  return <CanyonParkPage />;
}
