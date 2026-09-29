import type { Metadata } from "next";
import FairwoodGreensHoaPage from "@/components/neighborhoods/FairwoodGreensHoaPage";

export const metadata: Metadata = {
  title:
    "Fairwood Greens HOA Approved Fencing | ACC Guidelines | Renton | MyFence.com",
  description:
    "Fairwood Greens HOA fencing in Fairwood, Renton. Published ACC guidelines, approval form, and King County permit notes. MyFence.com is not the association. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/fairwood/hoa-approved-fencing",
  },
};

export default function FairwoodGreensHoaRoutePage() {
  return <FairwoodGreensHoaPage />;
}
