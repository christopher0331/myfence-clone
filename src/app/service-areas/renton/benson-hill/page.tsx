import type { Metadata } from "next";
import BensonHillPage from "@/components/neighborhoods/BensonHillPage";

export const metadata: Metadata = {
  title:
    "Benson Hill Renton Fence Installation | Hillside Lots & 116th Corridor | MyFence.com",
  description:
    "Professional fence installation in Benson Hill, Renton, WA. Cedar, hogwire & hybrid fencing for hillside lots on 116th Avenue SE, Petrovitsky Road, and the Benson community planning area. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/benson-hill",
  },
};

export default function BensonHillRentonPage() {
  return <BensonHillPage />;
}
