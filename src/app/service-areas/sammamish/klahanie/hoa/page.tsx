import type { Metadata } from "next";
import KlahanieHoaPage from "@/components/neighborhoods/KlahanieHoaPage";

export const metadata: Metadata = {
  title: "Klahanie HOA Fence Forms & ARC Approval | Sammamish | MyFence.com",
  description:
    "Download Klahanie HOA fence application, completion form, and design specs. ARC submission help for Sammamish homeowners. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/klahanie/hoa",
  },
};

export default function KlahanieHoaRoutePage() {
  return <KlahanieHoaPage />;
}
