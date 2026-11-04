import type { Metadata } from "next";
import HighlandsAtWoodbrookPage from "@/components/neighborhoods/HighlandsAtWoodbrookPage";

export const metadata: Metadata = {
  title: "Highlands at Woodbrook Fence Installation | Auburn | MyFence",
  description: "Fence installation in the Highlands at Woodbrook, Auburn. The community organization's Architectural Control Committee reviews exterior improvements, and we handle the HOA application. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/auburn/highlands-at-woodbrook" },
};

export default function HighlandsAtWoodbrookAuburnPage() {
  return <HighlandsAtWoodbrookPage />;
}
