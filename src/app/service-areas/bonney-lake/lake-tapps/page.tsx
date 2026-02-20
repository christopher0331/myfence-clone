import type { Metadata } from "next";
import LakeTappsPage from "@/components/neighborhoods/LakeTappsPage";

export const metadata: Metadata = {
  title: "Lake Tapps Fence Installation | Bonney Lake Area | MyFence.com",
  description:
    "Fence installation near Lake Tapps and Bonney Lake. Cedar, hogwire & hybrid fencing for lake-adjacent and plateau lots. Volcanic-soil experts. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bonney-lake/lake-tapps",
  },
};

export default function LakeTappsBonneyLakePage() {
  return <LakeTappsPage />;
}
