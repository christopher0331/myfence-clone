import type { Metadata } from "next";
import KentonFirsHoaPage from "@/components/neighborhoods/KentonFirsHoaPage";

export const metadata: Metadata = {
  title: "Kenton Firs Community Association Fencing Guide | Kent | MyFence",
  description:
    "Kenton Firs fencing in Kent: the association's recorded fence covenants, the AACC application and site visit, City of Kent permit rules, and what to confirm first. Not affiliated with the association.",
  alternates: {
    canonical:
      "https://myfence.com/service-areas/kent/kenton-firs/hoa-approved-fencing",
  },
};

export default function KentonFirsHoaRoutePage() {
  return <KentonFirsHoaPage />;
}
