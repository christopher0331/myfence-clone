import type { Metadata } from "next";
import FieldRushPage from "@/components/neighborhoods/FieldRushPage";

export const metadata: Metadata = {
  title: "Field Rush Fence Installation | Sammamish | MyFence",
  description: "Fence installation in Field Rush, Sammamish. Field Rush HOA Architectural Committee approval for new fences, repairs exempt, and we handle the HOA application. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/sammamish/field-rush" },
};

export default function FieldRushSammamishPage() {
  return <FieldRushPage />;
}
