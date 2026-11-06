import type { Metadata } from "next";
import MapleHillsHoaPage from "@/components/neighborhoods/MapleHillsHoaPage";
import { mapleHillsHoaConfig } from "@/components/hoa/configs/maple-hills";

export const metadata: Metadata = {
  title: mapleHillsHoaConfig.metaTitle,
  description: mapleHillsHoaConfig.metaDescription,
  alternates: { canonical: mapleHillsHoaConfig.canonical },
};

export default function MapleHillsHoaRoutePage() {
  return <MapleHillsHoaPage />;
}
