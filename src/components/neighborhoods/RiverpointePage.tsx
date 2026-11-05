import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

// Official Riverpointe association portals (myhoa-online.com / riverpointeauburn.org)
// no longer resolve with a working page. Soften claims; no unverified links.
const config: SammamishHoaNeighborhoodConfig = {
  slug: "riverpointe",
  name: "Riverpointe",
  city: "Auburn",
  citySlug: "auburn",
  hoaName: "Riverpointe Homeowners Association",
  metaTitle: "Riverpointe Fence Installation | Auburn | MyFence",
  metaDescription:
    "Fence installation in Riverpointe, Auburn. Confirm current Riverpointe ACC fence rules in writing. MyFence handles the ACC request. Free quotes. (253) 455-1885.",
  heroIntro:
    "Wood fencing for Riverpointe homes, planned around what the homeowners association's Architectural Control Committee confirms in writing. MyFence handles the ACC request for you.",
  aboutParagraphs: [
    "Riverpointe is an Auburn neighborhood governed by the Riverpointe Homeowners Association. Public association guideline pages that once listed fence rules are no longer available online, so homeowners should confirm current materials, height, gate, and stain rules with the ACC before they design.",
    "Most Riverpointe fence jobs are matching wood replacements on shared lot lines. Agree with neighbors on style and finish, get ACC approval in writing, and check City of Auburn limits for your lot before work begins.",
  ],
  hoaSummary:
    "The Riverpointe HOA's Board or Architectural Control Committee (ACC) reviews fences. Confirm the current request process, lead time, and design rules with the ACC in writing before you build. MyFence prepares the request for you.",
  hoaBullets: [
    "Confirm allowed materials, height, gates, and stain colors with the ACC",
    "Ask whether front-yard fences or chain link are allowed",
    "Confirm repair-versus-replacement rules before you start",
    "Get written ACC approval before a new or replacement fence",
    "Check City of Auburn approvals separately from the association",
  ],
  considerations: [
    {
      title: "Matching your neighbors",
      body: "Shared lot-line fences often need both households to agree on style and finish so the run matches. Confirm any match requirement with the ACC, and we can quote the shared section for both households.",
    },
    {
      title: "Repair or replacement",
      body: "Ask the ACC how it treats repairs versus full replacements. We'll tell you honestly which scope your fence needs, then follow the association's current process.",
    },
    {
      title: "City approval too",
      body: "Association approval does not replace City of Auburn fence rules. We check the city limits for your lot as part of the design.",
    },
  ],
  faqs: [
    {
      question: "Do I need HOA approval for a fence in Riverpointe?",
      answer:
        "Usually yes for a new or replacement fence. Confirm the current lead time and submission process with the Riverpointe ACC, and do not start until you have written approval. MyFence prepares the ACC request for you.",
    },
    {
      question: "What fence can I build in Riverpointe?",
      answer:
        "Ask the Riverpointe ACC for the current materials, height, gate, and stain rules. Older public association pages are offline, so do not design from memory. See our Riverpointe HOA fencing guide for the checklist we use with homeowners.",
    },
  ],
  nearby: [
    { label: "Lakeland Hills", href: "/service-areas/auburn/lakeland-hills" },
    { label: "Kent", href: "/service-areas/kent" },
    { label: "Federal Way", href: "/service-areas/federal-way" },
  ],
};

const RiverpointePage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default RiverpointePage;
