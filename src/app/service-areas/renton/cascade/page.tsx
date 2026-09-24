import type { Metadata } from "next";
import CascadePage from "@/components/neighborhoods/CascadePage";

export const metadata: Metadata = {
  title: "Cascade Fence Installation | Replacement & Mid-Century Lots | MyFence.com",
  description:
    "Professional fence installation in Cascade, Renton, WA. Cedar, hogwire & hybrid fencing for 116th Avenue SE lots, Cascade Park yards, and mid-century replacements. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/cascade",
  },
};

export default function CascadeRentonPage() {
  return <CascadePage />;
}
