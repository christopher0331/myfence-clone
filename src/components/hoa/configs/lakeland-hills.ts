import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

const PARENT_URL = "https://myfence.com/service-areas/auburn/lakeland-hills";

const LHHA_STANDARDS =
  "http://auburnlakelandhills.org/sitebuildercontent/sitebuilderfiles/accstandards1-26-26.pdf";
const LHHA_APPLICATION =
  "http://auburnlakelandhills.org/sitebuildercontent/sitebuilderfiles/application_alterations_1.26.26.pdf";
const LHHA_FORMS = "https://auburnlakelandhills.org/id7.html";
const LHHA_CONTACTS = "http://www.auburnlakelandhills.org/id6.html";
const AUBURN_FENCE_CODE = "https://auburn.municipal.codes/ACC/18.31.020";
const AUBURN_PERMIT_FAQ =
  "https://www.auburnwa.gov/city_hall/community_development/f_a_q";

export const lakelandHillsHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/auburn/lakeland-hills",
  parentLinkLabel: "Back to Lakeland Hills fence installation",
  parentCrumbName: "Lakeland Hills, Auburn",
  hubHref: "/service-areas/auburn",
  hubLinkLabel: "Auburn fence installation",
  metaTitle: "Lakeland Hills HOA Fencing Guide | Auburn | MyFence",
  metaDescription:
    "Lakeland Hills HOA fencing in Auburn: the association's published fence guidelines for Divisions 1, 2 and 4A, City of Auburn height and permit rules, and when to ask the ACC. MyFence is not the HOA. (253) 455-1885.",
  locationLabel:
    "Lakeland Hills Homeowners Association (Divisions 1, 2 and 4A) · Auburn, WA",
  h1: "Lakeland Hills HOA Fencing",
  heroIntro:
    "The Lakeland Hills Homeowners Association's Architectural Control Committee (ACC) guidelines for Divisions 1, 2, and 4A, dated January 27, 2026, say fences must follow City of Auburn restrictions and be built of wood, brick, or wrought iron. They prohibit chain-link, chicken wire, and barbed wire of any type, with a limited exception for dog runs and kennels that are not visible from the street. The guidelines also say specific ACC approval of a fence is not required when those conditions are met. Your covenants can add more, so confirm with the ACC before you build. The association decides what it accepts.",
  disclaimer:
    "MyFence is not affiliated with the Lakeland Hills Homeowners Association, is not an approved vendor, and does not speak for the association or its Architectural Control Committee. Association facts on this page come from the association's own published guidelines and forms, linked below. City facts come from the Auburn City Code and the City of Auburn's permit FAQ. The guidelines apply to Divisions 1, 2, and 4A of Lakeland Hills; we did not review the Declaration of Covenants and Restrictions, which the guidelines say still apply, and the more restrictive document controls if the two differ. Confirm the current rules with the association before you build.",
  downloadCtaLabel: "Open association and city links",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "file", label: "Published ACC guidelines: wood, brick or wrought iron" },
    { icon: "clipboard", label: "No chain-link, chicken wire or barbed wire" },
    { icon: "shield", label: "City of Auburn rules are a separate step" },
  ],
  formsHeading: "Association and city fence resources",
  formsIntro:
    "These are the association's own published documents and the City of Auburn's fence rules. We link to them rather than host copies, so you always see the current version. For questions about the guidelines, the association lists an ACC email address on its contacts page.",
  officialLinksHeading: "Association and city links",
  officialLinks: [
    {
      label: "Lakeland Hills HOA Architectural Standards and Guidelines (Divisions 1, 2, 4A)",
      href: LHHA_STANDARDS,
      note: "Dated January 27, 2026. The Fences section lists wood, brick, or wrought iron, prohibits chain-link, chicken wire, and barbed wire, and says specific ACC approval of fences is not required if those conditions are met",
    },
    {
      label: "Lakeland Hills HOA Application for Alterations",
      href: LHHA_APPLICATION,
      note: "The ACC form for improvements and alterations. It asks for a description of the alteration with drawings and materials, and an estimated start and completion date",
    },
    {
      label: "Lakeland Hills HOA Downloads & Forms",
      href: LHHA_FORMS,
      note: "The association's list of policy documents and forms, including Architectural Standards and the Application for Alterations",
    },
    {
      label: "Lakeland Hills HOA contacts",
      href: LHHA_CONTACTS,
      note: "Lists acc@auburnlakelandhills.org for questions about the Architectural Control Committee, and names other homeowners associations within the Lakeland Hills community",
    },
    {
      label: "Auburn City Code 18.31.020, Fences",
      href: AUBURN_FENCE_CODE,
      note: "42 inches in the front setback (72 inches for chain link, wrought iron, or similar see-through material), 72 inches in side, rear, and street-side setbacks, and a building permit for fences over 84 inches",
    },
    {
      label: "City of Auburn Community Development FAQ",
      href: AUBURN_PERMIT_FAQ,
      note: "Points to ACC 18.31.020 and asks owners with a fence over 6 feet to contact the Permit Center with their address or parcel number",
    },
  ],
  forms: [
    {
      href: LHHA_STANDARDS,
      title: "Lakeland Hills HOA ACC guidelines",
      timing: "Before you design",
      source: "Official association",
      ctaLabel: "Open association PDF",
      blurb:
        "The association's published standards for Divisions 1, 2, and 4A, including the Fences section, the general rule that significant construction, alteration, or improvements need ACC approval of submitted plans, and the variance and appeal process. Read it first, then confirm the current version with the association.",
    },
    {
      href: LHHA_APPLICATION,
      title: "Application for Alterations",
      timing: "If your fence needs ACC review",
      source: "Official association",
      ctaLabel: "Open association form",
      blurb:
        "The association's ACC form. The guidelines say an application identifies the nature, kind, shape, height, materials, exterior colors, and location of the improvement. We can give you those details for a fence; the ACC decides.",
    },
    {
      href: AUBURN_FENCE_CODE,
      title: "Auburn City Code 18.31.020, Fences",
      timing: "City zoning rules",
      source: "City of Auburn",
      ctaLabel: "Open city code",
      blurb:
        "Height limits by setback, the sight-distance rule, gate and vehicle-refuge rules, hydrant and utility-easement limits, and the building permit trigger for fences over 84 inches. Check it against your lot, since the code can change.",
    },
  ],
  processHeading: "Approval and permit process",
  steps: [
    {
      title: "Confirm your lot is covered by these guidelines",
      body: "The guidelines we found are titled for Lakeland Hills Divisions 1, 2, and 4A. Lakeland Hills is a large planned community that grew in phases, and the association's contacts page lists other homeowners associations within the Lakeland Hills community, including the Beneficial Homeowners Association and Lakeland Living, so not every address in it is in those divisions. Your closing documents, plat, or the association can confirm your division. If you are in a different division or a separate community association, this page is not your rule set.",
    },
    {
      title: "Check the association's fence guidelines",
      body: "The Fences section says any fence erected shall comply with City of Auburn restrictions and be constructed of wood, brick, or wrought iron, with no chain-link, chicken wire, or barbed wire of any type. It says specific ACC approval of fences is not required if those conditions are met, that certain dog runs or kennels may use chain-link-type material if they are not visible from the street, and that all fencing visible from the street must be maintained with no broken or missing pieces, no mismatched stains or paint, and uniform material. The guidelines also say they supplement the Declaration of Covenants and Restrictions and that the more restrictive document applies if they differ. We have not seen your covenants, so ask the ACC.",
    },
    {
      title: "Ask the ACC if your plan is outside the published list",
      body: "The guidelines say significant construction, alteration, or improvements need plans approved by the Architectural Control Committee through an Application for Alterations that identifies the nature, kind, shape, height, materials, exterior colors, and location. If you want a material the fence section does not list, such as steel hogwire panels or aluminum, or you are not sure a design fits, write to the ACC before you order anything and keep the answer in writing. The guidelines also describe a written variance and appeal process. MyFence can measure the line and draw the fence you want to submit. We do not approve the fence.",
    },
    {
      title: "Check the City of Auburn, separate from the association",
      body: "Auburn City Code 18.31.020 limits fences in required setbacks to 42 inches in the front setback (72 inches for chain link, wrought iron, or similar see-through material) and 72 inches in side, rear, and street-side setbacks. It says no part of a fence may reduce required sight distances, measures a fence on a retaining wall from the base of the wall, and requires a building permit for fences over 84 inches. The City's permit FAQ asks owners with a fence over 6 feet to contact the Permit Center with their address or parcel number. Association rules do not replace the city rules, and a city rule does not replace the association's.",
    },
    {
      title: "Build only after the answers are in hand",
      body: "We install to the layout you confirmed with the association and to the city limits that apply to each run: lower in the front setback, taller on side and rear lines where allowed, and gates placed to keep sight lines and hydrant or utility access clear. If the ACC asks for a change, we revise the drawing before posts go in. MyFence does not file as the association and does not pull a permit the city does not require.",
    },
  ],
  reviewHeading: "Styles that usually fit, and the rules that actually govern",
  reviewIntro:
    "Because the published guidelines name wood, brick, and wrought iron, a cedar fence is the most direct fit for what we found: cedar privacy with a picture-frame border, board-on-board, or a Craftsman spindle-top. That is general design advice, not an association approval. Hogwire panels and aluminum-and-cedar hybrid fences use materials the fence section does not name, so ask the ACC before you plan either. Whatever you choose, keep street-facing sections uniform and in good repair, as the guidelines require.",
  reviewBullets: [
    "Association: fences must follow City of Auburn restrictions and be wood, brick, or wrought iron",
    "Association: no chain-link, chicken wire, or barbed wire of any type; limited dog-run and kennel exception when not visible from the street",
    "Association: specific ACC approval of a fence is not required if those conditions are met; other improvements need ACC approval of submitted plans",
    "Association: fencing visible from the street must be maintained, with no broken or missing pieces, no mismatched stains or paint, and uniform material",
    "No public Lakeland Hills fence height, color, or stain rule was found in the guidelines. Ask the ACC before choosing a height or finish. MyFence is not an approved vendor",
    "City of Auburn: 42 inches in the front setback and 72 inches in side, rear, and street-side setbacks; building permit for fences over 84 inches",
  ],
  reviewFooterBeforeLink:
    "For Auburn project photos, styles, and install timing outside this association, see the",
  reviewFooterLinkLabel: "Lakeland Hills fence installation page",
  helpHeading: "How MyFence helps Lakeland Hills homeowners",
  helpCards: [
    {
      icon: "clipboard",
      title: "A drawing, not an approval",
      body: "We measure your lot and prepare a sketch with the height, material, finish, and location an ACC application asks for. The association decides whether it is acceptable. We are not an approved vendor.",
    },
    {
      icon: "mapPin",
      title: "Slopes, sight lines, and gates",
      body: "Some Lakeland Hills lots may have grade, so we mark grade, the front setback, street-side lines, and where a gate can sit without blocking the street or a hydrant before we draw a taller run.",
    },
    {
      icon: "file",
      title: "City and association, both",
      body: "Meeting the association's published fence guidelines is not a city zoning check, and a city exemption is not association approval. You clear each one that applies.",
    },
  ],
  leadFenceStyleName: "Lakeland Hills HOA fence",
  faqHeading: "Lakeland Hills HOA fencing FAQs",
  faqs: [
    {
      q: "Is MyFence part of the Lakeland Hills HOA?",
      a: "No. MyFence is not affiliated with the Lakeland Hills Homeowners Association and is not an approved vendor. We build fences for homeowners. The association decides whether a design is acceptable.",
    },
    {
      q: "Does the Lakeland Hills HOA have to approve my fence?",
      a: "The association's published guidelines for Divisions 1, 2, and 4A say specific ACC approval of a fence is not required if the fence follows City of Auburn restrictions, is made of wood, brick, or wrought iron, and does not use chain-link, chicken wire, or barbed wire. The same guidelines say significant construction, alteration, or improvements need ACC approval of submitted plans, and that the Declaration of Covenants and Restrictions still applies. If you are unsure, ask the ACC and keep the answer in writing.",
    },
    {
      q: "What fence materials does the Lakeland Hills HOA allow?",
      a: "The guidelines list wood, brick, and wrought iron, and prohibit chain-link, chicken wire, and barbed wire of any type. Certain dog runs or kennels may use chain-link-type material if they are not visible from the street. Materials the guidelines do not name, such as hogwire panels or aluminum, should be cleared with the ACC first.",
    },
    {
      q: "What fence height or color does the Lakeland Hills HOA allow?",
      a: "We did not find a height or color rule for fences in the published guidelines. They do say fencing visible from the street must be maintained with no broken or missing pieces, no mismatched stains or paint, and uniform material, and that exposed fencing at the front of a property should be painted or stained. Ask the ACC about height and finish, and follow the City of Auburn height limits.",
    },
    {
      q: "Do I need an Auburn permit and HOA approval for a fence in Lakeland Hills?",
      a: "They are separate. Auburn City Code 18.31.020 requires a building permit for fences over 84 inches, and the city asks owners with a fence over 6 feet to contact its Permit Center. The association's guidelines describe their own approval rules. Confirm both before building.",
    },
    {
      q: "What fence styles usually fit when an HOA publishes a materials list?",
      a: "Cedar fences, including picture-frame privacy and Craftsman spindle-top builds, usually fit a list that names wood. That is general guidance, not an approval. Submit the material, finish, and height to the ACC if you are not sure.",
    },
  ],
  schemaFaqs: [
    {
      question: "Is MyFence part of the Lakeland Hills HOA?",
      answer:
        "No. MyFence is not affiliated with the Lakeland Hills Homeowners Association and is not an approved vendor. The association decides whether a fence design is acceptable.",
    },
    {
      question: "Does the Lakeland Hills HOA have to approve my fence?",
      answer:
        "The association's published guidelines for Divisions 1, 2, and 4A say specific ACC approval of a fence is not required if it follows City of Auburn restrictions, is made of wood, brick, or wrought iron, and does not use chain-link, chicken wire, or barbed wire. Other improvements need ACC approval, and the covenants still apply. Confirm with the association.",
    },
    {
      question: "What fence materials does the Lakeland Hills HOA allow?",
      answer:
        "The published guidelines list wood, brick, and wrought iron, and prohibit chain-link, chicken wire, and barbed wire of any type, with a limited dog-run and kennel exception when not visible from the street. Ask the ACC about any other material.",
    },
    {
      question: "Do I need an Auburn permit and HOA approval for a fence in Lakeland Hills?",
      answer:
        "They are separate. Auburn City Code requires a building permit for fences over 84 inches, and the city asks owners with a fence over 6 feet to contact its Permit Center. The association has its own rules. Confirm both before building.",
    },
    {
      question: "What fence styles usually fit when an HOA publishes a materials list?",
      answer:
        "Cedar fences, including picture-frame privacy and Craftsman spindle-top builds, usually fit a list that names wood. That is general guidance, not an approval. Homeowners should ask the ACC if unsure.",
    },
  ],
  ctaHeading: "Ready to plan a Lakeland Hills fence?",
  ctaBody:
    "Call or request a quote. We will walk the lot, draw a sketch you can take to the ACC if you need it, and schedule installation only after you have the association's answer and the City of Auburn limits are settled. Free quotes. (253) 455-1885.",
};
