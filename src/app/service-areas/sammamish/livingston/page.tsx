import type { Metadata } from "next";
import LivingstonPage from "@/components/neighborhoods/LivingstonPage";

export const metadata: Metadata = {
  title: "Livingston Fence Installation | Sammamish | MyFence",
  description:
    "Fence installation in Livingston, Sammamish. ACC guidelines call for vertical cedar up to 6 feet. MyFence handles the HOA application. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/livingston",
  },
};

export default function LivingstonSammamishPage() {
  return <LivingstonPage />;
}
