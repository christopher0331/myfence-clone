import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

const PARENT_URL = "https://myfence.com/service-areas/kirkland/finn-hill";

const CITY_DECISION =
  "https://permits.kirklandwa.gov/WebDocs/2020121338/c96f0d82-2ed5-4e22-8c01-cf71184cc0bb.pdf";
const HEARING_MINUTES =
  "https://kirkland.granicus.com/MinutesViewer.php?clip_id=4787&view_id=18";
const SOS_SEARCH = "https://ccfs.sos.wa.gov/";
const SOS_COMPILATION = "https://opengovwa.com/corporation/603234404";
const FENCE_PDF =
  "https://www.kirklandwa.gov/files/sharedassets/public/v/1/development-services/fence-requirements.pdf";
const PERMIT_PAGE =
  "https://www.kirklandwa.gov/Government/Departments/Development-Services-Center/Do-you-need-a-permit";
const PREP_GUIDE = "/docs/hoa/overlook-at-finn-hill-fence-planning-checklist.pdf";

export const overlookAtFinnHillHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/kirkland/finn-hill",
  parentLinkLabel: "Back to Finn Hill fence installation",
  parentCrumbName: "Finn Hill, Kirkland",
  hubHref: "/service-areas/kirkland",
  hubLinkLabel: "Kirkland fence installation",
  metaTitle:
    "Overlook at Finn Hill HOA Fencing | NE 117th Street | Kirkland | MyFence.com",
  metaDescription:
    "Overlook at Finn Hill fencing for the four-house association on NE 117th Street, Kirkland. No published fence rules found; City of Kirkland permit notes included. MyFence.com is not the HOA. Free quotes. (253) 455-1885.",
  locationLabel:
    "The Overlook at Finn Hill Homeowners Association · NE 117th Street, Kirkland WA",
  h1: "Overlook at Finn Hill HOA Fencing",
  heroIntro:
    "Overlook at Finn Hill is a four-house homeowners association on NE 117th Street in Kirkland, immediately west of 8230 NE 117th Street. Kirkland's short-plat file and a 2023 hearing record confirm the association. Those records do not publish fence height, color, or material rules, and we did not find an architectural application. Ask the association's architectural review committee before you build. We prepare a sketch you can take to that conversation. The association decides.",
  disclaimer:
    "MyFence.com is not affiliated with The Overlook at Finn Hill Homeowners Association, is not an approved vendor, and does not speak for the association or any architectural review committee. Facts on this page come from the City of Kirkland short-plat record, the June 14, 2023 hearing minutes, public compilations of Washington Secretary of State filings, and the city's fence handout. We did not find published CC&Rs or fence guidelines. Confirm the current review process with the association, and confirm the live corporation record, before you build.",
  downloadCtaLabel: "Open city and prep docs",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "file", label: "Four-house HOA confirmed in the Kirkland short-plat file" },
    { icon: "clipboard", label: "No published fence rules — ask the ARC before building" },
    { icon: "shield", label: "City of Kirkland permit rules are a separate step" },
  ],
  formsHeading: "Records and city fence documents",
  formsIntro:
    "Overlook at Finn Hill does not publish a fence form on a public website we could find. The links below are the city file that identifies the association, the hearing minutes, the Secretary of State search, Kirkland's fence handout, and a MyFence.com prep checklist. The checklist is our worksheet, not an association approval.",
  officialLinksHeading: "City, hearing, and corporation links",
  officialLinks: [
    {
      label: "Kirkland Notice of Decision, Finn Hill 8 Short Plat",
      href: CITY_DECISION,
      note: "File SUB22-00036 at 8230 NE 117th Street. Includes the April 29, 2022 comment letter describing the four-house HOA",
    },
    {
      label: "Kirkland Hearing Examiner minutes, June 14, 2023",
      href: HEARING_MINUTES,
      note: "Lists Overlook at Finn Hill HOA as an appellant on SUB22-00036",
    },
    {
      label: "Washington Corporations and Charities Filing System",
      href: SOS_SEARCH,
      note: "Search UBI 603234404 for the live nonprofit record",
    },
    {
      label: "Public compilation of SOS filings, UBI 603234404",
      href: SOS_COMPILATION,
      note: "Reprint of Secretary of State data: nonprofit formed August 30, 2012, principal office 8220 NE 117th Street, Kirkland. Re-check the live filing",
    },
    {
      label: "City of Kirkland: Do you need a permit?",
      href: PERMIT_PAGE,
      note: "Fences 6 feet or less are listed among projects that generally do not need a building permit",
    },
    {
      label: "Kirkland Fence Requirements (PDF)",
      href: FENCE_PDF,
      note: "Front-yard, side-yard, arterial, and sight-triangle limits",
    },
  ],
  forms: [
    {
      href: PREP_GUIDE,
      title: "Overlook at Finn Hill fence planning checklist",
      timing: "Prep guide",
      source: "MyFence prep guide",
      ctaLabel: "Open prep PDF",
      blurb:
        "Our one-page worksheet: what the city file says about the four houses, the questions to take to the architectural review committee, and the Kirkland height limits to draw against. It is not an association form and it does not approve a fence.",
    },
    {
      href: FENCE_PDF,
      title: "City of Kirkland Fence Requirements",
      timing: "Zoning handout",
      source: "City of Kirkland",
      ctaLabel: "Open city PDF",
      blurb:
        "The Planning handout. A fence over 6 feet needs a building permit. Front yards on neighborhood-access and collector streets are limited to 3.5 feet. Side and rear fences in required yards are limited to 6 feet. Sight triangles and shoreline setbacks are in the same sheet.",
    },
    {
      href: PERMIT_PAGE,
      title: "Do you need a permit?",
      timing: "Building permit",
      source: "City of Kirkland",
      ctaLabel: "Open city page",
      blurb:
        "Kirkland lists fences 6 feet or less among common projects that do not need a building permit. The same page says the exemption does not authorize a code violation, and it does not apply in flood, wetland, steep-slope, shoreline, or other critical areas. Call Planning at 425-587-3600 if the lot is unclear.",
    },
  ],
  processHeading: "Approval and permit process",
  steps: [
    {
      title: "Confirm the lot is in this association",
      body: "The April 29, 2022 comment letter in Kirkland's notice of decision for Finn Hill 8 Short Plat (File No. SUB22-00036) describes The Overlook at Finn Hill Homeowners Association as a four-house HOA at 8210, 8216, 8220, and 8226 NE 117th Street, immediately west of 8230 NE 117th Street. The June 14, 2023 hearing examiner minutes list the association as an appellant on that short plat, and a sworn member described a four-home HOA bordering the property. Public compilations of Secretary of State filings list UBI 603234404, formed August 30, 2012, with a principal office at 8220 NE 117th Street. If your address is not one of those four houses, this page is not your rule set. Search the live corporation record at the Corporations and Charities Filing System before you rely on officers or status.",
    },
    {
      title: "Ask the architectural review committee before you design to a guess",
      body: "We did not find a public website, recorded fence guideline, color chart, or architectural application for Overlook at Finn Hill. The short-plat comment letter and the hearing minutes do not state a fence height, material, or setback. That absence is not permission to build. Ask the association's architectural review committee — or the board, if the board is who reviews exterior work — what the current process is, and wait for that answer in writing. Do not treat a neighbor's existing fence, or a verbal comment, as the standard. MyFence.com can measure the line and draw the height and material you want to submit. We do not approve the fence.",
    },
    {
      title: "Check the City of Kirkland, separate from the association",
      body: "Kirkland's permit page, citing the municipal code exemption list, says fences 6 feet or less generally do not need a building permit. The page also says exemptions do not authorize work that violates the code, and they do not apply in flood-hazard, wetland, steep-slope, shoreline, or other critical areas. Use the parcel report tool the page names if you are unsure. The Fence Requirements handout says any fence over 6 feet needs a building permit. On a neighborhood-access or collector street, a front-yard fence may not exceed 3.5 feet; on a corner lot with two required front yards, that limit applies in the front yard next to the front facade. A detached house may not have a fence over 3.5 feet within 3 feet of a property line on a principal or minor arterial unless the arterial has an improved landscape strip, and that strip is planted and maintained by the owner. Side and rear fences, including those inside required side and rear yards, may be no higher than 6 feet. A fence and a retaining wall within 5 feet of each other in a required yard are limited to 6 feet combined unless Planning approves a modification under KZC 115.115.3.g.2. Fences over 3 feet may not sit in a sight triangle at a street or driveway. Shoreline lots may not place a fence in a required high-waterline setback. Staff notes in the SUB22-00036 decision describe the rights-of-way next to 8230 NE 117th Street, including NE 117th Street, as neighborhood-access streets, so the 3.5-foot front-yard limit is the city rule to draw against on that frontage. Call Planning at 425-587-3600. Association approval, if the association requires it, does not replace the city rules, and a city exemption does not replace the association.",
    },
    {
      title: "Build only after both answers are in hand",
      body: "We install to the layout you confirmed with the association and to the city limits that apply to the run: the lower frontage on NE 117th Street, the taller side and rear lines where those are allowed, and any gate the narrow street needs for sight distance. If the committee or the board asks for a change, we revise the drawing before posts go in. MyFence.com does not file as the association and does not pull a permit the city does not require.",
    },
  ],
  reviewHeading: "Styles that usually fit, and the rules that actually govern",
  reviewIntro:
    "Cedar privacy, picture-frame cedar, hogwire in a cedar frame, and hybrid aluminum-and-cedar are styles we commonly build on Eastside lots, and they are the styles that usually fit HOA reviews in general because both faces can be finished clean and the height can be held to a published city cap. That is general design advice. Overlook at Finn Hill has not published a list of approved products, colors, or heights. A six-foot cedar or hybrid fence on a side or rear yard, and a 3.5-foot run in the front yard on this neighborhood-access street, is a layout that can be drawn to Kirkland's handout. It is not an association approval. Submit the material and the height, and wait for the architectural review committee.",
  reviewBullets: [
    "No published Overlook at Finn Hill fence height, color, or material rule was found — ask the ARC before building",
    "City of Kirkland: fences over 6 feet need a building permit; fences 6 feet or less generally do not, outside critical areas",
    "Front yard on a neighborhood-access or collector street: 3.5 feet (Fence Requirements handout). Staff notes call NE 117th Street a neighborhood-access street",
    "Side and rear fences in required yards: 6 feet. Fence plus retaining wall within 5 feet: 6 feet combined unless Planning approves a modification",
    "Sight triangles stay clear above 3 feet. MyFence.com is not an approved vendor",
  ],
  reviewFooterBeforeLink:
    "For Finn Hill slopes, forest edges, and install timing outside this association, see the",
  reviewFooterLinkLabel: "Finn Hill fence installation page",
  helpHeading: "How MyFence.com helps Overlook at Finn Hill homeowners",
  helpCards: [
    {
      icon: "clipboard",
      title: "A drawing, not an approval",
      body: "We measure the four-house street and prepare a sketch with heights and materials. The association decides whether that sketch is acceptable. We are not an approved vendor.",
    },
    {
      icon: "mapPin",
      title: "NE 117th frontage",
      body: "The short-plat staff notes treat this street as neighborhood access. We mark the 3.5-foot front-yard limit and the sight triangle before we draw a taller side run.",
    },
    {
      icon: "file",
      title: "City and association, both",
      body: "A Kirkland permit exemption is not association approval, and a conversation with a neighbor is not a city zoning check. You clear each one that applies.",
    },
  ],
  leadFenceStyleName: "Overlook at Finn Hill HOA fence",
  faqHeading: "Overlook at Finn Hill fencing FAQs",
  faqs: [
    {
      q: "Is MyFence.com part of Overlook at Finn Hill?",
      a: "No. MyFence.com is not affiliated with The Overlook at Finn Hill Homeowners Association and is not an approved vendor. We build fences for homeowners. The association decides whether a design is acceptable.",
    },
    {
      q: "Where is Overlook at Finn Hill?",
      a: "The April 29, 2022 comment letter in Kirkland's notice of decision for Finn Hill 8 Short Plat, File No. SUB22-00036, describes a four-house HOA at 8210, 8216, 8220, and 8226 NE 117th Street, immediately west of 8230 NE 117th Street. The June 14, 2023 hearing examiner minutes list the association as an appellant on that file. Secretary of State compilations list UBI 603234404 with a principal office at 8220 NE 117th Street, Kirkland. The city's project name for the neighboring short plat is Finn Hill.",
    },
    {
      q: "What fence rules does the association publish?",
      a: "None that we found. The short-plat comment letter, the hearing minutes, and the corporation compilations do not state a fence height, color, material, or setback, and we did not find an architectural form. Ask the architectural review committee, or the board if that is who reviews exterior work, and wait for a written answer before you build.",
    },
    {
      q: "Do I need a City of Kirkland permit and association approval?",
      a: "They are separate. Kirkland's permit page says fences 6 feet or less generally do not need a building permit, except in flood, wetland, steep-slope, shoreline, or other critical areas, and a fence over 6 feet does need one. Zoning still applies, including the 3.5-foot front-yard limit on a neighborhood-access street and the 6-foot side and rear limit. The association may still require its own review even when the city does not require a permit. Call Planning at 425-587-3600, and ask the association before posts go in.",
    },
    {
      q: "What styles usually work when an HOA has not published a list?",
      a: "Cedar privacy, picture-frame cedar, and hogwire in a cedar frame are styles that usually fit HOA guidelines in general, because the height can stay within a city cap and both faces can be finished. Overlook at Finn Hill has not said those products are approved. Draw them to Kirkland's 3.5-foot front-yard and 6-foot side-and-rear limits, then submit the sketch to the architectural review committee.",
    },
  ],
  schemaFaqs: [
    {
      question: "Is MyFence.com part of Overlook at Finn Hill?",
      answer:
        "No. MyFence.com is not affiliated with The Overlook at Finn Hill Homeowners Association and is not an approved vendor. The association decides whether a fence design is acceptable.",
    },
    {
      question: "Where is the Overlook at Finn Hill HOA?",
      answer:
        "Kirkland's notice of decision for Finn Hill 8 Short Plat, File No. SUB22-00036, includes a comment letter describing a four-house HOA at 8210, 8216, 8220, and 8226 NE 117th Street, immediately west of 8230 NE 117th Street. Hearing examiner minutes from June 14, 2023 list the association as an appellant. Secretary of State compilations list UBI 603234404 at 8220 NE 117th Street, Kirkland.",
    },
    {
      question: "What fence rules does Overlook at Finn Hill publish?",
      answer:
        "No public fence height, color, material, or setback rule was found in the short-plat file, the hearing minutes, or the corporation record, and no architectural application was found. Homeowners should ask the architectural review committee before building.",
    },
    {
      question: "Do I need a Kirkland permit and HOA approval for a fence on NE 117th Street?",
      answer:
        "They are separate. Kirkland generally does not require a building permit for fences 6 feet or less, except in critical areas, and does require one over 6 feet. Front yards on neighborhood-access streets are limited to 3.5 feet. The association may still require its own review.",
    },
    {
      question: "What fence styles usually fit when an HOA has not published rules?",
      answer:
        "Cedar privacy, picture-frame cedar, and hogwire in a cedar frame usually fit HOA guidelines in general. Overlook at Finn Hill has not published an approved product list. Homeowners should submit the material and height to the architectural review committee.",
    },
  ],
  ctaHeading: "Ready to plan a fence on NE 117th Street?",
  ctaBody:
    "Call or request a quote. We will walk the lot, draw a sketch you can take to the architectural review committee, and schedule installation only after you have that answer and the City of Kirkland limits are settled. Free quotes. (253) 455-1885.",
};
