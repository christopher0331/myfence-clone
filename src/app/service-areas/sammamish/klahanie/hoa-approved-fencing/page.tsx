import type { Metadata } from "next";
import KlahanieHoaPage from "@/components/neighborhoods/KlahanieHoaPage";

export const metadata: Metadata = {
  title: "Klahanie HOA Approved Fencing | Forms & ARC | Sammamish | MyFence.com",
  description:
    "Klahanie HOA approved fencing in Sammamish. Download fence application, completion form, and design specs. ARC-ready installs. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/klahanie/hoa-approved-fencing",
  },
};

export default function KlahanieHoaRoutePage() {
  return <KlahanieHoaPage />;
}
