import type { Metadata } from "next";
import AutumnWindHoaPage from "@/components/neighborhoods/AutumnWindHoaPage";

export const metadata: Metadata = {
  title: "Autumn Wind Homeowners Association Fencing Guide | Sammamish | MyFence",
  description:
    "Autumn Wind fence rules in Sammamish from the association's published guidelines: materials, heights, architectural approval, and the official forms. MyFence handles the HOA application. Not affiliated with the association.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/autumn-wind/hoa-approved-fencing",
  },
};

export default function AutumnWindHoaRoutePage() {
  return <AutumnWindHoaPage />;
}
