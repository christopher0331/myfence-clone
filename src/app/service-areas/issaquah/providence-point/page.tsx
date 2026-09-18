import type { Metadata } from "next";
import ProvidencePointPage from "@/components/neighborhoods/ProvidencePointPage";

export const metadata: Metadata = {
  title:
    "Providence Point Issaquah Fence Installation | 55+ Village HOA | MyFence.com",
  description:
    "Professional fence installation in Providence Point, Issaquah, WA. HOA-ready cedar, hogwire & hybrid fencing for 55+ village lots near Lake Sammamish. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/issaquah/providence-point",
  },
};

export default function ProvidencePointIssaquahPage() {
  return <ProvidencePointPage />;
}
