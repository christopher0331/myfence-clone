import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

const PARENT_URL = "https://myfence.com/service-areas/bellevue/eastgate";

const CCR_PAGE = "https://horizoncrest.org/covenants";
const DIV2 =
  "https://horizoncrest.org/wp-content/uploads/2019/02/ccrs-eaglesmere-division-2.pdf";
const DIV3 =
  "https://horizoncrest.org/wp-content/uploads/2019/02/ccrs-eaglesmere-division-3.pdf";
const DIV4 =
  "https://horizoncrest.org/wp-content/uploads/2019/02/ccrs-eaglesmere-division-4.pdf";
const DIV5 =
  "https://horizoncrest.org/wp-content/uploads/2019/02/ccrs-eaglesmere-division-5.pdf";

export const horizonCrestHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/bellevue/eastgate",
  parentLinkLabel: "Back to Eastgate fence installation",
  parentCrumbName: "Eastgate, Bellevue",
  hubHref: "/service-areas/bellevue",
  hubLinkLabel: "Bellevue fence installation",
  metaTitle:
    "Horizon Crest HOA Approved Fencing | Eastgate CC&Rs | Bellevue | MyFence.com",
  metaDescription:
    "Horizon Crest Community Association fencing in Eastgate, Bellevue. Eaglesmere CC&R setbacks, height notes, and City of Bellevue fence rules. MyFence.com is not the association. Free quotes. (253) 455-1885.",
  locationLabel: "Horizon Crest Community Association · Eastgate, Bellevue WA",
  h1: "Horizon Crest HOA Approved Fencing",
  heroIntro:
    "Horizon Crest publishes the recorded Eaglesmere CC&Rs for Divisions 2 through 5. Those documents limit how close a fence may sit to the street, and Divisions 2, 3, and 4 also cap height. The association site says the architectural committee named in the CC&Rs no longer exists, and that the covenants still apply. We prepare a drawing a homeowner can take to the board or the Code and Covenant Advisory Committee. We do not approve the fence.",
  disclaimer:
    "MyFence.com is not affiliated with Horizon Crest Community Association, is not an approved vendor, and does not speak for the association or its Code and Covenant Advisory Committee. Rules on this page are summaries of the covenants page, the posted division PDFs, the association bylaws, and City of Bellevue fence pages. Confirm the division that matches your plat before you build.",
  downloadCtaLabel: "Open the CC&Rs",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "file", label: "Recorded Eaglesmere Division CC&Rs on the association site" },
    { icon: "clipboard", label: "Covenants still apply; the named architectural committee does not" },
    { icon: "shield", label: "City of Bellevue fence rules are a separate step" },
  ],
  formsHeading: "Recorded Horizon Crest CC&Rs",
  formsIntro:
    "The association does not post a fence application form. Read the covenants page, then the PDF for your Eaglesmere division. Covenant questions go to the Code and Covenant Advisory Committee at",
  formsSubmitEmail: "codeandcovenantadvisory@horizoncrest.org",
  officialLinksHeading: "Association and City of Bellevue links",
  officialLinks: [
    {
      label: "Horizon Crest Community Association",
      href: "https://horizoncrest.org/",
      note: "Association website",
    },
    {
      label: "Codes, Covenants and Restrictions",
      href: CCR_PAGE,
      note: "States that the CC&Rs apply whether or not you have joined the association, and that the architectural committee no longer exists",
    },
    {
      label: "HCCA Bylaws",
      href: "https://horizoncrest.org/bylaws",
      note: "Describes the Code and Covenant Advisory Committee",
    },
    {
      label: "City of Bellevue neighborhood associations",
      href: "https://bellevuewa.gov/city-government/departments/community-development/neighborhoods/neighborhood-associations",
      note: "Lists Horizon Crest Community Association under Eastgate",
    },
    {
      label: "City of Bellevue: Fences",
      href: "https://bellevuewa.gov/city-government/departments/development/zoning-and-land-use/zoning-requirements/fences",
      note: "Residential fence height and when a permit is required",
    },
  ],
  forms: [
    {
      href: DIV2,
      title: "Eaglesmere Division 2 CC&Rs",
      timing: "Recording numbers 7610080276 and 7710180079",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "The PDF linked from the covenants page. The fence paragraph keeps a fence behind the residence setback line, caps height at 6 feet where a fence is allowed, and limits side-street side yards to 42 inches. A later section requires written architectural-committee approval before a fence is built.",
    },
    {
      href: DIV3,
      title: "Eaglesmere Division 3 CC&Rs",
      timing: "Recording number 7512080659",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "The fence paragraph matches Division 2 on the street setback, the 6-foot cap, and the 42-inch side-street side yard. Architectural control is its own section and also covers fences.",
    },
    {
      href: DIV4,
      title: "Eaglesmere Division 4 CC&Rs",
      timing: "Recording number 7708290320",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "Same published fence limits as Divisions 2 and 3: no fence nearer to a street than the residence setback line, 6-foot maximum where a fence is allowed, and 42 inches on a side yard that abuts a side street. The architectural-control section includes exterior color as well as fences.",
    },
    {
      href: DIV5,
      title: "Eaglesmere Division 5 CC&Rs",
      timing: "Recording number 7809130350",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "The posted fence sentence says no fence, wall, or hedge nearer to any street than the building setback line, with a retaining-wall exception. It does not repeat the 6-foot or 42-inch sentences used in Divisions 2, 3, and 4. Later sections name an architectural committee and say required approvals are in writing. Read this PDF if your plat is Division 5.",
    },
  ],
  processHeading: "Approval and permit process",
  steps: [
    {
      title: "Match the lot to an Eaglesmere division",
      body: "The covenants page says the CC&Rs differ by Eaglesmere division and apply to every Horizon Crest home, whether or not the owner has joined the association. Divisions 2, 3, and 4 say no fence, wall, hedge, or mass planting other than foundation planting may extend nearer to any street than the minimum setback line of the residence. Where a fence is allowed, those three divisions cap it at 6 feet above ground. Fences in side yards that abut a side street may run from the front-yard setback to the rear of the lot and may not exceed 42 inches, and that 42-inch height must be kept in the front-yard setback of the lot behind. A necessary retaining wall may rise no more than 2 feet above the finished grade at the back of the wall. Division 5's posted fence sentence states the street setback and the same retaining-wall limit. It does not restate the 6-foot or 42-inch rules. Use the PDF for your division, not a neighbor's.",
    },
    {
      title: "Check City of Bellevue, separate from the covenants",
      body: "Bellevue's residential fence page says a fence in a required front-yard setback may not exceed 4 feet, 6 inches, except in listed cases a land-use planner can confirm. Fences outside that front-yard setback may be taller. You do not need a building permit unless the fence exceeds 8 feet, sits in a critical area or critical-area buffer, or is built of concrete blocks or similar material. Height is measured from finished grade on the exterior side. A fence on a berm or wall is measured as the combined height, and a fence on a slope has to follow or step with the slope. Sight distance at intersections and driveways is in Bellevue City Code 14.60.240 and 14.60.241. Critical areas are in Land Use Code 20.25H. The city phone on that page is 425-452-4188, and the land-use email is landusereview@bellevuewa.gov. A fence the city would allow can still violate the CC&Rs. Meet the stricter limit that applies to the lot.",
    },
    {
      title: "Ask the association before you treat approval as settled",
      body: "Divisions 2, 3, and 4 say no fence may be started until plans and specifications have been approved in writing by an architectural committee, as to harmony, design, and location. The same sections say that if the committee does not approve or disapprove within 30 days, approval is not required. The covenants page states that the Architectural Control Committee or Architecture Committee named in the CC&Rs no longer exists, and that the CC&R requirements still apply. The bylaws create a Code and Covenant Advisory Committee to interpret the Eaglesmere CC&Rs and City of Bellevue land-use codes. Those bylaws also say the committee is not authorized to enforce a code or require an owner to act. There is no public fence form and no published list of approved products. Email codeandcovenantadvisory@horizoncrest.org, and contact the board at board@horizoncrest.org, before you build. Do not assume a 30-day silence replaces a committee that the association says is gone.",
    },
    {
      title: "Build only after the lot's rules are confirmed",
      body: "We measure the line and draw height, the street setback, and a side-street run when the lot has one. Installation waits until you have checked the division PDF and the city's fence page, and you have written direction from the advisory committee or the board if your question is not answered in those documents. MyFence.com does not approve the fence and does not file as the association.",
    },
  ],
  reviewHeading: "Styles that usually fit, and the rules that actually govern",
  reviewIntro:
    "Cedar privacy, horizontal cedar, hogwire in a cedar frame, and hybrid aluminum-and-cedar are styles we commonly build on Eastside lots. That is general design advice, not an association approval. Horizon Crest has not published a list of approved fence products, colors, or brands. Divisions 2, 3, and 4 say a fence must be well constructed of suitable materials, artistic in design, and must not detract from the house or the neighboring houses. They do not name a material. A cedar or hybrid fence kept behind the residence setback line, at or under 6 feet on a Division 2, 3, or 4 lot, and at or under 42 inches where a side yard faces a side street, is a layout that can be drawn to those sentences. Division 5 still has to be read on its own. Submit the drawing and ask the advisory committee or the board before posts go in.",
  reviewBullets: [
    "No fence nearer to a street than the residence setback line (Divisions 2, 3, 4, and 5)",
    "Maximum 6 feet where a fence is allowed (Divisions 2, 3, and 4; not restated in Division 5's fence sentence)",
    "Side-street side yards no taller than 42 inches (Divisions 2, 3, and 4)",
    "Retaining wall, where allowed, no more than 2 feet above the finished grade at the back of the wall",
    "Written architectural approval is in the recorded CC&Rs; the association site says that committee no longer exists",
  ],
  reviewFooterBeforeLink:
    "For Eastgate lot types, styles, and install timing outside this covenant packet, see the",
  reviewFooterLinkLabel: "Eastgate fence installation page",
  helpHeading: "How MyFence.com helps Horizon Crest homeowners",
  helpCards: [
    {
      icon: "clipboard",
      title: "A drawing, not an approval",
      body: "We measure the line and prepare a sketch with height and setbacks. The association and the City of Bellevue decide what is allowed. We are not an approved vendor.",
    },
    {
      icon: "mapPin",
      title: "Division first",
      body: "A Division 5 lot does not use the same fence paragraph as Divisions 2, 3, and 4. We ask which plat you are in before we treat 6 feet or 42 inches as your rule.",
    },
    {
      icon: "file",
      title: "City and covenants, both",
      body: "Bellevue's permit page and the Eaglesmere CC&Rs are different documents. Clearing one does not clear the other.",
    },
  ],
  leadFenceStyleName: "Horizon Crest HOA fence",
  faqHeading: "Horizon Crest HOA fencing FAQs",
  faqs: [
    {
      q: "Is MyFence.com part of Horizon Crest?",
      a: "No. MyFence.com is not affiliated with Horizon Crest Community Association and is not an approved vendor. We build fences for homeowners. We do not approve designs for the association.",
    },
    {
      q: "What fence rules do the CC&Rs publish?",
      a: "On the covenants page, Divisions 2, 3, and 4 keep a fence behind the minimum setback line of the residence, cap an allowed fence at 6 feet, and limit side-street side yards to 42 inches. Division 5's fence sentence states the street setback and a 2-foot retaining-wall limit, and it does not repeat the 6-foot or 42-inch rules. The covenants page says these documents apply even if you have not joined the association. Read the PDF for your division.",
    },
    {
      q: "Does the architectural committee still approve fences?",
      a: "The covenants page says the Architectural Control Committee or Architecture Committee named in the CC&Rs no longer exists, and that the CC&R requirements still apply. The recorded text still calls for written approval before a fence in Divisions 2, 3, and 4, and it includes a 30-day clause if that committee does not answer. The bylaws assign interpretation to the Code and Covenant Advisory Committee and say that committee cannot enforce a rule or require an owner to act. Write codeandcovenantadvisory@horizoncrest.org and the board at board@horizoncrest.org. Do not treat silence as a current approval process.",
    },
    {
      q: "Do I need a City of Bellevue permit and covenant review?",
      a: "They are separate. Bellevue's fence page says a residential fence does not need a building permit unless it is over 8 feet, in a critical area or buffer, or built of concrete blocks or similar material. Front-yard setback fences are generally limited to 4 feet, 6 inches. The CC&Rs can be stricter, including the rule against a fence closer to the street than the house setback line. Satisfy both. Call Development Services at 425-452-4188 if the lot has a critical area, a corner, or a height you are unsure about.",
    },
    {
      q: "What styles usually work with these rules?",
      a: "Cedar privacy, horizontal cedar, hogwire in a cedar frame, and hybrid aluminum-and-cedar are general options we build. The CC&Rs do not name those products. On a Division 2, 3, or 4 lot, a design that stays behind the residence setback, at or under 6 feet, and at or under 42 inches on a side-street side yard is the layout that lines up with the published sentences. Confirm the division, then ask the advisory committee or the board before you build.",
    },
  ],
  schemaFaqs: [
    {
      question: "Is MyFence.com part of Horizon Crest?",
      answer:
        "No. MyFence.com is not affiliated with Horizon Crest Community Association and is not an approved vendor. The association decides how the CC&Rs apply. MyFence.com builds fences for homeowners.",
    },
    {
      question: "What fence rules do the Horizon Crest CC&Rs publish?",
      answer:
        "Eaglesmere Divisions 2, 3, and 4, as posted on horizoncrest.org, prohibit a fence nearer to a street than the residence setback line, cap allowed fences at 6 feet, and limit side-street side yards to 42 inches. Division 5's posted fence sentence states the street setback and a retaining-wall limit and does not repeat the 6-foot or 42-inch rules.",
    },
    {
      question: "Does Horizon Crest still have an architectural committee for fences?",
      answer:
        "The association's covenants page says the architectural committee named in the CC&Rs no longer exists and that the covenants still apply. Questions go to the Code and Covenant Advisory Committee at codeandcovenantadvisory@horizoncrest.org. The bylaws say that committee interprets codes and is not authorized to enforce them.",
    },
    {
      question: "Do I need a Bellevue fence permit in Horizon Crest?",
      answer:
        "City of Bellevue's fence page says a residential fence does not need a building permit unless it exceeds 8 feet, is in a critical area or buffer, or is concrete block or similar. Covenant limits still apply even when the city does not require a permit.",
    },
    {
      question: "What fence styles usually fit Horizon Crest covenants?",
      answer:
        "Cedar privacy, horizontal cedar, hogwire, and hybrid aluminum-and-cedar are general design options, not association-approved products. Horizon Crest has not published a list of approved fence materials. Homeowners should confirm the Eaglesmere division and ask the Code and Covenant Advisory Committee or the board.",
    },
  ],
  ctaHeading: "Ready to plan a Horizon Crest fence?",
  ctaBody:
    "Open the division CC&Rs and Bellevue's fence page, or ask us to measure the lot and prepare a sketch you can send to the advisory committee or the board. Free quotes in Eastgate. We schedule installation after you have confirmed the rules that apply to your plat.",
};
