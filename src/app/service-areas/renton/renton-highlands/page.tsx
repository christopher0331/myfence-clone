import type { Metadata } from "next";
import RentonHighlandsPage from "@/components/neighborhoods/RentonHighlandsPage";

export const metadata: Metadata = {
  title: "Renton Highlands Fence Installation | Hillside Views & Privacy | MyFence.com",
  description:
    "Professional fence installation in Renton Highlands, Renton, WA. Cedar, hogwire & hybrid fencing for hillside lots, view corridors, and Sunset Boulevard yards. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/renton-highlands",
  },
};

export default function RentonHighlandsRentonPage() {
  return <RentonHighlandsPage />;
}
