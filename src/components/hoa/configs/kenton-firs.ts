import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

const PARENT_URL = "https://myfence.com/service-areas/kent/kenton-firs";

const KF_HOME = "https://kentonfirs.org/";
const KF_COVENANTS =
  "https://assets.zyrosite.com/mePLZ3K2bzH43xMz/recorded-covenants-combined-AoPG1WPM84iwR16p.pdf";
const KF_AMENDMENTS =
  "https://assets.zyrosite.com/mePLZ3K2bzH43xMz/2021-amendmts-with-recording-1-YD0pkjMVnbS4Dzkk.pdf";
const KF_AACC_PACKET =
  "https://assets.zyrosite.com/mePLZ3K2bzH43xMz/aacc_appl-revised-2-12-22-mk3DO88QV2fw7jeM.pdf";
const KF_FINE_SCHEDULE =
  "https://assets.zyrosite.com/mePLZ3K2bzH43xMz/2023-fine-sch-signed-final-AR0JklEp78f00Bqz.pdf";
const KENT_PERMIT_FAQ =
  "https://www.kentwa.gov/pay-and-apply/apply-for-a-permit/do-i-need-a-permit";
const KENT_FENCE_HANDOUT =
  "https://www.kentwa.gov/home/showpublisheddocument/24945/639113417182900000";
const KENT_KCC_1508 =
  "https://www.codepublishing.com/WA/Kent/html/Kent15/Kent1508.html";

export const kentonFirsHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/kent/kenton-firs",
  parentLinkLabel: "Back to Kenton Firs fence installation",
  parentCrumbName: "Kenton Firs, Kent",
  hubHref: "/service-areas/kent",
  hubLinkLabel: "Kent fence installation",
  metaTitle: "Kenton Firs Community Association Fencing Guide | Kent | MyFence",
  metaDescription:
    "Kenton Firs fencing in Kent: the association's recorded fence covenants, the AACC application and site visit, City of Kent permit rules, and what to confirm first. Not affiliated with the association.",
  locationLabel: "Kenton Firs Community Association · Kent, WA",
  h1: "Kenton Firs Community Association Fencing",
  heroIntro:
    "Kenton Firs is a 146-lot manufactured-home community in Kent where owners own their lots and belong to the Kenton Firs Community Association. Its recorded covenants say no fence may be built until the Architectural/Agricultural Control Committee (AACC) approves the design and specifications, that no fence can be over six feet high, and that barbed wire and electric fences are not allowed. Two AACC members visit the lot to check the fence line before approval. This page summarizes the association's own published documents; the association decides what it accepts.",
  disclaimer:
    "MyFence is not affiliated with the Kenton Firs Community Association, is not an approved vendor, and does not speak for the association or its AACC. Association facts on this page come from the association's website and the covenants, 2021 amendments, and AACC application packet it publishes, all linked below. City facts come from the City of Kent's permit guidance and the Kent City Code. We could not read the association's 2023 fine schedule (a scanned PDF), and amendments can change the rules, so confirm the current covenants with the association before you build.",
  downloadCtaLabel: "Open association and city links",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "file", label: "Covenants: AACC approval before any fence" },
    { icon: "clipboard", label: "Covenants: 6-foot maximum, no barbed or electric wire" },
    { icon: "shield", label: "City of Kent rules are a separate step" },
  ],
  formsHeading: "Association and city fence resources",
  formsIntro:
    "These are the association's own published documents and the City of Kent's fence guidance. We link to them rather than host copies, so you always see the current version. The association lists kentonfirs@gmail.com as its contact address, and the AACC packet says committee members' names and phone numbers are in the community phone book and on the website.",
  officialLinksHeading: "Association and city links",
  officialLinks: [
    {
      label: "Kenton Firs Community Association website",
      href: KF_HOME,
      note: "Describes a 146-unit, property-owned manufactured-home community founded in 1971 with seven common areas, and links the covenants, amendments, fine schedule, and AACC application",
    },
    {
      label: "Kenton Firs recorded covenants (combined)",
      href: KF_COVENANTS,
      note: "The Fences section: no barbed wire or electric fences, no fence in a public right of way, no fence over six feet from the ground or bottom of the deck substructure, AACC approval before any fence, and City of Kent zoning and building codes apply",
    },
    {
      label: "Kenton Firs 2021 amendments (recorded)",
      href: KF_AMENDMENTS,
      note: "Adds the two-member AACC site visit, an owner-paid survey if the AACC sees a possible encroachment, marked survey lines for replacement fences, and the 30-day review language",
    },
    {
      label: "Kenton Firs AACC plan and project request packet",
      href: KF_AACC_PACKET,
      note: "Says new fences need approval from three AACC members before any work or preparation, and asks for a project request, a materials list, and a drawing with a north arrow and distances from property lines",
    },
    {
      label: "Kenton Firs 2023 fine schedule",
      href: KF_FINE_SCHEDULE,
      note: "Linked from the association's website. We could not extract its text, so check it directly",
    },
    {
      label: "City of Kent: Do I need a permit?",
      href: KENT_PERMIT_FAQ,
      note: "Lists fences 7 feet high or less as work that does not need a permit, and says work without a permit must still follow the applicable codes",
    },
    {
      label: "City of Kent fences and retaining walls handout",
      href: KENT_FENCE_HANDOUT,
      note: "For fences over seven feet: a site plan and construction plans, with a sight-distance triangle shown on corner lots or next to driveways",
    },
    {
      label: "Kent City Code chapter 15.08 (see 15.08.130)",
      href: KENT_KCC_1508,
      note: "On corner lots in residential districts, nothing may impede vision between 2½ and 10 feet above street grade within the 20-foot triangle at the intersection",
    },
  ],
  forms: [
    {
      href: KF_AACC_PACKET,
      title: "AACC plan and project request packet",
      timing: "Before any fence work",
      source: "Official association",
      ctaLabel: "Open association PDF",
      blurb:
        "The association's packet for new or replacement fences. It asks for one project per request, a materials list, and a drawing with a north arrow, the fence size in feet and inches, and distances from property lines and existing structures. Its example is a 6-foot cedar fence; that is an example, not an approval.",
    },
    {
      href: KF_COVENANTS,
      title: "Recorded covenants",
      timing: "Before you design",
      source: "Official association",
      ctaLabel: "Open covenants PDF",
      blurb:
        "The full covenants, including the Fences section, the recreation easement around the plat, and the access easement neighbors can use to move homes. Read them with the 2021 amendments, which replaced some sections.",
    },
    {
      href: KENT_PERMIT_FAQ,
      title: "City of Kent permit guidance",
      timing: "City permit check",
      source: "City of Kent",
      ctaLabel: "Open city page",
      blurb:
        "The city lists fences 7 feet high or less among work that does not need a permit, while still requiring that the work follow code. The association's covenants set a lower 6-foot maximum, so the stricter limit governs a Kenton Firs fence.",
    },
  ],
  processHeading: "Approval and permit process",
  steps: [
    {
      title: "Read the fence covenants and amendments",
      body: "The recorded covenants define a fence, ban barbed wire and electric fences, keep fences out of public rights of way, cap height at six feet measured from the ground or the bottom of a deck substructure, and require AACC approval of the design and specifications before a fence is built. The 2021 amendments replaced parts of these sections, so read both.",
    },
    {
      title: "Check easements on your lot",
      body: "The covenants describe a 30-foot recreation easement around the perimeter of the plat, next to each peripheral lot, where no fence or structure is permitted without the AACC's prior written approval and trees are not to be removed without approval. They also describe an access easement that lets a neighbor move a home across part of an adjoining lot, with the neighbor responsible for restoring a damaged fence. Ask the AACC how either affects your fence line.",
    },
    {
      title: "Submit the AACC packet with a drawing",
      body: "The AACC packet asks for a project request, a materials list, and a drawing with a north arrow, the fence size, and measurements from property lines and existing structures, mailed to the address in the packet. The packet says three AACC members approve fences before any work or preparation begins. MyFence can measure the line and prepare the drawing; we do not approve the fence.",
    },
    {
      title: "Expect a site visit, and possibly a survey",
      body: "Under the 2021 amendments, two AACC members visit the lot to confirm the fence line is visually within the property lines and matches the request. If the AACC thinks the fence may encroach on another lot, it requires a survey at the owner's expense before approval. Replacement fences need survey lines marked or a current survey on file. The amended covenants also say members return after the project to verify it was built as presented.",
    },
    {
      title: "Check the City of Kent, separate from the association",
      body: "The covenants say every fence must meet City of Kent zoning and building codes and that getting any permit is the homeowner's job. The city lists fences 7 feet high or less as not needing a permit, and its handout asks for site and construction plans for fences over seven feet. On corner lots, Kent City Code 15.08.130 keeps a 20-foot visibility triangle clear between 2½ and 10 feet. Confirm the rules for your lot with the city.",
    },
  ],
  reviewHeading: "Styles that usually fit, and the rules that actually govern",
  reviewIntro:
    "The covenants we read do not list required fence materials or colors, beyond requiring that auxiliary structures be built of new materials and that cloth, plastic, or tarps not be part of a permanent structure. A six-foot cedar privacy fence is a common choice for side and rear lines and matches the example in the AACC packet, but the example is not an approval. Lower cedar or hogwire sections can keep an open feel near the street. Submit any style to the AACC first.",
  reviewBullets: [
    "Association: no fence may be built until the AACC approves its design and specifications",
    "Association: no fence over six feet from the ground or bottom of the deck substructure",
    "Association: no barbed wire or electric fences, and no fence in a public right of way",
    "Association: two AACC members visit the lot; a survey may be required at the owner's expense if encroachment is possible",
    "Association: no fence in the 30-foot perimeter recreation easement without the AACC's prior written approval",
    "No public Kenton Firs fence color, stain, or material list was found. Ask the AACC before choosing a finish. MyFence is not an approved vendor",
    "City of Kent: fences 7 feet or less are listed as not needing a permit; corner-lot visibility rules still apply",
  ],
  reviewFooterBeforeLink:
    "For Kent project photos, styles, and install timing, see the",
  reviewFooterLinkLabel: "Kenton Firs fence installation page",
  helpHeading: "How MyFence helps Kenton Firs homeowners",
  helpCards: [
    {
      icon: "clipboard",
      title: "A drawing, not an approval",
      body: "We measure your lot and prepare a drawing with the north arrow, fence size, and distances from property lines and structures that the AACC packet asks for. The association decides. We are not an approved vendor.",
    },
    {
      icon: "mapPin",
      title: "Property lines first",
      body: "Because the AACC checks the fence line on site and can require a survey, we look for existing survey markers before we draw and stop if the line is unclear.",
    },
    {
      icon: "file",
      title: "City and association, both",
      body: "Association approval is not a city zoning check, and a city permit exemption is not association approval. You clear each one that applies.",
    },
  ],
  leadFenceStyleName: "Kenton Firs fence",
  faqHeading: "Kenton Firs fencing FAQs",
  faqs: [
    {
      q: "Is MyFence part of the Kenton Firs Community Association?",
      a: "No. MyFence is not affiliated with the Kenton Firs Community Association and is not an approved vendor. We build fences for homeowners. The association's AACC decides whether a fence is approved.",
    },
    {
      q: "Does the Kenton Firs AACC have to approve my fence?",
      a: "Yes, according to the association's recorded covenants: no fence may be erected until the AACC approves its design and specifications. The AACC packet says fences are approved by three committee members before any work or preparation begins, and the 2021 amendments add a site visit by two members.",
    },
    {
      q: "How tall can a fence be in Kenton Firs?",
      a: "The covenants say no fence can be over six feet from the ground, or from the bottom of a deck substructure, to its highest point. The City of Kent has its own rules, including corner-lot visibility limits, so confirm both.",
    },
    {
      q: "What fence materials does Kenton Firs allow?",
      a: "The covenants ban barbed wire and electric fences and say permanent structures may not use cloth, plastic, or tarps. We did not find a list of required fence materials or colors, so ask the AACC before you choose a material or finish.",
    },
    {
      q: "Do I need a City of Kent permit for a fence in Kenton Firs?",
      a: "The City of Kent lists fences 7 feet high or less among work that does not need a permit, though the work must still follow code. Since the covenants cap fences at six feet, most Kenton Firs fences fall in that range, but confirm with the city for your lot. AACC approval is a separate requirement.",
    },
    {
      q: "What happens if I build without AACC approval?",
      a: "The recorded covenants say exterior construction without prior AACC approval is subject to a fine after notice and a hearing, and the board may issue a stop-work order or require removal at the owner's expense. The association also publishes a 2023 fine schedule; check it for current amounts.",
    },
  ],
  schemaFaqs: [
    {
      question: "Is MyFence part of the Kenton Firs Community Association?",
      answer:
        "No. MyFence is not affiliated with the Kenton Firs Community Association and is not an approved vendor. The association's AACC decides whether a fence is approved.",
    },
    {
      question: "Does the Kenton Firs AACC have to approve my fence?",
      answer:
        "Yes, according to the recorded covenants, no fence may be erected until the AACC approves its design and specifications. The AACC packet says three members approve fences before work begins, and the 2021 amendments add a site visit by two members.",
    },
    {
      question: "How tall can a fence be in Kenton Firs?",
      answer:
        "The covenants say no fence can be over six feet from the ground or the bottom of a deck substructure. City of Kent rules also apply, so confirm both.",
    },
    {
      question: "Do I need a City of Kent permit for a fence in Kenton Firs?",
      answer:
        "The City of Kent lists fences 7 feet high or less among work that does not need a permit, though the work must still follow code. AACC approval is a separate requirement. Confirm with the city for your lot.",
    },
  ],
  ctaHeading: "Ready to plan a Kenton Firs fence?",
  ctaBody:
    "Call or request a quote. We will walk the lot, prepare the drawing and materials list the AACC packet asks for, and schedule installation only after you have the committee's written approval. Free quotes. (253) 455-1885.",
};
