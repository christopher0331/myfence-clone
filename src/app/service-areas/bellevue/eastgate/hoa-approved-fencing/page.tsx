import type { Metadata } from "next";
import HorizonCrestHoaPage from "@/components/neighborhoods/HorizonCrestHoaPage";

export const metadata: Metadata = {
  title:
    "Horizon Crest HOA Approved Fencing | Eastgate CC&Rs | Bellevue | MyFence.com",
  description:
    "Horizon Crest Community Association fencing in Eastgate, Bellevue. Eaglesmere CC&R setbacks, height notes, and City of Bellevue fence rules. MyFence.com is not the association. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/eastgate/hoa-approved-fencing",
  },
};

export default function HorizonCrestHoaRoutePage() {
  return <HorizonCrestHoaPage />;
}
