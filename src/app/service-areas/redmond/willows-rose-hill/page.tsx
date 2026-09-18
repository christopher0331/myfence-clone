import type { Metadata } from "next";
import WillowsRoseHillPage from "@/components/neighborhoods/WillowsRoseHillPage";

export const metadata: Metadata = {
  title:
    "Willows/Rose Hill Redmond Fence Installation | Mixed Lots & Willows Road | MyFence.com",
  description:
    "Professional fence installation in Willows/Rose Hill, Redmond, WA. Cedar, hogwire & hybrid fencing for mixed lots between Willows Road NE and the Kirkland line. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/redmond/willows-rose-hill",
  },
};

export default function WillowsRoseHillRedmondPage() {
  return <WillowsRoseHillPage />;
}
