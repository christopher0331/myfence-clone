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
    "Somerset HOA approved fencing in Bellevue. Official CRC Form B, Fence Guidelines, and view-sensitive hillside installs. Free quotes. (253) 455-1885.",
  locationLabel: "Somerset Community Association · Bellevue, WA",
  h1: "Somerset HOA Approved Fencing",
  heroIntro:
    "Official Covenants Review Committee forms, Fence Guidelines, and hillside installs designed so your fence clears CRC review without blocking the Cascade and lake views Somerset is known for.",
  downloadCtaLabel: "Open CRC forms",
  trustItems: [
    { icon: "clipboard", label: "Official CRC Form B + Fence Guidelines" },
    { icon: "mail", label: "Submit to crc@somerset98006.org" },
    { icon: "shield", label: "View-impact package prep included" },
  ],
  formsHeading: "Official CRC forms for Somerset HOA approved fencing",
  formsIntro:
    "Somerset Community Association posts CRC paperwork on its Procedures and Forms page. Typical fence work uses Form B (minor remodel—Fence is a checkbox) plus the Fence Guidelines. Download those association files below, assemble drawings and samples, then email the packet to",
  formsSubmitEmail: "crc@somerset98006.org",
  officialLinksHeading: "Official Somerset Community Association pages",
  officialLinks: [
    {
      label: "Procedures and Forms",
      href: "https://www.somerset98006.org/procedures-and-forms.html",
      note: "CRC forms, guidelines, and fees",
    },
    {
      label: "Division covenants and map",
      href: "https://www.somerset98006.org/covenants.html",
      note: "Confirm which CC&Rs cover your lot",
    },
  ],
  forms: [
    {
      href: "https://drive.google.com/file/d/1iv-ARH8tBUlMG7IiYRvFMVJWtiGhzA6m/view?usp=sharing",
      title: "CRC Fence Guidelines",
      timing: "Reference",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "Somerset Community Association Fence Guidelines (Covenant Review Committee). Read this before you lock height, materials, or placement.",
    },
    {
      href: "https://drive.google.com/file/d/1RaMfayhW-7gkBFYEO2nY-sW2tEyfPwqV/view?usp=drive_link",
      title: "Form B for Minor Remodel Requests",
      timing: "Before install",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "CRC Form B. Fence is listed as a project type. Use this for typical fence work unless the CRC directs you to Form A.",
    },
    {
      href: "https://drive.google.com/file/d/1pqT5ZLqOcJliWlifOZqia0fhFBW5O0VL/view?usp=drive_link",
      title: "Form A for Major Remodel Requests",
      timing: "If CRC directs",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "CRC Form A for larger exterior work. Use only if your project is a major remodel or the CRC asks for it instead of Form B.",
    },
    {
      href: "https://www.somerset98006.org/uploads/4/7/5/8/47585659/crcprocedureform2017v3.pdf",
      title: "CRC Procedures and Fees",
      timing: "Reference",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb:
        "How to request CRC service, what to attach, and when a fee applies. Paid SCA members typically have no CRC fee.",
    },
    {
      href: "https://www.somerset98006.org/uploads/4/7/5/8/47585659/change_approval_process.pdf",
      title: "Change Approval Process",
      timing: "Reference",
      source: "Official association",
      ctaLabel: "Open official PDF",
      blurb: "CRC flowchart for externally visible changes, including fences.",
    },
    {
      href: "/docs/hoa/somerset-hoa-fence-submission-checklist.pdf",
      title: "Somerset CRC Fence Submission Checklist",
      timing: "Prep guide",
      source: "MyFence prep guide",
      blurb:
        "Our homeowner checklist covering division CC&Rs, view impact, Form B vs Form A, site plan, and CRC email. Not a substitute for the official association forms above.",
    },
  ],
  processHeading: "Somerset CRC fence process",
  steps: [
    {
      title: "Confirm your division’s covenants",
      body: "Most Somerset lots sit under CC&Rs; a few divisions do not. Check the association map and your plat, or ask the CRC, before you design. City of Bellevue permits do not replace CRC approval.",
    },
    {
      title: "Read the Fence Guidelines, then design for slope and views",
      body: "Somerset is a view community. CRC can weigh neighbor sightlines. Hogwire or mixed privacy/open runs often fit hillside lots better than a solid wall on the downslope edge.",
    },
    {
      title: "Complete Form B and file with the CRC",
      body: "Attach a site plan, elevations, materials, and finish samples to Form B. Email the packet to crc@somerset98006.org. Do not start construction until you have written approval.",
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
      title: "Official forms + install",
      body: "Use the association PDFs above, then we build cedar, hogwire, or hybrid systems to the approved plan.",
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
      a: "Most fence projects use Form B (minor remodel) plus the CRC Fence Guidelines, both posted by the association on this page. Email the completed packet to crc@somerset98006.org.",
    },
    {
      q: "Does every Somerset lot have CC&Rs?",
      a: "Most do, but a few divisions (including parts of Division 16 and Somerset East 3) may not. Confirm on the association covenants page, with your title documents, or with the CRC before you design.",
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
        "Most fence projects use Form B for minor remodel requests plus Somerset CRC Fence Guidelines, both linked from somerset98006.org/procedures-and-forms. Email completed packets to crc@somerset98006.org. MyFence.com also hosts a prep checklist on this page.",
    },
    {
      question: "Does every Somerset lot have CC&Rs?",
      answer:
        "Most Somerset properties are subject to CC&Rs, but a few divisions may not be. Check the association covenants page at somerset98006.org/covenants.html, your title documents, or contact the CRC at crc@somerset98006.org before designing a fence.",
    },
    {
      question: "Do I need CRC approval before MyFence installs in Somerset?",
      answer:
        "Yes, if your lot is under CC&Rs. Do not start construction until you have written CRC approval. We prepare the submission package and schedule install after approval.",
    },
  ],
  ctaHeading: "Ready for Somerset HOA approved fencing?",
  ctaBody:
    "Open the official CRC forms above, or let us handle the packet and hillside build. Free on-site estimates in Somerset / Bellevue.",
};
