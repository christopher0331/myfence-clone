import SammamishHoaNeighborhoodPage, { type SammamishHoaNeighborhoodConfig } from "@/components/neighborhoods/SammamishHoaNeighborhoodPage";

const config: SammamishHoaNeighborhoodConfig = {
  "slug": "cimarron",
  "name": "Cimarron",
  "hoaName": "Cimarron HOA",
  "metaTitle": "Cimarron Fence Installation | Sammamish | MyFence",
  "metaDescription": "Fence installation in Cimarron, Sammamish. Cimarron HOA fence rules, HOA-ready cedar fencing, and we handle the HOA application. Free quotes. (253) 455-1885.",
  "heroIntro": "Fencing for Cimarron's 105 homes near the Sammamish city center, with greenbelt-edge lots and board-approved designs. MyFence handles the architectural request for you.",
  "aboutParagraphs": [
    "Cimarron is one of central Sammamish's original mid-1980s developments, a 105-home neighborhood just east of 228th Avenue NE around NE 14th Street, within walking distance of schools, the library and Sammamish Commons. Large lots back onto protected greenbelts, and the neighborhood has a private park with a playground and picnic shelter.",
    "Its homeowners association, run by a volunteer board, reviews changes to the outside of the house, including fence replacement."
  ],
  "hoaSummary": "The Cimarron HOA's Architecture page says its CC&Rs require board approval for exterior changes and names fence replacement. Requests go in through PayHOA with drawings, color samples or brochures.",
  "hoaBullets": [
    "Board approval before fence replacement",
    "Architectural Request Form with drawings",
    "Stain or paint color samples",
    "Height and material confirmed with the board"
  ],
  "considerations": [
    {
      "title": "Greenbelt-edge lots",
      "body": "Many Cimarron lots back onto protected greenbelt. We confirm the property line so the fence stays on your lot and out of the buffer, and use hogwire where you want to keep the view."
    },
    {
      "title": "Deer and wildlife",
      "body": "The greenbelts carry deer and other wildlife. Tight panel spacing and no ground gaps keep gardens and pets protected."
    },
    {
      "title": "City rules",
      "body": "Sammamish's handout shows 6 feet in side and rear yards and 4 feet in front yards, and fences six feet or under generally do not need a city permit outside critical areas and shoreline setbacks. The HOA's approval is a separate step."
    }
  ],
  "faqs": [
    {
      "question": "Do I need HOA approval to replace a fence in Cimarron?",
      "answer": "Yes. The Cimarron HOA says its CC&Rs require board approval for exterior changes, including fence replacement. MyFence prepares the Architectural Request Form package for you."
    },
    {
      "question": "Does Cimarron publish fence heights or materials?",
      "answer": "Its public pages do not list heights or materials, so we confirm them with the board before design. See our Cimarron HOA fencing guide for the form and steps."
    }
  ],
  "nearby": [
    {
      "label": "Autumn Wind",
      "href": "/service-areas/sammamish/autumn-wind"
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
      "label": "Heritage Hills",
      "href": "/service-areas/sammamish/heritage-hills"
    }
  ]
};

const CimarronPage = () => <SammamishHoaNeighborhoodPage config={config} />;

export default CimarronPage;
