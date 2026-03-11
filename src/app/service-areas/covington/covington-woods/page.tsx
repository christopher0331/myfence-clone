import type { Metadata } from "next";
import CovingtonWoodsPage from "@/components/neighborhoods/CovingtonWoodsPage";

export const metadata: Metadata = {
  title: "Covington Woods Fence Installation | Covington | MyFence.com",
  description: "Fence installation in Covington Woods, Covington. Tree-friendly cedar, hogwire & hybrid fencing. Root-conscious installation. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/covington/covington-woods" },
};

export default function CovingtonWoodsCovingtonPage() {
  return <CovingtonWoodsPage />;
}
