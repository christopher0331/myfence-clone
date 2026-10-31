import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: association's public website only (see officialLinks). No contact details published.
const ACC_PAGE = "https://timberlineridge.org/architectural-control";
const DECLARATION =
  "https://img1.wsimg.com/blobby/go/327bcdba-1860-49e2-8d37-84def13457a6/downloads/TRHOA_Declaration_of_Covenants.pdf?ver=1590076098565";

const faqs = [
  { q: "What fence does Timberline Ridge allow?", a: "The association's website quotes the CC&Rs: all fences shall be the same color and design as the fences built by the original developer unless the Architectural Control Committee approves otherwise. It describes that standard style as a fence that looks identical on both sides, 6 feet tall. Anything beyond that, check with the association's architectural committee." },
  { q: "Can I paint my Timberline Ridge fence?", a: "The association's website says wooden fences should not be painted to match the house color; they should be treated with a clear stain to stay consistent with the original plat design." },
  { q: "Is chain link or metal fencing allowed in Timberline Ridge?", a: "The website says chain-link fences are not permitted except for sport courts. In Magnolia, residents may also use black Ameristar Montage alloy fencing. For any other metal option, check with the ACC first." },
  { q: "Does MyFence handle the Timberline Ridge ACC application?", a: "Yes. MyFence prepares and handles the ACC request for the homeowner, including the fence plan and material details, and builds only after the association approves. The association makes the decision." },
];

export const timberlineRidgeHoaConfig: HoaApprovedFencingConfig = {
  canonical: "https://myfence.com/service-areas/sammamish/timberline-ridge/hoa-approved-fencing",
  parentUrl: "https://myfence.com/service-areas/sammamish/timberline-ridge",
  parentHref: "/service-areas/sammamish/timberline-ridge",
  parentLinkLabel: "Back to Timberline Ridge fence installation",
  parentCrumbName: "Timberline Ridge, Sammamish",
  hubHref: "/service-areas/sammamish",
  hubLinkLabel: "Sammamish fence installation",
  metaTitle: "Timberline Ridge HOA Fencing Guide | Sammamish | MyFence",
  metaDescription: "Timberline Ridge fence rules in Sammamish from the association's public website: the standard 6 ft fence, clear stain, banned chain link, ACC approval, and the official forms. MyFence handles the HOA application. Not affiliated with the association.",
  locationLabel: "Timberline Ridge HOA · Sammamish, WA",
  h1: "Timberline Ridge HOA Fencing Guide, Sammamish",
  heroIntro: "Timberline Ridge's homeowners association runs an Architectural Control Committee (ACC) that reviews fence work. Its website quotes the CC&Rs: every fence should match the color and design of the original developer's fences unless the ACC approves otherwise. The standard style looks identical on both sides at 6 feet, wood fences get a clear stain, and chain link is not permitted except for sport courts. MyFence handles the ACC application for the homeowner.",
  disclaimer: "MyFence is not affiliated with the Timberline Ridge HOA, is not an approved vendor, and does not speak for the association or its architectural committee. Every association rule on this page comes from the association's own public website, linked below. Associations can change their rules, so confirm the current version with the association before you build. Where this page does not cover a detail, check with the association's architectural committee.",
  downloadCtaLabel: "Open HOA forms",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "ACC request before any fence work" },
    { icon: "file", label: "Original-developer design, 6 ft, clear stain" },
    { icon: "shield", label: "No chain link except sport courts" },
  ],
  formsHeading: "Forms: Timberline Ridge architectural approval",
  formsIntro: "These are direct links to the association's own public forms and documents, so you always see the current version. MyFence handles the HOA application for the homeowner: we prepare the fence plan and material details, help submit the request, and build only after approval.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    { label: "Timberline Ridge Architectural Control page", href: ACC_PAGE, note: "The association's fence maintenance and replacement rules, the standard fence style, the chain-link rule, the Magnolia alloy option, and the online ACC request form" },
    { label: "Timberline Ridge Declaration of Covenants", href: DECLARATION, note: "The association's recorded covenants (PDF), linked from its Architectural Control page" },
  ],
  forms: [
    { href: ACC_PAGE, title: "Online ACC approval request", timing: "Before any fence work", source: "Official association", ctaLabel: "Open association form", blurb: "The association's online request form sits at the bottom of its Architectural Control page. The site asks homeowners to complete and submit it before starting a fence project." },
    { href: DECLARATION, title: "Declaration of Covenants (PDF)", timing: "Before you design", source: "Official association", ctaLabel: "Open association document", blurb: "The covenants the ACC enforces, including the rule that fences match the original developer's color and design." },
  ],
  processHeading: "Timberline Ridge fence approval process",
  steps: [
    { title: "Start from the standard fence", body: "The CC&Rs, as quoted on the association's website, say fences shall be the same color and design as the original developer's fences unless the ACC approves otherwise. The standard style looks identical on both sides and is 6 feet tall. Chain link is not permitted except for sport courts; Magnolia residents may also use black Ameristar Montage alloy fencing." },
    { title: "Check city permits", body: "The ACC page says that before it approves a project, the homeowner must confirm they have obtained any permits needed from the City of Sammamish. Outdoor changes must also respect HOA easements and city rules." },
    { title: "Submit the online ACC request", body: "Complete and submit the online form on the association's Architectural Control page before any work starts. The site warns that skipping ACC approval may result in a fine under the association's rules. For review timing, check with the association's architectural committee." },
    { title: "Build and clear-stain", body: "After approval, build to the approved plan. The association asks that wooden fences be treated with a clear stain rather than painted to match the house. The HOA has no policy on splitting the cost of a shared fence; neighbors decide that between themselves." },
  ],
  reviewHeading: "What the Timberline Ridge rules ask for",
  reviewIntro: "From the association's public website. Anything not listed here, check with the association's architectural committee.",
  reviewBullets: [
    "Same color and design as the original developer's fences, unless the ACC approves otherwise",
    "Standard style: identical on both sides, 6 ft tall",
    "Clear stain on wood fences, not painted to match the house",
    "No chain link except for sport courts",
    "Black Ameristar Montage alloy also allowed in Magnolia",
    "ACC request submitted before work starts",
  ],
  reviewFooterBeforeLink: "For citywide install coverage, see our",
  reviewFooterLinkLabel: "Sammamish fence installation page",
  helpHeading: "How MyFence helps Timberline Ridge homeowners",
  helpCards: [
    { title: "We handle the HOA application", body: "We prepare the fence plan, materials, and stain details the ACC asks for and handle the application for you." },
    { title: "Built to match the neighborhood", body: "We design to the association's standard-style fence and flag anything you need to confirm with the committee." },
    { title: "Build after approval", body: "We schedule installation only after the association approves, so you avoid rework." },
  ],
  leadFenceStyleName: "Timberline Ridge HOA fence",
  faqHeading: "Timberline Ridge fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Timberline Ridge fence",
  ctaBody: "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
