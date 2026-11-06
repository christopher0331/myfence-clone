import type { Metadata } from "next";
import LivingstonHoaPage from "@/components/neighborhoods/LivingstonHoaPage";

export const metadata: Metadata = {
  title:
    "Livingston HOA Fencing | ACC Cedar Fence Rules | Sammamish | MyFence",
  description:
    "Livingston HOA fencing in Sammamish: ACC General Guidelines call for vertical cedar up to 6 feet, ban plastic and chain link, and require the Review Request Form. MyFence handles the HOA application. (253) 455-1885.",
  alternates: {
    canonical:
      "https://myfence.com/service-areas/sammamish/livingston/hoa-approved-fencing",
  },
};

export default function LivingstonHoaRoutePage() {
  return <LivingstonHoaPage />;
}
