import type { Metadata } from "next";
import GrassLawnPage from "@/components/neighborhoods/GrassLawnPage";

export const metadata: Metadata = {
  title:
    "Grass Lawn Redmond Fence Installation | Mature Lots & Park Streets | MyFence.com",
  description:
    "Professional fence installation in Grass Lawn, Redmond, WA. Cedar, hogwire & hybrid fencing for established lots near Grass Lawn Park and 148th Ave NE. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/redmond/grass-lawn",
  },
};

export default function GrassLawnRedmondPage() {
  return <GrassLawnPage />;
}
