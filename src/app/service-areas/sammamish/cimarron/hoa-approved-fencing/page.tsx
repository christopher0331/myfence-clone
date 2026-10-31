import type { Metadata } from "next";
import CimarronHoaPage from "@/components/neighborhoods/CimarronHoaPage";

export const metadata: Metadata = {
  title: "Cimarron HOA of Sammamish Fencing Guide | Sammamish | MyFence",
  description:
    "Cimarron fence rules in Sammamish from the association's published guidelines: materials, heights, architectural approval, and the official forms. MyFence handles the HOA application. Not affiliated with the association.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/cimarron/hoa-approved-fencing",
  },
};

export default function CimarronHoaRoutePage() {
  return <CimarronHoaPage />;
}
