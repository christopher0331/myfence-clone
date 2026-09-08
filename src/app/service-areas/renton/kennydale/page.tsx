import type { Metadata } from "next";
import KennydalePage from "@/components/neighborhoods/KennydalePage";

export const metadata: Metadata = {
  title: "Kennydale Fence Installation | Renton Lakefront | MyFence.com",
  description:
    "Fence installation in Kennydale, Renton. Lake Washington lakefront fencing — craftsman spindle top privacy, cedar & hybrid systems built for moisture and wind. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/renton/kennydale" },
};

export default function KennydaleRentonPage() {
  return <KennydalePage />;
}
