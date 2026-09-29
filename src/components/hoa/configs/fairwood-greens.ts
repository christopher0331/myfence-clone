import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

const PARENT_URL = "https://myfence.com/service-areas/renton/fairwood";

const ACC_FORM =
  "https://img1.wsimg.com/blobby/go/679fadbf-d035-4a6d-863e-c28fac7d749e/downloads/Architectural%20Control%20Approval%20Form.pdf";
const ACC_GUIDELINES =
  "https://img1.wsimg.com/blobby/go/679fadbf-d035-4a6d-863e-c28fac7d749e/Architectural%20Control%20Committee%20Guidelines.pdf";
const ACC_RULE =
  "https://img1.wsimg.com/blobby/go/679fadbf-d035-4a6d-863e-c28fac7d749e/downloads/3.070.0-Architectural%20Control.pdf";

export const fairwoodGreensHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/renton/fairwood",
  parentLinkLabel: "Back to Fairwood fence installation",
  parentCrumbName: "Fairwood, Renton",
  hubHref: "/service-areas/renton",
  hubLinkLabel: "Renton fence installation",
  metaTitle:
    "Fairwood Greens HOA Approved Fencing | ACC Guidelines | Renton | MyFence.com",
  metaDescription:
    "Fairwood Greens HOA fencing in Fairwood, Renton. Published ACC guidelines, approval form, and King County permit notes. MyFence.com is not the association. Free quotes. (253) 455-1885.",
  locationLabel: "Fairwood Greens Homeowners' Association · Fairwood, Renton WA",
  h1: "Fairwood Greens HOA Approved Fencing",
  heroIntro:
    "Fairwood Greens publishes its own Architectural Control Committee guidelines for fences: a six-foot cap, no front-yard fence, fairway setbacks, and written approval before any work. We prepare drawings homeowners can attach to that packet. The committee decides.",
  disclaimer:
    "MyFence.com is not affiliated with Fairwood Greens Homeowners' Association, is not an approved vendor, and does not speak for the Architectural Control Committee. Rules on this page are summaries of documents the association publishes. Confirm the current guidelines, Rules & Regulations, and recorded CC&Rs with the association before you build.",
  downloadCtaLabel: "Open ACC documents",
  contactCtaLabel: "Contact Us",
  trustItems: [
    { icon: "file", label: "Official ACC form, guidelines, and rule 3.070.0" },
    { icon: "clipboard", label: "Written ACC approval before any work" },
    { icon: "shield", label: "King County permit is a separate step" },
  ],
  formsHeading: "Official Fairwood Greens fence documents",
  formsIntro:
    "The association's forms page says the Architectural Control Approval Form can be submitted on the website, mailed to Fairwood Greens HOA, PO Box 58053, Renton, WA 98058, or emailed to",
  formsSubmitEmail: "contact@fairwoodgreens.org",
  officialLinksHeading: "Association and King County links",
  officialLinks: [
    {
      label: "Fairwood Greens Homeowners' Association",
      href: "https://fairwoodgreens.org/",
      note: "Association website",
    },
    {
      label: "Forms",
      href: "https://fairwoodgreens.org/forms",
      note: "Architectural Control Approval Form and submission instructions",
    },
    {
      label: "ACC Guidelines page",
      href: "https://fairwoodgreens.org/acc-guidelines",
      note: "Links the published guidelines PDF",
    },
    {
      label: "Rules & Regulations",
      href: "https://fairwoodgreens.org/rules-%26-regulations",
      note: "Includes section 3.070.0, Architectural Control",
    },
    {
      label: "King County: Do you need a permit?",
      href: "https://kingcounty.gov/en/dept/local-services/certificates-permits-licenses/permits/permits-inspections-codes-buildings-land-use/do-you-need-a-permit",
      note: "County building-permit exemptions, including fences",
    },
  ],
  forms: [
    {
      href: ACC_FORM,
      title: "Architectural Control Approval Form",
      timing: "Required before work",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "The form posted on the association's forms page. It asks for a sketch of the lot, distances to property borders, and an elevation view of the fence. The signed chair copy is the official approval.",
    },
    {
      href: ACC_GUIDELINES,
      title: "Architectural Control Committee Guidelines",
      timing: "Fence standards",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "The published fence section: King County compliance, property-line placement, a six-foot height cap, no fence in front of the home, corner and fairway setbacks, and color approval.",
    },
    {
      href: ACC_RULE,
      title: "Rules & Regulations 3.070.0 — Architectural Control",
      timing: "Approval rule",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "Requires fencing plans to be submitted and approved in writing before work starts. The guidelines are incorporated by reference. The section also describes notices and fines if work begins without that approval.",
    },
  ],
  processHeading: "Approval and permit process",
  steps: [
    {
      title: "Read the published fence rules",
      body: "The ACC Guidelines limit fence height to 6 feet measured on the downhill side, excluding a rookery or retaining wall. They prohibit any fence in front of the home, including a picket fence. Corner-lot fences on the street side must be set back at least 20 feet from the property line. Side fences may come within 3 feet of the front of the house. Fairway rear fences must be at least 15 feet off the rear property line and include a gate on the fairway side. Fences and footings stay on the owner's property unless neighbors file a written joint-maintenance agreement with the ACC form. Fence and decorative colors need ACC approval and must be in harmony with the surrounding homes. The guidelines do not publish a list of approved fence products.",
    },
    {
      title: "Check King County, separate from the ACC",
      body: "The guidelines tell homeowners to follow King County building restrictions and to contact King County for permit questions. King County's permit page says that, unless the property contains critical areas, fences 6 feet high or less do not need a building permit, and it lists fences over that height with work that does need one. The association's height measurement (downhill side, excluding a rookery or retaining wall) is not the same sentence as the county's. Satisfy both. Call the county if the lot has a critical-area overlay, a retaining wall, or a measurement you are unsure about.",
    },
    {
      title: "File the ACC form and wait for written approval",
      body: "Rules 3.070.0 require fencing materials and plans to be submitted before work starts. The guidelines say a sketch with dimensions, setback distances, and color is enough to file, and that written approval may take as long as two months. Submit the form from the association website, email it to contact@fairwoodgreens.org, or mail it to PO Box 58053, Renton, WA 98058. Do not start construction on a verbal comment. The form itself says the document signed by the authorized chair is the official copy.",
    },
    {
      title: "Build only the approved layout",
      body: "After written approval, we install to that plan: the setbacks the committee accepted, the gate a fairway lot requires, and the color that was submitted. If the committee asks for a change, we revise the drawing before posts go in. MyFence.com does not approve the fence and does not file as the association.",
    },
  ],
  reviewHeading: "Styles that usually fit, and the rules that actually govern",
  reviewIntro:
    "Cedar privacy, picture-frame cedar, and hogwire in a cedar frame are styles we commonly build on Fairwood lots. That is general design advice, not an association approval. Fairwood Greens has not published a list of approved fence brands, colors, or panel types. What the guidelines do publish is placement, height, and a requirement that fence color be approved and kept in harmony with nearby homes. A six-foot cedar privacy fence on the side and rear, kept off the front yard, is the layout that lines up with those written limits. On a fairway lot, the same guidelines require the rear fence 15 feet off the rear line and a gate on the course side, so an open panel is often easier to live with there — still subject to written ACC approval.",
  reviewBullets: [
    "Maximum height 6 feet, measured on the downhill side, excluding a rookery or retaining wall (ACC Guidelines)",
    "No fence in front of the home, including picket fences (ACC Guidelines)",
    "Street side of a corner lot set back at least 20 feet; side fences may stop within 3 feet of the front of the house (ACC Guidelines)",
    "Fairway rear fences set back at least 15 feet, with a gate on the fairway side (ACC Guidelines)",
    "Fence color submitted for ACC approval; materials and plans approved in writing before work (Guidelines and rule 3.070.0)",
  ],
  reviewFooterBeforeLink:
    "For Fairwood lot types, styles, and install timing outside this association packet, see the",
  reviewFooterLinkLabel: "Fairwood fence installation page",
  helpHeading: "How MyFence.com helps Fairwood Greens homeowners",
  helpCards: [
    {
      icon: "clipboard",
      title: "Packet, not a promise",
      body: "We measure the line and prepare a sketch with heights, setbacks, and the color you want to submit. The Architectural Control Committee approves or denies that packet.",
    },
    {
      icon: "mapPin",
      title: "Fairway and corner setbacks",
      body: "Course-edge and corner lots have published setbacks that are easy to miss on a flat sketch. We mark the 15-foot fairway line and the 20-foot corner street setback before we draw.",
    },
    {
      icon: "file",
      title: "County and committee, both",
      body: "We do not treat ACC approval as a King County permit, or a county exemption as ACC approval. You clear each one that applies to the lot.",
    },
  ],
  leadFenceStyleName: "Fairwood Greens HOA fence",
  faqHeading: "Fairwood Greens HOA fencing FAQs",
  faqs: [
    {
      q: "Is MyFence.com part of Fairwood Greens?",
      a: "No. MyFence.com is not affiliated with Fairwood Greens Homeowners' Association and is not an approved vendor. We build fences for homeowners. The Architectural Control Committee decides whether a design is approved.",
    },
    {
      q: "What fence rules does the association publish?",
      a: "The ACC Guidelines cap height at 6 feet on the downhill side, ban fences in front of the home, set a 20-foot street-side setback on corner lots, allow side fences within 3 feet of the front of the house, and require fairway rear fences to sit at least 15 feet off the rear line with a gate. Colors need approval. Rule 3.070.0 says fencing plans must be approved in writing before work starts. Read the current PDFs; this is a summary.",
    },
    {
      q: "Do I need King County approval and ACC approval?",
      a: "They are separate. The guidelines require King County compliance and point homeowners to the county for permits. King County's permit page says fences 6 feet high or less do not need a building permit unless the property contains critical areas. The ACC still requires its own written approval before work, including for a fence the county would not permit. Confirm critical areas, walls, and measurement with King County, and confirm the packet with the committee.",
    },
    {
      q: "What styles usually work with these rules?",
      a: "A cedar privacy or picture-frame fence at or under the published 6-foot cap, kept out of the front yard, is the layout that matches the written limits. Hogwire in a cedar frame is a general option we build when a lot needs a gate and a more open course side. The guidelines do not name those products. Submit the material and color on the ACC form and wait for the signed approval.",
    },
    {
      q: "What if the guidelines do not answer my lot?",
      a: "The guidelines say each project is reviewed on its own and that they do not replace the CC&Rs. Fairway and corner setbacks in the covenants can differ. If your question is not in the published fence section, ask the Architectural Control Committee before you build. The office phone printed on the association site is (425) 227-3997.",
    },
  ],
  schemaFaqs: [
    {
      question: "Is MyFence.com part of Fairwood Greens?",
      answer:
        "No. MyFence.com is not affiliated with Fairwood Greens Homeowners' Association and is not an approved vendor. The Architectural Control Committee decides whether a fence design is approved.",
    },
    {
      question: "What fence rules does Fairwood Greens publish?",
      answer:
        "The Architectural Control Committee Guidelines cap fence height at 6 feet measured on the downhill side, prohibit fences in front of the home, require a 20-foot street-side setback on corner lots, and require fairway rear fences to be at least 15 feet from the rear property line with a gate. Rule 3.070.0 requires written approval before fence work starts.",
    },
    {
      question: "Do I need a King County permit and ACC approval?",
      answer:
        "Yes, they are separate. King County's permit page says fences 6 feet high or less do not need a building permit unless the property contains critical areas. Fairwood Greens still requires written Architectural Control Committee approval before work begins.",
    },
    {
      question: "What fence styles usually fit Fairwood Greens guidelines?",
      answer:
        "A cedar privacy or picture-frame fence within the published 6-foot height cap and outside the front yard is the layout that matches the written rules. The guidelines do not list approved products or colors. Homeowners submit material and color on the ACC form.",
    },
    {
      question: "What if the published guidelines do not cover my Fairwood Greens lot?",
      answer:
        "The guidelines say they do not replace the CC&Rs and that each project is reviewed individually. Homeowners should ask the Architectural Control Committee before building when a setback or material question is not answered in the published fence section.",
    },
  ],
  ctaHeading: "Ready to plan a Fairwood Greens fence?",
  ctaBody:
    "Open the association's form and guidelines, or ask us to measure the lot and prepare a sketch for your ACC packet. Free quotes in Fairwood. We schedule installation after written committee approval.",
};
