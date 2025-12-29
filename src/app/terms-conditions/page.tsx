import type { Metadata } from "next";
import TermsConditionsPage from "@/components/pages/legal/TermsConditionsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions - MyFence.com",
  description:
    "Read MyFence.com's terms and conditions for our professional fencing services, installation warranties, and service agreements.",
  alternates: {
    canonical: "https://myfence.com/terms-conditions",
  },
};

export default function TermsConditionsRoute() {
  return <TermsConditionsPage />;
}


