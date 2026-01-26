"use client";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import AboutCityModal from "@/components/AboutCityModal";

const ABOUT_BELLEVUE_CONTENT = `Bellevue, Washington stands as the Pacific Northwest's premier Eastside city, a thriving metropolis of approximately 155,000 residents that has evolved from a quiet strawberry farming community into one of America's most affluent and innovative urban centers. Situated directly across Lake Washington from Seattle, Bellevue occupies 36 square miles of rolling terrain where downtown skyscrapers rise above forested neighborhoods and waterfront estates.

The area's recorded history begins with Native American settlements along the lake shores, followed by European American pioneers who arrived in the 1860s seeking farmland. The name "Bellevue," French for "beautiful view," was coined in 1882 by Postmaster Bert Marett's wife, inspired by the panoramic vistas of Lake Washington and the Cascade Mountains. The community remained agricultural through the mid-20th century, known particularly for its Japanese-American strawberry farms that were tragically disrupted by World War II internment.

The transformation from bedroom community to economic powerhouse began with the construction of the first Lake Washington floating bridge in 1940, followed by the opening of Bellevue Square shopping center in 1946. By the 1990s, technology companies discovered Bellevue's advantages: proximity to Seattle without its urban congestion, excellent schools, and a business-friendly environment. Today, Bellevue hosts headquarters and major offices for Amazon, Meta, Microsoft, T-Mobile, and countless startups, earning its reputation as Seattle's corporate sibling.

The city's geography creates distinct neighborhoods with varying character. Downtown Bellevue has transformed into an urban village with high-rises, luxury retail, and world-class dining. Medina and Clyde Hill represent old-money estates where tech billionaires now neighbor legacy families. West Bellevue neighborhoods like Enatai and Beaux Arts enjoy waterfront access and historic character. The Crossroads area provides diverse, affordable options, while Somerset and Newport Hills offer hillside living with Cascade Mountain views.

Bellevue's climate reflects its position in the Puget Sound Lowland but with notable differences from Seattle. The city receives approximately 37 inches of annual rainfall, similar to Seattle but distributed differently across the year. The "dual-lake effect" from Lake Washington and Lake Sammamish creates a distinct microclimate with 15-20% more humidity than areas further from water. Summers are gloriously dry and warm, with temperatures averaging 75-80°F from July through September. Winters remain mild by national standards, hovering around 40°F with occasional snow that rarely lingers in lower elevations.

The city's prosperity brings unique considerations for property improvements. Median home values exceed $1.5 million in many neighborhoods, with waterfront properties and prestigious areas like Medina commanding prices in the tens of millions. This real estate landscape means homeowners invest significantly in quality improvements that enhance rather than diminish property values. Homeowners associations in newer developments and architectural review boards in established neighborhoods enforce strict standards for exterior modifications.

Bellevue's diverse population includes families attracted by the Bellevue School District's nationally-ranked schools, executives drawn by corporate headquarters, international residents (approximately 40% of residents speak a language other than English at home), and retirees enjoying the city's amenities. This demographic mix creates demand for varying fence styles: modern horizontal designs in contemporary developments, traditional cedar privacy fences in family neighborhoods, and estate-style fencing with automated gates in luxury enclaves.`;

const BellevueArticle = () => (
  <article className="space-y-12">
    {/* Company Introduction */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Bellevue Fence Company - MyFence.com
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">30+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">98%+</div>
          <div className="text-sm text-muted-foreground">On-Time Installation Rate</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">5.0</div>
          <div className="text-sm text-muted-foreground">Average Star Rating</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">150+</div>
          <div className="text-sm text-muted-foreground">Five-Star Reviews</div>
        </Card>
      </div>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Looking for a trusted Bellevue fencing company? For 30+ years, MyFence.com has built quality fences through expert installations. As a father-son team, we bring unmatched craftsmanship and personalized service to every Bellevue fence installation project. Our Fence Genius technology ensures precision measurements and faster installations while maintaining the highest quality standards.
      </p>
    </section>

    {/* Bellevue Fence Installation */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Bellevue Fence Installation
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        MyFence.com takes Bellevue fence installation seriously. When we install your fence, we arrive fully prepared with all materials and professional-grade tools. Our 98%+ on-time installation rate is industry-leading because your time is valuable. We maintain a comprehensive stock of premium fence materials, ensuring we complete your Bellevue fence installation on schedule without delays. On installation day, our experienced team works efficiently while maintaining meticulous attention to detail. Once complete, we perform a thorough quality review with you to ensure complete satisfaction.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Our Fence Genius technology revolutionizes the installation process. By manufacturing precision-cut panels off-site, we reduce installation time by 30-50% compared to traditional methods while ensuring perfect measurements every time. This means less disruption to your Bellevue property and faster project completion without compromising quality. Whether you're installing a fence in Downtown Bellevue's luxury properties or Somerset's hillside estates, our team has the expertise to handle any terrain or architectural requirement.
      </p>
    </section>

    {/* Why Choose MyFence.com */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Why Choose MyFence.com for Your Bellevue Fence?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Father-Son Excellence</h3>
              <p className="text-muted-foreground">
                Over 30 years of combined experience and a family commitment to craftsmanship you won't find with corporate fence companies.
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Fence Genius Technology</h3>
              <p className="text-muted-foreground">
                Proprietary measurement and manufacturing system that ensures precision accuracy and 30-50% faster installation times.
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
            <h3 className="text-xl font-semibold mb-2">Industry-Best Warranty</h3>
            <p className="text-muted-foreground">
              {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty - far exceeding industry standards.
            </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">HOA & Permit Expertise</h3>
              <p className="text-muted-foreground">
                Deep knowledge of Bellevue's strict HOA requirements and municipal codes, with architectural design packages for board approvals.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* Fence Types Section */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Bellevue Fence Types & Materials
      </h2>
      
      {/* Cedar Fencing */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Bellevue Cedar Fence Installation</h3>
        <p className="text-muted-foreground leading-relaxed">
          At MyFence.com, we provide Bellevue cedar fence products that are engineered to last in the Pacific Northwest's challenging climate. We use premium Western Red Cedar, nature's most naturally rot-resistant wood species with oils that repel insects and resist decay. For Bellevue's luxury properties in neighborhoods like Medina and Clyde Hill, we offer clear-grade cedar (zero knots) that provides superior appearance and 15+ years of longevity with proper maintenance. Our cedar fences are built using heavy-duty lumber that exceeds industry standards, ensuring structural integrity even during windstorms.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Every cedar fence installation includes marine-grade stainless steel fasteners specifically chosen for Bellevue's high-humidity microclimate created by the dual-lake effect. We use triple-sealed joinery systems and premium pressure-treated posts that resist the moisture exposure 15-20% higher than Seattle experiences. Our optional <Link href="/fence-upgrades/post-on-pipe" className="text-primary underline decoration-2 underline-offset-2">Post-on-Pipe upgrade</Link> adds decades to your fence life by eliminating ground contact and wood rot at the post base.
        </p>
      </div>

      {/* Materials We Install */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">What We Install in Bellevue</h3>
        <p className="text-muted-foreground leading-relaxed">
          MyFence.com specializes in three premium fencing systems: Western Red Cedar fencing, Hogwire fencing, and our custom Hybrid Aluminum/Cedar system. We've focused our expertise on these options to deliver superior installation quality and industry-leading warranties. While many contractors offer numerous fence types, our specialized approach ensures every fence we install meets our exacting standards.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Cedar fencing</strong> remains the gold standard for natural beauty and durability. <strong>Hogwire fencing</strong> combines rustic charm with modern functionality, perfect for properties wanting open views. Our <strong>Hybrid Aluminum/Cedar system</strong> delivers low-maintenance performance at competitive pricing. Each system uses marine-grade fasteners and premium materials engineered for Bellevue's unique microclimate.
        </p>
      </div>

      {/* Other Materials - Information Only */}
      <div className="space-y-3 border-l-4 border-muted pl-4">
        <h3 className="text-2xl font-semibold text-muted-foreground">Understanding Other Fence Materials</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          <em>Note: We provide this information to help you make informed decisions, but MyFence.com does not install vinyl, composite, or standalone aluminum/steel fencing systems.</em>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Composite fencing</strong> has become popular in Bellevue's waterfront estates for its low maintenance and 25-year lifespan. <strong>Vinyl fencing</strong> offers maintenance-free performance but can become brittle in temperature extremes. <strong>Ornamental aluminum and steel</strong> provide open sight lines for estates and equestrian properties. While these materials have merit, we've chosen to focus exclusively on cedar, hogwire, and hybrid systems where we can deliver superior results.
        </p>
      </div>

      {/* Hybrid Aluminum System */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Bellevue Hybrid Aluminum Fence System</h3>
        <p className="text-muted-foreground leading-relaxed">
          For Bellevue properties seeking the perfect balance of low maintenance and affordability, our hybrid aluminum fence system combines the best of both worlds. Instead of traditional all-wood construction, we use black aluminum panels with a cedar frame and pressure-treated fence posts. This innovative system delivers a modern, sleek appearance while dramatically reducing maintenance requirements compared to traditional wood fencing.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The aluminum panels never require staining, painting, or sealing - perfect for busy Bellevue professionals in neighborhoods like Factoria and Eastgate. The cedar framework provides natural warmth and structural support while the pressure-treated posts ensure long-term stability in Bellevue's humid microclimate. This hybrid approach keeps pricing competitive with traditional wood fencing while offering superior longevity and minimal upkeep. Ideal for properties wanting a contemporary look without the premium cost of all-composite systems.
        </p>
      </div>
    </section>

    {/* Financing Section */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Bellevue Fence Financing Options
      </h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            We understand that a quality fence is an investment in your Bellevue property. That's why we partner with Wisetack to offer flexible fence financing options that make premium fencing accessible. Our financing plans feature:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Loan amounts from $1,000 to $25,000 per project</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Flexible terms with competitive rates</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Quick pre-approval with soft credit check (no impact to credit score)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Same-day approvals available for qualified applicants</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Transparent terms with no hidden fees</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Apply in minutes and get a decision quickly. Our financing options let you install your dream fence now and pay over time with manageable monthly payments. <Link href="/financing" className="text-primary underline decoration-2 underline-offset-2">Learn more about Wisetack financing options</Link>.
          </p>
        </div>
        <Card className="p-6 bg-primary/5">
          <h3 className="text-xl font-semibold mb-4">Get Pre-Approved Today</h3>
          <p className="text-muted-foreground mb-4">
            Check your financing options with no impact to your credit score. Get approved and start your Bellevue fence project immediately.
          </p>
          <Link href="/financing">
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors">
              Check Financing Options
            </button>
          </Link>
        </Card>
      </div>
    </section>

    {/* Warranty Section */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Industry-Leading Warranty Coverage
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Your Bellevue fence installation comes with comprehensive warranty protection that exceeds industry standards. We stand behind our work with confidence because we use premium materials and expert installation techniques perfected over 30+ years.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Craftsmanship Warranty</h3>
              <p className="text-sm text-muted-foreground mb-3">
                We stand behind our installation workmanship with a comprehensive {WARRANTY_CONSTANTS.YEARS}-year warranty covering all labor and installation defects.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Structural integrity of posts and framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gate alignment and functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Hardware installation and security</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Panel attachment and stability</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <p className="text-sm text-muted-foreground">
        Our warranties are fully transferable if you sell your Bellevue property, adding value to your home. We're committed to your complete satisfaction and standing behind every fence we install for the long term.
      </p>
    </section>


    {/* Local Challenges & Solutions */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Bellevue-Specific Installation Expertise
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Bellevue's unique geography, climate, and regulations require specialized knowledge and solutions that general contractors often lack. Here's how we address the specific challenges your Bellevue property faces:
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-primary">⚠</span> Local Challenges
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">Architectural review boards in Medina and Clyde Hill requiring detailed design submissions and approval processes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">High-end properties demanding contemporary horizontal slat and cable rail systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">Heritage tree preservation zones requiring hand-digging and specialized installation techniques</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">Dual-lake effect creating 15-20% more moisture exposure, accelerating untreated wood failure within 3-5 years</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">Property values averaging $1.2M+ requiring installations that enhance rather than diminish home valuations</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-primary">✓</span> Our Solutions
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Architectural design packages with 3D renderings for HOA and review board submissions, ensuring first-time approval</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Contemporary aluminum and composite systems with powder-coated finishes matching luxury home palettes</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Root-zone protection protocols using air excavation techniques near heritage trees per arborist specifications</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Specialized engineering for steep terrain installations in Somerset and Factoria neighborhoods</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Premium installations that enhance property valuations in Bellevue's luxury market</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Permits Section */}
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
            Get accurate, instant pricing with our <Link href="/quote" className="text-primary underline decoration-2 underline-offset-2">Virtual Quote Tool</Link>. Wood fence pricing typically ranges from $35-65 per linear foot installed depending on style, height, and materials. A standard 6-foot cedar fence averages $45-55 per foot installed. Use our online tool for a fast estimate, then we'll confirm exact pricing on-site with Fence Genius measurements - no surprise charges.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Do I need to involve my neighbors?</h4>
          <p className="text-muted-foreground">
            <a href="https://apps.leg.wa.gov/RCW/default.aspx?cite=16.60.020" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">Washington State law (RCW 16.60.020)</a> establishes clear rules for shared fence costs. If your fence is on the property line and serves as a partition between properties, your neighbor may be required to pay half the cost. We recommend discussing plans early and providing professional documentation. Learn more about <a href="https://myfence.com/blog/fence-cost-shared-with-neighbor" className="text-primary underline decoration-2 underline-offset-2">splitting fence costs with neighbors</a>.
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

    <AboutCityModal cityName="Bellevue" content={ABOUT_BELLEVUE_CONTENT} />
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
      },
      {
        "@type": "Question",
        "name": "What types of fences work best in Bellevue's climate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Western Red Cedar is the gold standard for wood fencing due to its natural rot resistance and beauty. Hogwire fencing provides rustic appeal with open views, perfect for modern properties and estate landscaping. Our hybrid aluminum system (black aluminum panels with cedar frame) offers durability with minimal upkeep at competitive pricing. MyFence.com specializes in these three systems to ensure superior installation quality with marine-grade fasteners engineered for Bellevue's dual-lake effect moisture."
        }
      }
    ]
  };

  // Enhanced LocalBusiness structured data with comprehensive service offerings
  const enhancedBusinessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://myfence.com/service-areas/bellevue",
    "name": "MyFence.com - Bellevue Fence Installation",
    "alternateName": ["MyFence Bellevue", "Bellevue Fence Company"],
    "description": "Premium fence installation and repair services in Bellevue, WA. Specializing in cedar, composite, vinyl, and aluminum fencing for luxury properties and HOA-compliant designs. 30+ years experience, 5.0-star rating.",
    "image": "https://myfence.com/myfence-logo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://myfence.com/myfence-logo.png",
      "width": 600,
      "height": 600
    },
    "url": "https://myfence.com",
    "telephone": "+12534551885",
    "email": "info@myfence.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "22927 257th Ave SE",
      "addressLocality": "Maple Valley",
      "addressRegion": "WA",
      "postalCode": "98038",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.3394,
      "longitude": -122.0461
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bellevue",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 47.6101,
          "longitude": -122.2015
        },
        "geoRadius": "25000"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "150"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fence Products and Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Cedar Fence Installation",
            "name": "Bellevue Cedar Fence Installation",
            "description": "Premium Western Red Cedar fence installation with marine-grade fasteners for Bellevue's high-humidity climate. Clear-grade options available.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MyFence.com"
            },
            "areaServed": "Bellevue, WA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Hybrid Aluminum Fence Installation",
            "name": "Bellevue Hybrid Aluminum Fence System",
            "description": "Low-maintenance hybrid system with black aluminum panels, cedar frame, and pressure-treated posts. Affordable and durable for modern properties.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MyFence.com"
            },
            "areaServed": "Bellevue, WA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Fence Repair and Replacement",
            "name": "Bellevue Fence Repair Services",
            "description": "Expert fence repair and complete replacement services for all fence types throughout Bellevue neighborhoods.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MyFence.com"
            },
            "areaServed": "Bellevue, WA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Fence Staining and Finishing",
            "name": "Bellevue Fence Staining Services",
            "description": "Professional fence staining with UV and moisture protection formulated for Pacific Northwest climate conditions.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MyFence.com"
            },
            "areaServed": "Bellevue, WA"
          }
        }
      ]
    },
    "knowsAbout": [
      "Cedar Fence Installation",
      "Hogwire Fence Installation",
      "Hybrid Aluminum Fence System",
      "HOA Compliance",
      "Bellevue Building Codes",
      "Marine-Grade Materials",
      "Waterfront Property Fencing",
      "Luxury Property Fencing"
    ],
    "slogan": "Father-Son Excellence in Fence Installation",
    "founder": {
      "@type": "Person",
      "name": "Andrew Knudsen"
    },
    "paymentAccepted": ["Cash", "Check", "Credit Card", "Financing"],
    "currenciesAccepted": "USD",
    "sameAs": [
      "https://www.facebook.com/myfence.com.official",
      "https://www.instagram.com/myfence.com.official/",
      "https://twitter.com/MyFenceDotCom",
      "https://www.youtube.com/@fencegenius",
      "https://www.linkedin.com/company/myfence-com/",
      "https://www.pinterest.com/MyFenceDotCom/",
      "https://www.tiktok.com/@myfence.com"
    ]
  };

  return (
    <ServiceAreaTemplate 
      city="Bellevue" 
      state="WA"
      heroTitle="Premium Fence Installation for Bellevue's Luxury Properties"
      heroDescription="Serving waterfront estates and luxury properties with architectural fencing solutions designed for Bellevue's unique dual-lake microclimate and strict HOA standards. From Medina mansions to Somerset hillsides."
      metaTitle="Bellevue Fence Installation | Luxury & HOA-Compliant"
      metaDescription="Premium Bellevue fence installation for luxury properties. Cedar, composite, vinyl & aluminum. 30+ years experience. 98%+ on-time rate. HOA-compliant designs. Marine-grade materials. 5.0-star rated. Call (253) 455-1885 for free quote."
      zipCodes={["98004", "98005", "98006", "98007", "98008", "98009"]}
      neighborhoods={[
        {
          name: "Downtown Bellevue",
          description: "Urban luxury high-rises and condominiums with strict architectural standards and rooftop/balcony privacy screening requirements"
        },
        {
          name: "Bridle Trails",
          description: "Equestrian estates on 1+ acre lots requiring specialized post-and-rail designs and compliance with horse-property fencing codes"
        },
        {
          name: "Somerset",
          description: "Hillside properties with panoramic views demanding slope installations and sound-dampening solutions for I-90 traffic noise"
        },
        {
          name: "Crossroads",
          description: "Diverse residential area with mid-century homes and new townhome developments requiring varied fence solutions"
        },
        {
          name: "Factoria",
          description: "Family-oriented neighborhoods with active HOAs requiring committee-approved designs and durable materials for high child/pet activity"
        },
        {
          name: "Eastgate",
          description: "Mixed residential zones near commercial districts needing privacy screening and decorative fencing to complement varied home styles"
        },
        {
          name: "West Bellevue",
          description: "Waterfront luxury estates along Lake Washington requiring marine-grade corrosion-resistant installations and architectural elegance"
        },
        {
          name: "Wilburton",
          description: "Established neighborhoods with mature landscaping requiring careful installation around 50+ year old trees and root systems"
        },
        {
          name: "Newport Hills",
          description: "Wooded hillside community with steep slopes and tall trees requiring reinforced posts and drainage-integrated designs"
        }
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
        "High-end properties demanding contemporary horizontal slat and cable rail systems",
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
      enhancedBusinessData={enhancedBusinessData}
    />
  );
};

export default Bellevue;
