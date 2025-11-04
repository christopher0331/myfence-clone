import ServiceAreaTemplate from "./ServiceAreaTemplate";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BellevueArticle = () => (
  <article className="space-y-8">
    <header>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        What to Know Before Building a Fence in Bellevue: Permits, Materials, and Local Tips
      </h2>
    </header>

    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Why Fence Planning Differs by City</h3>
      <p className="text-muted-foreground leading-relaxed">
        Building a fence in Bellevue isn't just about choosing the right style - it's about understanding the unique blend of factors that make this Eastside city distinct. From stringent HOA requirements in luxury communities to Washington's wet climate and Bellevue's specific municipal codes, every element demands careful consideration. The city's position between two major lakes creates microclimates that affect material longevity, while its mix of historic neighborhoods and modern developments means fence regulations can vary significantly by location. Additionally, Bellevue's steep terrain in areas like Somerset and Factoria requires specialized engineering considerations that flat-land fence installations don't face.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Permits and Property Line Requirements</h3>
      <p className="text-muted-foreground leading-relaxed">
        Before breaking ground on your fence project, understanding Bellevue's permit requirements is essential. According to the <a href="https://bellevuewa.gov/city-government/departments/development/zoning-and-land-use/zoning-requirements/fences" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">City of Bellevue Development Services</a>, you do not need a building permit unless your fence exceeds 8 feet in height, will be located within a critical area or critical area buffer, or is constructed of concrete blocks or similar materials. However, all fences must comply with <a href="https://bellevue.municipal.codes/#!/LUC/BellevueLUC2020.html%2320.20.400" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">Land Use Code 20.20.400</a> regarding height limits, setback requirements, and sight-obstruction restrictions at intersections per <a href="https://bellevue.municipal.codes/BCC/14.60.240" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">BCC 14.60.240</a> and <a href="https://bellevue.municipal.codes/BCC/14.60.241" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">BCC 14.60.241</a>.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        For residential properties, fences in required front-yard setbacks are limited to 4 feet, 6 inches in height, with exceptions for arterial streets, corner lots, or screening purposes when specific criteria are met. Fences outside the front-yard setback may exceed this height. If your property contains critical areas such as wetlands, streams, or steep slopes, or is within the Shoreline Overlay District, additional limitations apply under <a href="https://bellevue.municipal.codes/LUC/20.25E" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">LUC 20.25E</a> and <a href="https://bellevue.municipal.codes/LUC/20.25H" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">LUC 20.25H</a>. Property line considerations remain crucial - Washington State law requires building on your side of the property line, so obtaining a professional property survey before installation is recommended.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        For more detailed information on Bellevue fence requirements, consult <a href="https://bellevue.municipal.codes/#!/LUC/BellevueLUC2020.html%2320.20.400" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">LUC 20.20.400 (Fences)</a> or contact the Bellevue Development Services Land Use team at <a href="tel:425-452-4188" className="text-primary underline decoration-2 underline-offset-2">425-452-4188</a>.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Comparing Popular Materials for Bellevue's Climate</h3>
      <p className="text-muted-foreground leading-relaxed">
        Material selection in Bellevue requires balancing aesthetics, durability, and maintenance against the Pacific Northwest's relentless moisture. Western Red Cedar remains the gold standard for wood fencing. Its natural oils resist decay and insect damage while developing an attractive silver-gray patina. However, Bellevue's high-end neighborhoods increasingly favor clear-grade cedar for its superior appearance and enhanced longevity, though it commands a premium price.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Composite fencing has gained significant traction in waterfront properties near Lake Washington and Lake Sammamish. Modern composites from manufacturers like Trex and TimberTech offer excellent moisture resistance without the maintenance demands of wood, making them ideal for Bellevue's climate. While initial costs run 50-75% higher than cedar, the elimination of annual staining and longer 25-year lifespan often justify the investment for luxury properties.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Vinyl fencing provides another low-maintenance alternative, particularly popular in family-oriented neighborhoods like Factoria and Eastgate. However, quality matters significantly - cheap vinyl can become brittle in cold winters and warp in summer heat. For properties with challenging slopes or those seeking modern aesthetics, aluminum and steel offer durability with minimal maintenance, though they lack the warm, natural appearance many Bellevue HOAs prefer.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
      <Card className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">How long does fence installation take in Bellevue?</h4>
          <p className="text-muted-foreground">
            Most residential fence projects take 1-3 days depending on size and complexity. Our Fence Genius technology allows us to manufacture panels off-site, reducing installation time by 30-50% compared to traditional methods. Permit processing typically adds 2-4 weeks depending on whether HOA approval is required.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">How much does fence installation cost in Bellevue?</h4>
          <p className="text-muted-foreground">
            Get accurate, instant pricing with our <Link to="/quote" className="text-primary underline decoration-2 underline-offset-2">Virtual Quote Tool</Link>. Wood fence pricing typically ranges from $35-65 per linear foot installed depending on style, height, and materials. A standard 6-foot cedar fence averages $45-55 per foot installed. Use our online tool for a fast estimate, then we'll confirm exact pricing on-site with Fence Genius measurements - no surprise charges.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Do I need to involve my neighbors?</h4>
          <p className="text-muted-foreground">
            <a href="https://apps.leg.wa.gov/RCW/default.aspx?cite=16.60.020" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">Washington State law (RCW 16.60.020)</a> establishes clear rules for shared fence costs. If your fence is on the property line and serves as a partition between properties, your neighbor may be required to pay half the cost. We recommend discussing plans early and providing professional documentation. Learn more about <Link to="/blog/fence-cost-shared-with-neighbor" className="text-primary underline decoration-2 underline-offset-2">Washington State fence cost sharing laws and best practices</Link>.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">When is the best time to install a fence in Bellevue?</h4>
          <p className="text-muted-foreground">
            Late spring through early fall (May-September) offers the most favorable weather conditions. However, reputable contractors work year-round, and winter installation can sometimes offer better availability and pricing. Just ensure proper concrete curing time in wet conditions.
          </p>
        </div>
      </Card>
    </section>

    <section className="bg-muted/50 p-6 rounded-lg border">
      <p className="text-sm text-muted-foreground">
        <strong>Note:</strong> Building codes and HOA regulations are subject to change. Always verify current requirements with the <a href="https://bellevuewa.gov/city-government/departments/development-services" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">City of Bellevue Development Services</a> and your homeowners association before beginning any fence project. Professional fence contractors familiar with local regulations can help streamline the permit and approval process.
      </p>
    </section>
  </article>
);

const Bellevue = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does fence installation take in Bellevue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential fence projects take 1-3 days depending on size and complexity. Our Fence Genius technology allows us to manufacture panels off-site, reducing installation time by 30-50% compared to traditional methods. Permit processing typically adds 2-4 weeks depending on whether HOA approval is required."
        }
      },
      {
        "@type": "Question",
        "name": "How much does fence installation cost in Bellevue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wood fence pricing typically ranges from $35-65 per linear foot installed depending on style, height, and materials. A standard 6-foot cedar fence averages $45-55 per foot installed. Get accurate, instant pricing with our Virtual Quote Tool for a fast estimate, then we'll confirm exact pricing on-site with Fence Genius measurements - no surprise charges."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to involve my neighbors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Washington State law (RCW 16.60.020) establishes clear rules for shared fence costs. If your fence is on the property line and serves as a partition between properties, your neighbor may be required to pay half the cost. We recommend discussing plans early and providing professional documentation."
        }
      },
      {
        "@type": "Question",
        "name": "When is the best time to install a fence in Bellevue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Late spring through early fall (May-September) offers the most favorable weather conditions. However, reputable contractors work year-round, and winter installation can sometimes offer better availability and pricing. Just ensure proper concrete curing time in wet conditions."
        }
      }
    ]
  };

  return (
    <ServiceAreaTemplate 
      city="Bellevue" 
      state="WA"
      zipCodes={["98004", "98005", "98006", "98007", "98008", "98009"]}
      neighborhoods={[
        "Downtown Bellevue",
        "Bridle Trails",
        "Somerset",
        "Crossroads",
        "Factoria",
        "Eastgate",
        "West Bellevue",
        "Wilburton",
        "Newport Hills"
      ]}
      landmarks={[
        "Bellevue Square",
        "Downtown Park",
        "Bellevue Botanical Garden",
        "Meydenbauer Bay Park",
        "Crossroads Park",
        "Kelsey Creek Park",
        "Bellevue Collection"
      ]}
      climateDescription="Bellevue's position between two major lakes creates a unique microclimate with consistently elevated humidity (averaging 75-80%) and morning fog patterns that accelerate wood decay. The city's tech-sector wealth has driven demand for architecturally distinctive homes requiring fence solutions that complement modern, Northwest Contemporary, and traditional Craftsman designs while withstanding moisture-rich conditions."
      localChallenges={[
        "Architectural review boards in neighborhoods like Medina and Clyde Hill requiring detailed design submissions and approval processes",
        "Microsoft and tech executive properties demanding contemporary horizontal slat and cable rail systems",
        "Heritage tree preservation zones requiring hand-digging and specialized installation near 100+ year old specimens",
        "Downtown proximity driving demand for sound-dampening fence solutions for traffic noise reduction",
        "Dual-lake effect creating 15-20% more moisture exposure than Seattle, accelerating untreated wood failure within 3-5 years",
        "Property values averaging $1.2M+ requiring installations that enhance rather than diminish home valuations"
      ]}
      localSolutions={[
        "Architectural design packages with 3D renderings for HOA and review board submissions, ensuring first-time approval",
        "Contemporary aluminum and composite systems with powder-coated finishes matching luxury home palettes",
        "Root-zone protection protocols using air excavation techniques near heritage trees per arborist specifications",
        "Sound-dampening fence construction using mass-loaded vinyl barriers and offset board designs reducing noise by 8-12 decibels",
        "Marine-grade stainless steel fasteners and triple-sealed joinery systems engineered for high-humidity microclimates",
        "Premium Western Red Cedar clear-grade (zero knots) matching Bellevue's luxury market expectations and lasting 15+ years with proper maintenance"
      ]}
      articleContent={<BellevueArticle />}
      faqStructuredData={faqStructuredData}
    />
  );
};

export default Bellevue;
