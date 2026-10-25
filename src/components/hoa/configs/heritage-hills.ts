import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

const PARENT_URL = "https://myfence.com/service-areas/sammamish/heritage-hills";

const HHHOA_SITE = "https://www.hhhoa.org/";
const HHHOA_GUIDELINES =
  "https://heritagehills.communitysite.com/p/Summary-Guidelines";
const HHHOA_ACTIVITIES =
  "https://heritagehills.communitysite.com/p/Guidelines-for-Common-Activities";
const CITY_FENCE_HANDOUT =
  "https://www.sammamish.us/media/jqrdsnjd/220-handout-fencing.pdf";
const CITY_EXEMPT_CODE = "https://sammamish.municipal.codes/SMC/16.20.200";

export const heritageHillsHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/sammamish/heritage-hills",
  parentLinkLabel: "Back to Heritage Hills fence installation",
  parentCrumbName: "Heritage Hills, Sammamish",
  hubHref: "/service-areas/sammamish",
  hubLinkLabel: "Sammamish fence installation",
  metaTitle:
    "Heritage Hills HOA Fencing | Architectural Chair Approval | Sammamish | MyFence.com",
  metaDescription:
    "Heritage Hills HOA fencing in Sammamish: the association's published approval requirement, City of Sammamish fence limits, and what to ask the Architectural Chair. MyFence is not the HOA. (253) 455-1885.",
  locationLabel: "Heritage Hills Home Owners Association · Sammamish, WA",
  h1: "Heritage Hills HOA Fencing",
  heroIntro:
    "The Heritage Hills Home Owners Association's published summary guidelines say no fence or wall may be erected, placed, or altered on a lot until plans showing its nature, kind, shape, height, material, color, and location are approved by the Architectural Chair, that existing fences, hedges, and walls cannot be altered without prior approval, and they ask owners to contact the Architectural Chair at least 2 weeks before starting. We did not find a public list of approved fence heights, styles, or colors, so ask the association before you design to a guess. We prepare a sketch you can take to that review. The association decides.",
  disclaimer:
    "MyFence is not affiliated with the Heritage Hills Home Owners Association, is not an approved vendor, and does not speak for the association or its Architectural Chair. Association facts on this page come from the association's own published pages, linked below. City facts come from the City of Sammamish's fence handout and municipal code. The association's older website has a fences guidelines page that displays only a notice that it requires an upgraded plan, so we have no association fence height, style, or color rules to report. Confirm the current process and any fence guidelines with the association before you build.",
  downloadCtaLabel: "Open association and city links",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "clipboard", label: "Architectural Chair approval before a fence goes up" },
    { icon: "file", label: "No public fence height or style list found — ask the association" },
    { icon: "shield", label: "City of Sammamish rules are a separate step" },
  ],
  formsHeading: "Association and city fence resources",
  formsIntro:
    "We did not find a public Heritage Hills fence application to host here. The links below are the association's own pages and the City of Sammamish's fence rules. Follow the association's current request process, and use the city links to draw your fence to Sammamish's limits.",
  officialLinksHeading: "Association and city links",
  officialLinks: [
    {
      label: "Heritage Hills HOA official website",
      href: HHHOA_SITE,
      note: "The association's own website, which its Summary Guidelines point owners to for the CC&Rs and further guidelines and FAQs. We could not load its content when we checked, so use it to confirm the current process",
    },
    {
      label: "Heritage Hills HOA Summary Guidelines",
      href: HHHOA_GUIDELINES,
      note: "States that fences and walls need plans approved by the Architectural Chair before they are erected or altered, that alterations to existing fences, hedges, and walls need prior approval, and that owners should contact the Architectural Chair at least 2 weeks before starting",
    },
    {
      label: "Heritage Hills HOA common-area and community guidelines",
      href: HHHOA_ACTIVITIES,
      note: "Notes that Heritage Hills is part of the City of Sammamish, that sidewalks at most houses are maintained by owners, and that 25th Way and 28th Place carry a large volume of traffic",
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
      href: HHHOA_GUIDELINES,
      title: "Heritage Hills HOA Summary Guidelines",
      timing: "Before you design",
      source: "Official association",
      ctaLabel: "Open association page",
      blurb:
        "The association's own summary of the rules its Architectural Chair enforces, including approval of fence plans, prior approval to alter existing fences, hedges, and walls, and the 2-week lead time. Read it first, then confirm the current process with the association.",
    },
    {
      href: CITY_FENCE_HANDOUT,
      title: "City of Sammamish Residential Fences handout",
      timing: "Zoning handout",
      source: "City of Sammamish",
      ctaLabel: "Open city PDF",
      blurb:
        "The city's one-page summary: 6 feet in rear and side yards, 4 feet in front yards, 3.5 feet in sight distance triangles, and a limited height exception that needs a recorded neighbor agreement. The city says handouts are illustrative and the municipal code controls.",
    },
    {
      href: CITY_EXEMPT_CODE,
      title: "Work exempt from permit (SMC 16.20.200)",
      timing: "Building permit",
      source: "City of Sammamish",
      ctaLabel: "Open city code",
      blurb:
        "The code lists fences not over six feet high among work that does not need a permit. The exemption does not apply within critical areas or standard shoreline setbacks, and it does not authorize work that violates other rules.",
    },
  ],
  processHeading: "Approval and permit process",
  steps: [
    {
      title: "Confirm your lot is in the association",
      body: "The association's community guidelines describe Heritage Hills as part of the City of Sammamish. Your closing documents or the association can confirm whether your address is a member lot. If it is not, this page is not your rule set.",
    },
    {
      title: "Request approval from the Architectural Chair",
      body: "The association's summary guidelines say no building, structure, fence, wall, or other improvement may be erected, placed, or altered until the plans, specifications, and Plot Plan showing the nature, kind, shape, height, material, color, and location have been submitted to and approved by the Architectural Chair. They also say no alterations to existing fences, hedges, or walls may be made without prior approval, and they ask owners to contact the Architectural Chair at least 2 weeks before starting. We did not find public fence height, style, or color rules. Ask the association what it expects, and wait for the answer in writing. MyFence can measure the line and draw the fence you want to submit. We do not approve the fence.",
    },
    {
      title: "Check the City of Sammamish, separate from the association",
      body: "Sammamish's Handout No. 220 shows 6 feet in rear and side yards, 4 feet in front yards, and 3.5 feet in a 15-by-15-foot sight distance triangle. A lot with more than one front yard, such as a corner lot, may have a six-foot fence in the front setback along street frontage that does not provide access to the property, outside the sight distance triangle. The handout also describes a request, through a Type I construction permit application, for a fence up to eight feet tall and no longer than 32 feet along a shared side or rear line, which needs an agreement with the adjoining owner recorded with King County before permit issuance. Sammamish Municipal Code 16.20.200 lists fences not over six feet high among work that does not need a permit, and says the exemption does not apply in critical areas or standard shoreline setbacks. The handout says it is illustrative and the municipal code governs, so confirm your lot with the city. Association approval does not replace the city rules, and a city exemption does not replace the association.",
    },
    {
      title: "Build only after both answers are in hand",
      body: "We install to the layout the association approved and to the city limits that apply to each run: the lower front yard, the taller side and rear lines where allowed, and any gate placed to keep sight lines clear. If the Architectural Chair asks for a change, we revise the drawing before posts go in. MyFence does not file as the association and does not pull a permit the city does not require.",
    },
  ],
  reviewHeading: "Styles that usually fit, and the rules that actually govern",
  reviewIntro:
    "Cedar privacy with a picture-frame border, hogwire in a cedar frame, and hybrid aluminum-and-cedar are styles we commonly build on Eastside lots, and they usually fit HOA reviews in general because both faces can be finished clean and the height can be held to a published city limit. That is general design advice. The Heritage Hills association has not told us which products, colors, or heights it prefers. Submit your material, color, and height to the Architectural Chair and wait for the answer.",
  reviewBullets: [
    "Association: prior approval of plans by the Architectural Chair before a fence is erected or altered, per its summary guidelines",
    "Association: contact the Architectural Chair at least 2 weeks before starting",
    "No public Heritage Hills fence height, color, or material rule was found — ask the association before building",
    "City of Sammamish: 6 feet in rear and side yards, 4 feet in front yards, 3.5 feet in a sight distance triangle",
    "City of Sammamish: fences not over six feet high are listed as exempt from a permit outside critical areas. MyFence is not an approved vendor",
  ],
  reviewFooterBeforeLink:
    "For Sammamish rates, process, and install timing outside this association, see the",
  reviewFooterLinkLabel: "Heritage Hills fence installation page",
  helpHeading: "How MyFence helps Heritage Hills homeowners",
  helpCards: [
    {
      icon: "clipboard",
      title: "A drawing, not an approval",
      body: "We measure your lot and prepare a sketch with the shape, height, material, color, and location the association asks for. The Architectural Chair decides whether it is acceptable. We are not an approved vendor.",
    },
    {
      icon: "mapPin",
      title: "Sidewalks and sight lines",
      body: "The association notes sidewalks at most houses and busy main streets. We mark the property line, the front-yard limit, and the sight distance triangle before we draw a taller side run.",
    },
    {
      icon: "file",
      title: "City and association, both",
      body: "A Sammamish permit exemption is not association approval, and association approval is not a city zoning check. You clear each one that applies.",
    },
  ],
  leadFenceStyleName: "Heritage Hills HOA fence",
  faqHeading: "Heritage Hills HOA fencing FAQs",
  faqs: [
    {
      q: "Is MyFence part of the Heritage Hills HOA?",
      a: "No. MyFence is not affiliated with the Heritage Hills Home Owners Association and is not an approved vendor. We build fences for homeowners. The association decides whether a design is acceptable.",
    },
    {
      q: "Does the Heritage Hills HOA have to approve my fence?",
      a: "The association's published summary guidelines say no fence or wall may be erected, placed, or altered on a lot until plans have been approved by the Architectural Chair, and that existing fences, hedges, and walls cannot be altered without prior approval. Owners are asked to contact the Architectural Chair at least 2 weeks before starting. Confirm the current process with the association before you order materials.",
    },
    {
      q: "What fence height or style does the association allow?",
      a: "We did not find a public height, color, or material rule. The association's older website has a fences guidelines page, but it displays only a notice that it requires an upgraded plan. Ask the Architectural Chair what the association expects, and get the answer in writing before you build.",
    },
    {
      q: "Do I need a City of Sammamish permit and HOA approval?",
      a: "They are separate. Sammamish's municipal code lists fences not over six feet high as exempt from a permit, outside critical areas and standard shoreline setbacks. The city's handout shows 6 feet in rear and side yards, 4 feet in front yards, and 3.5 feet in a sight distance triangle, and describes a Type I construction permit request with a recorded neighbor agreement for a fence up to eight feet along a shared line. The handout is illustrative, so confirm your lot with the city. The association may still require its own approval even when the city does not require a permit.",
    },
    {
      q: "What styles usually work when an HOA has not published a list?",
      a: "Cedar privacy with a picture-frame border, hogwire in a cedar frame, and hybrid aluminum-and-cedar usually fit HOA guidelines in general, because the height can stay within a city limit and both faces can be finished. Heritage Hills has not said those products are approved. Draw them to Sammamish's limits, then submit the sketch to the Architectural Chair.",
    },
  ],
  schemaFaqs: [
    {
      question: "Is MyFence part of the Heritage Hills HOA?",
      answer:
        "No. MyFence is not affiliated with the Heritage Hills Home Owners Association and is not an approved vendor. The association decides whether a fence design is acceptable.",
    },
    {
      question: "Does the Heritage Hills HOA have to approve my fence?",
      answer:
        "The association's published summary guidelines say fences and walls need approval of plans by the Architectural Chair before they are erected or altered, and alterations to existing fences, hedges, and walls need prior approval. Owners are asked to contact the Architectural Chair at least 2 weeks before starting. Confirm the current process with the association.",
    },
    {
      question: "What fence height or style does the Heritage Hills association allow?",
      answer:
        "No public fence height, color, or material rule was found. Homeowners should ask the Architectural Chair and get the answer in writing before building.",
    },
    {
      question: "Do I need a Sammamish permit and HOA approval for a fence in Heritage Hills?",
      answer:
        "They are separate. Sammamish's code lists fences not over six feet high as exempt from a permit outside critical areas and shoreline setbacks, and the city's handout shows 6 feet in rear and side yards and 4 feet in front yards. The association may still require its own approval. Confirm both before building.",
    },
    {
      question: "What fence styles usually fit when an HOA has not published rules?",
      answer:
        "Cedar privacy with a picture-frame border, hogwire in a cedar frame, and hybrid aluminum-and-cedar usually fit HOA guidelines in general. Heritage Hills has not published an approved product list that we found. Homeowners should submit the material, color, and height to the Architectural Chair.",
    },
  ],
  ctaHeading: "Ready to plan a Heritage Hills fence?",
  ctaBody:
    "Call or request a quote. We will walk the lot, draw a sketch you can take to the Architectural Chair, and schedule installation only after you have the association's answer and the City of Sammamish limits are settled. Free quotes. (253) 455-1885.",
};
