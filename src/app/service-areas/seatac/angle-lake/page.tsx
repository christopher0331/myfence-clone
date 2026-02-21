import type { Metadata } from "next";
import AngleLakePage from "@/components/neighborhoods/AngleLakePage";

export const metadata: Metadata = {
  title: "Angle Lake SeaTac Fence Installation | Waterfront & Privacy | MyFence.com",
  description:
    "Fence installation in Angle Lake, SeaTac. Waterfront and near-lake cedar, hogwire & hybrid fencing. Moisture-resistant materials and views-conscious designs. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seatac/angle-lake",
  },
};

export default function AngleLakeSeaTacPage() {
  return <AngleLakePage />;
}
