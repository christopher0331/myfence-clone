"use client";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import { SITE_CONFIG } from "@/constants/siteConfig";
import AboutCityModal from "@/components/AboutCityModal";

const ABOUT_SEATAC_CONTENT = `SeaTac, Washington is a unique city of approximately 29,000 residents that surrounds the Seattle-Tacoma International Airport. Incorporated in 1990, the city takes its name from the first syllables of Seattle and Tacoma. Located roughly midway between the two major cities, SeaTac encompasses 10 square miles and serves as a critical transportation hub for the entire Pacific Northwest.

The area has a rich history dating back to early pioneers who established farms and small communities like Bow Lake and Angle Lake. The landscape changed forever in 1944 when the airport was established, leading to rapid development of hotels, transportation services, and residential neighborhoods catering to airport and airline employees.

SeaTac's geography is characterized by the airport plateau and surrounding residential hillsides. The city features several beautiful parks and lakes, including Angle Lake and Bow Lake, which provide recreational opportunities and a natural counterpoint to the busy airport environment. The terrain is relatively flat on the plateau but features significant slopes as you move toward the Des Moines and Tukwila borders.

The climate in SeaTac is typical of the Puget Sound lowlands, with annual rainfall averaging 38 inches. The proximity to the airport means that residential properties often face unique environmental factors, including the need for durable materials that can withstand the urban environment and potential noise mitigation through strategic landscaping and fencing.

SeaTac's neighborhoods are diverse and established. Areas like Angle Lake offer waterfront living, while McMicken Heights and Bow Lake provide traditional suburban character. The city's residential zones are often interspersed with commercial corridors and airport-related facilities, requiring fencing solutions that provide both privacy and security.

As a local fence contractor, MyFence.com understands the specific needs of SeaTac homeowners. Whether you're looking for a sound-dampening privacy fence near the airport or a beautiful cedar installation for an Angle Lake waterfront home, our team provides expert craftsmanship and innovative technology to deliver exceptional results.`;

const SeaTacArticle = () => (
  <article className="space-y-12">
    {/* Company Introduction */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        SeaTac Fence Company - MyFence.com
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
        Need a reliable fence contractor in SeaTac? MyFence.com brings over 30 years of local expertise to the SeaTac community. As a family-owned business, we specialize in high-quality cedar, hogwire, and hybrid fencing systems designed for the unique challenges of SeaTac's residential neighborhoods. From airport-adjacent privacy solutions to waterfront installations at Angle Lake, our Fence Genius technology ensures a precise, durable, and beautiful result for every property.
      </p>
    </section>

    {/* SeaTac Fence Installation */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Expert Fence Installation in SeaTac
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        SeaTac's residential properties often require specialized fencing to handle airport proximity, varied terrain, and urban environmental factors. Our team understands these local nuances. We design and install fences that provide exceptional privacy, noise reduction, and security while enhancing your home's curb appeal. Whether you're in McMicken Heights or near Bow Lake, we provide tailored solutions that meet both city codes and neighborhood aesthetics.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Our proprietary <Link href="/fence-genius" className="text-primary underline decoration-2 underline-offset-2">Fence Genius</Link> system allows us to pre-fabricate custom panels off-site, reducing installation time and property disruption. This is especially beneficial in SeaTac's busy neighborhoods where efficiency and precision are paramount. Most residential projects are completed in just 1-2 days, leaving you with a beautiful, professional-grade fence and a clean property.
      </p>
    </section>

    {/* Why Choose MyFence.com */}
    <section className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Why Choose MyFence.com in SeaTac?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Privacy & Noise Experts</h3>
              <p className="text-muted-foreground">
                Living near the airport requires specialized privacy solutions. We design dense, high-quality fences that provide valuable noise reduction and complete backyard seclusion.
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Fast, Efficient Service</h3>
              <p className="text-muted-foreground">
                Our technology-driven process minimizes on-site work and disruption, completing most SeaTac installations in record time without compromising on quality.
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
                We stand behind our craftsmanship with an industry-leading {WARRANTY_CONSTANTS.YEARS}-year warranty, providing SeaTac homeowners with long-term peace of mind.
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Local Family Ownership</h3>
              <p className="text-muted-foreground">
                As a father-son team based right here in the South End, we take personal pride in every SeaTac project, ensuring the highest standards of service and quality.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* Fence Types Section */}
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        SeaTac Fence Types & Materials
      </h2>
      
      {/* Cedar Fencing */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Premium Western Red Cedar</h3>
        <p className="text-muted-foreground leading-relaxed">
          For SeaTac's established neighborhoods, nothing beats the natural beauty and durability of Western Red Cedar. We source only the highest grade materials that contain natural oils to resist rot and insect damage. Our cedar privacy fences are a favorite for homeowners near the airport seeking both aesthetic warmth and effective sound-dampening qualities.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Every SeaTac cedar installation features marine-grade stainless steel fasteners and reinforced framework. To maximize longevity in our wet climate, consider our <Link href="/fence-upgrades/post-on-pipe" className="text-primary underline decoration-2 underline-offset-2">Post-on-Pipe system</Link>, which eliminates wood-to-ground contact and prevents the primary cause of post rot.
        </p>
      </div>

      {/* Hybrid Aluminum System */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Zero-Maintenance Hybrid Systems</h3>
        <p className="text-muted-foreground leading-relaxed">
          Our Hybrid Aluminum/Cedar system is perfect for SeaTac's busy households and rental properties. By combining powder-coated black aluminum panels with a sturdy cedar frame, you get a modern, high-security fence that never requires staining or painting. It's the ultimate "set it and forget it" solution for modern SeaTac living.
        </p>
      </div>

      {/* Hogwire Fencing */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Hogwire for Views & Security</h3>
        <p className="text-muted-foreground leading-relaxed">
          Properties near Angle Lake or with beautiful backyard landscapes often choose our hogwire fencing. This style provides secure containment for pets and children while maintaining open sightlines and a rustic, Pacific Northwest aesthetic.
        </p>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
      <Card className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Do I need a permit for a fence in SeaTac?</h4>
          <p className="text-muted-foreground">
            In SeaTac, residential fences up to 6 feet in height in side and rear yards typically do not require a building permit, but must comply with setback and sight-distance requirements. Front yard fences are generally limited to 42 inches (3.5 feet). Always verify current regulations with the <a href="https://www.seatacwa.gov/departments/community-economic-development/" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2">City of SeaTac Community Development Department</a> before beginning your project.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Can you provide noise reduction for properties near the airport?</h4>
          <p className="text-muted-foreground">
            Yes, we specialize in high-density privacy fences that provide excellent sound-dampening properties. Our solid board and picture frame cedar designs, when installed correctly with tight spacing, create a significant buffer against airport and urban noise.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">How long does installation take in SeaTac?</h4>
          <p className="text-muted-foreground">
            Thanks to our pre-fabrication process, most residential fence installations in SeaTac are completed in 1-2 days. We handle all debris removal and site cleanup, ensuring your new fence is ready to enjoy immediately.
          </p>
        </div>
      </Card>
    </section>

    <section className="bg-muted/50 p-6 rounded-lg border">
      <p className="text-sm text-muted-foreground">
        <strong>Note:</strong> Local regulations and HOA requirements are subject to change. MyFence.com's familiarity with SeaTac's building codes helps streamline your project from consultation to final walkthrough.
      </p>
    </section>

    <AboutCityModal cityName="SeaTac" content={ABOUT_SEATAC_CONTENT} />
  </article>
);

const SeaTac = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a permit for a fence in SeaTac?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Residential fences up to 6 feet in side/rear yards typically don't require permits in SeaTac, while front yards are limited to 42 inches. Check with the SeaTac Community Development Department for specific rules."
        }
      },
      {
        "@type": "Question",
        "name": "Can you provide noise reduction near the airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our high-density solid cedar privacy fences provide excellent sound-dampening properties, creating an effective buffer against airport and urban noise."
        }
      },
      {
        "@type": "Question",
        "name": "How long does installation take in SeaTac?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most standard SeaTac residential projects are completed in 1-2 days thanks to our efficient off-site pre-fabrication process."
        }
      }
    ]
  };

  const enhancedBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MyFence.com - SeaTac Fence Installation",
    "image": "https://myfence.com/myfence-logo.png",
    "@id": "https://myfence.com/service-areas/seatac",
    "url": "https://myfence.com/service-areas/seatac",
    "telephone": SITE_CONFIG.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving SeaTac",
      "addressLocality": "SeaTac",
      "addressRegion": "WA",
      "postalCode": "98188",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.4436,
      "longitude": -122.2961
    },
    "areaServed": {
      "@type": "City",
      "name": "SeaTac"
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

  return (
    <ServiceAreaTemplate 
      city="SeaTac" 
      state="WA"
      heroTitle="Expert Fence Installation for SeaTac's Unique Neighborhoods"
      heroDescription="Professional fencing solutions tailored for SeaTac—from airport-adjacent privacy barriers to beautiful waterfront installations at Angle Lake. Serving McMicken Heights, Bow Lake, and the entire SeaTac community with expert craftsmanship."
      metaTitle="SeaTac Fence Installation | Privacy & Noise Reduction Specialists"
      metaDescription="Professional fence installation in SeaTac, WA. Airport-adjacent privacy experts, waterfront fencing for Angle Lake. 30+ years experience. Free quotes. Call (253) 455-1885."
      zipCodes={["98188", "98198", "98148", "98168"]}
      neighborhoods={[
        {
          name: "Angle Lake",
          description: "Waterfront and near-lake properties requiring high-quality, moisture-resistant materials and views-conscious designs"
        },
        {
          name: "McMicken Heights",
          description: "Established residential area where sound-dampening privacy fences provide valuable buffers from airport activity"
        },
        {
          name: "Bow Lake",
          description: "Suburban neighborhood featuring varied property sizes and a mix of classic cedar and modern hybrid fencing"
        },
        {
          name: "Riverton",
          description: "Growing community near the Tukwila border requiring durable security and privacy solutions"
        },
        {
          name: "Madrona",
          description: "Quiet residential pocket seeking professional cedar installations that enhance property value"
        }
      ]}
      landmarks={[
        "Seattle-Tacoma International Airport",
        "Angle Lake Park",
        "SeaTac Community Center",
        "Bow Lake Elementery",
        "Highline SeaTac Botanical Garden",
        "Valley Ridge Park"
      ]}
      climateDescription="SeaTac occupies a central plateau in South King County. The area experiences typical Puget Sound weather, with persistent moisture during the winter months. Proximity to the airport and major transit corridors means properties benefit from durable, low-maintenance materials."
      localChallenges={[
        "Airport noise and urban environment factors",
        "High-moisture periods requiring rot-resistant materials",
        "Mix of residential and commercial-adjacent properties",
        "Varied terrain from plateau to hillside slopes"
      ]}
      localSolutions={[
        "High-density privacy fences for effective noise reduction",
        "Premium Western Red Cedar and Post-on-Pipe systems",
        "Zero-maintenance hybrid systems for busy households",
        "Precision terrain-following installations using Fence Genius"
      ]}
      articleContent={<SeaTacArticle />}
      faqStructuredData={faqStructuredData}
      enhancedBusinessData={enhancedBusinessData}
      videoTags={[
        { label: "Craftsman Style", link: "/fence-styles/craftsman-style-fence" },
        { label: "Board on Board", link: "/fence-upgrades/board-on-board" },
        { label: "Pre Stained", link: "/pre-staining-cedar-fence" },
        { label: "Rot Board", link: "/fence-upgrades/rot-board" }
      ]}
    />
  );
};

export default SeaTac;
