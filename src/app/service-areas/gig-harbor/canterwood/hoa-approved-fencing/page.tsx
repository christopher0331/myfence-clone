import type { Metadata } from "next";
import CanterwoodHoaPage from "@/components/neighborhoods/CanterwoodHoaPage";

export const metadata: Metadata = {
  title: "Canterwood HOA Approved Fencing | ACC Review | Gig Harbor | MyFence.com",
  description:
    "Canterwood HOA approved fencing in Gig Harbor. Download our ACC submission checklist for gated golf-course lots. Cedar and hybrid installs. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/gig-harbor/canterwood/hoa-approved-fencing",
  },
};

export default function CanterwoodHoaRoutePage() {
  return <CanterwoodHoaPage />;
}
