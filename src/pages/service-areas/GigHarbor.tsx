import ServiceAreaTemplate from "./ServiceAreaTemplate";
import Seo from "@/components/Seo";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const GigHarborArticle = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-3xl font-bold mb-6">Professional Fence Installation in Gig Harbor, WA</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p>
          Gig Harbor's maritime charm deserves fencing solutions as distinctive as its harbor-side character. {SITE_CONFIG.fullName} specializes in salt-resistant installations that protect your property while complementing the area's coastal architecture. From downtown's historic waterfront to Canterwood's luxury estates, we deliver premium cedar fencing engineered for Puget Sound's demanding environment.
        </p>
        <p>
          Our Gig Harbor installations feature marine-grade hardware and advanced weather protection designed specifically for saltwater exposure. Whether you're enhancing Harbor Hill views, meeting Canterwood's architectural standards, or protecting Minter Creek waterfront property, our team brings the specialized expertise your maritime location requires.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">By the Numbers: Our Gig Harbor Excellence</h2>
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-muted/50 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-primary mb-2">250+</div>
          <div className="text-muted-foreground">Gig Harbor Fences Installed</div>
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
      <h2 className="text-3xl font-bold mb-6">Financing Your Gig Harbor Fence Project</h2>
      <p className="mb-4">
        Premium maritime fencing is within reach with {SITE_CONFIG.fullName}'s flexible financing through Wisetack. Gig Harbor homeowners can apply online in minutes for competitive rates and payment plans that make high-quality fence installations affordable without compromise.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Fast approval process with instant decisions</li>
        <li>Flexible terms for qualified homeowners</li>
        <li>Competitive rates with transparent pricing</li>
        <li>No hidden fees or early payment penalties</li>
      </ul>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">{WARRANTY_CONSTANTS.TITLE}</h2>
      <p className="mb-4">
        Every Gig Harbor installation is backed by our comprehensive {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty. We guarantee protection against post failures, structural defects, and installation issues—essential coverage for the challenging saltwater environment that surrounds your property.
      </p>
      <p>
        This warranty demonstrates our commitment to marine-grade quality and installation excellence proven throughout Gig Harbor's coastal communities.
      </p>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Gig Harbor Fence Installation FAQs</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">How does saltwater air affect fences in Gig Harbor?</h3>
          <p>Gig Harbor's Puget Sound location exposes fences to saltwater air that accelerates corrosion and wood weathering. We combat this with marine-grade stainless steel hardware, premium rot-resistant materials, and advanced sealants. Our installations include specialized staining with saltwater protection and reinforced anchoring for coastal winds, ensuring longevity despite harsh marine conditions.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Do I need HOA approval for fence installation in Canterwood or Harbor Hill?</h3>
          <p>Yes, Canterwood and many Harbor Hill neighborhoods have strict architectural guidelines requiring committee approval before fence installation. We provide professional design renderings and specifications for your HOA submission, ensuring compliance with height restrictions, approved materials, and aesthetic standards. Our experience with Gig Harbor's upscale communities streamlines the approval process.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">What fence styles complement Gig Harbor's maritime architecture?</h3>
          <p>Horizontal cedar fences and picture frame designs are ideal for Gig Harbor's coastal homes, offering clean lines that enhance harbor views. Custom designs with decorative post caps complement downtown's historic character, while modern horizontal styles suit Harbor Hill's contemporary properties. We recommend premium stains in coastal tones that blend with the maritime environment while providing maximum UV and moisture protection.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">How long does fence installation take in Gig Harbor?</h3>
          <p>Most Gig Harbor residential projects complete in 2-5 days depending on fence length, terrain, and customization level. Waterfront installations require additional preparation time for marine-grade materials and wind-rated construction. Properties in Crescent Valley or Purdy with extensive acreage may need 5-10 days. We provide detailed project timelines during your free estimate and coordinate with HOA requirements where applicable.</p>
        </div>
      </div>
    </section>
  </div>
);

const gigHarborFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does saltwater air affect fences in Gig Harbor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gig Harbor's Puget Sound location exposes fences to saltwater air that accelerates corrosion and wood weathering. We combat this with marine-grade stainless steel hardware, premium rot-resistant materials, and advanced sealants. Our installations include specialized staining with saltwater protection and reinforced anchoring for coastal winds, ensuring longevity despite harsh marine conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need HOA approval for fence installation in Canterwood or Harbor Hill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Canterwood and many Harbor Hill neighborhoods have strict architectural guidelines requiring committee approval before fence installation. We provide professional design renderings and specifications for your HOA submission, ensuring compliance with height restrictions, approved materials, and aesthetic standards. Our experience with Gig Harbor's upscale communities streamlines the approval process."
      }
    },
    {
      "@type": "Question",
      "name": "What fence styles complement Gig Harbor's maritime architecture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Horizontal cedar fences and picture frame designs are ideal for Gig Harbor's coastal homes, offering clean lines that enhance harbor views. Custom designs with decorative post caps complement downtown's historic character, while modern horizontal styles suit Harbor Hill's contemporary properties. We recommend premium stains in coastal tones that blend with the maritime environment while providing maximum UV and moisture protection."
      }
    },
    {
      "@type": "Question",
      "name": "How long does fence installation take in Gig Harbor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Gig Harbor residential projects complete in 2-5 days depending on fence length, terrain, and customization level. Waterfront installations require additional preparation time for marine-grade materials and wind-rated construction. Properties in Crescent Valley or Purdy with extensive acreage may need 5-10 days. We provide detailed project timelines during your free estimate and coordinate with HOA requirements where applicable."
      }
    }
  ]
};

const gigHarborBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `${SITE_CONFIG.fullName} - Gig Harbor`,
  "image": SITE_CONFIG.logoUrl,
  "description": "Professional fence installation services in Gig Harbor, WA. Salt-resistant cedar fencing engineered for Puget Sound's maritime environment.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gig Harbor",
    "addressRegion": "WA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.3295,
    "longitude": -122.5807
  },
  "url": `${SITE_CONFIG.url}/service-areas/gig-harbor`,
  "telephone": SITE_CONFIG.phone,
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Gig Harbor",
    "addressRegion": "WA"
  },
  "serviceArea": [
    { "@type": "PostalCode", "postalCode": "98329" },
    { "@type": "PostalCode", "postalCode": "98332" },
    { "@type": "PostalCode", "postalCode": "98335" }
  ]
};

const GigHarbor = () => {
  return (
    <>
      <Seo
        title="Gig Harbor Waterfront Fences | Salt-Resistant"
        description="Harbor-side fence installation in Gig Harbor. Salt-resistant materials for Puget Sound maritime climate. Waterfront charm protected from Uptown to harbor-view homes. Call (253) 455-1885."
        canonical={`${SITE_CONFIG.url}/service-areas/gig-harbor`}
        structuredData={[gigHarborBusinessLd, gigHarborFaqLd]}
      />
      <ServiceAreaTemplate
      city="Gig Harbor" 
      state="WA"
      heroTitle="Harbor-Side Fence Installation in Gig Harbor's Maritime Community"
      heroDescription="Protecting Gig Harbor's waterfront charm with salt-resistant fencing solutions. From Uptown boutiques to harbor-view homes, we deliver installations that complement your maritime lifestyle and Puget Sound environment."
      metaTitle="Gig Harbor Waterfront Fences | Salt-Resistant"
      metaDescription="Harbor-side fence installation in Gig Harbor. Salt-resistant materials for Puget Sound maritime climate. Waterfront charm protected from Uptown to harbor-view homes. Call (253) 455-1885."
      zipCodes={["98329", "98332", "98335"]}
      neighborhoods={[
        {
          name: "Downtown Gig Harbor",
          description: "Historic waterfront district with maritime heritage requiring installations that complement coastal architecture and saltwater environment"
        },
        {
          name: "Harbor Hill",
          description: "Elevated neighborhood with harbor views demanding designs that preserve vistas while providing privacy and wind protection"
        },
        {
          name: "Canterwood",
          description: "Luxury gated community with strict architectural guidelines requiring premium materials and committee-approved custom designs"
        },
        {
          name: "Artondale",
          description: "Established family neighborhood with mature landscaping needing careful installations around existing trees and gardens"
        },
        {
          name: "Crescent Valley",
          description: "Upscale residential area with large properties demanding extensive fencing solutions and high-end finishes"
        },
        {
          name: "Minter Creek",
          description: "Rural waterfront properties requiring specialized marine installations and wildlife-conscious boundary fencing"
        },
        {
          name: "Purdy",
          description: "Country estates and rural parcels needing long fence runs, agricultural options, and cost-effective solutions for acreage"
        }
      ]}
      landmarks={[
        "Gig Harbor Waterfront",
        "Cushman Trail",
        "Sehmel Homestead Park",
        "Kopachuck State Park",
        "Crescent Creek Park",
        "Donkey Creek Park",
        "Finholm Market District"
      ]}
      climateDescription="Gig Harbor's picturesque location on Puget Sound brings a marine climate with mild temperatures but persistent moisture. The saltwater environment, combined with the area's coastal winds, creates unique challenges for fence installations that require specialized materials and techniques."
      localChallenges={[
        "Saltwater air causing accelerated corrosion and weathering",
        "Coastal winds requiring reinforced installations",
        "Waterfront properties with strict aesthetic requirements",
        "Marine moisture penetration affecting wood longevity",
        "Upscale community standards demanding premium quality"
      ]}
      localSolutions={[
        "Marine-grade stainless steel hardware throughout",
        "Wind-rated installations for coastal exposure",
        "Premium rot-resistant materials and advanced sealants",
        "Custom designs complementing maritime architecture",
        "Regular maintenance programs for saltwater environments"
      ]}
      articleContent={<GigHarborArticle />}
      faqStructuredData={gigHarborFaqLd}
      enhancedBusinessData={gigHarborBusinessLd}
    />
    </>
  );
};

export default GigHarbor;
