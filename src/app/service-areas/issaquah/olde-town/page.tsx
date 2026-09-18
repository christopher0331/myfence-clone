import type { Metadata } from "next";
import OldeTownPage from "@/components/neighborhoods/OldeTownPage";

export const metadata: Metadata = {
  title: "Olde Town Issaquah Fence Installation | Historic Downtown Lots | MyFence.com",
  description:
    "Professional fence installation in Olde Town, Issaquah, WA. Cedar, hogwire & hybrid fencing for Front Street-era lots, creek-side yards, and tight downtown side yards. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/issaquah/olde-town",
  },
};

export default function OldeTownIssaquahPage() {
  return <OldeTownPage />;
}
