import type { Metadata } from "next";
import WilburtonPage from "@/components/neighborhoods/WilburtonPage";

export const metadata: Metadata = {
  title: "Wilburton Bellevue Fence Installation | I-405 Lots & Garden Streets | MyFence.com",
  description:
    "Professional fence installation in Wilburton, Bellevue, WA. Cedar, hogwire & hybrid fencing for I-405 noise screening, Main Street yards, and mature-tree lots. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/wilburton",
  },
};

export default function WilburtonBellevuePage() {
  return <WilburtonPage />;
}
