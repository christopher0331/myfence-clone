import type { Metadata } from "next";
import CimarronPage from "@/components/neighborhoods/CimarronPage";

export const metadata: Metadata = {
  title: "Cimarron Fence Installation | Sammamish | MyFence",
  description: "Fence installation in Cimarron, Sammamish. Cimarron HOA fence rules, HOA-ready cedar fencing, and we handle the HOA application. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/sammamish/cimarron" },
};

export default function CimarronSammamishPage() {
  return <CimarronPage />;
}
