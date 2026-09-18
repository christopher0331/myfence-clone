import type { Metadata } from "next";
import KingsgatePage from "@/components/neighborhoods/KingsgatePage";

export const metadata: Metadata = {
  title:
    "Kingsgate Kirkland Fence Installation | Family Lots East of I-405 | MyFence.com",
  description:
    "Professional fence installation in Kingsgate, Kirkland, WA. Cedar, hogwire & hybrid fencing for family lots near 132nd Square Park, Kingsgate Library, and NE 140th. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kirkland/kingsgate",
  },
};

export default function KingsgateKirklandPage() {
  return <KingsgatePage />;
}
