import type { Metadata } from "next";
import Enumclaw from "@/components/service-areas/enumclaw";

export const metadata: Metadata = {
  title: "Enumclaw Fence Installation | Mountain & Rural Properties | MyFence.com",
  description:
    "Fence installation in Enumclaw and plateau communities. Engineered for rural properties, livestock, and PNW weather.",
  alternates: { canonical: "https://myfence.com/service-areas/enumclaw" },
};

export default function enumclawServiceAreaPage() {
  return <Enumclaw />;
}
