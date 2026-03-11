import type { Metadata } from "next";
import PatricksFairePage from "@/components/neighborhoods/PatricksFairePage";

export const metadata: Metadata = {
  title: "Patrick's Faire Fence Installation | Maple Valley | MyFence.com",
  description:
    "Fence installation in Patrick's Faire, Maple Valley. Family-friendly cedar, hogwire & hybrid fencing. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/maple-valley/patricks-faire",
  },
};

export default function PatricksFaireMapleValleyPage() {
  return <PatricksFairePage />;
}
