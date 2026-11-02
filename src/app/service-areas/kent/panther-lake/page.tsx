import type { Metadata } from "next";
import PantherLakePage from "@/components/neighborhoods/PantherLakePage";

export const metadata: Metadata = {
  title:
    "Panther Lake Kent Fence Installation | City Rules & Styles | MyFence",
  description:
    "Fence installation on the Panther Lake area of Kent. Cedar, hogwire, and steel-post fences planned around City of Kent fence rules, corner lots, and sloped yards. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kent/panther-lake",
  },
};

export default function PantherLakeKentPage() {
  return <PantherLakePage />;
}
