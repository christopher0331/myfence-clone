import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

const PARENT_URL = "https://myfence.com/service-areas/bellevue/somerset";

export const somersetHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/bellevue/somerset",
  parentLinkLabel: "Back to Somerset fence installation",
  parentCrumbName: "Somerset, Bellevue",
  metaTitle: "Somerset HOA Approved Fencing | CRC Forms | Bellevue | MyFence.com",
  metaDescription:
    "Somerset HOA approved fencing in Bellevue. CRC checklist, view-sensitive hillside installs, Form B guidance. Free quotes. (253) 455-1885.",
  locationLabel: "Somerset Community Association · Bellevue, WA",
  h1: "Somerset HOA Approved Fencing",
  heroIntro:
    "Covenants Review Committee steps, a submission checklist, and hillside installs designed so your fence clears CRC review without blocking the Cascade and lake views Somerset is known for.",
  downloadCtaLabel: "Download CRC checklist",
  trustItems: [
    { icon: "clipboard", label: "Somerset CRC fence checklist" },
    { icon: "mail", label: "Submit to crc@somerset98006.org" },
    { icon: "shield", label: "View-impact package prep included" },
  ],
  formsHeading: "Downloads for Somerset HOA approved fencing",
  formsIntro:
    "Official CRC forms live on the Somerset Community Association site (somerset98006.org/procedures-and-forms). Typical fence work uses Form B (minor remodel) plus Fence Guidelines. Use our checklist to assemble drawings and samples, then file with the CRC. Email:",
  formsSubmitEmail: "crc@somerset98006.org",
  forms: [
    {
      href: "/docs/hoa/somerset-hoa-fence-submission-checklist.pdf",
      title: "Somerset CRC Fence Submission Checklist",
      timing: "Prep guide",
      blurb:
        "MyFence.com homeowner checklist covering division CC&Rs, view impact, Form B vs Form A, site plan, and CRC email. Not a substitute for the official association forms.",
    },
  ],
  processHeading: "Somerset CRC fence process",
  steps: [
    {
      title: "Confirm your division’s covenants",
      body: "Most Somerset lots sit under CC&Rs; a few divisions do not. Check your plat or ask the CRC before you design. City of Bellevue permits do not replace CRC approval.",
    },
    {
      title: "Design for slope and views",
      body: "Somerset is a view community. CRC can weigh neighbor sightlines. Hogwire or mixed privacy/open runs often fit hillside lots better than a solid wall on the downslope edge.",
    },
    {
      title: "Complete Form B and file with the CRC",
      body: "Download current Form B and Fence Guidelines from somerset98006.org. Attach a site plan, elevations, materials, and finish samples. Email the packet to crc@somerset98006.org. Do not start construction until you have written approval.",
    },
    {
      title: "Install to the approved plan",
      body: "We build slope-following panels—cedar privacy where you want enclosure, hogwire or hybrid where you want the vista—exactly as the CRC approved.",
    },
  ],
  reviewHeading: "What makes fencing HOA-approved in Somerset",
  reviewIntro:
    "The Covenants Review Committee looks at height, design, placement, and whether the fence cuts a neighbor’s view. Hillside lots add engineering: panels that follow grade, posts that hold in wind, and finishes that match the street. MyFence.com prepares CRC packets with those drawings already in place.",
  reviewBullets: [
    "Division CC&Rs confirmed before the design is locked",
    "View-impact notes and neighbor context included in the packet",
    "Form B (or Form A if CRC directs) with drawings and finish samples",
    "Slope-following Fence Genius panels engineered for hillside wind load",
  ],
  reviewFooterBeforeLink: "For hillside install coverage, styles, and pricing, visit the",
  reviewFooterLinkLabel: "Somerset fence installation page",
  helpHeading: "How MyFence.com helps Somerset homeowners",
  helpCards: [
    {
      icon: "shield",
      title: "CRC package prep",
      body: "Drawings, specs, and samples ready to attach to Form B—no separate HOA paperwork fee.",
    },
    {
      icon: "mapPin",
      title: "Hillside + view layouts",
      body: "Panels that follow 30-degree grades and keep Cascade or lake views open where it matters.",
    },
    {
      icon: "clipboard",
      title: "Checklist + install",
      body: "Use our checklist to prep, then we build cedar, hogwire, or hybrid systems to the approved plan.",
    },
  ],
  leadFenceStyleName: "Somerset HOA fence",
  faqHeading: "Somerset HOA approved fencing FAQs",
  faqs: [
    {
      q: "What is Somerset HOA approved fencing?",
      a: "It means your fence follows Somerset Community Association covenants and Covenants Review Committee approval—height, design, and view impact included—before install. CRC review is separate from a Bellevue building permit.",
    },
    {
      q: "What forms does Somerset require for a new fence?",
      a: "Most fence projects use Form B (minor remodel) plus the Fence Guidelines posted at somerset98006.org. Use the checklist on this page to assemble drawings, then email crc@somerset98006.org.",
    },
    {
      q: "Does every Somerset lot have CC&Rs?",
      a: "Most do, but a few divisions (including parts of Division 16 and Somerset East 3) may not. Confirm with your title documents or the CRC before you design.",
    },
    {
      q: "Do I need approval before installation?",
      a: "Yes, if your lot is under CC&Rs. Starting without CRC approval can force removal. We schedule Somerset installs after written clearance.",
    },
  ],
  schemaFaqs: [
    {
      question: "What is Somerset HOA approved fencing?",
      answer:
        "Somerset HOA approved fencing means your project follows Somerset Community Association covenants and Covenants Review Committee approval, including height, design, and view impact, before installation. CRC review is separate from City of Bellevue permits. MyFence.com prepares CRC packages for hillside lots.",
    },
    {
      question: "What forms does Somerset require for a new fence?",
      answer:
        "Most fence projects use Form B for minor remodel requests plus Somerset Fence Guidelines, both linked from somerset98006.org/procedures-and-forms. Email completed packets to crc@somerset98006.org. Download the MyFence.com checklist on this page to prepare drawings and samples.",
    },
    {
      question: "Does every Somerset lot have CC&Rs?",
      answer:
        "Most Somerset properties are subject to CC&Rs, but a few divisions may not be. Check your title documents, recorded plat, or contact the CRC at crc@somerset98006.org before designing a fence.",
    },
    {
      question: "Do I need CRC approval before MyFence installs in Somerset?",
      answer:
        "Yes, if your lot is under CC&Rs. Do not start construction until you have written CRC approval. We prepare the submission package and schedule install after approval.",
    },
  ],
  ctaHeading: "Ready for Somerset HOA approved fencing?",
  ctaBody:
    "Download the checklist, or let us handle the CRC package and hillside build. Free on-site estimates in Somerset / Bellevue.",
};
