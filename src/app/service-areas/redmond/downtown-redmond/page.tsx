import type { Metadata } from "next";
import DowntownRedmondPage from "@/components/neighborhoods/DowntownRedmondPage";

export const metadata: Metadata = {
  title:
    "Downtown Redmond Fence Installation | Townhome & Mixed-Use Lots | MyFence.com",
  description:
    "Professional fence installation in Downtown Redmond, WA. Cedar, hogwire & hybrid fencing for townhomes, alley lots, and mixed-use yards near Town Center and the 2 Line. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/redmond/downtown-redmond",
  },
};

export default function DowntownRedmondCityPage() {
  return <DowntownRedmondPage />;
}
