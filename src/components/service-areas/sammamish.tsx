import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import Seo from "@/components/Seo";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const SammamishArticle = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-3xl font-bold mb-6">Professional Fence Installation</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p>
          Sammamish represents the pinnacle of family-oriented suburban living in the Pacific Northwest. With top-rated schools, large properties, and abundant natural beauty, Sammamish homeowners demand fencing solutions that provide security for children and pets while enhancing their property's aesthetic appeal.
        </p>
        <p>
          At {SITE_CONFIG.fullName}, we specialize in serving Sammamish's unique needs—from lakefront properties requiring moisture-resistant installations to wooded lots backing onto greenbelts, and upscale communities with strict HOA guidelines. Our team brings the expertise and quality materials that match Sammamish's high standards.
        </p>
      </div>
    </section>

    

    <section>
      <h2 className="text-3xl font-bold mb-6">Flexible Financing Options</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p>
          We know that protecting your family and property is a priority. Through our partnership with Wisetack, Sammamish homeowners can access flexible financing solutions that make quality fencing affordable. Get approved in minutes with no impact to your credit score during the application process.
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
          Every fence we install in Sammamish comes with our comprehensive {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty. This warranty covers all aspects of installation, from post setting to final board placement, ensuring your investment is protected.
        </p>
        <p>
          We stand behind our work because we use premium materials—including clear cedar options popular in upscale Sammamish communities—proven installation techniques, and meticulous attention to detail on every project, whether it's a simple gate repair or a complete perimeter fence for your large lot.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Local Climate Considerations</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p>
          Sammamish's Eastside plateau location provides a slightly drier climate than Seattle, though Pacific Northwest moisture still demands quality materials and proper installation techniques. Our fences are designed to handle the region's wet winters while maintaining their beauty through sunny summers.
        </p>
        <p>
          For properties backing onto forested areas—common throughout Sammamish—we implement wildlife-deterrent designs and use materials that integrate naturally with the surrounding environment. Lakefront properties receive marine-resistant treatments and moisture management systems that extend fence longevity.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Do you work with Sammamish HOAs and architectural committees?</h3>
          <p className="text-muted-foreground">
            Yes, we're very experienced working with Sammamish HOAs, particularly in communities like Klahanie and Sahalee. We help homeowners navigate approval processes, provide committee-ready design proposals, and ensure installations meet all architectural guidelines and covenants.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">What fence materials are best for Sammamish's large properties?</h3>
          <p className="text-muted-foreground">
            For Sammamish's larger lots, we often recommend premium Western Red Cedar for its durability and natural beauty. Clear cedar options are popular in upscale neighborhoods like Sahalee and Trossachs. For properties backing onto forests, we can integrate wildlife-deterrent features while maintaining aesthetic appeal.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Can you install fences around mature trees and landscaping?</h3>
          <p className="text-muted-foreground">
            Absolutely. Many Sammamish properties have mature landscaping that's 20+ years old. We specialize in careful installations that work around established trees, gardens, and root systems. Our team takes extra care to protect your valuable landscaping while delivering a quality fence.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">How long does fence installation take in Sammamish?</h3>
          <p className="text-muted-foreground">
            Most standard residential projects in Sammamish are completed in 2-4 days. Installation timelines vary based on property size. Larger properties or those requiring extensive runs may take longer. We work efficiently while maintaining our high quality standards.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Do you offer financing for Sammamish fence projects?</h3>
          <p className="text-muted-foreground">
            Yes, we partner with Wisetack to offer flexible financing options for Sammamish homeowners. Get approved quickly with competitive rates, flexible terms, and no prepayment penalties. This makes it easier to invest in the quality fence your family deserves.
          </p>
        </div>
      </div>
    </section>
  </div>
);

const sammamishFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you work with Sammamish HOAs and architectural committees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we're very experienced working with Sammamish HOAs, particularly in communities like Klahanie and Sahalee. We help homeowners navigate approval processes, provide committee-ready design proposals, and ensure installations meet all architectural guidelines and covenants."
      }
    },
    {
      "@type": "Question",
      "name": "What fence materials are best for Sammamish's large properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Sammamish's larger lots, we often recommend premium Western Red Cedar for its durability and natural beauty. Clear cedar options are popular in upscale neighborhoods like Sahalee and Trossachs. For properties backing onto forests, we can integrate wildlife-deterrent features while maintaining aesthetic appeal."
      }
    },
    {
      "@type": "Question",
      "name": "Can you install fences around mature trees and landscaping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Many Sammamish properties have mature landscaping that's 20+ years old. We specialize in careful installations that work around established trees, gardens, and root systems. Our team takes extra care to protect your valuable landscaping while delivering a quality fence."
      }
    },
    {
      "@type": "Question",
      "name": "How long does fence installation take in Sammamish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Installation timelines vary based on property size. Most standard residential projects in Sammamish are completed in 2-4 days. Larger properties or those requiring extensive runs may take longer. We work efficiently while maintaining our high quality standards."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer financing for Sammamish fence projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we partner with Wisetack to offer flexible financing options for Sammamish homeowners. Get approved quickly with competitive rates, flexible terms, and no prepayment penalties. This makes it easier to invest in the quality fence your family deserves."
      }
    }
  ]
};

const sammamishLocalBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.url}/service-areas/sammamish#business`,
  "name": `${SITE_CONFIG.fullName} - Sammamish`,
  "image": SITE_CONFIG.logoUrl,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE_CONFIG.address.street,
    "addressLocality": "Sammamish",
    "addressRegion": SITE_CONFIG.address.state,
    "postalCode": "98074",
    "addressCountry": SITE_CONFIG.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6163,
    "longitude": -122.0355
  },
  "telephone": SITE_CONFIG.phone,
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Sammamish",
    "containedIn": {
      "@type": "State",
      "name": "Washington"
    }
  },
  "url": `${SITE_CONFIG.url}/service-areas/sammamish`,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
};

const Sammamish = () => {
  const structuredData = [sammamishFaqLd, sammamishLocalBusinessLd];
  
  
  const sammamishAttractions: LocalAttraction[] = [
    {
      name: "Lake Sammamish State Park",
      description: "A beautiful 531-acre park offering two large swimming beaches, extensive trails, and excellent water access.",
      url: "https://parks.wa.gov/find-parks/state-parks/lake-sammamish-state-park"
    },
    {
      name: "Pine Lake Park",
      description: "A peaceful community park nestled under tall evergreens, featuring a swimming beach, fishing dock, and summer concert series.",
      url: "https://www.sammamish.us/parks-recreation-and-facilities/parks-trails/pine-lake-park/"
    },
    {
      name: "Soaring Eagle Regional Park",
      description: "A sprawling 600-acre natural area with a vast network of trails popular among mountain bikers, trail runners, and equestrians.",
      url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/soaring-eagle"
    },
    {
      name: "Beaver Lake Park",
      description: "A tranquil 54-acre park offering forested walking trails, a lodge for events, and access to the serene Beaver Lake.",
      url: "https://www.sammamish.us/parks-recreation-and-facilities/parks-trails/beaver-lake-park/"
    },
    {
      name: "East Lake Sammamish Trail",
      description: "An 11-mile paved trail following a historic railroad route, providing a safe and scenic path for cyclists and pedestrians.",
      url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/east-lake-sammamish-trail"
    }
  ];

  const sammamishLivingContent = (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        Consistently ranked as one of the best places to live in the United States, Sammamish is a family-centric city characterized by its excellent education system and stunning natural environment. The community is served by two top-tier districts: the <a href="https://www.isd411.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Issaquah School District</a> and the <a href="https://www.lwsd.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Lake Washington School District</a>, drawing families who prioritize academic excellence. Community life often revolves around the <a href="https://www.sammamish.us/parks-recreation-and-facilities/parks-trails/sammamish-commons/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Sammamish Commons</a>, a central civic campus that hosts the local library, city hall, and popular seasonal events like the Farmers Market.
      </p>
      <p>
        The lifestyle in Sammamish is deeply connected to the outdoors, with the city offering an impressive array of recreational opportunities right at residents' doorsteps. Whether it's boating on <a href="https://parks.wa.gov/find-parks/state-parks/lake-sammamish-state-park" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Lake Sammamish</a> during the summer, or exploring the dense forests of <a href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/soaring-eagle" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Soaring Eagle Park</a>, the area caters to nature lovers. The active <a href="https://www.sammamish.us/parks-recreation-and-facilities/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Parks and Recreation department</a> ensures well-maintained facilities and programs for all ages, creating a tight-knit, upscale suburban community that feels miles away from the bustle of the city, yet remains conveniently close to major Eastside employment hubs.
      </p>
    </div>
  );

  return (
    <>
      <Seo
        title="Sammamish Fence Installation | Safe Family Neighborhoods"
        description="Premium fencing for Sammamish's top-rated school neighborhoods. Safe, durable solutions for families. Pine Lake to Sahalee. Kid & pet-friendly designs with natural beauty. Call (253) 478-8589."
        canonical={`${SITE_CONFIG.url}/service-areas/sammamish`}
        structuredData={structuredData}
      />
      <ServiceAreaTemplate 
        city="Sammamish" 
        state="WA"
        heroTitle="Premium Fencing for Sammamish's Family-Focused Communities"
        heroDescription="Serving Sammamish's top-rated school neighborhoods with safe, durable fencing solutions. From Pine Lake to Sahalee, we build backyard boundaries that let kids and pets play while maintaining your property's natural beauty."
        metaTitle="Sammamish Fence Installation | Safe Family Neighborhoods"
        metaDescription="Premium fencing for Sammamish's top-rated school neighborhoods. Safe, durable solutions for families. Pine Lake to Sahalee. Kid & pet-friendly designs with natural beauty. Call (253) 478-8589."
      zipCodes={["98074", "98075"]}
      neighborhoods={[
        {
          name: "Pine Lake",
          description: "Lakeside community with water access properties requiring moisture-resistant installations and designs that preserve recreational lake views"
        },
        {
          name: "Beaver Lake",
          description: "Family-oriented neighborhood with top-rated schools needing secure fencing for children and pets with high-quality materials"
        },
        {
          name: "Sahalee",
          description: "Exclusive golf course community with luxury estates demanding premium clear cedar and custom designs meeting strict HOA standards"
        },
        {
          name: "Trossachs",
          description: "Upscale wooded neighborhood with large lots backing onto forests requiring wildlife-deterrent fencing and natural aesthetic integration"
        },
        {
          name: "Klahanie",
          description: "Master-planned community with detailed architectural guidelines requiring approved designs and committee review for all installations. Click to learn more →",
          link: "/service-areas/sammamish/klahanie"
        },
        {
          name: "East Sammamish",
          description: "Established residential area with mature landscaping needing installations that work around 20+ year old trees and existing gardens"
        },
        {
          name: "Inglewood",
          description: "Growing family neighborhood with newer construction requiring modern fence designs that complement contemporary architecture"
        }
      ]}
      landmarks={[
        "Lake Sammamish State Park",
        "Beaver Lake Park",
        "Pine Lake Park",
        "Sammamish Commons",
        "Big Rock Park",
        "Soaring Eagle Regional Park",
        "East Sammamish Trail"
      ]}
      climateDescription="Sammamish's location on the Eastside plateau provides a slightly drier climate than Seattle, though still plenty of rain. The city's suburban character features larger properties, many backing onto forested areas or greenbelts, with homeowners prioritizing privacy and property boundaries."
      localChallenges={[
        "Large properties requiring extensive fencing solutions",
        "Forested boundaries needing specialized installation techniques",
        "HOA guidelines in planned communities like Klahanie",
        "Wildlife presence requiring secure, tall fencing options",
        "Premium property values demanding high-end materials"
      ]}
      localSolutions={[
        "Clear cedar and premium wood options for upscale properties",
        "Extended fence runs with efficient installation for large lots",
        "Custom designs meeting community architectural standards",
        "Forest-edge installations respecting natural boundaries",
        "Decorative yet functional solutions for luxury homes"
      ]}
      articleContent={<SammamishArticle />}
      faqStructuredData={sammamishFaqLd}
      enhancedBusinessData={sammamishLocalBusinessLd}
    />
      <AboutTheArea 
        cityName="Sammamish"
        attractions={sammamishAttractions}
        localLivingContent={sammamishLivingContent}
      />
    </>
  );
};

export default Sammamish;
