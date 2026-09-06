import type { Metadata } from "next";
import InglewoodPage from "@/components/neighborhoods/InglewoodPage";

export const metadata: Metadata = {
  title:
    "Inglewood Sammamish Fence Installation | Hillside & Lake-View Lots | MyFence.com",
  description:
    "Professional fence installation in Inglewood, Sammamish, WA. Cedar, hogwire & hybrid fencing for Inglewood Hill slopes, lake-view yards, and East Lake Sammamish Parkway lots. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/inglewood",
  },
};

export default function InglewoodSammamishPage() {
  return <InglewoodPage />;
}
