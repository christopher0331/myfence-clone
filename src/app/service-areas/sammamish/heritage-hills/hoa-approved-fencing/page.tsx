import type { Metadata } from "next";
import HeritageHillsHoaPage from "@/components/neighborhoods/HeritageHillsHoaPage";

export const metadata: Metadata = {
  title:
    "Heritage Hills HOA Fencing | Architectural Chair Approval | Sammamish | MyFence.com",
  description:
    "Heritage Hills HOA fencing in Sammamish: the association's published approval requirement, City of Sammamish fence limits, and what to ask the Architectural Chair. MyFence is not the HOA. (253) 455-1885.",
  alternates: {
    canonical:
      "https://myfence.com/service-areas/sammamish/heritage-hills/hoa-approved-fencing",
  },
};

export default function HeritageHillsHoaRoutePage() {
  return <HeritageHillsHoaPage />;
}
