import type { Metadata } from "next";
import Index from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Seattle Fence Installation | Cedar, Hogwire & Hybrid Fences | MyFence.com",
  description:
    "Premium fence installation in the Seattle-Tacoma area. Cedar privacy fences, hogwire, hybrid aluminum systems, and HOA-compliant designs. 30+ years father-son craftsmanship. Get a fast virtual quote.",
};

export default function HomePage() {
  return <Index />;
}
