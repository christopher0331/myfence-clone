import type { Metadata } from "next";
import TimberlaneHoaPage from "@/components/neighborhoods/TimberlaneHoaPage";
import { timberlaneHoaConfig } from "@/components/hoa/configs/timberlane";

export const metadata: Metadata = {
  title: timberlaneHoaConfig.metaTitle,
  description: timberlaneHoaConfig.metaDescription,
  alternates: { canonical: timberlaneHoaConfig.canonical },
};

export default function TimberlaneHoaRoutePage() {
  return <TimberlaneHoaPage />;
}
