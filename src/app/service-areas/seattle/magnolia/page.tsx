import type { Metadata } from "next";
import MagnoliaPage from "@/components/neighborhoods/MagnoliaPage";

export const metadata: Metadata = {
  title:
    "Magnolia Fence Installation | Seattle | Bluff Views & Salt Air | MyFence.com",
  description:
    "Professional fence installation in Magnolia, Seattle, WA. Cedar, hogwire & hybrid fencing for Magnolia Blvd bluffs, Discovery Park edges, and Village lots. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/magnolia",
  },
};

export default function MagnoliaSeattlePage() {
  return <MagnoliaPage />;
}
