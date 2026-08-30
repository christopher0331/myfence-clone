import type { Metadata } from "next";
import OverlakePage from "@/components/neighborhoods/OverlakePage";

export const metadata: Metadata = {
  title: "Overlake Redmond Fence Installation | Campus & Village Lots | MyFence.com",
  description:
    "Professional fence installation in Overlake, Redmond, WA. Cedar, hogwire & hybrid fencing for townhomes, condos, and single-family lots near Microsoft campus and the 2 Line. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/redmond/overlake",
  },
};

export default function OverlakeRedmondPage() {
  return <OverlakePage />;
}
