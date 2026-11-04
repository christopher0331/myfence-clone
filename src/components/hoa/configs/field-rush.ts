import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: Field Rush Homeowner's Association public website only (see officialLinks). No contact details published.
const HOME = "https://www.fieldrushhoa.com/";
const ARCH = "https://www.fieldrushhoa.com/architectural";

const faqs = [
  { q: "Do I need HOA approval for a fence in Field Rush?", a: "For new fences and design changes, yes. The association's Architectural Committee page lists fences among the items that need pre-approval: new fences and design changes only, not repairs on existing fences. Regular maintenance does not need approval." },
  { q: "What fence styles does Field Rush allow?", a: "The association's public site does not publish fence heights, materials or colors. Its stated goal is a well-kept, consistent look and feel, especially for front and side yards and items visible from the street or a neighbor's property. For specific fence standards, check with the association's Architectural Committee." },
  { q: "How far ahead should I ask the Field Rush Architectural Committee?", a: "The committee asks homeowners to reach out four weeks before the project date. It is made up of volunteers, and the site says its messages are checked weekly." },
  { q: "Does HOA approval cover city permits?", a: "No. The association's page says an HOA approval is not a seal of approval from the county or city, so check City of Sammamish codes as well." },
  { q: "Does MyFence handle the Field Rush HOA application?", a: "Yes. MyFence prepares the fence plan, materials and location details for the Architectural Committee request, helps you submit it, and builds only after approval. The association makes the decision." },
];

export const fieldRushHoaConfig: HoaApprovedFencingConfig = {
  canonical: "https://myfence.com/service-areas/sammamish/field-rush/hoa-approved-fencing",
  parentUrl: "https://myfence.com/service-areas/sammamish/field-rush",
  parentHref: "/service-areas/sammamish/field-rush",
  parentLinkLabel: "Back to Field Rush fence installation",
  parentCrumbName: "Field Rush, Sammamish",
  hubHref: "/service-areas/sammamish",
  hubLinkLabel: "Sammamish fence installation",
  metaTitle: "Field Rush HOA Fencing Guide | Sammamish | MyFence",
  metaDescription: "Field Rush HOA fence rules in Sammamish from the association's own site: Architectural Committee approval for new fences and design changes, repairs exempt, ask 4 weeks ahead. MyFence handles the HOA application. Not affiliated with the association.",
  locationLabel: "Field Rush Homeowner's Association · Sammamish, WA",
  h1: "Field Rush HOA Fencing Guide, Sammamish",
  heroIntro: "The Field Rush Homeowner's Association has a volunteer Architectural Committee that pre-approves new fences and fence design changes. Repairs and regular maintenance do not need approval. The committee asks homeowners to reach out four weeks before the project date. MyFence handles the HOA application for the homeowner.",
  disclaimer: "MyFence is not affiliated with the Field Rush Homeowner's Association, is not an approved vendor, and does not speak for the association or its Architectural Committee. Every association rule on this page comes from the association's public website, linked below. Associations can change their rules, so confirm the current version before you build. Where this page does not cover a detail, check with the association's Architectural Committee.",
  downloadCtaLabel: "Open HOA request page",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "Pre-approval for new fences and design changes" },
    { icon: "file", label: "Reach out 4 weeks before your project" },
    { icon: "shield", label: "Repairs and maintenance exempt" },
  ],
  formsHeading: "Forms: Field Rush architectural approval",
  formsIntro: "Field Rush takes architectural requests through the request form on its own public Architectural Committee page. We link to it directly so you always see the current version. MyFence handles the HOA application for the homeowner: we prepare the fence plan and material details, help submit the request, and build only after approval.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    { label: "Field Rush Homeowner's Association website", href: HOME, note: "The association's public site" },
    { label: "Field Rush Architectural Committee page", href: ARCH, note: "Which projects need pre-approval (including fences), the 4-week lead time, and the online request form" },
  ],
  forms: [
    { href: ARCH, title: "Architectural Committee request form (online)", timing: "4 weeks before start", source: "Official association", ctaLabel: "Open association page", blurb: "The association's online request form. The committee asks for as much detail as possible and suggests sharing any files through a public Google Drive or OneDrive link." },
  ],
  processHeading: "Field Rush fence approval process",
  steps: [
    { title: "Check if approval is needed", body: "New fences and fence design changes need Architectural Committee pre-approval. Repairs to existing fences and regular maintenance do not." },
    { title: "Talk to your neighbors", body: "The association suggests reaching out to neighbors if a change would affect their privacy or overlap their property, which is common with fences." },
    { title: "Submit 4 weeks ahead", body: "Send the request through the association's online form about four weeks before the project date, with as much detail as possible. The volunteer committee checks messages weekly." },
    { title: "Check city rules and build", body: "HOA approval is not city or county approval, so check City of Sammamish codes too. Build after approval. The CC&Rs let the HOA adjust unapproved items at the homeowner's expense." },
  ],
  reviewHeading: "What the Field Rush rules ask for",
  reviewIntro: "From the association's public Architectural Committee page. Anything not listed here, check with the association's Architectural Committee.",
  reviewBullets: [
    "Pre-approval for new fences and fence design changes",
    "Repairs and regular maintenance do not need approval",
    "Reach out four weeks before your project date",
    "Focus on a consistent look for front and side yards and items visible from the street or a neighbor's lot",
    "HOA approval does not replace City of Sammamish rules",
  ],
  reviewFooterBeforeLink: "For citywide install coverage, see our",
  reviewFooterLinkLabel: "Sammamish fence installation page",
  helpHeading: "How MyFence helps Field Rush homeowners",
  helpCards: [
    { title: "We handle the HOA application", body: "We prepare the fence plan, materials and location details the committee needs and handle the application for you." },
    { title: "HOA-friendly styles", body: "We suggest styles that fit a consistent neighborhood look, such as cedar privacy or matching replacement runs, and flag anything to confirm with the committee." },
    { title: "Build after approval", body: "We schedule installation only after the association approves, so you avoid rework." },
  ],
  leadFenceStyleName: "Field Rush HOA fence",
  faqHeading: "Field Rush fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Field Rush fence",
  ctaBody: "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
