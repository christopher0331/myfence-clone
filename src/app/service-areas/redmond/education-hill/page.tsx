import type { Metadata } from "next";
import EducationHillPage from "@/components/neighborhoods/EducationHillPage";

export const metadata: Metadata = {
  title: "Education Hill Redmond Fence Installation | Family & School Lots | MyFence.com",
  description:
    "Professional fence installation in Education Hill, Redmond, WA. Cedar, hogwire & hybrid fencing for hillside family lots near Hartman Park and Redmond High. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/redmond/education-hill",
  },
};

export default function EducationHillRedmondPage() {
  return <EducationHillPage />;
}
