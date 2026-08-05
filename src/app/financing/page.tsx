import type { Metadata } from "next";
import FinancingPage from "@/components/pages/FinancingPage";

export const metadata: Metadata = {
  title: "Fence Financing Seattle | MyFence.com",
  description:
    "Flexible fence financing from a Seattle fence builder. Quick approvals, competitive rates on cedar, hogwire & hybrid installs. Apply today — (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/financing",
  },
};

export default function FinancingRoute() {
  return <FinancingPage />;
}
