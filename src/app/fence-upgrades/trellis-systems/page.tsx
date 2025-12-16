import type { Metadata } from "next";
import TrellisSystemsPage from "@/components/pages/upgrades/TrellisSystemsPage";

export const metadata: Metadata = {
  title: "Fence Trellis Systems | Grow Vines & Add Privacy | Seattle WA",
  description:
    "Integrated cedar trellis systems for your fence. Support climbing plants, add beauty and privacy, and create a lush living barrier.",
  alternates: {
    canonical: "https://myfence.com/fence-upgrades/trellis-systems",
  },
};

export default function TrellisSystemsRoute() {
  return <TrellisSystemsPage />;
}
