import type { Metadata } from "next";
import ElkRunHoaPage from "@/components/neighborhoods/ElkRunHoaPage";

export const metadata: Metadata = {
  title: "Elk Run HOA Approved Fencing | Division CC&Rs | Maple Valley | MyFence.com",
  description:
    "Elk Run HOA approved fencing in Maple Valley. Division-by-division checklist, picture-frame cedar installs near the former golf course. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/maple-valley/elk-run/hoa-approved-fencing",
  },
};

export default function ElkRunHoaRoutePage() {
  return <ElkRunHoaPage />;
}
