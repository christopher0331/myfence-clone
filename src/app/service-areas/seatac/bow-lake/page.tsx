import type { Metadata } from "next";
import BowLakePage from "@/components/neighborhoods/BowLakePage";

export const metadata: Metadata = {
  title: "Bow Lake SeaTac Fence Installation | Cedar & Hybrid Fencing | MyFence.com",
  description:
    "Fence installation in Bow Lake, SeaTac. Classic cedar and modern hybrid fencing for varied lot sizes. Privacy, security, curb appeal. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seatac/bow-lake",
  },
};

export default function BowLakeSeaTacPage() {
  return <BowLakePage />;
}
