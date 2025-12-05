import ServiceAreaTemplate from "./ServiceAreaTemplate";
import Seo from "@/components/Seo";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import AboutCityModal from "@/components/AboutCityModal";

const ABOUT_RENTON_CONTENT = `Renton, Washington sits at the southern tip of Lake Washington, a city of approximately 107,000 residents that has transformed from an industrial coal and lumber town into one of the Puget Sound region's most diverse and dynamic communities. Located 11 miles southeast of Seattle, Renton occupies the Cedar River valley where it meets the lake, creating a geography that ranges from waterfront to hillside within city limits.

The Duwamish people inhabited this valley for millennia before European American settlers arrived in the 1850s, drawn by the confluence of rivers and proximity to coal deposits. The city takes its name from Captain William Renton, who established lumber mills along the waterfront in the 1870s. Coal mining dominated the early economy, but Boeing's arrival in 1941 permanently altered Renton's trajectory. The company's massive assembly plant—still producing 737 aircraft—made Renton synonymous with aerospace manufacturing and brought waves of workers seeking nearby housing.

The city's geography creates distinct living environments within a compact area. Downtown Renton sits in the valley floor where the Cedar River enters Lake Washington, an area prone to moisture and historically subject to flooding before modern engineering. The Renton Highlands rise dramatically to the east, offering views of Mount Rainier and the Cascades from properties perched hundreds of feet above the valley. Kennydale hugs the Lake Washington shoreline with waterfront homes and parks. Fairwood and East Renton Plateau spread across the elevated terrain to the east, featuring newer suburban development.

Lake Washington and the Cedar River dominate Renton's climate and character. The valley's low elevation creates a bowl effect that traps moisture and fog, particularly during fall and winter months. Properties near the water experience higher humidity than hillside locations just a mile away. Annual rainfall averages about 38 inches, similar to Seattle, but the valley floor retains moisture longer due to limited air circulation. Summers bring welcome relief with warm, dry conditions and temperatures reaching the mid-70s.

Renton's transformation over the past two decades reflects broader regional trends. What was once a blue-collar aerospace town has become remarkably diverse—the city's population is now majority-minority, with large Vietnamese, East African, and Hispanic communities reshaping the cultural landscape. Restaurants along Rainier Avenue serve cuisine from dozens of countries. This diversity extends to housing: lakefront mansions in Kennydale contrast sharply with modest valley homes and new apartment complexes near the transit center.

The economic base has diversified beyond Boeing. IKEA's only Pacific Northwest store anchors The Landing shopping development. Healthcare, logistics, and technology companies have established presences. The city's affordability relative to Seattle and the Eastside continues attracting families and businesses seeking value. Light rail extension plans promise to strengthen connections to Seattle and Bellevue, likely accelerating development pressure in transit-accessible neighborhoods.

Gene Coulon Memorial Beach Park represents Renton's relationship with its waterfront—a beloved public space where residents gather for swimming, picnicking, and evening walks along Lake Washington. The Cedar River Trail provides a green corridor through the valley, connecting to a regional trail network. These amenities, combined with proximity to major employers and relative affordability, make Renton an increasingly attractive option for families seeking the benefits of urban access without Seattle's costs.`;

const RentonArticle = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-3xl font-bold mb-6">Professional Fence Installation in Renton</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p>
          Renton's unique geography—from Lake Washington's waterfront properties to the elevated Renton Highlands—demands versatile fencing expertise. At {SITE_CONFIG.fullName}, we specialize in installations that adapt to Renton's diverse terrain, climate variations, and neighborhood requirements.
        </p>
        <p>
          Whether you're securing a lakefront property in Kennydale, installing on a Highlands hillside, or fencing a family home in Fairwood, our team brings the local knowledge and technical skills to deliver exceptional results. We understand how Renton's valley microclimate affects wood durability and design our installations accordingly.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Why Renton Homeowners Choose {SITE_CONFIG.shortName}</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border">
          <div className="text-4xl font-bold text-primary mb-2">12+</div>
          <div className="text-lg font-semibold mb-2">Years Experience</div>
          <p className="text-muted-foreground">Serving Renton and the Greater Seattle area with expert craftsmanship</p>
        </div>
        <div className="bg-card p-6 rounded-lg border">
          <div className="text-4xl font-bold text-primary mb-2">98%</div>
          <div className="text-lg font-semibold mb-2">Customer Satisfaction</div>
          <p className="text-muted-foreground">Backed by hundreds of 5-star reviews from Renton neighbors</p>
        </div>
        <div className="bg-card p-6 rounded-lg border">
          <div className="text-4xl font-bold text-primary mb-2">{WARRANTY_CONSTANTS.YEARS}-Year</div>
          <div className="text-lg font-semibold mb-2">Workmanship Warranty</div>
          <p className="text-muted-foreground">Comprehensive coverage on all installations for your peace of mind</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Flexible Financing Options in Renton</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p>
          We understand that a quality fence is an investment in your property. That's why we partner with Wisetack to offer flexible financing solutions for Renton homeowners. Get approved in minutes with no impact to your credit score during the application process.
        </p>
        <div className="bg-muted/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Financing Benefits:</h3>
          <ul className="space-y-2">
            <li>✓ Quick approval process—often in minutes</li>
            <li>✓ Competitive rates and flexible terms</li>
            <li>✓ No prepayment penalties</li>
            <li>✓ Easy monthly payments that fit your budget</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Our {WARRANTY_CONSTANTS.YEARS}-Year Workmanship Warranty</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p>
          Every fence we install in Renton comes with our comprehensive {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty. This warranty covers all aspects of installation, from post setting to final board placement, giving you complete confidence in your investment.
        </p>
        <p>
          We stand behind our work because we use premium materials, proven techniques, and meticulous attention to detail on every Renton project—whether it's a simple repair or a complete perimeter fence for a large Fairwood property.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Renton's Climate and Your Fence</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p>
          Renton's valley location creates a unique microclimate with increased moisture retention in low-lying areas near the Cedar River and Lake Washington. Our installations account for these conditions with enhanced drainage systems and moisture-resistant treatments.
        </p>
        <p>
          For hillside properties in areas like Renton Highlands and East Renton Plateau, we implement specialized slope techniques and reinforced post systems that handle both drainage challenges and the structural demands of elevated terrain.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Do you install fences in all Renton neighborhoods?</h3>
          <p className="text-muted-foreground">
            Yes, we serve all Renton neighborhoods including Renton Highlands, Kennydale, Fairwood, Cascade, East Renton Plateau, Sunset, and Downtown Renton. Our team is experienced with the unique terrain and requirements of each area, from lakefront properties to hillside installations.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">How do you handle moisture issues in valley areas of Renton?</h3>
          <p className="text-muted-foreground">
            For low-lying areas near the Cedar River and Lake Washington, we implement enhanced drainage systems, use pressure-treated posts rated for ground contact, and apply moisture-resistant treatments. We also design installations with proper grading to prevent water accumulation around fence posts.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Can you install fences on Renton Highlands hillsides?</h3>
          <p className="text-muted-foreground">
            Absolutely. We specialize in hillside installations throughout Renton Highlands and East Renton Plateau. Our slope-specific techniques include stepped designs, reinforced post systems, and proper drainage integration that preserves views while providing privacy and security.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">What's the typical timeline for fence installation in Renton?</h3>
          <p className="text-muted-foreground">
            Most residential fence installations in Renton are completed in 1-3 days, depending on project size and terrain complexity. We work efficiently to minimize disruption while maintaining our high standards. Hillside and large property installations may require additional time.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Do you offer financing for Renton fence projects?</h3>
          <p className="text-muted-foreground">
            Yes, we partner with Wisetack to offer flexible financing options for Renton homeowners. Get approved in minutes with competitive rates, flexible terms, and no prepayment penalties. This makes it easy to invest in a quality fence that fits your budget.
          </p>
        </div>
      </div>
    </section>

    <AboutCityModal cityName="Renton" content={ABOUT_RENTON_CONTENT} />
  </div>
);

const rentonFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you install fences in all Renton neighborhoods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we serve all Renton neighborhoods including Renton Highlands, Kennydale, Fairwood, Cascade, East Renton Plateau, Sunset, and Downtown Renton. Our team is experienced with the unique terrain and requirements of each area, from lakefront properties to hillside installations."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle moisture issues in valley areas of Renton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For low-lying areas near the Cedar River and Lake Washington, we implement enhanced drainage systems, use pressure-treated posts rated for ground contact, and apply moisture-resistant treatments. We also design installations with proper grading to prevent water accumulation around fence posts."
      }
    },
    {
      "@type": "Question",
      "name": "Can you install fences on Renton Highlands hillsides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in hillside installations throughout Renton Highlands and East Renton Plateau. Our slope-specific techniques include stepped designs, reinforced post systems, and proper drainage integration that preserves views while providing privacy and security."
      }
    },
    {
      "@type": "Question",
      "name": "What's the typical timeline for fence installation in Renton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential fence installations in Renton are completed in 1-3 days, depending on project size and terrain complexity. We work efficiently to minimize disruption while maintaining our high standards. Hillside and large property installations may require additional time."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer financing for Renton fence projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we partner with Wisetack to offer flexible financing options for Renton homeowners. Get approved in minutes with competitive rates, flexible terms, and no prepayment penalties. This makes it easy to invest in a quality fence that fits your budget."
      }
    }
  ]
};

const rentonLocalBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.url}/service-areas/renton#business`,
  "name": `${SITE_CONFIG.fullName} - Renton`,
  "image": SITE_CONFIG.logoUrl,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE_CONFIG.address.street,
    "addressLocality": "Renton",
    "addressRegion": SITE_CONFIG.address.state,
    "postalCode": "98055",
    "addressCountry": SITE_CONFIG.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.4829,
    "longitude": -122.2171
  },
  "telephone": SITE_CONFIG.phone,
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Renton",
    "containedIn": {
      "@type": "State",
      "name": "Washington"
    }
  },
  "url": `${SITE_CONFIG.url}/service-areas/renton`,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
};

const Renton = () => {
  const structuredData = [rentonFaqLd, rentonLocalBusinessLd];
  
  return (
    <>
      <Seo
        title="Renton Fence Installation | Waterfront & Hillside"
        description="Versatile fence installation across Renton's growing communities. Lake Washington waterfront to Highlands hillsides. Diverse terrain & housing style experts. Quality solutions. Call (253) 478-8589."
        canonical={`${SITE_CONFIG.url}/service-areas/renton`}
        structuredData={structuredData}
      />
      <ServiceAreaTemplate 
        city="Renton" 
        state="WA"
        heroTitle="Versatile Fence Installation Across Renton's Growing Communities"
        heroDescription="From Lake Washington waterfront to Highlands hillside properties, we handle Renton's diverse terrain and housing styles. Quality fencing solutions for established neighborhoods and new developments alike."
        metaTitle="Renton Fence Installation | Waterfront & Hillside"
        metaDescription="Versatile fence installation across Renton's growing communities. Lake Washington waterfront to Highlands hillsides. Diverse terrain & housing style experts. Quality solutions. Call (253) 478-8589."
      zipCodes={["98055", "98056", "98057", "98058", "98059"]}
      neighborhoods={[
        {
          name: "Renton Highlands",
          description: "Elevated hillside community with stunning views demanding slope installations that preserve vistas while providing privacy"
        },
        {
          name: "Kennydale",
          description: "Lakefront neighborhood on Lake Washington requiring marine-resistant installations and designs that preserve water access"
        },
        {
          name: "Fairwood",
          description: "Large suburban development with family-oriented properties needing extensive fence runs and secure boundaries for active lifestyles"
        },
        {
          name: "Cascade",
          description: "Established residential area with mix of property ages requiring flexible solutions from repairs to complete replacements"
        },
        {
          name: "East Renton Plateau",
          description: "Newer developments with modern homes demanding contemporary fence designs and HOA-compliant installations"
        },
        {
          name: "Sunset",
          description: "Valley-floor neighborhood with moisture considerations requiring enhanced drainage and rot-resistant materials"
        },
        {
          name: "Downtown Renton",
          description: "Urban core with mixed housing types needing compact installations and solutions for smaller city lots"
        }
      ]}
      landmarks={[
        "Gene Coulon Memorial Beach Park",
        "Cedar River Trail",
        "The Landing",
        "Cougar Mountain Regional Wildland Park",
        "Philip Arnold Park",
        "Liberty Park",
        "Renton History Museum"
      ]}
      climateDescription="Renton's valley location creates a unique microclimate with slightly warmer summers and cooler winters than surrounding areas. Proximity to Lake Washington and the Cedar River means increased moisture in low-lying areas, while hillside properties face different drainage considerations."
      localChallenges={[
        "Varied elevation across neighborhoods requiring different approaches",
        "Moisture retention in valley areas accelerating wood weathering",
        "Mix of older and newer properties with different needs",
        "Boeing workforce seeking quick turnaround times",
        "Proximity to parks and trails requiring secure boundaries"
      ]}
      localSolutions={[
        "Elevation-appropriate drainage systems for hillside installs",
        "Fast, professional installation respecting busy schedules",
        "Renovation-friendly solutions for older properties",
        "Enhanced moisture protection for low-lying areas",
        "Pet-friendly secure fencing for active families"
      ]}
      articleContent={<RentonArticle />}
      faqStructuredData={rentonFaqLd}
      enhancedBusinessData={rentonLocalBusinessLd}
    />
    </>
  );
};

export default Renton;
