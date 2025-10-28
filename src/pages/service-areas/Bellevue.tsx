import ServiceAreaTemplate from "./ServiceAreaTemplate";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BellevueArticle = () => (
  <article className="space-y-8">
    <header>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        What to Know Before Building a Fence in Bellevue — Permits, Materials, and Local Tips
      </h2>
    </header>

    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Why Fence Planning Differs by City</h3>
      <p className="text-muted-foreground leading-relaxed">
        Building a fence in Bellevue isn't just about choosing the right style—it's about understanding the unique blend of factors that make this Eastside city distinct. From stringent HOA requirements in luxury communities to Washington's wet climate and Bellevue's specific municipal codes, every element demands careful consideration. The city's position between two major lakes creates microclimates that affect material longevity, while its mix of historic neighborhoods and modern developments means fence regulations can vary significantly by location. Additionally, Bellevue's steep terrain in areas like Somerset and Factoria requires specialized engineering considerations that flat-land fence installations don't face.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Permits and Property Line Requirements</h3>
      <p className="text-muted-foreground leading-relaxed">
        Before breaking ground on your fence project, understanding Bellevue's permit requirements is essential. The City of Bellevue typically requires permits for fences over 6 feet in height, though specific regulations depend on your property's zoning designation and location within the city. According to the <a href="https://bellevuewa.gov/city-government/departments/development-services" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bellevue Development Services Department</a>, all fences must comply with the <a href="https://bellevue.municipal.codes/BCC/20.20" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bellevue City Code Chapter 20.20</a> regarding height limits, setback requirements, and sight triangle restrictions at intersections.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Property line considerations are particularly crucial in Bellevue's densely-developed neighborhoods. Washington State law requires you to build on your side of the property line, and many Bellevue HOAs have additional restrictions. For example, communities like <a href="https://www.summitathilltop.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Summit at Hilltop HOA</a> and <a href="https://www.enataibeach.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Enatai Beach Club</a> maintain strict architectural guidelines that often mandate specific fence styles, colors, and maximum heights—sometimes as low as 4 feet in front yards. Always obtain a property survey before installation and review your HOA's Covenants, Conditions & Restrictions (CC&Rs) to avoid costly violations.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Comparing Popular Materials for Bellevue's Climate</h3>
      <p className="text-muted-foreground leading-relaxed">
        Material selection in Bellevue requires balancing aesthetics, durability, and maintenance against the Pacific Northwest's relentless moisture. Western Red Cedar remains the gold standard for wood fencing—its natural oils resist decay and insect damage while developing an attractive silver-gray patina. However, Bellevue's high-end neighborhoods increasingly favor clear-grade cedar for its superior appearance and enhanced longevity, though it commands a premium price.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Composite fencing has gained significant traction in waterfront properties near Lake Washington and Lake Sammamish. Modern composites from manufacturers like Trex and TimberTech offer excellent moisture resistance without the maintenance demands of wood, making them ideal for Bellevue's climate. While initial costs run 50-75% higher than cedar, the elimination of annual staining and longer 25-year lifespan often justify the investment for luxury properties.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Vinyl fencing provides another low-maintenance alternative, particularly popular in family-oriented neighborhoods like Factoria and Eastgate. However, quality matters significantly—cheap vinyl can become brittle in cold winters and warp in summer heat. For properties with challenging slopes or those seeking modern aesthetics, aluminum and steel offer durability with minimal maintenance, though they lack the warm, natural appearance many Bellevue HOAs prefer.
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
            Get accurate, instant pricing with our <Link to="/quote" className="text-primary hover:underline">Virtual Quote Tool</Link>. Wood fence pricing typically ranges from $35-65 per linear foot installed depending on style, height, and materials. A standard 6-foot cedar fence averages $45-55 per foot installed. Use our online tool for a fast estimate, then we'll confirm exact pricing on-site with Fence Genius measurements—no surprise charges.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Do I need to involve my neighbors?</h4>
          <p className="text-muted-foreground">
            <a href="https://apps.leg.wa.gov/RCW/default.aspx?cite=16.60.020" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Washington State law (RCW 16.60.020)</a> establishes clear rules for shared fence costs. If your fence is on the property line and serves as a partition between properties, your neighbor may be required to pay half the cost. We recommend discussing plans early and providing professional documentation. Learn more about <Link to="/blog/fence-cost-shared-with-neighbor" className="text-primary hover:underline">Washington State fence cost sharing laws and best practices</Link>.
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
        <strong>Note:</strong> Building codes and HOA regulations are subject to change. Always verify current requirements with the <a href="https://bellevuewa.gov/city-government/departments/development-services" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">City of Bellevue Development Services</a> and your homeowners association before beginning any fence project. Professional fence contractors familiar with local regulations can help streamline the permit and approval process.
      </p>
    </section>
  </article>
);

const Bellevue = () => {
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
      climateDescription="Bellevue's unique position between Lake Washington and Lake Sammamish creates a microclimate with moderate temperatures but high moisture levels year-round. This lakeside environment, combined with the city's mature landscaping and upscale developments, creates specific considerations for fence installation and longevity."
      localChallenges={[
        "High aesthetic standards in upscale neighborhoods requiring premium finishes",
        "Mature trees and established landscaping requiring careful installation planning",
        "Strict HOA requirements in many residential communities",
        "Waterfront properties needing marine-grade materials and corrosion resistance",
        "City code compliance for historic neighborhoods and tree preservation areas"
      ]}
      localSolutions={[
        "Premium cedar and composite materials matching high-end home aesthetics",
        "Custom fence designs coordinated with existing architectural styles",
        "Precision installation techniques protecting mature root systems and landscaping",
        "HOA-compliant designs with architectural review board approval assistance",
        "Marine-grade hardware and coatings for lakefront and high-moisture locations"
      ]}
      articleContent={<BellevueArticle />}
    />
  );
};

export default Bellevue;
