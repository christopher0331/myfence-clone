import ServiceAreaTemplate from "./ServiceAreaTemplate";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const LakeTapps = () => {
  const lakeTappsFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a permit for a fence in Lake Tapps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential fences in Lake Tapps require a permit through Pierce County. Fences over 6 feet tall or within setback areas have additional requirements. We handle all permit applications and ensure your fence meets local codes and waterfront regulations."
        }
      },
      {
        "@type": "Question",
        "name": "What fence materials work best for Lake Tapps waterfront properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Lake Tapps lakeside properties, we recommend premium cedar with marine-grade stainless steel hardware and moisture-resistant treatments. The high humidity near the water requires corrosion-resistant materials and proper drainage design to prevent premature deterioration."
        }
      },
      {
        "@type": "Question",
        "name": "How long does fence installation take in Lake Tapps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Lake Tapps fence installations take 2-5 days depending on project size and terrain. Waterfront properties may require additional time for proper moisture barriers and compliance with setback requirements. We provide detailed timelines during your consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you install view-friendly fences that preserve lake views?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in horizontal slat designs, partial privacy panels, and strategic placement that maintains your Lake Tapps views while providing privacy from neighbors. Our design consultation helps balance aesthetics, views, and functionality for lakeside living."
        }
      }
    ]
  };

  const lakeTappsBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MyFence.com - Lake Tapps Waterfront Fence Installation",
    "image": "https://myfence.com/myfence-logo.png",
    "description": "Expert waterfront fence installation for Lake Tapps properties with marine-grade materials and view-friendly designs.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lake Tapps",
      "addressRegion": "WA",
      "postalCode": "98391",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.2384,
      "longitude": -122.1951
    },
    "telephone": "(253) 478-8589",
    "areaServed": {
      "@type": "City",
      "name": "Lake Tapps"
    }
  };

  const articleContent = (
    <div className="prose prose-lg max-w-none">
      {/* Company Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lake Tapps Waterfront Fence Specialists</h2>
        <p className="text-lg mb-4">
          MyFence.com brings over three decades of fencing expertise to Lake Tapps' unique waterfront community. 
          Surrounding the 2,500-acre reservoir, Lake Tapps properties face distinct challenges from constant humidity, 
          marine conditions, and the need to preserve stunning lake views while maintaining privacy.
        </p>
        <p className="text-lg mb-4">
          From the peninsula communities of Snag Island and Driftwood Point to elevated properties on the Lake Tapps 
          Plateau, we understand the specialized requirements of lakeside fencing. Our installations use marine-grade 
          hardware, moisture-resistant treatments, and view-friendly designs that complement your waterfront lifestyle.
        </p>
        
        <div className="grid md:grid-cols-4 gap-4 my-8">
          <Card className="p-4 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="font-bold text-2xl">30+ Years</div>
            <div className="text-sm text-muted-foreground">Experience</div>
          </Card>
          <Card className="p-4 text-center">
            <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="font-bold text-2xl">98%+</div>
            <div className="text-sm text-muted-foreground">On-Time Installation Rate</div>
          </Card>
          <Card className="p-4 text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="font-bold text-2xl">5.0</div>
            <div className="text-sm text-muted-foreground">Average Star Rating</div>
          </Card>
          <Card className="p-4 text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="font-bold text-2xl">150+</div>
            <div className="text-sm text-muted-foreground">Five-Star Reviews</div>
          </Card>
        </div>
      </section>

      {/* Installation Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Professional Waterfront Fence Installation</h2>
        <p className="text-lg mb-4">
          Lake Tapps waterfront properties demand specialized installation techniques that account for high humidity, 
          seasonal water level changes, and soil conditions unique to reservoir environments. Our installation process 
          ensures your fence withstands lakeside conditions for decades.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Marine-grade stainless steel fasteners preventing corrosion in humid environments</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Deep concrete footings engineered for stability near water tables</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Premium moisture-resistant treatments for extended lifespan in high-humidity conditions</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>View-preserving designs balancing privacy with lake access and sight lines</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Compliance with waterfront setback requirements and recreational access considerations</span>
          </li>
        </ul>
      </section>

      {/* Why Choose Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Why Choose MyFence.com in Lake Tapps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Waterfront Expertise</h3>
            <p>Specialized knowledge of lakeside conditions, marine-grade materials, and installations that preserve your water views and recreational access.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Humidity-Resistant Construction</h3>
            <p>Advanced moisture barriers and corrosion-resistant hardware designed specifically for Lake Tapps' high-humidity reservoir environment.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">View-Friendly Designs</h3>
            <p>Custom horizontal slat patterns and strategic panel placement that maintain privacy while preserving your valuable lake views.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">{WARRANTY_CONSTANTS.TITLE}</h3>
            <p>Comprehensive warranty covering all workmanship, backed by three decades of fencing excellence and waterfront installation experience.</p>
          </Card>
        </div>
      </section>

      {/* Fence Types Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fence Types & Materials for Lake Tapps</h2>
        
        <h3 className="text-2xl font-semibold mb-4">Premium Western Red Cedar</h3>
        <p className="text-lg mb-6">
          Western Red Cedar is the gold standard for Lake Tapps waterfront properties due to its natural rot resistance 
          and dimensional stability in humid environments. The wood's natural oils provide inherent protection against 
          moisture and decay, essential for fences near the reservoir. We source premium-grade cedar and apply 
          marine-grade treatments for maximum longevity in lakeside conditions.
        </p>

        <h3 className="text-2xl font-semibold mb-4">What We Install in Lake Tapps</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Cedar Privacy Fences:</strong> Full privacy with premium moisture-resistant treatments for waterfront durability</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Horizontal Cedar Fencing:</strong> View-friendly modern designs preserving lake sight lines while providing privacy</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Hogwire Fence Systems:</strong> Unobstructed lake views with durable cedar frames and corrosion-resistant wire panels</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Other Fence Materials (Informational Only)</h3>
        <p className="text-lg mb-4">
          While we specialize in cedar and hogwire installations, homeowners sometimes ask about alternative materials 
          for waterfront properties. Here's what you should know:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-1" />
            <span><strong>Vinyl Fencing:</strong> Low maintenance but can become brittle in temperature fluctuations and may not meet aesthetic standards for lakefront properties (we do not install)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-1" />
            <span><strong>Composite Fencing:</strong> Moisture-resistant but lacks the natural aesthetic preferred in Lake Tapps' residential character (we do not install)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-1" />
            <span><strong>Aluminum/Steel:</strong> Excellent corrosion resistance but limited privacy options for waterfront properties (we do not install standalone metal systems)</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Hybrid Aluminum Cedar System</h3>
        <p className="text-lg mb-4">
          For maximum durability in Lake Tapps' humid lakeside environment, we offer a hybrid system combining black 
          powder-coated aluminum panels with premium cedar frames and pressure-treated posts. This system delivers:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Aluminum panels impervious to moisture and humidity damage</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Cedar frame aesthetic complementing lakeside homes</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Virtually maintenance-free with marine-grade powder coating</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Ideal for high-exposure waterfront locations with maximum humidity</span>
          </li>
        </ul>
      </section>

      {/* Financing Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Flexible Fence Financing for Lake Tapps</h2>
        <p className="text-lg mb-4">
          Quality waterfront fencing is an investment in your Lake Tapps property. We partner with Wisetack to offer 
          flexible financing options that make premium lakeside fence installation accessible. Get approved in minutes 
          with options designed for your budget.
        </p>
        <p className="text-lg mb-4">
          <Link to="/financing" className="text-primary hover:underline font-semibold">
            Learn more about our financing options →
          </Link>
        </p>
      </section>

      {/* Warranty Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{WARRANTY_CONSTANTS.TITLE}</h2>
        <p className="text-lg mb-4">
          Every Lake Tapps fence installation includes our comprehensive {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty. 
          We stand behind our waterfront installations with confidence, knowing our marine-grade materials and expert 
          craftsmanship deliver lasting performance in Lake Tapps' challenging lakeside environment.
        </p>
        <p className="text-lg mb-4">
          Our warranty covers all installation workmanship, ensuring your fence maintains structural integrity and 
          aesthetic appeal throughout the warranty period. With over 30 years of fencing expertise and specialized 
          waterfront installation experience, we deliver quality you can trust.
        </p>
      </section>

      {/* Local Challenges Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lake Tapps Waterfront Fencing Challenges</h2>
        <p className="text-lg mb-4">
          Lake Tapps' 2,500-acre reservoir creates unique environmental conditions that significantly impact fence 
          installation and longevity. Understanding these lakeside challenges is essential for proper fence design:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>High Humidity Exposure:</strong> Constant moisture from the reservoir accelerates wood deterioration and metal corrosion without proper materials and treatments</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Waterfront Regulations:</strong> Setback requirements and view easements affect fence placement near water</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>View Preservation:</strong> Balancing privacy needs with maintaining valuable lake views</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Recreational Access:</strong> Accommodating boat docks, water equipment, and lake access points</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Our Waterfront Solutions</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Marine-Grade Hardware:</strong> Stainless steel fasteners and corrosion-resistant materials engineered for lakeside conditions</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Premium Moisture Treatments:</strong> Advanced sealants protecting against constant humidity exposure</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>View-Friendly Designs:</strong> Horizontal slat patterns and strategic placement preserving lake views</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Regulation Compliance:</strong> Expert knowledge of waterfront setback requirements and access easements</span>
          </li>
        </ul>
      </section>

      {/* Permits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lake Tapps Fence Permits & Regulations</h2>
        <p className="text-lg mb-4">
          Lake Tapps falls under Pierce County jurisdiction for building permits and regulations. Most residential fences 
          require permits, particularly those near waterfront setback areas or exceeding standard height limits.
        </p>
        <p className="text-lg mb-4">
          We handle all permit applications and ensure your waterfront fence complies with Pierce County codes and any 
          applicable Lake Tapps community guidelines. Our experience with waterfront regulations streamlines the approval 
          process for your project.
        </p>
        <p className="text-lg mb-4">
          For official permit information, visit the{" "}
          <a 
            href="https://www.piercecountywa.gov/1308/Building-Permits" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Pierce County Building Permits page
          </a>.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lake Tapps Fence Installation FAQs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Do I need a permit for a fence in Lake Tapps?</h3>
            <p className="text-lg">
              Most residential fences in Lake Tapps require a permit through Pierce County. Fences over 6 feet tall or 
              within setback areas have additional requirements. We handle all permit applications and ensure your fence 
              meets local codes and waterfront regulations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What fence materials work best for Lake Tapps waterfront properties?</h3>
            <p className="text-lg">
              For Lake Tapps lakeside properties, we recommend premium cedar with marine-grade stainless steel hardware 
              and moisture-resistant treatments. The high humidity near the water requires corrosion-resistant materials 
              and proper drainage design to prevent premature deterioration.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How long does fence installation take in Lake Tapps?</h3>
            <p className="text-lg">
              Most Lake Tapps fence installations take 2-5 days depending on project size and terrain. Waterfront properties 
              may require additional time for proper moisture barriers and compliance with setback requirements. We provide 
              detailed timelines during your consultation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Can you install view-friendly fences that preserve lake views?</h3>
            <p className="text-lg">
              Yes! We specialize in horizontal slat designs, partial privacy panels, and strategic placement that maintains 
              your Lake Tapps views while providing privacy from neighbors. Our design consultation helps balance aesthetics, 
              views, and functionality for lakeside living.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <ServiceAreaTemplate 
      city="Lake Tapps" 
      state="WA"
      heroTitle="Waterfront Fence Specialists for Lake Tapps Properties"
      heroDescription="Expert lakeside fencing with marine-grade materials designed for Lake Tapps' 2,500-acre waterfront community. View-friendly designs that preserve your lake access while providing privacy and security."
      metaTitle="Lake Tapps Waterfront Fences | Marine-Grade"
      metaDescription="Waterfront fence specialists for Lake Tapps properties. Marine-grade materials & view-friendly designs for lakeside living. Expert installation preserving lake access & views. Call (253) 455-1885."
      zipCodes={["98391"]}
      neighborhoods={[
        {
          name: "North Tapps",
          description: "Waterfront properties on lake's northern shore requiring marine-resistant hardware and designs that preserve recreational access"
        },
        {
          name: "Snag Island",
          description: "Peninsula community with water on three sides demanding maximum corrosion protection and humidity-resistant installations"
        },
        {
          name: "Lake Tapps Plateau",
          description: "Elevated properties overlooking the reservoir needing view-preserving fence designs while maintaining privacy from neighbors"
        },
        {
          name: "Allan Yorke Park Area",
          description: "Family neighborhoods near popular park requiring secure boundary fencing for children and pets near recreational areas"
        },
        {
          name: "Driftwood Point",
          description: "Lakeside homes with boat docks needing installations that accommodate waterfront access and marine equipment storage"
        },
        {
          name: "Victor Falls",
          description: "Residential community with lake access requiring durable materials for high-humidity environment and recreational lifestyle"
        }
      ]}
      landmarks={[
        "Lake Tapps",
        "Allan Yorke Park",
        "Victor Falls Park",
        "Driftwood Point Park",
        "Lake Tapps Marina",
        "North Lake Tapps Park"
      ]}
      climateDescription="Lake Tapps is a unique waterfront community surrounding a 2,500-acre reservoir. The lakeside location brings increased humidity and moisture exposure, while the residential character features many properties with water access and views to preserve."
      localChallenges={[
        "Waterfront properties requiring corrosion-resistant materials",
        "Lake-view preservation while maintaining privacy",
        "High humidity accelerating material deterioration",
        "Waterfront regulations and setback requirements",
        "Recreational boat access considerations"
      ]}
      localSolutions={[
        "Marine-grade hardware and stainless steel fasteners",
        "View-friendly horizontal and partial privacy designs",
        "Moisture-resistant treatments and premium sealants",
        "Compliant installations respecting waterfront regulations",
        "Durable materials withstanding lakeside environment"
      ]}
      articleContent={articleContent}
      faqStructuredData={lakeTappsFaqLd}
    />
  );
};

export default LakeTapps;
