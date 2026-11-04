import type { Metadata } from "next";
import HighlandsAtWoodbrookHoaPage from "@/components/neighborhoods/HighlandsAtWoodbrookHoaPage";

export const metadata: Metadata = {
  title: "Highlands at Woodbrook HOA Fencing Guide | Auburn | MyFence",
  description:
    "Fence approval in the Highlands at Woodbrook, Auburn, from the community organization's published governing documents: Architectural Control Committee, the exterior-improvement process and the Homeowner Improvement Application Form. MyFence handles the HOA application. Not affiliated with the organization.",
  alternates: {
    canonical: "https://myfence.com/service-areas/auburn/highlands-at-woodbrook/hoa-approved-fencing",
  },
};

export default function HighlandsAtWoodbrookHoaRoutePage() {
  return <HighlandsAtWoodbrookHoaPage />;
}
