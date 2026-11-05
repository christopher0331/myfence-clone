import type { Metadata } from "next";
import PrivacyFencesPage from "@/components/pages/PrivacyFencesPage";

const TITLE = "Cedar Privacy Fence Installation | Auburn, Kent & Federal Way | MyFence";
const DESCRIPTION =
  "Cedar and cedar/steel hybrid privacy fences built by a local father & son team. Compare privacy styles and get a free quote. Call (253) 455-1885.";
const URL = "https://myfence.com/privacy-fences";
const OG_IMAGE = "https://myfence.com/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MyFence",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Cedar privacy fence by MyFence.com" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function PrivacyFencesRoute() {
  return <PrivacyFencesPage />;
}
