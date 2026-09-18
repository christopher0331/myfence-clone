import type { Metadata } from "next";
import GrandRidgePage from "@/components/neighborhoods/GrandRidgePage";

export const metadata: Metadata = {
  title: "Grand Ridge Issaquah Fence Installation | Family Lots & Trails | MyFence.com",
  description:
    "Professional fence installation in Grand Ridge, Issaquah, WA. Cedar, hogwire & hybrid fencing for larger family lots, NE Park Drive school streets, and Grand Ridge Park trail edges. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/issaquah/grand-ridge",
  },
};

export default function GrandRidgeIssaquahPage() {
  return <GrandRidgePage />;
}
