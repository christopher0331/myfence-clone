"use client";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import { SITE_CONFIG } from "@/constants/siteConfig";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";

const TukwilaArticle = () => (
  <article className="space-y-12">
    {/* Company Introduction */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Tukwila Fence Company - MyFence.com
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
        Looking for reliable fence installation in Tukwila? MyFence.com brings 30+ years of experience to this uniquely positioned city where residential neighborhoods meet major commercial corridors. As a father-son team, we understand Tukwila's diverse property types—from hillside homes in Riverton Heights to compact lots near the bustling retail district. Our Fence Genius technology ensures precision installations that maximize your property's security and value.
      </p>
    </section>

    {/* Tukwila Fence Installation */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Our Local Installation Approach
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Tukwila's mix of commercial adjacency, highway proximity, and river valley terrain creates installation scenarios unlike anywhere else in the region. Properties backing onto busy corridors need sound-dampening height and density. Lots near the Green River require moisture-conscious construction. Hillside homes in Cascade View demand slope-specific engineering. We've installed fences throughout every Tukwila neighborhood and understand what each area demands.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Our <Link href="/fence-genius" className="text-primary underline decoration-2 underline-offset-2">Fence Genius</Link> pre-fabrication system is especially valuable in Tukwila's diverse terrain. We measure precisely, manufacture panels at our shop, and arrive ready for efficient installation—critical when working in areas with limited staging space or time-sensitive commercial neighbors. Most residential projects complete in 1-2 days, minimizing disruption to your schedule and your neighborhood.
      </p>
    </section>

    {/* Fence Types Section */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Fence Types & Materials We Install
      </h2>
      
      {/* Cedar Fencing */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Cedar Built for River Valley Conditions</h3>
        <p className="text-muted-foreground leading-relaxed">
          Tukwila's position between the Green and Duwamish Rivers means elevated humidity in low-lying areas. Properties in Foster, Allentown, and along the river corridors face persistent moisture that accelerates wood decay in poorly-designed fences. We source Western Red Cedar with tight grain and concentrated natural oils—the characteristics that resist rot even in constantly damp environments.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Every Tukwila cedar installation uses pressure-treated posts set in properly-drained concrete, stainless steel fasteners rated for high humidity, and construction techniques developed over decades of river valley work. For properties closest to waterways, our <Link href="/fence-upgrades/post-on-pipe" className="text-primary underline decoration-2 underline-offset-2">Post-on-Pipe system</Link> eliminates ground contact entirely—the single most effective way to prevent post rot in Tukwila's moisture-rich soil.
        </p>
      </div>

      {/* Materials We Install */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Three Systems That Perform in Tukwila</h3>
        <p className="text-muted-foreground leading-relaxed">
          Rather than offering every fence type imaginable, we've focused on three systems we know perform reliably in Tukwila's conditions: Western Red Cedar, Hogwire, and our Hybrid Aluminum/Cedar design. Our crews have installed hundreds of each throughout the South King County region—when challenges arise, they've seen them before.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Cedar fencing</strong> delivers privacy and noise reduction for homes bordering commercial areas—picture frame and solid board styles are popular in Riverton Heights and Cascade View. <strong>Hogwire panels</strong> suit properties wanting boundaries without blocking light, common along the Interurban Trail corridor. <strong>Hybrid Aluminum/Cedar</strong> appeals to busy households near Southcenter who want security without maintenance obligations.
        </p>
      </div>

      {/* Other Materials - Information Only */}
      <div className="space-y-3 border-l-4 border-muted pl-4">
        <h3 className="text-2xl font-semibold text-muted-foreground">Materials We Don't Install (And Why)</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          <em>Sharing this so you can make informed comparisons—not to talk you out of options we don't carry.</em>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Vinyl becomes brittle after UV exposure and cracks in temperature swings—we've seen failures throughout older Tukwila neighborhoods. Chain-link and ornamental iron rust despite galvanizing claims, especially in the river valley's constant humidity. Composite boards handle moisture but expand and contract with temperature changes, creating gaps over time. We'd rather focus on materials we can warranty with confidence.
        </p>
      </div>

      {/* Hybrid Aluminum System */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Zero-Maintenance Fencing for Busy Tukwila Households</h3>
        <p className="text-muted-foreground leading-relaxed">
          Many Tukwila residents commute to Seattle, Bellevue, or the airport employment zone—weekends are for enjoying life, not maintaining a fence. Our hybrid aluminum/cedar system eliminates that obligation: powder-coated aluminum panels that look identical in year ten as they did on installation day. No staining, no sealing, no pressure washing.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The cedar post-and-rail frame adds natural warmth that all-metal fences lack, blending with established landscaping throughout Tukwila's hillside neighborhoods. Pressure-treated posts handle ground contact so the cedar stays dry. Popular with families near the light rail station who want low-maintenance modern living.
        </p>
      </div>
    </section>

    {/* Financing Section */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Financing Your New Fence
      </h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            A quality fence shouldn't require draining savings or waiting until next year. Through our partnership with Wisetack, Tukwila homeowners can install now and pay over time—simple application, fixed monthly payments, no surprises.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Finance $1,000 to $25,000 depending on project scope</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Soft credit check for pre-approval—no impact to your score</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Most applicants approved same day</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Fixed monthly payments you can plan around</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Plenty of Tukwila homeowners finance their fences—it's a practical way to handle home improvements. <Link href="/financing" className="text-primary underline decoration-2 underline-offset-2">See current rates and terms</Link>.
          </p>
        </div>
        <Card className="p-6 bg-primary/5">
          <h3 className="text-xl font-semibold mb-4">Check Your Options in 2 Minutes</h3>
          <p className="text-muted-foreground mb-4">
            Pre-qualify without affecting your credit. Know your budget before we come out for an estimate.
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
        Our Commitment to the Local Community
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Our {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty means if something we installed fails, we come back and fix it. Posts leaning? Gates binding? Hardware pulling loose? Call us and we'll handle it—no arguing about causes or conditions.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Workmanship Coverage</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Covers our installation work—how we set posts, attach rails, hang gates, and secure panels.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Post stability and alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gate operation and swing clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Fastener holding and attachment points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Panel and rail connections</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <p className="text-sm text-muted-foreground">
        Selling your Tukwila home? The warranty transfers to the new owner—an asset when listing your property.
      </p>
    </section>

    {/* Local Challenges & Solutions */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Installation Expertise for Local Terrain
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Tukwila's unique position between major highways, rivers, and commercial centers creates installation challenges that general contractors often misunderstand. Here's how we address Tukwila's specific conditions:
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Commercial Boundary Solutions
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Properties bordering Southcenter or other commercial areas need privacy fences that reduce noise and block sightlines. We design 6-8 foot solid installations with tight board spacing that create effective buffers between residential and commercial zones.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            River Valley Moisture Protection
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Low-lying areas near the Green and Duwamish Rivers experience elevated humidity that accelerates wood decay. We use premium pressure treatments, stainless hardware, and Post-on-Pipe systems for properties with persistent moisture exposure.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Hillside Installation
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Cascade View and Riverton Heights feature slopes that require stepped fence designs and reinforced post anchoring. We engineer installations that follow terrain while maintaining structural integrity and level sight lines.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Compact Lot Navigation
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Many Tukwila neighborhoods feature smaller lots with limited access. We stage materials efficiently, hand-carry panels when needed, and use pre-fabricated components to minimize on-site cutting and debris.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
      <Card className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">How do you handle fences near Tukwila's commercial areas?</h4>
          <p className="text-muted-foreground">
            Properties bordering Southcenter or other commercial zones benefit from 6-8 foot solid board or picture frame fences with tight spacing. These designs maximize privacy and noise reduction while maintaining residential aesthetics. We also ensure proper drainage to handle runoff from adjacent parking areas.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">What about moisture issues near the Green River?</h4>
          <p className="text-muted-foreground">
            River valley properties require extra moisture protection. We use premium pressure-treated posts, stainless steel fasteners, and proper concrete drainage around post bases. For properties closest to waterways, our Post-on-Pipe upgrade eliminates ground contact entirely—the most effective rot prevention available.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Do I need a permit for my fence in Tukwila?</h4>
          <p className="text-muted-foreground">
            Fences under 8 feet typically don't require permits in Tukwila, but must meet setback and height requirements. Front yard fences are generally limited to 4 feet; side and rear can go up to 6 feet. Properties in certain zones may have additional requirements. Contact the <a href="https://www.tukwilawa.gov/departments/community-development/" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">Tukwila Community Development Department</a> for specific guidance.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">How quickly can you complete a typical Tukwila fence?</h4>
          <p className="text-muted-foreground">
            Most standard backyard fences install in 1-2 days. Our pre-fabricated panels arrive cut to your measurements, so installation day focuses on assembly rather than cutting. We haul out all debris the same day—no pile of old fence sitting in your yard.
          </p>
        </div>
      </Card>
    </section>

    <section className="bg-muted/50 p-6 rounded-lg border">
      <p className="text-sm text-muted-foreground">
        <strong>Note:</strong> Regulations and requirements are subject to change. Always verify current requirements with the <a href="https://www.tukwilawa.gov/departments/community-development/" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">Tukwila Community Development Department</a> before beginning your fence project.
      </p>
    </section>

  </article>
);

const Tukwila = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you handle fences near Tukwila's commercial areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Properties bordering Southcenter or other commercial zones benefit from 6-8 foot solid board or picture frame fences with tight spacing. These designs maximize privacy and noise reduction while maintaining residential aesthetics. We also ensure proper drainage to handle runoff from adjacent parking areas."
        }
      },
      {
        "@type": "Question",
        "name": "What about moisture issues near the Green River?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "River valley properties require extra moisture protection. We use premium pressure-treated posts, stainless steel fasteners, and proper concrete drainage around post bases. For properties closest to waterways, our Post-on-Pipe upgrade eliminates ground contact entirely—the most effective rot prevention available."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for my fence in Tukwila?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fences under 8 feet typically don't require permits in Tukwila, but must meet setback and height requirements. Front yard fences are generally limited to 4 feet; side and rear can go up to 6 feet. Properties in certain zones may have additional requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you complete a typical Tukwila fence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most standard backyard fences install in 1-2 days. Our pre-fabricated panels arrive cut to your measurements, so installation day focuses on assembly rather than cutting. We haul out all debris the same day."
        }
      }
    ]
  };

  const enhancedBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MyFence.com - Tukwila Fence Installation",
    "image": "https://myfence.com/myfence-logo.png",
    "@id": "https://myfence.com/service-areas/tukwila",
    "url": "https://myfence.com/service-areas/tukwila",
    "telephone": SITE_CONFIG.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Tukwila",
      "addressLocality": "Tukwila",
      "addressRegion": "WA",
      "postalCode": "98188",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.4740,
      "longitude": -122.2610
    },
    "areaServed": {
      "@type": "City",
      "name": "Tukwila"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const tukwilaAttractions: LocalAttraction[] = [
    {
      name: "Bullwinkle's Family Fun Center",
      description: "A major entertainment destination offering go-karts, miniature golf, bumper boats, and an extensive arcade for family-friendly fun.",
      url: "https://bullwinkles.com/tukwila/"
    },
    {
      name: "Westfield Southcenter",
      description: "The largest shopping mall in the Pacific Northwest, featuring hundreds of retail stores, dining options, and entertainment venues.",
      url: "https://www.westfield.com/southcenter"
    },
    {
      name: "The Museum of Flight",
      description: "Located nearby, this world-class aviation museum showcases historic aircraft, interactive exhibits, and space exploration artifacts.",
      url: "https://www.museumofflight.org/"
    },
    {
      name: "Tukwila Community Center",
      description: "A modern recreational hub situated along the Duwamish River, offering fitness programs, a spray park, and sports fields.",
      url: "https://www.tukwilawa.gov/departments/parks-and-recreation/parks-and-trails/tukwila-community-center/"
    },
    {
      name: "Crystal Springs Park",
      description: "An 11-acre wooded park boasting peaceful walking trails, tennis courts, and historic natural springs used by early pioneers.",
      url: "https://www.tukwilawa.gov/departments/parks-and-recreation/parks-and-trails/crystal-springs-park/"
    }
  ];

  const tukwilaLivingContent = (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        Located just south of Seattle, Tukwila is a vibrant city known for its unparalleled retail and entertainment options. It is home to <a href="https://www.westfield.com/southcenter" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Westfield Southcenter</a>, the largest shopping mall in the Pacific Northwest, drawing visitors from across the region. The city offers excellent connectivity via the <a href="https://www.soundtransit.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Sound Transit</a> network, making commuting and exploring a breeze. Families appreciate the active programs available at the <a href="https://www.tukwilawa.gov/departments/parks-and-recreation/parks-and-trails/tukwila-community-center/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Tukwila Community Center</a>, as well as the educational resources provided by the <a href="https://www.tukwilaschools.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Tukwila School District</a>.
      </p>
      <p>
        Beyond its commercial hubs, Tukwila boasts plenty of natural beauty and outdoor recreation. The scenic <a href="https://www.kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/green-river-trail" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Green River Trail</a> winds through the city, offering miles of paved pathways for cycling and walking. Residents can relax under the trees at <a href="https://www.tukwilawa.gov/departments/parks-and-recreation/parks-and-trails/crystal-springs-park/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Crystal Springs Park</a>, or enjoy sports and picnics at <a href="https://www.tukwilawa.gov/departments/parks-and-recreation/parks-and-trails/fort-dent-park/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Fort Dent Park</a>, the largest park in the city. The dynamic blend of expansive commercial centers, diverse dining along International Boulevard, and beautiful riverfront parks makes Tukwila a unique and thriving place to call home.
      </p>
    </div>
  );

  return (
    <>
      <ServiceAreaTemplate 
      city="Tukwila" 
      state="WA"
      heroTitle="Professional Fence Installation Where Commerce Meets Community"
      heroDescription="Quality fencing for Tukwila's unique neighborhoods—from Riverton Heights hillsides to Foster's transit-oriented living. Expert installations that handle river valley moisture, commercial adjacency, and diverse terrain throughout South King County."
      metaTitle="Tukwila Fence Installation | River Valley & Hillside Experts"
      metaDescription="Professional fence installation in Tukwila, WA. River valley moisture protection, commercial-adjacent privacy solutions. Riverton Heights to Foster. 30+ years experience. Call (253) 455-1885."
      zipCodes={["98188", "98168", "98178"]}
      neighborhoods={[
        {
          name: "Riverton Heights",
          description: "Hillside neighborhood with views toward Mount Rainier requiring slope-adapted installations and premium materials"
        },
        {
          name: "Cascade View",
          description: "Elevated community with Cascade Mountain views demanding stepped fence designs that follow terrain"
        },
        {
          name: "Foster",
          description: "Transit-oriented area near light rail experiencing redevelopment, mixing older homes with new construction"
        },
        {
          name: "McMicken Heights",
          description: "Airport-adjacent neighborhood where sound-dampening fence designs provide valuable noise reduction"
        },
        {
          name: "Allentown",
          description: "Established residential area with mix of property ages requiring flexible solutions"
        },
        {
          name: "Thorndyke",
          description: "Quiet suburban neighborhood with traditional homes seeking classic cedar privacy fencing"
        }
      ]}
      landmarks={[
        "Westfield Southcenter",
        "Green River Trail",
        "Tukwila Community Center",
        "Interurban Trail",
        "Fort Dent Park",
        "Tukwila Light Rail Station"
      ]}
      climateDescription="Tukwila's river valley position creates higher humidity than surrounding areas, especially near the Green and Duwamish Rivers. Low-lying neighborhoods experience morning fog and persistent moisture during fall and winter. Hillside properties face different drainage patterns."
      articleContent={<TukwilaArticle />}
      faqStructuredData={faqStructuredData}
      enhancedBusinessData={enhancedBusinessData}
      videoTags={[
        { label: "Craftsman Style", link: "/fence-styles/craftsman-style-fence" },
        { label: "Board on Board", link: "/fence-upgrades/board-on-board" },
        { label: "Pre Stained", link: "/pre-staining-cedar-fence" },
        { label: "Rot Board", link: "/fence-upgrades/rot-board" }
      ]}
    />
      <AboutTheArea 
        cityName="Tukwila"
        attractions={tukwilaAttractions}
        localLivingContent={tukwilaLivingContent}
      />
    </>
  );
};

export default Tukwila;
