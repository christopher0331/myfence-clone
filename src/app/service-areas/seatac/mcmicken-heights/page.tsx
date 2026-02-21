import type { Metadata } from "next";
import McMickenHeightsPage from "@/components/neighborhoods/McMickenHeightsPage";

export const metadata: Metadata = {
  title: "McMicken Heights SeaTac Fence Installation | Noise Reduction & Privacy | MyFence.com",
  description:
    "Fence installation in McMicken Heights, SeaTac. Sound-dampening privacy fences and durable cedar, hogwire & hybrid systems for airport-adjacent lots. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seatac/mcmicken-heights",
  },
};

export default function McMickenHeightsSeaTacPage() {
  return <McMickenHeightsPage />;
}
