import type { Metadata } from "next";
import JenkinsCreekPage from "@/components/neighborhoods/JenkinsCreekPage";

export const metadata: Metadata = {
  title:
    "Jenkins Creek Covington Fence Installation | Creek-Side Lots | MyFence.com",
  description:
    "Professional fence installation in Jenkins Creek, Covington, WA. Cedar, hogwire & hybrid fencing for creek-adjacent lots near Jenkins Creek Park. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/covington/jenkins-creek",
  },
};

export default function JenkinsCreekCovingtonPage() {
  return <JenkinsCreekPage />;
}
