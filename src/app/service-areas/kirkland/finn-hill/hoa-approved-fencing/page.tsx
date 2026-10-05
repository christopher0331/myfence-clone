import type { Metadata } from "next";
import OverlookAtFinnHillHoaPage from "@/components/neighborhoods/OverlookAtFinnHillHoaPage";

export const metadata: Metadata = {
  title:
    "Overlook at Finn Hill HOA Fencing | NE 117th Street | Kirkland | MyFence.com",
  description:
    "Overlook at Finn Hill fencing for the four-house association on NE 117th Street, Kirkland. No published fence rules found; City of Kirkland permit notes included. MyFence.com is not the HOA. Free quotes. (253) 455-1885.",
  alternates: {
    canonical:
      "https://myfence.com/service-areas/kirkland/finn-hill/hoa-approved-fencing",
  },
};

export default function OverlookAtFinnHillHoaRoutePage() {
  return <OverlookAtFinnHillHoaPage />;
}
