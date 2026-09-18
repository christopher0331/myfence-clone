import type { Metadata } from "next";
import CrossroadsPage from "@/components/neighborhoods/CrossroadsPage";

export const metadata: Metadata = {
  title:
    "Crossroads Bellevue Fence Installation | Townhome & Arterial Lots | MyFence.com",
  description:
    "Professional fence installation in Crossroads, Bellevue, WA. Cedar, hogwire & hybrid fencing for townhomes, mid-century lots, and yards along NE 8th Street and 156th Avenue NE. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/crossroads",
  },
};

export default function CrossroadsBellevuePage() {
  return <CrossroadsPage />;
}
