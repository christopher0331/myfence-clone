import ServiceAreaTemplate from "./ServiceAreaTemplate";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const IssaquahArticle = () => (
  <article className="space-y-12">
    {/* Company Introduction */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Issaquah Fence Company - MyFence.com
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
        Looking for a trusted Issaquah fencing company? For 30+ years, MyFence.com has specialized in mountain property installations. As a father-son team, we bring unmatched craftsmanship and personalized service to every Issaquah fence installation project. Our Fence Genius technology ensures precision measurements and faster installations on challenging terrain while maintaining the highest quality standards.
      </p>
    </section>

    {/* Issaquah Fence Installation */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Issaquah Fence Installation
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        MyFence.com understands the unique challenges of Issaquah fence installation. When we install your mountain property fence, we arrive fully prepared with all materials and specialized equipment for hillside terrain. Our 98%+ on-time installation rate is industry-leading because we respect your schedule. We maintain comprehensive stock of premium fence materials, ensuring we complete your Issaquah fence installation on schedule without weather or supply delays.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Our Fence Genius technology revolutionizes installation on Issaquah's challenging slopes. By manufacturing precision-cut panels off-site, we reduce installation time by 30-50% compared to traditional methods while ensuring perfect measurements on uneven terrain. Whether you're installing a fence in Issaquah Highlands with strict HOA requirements or Talus with extreme slopes, our team has the expertise to handle any terrain or wildlife consideration.
      </p>
    </section>

    {/* Why Choose MyFence.com */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Why Choose MyFence.com for Your Issaquah Fence?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Mountain Terrain Specialists</h3>
              <p className="text-muted-foreground">
                Over 30 years of experience installing on challenging slopes and wooded properties in the Issaquah Alps. We understand wildlife patterns and drainage requirements unique to mountain communities.
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
                Proprietary measurement and manufacturing system that ensures precision accuracy even on steep slopes and reduces installation time by 30-50%.
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
                {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty - far exceeding industry standards for mountain climate installations.
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">HOA & Wildlife Expertise</h3>
              <p className="text-muted-foreground">
                Deep knowledge of Issaquah Highlands HOA requirements and wildlife-smart fence designs that keep deer and other animals at bay while meeting community standards.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* Fence Types Section */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Issaquah Fence Types & Materials
      </h2>
      
      {/* Cedar Fencing */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Issaquah Cedar Fence Installation</h3>
        <p className="text-muted-foreground leading-relaxed">
          Mountain properties demand fencing built for elevation. Our Issaquah cedar installations feature Western Red Cedar sourced specifically for its natural resistance to the Cascade foothills' wet winters and temperature swings. Neighborhoods like Talus and Montreux at higher elevations benefit from our clear-grade cedar option - knot-free boards that maintain structural integrity through freeze-thaw cycles and heavy snowfall common above 500 feet.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Issaquah's proximity to Tiger and Cougar Mountains creates unique moisture challenges - fog, persistent drizzle, and forest canopy shade that keeps wood damp longer. We address this with extra-thick pressure-treated posts, corrosion-resistant hardware rated for mountain conditions, and construction techniques developed over three decades of Issaquah Alps installations. Our <Link to="/fence-upgrades/post-on-pipe" className="text-primary underline decoration-2 underline-offset-2">Post-on-Pipe system</Link> is especially valuable here, lifting cedar away from perpetually damp forest soil.
        </p>
      </div>

      {/* Materials We Install */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Fence Systems for Mountain Living</h3>
        <p className="text-muted-foreground leading-relaxed">
          After decades installing fences throughout the Issaquah Alps, we've narrowed our focus to three systems that perform reliably at elevation: Western Red Cedar, Hogwire, and our Hybrid Aluminum/Cedar design. Rather than offering everything, we've mastered what works in Issaquah's demanding terrain - steep grades, dense tree cover, and wildlife pressure that lowland contractors rarely encounter.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Cedar</strong> blends naturally with forested lots in Grand Ridge and Squak Mountain neighborhoods. <strong>Hogwire panels</strong> let you maintain views of the surrounding wilderness while keeping deer out of gardens - a practical choice for properties bordering open space. Our <strong>Hybrid Aluminum/Cedar</strong> combination suits second homes and properties where owners want minimal upkeep between visits.
        </p>
      </div>

      {/* Other Materials - Information Only */}
      <div className="space-y-3 border-l-4 border-muted pl-4">
        <h3 className="text-2xl font-semibold text-muted-foreground">Materials We Don't Install (And Why)</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          <em>Transparency matters: here's what we don't offer and why mountain conditions guided our decision.</em>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Vinyl</strong> becomes brittle during Issaquah's winter freezes and can crack under snow load - we've seen too many failures above 400 feet elevation. <strong>Composite boards</strong> handle moisture well but lack the structural rigidity needed for steep-grade installations. <strong>Ornamental metal</strong> works for flat lots but doesn't step gracefully down slopes. By concentrating on cedar, hogwire, and our hybrid system, we've mastered what actually performs in the Issaquah Alps.
        </p>
      </div>

      {/* Hybrid Aluminum System */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Low-Maintenance Hybrid for Mountain Cabins & Second Homes</h3>
        <p className="text-muted-foreground leading-relaxed">
          Many Issaquah property owners split time between work in Seattle and weekends in the foothills. Our hybrid aluminum/cedar fence was designed with that lifestyle in mind: black powder-coated aluminum panels mounted in a cedar frame, anchored by pressure-treated posts engineered for slope stability.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          You won't drive up to find weathered panels needing attention - aluminum shrugs off rain, snow, and UV without staining or sealing. The cedar framing ties visually to wooded surroundings while the metal core handles whatever the Cascades throw at it. Popular in Squak Mountain and Tibbetts Valley where owners want security without a maintenance schedule.
        </p>
      </div>
    </section>

    {/* Financing Section */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Spread the Cost of Your Mountain Fence
      </h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Slope installations and wildlife-smart designs often run higher than standard flat-lot fencing. Through our partnership with Wisetack, you can break that investment into predictable monthly payments while enjoying your new fence immediately.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Finance projects up to $25,000 - covers most Issaquah installations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Soft credit check during pre-approval won't affect your score</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Decisions typically within minutes, not days</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>No prepayment penalties if you pay off early</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Many homeowners finance the full project, then pay down faster once they see the finished result. <Link to="/financing" className="text-primary underline decoration-2 underline-offset-2">Explore Wisetack terms and rates</Link>.
          </p>
        </div>
        <Card className="p-6 bg-primary/5">
          <h3 className="text-xl font-semibold mb-4">See Your Payment Options</h3>
          <p className="text-muted-foreground mb-4">
            Takes about 2 minutes. No obligation, no impact to credit.
          </p>
          <Link to="/financing">
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors">
              Check Rates
            </button>
          </Link>
        </Card>
      </div>
    </section>

    {/* Warranty Section */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Our Commitment to Mountain-Grade Work
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Fences in Issaquah face tougher conditions than lowland installations - more rain, steeper grades, freeze-thaw cycles. Our {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty reflects confidence built from three decades of foothills projects.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS} Years, No Fine Print</h3>
              <p className="text-sm text-muted-foreground mb-3">
                If something we installed fails - posts, framework, gates, hardware - we come back and fix it. Period.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Post stability on slopes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gate operation through seasonal ground movement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Panel attachment and fastener integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Framework alignment despite settling</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <p className="text-sm text-muted-foreground">
        Selling your Issaquah home? The warranty transfers to the new owner - a selling point in competitive real estate markets.
      </p>
    </section>

    {/* Local Challenges & Solutions */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Issaquah-Specific Installation Expertise
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Issaquah's mountain geography, climate, and wildlife require specialized knowledge that lowland contractors often lack. Here's how we address the specific challenges your Issaquah property faces:
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Steep Slopes & Drainage</h3>
          <p className="text-muted-foreground">
            Issaquah's hillside properties demand expert post placement and reinforced anchoring. We install deeper footings with proper drainage integration to prevent post shifting and erosion. Our specialized equipment and decades of mountain experience ensure your fence stays straight and stable on challenging terrain.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Wildlife Corridors</h3>
          <p className="text-muted-foreground">
            Proximity to Cougar Mountain and Tiger Mountain means wildlife encounters are common. We recommend 8-foot privacy fencing or strategic placement to deter deer, coyotes, and bears while maintaining property security. Our designs work with natural migration patterns common in Issaquah's wooded neighborhoods.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Higher Precipitation</h3>
          <p className="text-muted-foreground">
            Mountain communities receive 20-30% more rainfall than Seattle. We use marine-grade hardware, enhanced drainage, and premium treatments to prevent the accelerated wood weathering common in high-moisture environments. Our installations outlast standard methods by decades.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">HOA Requirements</h3>
          <p className="text-muted-foreground">
            Issaquah Highlands and other planned communities have strict design guidelines. We provide architectural design packages with material samples for HOA approval and work within committee timelines. Our 30+ years of local experience means we know what boards approve.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
      <Card className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">How long does fence installation take in Issaquah?</h4>
          <p className="text-muted-foreground">
            Most residential fence projects take 1-3 days depending on size, terrain complexity, and slope requirements. Our Fence Genius technology manufactures panels off-site, reducing installation time by 30-50% compared to traditional methods. Mountain terrain and wildlife-smart installations may add additional time for specialized engineering, and permit processing typically adds 2-4 weeks depending on HOA requirements in communities like Issaquah Highlands.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">How much does fence installation cost in Issaquah?</h4>
          <p className="text-muted-foreground">
            Get accurate, instant pricing with our <Link to="/quote" className="text-primary underline decoration-2 underline-offset-2">Virtual Quote Tool</Link>. Wood fence pricing typically ranges from $35-65 per linear foot installed depending on style, height, and materials. Slope installations and wildlife-smart designs may add 10-25% due to specialized engineering requirements. A standard 6-foot cedar fence on level terrain averages $45-55 per foot installed. Use our online tool for a fast estimate, then we'll confirm exact pricing on-site with Fence Genius measurements.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">What fence materials work best for Issaquah's mountain climate?</h4>
          <p className="text-muted-foreground">
            Western Red Cedar is ideal for Issaquah's mountain climate due to its natural rot resistance and ability to withstand moisture fluctuations. For foothills properties, we recommend 8-foot heights with reinforced posts to handle wind loads from Tiger Mountain. Hogwire fencing provides excellent wildlife visibility while maintaining security. Our hybrid aluminum system (black aluminum panels with cedar frame) offers low-maintenance durability perfect for properties with snow exposure and temperature extremes.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Do I need special permits for slope installations in Issaquah?</h4>
          <p className="text-muted-foreground">
            Slope installations may require additional engineering documentation, especially on properties with grades exceeding 15%. Issaquah Highlands and other communities near Tiger Mountain often have specific requirements for hillside construction. Contact the <a href="https://www.issaquahwa.gov/113/Community-Planning-Development" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">City of Issaquah Development Services</a> at (425) 837-3150 to verify requirements for your specific property location and terrain.
          </p>
        </div>
      </Card>
    </section>
  </article>
);

const Issaquah = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do steep slopes affect fence installation in Issaquah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Steep slopes require specialized installation techniques including deeper footings, reinforced anchoring, and precise post placement. MyFence.com has over 30 years of experience installing on Issaquah's challenging mountain terrain, using specialized equipment and drainage integration to ensure your fence remains stable and straight for decades."
        }
      },
      {
        "@type": "Question",
        "name": "What fence height is best for wildlife protection in Issaquah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For effective wildlife deterrence in Issaquah's mountain communities, we recommend 8-foot privacy fencing. This height effectively discourages deer, coyotes, and other wildlife common to areas near Cougar Mountain and Tiger Mountain while providing complete privacy and security for your family and pets."
        }
      },
      {
        "@type": "Question",
        "name": "How does Issaquah's climate affect fence longevity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Issaquah receives 20-30% more rainfall than Seattle due to its mountain location. MyFence.com uses marine-grade stainless steel hardware, enhanced drainage systems, and premium treatments specifically chosen for high-moisture mountain environments. A properly installed cedar fence in Issaquah typically lasts 25-35 years with our superior materials and techniques."
        }
      }
    ]
  };

  const enhancedBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MyFence.com - Issaquah Fence Installation",
    "image": "https://myfence.com/myfence-logo.png",
    "@id": "https://myfence.com/service-areas/issaquah",
    "url": "https://myfence.com/service-areas/issaquah",
    "telephone": "(253) 455-1885",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Issaquah",
      "addressLocality": "Issaquah",
      "addressRegion": "WA",
      "postalCode": "98027",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.5301,
      "longitude": -122.0326
    },
    "areaServed": {
      "@type": "City",
      "name": "Issaquah"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/people/MyFencecom/61554605109118/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150"
    }
  };

  return (
    <ServiceAreaTemplate
      city="Issaquah" 
      state="WA"
      heroTitle="Foothills Fence Experts Serving Issaquah's Mountain Communities"
      heroDescription="Custom fencing for Issaquah Highlands and Tiger Mountain properties. Wildlife-smart designs and slope installations that work with your forested surroundings while keeping your family and pets secure."
      metaTitle="Issaquah Mountain Fences | Wildlife-Smart | MyFence"
      metaDescription="Foothills fence experts for Issaquah Highlands & Tiger Mountain. Wildlife-smart designs & slope installations for forested properties. Custom solutions for mountain living. Call (253) 455-1885."
      zipCodes={["98027", "98029"]}
      neighborhoods={[
        {
          name: "Issaquah Highlands",
          description: "Master-planned community with HOA requirements demanding approved designs and premium materials for upscale properties"
        },
        {
          name: "Olde Town Issaquah",
          description: "Historic downtown area with traditional homes requiring classic fence styles that preserve small-town character"
        },
        {
          name: "Talus",
          description: "Luxury hillside development with steep slopes demanding expert terrain-adaptive installations and reinforced anchoring"
        },
        {
          name: "Providence Point",
          description: "Active adult community with specific design guidelines requiring low-maintenance solutions and committee-approved installations"
        },
        {
          name: "Grand Ridge",
          description: "Family-focused neighborhood with larger lots needing secure boundary fencing for children, pets, and outdoor living spaces"
        },
        {
          name: "Newcastle",
          description: "Wooded hillside properties with challenging terrain requiring specialized slope installations and drainage integration"
        },
        {
          name: "Montreux",
          description: "Exclusive golf course community with premium properties demanding high-end custom designs and luxury materials"
        }
      ]}
      landmarks={[
        "Cougar Mountain Regional Wildland Park",
        "Squak Mountain State Park",
        "Lake Sammamish State Park",
        "Gilman Village",
        "Issaquah Salmon Hatchery",
        "Tiger Mountain State Forest",
        "Issaquah Alps"
      ]}
      climateDescription="Nestled in the Issaquah Alps, this city experiences cooler temperatures and higher precipitation than nearby lowland areas. The dramatic topography and proximity to mountains create microclimates that significantly impact fence durability and installation methods."
      localChallenges={[
        "Mountain terrain with steep slopes requiring expert installation",
        "Higher rainfall totals accelerating wood weathering",
        "Upscale communities with strict aesthetic standards",
        "Wildlife corridors requiring secure, tall fencing options",
        "Premium property values demanding exceptional craftsmanship"
      ]}
      localSolutions={[
        "Terrain-adaptive installations for hillside properties",
        "Premium materials suited to wet mountain climate",
        "Custom designs meeting community architectural guidelines",
        "8-foot privacy fencing for wildlife security",
        "High-end finishes and clear cedar options for luxury homes"
      ]}
      articleContent={<IssaquahArticle />}
      faqStructuredData={[faqStructuredData, enhancedBusinessData]}
    />
  );
};

export default Issaquah;
