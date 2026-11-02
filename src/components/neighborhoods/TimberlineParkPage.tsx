import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

// Sources: Timberline Park Association of Lot Owners public website and CC&Rs (Revised May 2019):
// https://timberlinepark.org/ and https://timberlinepark.org/sites/default/files/2024-04/CCRs.pdf. No contact details published.
const config: SammamishHoaNeighborhoodConfig = {
  slug: "timberline-park",
  name: "Timberline Park",
  hoaName: "Timberline Park Association of Lot Owners",
  metaTitle: "Timberline Park Fence Installation | Sammamish | MyFence",
  metaDescription: "Fence installation in Timberline Park, Sammamish. Timberline Park lot owners association fence rules, no chain link, matching replacements, and we handle the ACC request. Free quotes. (253) 455-1885.",
  heroIntro: "Wood fencing for Timberline Park homes that meets the lot owners association's covenants. MyFence handles the Architectural Control Committee request for you.",
  aboutParagraphs: [
    "Timberline Park is a Sammamish plat governed by the Timberline Park Association of Lot Owners, which publishes its covenants, bylaws and Architectural Control Committee request form on its public website.",
    "The covenants put every new fence, wall or change in design in front of the Architectural Control Committee, and ask that repaired or replaced fences keep the same design appearance as the original. That makes most Timberline Park fence jobs a matching replacement that needs committee sign-off before work begins.",
  ],
  hoaSummary: "The Timberline Park Association of Lot Owners' Architectural Control Committee (ACC) reviews fence projects. Its published CC&Rs require written committee approval before any fence is built, and its ACC request form asks for plans at least 30 days before the start date.",
  hoaBullets: [
    "Fences along lot lines are allowed, subject to ACC approval",
    "No barbed wire, chain link or corrugated fiberglass fences",
    "Repaired or replaced fences keep the original design appearance",
    "No fences in road right-of-ways or easements unless the ACC deems it appropriate",
    "Plans go to the ACC at least 30 days before the start date",
  ],
  considerations: [
    {
      title: "Matching replacements",
      body: "The CC&Rs say repaired or replaced fences shall maintain the same design appearance as the original fence. If every affected owner wants a new look, the change still needs ACC approval. We build replacement runs to match.",
    },
    {
      title: "Shared fences with neighbors",
      body: "Under the CC&Rs, the cost of repairing and maintaining a fence between two or more lots is settled by the lot owners affected. We can quote the shared run and work with both households.",
    },
    {
      title: "Easements and protected tracts",
      body: "The covenants note that fences on lot lines may need to come out if a utility easement is used, and they bar fences inside the plat's Native Growth Protection tracts. We confirm your lot lines and easements before we design. Sammamish's handout shows 6 feet in side and rear yards and 4 feet in front yards; we check the city rules for your lot.",
    },
  ],
  faqs: [
    {
      question: "Do I need HOA approval for a fence in Timberline Park?",
      answer: "Yes. The Timberline Park CC&Rs say no fence may be built until plans showing its height, materials and location are approved in writing by the Architectural Control Committee. MyFence prepares the ACC request for you.",
    },
    {
      question: "What fence can I build in Timberline Park?",
      answer: "The CC&Rs ban barbed wire, chain link and corrugated fiberglass fences, ask that replacements keep the original design appearance, and say all fences must meet the committee's standards. For anything the documents don't spell out, such as height or color, check with the association's architectural committee. See our Timberline Park HOA fencing guide for details.",
    },
  ],
  nearby: [
    { label: "Timberline Ridge", href: "/service-areas/sammamish/timberline-ridge" },
    { label: "Sahalee", href: "/service-areas/sammamish/sahalee" },
    { label: "Inglewood", href: "/service-areas/sammamish/inglewood" },
    { label: "Autumn Wind", href: "/service-areas/sammamish/autumn-wind" },
  ],
};

const TimberlineParkPage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default TimberlineParkPage;
