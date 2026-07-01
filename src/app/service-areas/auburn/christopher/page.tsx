import type { Metadata } from "next";
import ChristopherPage from "@/components/neighborhoods/ChristopherPage";

export const metadata: Metadata = {
  title: "Christopher Auburn Fence Installation | Craftsman Privacy | MyFence.com",
  description:
    "Fence installation in Christopher, Auburn. Craftsman spindle-top privacy, cedar picture frame & hybrid fencing for suburban lots. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/auburn/christopher" },
};

export default function ChristopherAuburnPage() {
  return <ChristopherPage />;
}
