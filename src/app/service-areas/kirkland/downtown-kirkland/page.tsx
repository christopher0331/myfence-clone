import type { Metadata } from "next";
import DowntownKirklandPage from "@/components/neighborhoods/DowntownKirklandPage";

export const metadata: Metadata = {
  title:
    "Downtown Kirkland Fence Installation | Townhome & Mixed-Use Lots | MyFence.com",
  description:
    "Professional fence installation in Downtown Kirkland, WA. Cedar, hogwire & hybrid fencing for townhomes, alley lots, and mixed-use yards near Marina Park and Park Lane. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kirkland/downtown-kirkland",
  },
};

export default function DowntownKirklandCityPage() {
  return <DowntownKirklandPage />;
}
