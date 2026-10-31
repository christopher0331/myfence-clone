import type { Metadata } from "next";
import SummerRidgePage from "@/components/neighborhoods/SummerRidgePage";

export const metadata: Metadata = {
  title: "Summer Ridge Fence Installation | Sammamish | MyFence",
  description: "Fence installation in Summer Ridge, Sammamish. Summer Ridge HOA fence rules, HOA-ready cedar fencing, and we handle the HOA application. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/sammamish/summer-ridge" },
};

export default function SummerRidgeSammamishPage() {
  return <SummerRidgePage />;
}
