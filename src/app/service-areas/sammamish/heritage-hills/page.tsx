import type { Metadata } from "next";
import HeritageHillsPage from "@/components/neighborhoods/HeritageHillsPage";

export const metadata: Metadata = {
  title:
    "Heritage Hills Sammamish Fence Installation | HOA-Reviewed Yards | MyFence.com",
  description:
    "Fence installation in Heritage Hills, Sammamish, WA. Cedar, hogwire & hybrid fencing planned around city height rules and Heritage Hills HOA review. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/heritage-hills",
  },
};

export default function HeritageHillsSammamishPage() {
  return <HeritageHillsPage />;
}
