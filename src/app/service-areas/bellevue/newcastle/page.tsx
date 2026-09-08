import type { Metadata } from "next";
import NewcastlePage from "@/components/neighborhoods/NewcastlePage";

export const metadata: Metadata = {
  title: "Newcastle Fence Installation | Bellevue Area | MyFence.com",
  description:
    "Fence installation in Newcastle near Bellevue. Cedar, hogwire & hybrid fencing for wooded hillside lots, drainage, and privacy. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/bellevue/newcastle",
  },
};

export default function NewcastleBellevuePage() {
  return <NewcastlePage />;
}
