import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: association's public website only (see officialLinks). No contact details published.
const COVENANTS = "https://www.mirrormont.org/covenants";
const ARC_FAQ = "https://www.mirrormont.org/architectural-committee-faq";

const faqs = [
  { q: "Do I need approval for a fence in Mirrormont?", a: "Yes. Covenant C.9 says all fences shall be approved by the architectural committee as to uniformity of general design and architecture, and the guidelines say fence plans must be submitted to the Architectural Committee for approval. The committee's FAQ asks homeowners to contact it before installing a new fence." },
  { q: "What fence styles does Mirrormont accept?", a: "The C.9 guidelines list split rail fencing, cedar plank privacy fencing and picket fencing among acceptable styles and materials, and say the list is not limited to those. For any other style, check with the Mirrormont Architectural Committee first." },
  { q: "Is chain link or wire mesh allowed in Mirrormont?", a: "The guidelines say chain-link or other wire mesh is not permitted in locations visible from the adjacent roadway, but may be approved in other locations depending on proximity to adjacent properties, roadways and natural wooded buffers." },
  { q: "How tall can a Mirrormont fence be?", a: "The covenants page does not set a single height. It says fence height, construction methods and placement must comply with King County codes, and your plan must show the height in each area. Check with the architectural committee and King County for your lot." },
  { q: "Does MyFence handle the Mirrormont committee application?", a: "Yes. MyFence prepares the fence plan the guidelines ask for (fence line, materials, style and heights) and handles the application for the homeowner, then builds only after the association's written approval. The association makes the decision." },
];

export const mirrormontHoaConfig: HoaApprovedFencingConfig = {
  canonical: "https://myfence.com/service-areas/issaquah/mirrormont/hoa-approved-fencing",
  parentUrl: "https://myfence.com/service-areas/issaquah/mirrormont",
  parentHref: "/service-areas/issaquah/mirrormont",
  parentLinkLabel: "Back to Mirrormont fence installation",
  parentCrumbName: "Mirrormont, Issaquah",
  hubHref: "/service-areas/issaquah",
  hubLinkLabel: "Issaquah fence installation",
  metaTitle: "Mirrormont HOA Fencing Guide | Issaquah | MyFence",
  metaDescription: "Mirrormont Community Association fence rules from its public covenants: architectural committee approval, accepted styles, the wire mesh rule, and what your fence plan needs. MyFence handles the application. Not affiliated with the association.",
  locationLabel: "Mirrormont Community Association · Issaquah, WA",
  h1: "Mirrormont Community Association Fencing Guide, Issaquah",
  heroIntro: "Mirrormont's covenants (section C.9) require every fence to be approved by the architectural committee for uniformity of general design and architecture. The published guidelines list split rail, cedar plank privacy and picket fencing among acceptable styles, and keep chain link and wire mesh out of spots visible from the road. MyFence handles the committee application for the homeowner.",
  disclaimer: "MyFence is not affiliated with the Mirrormont Community Association, is not an approved vendor, and does not speak for the association or its architectural committee. Every association rule on this page comes from the association's own public website, linked below. The association notes that the exact covenants for your property are the ones recorded against it, and rules can change, so confirm the current version before you build. Where this page does not cover a detail, check with the association's architectural committee.",
  downloadCtaLabel: "Open HOA sources",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "Committee approval for every fence" },
    { icon: "file", label: "Split rail, cedar plank privacy, picket" },
    { icon: "shield", label: "No wire mesh visible from the road" },
  ],
  formsHeading: "Forms: Mirrormont architectural approval",
  formsIntro: "The association does not post a fence application form on its public site. Its covenants page explains what a fence plan must show, and its Architectural Committee page is where homeowners start the request. These are direct links to the association's own pages. MyFence handles the HOA application for the homeowner: we prepare the plan, help submit it, and build only after written approval.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    { label: "Mirrormont Covenants and Architectural Guidelines", href: COVENANTS, note: "Section C.9 Fences: committee approval, what a fence plan must show, accepted styles, the wire mesh rule, and King County code compliance" },
    { label: "Mirrormont Architectural Committee FAQ", href: ARC_FAQ, note: "The committee's role and its ask to contact it before installing a new fence" },
  ],
  forms: [
    { href: ARC_FAQ, title: "Start a request with the Architectural Committee", timing: "Before installing a new fence", source: "Official association", ctaLabel: "Open association page", blurb: "The committee's page says to contact it before installing a new fence or significantly altering landscaping that may affect your wooded buffer." },
    { href: COVENANTS, title: "Covenant C.9 fence plan requirements", timing: "Before you design", source: "Official association", ctaLabel: "Open association page", blurb: "Lists what the plan needs: the full fence line relative to property boundaries, materials, style, and the height in each area." },
  ],
  processHeading: "Mirrormont fence approval process",
  steps: [
    { title: "Pick a style that fits", body: "The C.9 guidelines list split rail, cedar plank privacy and picket fencing among acceptable styles and materials. Chain link and other wire mesh are not permitted where visible from the adjacent roadway, but may be approved elsewhere depending on neighbors, roads and wooded buffers." },
    { title: "Draw the fence plan", body: "The plan need not be professionally prepared, but it must show the entire fence line in relation to property boundaries, the materials, the style, and the height in each area if heights, styles or materials differ." },
    { title: "Submit to the Architectural Committee", body: "Contact the committee before installation. Approvals are made in writing by the Mirrormont Community Association, reference the property, and describe any conditions. For review timing, check with the association's architectural committee." },
    { title: "Meet King County code and build", body: "The guidelines require fence height, construction methods and placement to comply with King County codes. After written approval, build to the approved plan and any conditions." },
  ],
  reviewHeading: "What the Mirrormont covenants ask for",
  reviewIntro: "From the association's public covenants and committee pages. Anything not listed here, check with the association's architectural committee.",
  reviewBullets: [
    "Architectural committee approval for all fences (covenant C.9)",
    "Plan shows fence line, materials, style, and height in each area",
    "Accepted styles include split rail, cedar plank privacy and picket",
    "No chain link or wire mesh visible from the adjacent roadway",
    "Height, construction and placement must meet King County codes",
    "Approval is issued in writing and may carry conditions",
  ],
  reviewFooterBeforeLink: "For more on fencing around Issaquah, see our",
  reviewFooterLinkLabel: "Issaquah fence installation page",
  helpHeading: "How MyFence helps Mirrormont homeowners",
  helpCards: [
    { title: "We handle the HOA application", body: "We draw the fence line, list materials, style and heights, and handle the committee application for you." },
    { title: "Styles that suit wooded lots", body: "We design around the styles the guidelines name and flag anything, like wire mesh, that needs the committee's sign-off." },
    { title: "Build after approval", body: "We schedule installation only after the association's written approval, so you avoid rework." },
  ],
  leadFenceStyleName: "Mirrormont HOA fence",
  faqHeading: "Mirrormont fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Mirrormont fence",
  ctaBody: "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
