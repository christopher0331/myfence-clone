import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Fence FAQ | MyFence.com",
  description:
    "Get answers to common questions about fence installation, pricing, maintenance, and more in the Seattle-Tacoma area.",
};

export default function FaqPage() {
  return <FaqSection />;
}
