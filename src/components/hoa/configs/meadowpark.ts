import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: association's public website only (see officialLinks). No contact details published.
const SITE = "https://meadowparkhomeownersassociation.com/";
const DL = "https://img1.wsimg.com/blobby/go/9102bc4a-c2f5-4db7-b261-542e3236ecf1/downloads";
const CHANGE_FORM = `${DL}/ACC%20Change%20Proposal%20Form%20CM%26M.pdf?ver=1784991884661`;
const FENCE_GUIDE = `${DL}/1cb8t75pl_215442.pdf?ver=1784991884728`;
const VISIBLE_AREAS = `${DL}/1cb8tjb5c_536022.pdf?ver=1784991884728`;
const FENCE_DETAIL = `${DL}/1cb8v5jvj_395376.pdf?ver=1784991884728`;
const FENCE_PHOTO = `${DL}/1cb8v5jvj_524324.jpg?ver=1784991884728`;
const CCR_SUMMARY = `${DL}/CC%20%26%20R%20Summary%204-2023.pdf?ver=1784991884878`;

const faqs = [
  { q: "What fence style does Meadowpark allow?", a: "The association's Fence Replacement guidelines say the board has decided only one style will be approved: the Full Panel fence, a \"good neighbor fence\" that looks almost identical from both sides. Its website posts a standard fence detail drawing and a picture of the approved style." },
  { q: "What color can a Meadowpark fence be?", a: "The guidelines restrict fence colors to wood tone colors and say stain is preferred over paint because paint chips and is hard to remove." },
  { q: "How much notice does the Meadowpark ACC need?", a: "The website asks homeowners to fill out an ACC Change Proposal Form and give 14 days notice before scheduling a fence project. The CC&R summary says the ACC responds within 15 days of receipt." },
  { q: "Can I replace just a few panels?", a: "For fences facing 12th Ave SW, the BPA trail or sections mostly visible from a street, the board's letter says fences that need repair must be fully replaced at one time. Sections not visible between homes are the owner's call." },
  { q: "Does MyFence handle the Meadowpark ACC application?", a: "Yes. MyFence prepares the Change Proposal Form details (fence style, height, layout and colors) and handles the application for the homeowner, then builds only after approval. The association makes the decision." },
];

export const meadowparkHoaConfig: HoaApprovedFencingConfig = {
  canonical: "https://myfence.com/service-areas/federal-way/meadowpark/hoa-approved-fencing",
  parentUrl: "https://myfence.com/service-areas/federal-way",
  parentHref: "/service-areas/federal-way",
  parentLinkLabel: "Back to Federal Way fence installation",
  parentCrumbName: "Federal Way",
  metaTitle: "Meadowpark HOA Fencing Guide | Federal Way | MyFence",
  metaDescription: "Meadowpark Homeowners Association fence rules from its public website: the single approved Full Panel style, wood tone colors, the ACC Change Proposal Form and 14 days notice. MyFence handles the application. Not affiliated with the association.",
  locationLabel: "Meadowpark Homeowners Association · Federal Way, WA",
  h1: "Meadowpark HOA Fencing Guide, Federal Way",
  heroIntro: "Meadowpark's Architectural Control Committee (ACC) must approve any new or changed fence. The association approves one style, the Full Panel \"good neighbor\" fence, restricts colors to wood tones, and asks for an ACC Change Proposal Form with 14 days notice before you schedule the work. MyFence handles the ACC application for the homeowner.",
  disclaimer: "MyFence is not affiliated with the Meadowpark Homeowners Association or its management company, is not an approved vendor, and does not speak for the association or its Architectural Control Committee. Every association rule on this page comes from the association's own public website and documents, linked below. Associations can change their rules, so confirm the current version before you build. Where this page does not cover a detail, check with the association's architectural committee.",
  downloadCtaLabel: "Open HOA forms",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "ACC form + 14 days notice" },
    { icon: "file", label: "One approved style: Full Panel" },
    { icon: "shield", label: "Wood tone colors, stain preferred" },
  ],
  formsHeading: "Forms: Meadowpark ACC approval",
  formsIntro: "These are direct links to the association's own public forms and fence documents, so you always see the current version. MyFence handles the HOA application for the homeowner: we prepare the fence style, height, layout and color details, help submit the form, and build only after approval.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    { label: "Meadowpark HOA website", href: SITE, note: "ACC approval before a fence, the Change Proposal Form, and 14 days notice before scheduling" },
    { label: "Fence Replacement & Maintenance Guidelines (PDF)", href: FENCE_GUIDE, note: "Full Panel is the only approved style; wood tone colors, stain preferred; maintenance responsibility" },
    { label: "Fence replacement in highly visible areas (PDF)", href: VISIBLE_AREAS, note: "Full replacement rule for fences facing 12th Ave SW, the BPA trail, or mostly visible from a street" },
    { label: "CC&R Summary (PDF)", href: CCR_SUMMARY, note: "Section 3.7: prior ACC approval, what the form must include, finished side out, 15-day response" },
  ],
  forms: [
    { href: CHANGE_FORM, title: "ACC Change Proposal Form (PDF)", timing: "14 days before scheduling", source: "Official association", ctaLabel: "Open association form", blurb: "Required before any new or changed fence. Include the fence style, height, layout of the fence location and colors." },
    { href: FENCE_DETAIL, title: "Standard Fence Detail (PDF)", timing: "Before you design", source: "Official association", ctaLabel: "Open association document", blurb: "The association's drawing of its standard fence." },
    { href: FENCE_PHOTO, title: "Picture of approved fence style", timing: "Before you design", source: "Official association", ctaLabel: "Open association image", blurb: "Reference photo of the approved Full Panel style." },
    { href: FENCE_GUIDE, title: "Fence Replacement & Maintenance Guidelines (PDF)", timing: "Before you design", source: "Official association", ctaLabel: "Open association document", blurb: "The one-style rule, wood tone colors, and who maintains each side." },
  ],
  processHeading: "Meadowpark fence approval process",
  steps: [
    { title: "Design to the Full Panel style", body: "The board approves only the Full Panel fence, which looks almost identical from both sides. Colors are restricted to wood tones, with stain preferred. Fences are built finished side out, including those facing a greenbelt, and city right-of-way and setbacks must be observed." },
    { title: "Fill out the ACC Change Proposal Form", body: "List the fence style, height, layout of the fence location and colors. For a height limit, check with the association's architectural committee, since the public documents do not state one." },
    { title: "Give 14 days notice", body: "The website asks for the form and 14 days notice before you schedule the fence project. The CC&R summary says the ACC responds within 15 days of receipt. If a request is denied, the site offers an ACC Appeal Request Form." },
    { title: "Build after approval", body: "Build to the approved plan with any permits the city requires. On highly visible runs (12th Ave SW, the BPA trail, or mostly visible from a street), the board requires a full replacement rather than a few new panels." },
  ],
  reviewHeading: "What the Meadowpark rules ask for",
  reviewIntro: "From the association's public website and documents. Anything not listed here, check with the association's architectural committee.",
  reviewBullets: [
    "Prior ACC approval for all new or changed fences",
    "One approved style: the Full Panel \"good neighbor\" fence",
    "Wood tone colors only; stain preferred over paint",
    "Finished side facing out, including toward a greenbelt",
    "Change Proposal Form plus 14 days notice before scheduling",
    "Full replacement on highly visible street-facing runs",
  ],
  reviewFooterBeforeLink: "For citywide install coverage, see our",
  reviewFooterLinkLabel: "Federal Way fence installation page",
  helpHeading: "How MyFence helps Meadowpark homeowners",
  helpCards: [
    { title: "We handle the HOA application", body: "We fill in the style, height, layout and color details the Change Proposal Form asks for and handle the application for you." },
    { title: "Built to the standard detail", body: "We build to the association's posted Full Panel fence detail in a wood tone stain." },
    { title: "Build after approval", body: "We plan around the 14-day notice and schedule installation only after the ACC approves." },
  ],
  leadFenceStyleName: "Meadowpark HOA fence",
  faqHeading: "Meadowpark fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Meadowpark fence",
  ctaBody: "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
