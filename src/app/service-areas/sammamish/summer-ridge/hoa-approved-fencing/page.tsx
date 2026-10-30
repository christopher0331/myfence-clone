import type { Metadata } from "next";
import SummerRidgeHoaPage from "@/components/neighborhoods/SummerRidgeHoaPage";

export const metadata: Metadata = {
  title: "Summer Ridge HOA Fencing Guide | Sammamish | MyFence",
  description:
    "Summer Ridge fence rules in Sammamish from the association's published guidelines: materials, heights, architectural approval, and the official forms. MyFence handles the HOA application. Not affiliated with the association.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/summer-ridge/hoa-approved-fencing",
  },
};

export default function SummerRidgeHoaRoutePage() {
  return <SummerRidgeHoaPage />;
}
