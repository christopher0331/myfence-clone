import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: Timberlane Homes Association public website and posted PDFs only.
// No HOA emails, phones, or named contacts published.
const SITE = "https://www.timberlanehoa.org/";
const DOCS = "https://www.timberlanehoa.org/documents";
const COMMITTEES = "https://www.timberlanehoa.org/committees";
const RULES =
  "https://www.timberlanehoa.org/uploads/b/2166f6e0-0937-11ed-8db2-bb8ee90f2a9d/Rules%20and%20Regulations%202026.pdf";
const CCRS =
  "https://www.timberlanehoa.org/uploads/b/2166f6e0-0937-11ed-8db2-bb8ee90f2a9d/CC%26Rs_MjY3Mj.pdf";

const PARENT_URL = "https://myfence.com/service-areas/covington/timberlane";

const faqs = [
  {
    q: "When does Timberlane require association approval for a fence?",
    a: "The association's Rules and Regulations (effective January 2026), Chapter 5, say association approval is required for installation or modification of fences and/or retaining walls adjacent to association property. The same chapter says all plans, specifications and plot plans are submitted for Architectural Control and Policy Compliance (ACPC) review, and that if the association fails to respond to a verified submission within 30 days after receipt, approval will not be required for that request under the chapter. Check with the ACPC before you assume a fence is exempt.",
  },
  {
    q: "Can I build a fence in or along a Timberlane greenbelt?",
    a: "Chapter 13 (Greenbelts) says building or installing any permanent structures — including but not limited to fences, sheds, treehouses and wildlife feeders — or landscaping that creates a real or visual barrier restricting access into greenbelts or easements is not permitted. The Committees page and the Rules' additional-information section say to contact the Architectural Control and Policy Compliance committee about building a fence along a greenbelt. Use the contact channels on the association's own website; we do not publish those details here.",
  },
  {
    q: "What fence materials or heights does Timberlane publish?",
    a: "The public Rules require fences to be maintained in good repair (no peeling paint, graffiti, falling fences, or missing panels) and say shared fences between lots are the responsibility of both owners. The CC&Rs' Building Setback and Fence Requirements section says perimeter walls, hedges and fences are generally permitted as outlined on Exhibits B and C, and that King County zoning location requirements are mandatory. The public Rules and CC&Rs we reviewed do not list a single approved fence style, material palette, or maximum height for typical lot-line fences. Confirm height, materials and finish with the ACPC before you order.",
  },
  {
    q: "Is there a public Timberlane fence application form?",
    a: "The Documents page posts Rules and Regulations, CC&Rs, amendments, bylaws and maps, and says additional current legal documents are in the homeowner account portal. We did not find a separate public fence-only application PDF. Chapter 5 says requests must include the homeowner's name, address and phone number and are forwarded to the ACPC for review. Follow the submission instructions on the association's website.",
  },
  {
    q: "Does MyFence handle the Timberlane ACPC application?",
    a: "Yes. MyFence prepares the fence plan, height, materials and location details an ACPC review asks for, handles the application for the homeowner when association approval applies, and builds only after approval when required. MyFence is not affiliated with Timberlane Homes Association and is not an approved vendor. The association decides.",
  },
];

export const timberlaneHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/covington/timberlane",
  parentLinkLabel: "Back to Timberlane fence installation",
  parentCrumbName: "Timberlane, Covington",
  hubHref: "/service-areas/covington",
  hubLinkLabel: "Covington fence installation",
  metaTitle: "Timberlane HOA Fencing Guide | Covington | MyFence",
  metaDescription:
    "Timberlane Homes Association (Covington) fence rules from its posted Rules and CC&Rs: ACPC approval for fences adjacent to association property, greenbelt encroachment limits, and maintenance standards. MyFence handles the application. Not affiliated with the HOA.",
  locationLabel: "Timberlane Homes Association · Covington, WA",
  h1: "Timberlane HOA Fencing Guide, Covington",
  heroIntro:
    "Timberlane Homes Association's Rules and Regulations (effective January 2026) say association approval is required to install or modify fences or retaining walls adjacent to association property, and that those plans go to the Architectural Control and Policy Compliance (ACPC) committee. Greenbelts are common areas: permanent structures — including fences — that encroach on greenbelts or easements are not permitted. MyFence handles the ACPC application for the homeowner when approval is required and builds only after the association approves.",
  disclaimer:
    "MyFence is not affiliated with Timberlane Homes Association Inc., its Board, its Architectural Control and Policy Compliance (ACPC) committee, or its management company, is not an approved vendor, and does not speak for the association. Every association fact on this page comes from the association's own public website and posted PDFs, linked below. Associations can change their rules, so confirm the current version before you build. Where this page does not cover a detail — including height, materials, stain, or whether your specific lot line needs ACPC approval — check with the association's architectural committee. City and county rules are a separate step. We do not publish HOA contact details.",
  downloadCtaLabel: "Open HOA documents",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "ACPC review for fences on association property lines" },
    { icon: "shield", label: "No permanent fences in greenbelts or easements" },
    { icon: "file", label: "Rules effective January 2026 + posted CC&Rs" },
  ],
  formsHeading: "Forms and association documents",
  formsIntro:
    "Timberlane posts its governing documents on the public Documents page. We did not find a separate public fence-only application PDF; Chapter 5 of the Rules describes what an ACPC request must include. MyFence prepares the fence plan details and handles the application for the homeowner when association approval applies. Submit only through the association's own channels on its website — we do not publish HOA emails or phone numbers.",
  officialLinksHeading: "Association sources",
  officialLinks: [
    {
      label: "Timberlane Homes Association website",
      href: SITE,
      note: "Public site for the Covington association (established 1968; managed day-to-day by its property management company, named on the site)",
    },
    {
      label: "Documents",
      href: DOCS,
      note: "Rules and Regulations, Articles, CC&Rs, amendments, supplements, bylaws and division maps; additional documents in the homeowner portal",
    },
    {
      label: "Committees — Architectural Control and Policy Compliance",
      href: COMMITTEES,
      note: "Describes the ACPC's role, including rule compliance and building a fence along a greenbelt",
    },
    {
      label: "Rules and Regulations, effective January 2026 (PDF)",
      href: RULES,
      note: "Chapter 5 (ACPC approval for fences adjacent to association property), Chapter 8 (fence maintenance), Chapter 13 (greenbelts / encroachment)",
    },
    {
      label: "CC&Rs (PDF)",
      href: CCRS,
      note: "Architectural control for buildings; Building Setback and Fence Requirements with Exhibits B and C; King County zoning location rules are mandatory",
    },
  ],
  forms: [
    {
      href: RULES,
      title: "Rules and Regulations, effective January 2026 (PDF)",
      timing: "Before you design",
      source: "Official association",
      ctaLabel: "Open association document",
      blurb:
        "Chapter 5 lists when association approval is required for fences adjacent to association property, how to submit plans for ACPC review, and the 30-day non-response rule. Chapter 8 covers fence maintenance. Chapter 13 covers greenbelt encroachment, including fences.",
    },
    {
      href: CCRS,
      title: "CC&Rs (PDF)",
      timing: "Before you design",
      source: "Official association",
      ctaLabel: "Open association document",
      blurb:
        "Includes architectural control for buildings and Section 12 Building Setback and Fence Requirements. Perimeter fences are generally permitted as outlined on Exhibits B and C, subject to mandatory King County zoning location requirements. Ask the ACPC for the current exhibits.",
    },
    {
      href: DOCS,
      title: "Documents page",
      timing: "Before you apply",
      source: "Official association",
      ctaLabel: "Open association page",
      blurb:
        "Public list of governing documents. The page also points homeowners to the resident portal for additional current legal and financial documents. Use it to confirm you have the latest Rules and CC&Rs before you submit.",
    },
    {
      href: COMMITTEES,
      title: "ACPC committee page",
      timing: "If your fence touches association property or a greenbelt",
      source: "Official association",
      ctaLabel: "Open association page",
      blurb:
        "Explains that Architectural Control and Policy Compliance handles rule compliance and questions about building a fence along a greenbelt. Contact the committee only through the association's published channels on that page.",
    },
  ],
  processHeading: "Timberlane fence approval process",
  steps: [
    {
      title: "Confirm whether your fence needs ACPC approval",
      body: "Chapter 5 requires association approval for installation or modification of fences and/or retaining walls adjacent to association property. If your line runs along a greenbelt, common area, or other association property, plan on ACPC review. If you are unsure whether your lot line counts, ask the ACPC in writing before you order materials.",
    },
    {
      title: "Stay out of greenbelts and easements",
      body: "Chapter 13 says greenbelts are common areas for members' common use. Building or installing permanent structures — including fences — or landscaping that creates a real or visual barrier restricting access into greenbelts or easements is not permitted. Encroachments found during an approval request must be moved to the property line.",
    },
    {
      title: "Prepare plans for ACPC review",
      body: "Chapter 5 says all plans, specifications and plot plans are submitted for review and must include the homeowner's name, address and phone number. Follow the submission instructions on the association's website. MyFence prepares the fence layout, height, materials and location details. We do not publish HOA mailing addresses or emails.",
    },
    {
      title: "Watch the 30-day clock, then build to the approved plan",
      body: "Chapter 5 says if the association fails to respond to a verified submission within 30 days after receipt, approval will not be required and the request is deemed compliant with that chapter. Still keep written proof of what you submitted. Build only after you have a clear ACPC answer when approval applies, keep fences in good repair under Chapter 8, and follow any City of Covington or King County rules that apply to your lot.",
    },
  ],
  reviewHeading: "What the Timberlane documents cover",
  reviewIntro:
    "From the association's Rules and Regulations (effective January 2026), Committees page, and posted CC&Rs. The public documents do not publish a single approved fence style, material list, or height limit for ordinary lot-line fences, so confirm those details with the ACPC.",
  reviewBullets: [
    "ACPC / association approval required to install or modify fences or retaining walls adjacent to association property (Rules Ch. 5)",
    "Plans, specifications and plot plans submitted for ACPC review; include name, address and phone; 30-day non-response rule (Rules Ch. 5)",
    "No permanent fences (or other listed structures) in greenbelts or easements; no landscaping barriers that restrict greenbelt access (Rules Ch. 13)",
    "Fences must be maintained in good repair; shared lot-line fences are both owners' responsibility (Rules Ch. 8)",
    "CC&Rs: perimeter fences generally as shown on Exhibits B and C; King County zoning location requirements are mandatory",
    "No public fence-only application PDF found; use the association's Documents page and ACPC channels",
  ],
  reviewFooterBeforeLink: "For Timberlane install coverage outside the HOA process, see our",
  reviewFooterLinkLabel: "Timberlane fence installation page",
  helpHeading: "How MyFence helps Timberlane homeowners",
  helpCards: [
    {
      icon: "clipboard",
      title: "We handle the HOA application",
      body: "When ACPC approval applies, we prepare the plan, height, materials and location details and handle the application for you.",
    },
    {
      icon: "mapPin",
      title: "Greenbelt and association lines first",
      body: "We flag runs along greenbelts or association property before you order, so you can clear them with the ACPC.",
    },
    {
      icon: "shield",
      title: "Build after approval",
      body: "We schedule installation only after you have the association's answer when approval is required, and we build to keep maintenance standards in mind.",
    },
  ],
  leadFenceStyleName: "Timberlane HOA fence",
  faqHeading: "Timberlane fencing FAQs",
  faqs,
  schemaFaqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  ctaHeading: "Get a quote for your Timberlane fence",
  ctaBody:
    "Free on-site estimate. MyFence handles the HOA application when ACPC approval applies and builds after approval. Call (253) 455-1885.",
};
