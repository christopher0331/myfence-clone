import type { Metadata } from "next";
import FenceGeniusPage from "@/components/pages/FenceGeniusPage";

export const metadata: Metadata = {
  title: "Fence Genius Tech | Seattle Fence Builder | MyFence.com",
  description:
    "Fence Genius tech from Seattle's fence builder — algorithmic precision for cedar, hogwire & hybrid installs. Less guesswork, clearer quotes. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-genius",
  },
};

export default function FenceGeniusRoute() {
  return <FenceGeniusPage />;
}
