import type { Metadata } from "next";
import TehalehPage from "@/components/neighborhoods/TehalehPage";

export const metadata: Metadata = {
  title: "Lower Tehaleh Fence Installation | HOA-Compliant Fencing | MyFence.com",
  description:
    "Professional fence installation in Lower Tehaleh, Bonney Lake. Specialized in HOA-compliant designs for family neighborhoods. Cedar, hogwire & hybrid aluminum fencing. Free quotes.",
  alternates: {
    canonical: "https://myfence.com/service-areas/lower-tehaleh",
  },
};

export default function LowerTehalehPage() {
  return <TehalehPage canonical="https://myfence.com/service-areas/lower-tehaleh" />;
}
