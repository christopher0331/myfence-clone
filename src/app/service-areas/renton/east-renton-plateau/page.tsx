import type { Metadata } from "next";
import EastRentonPlateauPage from "@/components/neighborhoods/EastRentonPlateauPage";

export const metadata: Metadata = {
  title:
    "East Renton Plateau Fence Installation | Slope & Dual-Jurisdiction Lots | MyFence.com",
  description:
    "Professional fence installation in East Renton Plateau, Renton, WA. Cedar, hogwire & hybrid fencing for 196th Avenue SE lots, May Creek grades, and mixed City/County parcels. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/east-renton-plateau",
  },
};

export default function EastRentonPlateauRentonPage() {
  return <EastRentonPlateauPage />;
}
