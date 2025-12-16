import type { Metadata } from "next";
import Issaquah from "@/components/service-areas/issaquah";

export const metadata: Metadata = {
  title: "issaquah Fence Installation | Mountain & Wildlife Aware",
  description:
    "Fence installation in issaquah, WA. Engineered for foothill terrain, wildlife pressure, and mountain weather.",
  alternates: { canonical: "https://myfence.com/service-areas/issaquah" },
};

export default function issaquahServiceAreaPage() {
  return <Issaquah />;
}
