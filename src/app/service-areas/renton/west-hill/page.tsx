import type { Metadata } from "next";
import WestHillPage from "@/components/neighborhoods/WestHillPage";

export const metadata: Metadata = {
  title:
    "West Hill Renton Fence Installation | Hillside Lots Near Skyway | MyFence.com",
  description:
    "Professional fence installation in West Hill, Renton, WA. Cedar, horizontal, and hybrid fencing for hillside lots near Skyway and Bryn Mawr, with King County and City of Renton permit checks. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/west-hill",
  },
};

export default function WestHillRentonPage() {
  return <WestHillPage />;
}
