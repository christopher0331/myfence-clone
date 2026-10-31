import type { Metadata } from "next";
import EastHillPage from "@/components/neighborhoods/EastHillPage";

export const metadata: Metadata = {
  title:
    "East Hill Kent Fence Installation | City Rules & Styles | MyFence",
  description:
    "Fence installation on Kent's East Hill. Cedar, hogwire, and steel-post fences planned around City of Kent fence rules, corner lots, and sloped yards. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kent/east-hill",
  },
};

export default function EastHillKentPage() {
  return <EastHillPage />;
}
