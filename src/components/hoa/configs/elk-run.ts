import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

const PARENT_URL = "https://myfence.com/service-areas/maple-valley/elk-run";

export const elkRunHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/maple-valley/elk-run",
  parentLinkLabel: "Back to Elk Run fence installation",
  parentCrumbName: "Elk Run, Maple Valley",
  metaTitle: "Elk Run HOA Approved Fencing | Division CC&Rs | Maple Valley | MyFence.com",
  metaDescription:
    "Elk Run HOA approved fencing in Maple Valley. Division-by-division checklist, picture-frame cedar installs near the former golf course. (253) 455-1885.",
  locationLabel: "Elk Run Homeowners Associations · Maple Valley, WA",
  h1: "Elk Run HOA Approved Fencing",
  heroIntro:
    "Division-specific CC&R steps, a submission checklist, and picture-frame cedar builds that clear the board for your Elk Run lot—because this neighborhood is five associations, not one.",
  downloadCtaLabel: "Download division checklist",
  trustItems: [
    { icon: "clipboard", label: "Elk Run division submission checklist" },
    { icon: "file", label: "Confirm CC&Rs for your division first" },
    { icon: "shield", label: "Board package prep included" },
  ],
  formsHeading: "Downloads for Elk Run HOA approved fencing",
  formsIntro:
    "Elk Run does not share one public fence form. Five divisions keep separate governing documents. Divisions 3 and 5 publish resources at elkrunhoa3and5.com. Use our checklist to identify your division and assemble drawings, then request the current CC&Rs and any architectural form from your board.",
  forms: [
    {
      href: "/docs/hoa/elk-run-hoa-fence-submission-checklist.pdf",
      title: "Elk Run HOA Fence Submission Checklist",
      timing: "Prep guide",
      blurb:
        "MyFence.com homeowner checklist covering the five-division structure, Div. 3 & 5 streets, site plan, and picture-frame cedar notes. Not a substitute for your division’s CC&Rs.",
    },
  ],
  processHeading: "Elk Run division fence process",
  steps: [
    {
      title: "Identify your division",
      body: "Standards are not uniform. Divisions 3 and 5 cover SE 277th Place, SE 279th Street, 226th Court SE, and 227th Court SE. Other lots sit in Divisions 1, 4, or 6. We read your division’s CC&Rs before we draw.",
    },
    {
      title: "Match height, materials, and setbacks",
      body: "Picture-frame cedar is commonly accepted because both faces finish clean. Rear yards on former fairways often want a lower decorative run or hogwire with a cedar frame so the green space stays visible.",
    },
    {
      title: "File with your division board",
      body: "Some divisions want a formal architectural packet; others want written notice. We assemble whatever your board asks for. Do not start construction until that written OK is in hand.",
    },
    {
      title: "Install to the approved plan",
      body: "We build to the approved layout—accounting for mature root zones, moisture at grade, and long unobstructed runs along the old golf-course edge.",
    },
  ],
  reviewHeading: "What makes fencing HOA-approved in Elk Run",
  reviewIntro:
    "Boards care that the fence matches that division’s documents: height, materials, street setbacks, and finish. Submitting a generic Maple Valley design is the usual reason a project gets stopped. MyFence.com starts with your division’s CC&Rs so the drawing the board sees is the fence we install.",
  reviewBullets: [
    "Division identified and CC&Rs reviewed before design",
    "Picture-frame or privacy cedar matched to street-facing rules",
    "Fairway-edge lots planned for sightlines across open green space",
    "Site plan, elevations, and material specs attached when the board requires a packet",
  ],
  reviewFooterBeforeLink: "For install coverage, styles, and Elk Run project photos, visit the",
  reviewFooterLinkLabel: "Elk Run fence installation page",
  helpHeading: "How MyFence.com helps Elk Run homeowners",
  helpCards: [
    {
      icon: "file",
      title: "Division-first design",
      body: "We request your CC&Rs up front so the fence is written to the right board—not a neighboring division’s rules.",
    },
    {
      icon: "mapPin",
      title: "Fairway-edge layouts",
      body: "Long rear runs along former golf-course greens get measured to the inch so the line stays straight without a neighbor fence to follow.",
    },
    {
      icon: "clipboard",
      title: "Checklist + install",
      body: "Use our checklist to prep, then we build cedar or hogwire systems to the approved plan.",
    },
  ],
  leadFenceStyleName: "Elk Run HOA fence",
  faqHeading: "Elk Run HOA approved fencing FAQs",
  faqs: [
    {
      q: "What is Elk Run HOA approved fencing?",
      a: "It means your fence follows the CC&Rs for your specific Elk Run division—height, materials, and placement—with whatever written approval that board requires before install.",
    },
    {
      q: "Does Elk Run have one HOA?",
      a: "No. There are five divisions. Divisions 3 and 5 share a site at elkrunhoa3and5.com. We confirm your division before we design.",
    },
    {
      q: "What fence styles usually pass in Elk Run?",
      a: "Picture-frame cedar is the most common street-facing choice. Hogwire with a cedar frame is popular on rear yards that open to former fairway green space.",
    },
    {
      q: "Do I need approval before installation?",
      a: "Typically yes, regardless of height. King County permits are a separate question. We schedule Elk Run installs after your division’s written OK.",
    },
  ],
  schemaFaqs: [
    {
      question: "What is Elk Run HOA approved fencing?",
      answer:
        "Elk Run HOA approved fencing means your design follows the CC&Rs for your specific division, with the written approval that board requires before installation. MyFence.com reviews your division documents before drawing the fence.",
    },
    {
      question: "Does Elk Run have one HOA?",
      answer:
        "No. Elk Run in Maple Valley has five separate homeowners associations. Divisions 3 and 5 cover SE 277th Place, SE 279th Street, 226th Court SE, and 227th Court SE and publish resources at elkrunhoa3and5.com.",
    },
    {
      question: "What fence styles usually pass in Elk Run?",
      answer:
        "Picture-frame cedar is commonly accepted for street-facing runs. Hogwire with a cedar frame is often used on rear yards bordering former golf-course green space.",
    },
    {
      question: "Do I need HOA approval before MyFence installs in Elk Run?",
      answer:
        "Typically yes. We confirm your division’s process, prepare any required documentation, and schedule install after written approval.",
    },
  ],
  ctaHeading: "Ready for Elk Run HOA approved fencing?",
  ctaBody:
    "Download the checklist, or let us review your division CC&Rs and build. Free on-site estimates in Elk Run / Maple Valley.",
};
