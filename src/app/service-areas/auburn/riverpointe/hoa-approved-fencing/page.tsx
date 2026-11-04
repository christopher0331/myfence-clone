import type { Metadata } from "next";
import RiverpointeHoaPage from "@/components/neighborhoods/RiverpointeHoaPage";

export const metadata: Metadata = {
  title: "Riverpointe HOA Fencing Guide | Auburn | MyFence",
  description:
    "Riverpointe HOA fence rules in Auburn from the association's published guidelines: written approval 30 days ahead, wood only, 6 ft max, arched gates, SW 3505 or SW 3507 stain, no chain link or front-yard fences. MyFence handles the HOA application. Not affiliated with the association.",
  alternates: {
    canonical: "https://myfence.com/service-areas/auburn/riverpointe/hoa-approved-fencing",
  },
};

export default function RiverpointeHoaRoutePage() {
  return <RiverpointeHoaPage />;
}
