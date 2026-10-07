import type { Metadata } from "next";
import GreenLakePage from "@/components/neighborhoods/GreenLakePage";

export const metadata: Metadata = {
  title:
    "Green Lake Fence Installation | Seattle | Lake Loop Lots & Aurora Edge | MyFence.com",
  description:
    "Professional fence installation in Green Lake, Seattle, WA. Cedar, hogwire & hybrid fencing for lake-loop bungalows, Aurora noise, and the climb off the path. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/green-lake",
  },
};

export default function GreenLakeSeattlePage() {
  return <GreenLakePage />;
}
