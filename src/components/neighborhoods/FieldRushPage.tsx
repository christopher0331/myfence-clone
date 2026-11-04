import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

// Sources: Field Rush Homeowner's Association public website: https://www.fieldrushhoa.com/ and
// https://www.fieldrushhoa.com/architectural. No contact details published.
const config: SammamishHoaNeighborhoodConfig = {
  slug: "field-rush",
  name: "Field Rush",
  hoaName: "Field Rush Homeowner's Association",
  metaTitle: "Field Rush Fence Installation | Sammamish | MyFence",
  metaDescription: "Fence installation in Field Rush, Sammamish. Field Rush HOA Architectural Committee approval for new fences, repairs exempt, and we handle the HOA application. Free quotes. (253) 455-1885.",
  heroIntro: "Wood fencing for Field Rush homes that fits the HOA's look. MyFence handles the Architectural Committee request for you.",
  aboutParagraphs: [
    "Field Rush is a Sammamish neighborhood with its own homeowner's association, run by a volunteer board and Architectural Committee that publish their approval process on the association's public website.",
    "The committee's goal is a well-kept, consistent look across the neighborhood, with most attention on front and side yards and anything visible from the street or a neighbor's lot. New fences and fence design changes go to the committee first.",
  ],
  hoaSummary: "The Field Rush Homeowner's Association's Architectural Committee pre-approves new fences and fence design changes. Repairs and regular maintenance are exempt, and the committee asks homeowners to reach out four weeks before the project date.",
  hoaBullets: [
    "New fences and fence design changes need Architectural Committee pre-approval",
    "Repairs to existing fences and regular maintenance do not need approval",
    "Reach out four weeks before your project date",
    "HOA approval does not replace city or county approval",
  ],
  considerations: [
    {
      title: "Replacing vs. redesigning",
      body: "Per the association's site, repairing an existing fence does not need approval, but a new fence or a design change does. If your replacement changes the style, we treat it as a design change and prepare the request.",
    },
    {
      title: "Neighbors and privacy",
      body: "The association suggests talking to neighbors when a change affects their privacy or overlaps their property. We can quote a shared run and work with both households.",
    },
    {
      title: "City rules still apply",
      body: "The HOA notes its approval is not a seal of approval from the city or county. We check City of Sammamish fence rules for your lot before we build.",
    },
  ],
  faqs: [
    {
      question: "Do I need HOA approval for a fence in Field Rush?",
      answer: "For a new fence or a design change, yes. The association's Architectural Committee page says repairs to existing fences and regular maintenance do not need approval. MyFence prepares the request for you.",
    },
    {
      question: "What fence can I build in Field Rush?",
      answer: "The association's public site does not publish fence heights, materials or colors. For those details, check with the association's Architectural Committee. See our Field Rush HOA fencing guide for the approval steps.",
    },
  ],
  nearby: [
    { label: "Pine Lake", href: "/service-areas/sammamish/pine-lake" },
    { label: "Beaver Lake", href: "/service-areas/sammamish/beaver-lake" },
    { label: "Trossachs", href: "/service-areas/sammamish/trossachs" },
    { label: "Klahanie", href: "/service-areas/sammamish/klahanie" },
  ],
};

const FieldRushPage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default FieldRushPage;
