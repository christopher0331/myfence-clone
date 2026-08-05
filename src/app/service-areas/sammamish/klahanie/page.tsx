import type { Metadata } from "next";
import KlahaniePage from "@/components/neighborhoods/KlahaniePage";

export const metadata: Metadata = {
  title: "Klahanie Fence Installation | Sammamish | MyFence.com",
  description: "Fence installation in Klahanie, Sammamish. Download HOA fence forms, ARC-ready cedar & hogwire fencing. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/sammamish/klahanie" },
};

export default function KlahanieSammamishPage() {
  return <KlahaniePage />;
}
