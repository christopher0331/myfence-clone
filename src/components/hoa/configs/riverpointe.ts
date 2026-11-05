import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Official Riverpointe association portals (riverpointeauburn.org, myhoa-online.com
// fence guidelines / rules / CCR Article 5) no longer resolve with a working page.
// Do not link unverified URLs. Soften claims and point readers to the ACC.
const AUBURN_FENCE_CODE = "https://auburn.municipal.codes/ACC/18.31.020";

const faqs = [
  {
    q: "What fences does Riverpointe allow?",
    a: "Riverpointe's Board or Architectural Control Committee (ACC) reviews fence projects. Older public guideline pages previously described wood as the only approved material, a 6-foot maximum height, arched gates, and stained fences that match neighbors, and they said chain link and front-yard fences were not allowed. Those association pages are no longer available online, so treat those details as unverified until you confirm the current rules with the ACC in writing.",
  },
  {
    q: "Can I put a fence in my front yard in Riverpointe?",
    a: "Confirm with the Riverpointe ACC before you plan a front-yard fence. Older public association guidelines said front-yard fences were prohibited, but that source is no longer online. Get the current rule in writing from the ACC.",
  },
  {
    q: "What stain colors are approved in Riverpointe?",
    a: "Ask the Riverpointe ACC for the current approved stain list. Older public guidelines named Sherwin-Williams SW 3505 and SW 3507, but that source is no longer online, so do not order stain until the ACC confirms.",
  },
  {
    q: "Do I need ACC approval to repair my Riverpointe fence?",
    a: "Ask the Riverpointe ACC. Older public guidelines treated work on about 20% or less of the fence as a repair that did not need a request, and anything more as a replacement that did. Confirm the current repair-versus-replacement rule with the ACC before you start.",
  },
  {
    q: "How far ahead do I submit a Riverpointe fence request?",
    a: "Ask the Riverpointe ACC for the current lead time and submission process. Older public rules asked for a written request about 30 days before installation and said work could not start until written approval, plus any City of Auburn approvals. Confirm both with the ACC and the city.",
  },
  {
    q: "Does MyFence handle the Riverpointe ACC application?",
    a: "Yes. MyFence prepares and handles the ACC request for the homeowner, including the fence diagram, placement, materials, and installation details the association asks for, and builds only after the association approves. The association makes the decision.",
  },
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
  metaDescription:
    "Riverpointe HOA fencing in Auburn: confirm current ACC fence rules in writing before you build. MyFence handles the HOA application and follows City of Auburn limits. Not affiliated with the association.",
  locationLabel: "Riverpointe Homeowners Association · Auburn, WA",
  h1: "Riverpointe HOA Fencing Guide, Auburn",
  heroIntro:
    "The Riverpointe Homeowners Association's Board or Architectural Control Committee (ACC) reviews new and replacement fences. Public association guideline pages that once listed materials, height, gate style, and stain colors are no longer available online, so confirm every rule with the ACC in writing before you design or order materials. MyFence handles the ACC application for the homeowner and builds only after approval.",
  disclaimer:
    "MyFence is not affiliated with the Riverpointe Homeowners Association, is not an approved vendor, and does not speak for the association, its board, or its architectural committee. Older public association pages that described fence rules are no longer reachable, so this page does not treat those details as current. Confirm the current rules with the association's architectural committee before you build. Where this page does not cover a detail, check with the ACC.",
  downloadCtaLabel: "ACC approval guidance",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "Confirm rules with the ACC in writing" },
    { icon: "file", label: "MyFence handles the HOA application" },
    { icon: "shield", label: "City of Auburn rules are a separate step" },
  ],
  formsHeading: "Forms: Riverpointe architectural approval",
  formsIntro:
    "The association's former public portal and MyHOA-online guideline pages no longer load, so we do not link them. Ask the Riverpointe ACC (or the board, if the board reviews exterior work) for the current application form, lead time, materials, height, gate, and stain rules, and keep the answer in writing. MyFence prepares the fence diagram and material details for that request and builds only after approval. Separately, follow City of Auburn fence limits for your lot.",
  officialLinksHeading: "Verified city source",
  officialLinks: [
    {
      label: "Auburn City Code 18.31.020, Fences",
      href: AUBURN_FENCE_CODE,
      note: "City height and permit rules that apply in Auburn, separate from association approval",
    },
  ],
  forms: [
    {
      href: AUBURN_FENCE_CODE,
      title: "City of Auburn fence code (not HOA)",
      timing: "City zoning rules",
      source: "City of Auburn",
      ctaLabel: "Open city code",
      blurb:
        "Use this for city height and permit limits only. It does not replace Riverpointe ACC approval. Ask the ACC for the current association form and rules.",
    },
  ],
  processHeading: "Riverpointe fence approval process",
  steps: [
    {
      title: "Get the current ACC rules in writing",
      body: "Ask the Riverpointe ACC what materials, heights, gate styles, stain colors, and placement rules apply now, and whether a repair needs a request. Do not rely on older public pages that are no longer online.",
    },
    {
      title: "Coordinate with your neighbors",
      body: "Shared lot-line fences often need both households to agree on style and finish so the run matches. Confirm any match requirement with the ACC.",
    },
    {
      title: "Submit the ACC request before you build",
      body: "Use the association's current request process. MyFence prepares the diagram, placement, materials, and installation details the ACC asks for. Also confirm any City of Auburn approvals your lot needs.",
    },
    {
      title: "Build after approval",
      body: "Schedule installation only after written association approval (and any required city approval). For review timing, check with the ACC.",
    },
  ],
  reviewHeading: "What to confirm with the Riverpointe ACC",
  reviewIntro:
    "Because the association's public guideline pages are offline, treat the list below as a checklist to confirm, not as current published rules.",
  reviewBullets: [
    "Whether written ACC or Board approval is required before a new or replacement fence",
    "Current lead time and what drawings or photos the request must include",
    "Allowed materials, maximum height, gate style, board width, and stain colors",
    "Whether front-yard fences or chain link are allowed",
    "How the association treats repairs versus full replacements",
    "Any City of Auburn approvals required for your lot, checked separately from the ACC",
  ],
  reviewFooterBeforeLink: "For citywide install coverage, see our",
  reviewFooterLinkLabel: "Auburn fence installation page",
  helpHeading: "How MyFence helps Riverpointe homeowners",
  helpCards: [
    {
      title: "We handle the HOA application",
      body: "We prepare the fence diagram, placement, materials, and installation details the ACC asks for and handle the application for you.",
    },
    {
      title: "Designed to what the ACC confirms",
      body: "We design after you have the association's current rules in writing, so the plan matches what they expect.",
    },
    {
      title: "Build after approval",
      body: "We schedule installation only after the association approves in writing, so you avoid rework.",
    },
  ],
  leadFenceStyleName: "Riverpointe HOA fence",
  faqHeading: "Riverpointe fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Riverpointe fence",
  ctaBody:
    "Free on-site estimate. MyFence handles the HOA application and builds after approval.",
};
