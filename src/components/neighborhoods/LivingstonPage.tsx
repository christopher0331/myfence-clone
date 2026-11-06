import SammamishHoaNeighborhoodPage, {
  type SammamishHoaNeighborhoodConfig,
} from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

// Sources: Livingston HOA public website and ACC PDFs only.
// Never publish HOA emails, phones, or mailing addresses.
const config: SammamishHoaNeighborhoodConfig = {
  slug: "livingston",
  name: "Livingston",
  hoaName: "Livingston Homeowners' Association",
  metaTitle: "Livingston Fence Installation | Sammamish | MyFence",
  metaDescription:
    "Fence installation in Livingston, Sammamish. ACC guidelines call for vertical cedar up to 6 feet. MyFence handles the HOA application. Free quotes. (253) 455-1885.",
  heroIntro:
    "Vertical cedar fencing for Livingston's 88 Buchan-built homes, planned around the association's published ACC fence standard. MyFence handles the ACC request for you.",
  aboutParagraphs: [
    "Livingston is an 88-home Sammamish subdivision designed and built by William E. Buchan, Inc. The Livingston Homeowners' Association publishes its Architectural Control Committee guidelines, Review Request Form, CC&Rs, and the Summerwood plat map on its public website.",
    "Most Livingston fence jobs are matching wood replacements on shared lot lines. The ACC's published standard is vertical cedar up to 6 feet with a semi-transparent stain — not plastic, chain link, wrought iron, split rail, stone, or opaque paint.",
  ],
  hoaSummary:
    "The Livingston ACC General Guidelines (Rev 11.11.24) allow cedar, vertical fences up to 6 feet with a semi-transparent stain, and list chain link, wrought iron, plastic, split rail, stone, and painted cedar as not acceptable. New and replacement fences need the Architectural Review Request Form before work starts.",
  hoaBullets: [
    "Cedar, vertical, 6-foot maximum height",
    "Semi-transparent stain allowed; opaque painted cedar not acceptable",
    "Not acceptable: chain link, wrought iron, plastic, split rail, stone",
    "Architectural Review Request Form required (no ACC fee)",
    "Allow at least 14 days for ACC review and Board final action",
  ],
  considerations: [
    {
      title: "One published cedar standard",
      body: "Because the ACC publishes a vertical-cedar standard and bans plastic and several other materials, we design every Livingston fence to that cedar spec and a semi-transparent stain the association will review.",
    },
    {
      title: "Shared lot lines",
      body: "A fence on a shared line affects both households. We can quote the shared run and help both owners match height and finish before the ACC packet goes in.",
    },
    {
      title: "City rules are separate",
      body: "Sammamish's handout shows 6 feet in side and rear yards and 4 feet in front yards, and fences six feet or under generally do not need a city permit outside critical areas and shoreline setbacks. Association approval is a separate step.",
    },
  ],
  faqs: [
    {
      question: "What fence does Livingston allow?",
      answer:
        "The ACC General Guidelines allow cedar, vertical fencing up to 6 feet with a semi-transparent stain. Chain link, wrought iron, plastic, split rail, stone, and painted cedar are not acceptable. See our Livingston HOA fencing guide for the forms and steps.",
    },
    {
      question: "Do I need ACC approval in Livingston?",
      answer:
        "Yes. The association says the Architectural Review Request Form is mandatory for new and replacement fences, with no fee, and asks owners to allow at least 14 days for ACC review and Board final action. MyFence prepares and handles the application for you.",
    },
  ],
  nearby: [
    { label: "Heritage Hills", href: "/service-areas/sammamish/heritage-hills" },
    { label: "Summer Ridge", href: "/service-areas/sammamish/summer-ridge" },
    { label: "Cimarron", href: "/service-areas/sammamish/cimarron" },
    { label: "Inglewood", href: "/service-areas/sammamish/inglewood" },
  ],
};

const LivingstonPage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default LivingstonPage;
