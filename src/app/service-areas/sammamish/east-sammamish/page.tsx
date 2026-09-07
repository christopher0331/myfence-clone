import type { Metadata } from "next";
import EastSammamishPage from "@/components/neighborhoods/EastSammamishPage";

export const metadata: Metadata = {
  title: "East Sammamish Fence Installation | Mature Lots & Trail Edges | MyFence.com",
  description:
    "Professional fence installation in East Sammamish, WA. Cedar, hogwire & hybrid fencing for established lots, mature trees, and East Lake Sammamish Trail edges. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/east-sammamish",
  },
};

export default function EastSammamishSammamishPage() {
  return <EastSammamishPage />;
}
