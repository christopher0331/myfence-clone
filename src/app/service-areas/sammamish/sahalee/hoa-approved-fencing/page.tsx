import type { Metadata } from "next";
import SahaleeHoaPage from "@/components/neighborhoods/SahaleeHoaPage";

export const metadata: Metadata = {
  title: "Sahalee HOA Approved Fencing | Forms & ARC | Sammamish | MyFence.com",
  description:
    "Sahalee HOA approved fencing in Sammamish. Download architectural modification and fencing policy PDFs. ARC-ready installs for the golf course community. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/sahalee/hoa-approved-fencing",
  },
};

export default function SahaleeHoaRoutePage() {
  return <SahaleeHoaPage />;
}
