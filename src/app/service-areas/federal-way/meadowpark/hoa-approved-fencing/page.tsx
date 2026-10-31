import type { Metadata } from "next";
import MeadowparkHoaPage from "@/components/neighborhoods/MeadowparkHoaPage";
import { meadowparkHoaConfig } from "@/components/hoa/configs/meadowpark";

export const metadata: Metadata = {
  title: meadowparkHoaConfig.metaTitle,
  description: meadowparkHoaConfig.metaDescription,
  alternates: { canonical: meadowparkHoaConfig.canonical },
};

export default function MeadowparkHoaRoutePage() {
  return <MeadowparkHoaPage />;
}
