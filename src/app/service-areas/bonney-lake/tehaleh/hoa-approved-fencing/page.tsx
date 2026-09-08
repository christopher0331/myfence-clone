import type { Metadata } from "next";
import TehalehHoaPage from "@/components/neighborhoods/TehalehHoaPage";

export const metadata: Metadata = {
  title: "Tehaleh HOA Approved Fencing | Design Review | Bonney Lake | MyFence.com",
  description:
    "Tehaleh HOA approved fencing in Bonney Lake. Download our Design Review checklist, earth-tone compliant installs for Upper & Lower Tehaleh. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bonney-lake/tehaleh/hoa-approved-fencing",
  },
};

export default function TehalehHoaRoutePage() {
  return <TehalehHoaPage />;
}
