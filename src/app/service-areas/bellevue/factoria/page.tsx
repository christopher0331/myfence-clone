import type { Metadata } from "next";
import FactoriaPage from "@/components/neighborhoods/FactoriaPage";

export const metadata: Metadata = {
  title: "Factoria Bellevue Fence Installation | I-90 Corridor Privacy | MyFence.com",
  description:
    "Professional fence installation in Factoria, Bellevue, WA. Cedar, hogwire & hybrid fencing for freeway-adjacent lots, Monthaven hillsides, and family yards near Newport High. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/factoria",
  },
};

export default function FactoriaBellevuePage() {
  return <FactoriaPage />;
}
