import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: Maple Hills Covington HOA public website and posted PDFs only.
// Distinct from Renton's Maple Hills Maintenance Co. No HOA emails/phones published.
const SITE = "https://www.maplehillswahoa.com/";
const DOCS = "https://www.maplehillswahoa.com/documents";
const RULES =
  "https://www.maplehillswahoa.com/s/Maple-Hills-Rules-and-Regulations-111821.pdf";
const CCRS = "https://www.maplehillswahoa.com/s/Maple-Hills-HOA-CCRs.pdf";
const ACC_FORM =
  "https://www.maplehillswahoa.com/s/Maple-Hills-HOA-ACC-Request-Form.pdf";

const PARENT_URL = "https://myfence.com/service-areas/covington/maple-hills";

const faqs = [
  {
    q: "Do I need Maple Hills HOA approval to build a fence?",
    a: "Yes. The association's Rules and Regulations (posted November 18, 2021), section 13.1, say no fence shall be constructed on any lot without the prior written approval of the Board, which may exercise its discretion. The Rules also point to CC&R Section 6.17 (Fences) and Exhibit B (Fence Detail).",
  },
  {
    q: "What fence height and placement does Maple Hills allow?",
    a: "Section 13.4 says no fence shall exceed six (6) feet in height. Section 13.5 says no fence shall be allowed within the front yard setback. Sections 13.6–13.8 set garage and house setbacks for fence lines and allow the Board to permit fences closer to a garage or house front elevation if the fence does not obscure the view of adjoining lots. Confirm the current version with the ACC before you design.",
  },
  {
    q: "Which way should the finished side face?",
    a: "Section 13.3 says the finished wood side of the fence shall face the adjacent lot(s). Section 13.7 says when new fences are installed, the finished side of fencing and gates shall face the street and adjacent lots.",
  },
  {
    q: "Which form do I use, and how long does review take?",
    a: "Use the Maple Hills HOA ACC Request Form posted on the association's Governing Documents page. The form says the start date must be a minimum of 45 days from the application submission date, and that the ACC has 45 days from submission to respond (15 days to confirm receipt, then 30 days to provide the decision). Submitting the form does not guarantee approval.",
  },
  {
    q: "Does MyFence handle the Maple Hills ACC application?",
    a: "Yes. MyFence prepares the fence style, height, layout, materials and color details the ACC Request Form asks for, handles the application for the homeowner, and builds only after the association approves. MyFence is not affiliated with the Maple Hills Covington Homeowners Association and is not an approved vendor. The association decides.",
  },
];

export const mapleHillsHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/covington/maple-hills",
  parentLinkLabel: "Back to Maple Hills fence installation",
  parentCrumbName: "Maple Hills, Covington",
  hubHref: "/service-areas/covington",
  hubLinkLabel: "Covington fence installation",
  metaTitle: "Maple Hills HOA Fencing Guide | Covington | MyFence",
  metaDescription:
    "Maple Hills Covington HOA fence rules from the association's posted Rules and ACC Request Form: prior Board approval, 6-foot height limit, finished wood side out, front-setback limits. MyFence handles the ACC application. Not affiliated with the HOA.",
  locationLabel: "Maple Hills Covington Homeowners Association · Covington, WA",
  h1: "Maple Hills HOA Fencing Guide, Covington",
  heroIntro:
    "The Maple Hills Covington Homeowners Association's Rules and Regulations (posted November 18, 2021) say no fence may be built on any lot without prior written Board approval. They cap height at six feet, keep fences out of the front yard setback, and require the finished wood side to face adjacent lots and the street. The association posts an ACC Request Form for exterior changes. MyFence handles that application for the homeowner and builds only after approval.",
  disclaimer:
    "MyFence is not affiliated with the Maple Hills Covington Homeowners Association or its management company, is not an approved vendor, and does not speak for the association, its Board, or its Architectural Control Committee (ACC). Every association fact on this page comes from the association's own public website and posted PDFs, linked below. This page covers the Maple Hills Covington HOA only, not Renton's Maple Hills Maintenance Co. Associations can change their rules, so confirm the current version before you build. Where this page does not cover a detail, check with the association's architectural committee. City, county, and permit rules are a separate step.",
  downloadCtaLabel: "Open HOA forms",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "Prior written Board / ACC approval" },
    { icon: "mapPin", label: "6 ft max · finished wood side out" },
    { icon: "file", label: "Posted ACC Request Form · 45-day review window" },
  ],
  formsHeading: "Forms: Maple Hills ACC approval",
  formsIntro:
    "These are direct links to the association's own public documents, so you always see the current version. MyFence handles the HOA application for the homeowner: we prepare the fence style, height, layout, materials and color details, help submit the ACC Request Form, and build only after approval. Submit through the association's own channels listed on its documents page — we do not publish HOA contact details here.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    {
      label: "Maple Hills HOA website",
      href: SITE,
      note: "Maple Hills Covington Homeowners Association public site",
    },
    {
      label: "Governing Documents",
      href: DOCS,
      note: "CC&Rs, Bylaws, Articles, Rules and Regulations, and the ACC Request Form",
    },
    {
      label: "Rules and Regulations (PDF)",
      href: RULES,
      note: "Posted November 18, 2021. Section 13 covers fences; references CC&R Section 6.17 and Exhibit B, Fence Detail",
    },
    {
      label: "CC&Rs (PDF)",
      href: CCRS,
      note: "Declaration of Covenants, Conditions and Restrictions. The Rules cite Section 6.17 (Fences) and Exhibit B (Fence Detail). The posted file is a scan; use the Rules section 13 summary and confirm Exhibit B with the ACC",
    },
  ],
  forms: [
    {
      href: ACC_FORM,
      title: "Maple Hills HOA ACC Request Form (PDF)",
      timing: "At least 45 days before your planned start",
      source: "Official association",
      ctaLabel: "Open association form",
      blurb:
        "Required for exterior changes, including fences. Asks for a description, diagram and/or photos with location and height measurements, materials (manufacturer, model/style, color), contractor info if any, start and completion dates, and neighbor impact. The form says the ACC has 45 days from submission to respond.",
    },
    {
      href: RULES,
      title: "Rules and Regulations — Section 13, Fences (PDF)",
      timing: "Before you design",
      source: "Official association",
      ctaLabel: "Open association document",
      blurb:
        "Prior written Board approval, workmanlike construction, finished wood side facing adjacent lots and the street, six-foot height maximum, no fence in the front yard setback, and garage/house setback rules.",
    },
    {
      href: CCRS,
      title: "CC&Rs (PDF)",
      timing: "Before you design",
      source: "Official association",
      ctaLabel: "Open association document",
      blurb:
        "The Rules cite CC&R Section 6.17 (Fences) and Exhibit B (Fence Detail). Ask the ACC for the current Exhibit B detail before you order materials.",
    },
  ],
  processHeading: "Maple Hills fence approval process",
  steps: [
    {
      title: "Design to the posted fence rules",
      body: "Plan a wood fence no taller than six feet, kept out of the front yard setback, with the finished side facing adjacent lots and the street. Leave at least six feet back from the front elevation of a garage, and at least six feet (the Rules text says \"six (5) feet\" for the house line — confirm the current number with the ACC) back from the front elevation of the house, unless the Board allows a closer line that does not obscure adjoining views. The Rules point to Exhibit B, Fence Detail, in the CC&Rs for the association's standard detail.",
    },
    {
      title: "Fill out the ACC Request Form",
      body: "Include the modification description, a diagram and/or photos with location and height measurements, materials with manufacturer/model/style/color, contractor information if applicable, start and completion dates, and whether the work affects immediate neighbors. The form requires the planned start date to be at least 45 days after you submit.",
    },
    {
      title: "Submit through the association's channels",
      body: "The Governing Documents page posts the ACC Request Form and explains that Architectural Covenant Changes (ACC) requests are for exterior changes to the home or yard. Use the association's own submission instructions on that page. MyFence prepares the plan details and handles the application for you. We do not publish HOA emails or phone numbers.",
    },
    {
      title: "Wait for written approval, then build",
      body: "The form says the ACC has 45 days from submission to respond (15 days to confirm receipt, then 30 days for the decision), and that submitting a request does not guarantee approval. The ACC form also reminds applicants that city, county, state, and federal codes, setbacks, right-of-way rules, and property-line verification are the homeowner's responsibility. Build only to the approved plan, with any city permits that apply.",
    },
  ],
  reviewHeading: "What the Maple Hills fence rules ask for",
  reviewIntro:
    "From the association's Rules and Regulations, section 13 (Fences), posted November 18, 2021, and the posted ACC Request Form. Anything not listed here — including stain color, exact panel style beyond \"finished wood,\" or Exhibit B dimensions — check with the association's architectural committee.",
  reviewBullets: [
    "Prior written Board approval before any fence is constructed (Rules §13.1; cites CC&R §6.17)",
    "Built in a good and workmanlike manner that does not detract from adjacent structures (§13.2)",
    "Finished wood side faces adjacent lots; new fences and gates finished side toward the street and adjacent lots (§13.3, §13.7)",
    "Maximum height six (6) feet (§13.4)",
    "No fence within the front yard setback (§13.5)",
    "Garage and house front-elevation setbacks for fence lines, with limited Board discretion (§13.6–§13.8)",
    "ACC Request Form with diagrams, height, materials, and a start date at least 45 days out; 45-day ACC response window on the form",
  ],
  reviewFooterBeforeLink: "For Maple Hills install coverage outside the HOA process, see our",
  reviewFooterLinkLabel: "Maple Hills fence installation page",
  helpHeading: "How MyFence helps Maple Hills homeowners",
  helpCards: [
    {
      icon: "clipboard",
      title: "We handle the HOA application",
      body: "We fill in the style, height, layout, materials and color details the ACC Request Form asks for and handle the application for you.",
    },
    {
      icon: "file",
      title: "Designed to the posted rules",
      body: "We design around the six-foot cap, finished-side rules, and front-setback limits, and flag anything that needs an ACC call first.",
    },
    {
      icon: "shield",
      title: "Build after approval",
      body: "We plan around the form's 45-day start-date rule and schedule installation only after the association approves in writing.",
    },
  ],
  leadFenceStyleName: "Maple Hills HOA fence",
  faqHeading: "Maple Hills fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Maple Hills fence",
  ctaBody:
    "Free on-site estimate. MyFence handles the HOA application and builds after approval. Call (253) 455-1885.",
};
