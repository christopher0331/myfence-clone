import type { Metadata } from "next";
import MountlakeTerrace from "@/components/service-areas/mountlaketerrace";

export const metadata: Metadata = {
  title: "Mountlake Terrace Fence Installation | North-End Neighborhoods",
  description:
    "Fence installation in Mountlake Terrace, WA. Built for tight lots, tree cover, and north-end weather.",
  alternates: { canonical: "https://myfence.com/service-areas/mountlake-terrace" },
};

export default function mountlaketerraceServiceAreaPage() {
  return <MountlakeTerrace />;
}
