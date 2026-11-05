import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: Twin Lakes Homeowners Association public pages and documents only (see officialLinks). No contact details published.
const ACC = "https://www.twinlakeshoa.com/acc-form";
const RULES = "https://www.twinlakeshoa.com/_files/ugd/774c9e_086c4c625b2e426492efaf3382938e6a.pdf";
const CCRS = "https://www.twinlakeshoa.com/_files/ugd/216127_dbb794712473413289803f557023d493.pdf";
const SUMMARY = "https://www.twinlakeshoa.com/_files/ugd/216127_9b350a49f72d4e8bb499eb6794aa6a73.pdf";
const ONLINE = "https://www.jotform.com/build/250474698965173";
const PRINT = "https://www.twinlakeshoa.com/_files/ugd/774c9e_e5a2d956380f464396084bbb2abfd143.pdf";
const OVERHEAD = "https://www.twinlakeshoa.com/_files/ugd/774c9e_7c6a13418b5741e59f9b0d62fb580182.pdf";

const faqs = [
  { q: "Do I need Twin Lakes HOA approval for a fence?", a: "Yes. The association says any change to the exterior of your property, including fences, needs prior approval from its Architectural Control Committee (ACC), and projects cannot start until you receive approval. Its list of projects needing approval includes fences, including repairs and re-staining." },
  { q: "How tall can a fence be in Twin Lakes?", a: "The Twin Lakes HOA Rules, Regulations and Policies say fences may not exceed 6 feet in height. The City of Federal Way has its own rules too, so check both." },
  { q: "Is chain link allowed in Twin Lakes?", a: "No. The Rules, Regulations and Policies say chain link fencing is not an approved material." },
  { q: "Can I build a fence in front of the setback line?", a: "No. The rules say fencing must meet the setback requirements in the CC&Rs (Article IX, Section 13, and Article X, Section 2 for fairway lots) and cannot be built forward of those setbacks. Check the CC&Rs or the ACC for your lot's setbacks." },
  { q: "What do I submit to the Twin Lakes ACC for a fence?", a: "The association asks for the fence height, length, a diagram showing the fence's location in relation to the property lines, the materials and the finish. It offers an online form, a printable application and an overhead view template." },
  { q: "How long does Twin Lakes ACC approval take?", a: "The association asks owners to allow up to 30 days for an approval and says incomplete submissions delay the process." },
  { q: "Does MyFence handle the Twin Lakes ACC application?", a: "Yes. MyFence prepares and handles the ACC application for the homeowner, including the height, length, property-line diagram, materials and finish the association asks for, and builds only after approval. The association makes the decision." },
];

export const twinLakesHoaConfig: HoaApprovedFencingConfig = {
  canonical: "https://myfence.com/service-areas/federal-way/twin-lakes/hoa-approved-fencing",
  parentUrl: "https://myfence.com/service-areas/federal-way/twin-lakes",
  parentHref: "/service-areas/federal-way/twin-lakes",
  parentLinkLabel: "Back to Twin Lakes fence installation",
  parentCrumbName: "Twin Lakes, Federal Way",
  hubHref: "/service-areas/federal-way",
  hubLinkLabel: "Federal Way fence installation",
  metaTitle: "Twin Lakes HOA Fencing Guide | Federal Way | MyFence",
  metaDescription: "Twin Lakes HOA fence rules in Federal Way from the association's published rules: ACC approval first (including repairs and re-staining), 6 ft max, no chain link, no fences forward of CC&R setbacks, allow up to 30 days. MyFence handles the HOA application. Not affiliated with the association.",
  locationLabel: "Twin Lakes Homeowners Association · Federal Way, WA",
  h1: "Twin Lakes HOA Fencing Guide, Federal Way",
  heroIntro: "The Twin Lakes Homeowners Association's Architectural Control Committee (ACC) approves fences before any work starts, including repairs and re-staining. Its published rules cap fences at 6 feet, rule out chain link, and keep fences behind the CC&R setbacks. HOA-friendly choices are wood privacy or framed wire fences within those limits. MyFence handles the ACC application for you.",
  disclaimer: "MyFence is not affiliated with the Twin Lakes Homeowners Association, is not an approved vendor, and does not speak for the association, its board or its Architectural Control Committee. Every association rule on this page comes from the association's own public pages and documents, linked below. Associations can change their rules, so confirm the current version with the association before you build. Where this page does not cover a detail, check with the Architectural Control Committee.",
  downloadCtaLabel: "Open HOA forms",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "ACC approval before any work" },
    { icon: "shield", label: "6 ft max, no chain link" },
    { icon: "file", label: "Allow up to 30 days for approval" },
  ],
  tocItems: [
    { id: "hoa-callouts", label: "Key points before you plan" },
    { id: "hoa-forms", label: "ACC forms and documents" },
    { id: "hoa-process", label: "Approval process" },
    { id: "hoa-rules", label: "What the rules ask for" },
    { id: "hoa-help", label: "How MyFence helps" },
    { id: "hoa-faq", label: "FAQs" },
  ],
  calloutsHeading: "Key points before you plan",
  callouts: [
    { variant: "warning", title: "Repairs and re-staining need approval too", body: "The association's list of projects needing prior ACC approval includes fences, including repairs and re-staining. Projects cannot start until you receive approval." },
    { variant: "info", title: "Setbacks come from the CC&Rs", body: "Fencing must meet the setbacks in CC&R Article IX, Section 13, and Article X, Section 2 for fairway lots, and cannot be built forward of them. Check the CC&Rs or the ACC for your lot." },
    { variant: "success", title: "Complete submissions move faster", body: "The association asks owners to allow up to 30 days and says incomplete submissions delay approval, so include height, length, a property-line diagram, materials and finish." },
  ],
  formsHeading: "Forms: Twin Lakes ACC approval",
  formsIntro: "These are direct links to the association's own public forms and documents, so you always see the current version. MyFence handles the HOA application for the homeowner: we prepare the fence diagram and material details, help submit the request, and build only after approval.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    { label: "Twin Lakes HOA ACC Form & Info", href: ACC, note: "What needs approval, what to include for fences, and the up-to-30-day review" },
    { label: "Twin Lakes HOA Rules, Regulations and Policies", href: RULES, note: "Chapter on fencing: ACC approval, CC&R setbacks, no chain link, 6 ft maximum" },
    { label: "Twin Lakes HOA CC&Rs", href: CCRS, note: "Article IX, Section 13 and Article X, Section 2 setback and fence requirements" },
    { label: "TLHOA Rules Summary", href: SUMMARY, note: "The association's short summary of its rules" },
  ],
  forms: [
    { href: ONLINE, title: "ACC application (online form)", timing: "Up to 30 days before install", source: "Official association", ctaLabel: "Open online form", blurb: "The association's online ACC form. It says you receive an email confirmation and can update the application after submitting." },
    { href: PRINT, title: "ACC application (printable)", timing: "Up to 30 days before install", source: "Official association", ctaLabel: "Open association form", blurb: "The paper version of the ACC application." },
    { href: OVERHEAD, title: "Overhead view template", timing: "With your application", source: "Official association", ctaLabel: "Open association template", blurb: "Use it for the diagram showing the fence's location in relation to your property lines." },
  ],
  processHeading: "Twin Lakes fence approval process",
  steps: [
    { title: "Design within the rules", body: "No taller than 6 feet, no chain link, and nothing forward of the CC&R setbacks for your lot (fairway lots have their own section). For anything else, such as style or color, check with the ACC." },
    { title: "Prepare the ACC submission", body: "Include the fence height, length, a diagram showing the fence in relation to the property lines, materials and finish. If you use a contractor, include their drawing, the scope of work and start and completion dates." },
    { title: "Submit and allow up to 30 days", body: "Submit online or on paper. The ACC may ask for more information, and incomplete submissions delay approval. The association also says to check whether your project needs a city permit." },
    { title: "Build after approval", body: "Projects cannot start until you receive approval. If anything changes after approval, the association says you need to submit an addendum." },
  ],
  reviewHeading: "What the Twin Lakes rules ask for",
  reviewIntro: "From the association's published ACC page and Rules, Regulations and Policies. Anything not listed here, check with the Architectural Control Committee.",
  reviewBullets: [
    "Prior ACC approval for fences, including repairs and re-staining",
    "Fences may not exceed 6 feet in height",
    "Chain link fencing is not an approved material",
    "Fences must meet CC&R setbacks and cannot be built forward of them",
    "Submission includes height, length, property-line diagram, materials and finish",
    "Allow up to 30 days for approval; changes after approval need an addendum",
  ],
  reviewFooterBeforeLink: "For lakeside lots and city rules, see our",
  reviewFooterLinkLabel: "Twin Lakes fence installation page",
  helpHeading: "How MyFence helps Twin Lakes homeowners",
  helpCards: [
    { icon: "clipboard", title: "We handle the HOA application", body: "We measure on site and prepare the height, length, property-line diagram, materials and finish the ACC asks for, and handle the application for you." },
    { icon: "shield", title: "Built to the rules", body: "We design wood or framed wire fences at 6 feet or under, with no chain link, behind your lot's CC&R setbacks." },
    { icon: "file", title: "Build after approval", body: "We schedule installation only after the ACC approves, so you avoid rework." },
  ],
  leadFenceStyleName: "Twin Lakes HOA fence",
  faqHeading: "Twin Lakes fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Twin Lakes fence",
  ctaBody: "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
