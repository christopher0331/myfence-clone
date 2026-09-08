import type { Metadata } from "next";
import FinnHillPage from "@/components/neighborhoods/FinnHillPage";

export const metadata: Metadata = {
  title:
    "Finn Hill Kirkland Fence Installation | Hillside Lots & Forest Edges | MyFence.com",
  description:
    "Professional fence installation in Finn Hill, Kirkland, WA. Cedar, hogwire & hybrid fencing for hillside lots near Big Finn Hill Park, Holmes Point, and Juanita Drive. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kirkland/finn-hill",
  },
};

export default function FinnHillKirklandPage() {
  return <FinnHillPage />;
}
