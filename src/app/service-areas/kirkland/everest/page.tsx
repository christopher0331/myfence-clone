import type { Metadata } from "next";
import EverestPage from "@/components/neighborhoods/EverestPage";

export const metadata: Metadata = {
  title:
    "Everest Kirkland Fence Installation | City Rules & Styles | MyFence",
  description:
    "Fence installation in Everest, Kirkland. Cedar, hogwire, and steel-post fences planned around Kirkland fence rules, front-yard limits, and wooded lots near Everest Park. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kirkland/everest",
  },
};

export default function EverestKirklandPage() {
  return <EverestPage />;
}
