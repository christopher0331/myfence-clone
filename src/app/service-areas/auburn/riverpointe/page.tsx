import type { Metadata } from "next";
import RiverpointePage from "@/components/neighborhoods/RiverpointePage";

export const metadata: Metadata = {
  title: "Riverpointe Fence Installation | Auburn | MyFence",
  description: "Fence installation in Riverpointe, Auburn. Riverpointe HOA fence guidelines: wood only, 6 ft max, arched gates, preapproved stains, and we handle the ACC request. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/auburn/riverpointe" },
};

export default function RiverpointeAuburnPage() {
  return <RiverpointePage />;
}
