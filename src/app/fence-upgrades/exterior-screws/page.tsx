import type { Metadata } from "next";
import ExteriorScrewsPage from "@/components/pages/upgrades/ExteriorScrewsPage";

export const metadata: Metadata = {
  title: "4 Inch Exterior Screws for Fence Installation | Seattle WA",
  description:
    "Upgrade your Seattle fence with 4-inch exterior screws instead of nails. Superior hold, longer lasting performance, and no nail pop-out. Perfect for PNW weather.",
  alternates: {
    canonical: "https://myfence.com/fence-upgrades/exterior-screws",
  },
};

export default function ExteriorScrewsRoute() {
  return <ExteriorScrewsPage />;
}
