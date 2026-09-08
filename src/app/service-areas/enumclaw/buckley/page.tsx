import type { Metadata } from "next";
import BuckleyPage from "@/components/neighborhoods/BuckleyPage";

export const metadata: Metadata = {
  title: "Buckley Fence Installation | Rural & Mountain Properties | MyFence.com",
  description:
    "Fence installation in Buckley, WA. Cedar, hogwire, and hybrid systems built for rural lots, mountain weather, and the White River corridor. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/enumclaw/buckley",
  },
};

export default function BuckleyServiceAreaPage() {
  return <BuckleyPage />;
}
