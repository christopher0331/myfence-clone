import type { Metadata } from "next";
import RavennaPage from "@/components/neighborhoods/RavennaPage";

export const metadata: Metadata = {
  title: "Ravenna Fence Installation | Seattle | MyFence.com",
  description:
    "Fence installation in Ravenna, Seattle. Horizontal slat cedar, craftsman & privacy fencing for tree-lined lots near the U District. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/seattle/ravenna" },
};

export default function RavennaSeattlePage() {
  return <RavennaPage />;
}
