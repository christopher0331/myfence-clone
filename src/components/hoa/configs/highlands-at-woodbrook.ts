import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: the organization's public website only (see officialLinks). No contact details published.
const HOME = "https://highlandsatwoodbrook.com/";
const DOCS = "https://highlandsatwoodbrook.com/governing-documents/";

const faqs = [
  { q: "Does the Highlands at Woodbrook have fence rules?", a: "The community organization's governing documents page says its Rules and Regulations (effective July 1, 2022) include property appearance requirements and the process for making exterior changes or improvements, and that its recorded Declaration of Protective Covenants covers building and land use, including alteration and general appearance. The public summary does not list fence heights, materials or colors, so check with the organization's Architectural Control Committee." },
  { q: "Who reviews fence projects in the Highlands at Woodbrook?", a: "The organization's declaration sets out the foundation of the Architectural Control Committee. The board enforces the governing documents." },
  { q: "Which form do I use for a Highlands at Woodbrook fence?", a: "The organization's governing documents page lists a Homeowner Improvement Application Form alongside its Rules and Regulations. Open the governing documents page for the current form." },
  { q: "How long does Highlands at Woodbrook review take?", a: "The organization's public pages don't publish a review timeline. Check with the Architectural Control Committee before you schedule work." },
  { q: "Does MyFence handle the Highlands at Woodbrook application?", a: "Yes. MyFence prepares and handles the Homeowner Improvement Application for the homeowner, including the fence plan and material details, and builds only after the organization approves. The organization makes the decision." },
];

export const highlandsAtWoodbrookHoaConfig: HoaApprovedFencingConfig = {
  canonical: "https://myfence.com/service-areas/auburn/highlands-at-woodbrook/hoa-approved-fencing",
  parentUrl: "https://myfence.com/service-areas/auburn/highlands-at-woodbrook",
  parentHref: "/service-areas/auburn/highlands-at-woodbrook",
  parentLinkLabel: "Back to Highlands at Woodbrook fence installation",
  parentCrumbName: "Highlands at Woodbrook, Auburn",
  hubHref: "/service-areas/auburn",
  hubLinkLabel: "Auburn fence installation",
  metaTitle: "Highlands at Woodbrook HOA Fencing Guide | Auburn | MyFence",
  metaDescription: "Fence approval in the Highlands at Woodbrook, Auburn, from the community organization's published governing documents: Architectural Control Committee, the exterior-improvement process and the Homeowner Improvement Application Form. MyFence handles the HOA application. Not affiliated with the organization.",
  locationLabel: "Highlands at Woodbrook Community Organization · Auburn, WA",
  h1: "Highlands at Woodbrook HOA Fencing Guide, Auburn",
  heroIntro: "The Highlands at Woodbrook Community Organization's recorded covenants establish an Architectural Control Committee, and its Rules and Regulations set out the process for exterior changes or improvements using a Homeowner Improvement Application Form. The organization doesn't publish fence specifics on its public pages, so HOA-friendly choices are wood fences that suit the neighborhood's existing look, confirmed with the committee first. MyFence handles the application for the homeowner.",
  disclaimer: "MyFence is not affiliated with the Highlands at Woodbrook Community Organization, is not an approved vendor, and does not speak for the organization, its board or its Architectural Control Committee. Everything about the organization on this page comes from its own public website, linked below. Fence height, material and color rules are not on its public pages, so check with the organization's Architectural Control Committee before you build.",
  downloadCtaLabel: "Open HOA forms",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "Architectural Control Committee review" },
    { icon: "file", label: "Homeowner Improvement Application" },
    { icon: "shield", label: "Rules and Regulations effective July 1, 2022" },
  ],
  formsHeading: "Forms: Highlands at Woodbrook improvement approval",
  formsIntro: "These are direct links to the organization's own public pages, so you always see the current version. MyFence handles the HOA application for the homeowner: we prepare the fence plan and material details, help submit the application, and build only after approval.",
  officialLinksHeading: "Organization sources",
  officialLinks: [
    { label: "Highlands at Woodbrook Community Organization website", href: HOME, note: "The organization's public site: 56 homes, board and governing documents" },
    { label: "Governing Documents", href: DOCS, note: "Rules and Regulations (effective July 1, 2022), Homeowner Improvement Application Form, Declaration of Protective Covenants and amendments, bylaws, and the organization's summary of each" },
  ],
  forms: [
    { href: DOCS, title: "Homeowner Improvement Application Form", timing: "Before you build", source: "Official organization", ctaLabel: "Open organization documents", blurb: "Listed on the organization's governing documents page with its Rules and Regulations. Open the page for the current form." },
    { href: DOCS, title: "Rules and Regulations, effective July 1, 2022", timing: "Before you design", source: "Official organization", ctaLabel: "Open organization documents", blurb: "Includes property appearance requirements and the process for making exterior changes or improvements." },
  ],
  processHeading: "Highlands at Woodbrook fence approval process",
  steps: [
    { title: "Read the governing documents", body: "The Rules and Regulations cover the process for exterior changes or improvements, and the recorded declaration covers alteration and general appearance. Check with the Architectural Control Committee for fence height, material and color." },
    { title: "Talk to your neighbors", body: "If the fence sits on a shared lot line, agree on the plan with your neighbor before you apply." },
    { title: "Submit the Homeowner Improvement Application", body: "Use the organization's Homeowner Improvement Application Form from its governing documents page. MyFence prepares the plan and material details." },
    { title: "Build after approval", body: "Build to the approved plan. The organization doesn't publish a review timeline, so check with the Architectural Control Committee before you schedule work." },
  ],
  reviewHeading: "What the Highlands at Woodbrook documents cover",
  reviewIntro: "From the organization's public governing documents page. Anything not listed here, check with the organization's Architectural Control Committee.",
  reviewBullets: [
    "An Architectural Control Committee established by the recorded declaration",
    "A process for exterior changes or improvements in the Rules and Regulations",
    "A published Homeowner Improvement Application Form",
    "Property maintenance and appearance requirements",
    "Declaration rules on alteration, general appearance and landscaping",
  ],
  reviewFooterBeforeLink: "For citywide install coverage, see our",
  reviewFooterLinkLabel: "Auburn fence installation page",
  helpHeading: "How MyFence helps Highlands at Woodbrook homeowners",
  helpCards: [
    { title: "We handle the HOA application", body: "We prepare the fence plan, materials and location details for the Homeowner Improvement Application and handle it for you." },
    { title: "Designed to fit the neighborhood", body: "We design around what the committee confirms and flag anything to check before you submit." },
    { title: "Build after approval", body: "We schedule installation only after the organization approves, so you avoid rework." },
  ],
  leadFenceStyleName: "Highlands at Woodbrook HOA fence",
  faqHeading: "Highlands at Woodbrook fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Highlands at Woodbrook fence",
  ctaBody: "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
