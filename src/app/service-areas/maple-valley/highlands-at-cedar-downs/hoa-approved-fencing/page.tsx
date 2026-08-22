import type { Metadata } from "next";
import HighlandsAtCedarDownsHoaPage from "@/components/neighborhoods/HighlandsAtCedarDownsHoaPage";

export const metadata: Metadata = {
  title: "Highlands at Cedar Downs HOA Approved Fencing | Maple Valley | MyFence.com",
  description:
    "Highlands at Cedar Downs HOA approved fencing in Maple Valley. Download our architectural checklist. Cedar, hogwire & hybrid installs. (253) 455-1885.",
  alternates: {
    canonical:
      "https://myfence.com/service-areas/maple-valley/highlands-at-cedar-downs/hoa-approved-fencing",
  },
};

export default function HighlandsAtCedarDownsHoaRoutePage() {
  return <HighlandsAtCedarDownsHoaPage />;
}
