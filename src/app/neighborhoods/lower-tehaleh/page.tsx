import type { Metadata } from "next";
import TehalehPage from "@/components/neighborhoods/TehalehPage";

export const metadata: Metadata = {
  title: "Tehaleh Fence Installation | HOA-Compliant Fencing | MyFence.com",
  description:
    "Professional fence installation throughout Tehaleh, Bonney Lake. Serving Upper and Lower Tehaleh with HOA-compliant designs. Cedar, hogwire & hybrid aluminum fencing. Free quotes.",
  alternates: {
    canonical: "https://myfence.com/neighborhoods/lower-tehaleh",
  },
};

export default function LowerTehalehPage() {
  return <TehalehPage />;
}
