import type { Metadata } from "next";
import FremontPage from "@/components/neighborhoods/FremontPage";

export const metadata: Metadata = {
  title: "Fremont Fence Installation | Seattle | Canal Lots & Trail Privacy | MyFence.com",
  description:
    "Professional fence installation in Fremont, Seattle, WA. Cedar, hogwire & hybrid fencing for Ship Canal lots, Burke-Gilman trail yards, and Aurora-adjacent homes. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/fremont",
  },
};

export default function FremontSeattlePage() {
  return <FremontPage />;
}
