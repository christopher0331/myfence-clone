import type { Metadata } from "next";
import MeridianValleyHoaPage from "@/components/neighborhoods/MeridianValleyHoaPage";

export const metadata: Metadata = {
  title: "Meridian Valley HOA Fence Rules | Kent | MyFence",
  description:
    "Meridian Valley Maintenance Association fence rules in Kent from the association's own documents: fences are not permitted except swimming pool enclosures, and walls or hedges need Architectural Committee approval. MyFence handles the HOA application. Not affiliated with the association.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kent/meridian-valley/hoa-approved-fencing",
  },
};

export default function MeridianValleyHoaRoutePage() {
  return <MeridianValleyHoaPage />;
}
