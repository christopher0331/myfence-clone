import type { Metadata } from "next";
import TalbotHillPage from "@/components/neighborhoods/TalbotHillPage";

export const metadata: Metadata = {
  title:
    "Talbot Hill Renton Fence Installation | Hillside Lots & Talbot Road | MyFence.com",
  description:
    "Professional fence installation in Talbot Hill, Renton, WA. Cedar, hogwire & hybrid fencing for hillside lots along Talbot Road S, S Puget Drive, and the Valley Medical corridor. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/renton/talbot-hill",
  },
};

export default function TalbotHillRentonPage() {
  return <TalbotHillPage />;
}
