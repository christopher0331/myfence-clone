import type { Metadata } from "next";
import LakeParkPage from "@/components/neighborhoods/LakeParkPage";

export const metadata: Metadata = {
  title: "Lake Park Fence Installation | Maple Valley | MyFence.com",
  description:
    "Fence installation in Lake Park, Maple Valley. Lake-adjacent cedar, hogwire & hybrid fencing. Moisture-resistant materials. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/maple-valley/lake-park",
  },
};

export default function LakeParkMapleValleyPage() {
  return <LakeParkPage />;
}
