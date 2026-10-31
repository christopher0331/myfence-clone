import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

const config: SammamishHoaNeighborhoodConfig = {
  "slug": "summer-ridge",
  "name": "Summer Ridge",
  "hoaName": "Summer Ridge HOA",
  "metaTitle": "Summer Ridge Fence Installation | Sammamish | MyFence",
  "metaDescription": "Fence installation in Summer Ridge, Sammamish. Summer Ridge HOA fence rules, HOA-ready cedar fencing, and we handle the HOA application. Free quotes. (253) 455-1885.",
  "heroIntro": "Six-foot vertical cedar fencing for Summer Ridge's 356 homes off NE 25th Way, built to the HOA's fencing standard. MyFence handles the ACC request for you.",
  "aboutParagraphs": [
    "Summer Ridge is a 356-home Sammamish community in seven divisions, built by the Lozier Group from the early 1980s through 1994. It sits on the north plateau off NE 25th Way and 228th Avenue NE, around 233rd–240th Avenues NE and NE 24th–29th Streets, next to Heritage Hills, with a private 2.5-acre park on NE 25th Way.",
    "Its own homeowners association, managed by Associa EMB, runs architectural review through TownSQ and publishes a single fencing standard."
  ],
  "hoaSummary": "The Summer Ridge HOA's standard is 6-foot cedar with a top rail, boards vertical, finished in a clear, tan or light-brown stain, with no exceptions. Fences stay out of front yards, and the ACC approves changes.",
  "hoaBullets": [
    "6 ft cedar with a top rail, boards vertical",
    "Clear, tan, or light-brown stain",
    "Behind the front plane of the house",
    "Outside the sight-distance triangle",
    "Same height as adjoining fences"
  ],
  "considerations": [
    {
      "title": "One standard for every lot",
      "body": "Because Summer Ridge allows only its cedar standard, we build every Summer Ridge fence to that spec and stain from the approved color range."
    },
    {
      "title": "Busy collector streets",
      "body": "Lots on NE 25th Way and 228th see more traffic. A solid 6 ft cedar run screens noise while staying behind the front plane of the house."
    },
    {
      "title": "City rules",
      "body": "Sammamish's handout shows 6 feet in side and rear yards and 4 feet in front yards, and fences six feet or under generally do not need a city permit outside critical areas and shoreline setbacks. The HOA's approval is a separate step."
    }
  ],
  "faqs": [
    {
      "question": "What fence does Summer Ridge allow?",
      "answer": "6-foot vertical cedar with a top rail in a clear, tan or light-brown stain, kept out of front yards. The HOA says there are no exceptions to the cedar standard."
    },
    {
      "question": "Do I need ACC approval in Summer Ridge?",
      "answer": "Yes. The ACC approves fence changes through TownSQ. MyFence prepares and submits the request for you. See our Summer Ridge HOA fencing guide for details."
    }
  ],
  "nearby": [
    {
      "label": "Heritage Hills",
      "href": "/service-areas/sammamish/heritage-hills"
    },
    {
      "label": "Cimarron",
      "href": "/service-areas/sammamish/cimarron"
    },
    {
      "label": "Autumn Wind",
      "href": "/service-areas/sammamish/autumn-wind"
    },
    {
      "label": "Inglewood",
      "href": "/service-areas/sammamish/inglewood"
    }
  ]
};

const SummerRidgePage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default SummerRidgePage;
