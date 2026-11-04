import type { Metadata } from "next";
import FieldRushHoaPage from "@/components/neighborhoods/FieldRushHoaPage";

export const metadata: Metadata = {
  title: "Field Rush HOA Fencing Guide | Sammamish | MyFence",
  description:
    "Field Rush HOA fence rules in Sammamish from the association's own site: Architectural Committee approval for new fences and design changes, repairs exempt, ask 4 weeks ahead. MyFence handles the HOA application. Not affiliated with the association.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/field-rush/hoa-approved-fencing",
  },
};

export default function FieldRushHoaRoutePage() {
  return <FieldRushHoaPage />;
}
