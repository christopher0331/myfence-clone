import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

// Sources: Meridian Valley Maintenance Association public pages and documents:
// https://www.meridianvalleyhoa.com/ and https://www.meridianvalleyhoa.com/reference-documents.html. No contact details published.
const config: SammamishHoaNeighborhoodConfig = {
  slug: "meridian-valley",
  name: "Meridian Valley",
  city: "Kent",
  citySlug: "kent",
  hoaName: "Meridian Valley Maintenance Association",
  metaTitle: "Meridian Valley Fence Installation | Kent | MyFence",
  metaDescription: "Fencing in Meridian Valley, Kent. The Meridian Valley Maintenance Association allows fences only to enclose a swimming pool; walls and hedges need committee approval. We handle the HOA application. Free quotes. (253) 455-1885.",
  heroIntro: "Meridian Valley is a golf-course community with strict covenants on fences. We explain what the Meridian Valley Maintenance Association allows and handle the Architectural Committee application for projects that fit the rules.",
  aboutParagraphs: [
    "The Meridian Valley Maintenance Association describes the community as created from farmland in the mid-1960s, with 384 single-family homes and 42 condominium homes around an 18-hole golf course. The Meridian Valley Country Club golf course is a separate entity from the association.",
    "The association sets architectural standards for the community, and its covenants are stricter on fences than most Kent neighborhoods. Its Declaration of Restrictions says fences shall not be permitted, and its current Architectural Guide allows fences only to enclose a swimming pool. That means most Meridian Valley projects we can help with are pool enclosures, and everything starts with the Architectural Committee.",
  ],
  hoaSummary: "The Meridian Valley Maintenance Association's Architectural Committee approves exterior work and landscaping before it starts. Its published documents rule out most fences.",
  hoaBullets: [
    "Fences are not permitted (Declaration of Restrictions, Article VII, Section 4)",
    "Only fences that enclose a swimming pool are allowed (Architectural Guide, updated Aug. 13, 2025)",
    "Pool fence lines must stay within setback requirements",
    "Walls, hedges and retaining walls only where the Architectural Committee approves",
    "Apply with the association's Application for Architectural and Landscaping Improvement",
  ],
  considerations: [
    {
      title: "Patio and dog-run fences were removed",
      body: "The August 13, 2025 revision of the Architectural Guide changed the fence rule from allowing patio, dog-run and pool fences to allowing pool fences only. If you are thinking of a dog run, check with the Architectural Committee before you plan anything.",
    },
    {
      title: "Golf-course lots",
      body: "The Declaration of Restrictions sets a 30-foot setback for buildings and structures from the edge of the golf course. The Architectural Committee approves the setback for each lot, so we design any pool enclosure around the setback the committee gives you.",
    },
    {
      title: "Contractor hours",
      body: "The association's FAQ says contractors may work Monday through Saturday, 7:00 am to 7:00 pm, with no Sunday work except emergencies. We schedule inside those hours.",
    },
  ],
  faqs: [
    {
      question: "Can I build a fence in Meridian Valley?",
      answer: "Only in limited cases. The association's Declaration of Restrictions says fences shall not be permitted, and its Architectural Guide, updated August 13, 2025, allows fences only to enclose a swimming pool. Walls, hedges and retaining walls need Architectural Committee approval. See our Meridian Valley HOA fence rules guide for the sources.",
    },
    {
      question: "Does MyFence handle the Meridian Valley HOA application?",
      answer: "Yes. For a project the rules allow, such as a pool enclosure, MyFence prepares the drawings and material details the Architectural Committee form asks for and handles the application, then builds only after approval.",
    },
  ],
  nearby: [
    { label: "East Hill", href: "/service-areas/kent/east-hill" },
    { label: "Panther Lake", href: "/service-areas/kent/panther-lake" },
    { label: "Kent", href: "/service-areas/kent" },
  ],
};

const MeridianValleyPage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default MeridianValleyPage;
