import type { Metadata } from "next";
import DowntownBonneyLakePage from "@/components/neighborhoods/DowntownBonneyLakePage";

export const metadata: Metadata = {
  title: "Downtown Bonney Lake Fence Installation | Bonney Lake Neighborhood Experts",
  description:
    "Professional fence installation in Downtown Bonney Lake. Cedar, hogwire, and hybrid fence systems designed for compact lots, mixed-use surroundings, and long-term durability.",
  alternates: { canonical: "https://myfence.com/service-areas/bonney-lake/downtown-bonney-lake" },
};

export default function DowntownBonneyLakeServiceAreaPage() {
  return <DowntownBonneyLakePage canonical="https://myfence.com/service-areas/bonney-lake/downtown-bonney-lake" />;
}
