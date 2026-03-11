import type { Metadata } from "next";
import CherokeeBayParkPage from "@/components/neighborhoods/CherokeeBayParkPage";
export const metadata: Metadata = {
  title: "Cherokee Bay Park Fence Installation | Maple Valley | MyFence.com",
  description: "Lakeside fence installation in Cherokee Bay Park, Maple Valley. View-preserving cedar, hogwire & hybrid fencing. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/maple-valley/cherokee-bay-park" },
};
export default function CherokeeBayParkMapleValleyPage() { return <CherokeeBayParkPage />; }
