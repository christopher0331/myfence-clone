import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: Meridian Valley Maintenance Association public documents only (see officialLinks). No contact details published.
const SITE = "https://www.meridianvalleyhoa.com/";
const DOCS = "https://www.meridianvalleyhoa.com/reference-documents.html";
const UP = "https://www.meridianvalleyhoa.com/uploads/1/3/6/1/136142646";
const GUIDE = `${UP}/architect_guide_8.13.pdf`;
const DOR = `${UP}/declaration_of_restrictions.pdf`;
const SUMMARY = `${UP}/mvma_property_obligations_and_restrictions_summary_revised_jun2026.pdf`;
const LANDSCAPE = `${UP}/landscape.pdf`;
const FORM = `${UP}/architectural_request_form.pdf`;

const faqs = [
  { q: "Are fences allowed in Meridian Valley?", a: "Mostly no. The Declaration of Restrictions (Article VII, Section 4) says fences shall not be permitted. The association's Architectural Guide, updated and Board approved August 13, 2025, says no fences are allowed except those that enclose a swimming pool, and the association's Property Obligations and Restrictions Summary says fences are not allowed except as required by governmental regulation or code." },
  { q: "Can I fence in a patio or dog run in Meridian Valley?", a: "Not under the current guide. The August 13, 2025 revision of the Architectural Guide changed the rule from allowing fences that enclose a patio area, dog run or swimming pool to allowing only fences that enclose a swimming pool. Check with the Architectural Committee if you have questions about your lot." },
  { q: "What about walls, hedges or retaining walls?", a: "The Declaration of Restrictions says walls, hedges, retaining walls or mass planting are permitted only where approved by the Architectural Committee." },
  { q: "How do I apply to the Meridian Valley Architectural Committee?", a: "Use the association's Application for Architectural and Landscaping Improvement, posted on its Reference Documents page. The form asks for a description of the request with drawings, material descriptions, samples or manufacturer literature, and it must be signed and dated before the committee reviews it." },
  { q: "How long does Architectural Committee review take?", a: "The application form says projects involving structural changes or requiring a permit are deemed approved if you receive no approval or objection within 30 days, and landscaping or house color requests within 10 days. Confirm the timing for your project with the Architectural Committee." },
  { q: "Does MyFence handle the Meridian Valley application?", a: "Yes. For a project the rules allow, such as a swimming pool enclosure, MyFence prepares and handles the Architectural Committee application for the homeowner, including the drawing and material details the form asks for, and builds only after approval. The association makes the decision. We will not quote a yard fence that the association's rules do not allow." },
];

export const meridianValleyHoaConfig: HoaApprovedFencingConfig = {
  canonical: "https://myfence.com/service-areas/kent/meridian-valley/hoa-approved-fencing",
  parentUrl: "https://myfence.com/service-areas/kent/meridian-valley",
  parentHref: "/service-areas/kent/meridian-valley",
  parentLinkLabel: "Back to Meridian Valley fence installation",
  parentCrumbName: "Meridian Valley, Kent",
  hubHref: "/service-areas/kent",
  hubLinkLabel: "Kent fence installation",
  metaTitle: "Meridian Valley HOA Fence Rules | Kent | MyFence",
  metaDescription: "Meridian Valley Maintenance Association fence rules in Kent from the association's own documents: fences are not permitted except swimming pool enclosures, and walls or hedges need Architectural Committee approval. MyFence handles the HOA application. Not affiliated with the association.",
  locationLabel: "Meridian Valley Maintenance Association · Kent, WA",
  h1: "Meridian Valley HOA Fence Rules, Kent",
  heroIntro: "Meridian Valley is a golf-course community where the association's covenants largely rule out fences. Its current Architectural Guide allows fences only to enclose a swimming pool, and walls, hedges and retaining walls need Architectural Committee approval. If your project fits the rules, MyFence handles the Architectural Committee application for you.",
  disclaimer: "MyFence is not affiliated with the Meridian Valley Maintenance Association, is not an approved vendor, and does not speak for the association, its Board of Trustees or its Architectural Committee. Every association rule on this page comes from the association's own public documents, linked below. Associations can change their rules, so confirm the current version with the Architectural Committee before you build. Where this page does not cover a detail, check with the Architectural Committee.",
  downloadCtaLabel: "Open HOA forms",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "shield", label: "Fences only to enclose a swimming pool" },
    { icon: "clipboard", label: "Architectural Committee approval first" },
    { icon: "file", label: "Signed application with drawings" },
  ],
  tocItems: [
    { id: "hoa-callouts", label: "Key points before you plan" },
    { id: "hoa-forms", label: "Forms and association documents" },
    { id: "hoa-process", label: "Approval process" },
    { id: "hoa-rules", label: "What the rules say" },
    { id: "hoa-help", label: "How MyFence helps" },
    { id: "hoa-faq", label: "FAQs" },
  ],
  calloutsHeading: "Key points before you plan",
  callouts: [
    { variant: "warning", title: "Most yard fences are not allowed", body: "The Declaration of Restrictions says fences shall not be permitted, and the August 13, 2025 Architectural Guide allows fences only to enclose a swimming pool. The guide's earlier wording also allowed patio and dog-run fences; that allowance was removed." },
    { variant: "info", title: "Pool fences stay within setbacks", body: "The Architectural Guide says permanent swimming pools must have fence lines within setback requirements, and that the Architectural Committee approves the setback for each lot." },
    { variant: "success", title: "Walls and hedges by approval", body: "Walls, hedges, retaining walls or mass planting are permitted only where the Architectural Committee approves them." },
  ],
  formsHeading: "Forms: Meridian Valley architectural approval",
  formsIntro: "These are direct links to the association's own public documents, so you always see the current version. MyFence handles the HOA application for the homeowner: we prepare the drawing and material details for a project the rules allow, help submit the request, and build only after approval.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    { label: "MVMA Reference Documents", href: DOCS, note: "The association's page of governing documents, forms and policies" },
    { label: "A Guide for Your Architect or Designer (updated Aug. 13, 2025)", href: GUIDE, note: "Item 11: no fences except those that enclose a swimming pool; pool fence lines within setbacks" },
    { label: "Declaration of Restrictions", href: DOR, note: "Article VII, Section 4: fences not permitted; walls, hedges and retaining walls only where the Architectural Committee approves" },
    { label: "Property Obligations and Restrictions Summary (revised June 2026)", href: SUMMARY, note: "Fences not allowed except as required by governmental regulation or code" },
    { label: "Landscape policy", href: LANDSCAPE, note: "Restates the fence and walls/hedges rule" },
  ],
  forms: [
    { href: FORM, title: "Application for Architectural and Landscaping Improvement", timing: "Before any work", source: "Official association", ctaLabel: "Open association form", blurb: "Describe the request and attach drawings, material descriptions, samples or manufacturer literature. The form must be signed and dated before the Architectural Committee reviews it." },
    { href: SITE, title: "Association website", timing: "Before you design", source: "Official association", ctaLabel: "Open association site", blurb: "The association's home page, with links to its Architectural Committee and Reference Documents pages." },
  ],
  processHeading: "Meridian Valley approval process",
  steps: [
    { title: "Confirm your project is allowed", body: "Fences are not permitted except to enclose a swimming pool. Walls, hedges and retaining walls need committee approval. If you are unsure whether your idea fits, check with the Architectural Committee first." },
    { title: "Prepare the application", body: "Fill out the Application for Architectural and Landscaping Improvement with a description, drawings and material details. Pool fence lines must stay within the setbacks the committee approves for your lot." },
    { title: "Submit and wait for a decision", body: "The form explains how to return it. The committee may contact you for more information. Per the form, permit or structural projects are deemed approved if there is no approval or objection within 30 days." },
    { title: "Build after approval", body: "Start work only after the committee approves. The association's FAQ says contractors may work Monday through Saturday, 7:00 am to 7:00 pm, and not on Sundays except emergencies." },
  ],
  reviewHeading: "What the Meridian Valley rules say",
  reviewIntro: "From the association's published documents. Anything not listed here, such as fence height, materials or colors for a pool enclosure, check with the Architectural Committee.",
  reviewBullets: [
    "Fences shall not be permitted (Declaration of Restrictions, Article VII, Section 4)",
    "Only fences that enclose a swimming pool are allowed (Architectural Guide, Aug. 13, 2025)",
    "Permanent swimming pools must have fence lines within setback requirements",
    "Walls, hedges, retaining walls or mass planting only where the Architectural Committee approves",
    "Exterior work and landscaping need Architectural Committee approval first",
    "Contractor hours Monday to Saturday, 7:00 am to 7:00 pm; no Sunday work except emergencies",
  ],
  reviewFooterBeforeLink: "For the neighborhood overview, see our",
  reviewFooterLinkLabel: "Meridian Valley fence installation page",
  helpHeading: "How MyFence helps Meridian Valley homeowners",
  helpCards: [
    { icon: "clipboard", title: "We handle the HOA application", body: "For a project the rules allow, we prepare the drawing and material details the Architectural Committee form asks for and handle the application for you." },
    { icon: "shield", title: "Honest about the rules", body: "The covenants rule out most yard fences, so we tell you up front what the association allows rather than quoting a fence it would reject." },
    { icon: "file", title: "Build after approval", body: "We schedule installation only after the committee approves, within the association's contractor hours." },
  ],
  leadFenceStyleName: "Meridian Valley HOA fence",
  faqHeading: "Meridian Valley fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Planning a pool enclosure in Meridian Valley?",
  ctaBody: "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
