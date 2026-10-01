import type { Metadata } from "next";
import BallardPage from "@/components/neighborhoods/BallardPage";

export const metadata: Metadata = {
  title: "Ballard Fence Installation | Seattle | Salt-Air Craftsman Lots | MyFence.com",
  description:
    "Professional fence installation in Ballard, Seattle, WA. Cedar, hogwire & hybrid fencing for craftsman lots, Sunset Hill wind, and Ballard Avenue review. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/ballard",
  },
};

export default function BallardSeattlePage() {
  return <BallardPage />;
}
