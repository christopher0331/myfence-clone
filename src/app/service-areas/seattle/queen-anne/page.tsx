import type { Metadata } from "next";
import QueenAnnePage from "@/components/neighborhoods/QueenAnnePage";

export const metadata: Metadata = {
  title: "Queen Anne Fence Installation | Seattle | Hilltop Views & Slopes | MyFence.com",
  description:
    "Professional fence installation in Queen Anne, Seattle, WA. Cedar, hogwire & hybrid fencing for steep lots, Kerry Park views, and landmark homes. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/queen-anne",
  },
};

export default function QueenAnneSeattlePage() {
  return <QueenAnnePage />;
}
