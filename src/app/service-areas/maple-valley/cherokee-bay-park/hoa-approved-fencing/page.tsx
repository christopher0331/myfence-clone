import type { Metadata } from "next";
import CherokeeBayHoaPage from "@/components/neighborhoods/CherokeeBayHoaPage";

export const metadata: Metadata = {
  title: "Cherokee Bay HOA Approved Fencing | Application | Maple Valley | MyFence.com",
  description:
    "Cherokee Bay HOA fencing in Maple Valley on Pipe Lake and Lake Lucerne. Download the fence application and get lakeside installs ready for association review. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/maple-valley/cherokee-bay-park/hoa-approved-fencing",
  },
};

export default function CherokeeBayHoaRoutePage() {
  return <CherokeeBayHoaPage />;
}
