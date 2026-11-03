import type { Metadata } from "next";
import CentralHoughtonPage from "@/components/neighborhoods/CentralHoughtonPage";

export const metadata: Metadata = {
  title:
    "Central Houghton Kirkland Fence Installation | City Rules & Styles | MyFence",
  description:
    "Fence installation in Central Houghton, Kirkland. Cedar, hogwire, and steel-post fences planned around Kirkland fence rules, front-yard limits, and wooded lots near Watershed Park. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kirkland/central-houghton",
  },
};

export default function CentralHoughtonKirklandPage() {
  return <CentralHoughtonPage />;
}
