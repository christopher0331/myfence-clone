import type { Metadata } from "next";
import MirrormontHoaPage from "@/components/neighborhoods/MirrormontHoaPage";
import { mirrormontHoaConfig } from "@/components/hoa/configs/mirrormont";

export const metadata: Metadata = {
  title: mirrormontHoaConfig.metaTitle,
  description: mirrormontHoaConfig.metaDescription,
  alternates: { canonical: mirrormontHoaConfig.canonical },
};

export default function MirrormontHoaRoutePage() {
  return <MirrormontHoaPage />;
}
