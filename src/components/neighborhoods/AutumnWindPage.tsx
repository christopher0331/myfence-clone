import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

const config: SammamishHoaNeighborhoodConfig = {
  "slug": "autumn-wind",
  "name": "Autumn Wind",
  "hoaName": "Autumn Wind HOA",
  "metaTitle": "Autumn Wind Fence Installation | Sammamish | MyFence",
  "metaDescription": "Fence installation in Autumn Wind, Sammamish. Autumn Wind HOA fence rules, HOA-ready cedar fencing, and we handle the HOA application. Free quotes. (253) 455-1885.",
  "heroIntro": "Cedar and wood-look fencing for Autumn Wind's 71 homes off 232nd Avenue NE, designed to the association's published fence guidelines. MyFence handles the ACC application for you.",
  "aboutParagraphs": [
    "Autumn Wind is a 71-home neighborhood in central Sammamish, north-east of Sammamish Commons and Thompson Hill, with homes on NE 14th Court, NE 15th Court and 232nd Avenue NE. Its own homeowners association runs architectural review, and its south boundary fence runs along NE 14th Street.",
    "Most Autumn Wind lots are tree-lined plateau yards with 1980s–1990s homes, so fence work is usually a replacement of an aging cedar run that has to tie into the neighbors' fences and match the association's rules."
  ],
  "hoaSummary": "The Autumn Wind HOA publishes Neighborhood Fencing Guidelines. No fence may be installed, replaced or updated without prior written approval from the Architectural Control Committee (ACC).",
  "hoaBullets": [
    "Cedar, pressure-treated wood, or wood-look composite",
    "Wood stockade or board-on-board style",
    "5 ft minimum to 6 ft maximum height",
    "No front-yard fences; no chain link, metal, or wire",
    "Board-recommended color on the South Boundary Fence lots"
  ],
  "considerations": [
    {
      "title": "The South Boundary Fence",
      "body": "Lots that back onto NE 14th Street (lots 1, 5–9, 63–68 and 71) share the South Boundary Fence, which has a board-recommended exterior color. We match it so the street side stays uniform."
    },
    {
      "title": "Tying into neighboring fences",
      "body": "The guidelines ask new fences to connect to existing neighboring fences and stay on your lot. We confirm pins and plan the tie-in points before we submit the ACC request."
    },
    {
      "title": "City rules",
      "body": "Sammamish's handout shows 6 feet in side and rear yards and 4 feet in front yards, and fences six feet or under generally do not need a city permit outside critical areas and shoreline setbacks. The HOA's approval is a separate step."
    }
  ],
  "faqs": [
    {
      "question": "Do I need HOA approval for a fence in Autumn Wind?",
      "answer": "Yes. Autumn Wind's fencing guidelines require prior written ACC approval to install, replace or update any fence. MyFence prepares and submits the request for you."
    },
    {
      "question": "What fence can I build in Autumn Wind?",
      "answer": "Cedar, pressure-treated wood or wood-look composite in a stockade or board-on-board style, 5 to 6 feet tall, kept out of front yards. See our Autumn Wind HOA fencing guide for the full rules and forms."
    }
  ],
  "nearby": [
    {
      "label": "Cimarron",
      "href": "/service-areas/sammamish/cimarron"
    },
    {
      "label": "Inglewood",
      "href": "/service-areas/sammamish/inglewood"
    },
    {
      "label": "Pine Lake",
      "href": "/service-areas/sammamish/pine-lake"
    },
    {
      "label": "Summer Ridge",
      "href": "/service-areas/sammamish/summer-ridge"
    }
  ]
};

const AutumnWindPage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default AutumnWindPage;
