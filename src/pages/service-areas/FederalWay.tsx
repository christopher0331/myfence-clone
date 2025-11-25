import ServiceAreaTemplate from "./ServiceAreaTemplate";
import Seo from "@/components/Seo";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const FederalWayArticle = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-3xl font-bold mb-6">Professional Fence Installation in Federal Way, WA</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p>
          Federal Way homeowners trust {SITE_CONFIG.fullName} for premium cedar fence installations designed to withstand the area's coastal climate. From Dash Point's waterfront properties to Steel Lake's established neighborhoods, we deliver fence solutions engineered for the Pacific Northwest's persistent moisture and marine air.
        </p>
        <p>
          Our Federal Way installations combine marine-grade materials with expert craftsmanship, ensuring your fence performs beautifully despite high rainfall and saltwater exposure. Whether you're securing a family yard in Lakehaven or upgrading property boundaries in Camelot, we provide the specialized knowledge your coastal property demands.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">By the Numbers: Our Federal Way Excellence</h2>
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-muted/50 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-primary mb-2">300+</div>
          <div className="text-muted-foreground">Federal Way Fences Installed</div>
        </div>
        <div className="bg-muted/50 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
          <div className="text-muted-foreground">Average Customer Rating</div>
        </div>
        <div className="bg-muted/50 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-primary mb-2">{WARRANTY_CONSTANTS.YEARS} Years</div>
          <div className="text-muted-foreground">Workmanship Warranty</div>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Financing Your Federal Way Fence Project</h2>
      <p className="mb-4">
        Quality fencing shouldn't strain your budget. {SITE_CONFIG.fullName} partners with Wisetack to offer flexible financing options for Federal Way homeowners. Apply in minutes and get approved for competitive rates that make your dream fence affordable today.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Quick online application with instant decisions</li>
        <li>Competitive rates for qualified homeowners</li>
        <li>Flexible payment plans to match your budget</li>
        <li>No hidden fees or prepayment penalties</li>
      </ul>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">{WARRANTY_CONSTANTS.TITLE}</h2>
      <p className="mb-4">
        We stand behind every Federal Way installation with our comprehensive {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty. Your investment is protected from post stability issues, structural failures, and installation defects—giving you complete peace of mind in the coastal climate.
      </p>
      <p>
        This warranty reflects our confidence in our marine-resistant materials and proven installation techniques designed specifically for Federal Way's challenging weather conditions.
      </p>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Federal Way Fence Installation FAQs</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">How does Federal Way's coastal climate affect fence longevity?</h3>
          <p>Federal Way's proximity to Puget Sound brings marine air and high rainfall (38+ inches annually) that accelerates wood weathering. We combat this with premium pressure-treated posts, marine-grade hardware, and moisture-resistant stains. Our installations include enhanced drainage and concrete anchoring to prevent premature deterioration.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Do I need a permit for fence installation in Federal Way?</h3>
          <p>Most residential fences under 6 feet don't require permits in Federal Way, but regulations vary by location and property type. Waterfront properties near Dash Point may have additional restrictions. We handle permit research and applications when needed, ensuring your installation meets all city codes and HOA requirements.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">What fence styles work best for Federal Way waterfront properties?</h3>
          <p>Cedar horizontal fences and picture frame designs are popular for waterfront homes, offering coastal aesthetics with marine durability. For Dash Point and Twin Lakes properties, we recommend premium staining with UV and saltwater protection. Solid board fences provide wind resistance, while lattice toppers maintain views while adding privacy.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">How long does fence installation take in Federal Way?</h3>
          <p>Most Federal Way residential projects complete in 2-5 days, depending on fence length and site conditions. Clay-heavy soil in neighborhoods like Steel Lake may require additional excavation time. Waterfront installations need extra preparation for marine exposure. We provide accurate timelines during your free estimate and work efficiently to minimize disruption.</p>
        </div>
      </div>
    </section>
  </div>
);

const federalWayFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Federal Way's coastal climate affect fence longevity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Federal Way's proximity to Puget Sound brings marine air and high rainfall (38+ inches annually) that accelerates wood weathering. We combat this with premium pressure-treated posts, marine-grade hardware, and moisture-resistant stains. Our installations include enhanced drainage and concrete anchoring to prevent premature deterioration."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a permit for fence installation in Federal Way?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential fences under 6 feet don't require permits in Federal Way, but regulations vary by location and property type. Waterfront properties near Dash Point may have additional restrictions. We handle permit research and applications when needed, ensuring your installation meets all city codes and HOA requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What fence styles work best for Federal Way waterfront properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cedar horizontal fences and picture frame designs are popular for waterfront homes, offering coastal aesthetics with marine durability. For Dash Point and Twin Lakes properties, we recommend premium staining with UV and saltwater protection. Solid board fences provide wind resistance, while lattice toppers maintain views while adding privacy."
      }
    },
    {
      "@type": "Question",
      "name": "How long does fence installation take in Federal Way?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Federal Way residential projects complete in 2-5 days, depending on fence length and site conditions. Clay-heavy soil in neighborhoods like Steel Lake may require additional excavation time. Waterfront installations need extra preparation for marine exposure. We provide accurate timelines during your free estimate and work efficiently to minimize disruption."
      }
    }
  ]
};

const federalWayBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `${SITE_CONFIG.fullName} - Federal Way`,
  "image": SITE_CONFIG.logoUrl,
  "description": "Professional fence installation services in Federal Way, WA. Coastal-tough cedar fencing built to withstand marine air and heavy rainfall.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Federal Way",
    "addressRegion": "WA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.3223,
    "longitude": -122.3126
  },
  "url": `${SITE_CONFIG.url}/service-areas/federal-way`,
  "telephone": SITE_CONFIG.phone,
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Federal Way",
    "addressRegion": "WA"
  },
  "serviceArea": [
    { "@type": "PostalCode", "postalCode": "98003" },
    { "@type": "PostalCode", "postalCode": "98023" },
    { "@type": "PostalCode", "postalCode": "98063" },
    { "@type": "PostalCode", "postalCode": "98093" }
  ]
};

const FederalWay = () => {
  return (
    <>
      <Seo
        title="Federal Way Fence Installation | Marine-Resistant"
        description="Coastal-tough fence installation for Federal Way. Moisture-resistant solutions for marine air & heavy rainfall. Serving Dash Point waterfront to Steel Lake. Expert craftsmanship. Call (253) 455-1885."
        canonical={`${SITE_CONFIG.url}/service-areas/federal-way`}
        structuredData={[federalWayBusinessLd, federalWayFaqLd]}
      />
      <ServiceAreaTemplate
      city="Federal Way" 
      state="WA"
      heroTitle="Coastal-Tough Fence Installation for Federal Way Homes"
      heroDescription="Specialized fencing built to withstand Federal Way's marine air and heavy rainfall. Serving Dash Point waterfront to Steel Lake neighborhoods with moisture-resistant solutions that last."
      metaTitle="Federal Way Fence Installation | Marine-Resistant"
      metaDescription="Coastal-tough fence installation for Federal Way. Moisture-resistant solutions for marine air & heavy rainfall. Serving Dash Point waterfront to Steel Lake. Expert craftsmanship. Call (253) 455-1885."
      zipCodes={["98003", "98023", "98063", "98093"]}
      neighborhoods={[
        {
          name: "Dash Point",
          description: "Coastal waterfront community with Puget Sound exposure requiring marine-grade materials and corrosion-resistant installations"
        },
        {
          name: "Twin Lakes",
          description: "Lakeside neighborhood with high moisture levels demanding enhanced weatherproofing and rot-resistant fence materials"
        },
        {
          name: "Steel Lake",
          description: "Established residential area with mature properties needing fence updates and replacements that match neighborhood character"
        },
        {
          name: "Lakehaven",
          description: "Family-oriented community with active yards requiring durable privacy fencing for children and pets"
        },
        {
          name: "Camelot",
          description: "Mid-century neighborhood with varied property conditions needing flexible installation approaches and repair options"
        },
        {
          name: "Adelaide",
          description: "Diverse residential area with mix of lot sizes requiring scalable fence solutions from compact to expansive properties"
        }
      ]}
      landmarks={[
        "Wild Waves Theme Park",
        "Dash Point State Park",
        "The Commons at Federal Way",
        "Celebration Park",
        "Steel Lake Park",
        "Dumas Bay Centre"
      ]}
      climateDescription="Federal Way experiences the Pacific Northwest's signature mild, wet winters and dry summers. The proximity to Puget Sound moderates temperatures but brings increased moisture, which significantly impacts fence longevity and maintenance requirements."
      localChallenges={[
        "High annual rainfall (38+ inches) accelerating wood rot",
        "Marine air causing faster weathering of untreated materials",
        "Wind exposure near Dash Point requiring stronger installations",
        "Clay-heavy soil in many neighborhoods affecting post stability"
      ]}
      localSolutions={[
        "Premium pressure-treated posts for moisture resistance",
        "Concrete post anchoring in high-wind coastal areas",
        "Regular maintenance schedules adapted to wet climate",
        "Specialized staining with UV and moisture protection"
      ]}
      articleContent={<FederalWayArticle />}
      faqStructuredData={federalWayFaqLd}
      enhancedBusinessData={federalWayBusinessLd}
    />
    </>
  );
};

export default FederalWay;
