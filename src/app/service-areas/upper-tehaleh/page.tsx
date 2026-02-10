import type { Metadata } from "next";
import TehalehPage from "@/components/neighborhoods/TehalehPage";

export const metadata: Metadata = {
  title: "Upper Tehaleh Fence Installation | HOA-Compliant Fencing | MyFence.com",
  description:
    "Professional fence installation in Upper Tehaleh, Bonney Lake. Specialized in HOA-compliant designs for elevated homesites. Cedar, hogwire & hybrid aluminum fencing. Free quotes.",
  alternates: {
    canonical: "https://myfence.com/service-areas/upper-tehaleh",
  },
};

export default function UpperTehalehPage() {
  return <TehalehPage isUpper={true} canonical="https://myfence.com/service-areas/upper-tehaleh" />;
}
