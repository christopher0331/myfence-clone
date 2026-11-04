import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

// Sources: Riverpointe HOA public pages on MyHOA-online:
// https://myhoa-online.com/article/fence_guidelines and https://myhoa-online.com/Article/rulesandregs?act=36. No contact details published.
const config: SammamishHoaNeighborhoodConfig = {
  slug: "riverpointe",
  name: "Riverpointe",
  city: "Auburn",
  citySlug: "auburn",
  hoaName: "Riverpointe Homeowners Association",
  metaTitle: "Riverpointe Fence Installation | Auburn | MyFence",
  metaDescription: "Fence installation in Riverpointe, Auburn. Riverpointe HOA fence guidelines: wood only, 6 ft max, arched gates, preapproved stains, and we handle the ACC request. Free quotes. (253) 455-1885.",
  heroIntro: "Wood fencing for Riverpointe homes built to the homeowners association's published fence guidelines. MyFence handles the Architectural Control Committee request for you.",
  aboutParagraphs: [
    "Riverpointe is an Auburn neighborhood governed by the Riverpointe Homeowners Association, which publishes its rules and regulations and a dedicated fence guidelines page.",
    "The association's goal is a matching look across the community: its guidelines say all fences should match, and older fences that don't match the current examples must be brought up to the guidelines when they are rebuilt. That makes most Riverpointe fence jobs a matching wood replacement that needs approval before work begins.",
  ],
  hoaSummary: "The Riverpointe HOA's Board or Architectural Control Committee (ACC) approves fences. Its published rules require a written request at least 30 days before installation, and work may not start until written approval is received.",
  hoaBullets: [
    "Wood is the only approved fence material; no chain link",
    "Fences cannot exceed 6 feet; front yard fences are prohibited",
    "Gates must be arched and boards no wider than 4 inches",
    "Preapproved stain colors are SW 3505 and SW 3507",
    "Replacements need an ACC request; repairs of 20% or less of the fence do not",
  ],
  considerations: [
    {
      title: "Matching your neighbors",
      body: "The guidelines say adjoining fences should be stained to match, and in some cases you may need to work with your neighbor to replace a whole run so it all matches. We can quote the shared section and work with both households.",
    },
    {
      title: "Repair or replacement",
      body: "The association treats work on 20% or less of the total fence as a repair, which doesn't need an ACC request. More than that is a replacement, which does. We'll tell you honestly which one your fence needs.",
    },
    {
      title: "City approval too",
      body: "Riverpointe's rules say owners must also get any required City of Auburn approvals before installing a new fence. We check the city rules for your lot as part of the design.",
    },
  ],
  faqs: [
    {
      question: "Do I need HOA approval for a fence in Riverpointe?",
      answer: "Yes, for a new or replacement fence. Riverpointe's rules say a written request must reach the Board 30 days before installation, and work may not start until written approval is received. A repair covering 20% or less of the fence does not need an ACC request. MyFence prepares the ACC request for you.",
    },
    {
      question: "What fence can I build in Riverpointe?",
      answer: "The published guidelines allow wood fences only, up to 6 feet tall, with boards no wider than 4 inches, arched gates, and SW 3505 or SW 3507 stain. Chain link and front yard fences are not allowed. See our Riverpointe HOA fencing guide for details.",
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
