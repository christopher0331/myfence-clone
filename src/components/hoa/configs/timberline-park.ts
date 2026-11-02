import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: association's public website and CC&Rs only (see officialLinks). No contact details published.
const HOME = "https://timberlinepark.org/";
const CCRS = "https://timberlinepark.org/sites/default/files/2024-04/CCRs.pdf";
const ACC_FORM = "https://timberlinepark.org/sites/default/files/2024-04/TPALO%20ACC%20Request-4.pdf";
const BYLAWS = "https://timberlinepark.org/sites/default/files/2024-04/Bylaws.pdf";

const faqs = [
  { q: "What fences does Timberline Park allow?", a: "The association's CC&Rs (revised May 2019) allow fences, walls or shrubs along lot lines, subject to Architectural Control Committee approval, and say all fences, open and solid, must meet the standards set by the committee. Barbed wire, chain link and corrugated fiberglass fences are not allowed on any lot. The CC&Rs do not publish a height or color, so check with the association's architectural committee." },
  { q: "Can I change the look of my Timberline Park fence when I replace it?", a: "The CC&Rs say repaired or replaced fences shall maintain the same design appearance as the original fence. If all affected lot owners agree on an appearance change, that change must be approved by the Architectural Control Committee." },
  { q: "How far ahead do I submit a Timberline Park ACC request?", a: "The association's ACC Request for Approval form says plans must be submitted at least 30 days before the project start date to allow for committee review." },
  { q: "Who pays for a shared fence in Timberline Park?", a: "The CC&Rs say financial responsibility for repairing and maintaining fences that separate or adjoin two or more lots is resolved by the lot owners affected." },
  { q: "Does MyFence handle the Timberline Park ACC application?", a: "Yes. MyFence prepares and handles the ACC request for the homeowner, including the plans, materials and location details the form asks for, and builds only after the association approves. The association makes the decision." },
];

export const timberlineParkHoaConfig: HoaApprovedFencingConfig = {
  canonical: "https://myfence.com/service-areas/sammamish/timberline-park/hoa-approved-fencing",
  parentUrl: "https://myfence.com/service-areas/sammamish/timberline-park",
  parentHref: "/service-areas/sammamish/timberline-park",
  parentLinkLabel: "Back to Timberline Park fence installation",
  parentCrumbName: "Timberline Park, Sammamish",
  hubHref: "/service-areas/sammamish",
  hubLinkLabel: "Sammamish fence installation",
  metaTitle: "Timberline Park HOA Fencing Guide | Sammamish | MyFence",
  metaDescription: "Timberline Park fence rules in Sammamish from the association's published CC&Rs: ACC approval, no barbed wire, chain link or fiberglass, matching replacements, the 30-day review window, and the official ACC form. MyFence handles the HOA application. Not affiliated with the association.",
  locationLabel: "Timberline Park Association of Lot Owners · Sammamish, WA",
  h1: "Timberline Park HOA Fencing Guide, Sammamish",
  heroIntro: "The Timberline Park Association of Lot Owners runs an Architectural Control Committee (ACC) that approves fences in writing before they are built. Its published CC&Rs ban barbed wire, chain link and corrugated fiberglass fences, and ask that repaired or replaced fences keep the original design appearance. HOA-friendly choices are wood privacy or open wood fences built to the committee's standards. MyFence handles the ACC application for the homeowner.",
  disclaimer: "MyFence is not affiliated with the Timberline Park Association of Lot Owners, is not an approved vendor, and does not speak for the association or its architectural committee. Every association rule on this page comes from the association's own public website and CC&Rs, linked below. Associations can change their rules, so confirm the current version with the association before you build. Where this page does not cover a detail, check with the association's architectural committee.",
  downloadCtaLabel: "Open HOA forms",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "Written ACC approval before building" },
    { icon: "file", label: "Submit plans 30 days before start" },
    { icon: "shield", label: "No barbed wire, chain link or fiberglass" },
  ],
  formsHeading: "Forms: Timberline Park architectural approval",
  formsIntro: "These are direct links to the association's own public forms and documents, so you always see the current version. MyFence handles the HOA application for the homeowner: we prepare the fence plan and material details, help submit the request, and build only after approval.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    { label: "Timberline Park Association of Lot Owners website", href: HOME, note: "The association's public site, which links its CC&Rs, bylaws and ACC request form" },
    { label: "Timberline Park CC&Rs (Revised May 2019)", href: CCRS, note: "Fencing rules (lot lines, banned materials, matching replacements, shared-fence costs) and the Architectural Control Committee's approval powers" },
    { label: "Timberline Park Bylaws", href: BYLAWS, note: "The association's bylaws (PDF)" },
  ],
  forms: [
    { href: ACC_FORM, title: "ACC Request for Approval (PDF)", timing: "30+ days before start", source: "Official association", ctaLabel: "Open association form", blurb: "The association's fillable request form. It asks for a project description, contractor, start and completion dates, plans and specifications, any city permit details, and comments from three adjacent neighbors." },
    { href: CCRS, title: "CC&Rs, Revised May 2019 (PDF)", timing: "Before you design", source: "Official association", ctaLabel: "Open association document", blurb: "The covenants the ACC enforces, including the fencing section and the plan-submission requirements." },
  ],
  processHeading: "Timberline Park fence approval process",
  steps: [
    { title: "Design within the CC&Rs", body: "Fences along lot lines are allowed subject to ACC approval. No barbed wire, chain link or corrugated fiberglass, and nothing in road right-of-ways or easements unless the committee deems it appropriate. Replacements keep the original design appearance. The CC&Rs also bar fences inside the plat's Native Growth Protection tracts." },
    { title: "Talk to your neighbors", body: "The ACC request form asks you to contact three adjacent neighbors about the project and list their comments on the form. Neighbors sharing a fence settle its repair and maintenance costs between themselves." },
    { title: "Submit plans 30 days ahead", body: "The CC&Rs say plans must show the nature, kind, shape, height, materials and location of the fence and be approved in writing by the committee. The form asks for submission at least 30 days before the start date, with any City of Sammamish permit details." },
    { title: "Build after approval", body: "After written approval, build to the approved plan. The committee may refuse any design, plan or color. For anything else about review, check with the association's architectural committee." },
  ],
  reviewHeading: "What the Timberline Park rules ask for",
  reviewIntro: "From the association's published CC&Rs and ACC form. Anything not listed here, check with the association's architectural committee.",
  reviewBullets: [
    "Written ACC approval before any fence is built",
    "No barbed wire, chain link or corrugated fiberglass fences",
    "All fences, open and solid, meet the ACC's standards",
    "Repaired or replaced fences keep the original design appearance",
    "No fences in road right-of-ways, easements or Native Growth Protection tracts without approval",
    "Plans submitted at least 30 days before the start date",
  ],
  reviewFooterBeforeLink: "For citywide install coverage, see our",
  reviewFooterLinkLabel: "Sammamish fence installation page",
  helpHeading: "How MyFence helps Timberline Park homeowners",
  helpCards: [
    { title: "We handle the HOA application", body: "We prepare the plans, materials, location and schedule details the ACC form asks for and handle the application for you." },
    { title: "Built to match the original", body: "We design replacements to keep your fence's original design appearance and flag anything to confirm with the committee." },
    { title: "Build after approval", body: "We schedule installation only after the association approves in writing, so you avoid rework." },
  ],
  leadFenceStyleName: "Timberline Park HOA fence",
  faqHeading: "Timberline Park fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Timberline Park fence",
  ctaBody: "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
