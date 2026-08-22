import type { Metadata } from "next";
import FallingWaterHoaPage from "@/components/neighborhoods/FallingWaterHoaPage";

export const metadata: Metadata = {
  title: "Falling Water HOA Approved Fencing | ACC | Bonney Lake | MyFence.com",
  description:
    "Falling Water HOA approved fencing in Bonney Lake. ACC submission checklist, hillside cedar and hogwire installs. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bonney-lake/falling-water/hoa-approved-fencing",
  },
};

export default function FallingWaterHoaRoutePage() {
  return <FallingWaterHoaPage />;
}
