import type { HoaApprovedFencingConfig } from "@/components/hoa/types";

const PARENT_URL = "https://myfence.com/service-areas/issaquah-highlands";

export const issaquahHighlandsHoaConfig: HoaApprovedFencingConfig = {
  canonical: `${PARENT_URL}/hoa-approved-fencing`,
  parentUrl: PARENT_URL,
  parentHref: "/service-areas/issaquah-highlands",
  parentLinkLabel: "Back to Issaquah Highlands fence installation",
  parentCrumbName: "Issaquah Highlands",
  metaTitle:
    "Issaquah Highlands HOA Approved Fencing | ARC Forms | MyFence.com",
  metaDescription:
    "Issaquah Highlands HOA approved fencing. Download Fence Installation Notification and ARC Guidelines. Hillside, view-smart installs. Free quotes. (253) 455-1885.",
  locationLabel: "Issaquah Highlands · Issaquah, WA",
  h1: "Issaquah Highlands HOA Approved Fencing",
  heroIntro:
    "Official Highlands fence notification paperwork, ARC guidelines, and hillside installs designed to clear architectural review—without blocking the valley or Cascade views that make this community special.",
  downloadCtaLabel: "Download HOA forms",
  trustItems: [
    { icon: "clipboard", label: "Fence Installation Notification PDF" },
    { icon: "file", label: "ARC Guidelines hosted here" },
    { icon: "shield", label: "Hillside + HOA package prep" },
  ],
  formsHeading: "Download forms for Issaquah Highlands HOA approved fencing",
  formsIntro:
    "Use the Fence Installation Notification with the ARC Guidelines before you build. Confirm any neighborhood-specific Fiber Co-op or village rules when you file with Highlands architectural review.",
  forms: [
    {
      href: "/docs/hoa/issaquah-highlands-fence-installation-notification.pdf",
      title: "Issaquah Highlands Fence Installation Notification",
      timing: "Before install",
      blurb:
        "Community notification / review form for planned fence work. Complete with drawings and material details before construction starts.",
    },
    {
      href: "/docs/hoa/issaquah-highlands-arc-guidelines.pdf",
      title: "Issaquah Highlands ARC Guidelines",
      timing: "Reference",
      blurb:
        "Architectural guidelines covering design expectations used by Highlands review. Check fence-related sections before finalizing style and placement.",
    },
  ],
  processHeading: "Issaquah Highlands ARC fence process",
  steps: [
    {
      title: "Read the ARC Guidelines",
      body: "Confirm approved looks, materials, and placement expectations for your village before locking a design—especially on steep lots where height and setbacks matter.",
    },
    {
      title: "Complete the Fence Installation Notification",
      body: "Fill the notification with site plan, elevations, materials, and finish samples. Incomplete packets bounce and add weeks on hillside projects.",
    },
    {
      title: "Submit and wait for clearance",
      body: "File through the Issaquah Highlands architectural review path (issaquahhighlands.com). Do not start construction until you have written clearance.",
    },
    {
      title: "Install to the approved plan",
      body: "We build slope-following panels—often galvanized hogwire for views, or premium cedar where privacy is required—exactly to the approved package.",
    },
  ],
  reviewHeading: "What makes fencing HOA-approved in the Highlands",
  reviewIntro:
    "Issaquah Highlands maintains rigorous architectural standards across a master-planned hillside community. Reviewers care about neighborhood character, materials, and how the fence sits on steep grade. MyFence.com prepares Highlands-ready packages and engineers panels that follow the terrain.",
  reviewBullets: [
    "Notification packet with clear drawings and material specs",
    "Design aligned to Highlands ARC Guidelines",
    "Slope-following Fence Genius panels for hillside lots",
    "View-preserving hogwire or privacy cedar matched to your vista goals",
  ],
  reviewFooterBeforeLink: "For install pricing, styles, and Highlands project examples, visit the",
  reviewFooterLinkLabel: "Issaquah Highlands fence installation page",
  helpHeading: "How MyFence.com helps Highlands homeowners",
  helpCards: [
    {
      icon: "shield",
      title: "ARC package prep",
      body: "Drawings and material specs ready to attach to your Fence Installation Notification—no separate HOA paperwork fee.",
    },
    {
      icon: "mapPin",
      title: "Hillside engineering",
      body: "Custom panels that follow grade changes while staying structurally sound and visually clean.",
    },
    {
      icon: "file",
      title: "Guideline-matched builds",
      body: "Cedar, hogwire, and hybrid systems chosen to fit Highlands architectural expectations and your view priorities.",
    },
  ],
  leadFenceStyleName: "Issaquah Highlands HOA fence",
  faqHeading: "Issaquah Highlands HOA approved fencing FAQs",
  faqs: [
    {
      q: "What is Issaquah Highlands HOA approved fencing?",
      a: "It means your fence follows Highlands architectural review—typically via the Fence Installation Notification and ARC Guidelines—with written clearance before install, and a design suited to hillside lots and neighborhood character.",
    },
    {
      q: "What forms does the Highlands require for a new fence?",
      a: "Most homeowners use the Fence Installation Notification before work starts and consult the ARC Guidelines for design standards. Both PDFs are available on this page.",
    },
    {
      q: "Where do I submit Highlands fence documents?",
      a: "Submit through the Issaquah Highlands architectural review process (issaquahhighlands.com). We prepare supporting drawings and samples for your packet.",
    },
    {
      q: "Do I need approval before installation?",
      a: "Yes. Do not start construction until you have written clearance. We schedule Highlands installs after approval.",
    },
  ],
  schemaFaqs: [
    {
      question: "What is Issaquah Highlands HOA approved fencing?",
      answer:
        "Issaquah Highlands HOA approved fencing means your project follows community architectural review, typically using the Fence Installation Notification and ARC Guidelines, with written clearance before installation. MyFence.com hosts both PDFs and prepares hillside-ready packages.",
    },
    {
      question: "What forms does Issaquah Highlands require for a new fence?",
      answer:
        "Most homeowners need the Issaquah Highlands Fence Installation Notification before work begins and should review the ARC Guidelines for design standards. Both documents are available for download on this page.",
    },
    {
      question: "Where do I submit Issaquah Highlands fence documents?",
      answer:
        "Submit through the Issaquah Highlands architectural review process described on issaquahhighlands.com. MyFence.com prepares drawings, material lists, and color samples for your packet.",
    },
    {
      question: "Do I need ARC approval before MyFence installs in Issaquah Highlands?",
      answer:
        "Yes. Do not begin construction until you have written clearance. We prepare the submission package and schedule install after approval.",
    },
  ],
  ctaHeading: "Ready for Issaquah Highlands HOA approved fencing?",
  ctaBody:
    "Download the forms above, or let us handle the ARC package and hillside build. Free on-site estimates in the Highlands.",
};
