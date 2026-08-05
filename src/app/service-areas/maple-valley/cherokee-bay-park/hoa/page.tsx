import type { Metadata } from "next";
import CherokeeBayHoaPage from "@/components/neighborhoods/CherokeeBayHoaPage";

export const metadata: Metadata = {
  title: "Cherokee Bay HOA Fence Application | Maple Valley | MyFence.com",
  description:
    "Download the Cherokee Bay HOA fence application. Submit completed docs to service@agynbyte.com. Lakeside Maple Valley fence help. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/maple-valley/cherokee-bay-park/hoa",
  },
};

export default function CherokeeBayHoaRoutePage() {
  return <CherokeeBayHoaPage />;
}
