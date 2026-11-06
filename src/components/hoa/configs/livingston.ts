import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

// Sources: Livingston HOA public website and PDFs only (see officialLinks).
// Never publish HOA emails, phones, or mailing addresses.
const PARENT_URL = "https://myfence.com/service-areas/sammamish/livingston";
const HOA_HOME = "https://livingstonhomeownersassociation.com/";
const HOA_ACC = "https://livingstonhomeownersassociation.com/?page_id=11";
const HOA_DOCS = "https://livingstonhomeownersassociation.com/?page_id=15";
const HOA_PAINT = "https://livingstonhomeownersassociation.com/?page_id=21";
const HOA_GUIDELINES =
  "https://livingstonhomeownersassociation.com/documents/Livingston%20ACC%20General%20Guidelines%20Rev.pdf";
const HOA_FORM =
  "https://livingstonhomeownersassociation.com/wp-content/uploads/2025/05/Livingston-ACC-Review-Request-Form-Rev.pdf";
const CITY_FENCE_HANDOUT =
  "https://www.sammamish.us/media/jqrdsnjd/220-handout-fencing.pdf";
const CITY_EXEMPT_CODE = "https://sammamish.municipal.codes/SMC/16.20.200";

export const livingstonHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/sammamish/livingston",
  parentLinkLabel: "Back to Livingston fence installation",
  parentCrumbName: "Livingston, Sammamish",
  hubHref: "/service-areas/sammamish",
  hubLinkLabel: "Sammamish fence installation",
  metaTitle:
    "Livingston HOA Fencing | ACC Cedar Fence Rules | Sammamish | MyFence",
  metaDescription:
    "Livingston HOA fencing in Sammamish: ACC General Guidelines call for vertical cedar up to 6 feet, ban plastic and chain link, and require the Review Request Form. MyFence handles the HOA application. (253) 455-1885.",
  locationLabel: "Livingston Homeowners' Association · Sammamish, WA",
  h1: "Livingston HOA Fencing Guide, Sammamish",
  heroIntro:
    "Livingston is an 88-home Sammamish subdivision built by William E. Buchan, Inc., governed by the Livingston Homeowners' Association. Its published ACC General Guidelines (Rev 11.11.24) allow cedar, vertical fences up to 6 feet with a semi-transparent stain, and list chain link, wrought iron, plastic, split rail, stone, and painted cedar as not acceptable. New and replacement fences need the Architectural Review Request Form. MyFence handles the HOA application for you.",
  disclaimer:
    "MyFence is not affiliated with the Livingston Homeowners' Association, is not an approved vendor, and does not speak for the association or its Architectural Control Committee. Association facts on this page come from the association's own public website and PDFs, linked below. City facts come from the City of Sammamish. Associations can revise guidelines, so confirm the current version with the ACC before you build. Where a detail is not published, ask the ACC.",
  downloadCtaLabel: "Open HOA forms",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "Cedar, vertical, 6 ft maximum" },
    { icon: "file", label: "Semi-transparent stain only — no opaque paint" },
    { icon: "shield", label: "ACC Review Request Form required" },
  ],
  formsHeading: "Forms: Livingston architectural approval",
  formsIntro:
    "These are direct links to the association's own public forms and guidelines, so you always see the current version. MyFence handles the HOA application for the homeowner: we prepare the site plan, materials, height, and stain details and submit the Review Request Form, then build only after written approval.",
  officialLinksHeading: "Association and city links",
  officialLinks: [
    {
      label: "Livingston Homeowners' Association website",
      href: HOA_HOME,
      note: "States the association covers 88 homes in Sammamish designed and built by William E. Buchan, Inc., and relies on the ACC to maintain architectural integrity",
    },
    {
      label: "Architectural Control Committee page",
      href: HOA_ACC,
      note: "Says completing the Architectural Review Request Form is mandatory for exterior changes, including new and replacement fences, with no fee for submittal or ACC review",
    },
    {
      label: "ACC General Guidelines (PDF, Rev 11.11.24)",
      href: HOA_GUIDELINES,
      note: "Acceptable fences: cedar, vertical, 6-foot maximum height, with semi-transparent stain. Not acceptable: chain link, wrought iron, plastic, split rail, stone, or painted cedar",
    },
    {
      label: "Architectural Review Request Form (PDF, Rev 05.09.24)",
      href: HOA_FORM,
      note: "Must be submitted before exterior changes; allow at least 14 days for ACC review and Board final action; includes a Major Landscaping, Hardscaping and Fences section",
    },
    {
      label: "Exterior Paint Colors page",
      href: HOA_PAINT,
      note: "Says cedar fences are not to be painted with opaque house paint and may be protected with exterior penetrating semi-transparent stain; shows a pre-approved stain product",
    },
    {
      label: "Association Documents page",
      href: HOA_DOCS,
      note: "Links the Review Form, ACC General Guidelines, CC&Rs, bylaws, and the Summerwood plat map",
    },
    {
      label: "City of Sammamish Handout No. 220, Residential Fences",
      href: CITY_FENCE_HANDOUT,
      note: "6 feet in rear and side yards, 4 feet in front yards, 3.5 feet in a 15-by-15-foot sight distance triangle",
    },
    {
      label: "Sammamish Municipal Code 16.20.200, work exempt from permit",
      href: CITY_EXEMPT_CODE,
      note: "Lists fences not over six feet high among work that does not need a permit, outside critical areas and standard shoreline setbacks",
    },
  ],
  forms: [
    {
      href: HOA_FORM,
      title: "Architectural Review Request Form",
      timing: "Before any fence work",
      source: "Official association",
      ctaLabel: "Open association PDF",
      blurb:
        "The association's Review Request Form (Rev 05.09.24). Incomplete submittals are returned without review. Allow at least 14 days for ACC review and Board final action. MyFence prepares this package for you.",
    },
    {
      href: HOA_GUIDELINES,
      title: "ACC General Guidelines",
      timing: "Before you design",
      source: "Official association",
      ctaLabel: "Open association PDF",
      blurb:
        "The published fence standard: cedar, vertical, 6-foot maximum; semi-transparent stain allowed; chain link, wrought iron, plastic, split rail, stone, and painted cedar not acceptable.",
    },
    {
      href: HOA_PAINT,
      title: "Exterior Paint Colors (fence stain note)",
      timing: "Choosing a finish",
      source: "Official association",
      ctaLabel: "Open association page",
      blurb:
        "Confirms cedar fences may not take opaque house paint and may use exterior penetrating semi-transparent stain. Confirm the current pre-approved product with the ACC when you submit.",
    },
    {
      href: CITY_FENCE_HANDOUT,
      title: "City of Sammamish Residential Fences handout",
      timing: "Zoning handout",
      source: "City of Sammamish",
      ctaLabel: "Open city PDF",
      blurb:
        "City height summary for rear, side, and front yards and sight-distance triangles. Association approval does not replace city rules.",
    },
  ],
  processHeading: "Livingston fence approval process",
  steps: [
    {
      title: "Confirm your lot is in Livingston",
      body: "The association describes Livingston as 88 Buchan-built homes in Sammamish and publishes a Summerwood plat map on its Documents page. Your closing packet or the association can confirm whether your address is a member lot. If it is not, this page is not your rule set.",
    },
    {
      title: "Design to the published ACC fence standard",
      body: "The ACC General Guidelines (Rev 11.11.24) allow cedar, vertical fencing up to 6 feet, protected with a semi-transparent stain and sealer. They list chain link, wrought iron, plastic, split rail, stone, and painted cedar as not acceptable. MyFence designs to that published standard. Anything the guidelines do not cover, ask the ACC before you order materials.",
    },
    {
      title: "Submit the Architectural Review Request Form",
      body: "The ACC page says the Review Request Form is mandatory for new and replacement fences, with no fee for submittal or ACC review. The form (Rev 05.09.24) asks you to describe Major Landscaping, Hardscaping and Fences and to allow at least 14 days for ACC review and Board final action. Incomplete packets are returned without review. MyFence prepares the drawings, materials, height, and stain details and handles the application for you. We do not approve the fence.",
    },
    {
      title: "Check the City of Sammamish, separate from the association",
      body: "Sammamish's Handout No. 220 shows 6 feet in rear and side yards, 4 feet in front yards, and 3.5 feet in a 15-by-15-foot sight distance triangle. SMC 16.20.200 lists fences not over six feet high among work that does not need a permit, outside critical areas and standard shoreline setbacks. Association approval does not replace the city rules, and a city exemption does not replace the ACC.",
    },
    {
      title: "Build only after written approval",
      body: "We schedule installation after the association's written approval and the city limits for your lot are settled. If the ACC asks for a change, we revise the drawing before posts go in.",
    },
  ],
  reviewHeading: "What the Livingston ACC guidelines ask for",
  reviewIntro:
    "From the association's published ACC General Guidelines and related pages. Anything not listed here, check with the association's Architectural Control Committee.",
  reviewBullets: [
    "Cedar, vertical boards, 6-foot maximum height",
    "Semi-transparent stain and sealer allowed; opaque painted cedar not acceptable",
    "Not acceptable: chain link, wrought iron, plastic, split rail, or stone",
    "Architectural Review Request Form required before new or replacement fences",
    "Allow at least 14 days for ACC review and Board final action",
    "City of Sammamish height and permit rules apply separately",
  ],
  reviewFooterBeforeLink:
    "For Sammamish rates, process, and install timing outside this association, see the",
  reviewFooterLinkLabel: "Livingston fence installation page",
  helpHeading: "How MyFence helps Livingston homeowners",
  helpCards: [
    {
      icon: "clipboard",
      title: "We handle the HOA application",
      body: "We prepare the Review Request Form package — site plan, cedar specs, height, and stain details — and handle the application for you. The ACC and Board decide.",
    },
    {
      icon: "file",
      title: "Designed to the published rules",
      body: "We design vertical cedar to the 6-foot maximum and a semi-transparent stain, and we do not propose plastic, chain link, wrought iron, split rail, stone, or opaque paint.",
    },
    {
      icon: "shield",
      title: "Build after approval",
      body: "We schedule installation only after written association approval, so you avoid rework on a Buchan streetscape the ACC is charged with protecting.",
    },
  ],
  leadFenceStyleName: "Livingston HOA fence",
  faqHeading: "Livingston HOA fencing FAQs",
  faqs: [
    {
      q: "What fence does the Livingston HOA allow?",
      a: "The ACC General Guidelines (Rev 11.11.24) list acceptable fences as cedar, vertical, 6-foot maximum height, which may be protected with a semi-transparent stain and sealer. Not acceptable: chain link, wrought iron, plastic, split rail, stone, or painted cedar. Confirm any detail the guidelines do not cover with the ACC.",
    },
    {
      q: "Do I need ACC approval for a new or replacement fence in Livingston?",
      a: "Yes. The association's ACC page says completing the Architectural Review Request Form is mandatory for exterior changes, including fences (new and/or replacement). There is no fee for submittal or ACC review. The form asks you to allow at least 14 days for ACC review and Board final action.",
    },
    {
      q: "Can I paint my Livingston fence?",
      a: "No opaque house paint. The ACC General Guidelines say painted cedar fences are not acceptable. The Exterior Paint Colors page says cedar fences may be protected with exterior penetrating semi-transparent stain and shows a pre-approved product. Confirm the current product when you submit.",
    },
    {
      q: "Does MyFence handle the Livingston ACC application?",
      a: "Yes. MyFence prepares and handles the Architectural Review Request Form for the homeowner, with a site plan and the cedar, height, and stain specs, and builds after written approval. The ACC and Board make the decision. MyFence is not affiliated with the association.",
    },
    {
      q: "Do I also need a City of Sammamish permit?",
      a: "They are separate. Sammamish's code lists fences not over six feet high as exempt from a permit outside critical areas and shoreline setbacks, and the city's handout shows 6 feet in rear and side yards and 4 feet in front yards. The association still requires its own approval. Confirm both before building.",
    },
  ],
  schemaFaqs: [
    {
      question: "What fence does the Livingston HOA allow?",
      answer:
        "The ACC General Guidelines list acceptable fences as cedar, vertical, 6-foot maximum height with a semi-transparent stain. Chain link, wrought iron, plastic, split rail, stone, and painted cedar are not acceptable. Confirm uncovered details with the ACC.",
    },
    {
      question: "Do I need ACC approval for a fence in Livingston?",
      answer:
        "Yes. The association says the Architectural Review Request Form is mandatory for new and replacement fences, with no fee, and asks owners to allow at least 14 days for ACC review and Board final action.",
    },
    {
      question: "Can I paint a Livingston fence?",
      answer:
        "No. Painted cedar fences are not acceptable under the ACC General Guidelines. Cedar fences may use exterior penetrating semi-transparent stain. Confirm the current pre-approved product with the ACC.",
    },
    {
      question: "Does MyFence handle the Livingston ACC application?",
      answer:
        "Yes. MyFence prepares and handles the Architectural Review Request Form for the homeowner and builds after written approval. The ACC and Board decide. MyFence is not affiliated with the association.",
    },
    {
      question: "Do I need a Sammamish permit and HOA approval in Livingston?",
      answer:
        "They are separate. Sammamish lists fences not over six feet as exempt from a permit outside critical areas and shoreline setbacks, with published height limits by yard. The association still requires ACC approval. Confirm both before building.",
    },
  ],
  ctaHeading: "Ready to plan a Livingston fence?",
  ctaBody:
    "Call or request a quote. We will walk the lot, prepare the ACC Review Request Form package, and schedule installation only after you have written association approval and the City of Sammamish limits are settled. Free quotes. (253) 455-1885.",
};
