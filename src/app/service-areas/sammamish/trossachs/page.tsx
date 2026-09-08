import type { Metadata } from "next";
import TrossachsPage from "@/components/neighborhoods/TrossachsPage";

export const metadata: Metadata = {
  title: "Trossachs Sammamish Fence Installation | Wooded Lots & HOA | MyFence.com",
  description:
    "Professional fence installation in Trossachs, Sammamish, WA. Cedar, hogwire & hybrid fencing for forested lots, wildlife edges, and Trossachs HOA review. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/trossachs",
  },
};

export default function TrossachsSammamishPage() {
  return <TrossachsPage />;
}
