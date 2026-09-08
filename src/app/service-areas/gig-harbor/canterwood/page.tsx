import type { Metadata } from "next";
import CanterwoodPage from "@/components/neighborhoods/CanterwoodPage";

export const metadata: Metadata = {
  title: "Canterwood Fence Installation | Gig Harbor | MyFence.com",
  description:
    "HOA-compliant fence installation in Canterwood, Gig Harbor WA. Custom cedar, hogwire & hybrid fences for golf course & gated community lots.",
  alternates: {
    canonical: "https://myfence.com/service-areas/gig-harbor/canterwood",
  },
};

export default function CanterwoodGigHarborPage() {
  return <CanterwoodPage />;
}
