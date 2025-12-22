import type { Metadata } from "next";
import SolidBoardFence from "@/components/pages/fence-styles/SolidBoardFence";

export const metadata: Metadata = {
  title: "Budget Solid Board Fence Seattle | Economical Cedar Privacy Fencing",
  description: "Affordable solid board cedar fence in Seattle. Budget-friendly option with 2 rails, stainless steel fasteners. Quality installation. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/solid-board-fence",
  },
};

export default function SolidBoardFencePage() {
  return <SolidBoardFence />;
}

