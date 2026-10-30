import type { Metadata } from "next";
import LakelandHillsHoaPage from "@/components/neighborhoods/LakelandHillsHoaPage";

export const metadata: Metadata = {
  title:
    "Lakeland Hills HOA Fencing Guide | Auburn | MyFence",
  description:
    "Lakeland Hills HOA fencing in Auburn: the association's published fence guidelines, Auburn height and permit rules, and when to ask the ACC. Not affiliated with the HOA.",
  alternates: {
    canonical:
      "https://myfence.com/service-areas/auburn/lakeland-hills/hoa-approved-fencing",
  },
};

export default function LakelandHillsHoaRoutePage() {
  return <LakelandHillsHoaPage />;
}
