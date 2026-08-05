import type { Metadata } from "next";
import FinancingPage from "@/components/pages/FinancingPage";

export const metadata: Metadata = {
  title: "Fence Financing Seattle | MyFence.com",
  description:
    "Flexible fence financing options for Seattle homeowners. Quick approvals and competitive rates.",
  alternates: {
    canonical: "https://myfence.com/financing",
  },
};

export default function FinancingRoute() {
  return <FinancingPage />;
}
