import type { Metadata } from "next";
import SunsetPage from "@/components/neighborhoods/SunsetPage";

export const metadata: Metadata = {
  title:
    "Sunset Renton Fence Installation | Compact Lots & Boulevard Noise | MyFence.com",
  description:
    "Professional fence installation in Sunset, Renton, WA. Cedar, hogwire & hybrid fencing for Sunset Lane NE lots, park-and-library blocks, and NE Sunset Boulevard yards. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/sunset",
  },
};

export default function SunsetRentonPage() {
  return <SunsetPage />;
}
