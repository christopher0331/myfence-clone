import type { Metadata } from "next";
import LakelandHillsPage from "@/components/neighborhoods/LakelandHillsPage";

export const metadata: Metadata = {
  title:
    "Lakeland Hills Auburn Fence Installation | HOA & City Rules | MyFence",
  description:
    "Fence installation in Lakeland Hills, Auburn, WA. Cedar fences planned around Auburn height rules and the Lakeland Hills HOA guidelines. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/auburn/lakeland-hills",
  },
};

export default function LakelandHillsAuburnPage() {
  return <LakelandHillsPage />;
}
