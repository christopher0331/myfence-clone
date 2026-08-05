import type { Metadata } from "next";
import CherokeeBayHoaPage from "@/components/neighborhoods/CherokeeBayHoaPage";

export const metadata: Metadata = {
  title: "Cherokee Bay HOA Approved Fencing | Application | Maple Valley | MyFence.com",
  description:
    "Cherokee Bay HOA approved fencing in Maple Valley. Download the HOA fence application and get lakeside ARC-ready installs. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/maple-valley/cherokee-bay-park/hoa-approved-fencing",
  },
};

export default function CherokeeBayHoaRoutePage() {
  return <CherokeeBayHoaPage />;
}
