import type { Metadata } from "next";
import Enumclaw from "@/components/service-areas/enumclaw";

export const metadata: Metadata = {
  title: "enumclaw Fence Installation | Mountain & Rural Properties",
  description:
    "Fence installation in enumclaw and plateau communities. Engineered for rural properties, livestock, and PNW weather.",
  alternates: { canonical: "https://myfence.com/service-areas/enumclaw" },
};

export default function enumclawServiceAreaPage() {
  return <Enumclaw />;
}
