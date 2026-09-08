import type { Metadata } from "next";
import Issaquah from "@/components/service-areas/issaquah";

export const metadata: Metadata = {
  title: "Issaquah Fence Installation | Mountain & Wildlife Aware | MyFence.com",
  description:
    "Fence installation in Issaquah, WA. Engineered for foothill terrain, wildlife pressure, and mountain weather.",
  alternates: { canonical: "https://myfence.com/service-areas/issaquah" },
};

export default function issaquahServiceAreaPage() {
  return <Issaquah />;
}
