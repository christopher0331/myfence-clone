"use client";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Shield, CheckCircle2 } from "lucide-react";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";

const BELLEVUE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Bellevue Botanical Garden",
    url: "https://bellevuebotanical.org/",
    description:
      "A 53-acre public garden tucked between residential neighborhoods on Main Street. The grounds include a native plant loop, a rock garden, and a suspension bridge walkway through the upper canopy. Every December the Garden d'Lights event turns the pathways into a half-million-bulb light display.",
  },
  {
    name: "Bellevue Arts Museum",
    url: "https://www.bellevuearts.org/",
    description:
      "Housed in a Steven Holl-designed building on Bellevue Way, BAM focuses on craft, design, and regional art. The rotating gallery program spotlights everything from blown glass to mixed-media sculpture, and the annual summertime arts fair fills the surrounding blocks with vendor booths and live demonstrations.",
  },
  {
    name: "Mercer Slough Nature Park",
    url: "https://parks.bellevuewa.gov/parks-open-spaces/parks/mercer-slough-nature-park/",
    description:
      "The largest remaining wetland on Lake Washington — 320 acres of peat bog, blueberry farms, and boardwalk trails right off Bellevue Way SE. Canoe and kayak rentals are available at the Sweyolocken boat launch from spring through fall.",
  },
  {
    name: "The Bellevue Collection",
    url: "https://www.thebellevuecollection.com/",
    description:
      "Three connected properties — Bellevue Square, Lincoln Square, and Bellevue Place — that make up the Eastside's largest retail and dining destination. The complex also hosts the Hyatt Regency, a 16-screen cinema, and the winter holiday Snowflake Lane parade along Bellevue Way each evening in December.",
  },
  {
    name: "Meydenbauer Beach Park",
    url: "https://parks.bellevuewa.gov/parks-open-spaces/parks/meydenbauer-beach-park/",
    description:
      "One of Bellevue's few public Lake Washington beach access points, rebuilt in 2019 with a new swimming dock, waterfront promenade, and covered picnic pavilion. It sits at the foot of 100th Avenue NE, a short walk from the downtown core.",
  },
];

const BellevueArticle = () => (
  <article className="space-y-12">
    {/* Company Introduction */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Your Local Bellevue Fence Company
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
        How We Install Fences on the Eastside
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        MyFence.com takes Bellevue fence installation seriously. When we install your fence, we arrive fully prepared with all materials and professional-grade tools. Our 98%+ on-time installation rate is industry-leading because your time is valuable. We maintain a comprehensive stock of premium fence materials, ensuring we complete your Bellevue fence installation on schedule without delays. On installation day, our experienced team works efficiently while maintaining meticulous attention to detail. Once complete, we perform a thorough quality review with you to ensure complete satisfaction.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Our Fence Genius technology revolutionizes the installation process. By manufacturing precision-cut panels off-site, we reduce installation time by 30-50% compared to traditional methods while ensuring perfect measurements every time. This means less disruption to your Bellevue property and faster project completion without compromising quality. Whether you're installing a fence in Downtown Bellevue's luxury properties or Somerset's hillside estates, our team has the expertise to handle any terrain or architectural requirement.
      </p>
    </section>

    {/* Fence Types Section */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Fence Types & Materials We Install
      </h2>
      
      {/* Cedar Fencing */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Cedar Fencing for the Eastside</h3>
        <p className="text-muted-foreground leading-relaxed">
          At MyFence.com, we provide Bellevue cedar fence products that are engineered to last in the Pacific Northwest's challenging climate. We use premium Western Red Cedar, nature's most naturally rot-resistant wood species with oils that repel insects and resist decay. For Bellevue's luxury properties in neighborhoods like Medina and Clyde Hill, we offer clear-grade cedar (zero knots) that provides superior appearance and 15+ years of longevity with proper maintenance. Our cedar fences are built using heavy-duty lumber that exceeds industry standards, ensuring structural integrity even during windstorms.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Every cedar fence installation includes marine-grade stainless steel fasteners specifically chosen for Bellevue's high-humidity microclimate created by the dual-lake effect. We use triple-sealed joinery systems and premium pressure-treated posts that resist the moisture exposure 15-20% higher than Seattle experiences. Our optional <Link href="/fence-upgrades/post-on-pipe" className="text-primary underline decoration-2 underline-offset-2">Post-on-Pipe upgrade</Link> adds decades to your fence life by eliminating ground contact and wood rot at the post base.
        </p>
      </div>

      {/* Materials We Install */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">What We Specialize In</h3>
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
        <h3 className="text-2xl font-semibold">Hybrid Aluminum — Low Maintenance, Modern Look</h3>
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
        Financing Your New Fence
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
        <Card className="

// ...[middle truncated — you MUST preserve every export listed below]...

5
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
    <>
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
          description: "Hillside properties with panoramic views demanding slope installations and sound-dampening solutions for I-90 traffic noise. Click to learn more →",
          link: "/service-areas/bellevue/somerset"
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
          description: "Mixed residential zones near commercial districts needing privacy screening and decorative fencing to complement varied home styles. Click to learn more →",
          link: "/service-areas/bellevue/eastgate"
        },
        {
          name: "Sherwood Forest",
          description: "Wooded residential neighborhood near Phantom Lake with mature evergreen canopy requiring tree-friendly fence installation and root-conscious post placement. Click to learn more →",
          link: "/service-areas/bellevue/sherwood-forest"
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
          description: "Wooded hillside community with steep slopes and tall trees requiring reinforced posts and drainage-integrated designs. Click to learn more →",
          link: "/service-areas/bellevue/newport-hills"
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
      articleContent={<BellevueArticle />}
      faqStructuredData={faqStructuredData}
      enhancedBusinessData={enhancedBusinessData}
    />
    <AboutTheArea
      cityName="Bellevue"
      attractions={BELLEVUE_ATTRACTIONS}
      localLivingContent={
        <>
          <p>
            Families moving to Bellevue usually start with the{" "}
            <a href="https://bsd405.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
              Bellevue School District
            </a>
            , which consistently places in the state's top five and anchors neighborhoods like Somerset, Newport Hills, and Crossroads.{" "}
            <a href="https://www.bellevuecollege.edu/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
              Bellevue College
            </a>
            {" "}draws students from across the Eastside, and the{" "}
            <a href="https://kcls.org/locations/1502/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
              Bellevue Library
            </a>
            {" "}on 110th Ave NE is one of King County's busiest branches. The city's{" "}
            <a href="https://bellevuewa.gov/city-government/departments/parks" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
              Parks & Community Services department
            </a>
            {" "}maintains over 100 parks and 80+ miles of trails connecting neighborhoods across town.
          </p>
          <p>
            The dining scene on the Eastside has come into its own — spots like{" "}
            <a href="https://www.bisOnmain.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
              Bis on Main
            </a>
            {" "}and{" "}
            <a href="https://www.wildginger.net/bellevue-1" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
              Wild Ginger Bellevue
            </a>
            {" "}have been Eastside staples for years, and newer arrivals in the Spring District keep the options growing. For outdoor access close to home, the{" "}
            <a href="https://www.wta.org/go-hiking/hikes/coal-creek-falls" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
              Coal Creek Trail
            </a>
            {" "}runs through a forested ravine between Factoria and Newcastle, and the{" "}
            <a href="https://bellevuefarmersmarket.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
              Bellevue Farmers Market
            </a>
            {" "}sets up every Thursday from spring through fall with local produce, baked goods, and flower vendors.
          </p>
        </>
      }
    />
    </>
  );
};

export default Bellevue;