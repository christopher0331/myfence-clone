import type { Metadata } from "next";
import IssaquahHighlandsHoaPage from "@/components/neighborhoods/IssaquahHighlandsHoaPage";

export const metadata: Metadata = {
  title: "Issaquah Highlands HOA Approved Fencing | ARC Forms | MyFence.com",
  description:
    "Issaquah Highlands HOA approved fencing. Download Fence Installation Notification and ARC Guidelines. Hillside, view-smart installs. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/issaquah-highlands/hoa-approved-fencing",
  },
};

export default function IssaquahHighlandsHoaRoutePage() {
  return <IssaquahHighlandsHoaPage />;
}
