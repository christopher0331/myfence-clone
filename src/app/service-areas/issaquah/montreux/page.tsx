import type { Metadata } from "next";
import MontreuxPage from "@/components/neighborhoods/MontreuxPage";

export const metadata: Metadata = {
  title: "Montreux Issaquah Fence Installation | View Lots & HOA | MyFence.com",
  description:
    "Professional fence installation in Montreux, Issaquah, WA. Cedar, hogwire & hybrid fencing for Cougar Mountain view lots and Montreux HOA review. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/issaquah/montreux",
  },
};

export default function MontreuxIssaquahPage() {
  return <MontreuxPage />;
}
