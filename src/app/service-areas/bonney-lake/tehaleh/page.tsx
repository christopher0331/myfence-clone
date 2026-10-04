import type { Metadata } from "next";
import TehalehCommunityPage from "@/components/neighborhoods/TehalehCommunityPage";

export const metadata: Metadata = {
  title: "Tehaleh Fence Installation | Bonney Lake | MyFence.com",
  description:
    "Fence installation in Tehaleh, a master-planned community in Bonney Lake, WA. Upper Tehaleh, Lower Tehaleh, and HOA-approved fencing guides. Free quotes.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bonney-lake/tehaleh",
  },
};

export default function TehalehBonneyLakePage() {
  return <TehalehCommunityPage />;
}
