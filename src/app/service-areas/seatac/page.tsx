import type { Metadata } from "next";
import SeaTac from "@/components/service-areas/seatac";

export const metadata: Metadata = {
  title: "SeaTac Fence Installation | Privacy & Noise Reduction Specialists | MyFence.com",
  description:
    "Professional fence installation in SeaTac, WA. Local contractor specializing in airport-adjacent privacy solutions and durable cedar systems for the South End.",
  alternates: { canonical: "https://myfence.com/service-areas/seatac" },
};

export default function SeaTacServiceAreaPage() {
  return <SeaTac />;
}
