import type { Metadata } from "next";
import DaybreakAtRiverRidgePage from "@/components/neighborhoods/DaybreakAtRiverRidgePage";

export const metadata: Metadata = {
  title:
    "Daybreak at River Ridge Fence Installation | Maple Valley | MyFence.com",
  description:
    "Fence installation in Daybreak at River Ridge, Maple Valley, WA. HOA-friendly cedar privacy, hogwire & hybrid options built for slope, drainage, and everyday durability. Free quotes. (253) 455-1885.",
  alternates: {
    canonical:
      "https://myfence.com/service-areas/maple-valley/daybreak-at-river-ridge",
  },
};

export default function DaybreakAtRiverRidgeMapleValleyPage() {
  return <DaybreakAtRiverRidgePage />;
}

