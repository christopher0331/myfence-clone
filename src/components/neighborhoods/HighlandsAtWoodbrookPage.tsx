import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

// Sources: Highlands at Woodbrook Community Organization public website:
// https://highlandsatwoodbrook.com/ and https://highlandsatwoodbrook.com/governing-documents/. No contact details published.
const config: SammamishHoaNeighborhoodConfig = {
  slug: "highlands-at-woodbrook",
  name: "Highlands at Woodbrook",
  city: "Auburn",
  citySlug: "auburn",
  hoaName: "Highlands at Woodbrook Community Organization",
  metaTitle: "Highlands at Woodbrook Fence Installation | Auburn | MyFence",
  metaDescription: "Fence installation in the Highlands at Woodbrook, Auburn. The community organization's Architectural Control Committee reviews exterior improvements, and we handle the HOA application. Free quotes. (253) 455-1885.",
  heroIntro: "Wood fencing for Highlands at Woodbrook homes, planned around the community organization's governing documents. MyFence handles the homeowner improvement application for you.",
  aboutParagraphs: [
    "The Highlands at Woodbrook is a neighborhood of 56 homes governed by the Highlands at Woodbrook Community Organization, which publishes its rules and regulations, recorded covenants and a Homeowner Improvement Application Form on its public website.",
    "The organization's rules and regulations cover the process for making exterior changes or improvements to your property, and its recorded declaration sets up an Architectural Control Committee and covers alterations and general appearance. Plan on committee review before a new or replacement fence goes in.",
  ],
  hoaSummary: "The Highlands at Woodbrook Community Organization's Architectural Control Committee is established by its recorded Declaration of Protective Covenants. The organization's Rules and Regulations (effective July 1, 2022) set out the process for exterior changes or improvements, using its Homeowner Improvement Application Form.",
  hoaBullets: [
    "Exterior changes or improvements follow the process in the Rules and Regulations",
    "The organization publishes a Homeowner Improvement Application Form",
    "The recorded declaration covers alteration and general appearance, and landscaping",
    "Fence height, material and color specifics: check with the Architectural Control Committee",
  ],
  considerations: [
    {
      title: "Start with the application",
      body: "The organization's governing documents page links its Rules and Regulations and the Homeowner Improvement Application Form. We prepare the fence plan and material details so the application is complete when you submit it.",
    },
    {
      title: "Rules we can't confirm publicly",
      body: "The organization's public summary doesn't list fence heights, materials or colors. Before we design, confirm those details with the Architectural Control Committee, and we'll build to what they approve.",
    },
    {
      title: "Shared fences with neighbors",
      body: "A fence on a shared lot line affects both households. We can quote the shared run and work with you and your neighbor on one plan.",
    },
  ],
  faqs: [
    {
      question: "Do I need HOA approval for a fence in the Highlands at Woodbrook?",
      answer: "The community organization's Rules and Regulations include the process for making exterior changes or improvements, and it publishes a Homeowner Improvement Application Form. Check with the Architectural Control Committee before you build. MyFence prepares the application for you.",
    },
    {
      question: "What fence can I build in the Highlands at Woodbrook?",
      answer: "The organization's public summary of its governing documents doesn't spell out fence height, material or color, so check with the Architectural Control Committee. See our Highlands at Woodbrook HOA fencing guide for the organization's documents and forms.",
    },
  ],
  nearby: [
    { label: "Lakeland Hills", href: "/service-areas/auburn/lakeland-hills" },
    { label: "Kent", href: "/service-areas/kent" },
    { label: "Federal Way", href: "/service-areas/federal-way" },
  ],
};

const HighlandsAtWoodbrookPage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default HighlandsAtWoodbrookPage;
