import type { Metadata } from "next";
import TimberlanePage from "@/components/neighborhoods/TimberlanePage";

export const metadata: Metadata = {
  title: "Timberlane Fence Installation | Covington | MyFence.com",
  description: "Fence installation in Timberlane, Covington. Family-friendly cedar, hogwire & hybrid fencing. Clay soil specialists. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/covington/timberlane" },
};

export default function TimberlaneCovingtonPage() {
  return <TimberlanePage />;
}
