import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

// Sources: Timberline Ridge HOA public website (https://timberlineridge.org/architectural-control). No contact details published.
const config: SammamishHoaNeighborhoodConfig = {
  slug: "timberline-ridge",
  name: "Timberline Ridge",
  hoaName: "Timberline Ridge HOA",
  metaTitle: "Timberline Ridge Fence Installation | Sammamish | MyFence",
  metaDescription: "Fence installation in Timberline Ridge, Sammamish. Timberline Ridge HOA fence rules, the 6 ft standard-style wood fence, and we handle the ACC application. Free quotes. (253) 455-1885.",
  heroIntro: "Wood fencing for Timberline Ridge homes built to match the neighborhood's original standard-style fence. MyFence handles the Architectural Control Committee application for you.",
  aboutParagraphs: [
    "Timberline Ridge is a north Sammamish neighborhood with its own homeowners association. Its streets include Wisteria Court, Trillium Point, Magnolia Circle, Magnolia Lane, Arbor Circle, Laurel Park and the courts off NE 32nd and NE 33rd, with common landscaped and natural areas maintained by the association.",
    "Because the association's covenants ask every fence to match the original developer's fence, most Timberline Ridge fence work is a replacement or extension that has to look like the existing neighborhood fence line and be cleared by the ACC first.",
  ],
  hoaSummary: "The Timberline Ridge HOA's Architectural Control Committee (ACC) reviews fence projects. Its website asks homeowners to submit the online ACC request before starting any fence work, and says skipping ACC approval may result in a fine under the association's rules.",
  hoaBullets: [
    "Same color and design as the original developer's fences unless the ACC approves otherwise",
    "Standard style looks identical on both sides, 6 ft tall",
    "Wood fences get a clear stain, not painted to match the house",
    "No chain link except for sport courts",
    "Magnolia residents may also use black Ameristar Montage alloy fencing",
  ],
  considerations: [
    {
      title: "Matching the standard fence",
      body: "The association's site shows a standard-style fence that looks the same from both sides at 6 feet. We build replacements and extensions to that look so the new run blends with your neighbors' fences.",
    },
    {
      title: "Shared fences with neighbors",
      body: "The HOA says it has no policy on how neighbors split the cost of a shared fence; that is up to the owners involved. We can quote the shared run and work with both households.",
    },
    {
      title: "City permits come first",
      body: "Timberline Ridge's ACC asks homeowners to confirm they have any needed City of Sammamish permits before it approves a project. Sammamish's handout shows 6 feet in side and rear yards and 4 feet in front yards; we check the city rules for your lot.",
    },
  ],
  faqs: [
    {
      question: "Do I need HOA approval for a fence in Timberline Ridge?",
      answer: "Yes. The Timberline Ridge HOA asks homeowners to submit the ACC's online request form before starting any fence work. MyFence prepares and submits the request for you.",
    },
    {
      question: "What fence can I build in Timberline Ridge?",
      answer: "The covenants say fences should match the color and design of the original developer's fences unless the ACC approves otherwise. The HOA's site describes a 6 ft standard style that looks identical on both sides, clear-stained wood, and no chain link except for sport courts. See our Timberline Ridge HOA fencing guide for details.",
    },
  ],
  nearby: [
    { label: "Sahalee", href: "/service-areas/sammamish/sahalee" },
    { label: "Inglewood", href: "/service-areas/sammamish/inglewood" },
    { label: "Autumn Wind", href: "/service-areas/sammamish/autumn-wind" },
    { label: "Summer Ridge", href: "/service-areas/sammamish/summer-ridge" },
  ],
};

const TimberlineRidgePage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default TimberlineRidgePage;
