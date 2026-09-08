import type { Metadata } from "next";
import TenTrailsHoaPage from "@/components/neighborhoods/TenTrailsHoaPage";

export const metadata: Metadata = {
  title: "Ten Trails HOA Approved Fencing | ARC | Black Diamond | MyFence.com",
  description:
    "Ten Trails HOA approved fencing in Black Diamond. ARC submission checklist, wind-ready cedar and hybrid installs. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/black-diamond/ten-trails/hoa-approved-fencing",
  },
};

export default function TenTrailsHoaRoutePage() {
  return <TenTrailsHoaPage />;
}
