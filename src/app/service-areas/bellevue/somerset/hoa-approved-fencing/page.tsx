import type { Metadata } from "next";
import SomersetHoaPage from "@/components/neighborhoods/SomersetHoaPage";

export const metadata: Metadata = {
  title: "Somerset HOA Approved Fencing | CRC Forms | Bellevue | MyFence.com",
  description:
    "Somerset HOA approved fencing in Bellevue. CRC checklist, view-sensitive hillside installs, Form B guidance. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/somerset/hoa-approved-fencing",
  },
};

export default function SomersetHoaRoutePage() {
  return <SomersetHoaPage />;
}
