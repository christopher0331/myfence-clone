import type { Metadata } from "next";
import AutumnWindPage from "@/components/neighborhoods/AutumnWindPage";

export const metadata: Metadata = {
  title: "Autumn Wind Fence Installation | Sammamish | MyFence",
  description: "Fence installation in Autumn Wind, Sammamish. Autumn Wind HOA fence rules, HOA-ready cedar fencing, and we handle the HOA application. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/sammamish/autumn-wind" },
};

export default function AutumnWindSammamishPage() {
  return <AutumnWindPage />;
}
