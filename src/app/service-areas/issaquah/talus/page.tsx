import type { Metadata } from "next";
import TalusPage from "@/components/neighborhoods/TalusPage";

export const metadata: Metadata = {
  title: "Talus Issaquah Fence Installation | Hillside & HOA | MyFence.com",
  description:
    "Professional fence installation in Talus, Issaquah, WA. Cedar, hogwire & hybrid fencing for Cougar Mountain slopes and Talus Residential Association review. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/issaquah/talus",
  },
};

export default function TalusIssaquahPage() {
  return <TalusPage />;
}
