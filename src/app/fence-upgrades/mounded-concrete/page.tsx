import type { Metadata } from "next";
import MoundedConcretePage from "@/components/pages/upgrades/MoundedConcretePage";

export const metadata: Metadata = {
  title: "Mounded Concrete Fence Footings | Raised & Domed Posts",
  description:
    "Raise fence post concrete above grade with an exposed, domed footing so water sheds away from the post. A Pacific Northwest upgrade to help mitigate rot.",
  alternates: {
    canonical: "https://myfence.com/fence-upgrades/mounded-concrete",
  },
  openGraph: {
    images: ["/images/upgrades/mounded-concrete/hero-line.png"],
  },
};

export default function MoundedConcreteRoute() {
  return <MoundedConcretePage />;
}
