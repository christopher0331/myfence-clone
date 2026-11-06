import type { Metadata } from "next";
import TwinLakesHoaPage from "@/components/neighborhoods/TwinLakesHoaPage";

export const metadata: Metadata = {
  title: "Twin Lakes HOA Fencing Guide | Federal Way | MyFence",
  description:
    "Twin Lakes HOA fence rules in Federal Way from the association's published rules: ACC approval first (including repairs and re-staining), 6 ft max, no chain link, no fences forward of CC&R setbacks, allow up to 30 days. MyFence handles the HOA application. Not affiliated with the association.",
  alternates: {
    canonical: "https://myfence.com/service-areas/federal-way/twin-lakes/hoa-approved-fencing",
  },
};

export default function TwinLakesHoaRoutePage() {
  return <TwinLakesHoaPage />;
}
