"use client";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import { SITE_CONFIG } from "@/constants/siteConfig";
import AboutCityModal from "@/components/AboutCityModal";

const ABOUT_REDMOND_CONTENT = `Redmond, Washington sits at the heart of the Pacific Northwest's technology corridor, a city of approximately 75,000 residents that has transformed from a quiet logging and farming community into one of America's most innovative urban centers. Located 15 miles east of Seattle on the Eastside of Lake Washington, Redmond occupies 17.2 square miles of rolling terrain where the Sammamish River flows northward toward Lake Washington.

The area's first settlers arrived in the 1870s, drawn by rich timber resources and fertile farmland. Luke McRedmond, the city's namesake, established a trading post in 1871 that would grow into the downtown core. The arrival of the railroad in 1888 accelerated growth, but Redmond remained primarily agricultural through the mid-20th century, known especially for its bicycle racing traditions that continue today at Marymoor Park's velodrome.

The transformation began in 1979 when Microsoft relocated from Albuquerque to Redmond, eventually establishing its sprawling corporate campus that now houses over 50,000 employees. Nintendo of America followed in 1982, cementing Redmond's identity as a global technology hub. Today, the city hosts numerous tech companies, startups, and research facilities, earning it the nickname "Bicycle Capital of the Northwest" for its extensive trail system and cycling culture that coexists with its tech identity.

Redmond's geography shapes daily life profoundly. The city sits in a valley surrounded by forested hills, with Marymoor Park's 640 acres providing a green centerpiece along the Sammamish River. Bridle Trails State Park on the western edge preserves old-growth forest and maintains the city's equestrian heritage. The Sammamish River Trail connects Redmond to surrounding communities, while numerous neighborhood parks and green spaces give the city a distinctly less urban feel than Seattle.

The climate mirrors the greater Puget Sound region but with notable Eastside variations. Redmond receives approximately 35 inches of annual rainfall, roughly 10 inches less than Seattle, thanks to the rain shadow effect of the Olympic Mountains. Summers are pleasantly warm and dry, with temperatures averaging 75-80°F from June through September. Winters bring temperatures hovering around 40°F with occasional snow that can paralyze the hilly neighborhoods. The area experiences roughly 150 days of measurable precipitation annually, primarily between October and May.

Redmond's neighborhoods reflect its evolution from rural community to tech hub. Education Hill, named for the schools that anchor it, attracts families seeking top-rated public education. Overlake has transformed into a dense urban village near the Microsoft campus and new light rail stations. Grass Lawn and Willows/Rose Hill maintain more traditional suburban character, while Idylwood and areas near Bridle Trails offer larger lots and forest proximity. This diversity means fence installations must account for everything from tight urban lots to expansive properties bordering protected forestland.

The economic vitality brings both opportunity and challenge. Median household income exceeds $130,000, driving demand for premium home improvements including fencing. Property values in desirable neighborhoods often exceed $1 million, justifying investments in quality materials and craftsmanship. The highly educated population tends to research thoroughly before purchasing, expecting clear communication and technical competence from contractors.`;

const RedmondArticle = () => (
  <article className="space-y-12">
    {/* Company Introduction */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Redmond Fence Company - MyFence.com
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
        Looking for modern fence installation in Redmond? MyFence.com delivers the contemporary aesthetics and low-maintenance solutions that tech professionals demand. As a father-son team with 30+ years of experience, we understand Redmond's unique blend of innovation and outdoor lifestyle. From Overlake's modern developments to Education Hill's family neighborhoods, we provide precision-engineered fencing that complements your property and lifestyle.
      </p>
    </section>

    {/* Redmond Fence Installation */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Redmond Fence Installation
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        MyFence.com approaches every Redmond fence installation with precision and professionalism. We arrive on schedule with all materials and professional-grade equipment, ready to complete your project efficiently. Our 98%+ on-time installation rate reflects our respect for your busy schedule and organized project management. We maintain comprehensive material inventory, eliminating delays that frustrate homeowners and extend timelines unnecessarily.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Our proprietary Fence Genius technology revolutionizes installation through precision-cut panels manufactured off-site. This reduces installation time by 30-50% compared to traditional methods while ensuring perfect measurements every time. Less disruption to your property, faster project completion, and superior quality - exactly what Redmond's tech-savvy homeowners expect. Whether installing horizontal cedar in Overlake or hogwire in Grass Lawn, our experienced team delivers results that exceed expectations.
      </p>
    </section>

    {/* Why Choose MyFence.com */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Why Choose MyFence.com in Redmond?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Modern Design Excellence</h3>
              <p className="text-muted-foreground">
                Contemporary horizontal designs and innovative materials that match Redmond's tech-forward aesthetic and architectural trends.
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
                Proprietary measurement and manufacturing system ensuring precision accuracy and 30-50% faster installation times.
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
              <p className="text-muted-foreground">
                Industry-leading {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty for long-term protection.
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
                Deep understanding of Redmond's HOA requirements and wildlife deterrence solutions for greenbelt-adjacent properties.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Redmond's Distinctive Fencing Landscape</h3>
      <p className="text-muted-foreground leading-relaxed">
        Redmond's identity as the home of Microsoft and a major tech hub shapes its fencing needs in unique ways. The city's professionals expect modern aesthetics, quality craftsmanship, and low-maintenance solutions that align with their busy lifestyles. Neighborhoods like Overlake, Education Hill, and Grass Lawn feature newer developments with homeowners associations that mandate specific fence styles, colors, and materials - requiring installers who understand both design requirements and architectural review processes.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        The city's extensive park system and proximity to natural areas like Marymoor Park and Bridle Trails State Park mean many properties border greenbelt and forest land. This creates challenges with wildlife, particularly deer that can damage gardens and landscaping. Properties near the Sammamish River corridor face additional moisture considerations, while the rolling terrain throughout much of Redmond requires fence designs that accommodate elevation changes while maintaining a level, professional appearance. The combination of high property values, environmental awareness, and design-conscious residents means fence installations must balance functionality with aesthetic appeal.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Redmond Building Codes and Permit Requirements</h3>
      <p className="text-muted-foreground leading-relaxed">
        The City of Redmond follows specific requirements outlined in the <a href="https://www.redmond.gov/823/Building-Division" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">Redmond Development Services</a> regulations. Residential fences under 8 feet in height typically do not require a building permit, but must comply with zoning requirements including height limits and setback rules. Front yard fences are generally limited to 4 feet, while side and rear yard fences can be constructed up to 6 feet without special approval.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Many Redmond neighborhoods, particularly newer developments built since the 1990s, have homeowners associations with detailed architectural guidelines. Communities near Microsoft campus and in the Overlake area often require pre-approval of fence designs, with specifications covering everything from board spacing to stain colors. Some HOAs restrict certain fence styles entirely or require specific cedar grades to maintain neighborhood aesthetics. We recommend reviewing your CC&Rs and submitting designs to your architectural committee early in the planning process.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Properties backing to critical areas such as streams, wetlands, or steep slopes may require additional review under Redmond's environmental codes. The city takes protection of the Bear Creek and other waterways seriously, with buffer requirements that may affect fence placement. Always verify exact property boundaries with a current survey before installation - this prevents disputes with neighbors and ensures compliance with setback requirements. For specific questions, contact Redmond Development Services at <a href="tel:425-556-2470" className="text-primary underline decoration-2 underline-offset-2">425-556-2470</a>.
      </p>
    </section>

    {/* Fence Types Section */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Redmond Fence Types & Materials
      </h2>
      
      {/* Cedar Fencing */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Cedar Fence Installation in Redmond</h3>
        <p className="text-muted-foreground leading-relaxed">
          MyFence.com uses premium Western Red Cedar for all Redmond installations, nature's most naturally rot-resistant wood species. Our cedar contains natural oils that repel insects and resist decay even in the Pacific Northwest's challenging climate. For Redmond's premium neighborhoods like Overlake and Education Hill, we offer clear-grade cedar (zero knots) providing superior appearance and 15+ years of longevity with proper maintenance. Every fence uses heavy-duty lumber exceeding industry standards for structural integrity during windstorms.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          All cedar fence installations include marine-grade stainless steel fasteners engineered for the region's humidity. We use triple-sealed joinery systems and premium pressure-treated posts that resist moisture damage. Our optional <Link href="/fence-upgrades/post-on-pipe" className="text-primary underline decoration-2 underline-offset-2">Post-on-Pipe upgrade</Link> adds decades to fence life by eliminating ground contact and wood rot at the post base - perfect for properties backing to Redmond's greenbelt areas.
        </p>
      </div>

      {/* Materials We Install */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">What We Install in Redmond</h3>
        <p className="text-muted-foreground leading-relaxed">
          MyFence.com specializes in three fencing systems for Redmond's tech-savvy homeowners: <strong>Western Red Cedar fencing</strong>, <strong>Hogwire fencing</strong>, and our custom <strong>Hybrid Aluminum/Cedar system</strong>. By focusing our expertise on these systems, we deliver the contemporary aesthetics and superior craftsmanship Redmond properties demand. For premium neighborhoods like Overlake and Education Hill, clear-grade cedar provides the refined appearance that matches the area's high property values.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Horizontal <strong>cedar designs</strong> have become extremely popular in Redmond, reflecting the contemporary aesthetic preferred by tech professionals. Our precision manufacturing and Fence Genius technology ensure every board aligns perfectly. <strong>Hogwire fencing</strong> offers modern rustic appeal for properties wanting open views of greenbelts. Our <strong>Hybrid Aluminum/Cedar system</strong> delivers low-maintenance performance perfect for busy professionals - black aluminum panels with cedar framing that never requires staining.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          For properties backing to forests or greenbelt, 8-foot fence heights effectively deter deer while providing maximum privacy. All installations use MyFence.com's superior 4.125" x 4.125" posts with nearly 5 square inches more cross-sectional area than box store posts. We install posts with concrete poured to surface level, preventing soil contact and rot. This attention to detail ensures decades of protection for your property.
        </p>
      </div>

      {/* Other Materials - Information Only */}
      <div className="space-y-3 border-l-4 border-muted pl-4">
        <h3 className="text-2xl font-semibold text-muted-foreground">Understanding Other Fence Materials</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          <em>Note: We provide this information to help you make informed decisions, but MyFence.com does not install vinyl, composite, or standalone aluminum/steel fencing systems.</em>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Composite materials</strong> offer wood-like aesthetics without regular staining, though at 60-80% higher cost. The time savings appeal to busy professionals, but composites lack the natural warmth many prefer. <strong>Vinyl fencing</strong> requires minimal maintenance but lacks character. <strong>Ornamental aluminum and steel</strong> provide security with sight lines. While these materials have merit, we've specialized in cedar, hogwire, and hybrid systems where we can guarantee the contemporary aesthetics and precision installation Redmond's tech-savvy homeowners expect.
        </p>
      </div>

      {/* Hybrid Aluminum System */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Hybrid Aluminum Fence System in Redmond</h3>
        <p className="text-muted-foreground leading-relaxed">
          For Redmond's busy tech professionals seeking low-maintenance solutions, our hybrid aluminum fence system delivers exceptional value. Black aluminum panels combined with cedar framing and pressure-treated posts create a sleek, modern appearance while dramatically reducing maintenance requirements compared to traditional wood fencing.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The aluminum panels never require staining, painting, or sealing - perfect for professionals in Overlake and Grass Lawn with demanding schedules. Cedar framework provides natural warmth and structural support while pressure-treated posts ensure long-term stability. This hybrid approach maintains competitive pricing with traditional wood while offering superior longevity and minimal upkeep. Ideal for properties wanting contemporary aesthetics without premium composite costs.
        </p>
      </div>
    </section>

    {/* Financing Section */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Fence Financing Options in Redmond
      </h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            We understand that premium fencing is an investment in your Redmond property. That's why we partner with Wisetack to offer flexible financing options that make modern fencing accessible. Our financing plans feature:
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
              <span>Quick pre-approval with soft credit check (no credit score impact)</span>
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
            Apply in minutes and get quick decisions. Install your dream fence now and pay over time with manageable monthly payments. <Link href="/financing" className="text-primary underline decoration-2 underline-offset-2">Learn more about Wisetack financing options</Link>.
          </p>
        </div>
        <Card className="p-6 bg-primary/5">
          <h3 className="text-xl font-semibold mb-4">Get Pre-Approved Today</h3>
          <p className="text-muted-foreground mb-4">
            Check your financing options with no impact to your credit score. Get approved and start your Redmond fence project immediately.
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
        Your Redmond fence installation includes comprehensive warranty protection exceeding industry standards. We stand behind our work with confidence because we use premium materials and installation techniques perfected over 30+ years.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Craftsmanship Warranty</h3>
              <p className="text-sm text-muted-foreground mb-3">
                We guarantee our installation workmanship with a comprehensive {WARRANTY_CONSTANTS.YEARS}-year warranty covering all labor and installation defects.
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
        Our warranties are fully transferable if you sell your Redmond property, adding value to your home. We're committed to your complete satisfaction and standing behind every fence for the long term.
      </p>
    </section>

    {/* Local Challenges & Solutions */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Redmond-Specific Installation Expertise
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Redmond's unique geography, HOA requirements, and wildlife challenges require specialized knowledge. Here's how we address the specific characteristics of your Redmond property:
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            HOA Compliance & Modern Design
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Redmond's newer developments feature strict HOA guidelines requiring specific fence styles and materials. We provide professional renderings and specifications meeting architectural committee requirements, ensuring smooth approval while delivering the contemporary aesthetics you desire.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Wildlife Deterrence
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Properties backing to Bridle Trails or greenbelt areas face persistent deer pressure. Our 8-foot fence heights with reinforced posts effectively deter wildlife while maintaining aesthetic appeal. We understand Redmond's balance between nature access and property protection.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Terrain & Slope Solutions
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Redmond's rolling terrain throughout Education Hill and Grass Lawn requires specialized installation techniques. We use step-down methods and custom panel sizes ensuring level appearance while following natural grade. Our Fence Genius technology maintains precision even on challenging slopes.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Low-Maintenance Solutions
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Tech professionals demand low-maintenance options fitting busy lifestyles. Our hybrid aluminum/cedar system and properly installed cedar fencing minimize ongoing maintenance while delivering the modern aesthetics Redmond homeowners expect. Quality materials reduce long-term costs.
          </p>
        </div>
      </div>
    </section>

    {/* Permit Information */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Redmond Fence Permits & Building Codes
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        The City of Redmond follows specific requirements outlined in <a href="https://www.redmond.gov/823/Building-Division" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">Redmond Development Services</a> regulations. Residential fences under 8 feet typically do not require building permits but must comply with zoning requirements including height limits and setback rules. Front yard fences are generally limited to 4 feet, while side and rear yard fences can be constructed up to 6 feet without special approval.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Many Redmond neighborhoods, particularly developments built since the 1990s near Microsoft campus and Overlake, have homeowners associations with detailed architectural guidelines. These often require pre-approval of fence designs with specifications covering board spacing, stain colors, and style restrictions. We recommend reviewing your CC&Rs and submitting designs to your architectural committee early in planning.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Properties backing to critical areas such as streams, wetlands, or steep slopes may require additional review under Redmond's environmental codes. The city protects Bear Creek and other waterways with buffer requirements affecting fence placement. Always verify exact property boundaries with current surveys before installation. For specific questions, contact Redmond Development Services at (425) 556-2470.
      </p>
    </section>

    {/* FAQ Section */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Frequently Asked Questions
      </h2>
      <Card className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">How long does a cedar fence last in Redmond?</h4>
          <p className="text-muted-foreground">
            A professionally installed cedar fence from MyFence.com in Redmond typically lasts 25-35 years with minimal maintenance. Our superior 4.125" x 4.125" posts provide nearly 5 square inches more cross-sectional area than box store posts, resisting the warping and rot that shorten fence lifespan. We install posts with concrete at surface level to prevent soil contact and rot, and source our cedar from Pacific Northwest mills for optimal moisture content and quality. Regular cleaning and re-staining every 3-5 years can extend your fence life beyond 35 years, making it a decades-long investment in your property.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">What fence height deters deer in Redmond?</h4>
          <p className="text-muted-foreground">
            For effective deer deterrence in Redmond's greenbelt-adjacent properties, we recommend 8-foot fence heights. Deer can jump 6-foot fences when motivated by garden plants or landscaping. Our 8-foot privacy fence installations use reinforced 4.125" x 4.125" posts for the additional strength required, ensuring your fence remains stable and straight for decades while protecting your landscaping investment from wildlife damage.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">How do I get HOA approval for my fence in Redmond?</h4>
          <p className="text-muted-foreground">
            We help streamline HOA approval by providing professional renderings and specifications that meet architectural committee requirements. Our experience with Redmond HOAs means we understand common approval criteria and can design fences that meet guidelines while achieving your privacy and aesthetic goals. We recommend submitting applications early and can adjust designs based on committee feedback to ensure approval. View our <Link href="/fence-styles" className="text-primary underline decoration-2 underline-offset-2">fence style gallery</Link> for HOA-approved options.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">What does fence installation cost in Redmond?</h4>
          <p className="text-muted-foreground">
            Cedar fence installation in Redmond typically ranges from $42-65 per linear foot depending on style, height, and materials. Horizontal designs and clear-grade cedar command premium pricing but deliver the modern aesthetics Redmond homeowners prefer. Sloped terrain may add 10-15% due to additional labor and materials. Get an instant estimate with our <Link href="/quote" className="text-primary underline decoration-2 underline-offset-2">Virtual Quote Tool</Link>, then we'll confirm exact pricing with an on-site measurement using Fence Genius.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">What's the best time to install a fence in Redmond?</h4>
          <p className="text-muted-foreground">
            Late spring through early fall (May-October) provides optimal conditions with less rainfall and warmer temperatures for concrete curing. However, we work year-round and can accommodate winter installations when needed. Redmond's slightly drier climate compared to Seattle means we have more workable days during shoulder seasons. Early summer installation allows time for concrete to fully cure before winter rains, maximizing the longevity of your fence foundation.
          </p>
        </div>
      </Card>
    </section>

    <section className="bg-muted/50 p-6 rounded-lg border">
      <p className="text-sm text-muted-foreground">
        <strong>Note:</strong> Regulations and HOA requirements are subject to change. Always verify current requirements with <a href="https://www.redmond.gov/823/Building-Division" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">Redmond Development Services</a> and your homeowners association before beginning your fence project. MyFence.com's extensive experience with Redmond installations helps ensure smooth approvals and quality results.
      </p>
    </section>

    <AboutCityModal cityName="Redmond" content={ABOUT_REDMOND_CONTENT} />
  </article>
);

const Redmond = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a cedar fence last in Redmond?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professionally installed cedar fence from MyFence.com in Redmond typically lasts 25-35 years with minimal maintenance. Our superior 4.125 inch x 4.125 inch posts provide nearly 5 square inches more cross-sectional area than box store posts, resisting the warping and rot that shorten fence lifespan. We install posts with concrete at surface level to prevent soil contact and rot."
        }
      },
      {
        "@type": "Question",
        "name": "What fence height deters deer in Redmond?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For effective deer deterrence in Redmond's greenbelt-adjacent properties, we recommend 8-foot fence heights. Deer can jump 6-foot fences when motivated by garden plants or landscaping. Our 8-foot privacy fence installations use reinforced 4.125 inch x 4.125 inch posts for the additional strength required."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get HOA approval for my fence in Redmond?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We help streamline HOA approval by providing professional renderings and specifications that meet architectural committee requirements. Our experience with Redmond HOAs means we understand common approval criteria and can design fences that meet guidelines while achieving your privacy and aesthetic goals."
        }
      },
      {
        "@type": "Question",
        "name": "What does fence installation cost in Redmond?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cedar fence installation in Redmond typically ranges from $42-65 per linear foot depending on style, height, and materials. Horizontal designs and clear-grade cedar command premium pricing but deliver the modern aesthetics Redmond homeowners prefer. Sloped terrain may add 10-15% due to additional labor and materials."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best time to install a fence in Redmond?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Late spring through early fall (May-October) provides optimal conditions with less rainfall and warmer temperatures for concrete curing. However, we work year-round and can accommodate winter installations when needed. Redmond's slightly drier climate compared to Seattle means we have more workable days during shoulder seasons."
        }
      }
    ]
  };

  const enhancedBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#organization`,
    "name": SITE_CONFIG.fullName,
    "legalName": SITE_CONFIG.legalName,
    "url": SITE_CONFIG.url,
    "logo": SITE_CONFIG.logoUrl,
    "image": SITE_CONFIG.logoUrl,
    "telephone": SITE_CONFIG.phone,
    "areaServed": {
      "@type": "City",
      "name": "Redmond",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": SITE_CONFIG.address.city,
      "addressRegion": SITE_CONFIG.address.state,
      "postalCode": SITE_CONFIG.address.zip,
      "addressCountry": SITE_CONFIG.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.coordinates.latitude,
      "longitude": SITE_CONFIG.coordinates.longitude
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <ServiceAreaTemplate 
      city="Redmond" 
      state="WA"
      heroTitle="Tech-Savvy Fence Installation for Redmond's Innovation District"
      heroDescription="Modern fencing solutions for Microsoft employees and tech families in Redmond. From Education Hill to Overlake, we combine contemporary designs with practical functionality for your active lifestyle and property needs."
      metaTitle="Redmond Fence Installation | Modern Tech-Family Designs"
      metaDescription="Tech-savvy fence installation in Redmond. Modern designs for Microsoft employees & tech families. Education Hill to Overlake. Contemporary solutions for active lifestyles. Call (253) 455-1885."
      zipCodes={["98052", "98053", "98073"]}
      neighborhoods={[
        {
          name: "Downtown Redmond",
          description: "Urban mixed-use district with modern properties demanding contemporary fence styles that complement city living and walkable lifestyle"
        },
        {
          name: "Education Hill",
          description: "Family-focused area near top-rated schools requiring secure fencing for children and pets with HOA-approved designs"
        },
        {
          name: "Overlake",
          description: "Tech hub neighborhood near Microsoft campus with professionals seeking modern horizontal designs and low-maintenance solutions"
        },
        {
          name: "Grass Lawn",
          description: "Established community with mature properties needing installations that preserve existing landscaping and complement traditional architecture"
        },
        {
          name: "Willows/Rose Hill",
          description: "Diverse residential area with varied housing types requiring flexible fence solutions from starter homes to luxury properties"
        },
        {
          name: "Idylwood",
          description: "Wooded neighborhood backing onto greenbelt needing wildlife-deterrent fencing and forest-edge installation expertise"
        },
        {
          name: "Bridle Trails",
          description: "Equestrian community with large lots requiring horse-safe post-and-rail fencing and compliance with horse-property codes"
        }
      ]}
      landmarks={[
        "Microsoft Campus",
        "Marymoor Park",
        "Redmond Town Center",
        "Sammamish River Trail",
        "Bridle Trails State Park",
        "Anderson Park",
        "Idylwood Park"
      ]}
      climateDescription="Redmond enjoys a temperate climate typical of the Eastside, with drier summers than Seattle proper but still significant winter rainfall. The city's many parks and green spaces mean properties often border natural areas, and the tech-hub community values both aesthetics and functionality."
      localChallenges={[
        "Proximity to forested areas attracting deer and wildlife",
        "HOA requirements in newer developments requiring specific styles",
        "Tech-savvy homeowners expecting modern, low-maintenance solutions",
        "Property values demanding premium materials and craftsmanship"
      ]}
      localSolutions={[
        "Contemporary horizontal cedar and hogwire designs popular with tech professionals",
        "HOA-compliant custom designs with architectural appeal",
        "Low-maintenance hybrid aluminum/cedar system for busy professionals",
        "Wildlife-deterrent height options without sacrificing aesthetics"
      ]}
      articleContent={<RedmondArticle />}
      faqStructuredData={faqStructuredData}
    />
  );
};

export default Redmond;
