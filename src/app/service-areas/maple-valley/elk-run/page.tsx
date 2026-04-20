import type { Metadata } from "next";
import ElkRunPage from "@/components/neighborhoods/ElkRunPage";

export const metadata: Metadata = {
  title: "Elk Run Fence Installation | Maple Valley | MyFence.com",
  description:
    "Professional fence installation in Elk Run, Maple Valley. Cedar picture frame and privacy fencing for HOA-governed lots near the former golf course. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/maple-valley/elk-run" },
};

export default function ElkRunMapleValleyPage() {
  return <ElkRunPage />;
}
