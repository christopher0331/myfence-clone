import type { Metadata } from "next";
import SherwoodForestPage from "@/components/neighborhoods/SherwoodForestPage";

export const metadata: Metadata = {
  title: "Sherwood Forest Fence Installation | Bellevue | MyFence.com",
  description:
    "Fence installation in Sherwood Forest, Bellevue. Cedar, hogwire & hybrid fencing for wooded properties. Tree-friendly installation. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/sherwood-forest",
  },
};

export default function SherwoodForestBellevuePage() {
  return <SherwoodForestPage />;
}
