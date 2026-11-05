import type { Metadata } from "next";
import MeridianValleyPage from "@/components/neighborhoods/MeridianValleyPage";

export const metadata: Metadata = {
  title: "Meridian Valley Fence Installation | Kent | MyFence",
  description: "Fencing in Meridian Valley, Kent. The Meridian Valley Maintenance Association allows fences only to enclose a swimming pool; walls and hedges need committee approval. We handle the HOA application. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/kent/meridian-valley" },
};

export default function MeridianValleyKentPage() {
  return <MeridianValleyPage />;
}
