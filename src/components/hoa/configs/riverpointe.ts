import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: the association's public pages on MyHOA-online only (see officialLinks). No contact details published.
const PORTAL = "https://riverpointeauburn.org/";
const FENCE = "https://myhoa-online.com/article/fence_guidelines";
const RULES = "https://myhoa-online.com/Article/rulesandregs?act=36";
const CCR5 = "https://www.myhoa-online.com/Article/ccr5?act=36";

const faqs = [
  { q: "What fences does Riverpointe allow?", a: "The Riverpointe HOA fence guidelines say wood is the only approved fence material, fences cannot exceed 6 feet, gates must be arched and may not exceed the fence height, and each board should be no wider than 4 inches. The association's rules say fences must be the same style and size as installed by the declarant, and chain link fences are not permitted." },
  { q: "Can I put a fence in my front yard in Riverpointe?", a: "No. The fence guidelines say front yard fences are strictly prohibited." },
  { q: "What stain colors are approved in Riverpointe?", a: "The guidelines say fences should be stained, the preapproved stain colors are SW 3505 and SW 3507, and adjoining fences should be stained to match so there is no visible color difference." },
  { q: "Do I need ACC approval to repair my Riverpointe fence?", a: "Not for a repair. The guidelines treat work on 20% or less of the total fence as a repair, which does not require an ACC request. Anything more is a replacement, which needs an ACC request." },
  { q: "How far ahead do I submit a Riverpointe fence request?", a: "The association's rules say the request must be received 30 days before the installation date, installation may not start until written Board approval is received, and owners must also get any required City of Auburn approvals." },
  { q: "Does MyFence handle the Riverpointe ACC application?", a: "Yes. MyFence prepares and handles the ACC request for the homeowner, including the fence diagram, placement, stain color, materials and installation method the rules ask for, and builds only after the association approves. The association makes the decision." },
];

export const riverpointeHoaConfig: HoaApprovedFencingConfig = {
  canonical: "https://myfence.com/service-areas/auburn/riverpointe/hoa-approved-fencing",
  parentUrl: "https://myfence.com/service-areas/auburn/riverpointe",
  parentHref: "/service-areas/auburn/riverpointe",
  parentLinkLabel: "Back to Riverpointe fence installation",
  parentCrumbName: "Riverpointe, Auburn",
  hubHref: "/service-areas/auburn",
  hubLinkLabel: "Auburn fence installation",
  metaTitle: "Riverpointe HOA Fencing Guide | Auburn | MyFence",
  metaDescription: "Riverpointe HOA fence rules in Auburn from the association's published guidelines: written approval 30 days ahead, wood only, 6 ft max, arched gates, SW 3505 or SW 3507 stain, no chain link or front-yard fences. MyFence handles the HOA application. Not affiliated with the association.",
  locationLabel: "Riverpointe Homeowners Association · Auburn, WA",
  h1: "Riverpointe HOA Fencing Guide, Auburn",
  heroIntro: "The Riverpointe Homeowners Association approves new and replacement fences in writing through its Board or Architectural Control Committee (ACC). Its published guidelines allow wood fences only, up to 6 feet, with arched gates, boards no wider than 4 inches and a preapproved SW 3505 or SW 3507 stain. HOA-friendly choices are stained wood privacy fences that match the community examples and your neighbors' fences. MyFence handles the ACC application for the homeowner.",
  disclaimer: "MyFence is not affiliated with the Riverpointe Homeowners Association, is not an approved vendor, and does not speak for the association, its board or its architectural committee. Every association rule on this page comes from the association's own public fence guidelines and rules, linked below. Associations can change their rules, so confirm the current version with the association before you build. Where this page does not cover a detail, check with the association's architectural committee.",
  downloadCtaLabel: "Open HOA forms",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "Written approval before installing" },
    { icon: "file", label: "Request 30 days before install" },
    { icon: "shield", label: "Wood only, 6 ft max, arched gates" },
  ],
  formsHeading: "Forms: Riverpointe architectural approval",
  formsIntro: "These are direct links to the association's own public pages, so you always see the current version. The guidelines say the ACC request is filed online through the association's resident portal (registration required). MyFence handles the HOA application for the homeowner: we prepare the fence diagram and material details, help submit the request, and build only after approval.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    { label: "Riverpointe HOA Fence Guidelines", href: FENCE, note: "Approved material, height, board width, gate shape, preapproved stains, repair vs. replacement, and how to file the ACC request" },
    { label: "Riverpointe HOA Rules and Regulations", href: RULES, note: "Architectural control and fence rules: 30-day written request, Board approval, no chain link, City of Auburn approvals" },
    { label: "Riverpointe CC&R Article 5: Architectural Control", href: CCR5, note: "The covenant section that gives the Board or ACC its approval powers" },
  ],
  forms: [
    { href: PORTAL, title: "ACC/PIC Request (online, resident portal)", timing: "30+ days before install", source: "Official association", ctaLabel: "Open association portal", blurb: "Per the guidelines, sign in, go to Issues, choose ACC/PIC Request (Property Change Request) and the Fence Addition or Change category, and include a diagram of the fence location." },
    { href: FENCE, title: "Fence Guidelines (web page)", timing: "Before you design", source: "Official association", ctaLabel: "Open association page", blurb: "The association's fence specifications and example photos of a compliant fence." },
  ],
  processHeading: "Riverpointe fence approval process",
  steps: [
    { title: "Design within the guidelines", body: "Wood only, no taller than 6 feet, boards no wider than 4 inches, arched gates no taller than the fence, and no front yard fences or chain link. The rules say fences must be the same style and size as installed by the declarant and match the guideline examples." },
    { title: "Coordinate with your neighbors", body: "Adjoining fences should match and be stained to match. The guidelines note you may need to work with your neighbor to replace a whole section so it all matches." },
    { title: "Submit the ACC request 30 days ahead", body: "File the ACC/PIC request online with a diagram of the fence location. The rules ask for placement, stain color, materials, installation method and other information the Board requests, and for any required City of Auburn approvals." },
    { title: "Build after approval", body: "Installation may not begin until written approval is received. The guidelines say the association inspects new fences in person or during monthly audits, and deviations may need modification. For review timing, check with the association's architectural committee." },
  ],
  reviewHeading: "What the Riverpointe rules ask for",
  reviewIntro: "From the association's published fence guidelines and rules. Anything not listed here, check with the association's architectural committee.",
  reviewBullets: [
    "Written approval before a new or replacement fence is installed",
    "Request received at least 30 days before the installation date",
    "Wood is the only approved material; chain link is not permitted",
    "Maximum height 6 feet; arched gates no taller than the fence",
    "Boards no wider than 4 inches",
    "Stained in preapproved SW 3505 or SW 3507, matching adjoining fences",
    "No front yard fences",
  ],
  reviewFooterBeforeLink: "For citywide install coverage, see our",
  reviewFooterLinkLabel: "Auburn fence installation page",
  helpHeading: "How MyFence helps Riverpointe homeowners",
  helpCards: [
    { title: "We handle the HOA application", body: "We prepare the fence diagram, placement, stain, materials and installation details the ACC request asks for and handle the application for you." },
    { title: "Built to the guidelines", body: "We design wood fences with arched gates, boards 4 inches or narrower, a 6-foot maximum height and an approved stain, matched to your neighbors' fences." },
    { title: "Build after approval", body: "We schedule installation only after the association approves in writing, so you avoid rework." },
  ],
  leadFenceStyleName: "Riverpointe HOA fence",
  faqHeading: "Riverpointe fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Riverpointe fence",
  ctaBody: "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
