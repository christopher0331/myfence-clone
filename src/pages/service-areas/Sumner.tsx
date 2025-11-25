import ServiceAreaTemplate from "./ServiceAreaTemplate";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const Sumner = () => {
  const sumnerFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a permit for a fence in Sumner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential fences in Sumner require a permit through Pierce County. Fences over 6 feet tall or within setback areas have additional requirements. We handle all permit applications and ensure your fence meets local codes including historic district requirements downtown."
        }
      },
      {
        "@type": "Question",
        "name": "What fence materials work best for Sumner's clay soil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Sumner's heavy clay valley soils, we use deep concrete footings (36+ inches) with gravel drainage collars and premium pressure-treated posts rated for high-moisture ground contact. These techniques prevent frost heaving and post movement common in clay soils."
        }
      },
      {
        "@type": "Question",
        "name": "How long does fence installation take in Sumner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Sumner fence installations take 2-5 days depending on project size and soil conditions. Valley clay soils may require additional time for proper deep footing installation to ensure long-term stability. We provide detailed timelines during your consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you install historic-style fences for downtown Sumner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in period-appropriate picket and board fence designs that complement Sumner's preserved 1890s architecture. Our historic-style installations meet downtown preservation district requirements while providing modern durability."
        }
      }
    ]
  };

  const sumnerBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MyFence.com - Sumner Historic Fence Installation",
    "image": "https://myfence.com/myfence-logo.png",
    "description": "Family-owned fence installation serving Sumner's historic downtown, valley neighborhoods, and Puyallup River properties with expert clay soil solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sumner",
      "addressRegion": "WA",
      "postalCode": "98390",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.2034,
      "longitude": -122.2401
    },
    "telephone": "(253) 478-8589",
    "areaServed": {
      "@type": "City",
      "name": "Sumner"
    }
  };

  const articleContent = (
    <div className="prose prose-lg max-w-none">
      {/* Company Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historic Sumner Fence Installation Specialists</h2>
        <p className="text-lg mb-4">
          MyFence.com proudly serves Sumner with over three decades of fencing expertise tailored to this historic valley 
          community. From Main Street's preserved 1890s architecture to rural properties along the Puyallup River, we understand 
          the unique challenges of Sumner's clay-rich valley soils, elevated humidity, and diverse property types.
        </p>
        <p className="text-lg mb-4">
          Whether you're restoring a downtown period home, securing a Ryan Road residential property, or fencing rural acreage 
          in East Sumner, our installations are engineered for the valley's specific environmental conditions. We combine 
          old-fashioned craftsmanship values with modern installation techniques designed for Sumner's challenging terrain.
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
        <h2 className="text-3xl font-bold mb-6">Professional Fence Installation for Sumner Properties</h2>
        <p className="text-lg mb-4">
          Sumner's Puyallup River valley location creates unique installation requirements. Heavy clay soils with poor drainage, 
          high water tables near the river, and persistent morning fog demand specialized techniques that prevent the post 
          movement and premature deterioration common in valley environments.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Deep concrete footings (36+ inches) with gravel drainage collars for clay soil stability</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Elevated post bases in flood-prone areas using above-grade concrete piers</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Premium pressure-treated posts rated for ground contact in high-moisture environments</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Historic-style designs approved for downtown preservation district</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Agricultural gate systems with heavy-duty hardware for rural properties and farms</span>
          </li>
        </ul>
      </section>

      {/* Why Choose Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Why Choose MyFence.com in Sumner</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Clay Soil Specialists</h3>
            <p>Expert knowledge of Sumner's challenging valley clay soils with proven techniques preventing frost heaving and post movement.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Historic District Experience</h3>
            <p>Period-appropriate fence designs that complement Sumner's preserved 1890s architecture while meeting modern durability standards.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Valley Environment Expertise</h3>
            <p>Specialized treatments and materials designed for Sumner's elevated humidity, morning fog retention, and seasonal moisture challenges.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">{WARRANTY_CONSTANTS.TITLE}</h3>
            <p>Comprehensive warranty covering all workmanship, backed by three decades of fencing excellence and valley-specific installation expertise.</p>
          </Card>
        </div>
      </section>

      {/* Fence Types Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fence Types & Materials for Sumner</h2>
        
        <h3 className="text-2xl font-semibold mb-4">Premium Western Red Cedar</h3>
        <p className="text-lg mb-6">
          Western Red Cedar is ideal for Sumner's humid valley environment due to its natural rot resistance and dimensional 
          stability in high-moisture conditions. The wood's inherent oils provide protection against the decay accelerated by 
          Sumner's persistent morning fog and clay soil moisture retention. We source premium-grade cedar and apply 
          moisture-resistant treatments for extended lifespan in valley conditions.
        </p>

        <h3 className="text-2xl font-semibold mb-4">What We Install in Sumner</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Cedar Privacy Fences:</strong> Full privacy with deep footings engineered for clay soil stability</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Historic Picket Fencing:</strong> Period-appropriate designs for downtown preservation district compliance</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Board-on-Board Designs:</strong> Airflow-optimized construction reducing wind load while maintaining privacy</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Agricultural Fencing:</strong> Extended fence runs and farm-grade gates for rural properties and livestock</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Other Fence Materials (Informational Only)</h3>
        <p className="text-lg mb-4">
          While we specialize in cedar installations, homeowners sometimes ask about alternative materials for valley 
          properties. Here's what you should know:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-1" />
            <span><strong>Vinyl Fencing:</strong> Low maintenance but can warp in clay soil movement and may not meet historic district aesthetic standards (we do not install)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-1" />
            <span><strong>Composite Fencing:</strong> Moisture-resistant but lacks the authentic appearance valued in Sumner's historic character (we do not install)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-1" />
            <span><strong>Aluminum/Steel:</strong> Durable but limited design flexibility for period-appropriate installations (we do not install standalone metal systems)</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Hybrid Aluminum Cedar System</h3>
        <p className="text-lg mb-4">
          For maximum durability in Sumner's challenging valley environment, we offer a hybrid system combining black 
          powder-coated aluminum panels with premium cedar frames and pressure-treated posts. This system delivers:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Aluminum panels impervious to moisture and humidity damage</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Cedar frame aesthetic complementing residential properties</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Virtually maintenance-free with powder-coated finish</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span>Ideal for high-exposure valley locations with persistent fog and humidity</span>
          </li>
        </ul>
      </section>

      {/* Financing Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Flexible Fence Financing for Sumner</h2>
        <p className="text-lg mb-4">
          Quality fencing is an investment in your Sumner property. We partner with Wisetack to offer flexible financing 
          options that make premium fence installation accessible for residential and agricultural properties. Get approved 
          in minutes with options designed for your budget.
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
          Every Sumner fence installation includes our comprehensive {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty. 
          We stand behind our valley-specific installations with confidence, knowing our specialized clay soil techniques 
          and moisture-resistant construction deliver lasting performance in Sumner's challenging environment.
        </p>
        <p className="text-lg mb-4">
          Our warranty covers all installation workmanship, ensuring your fence maintains structural integrity and aesthetic 
          appeal throughout the warranty period. With over 30 years of fencing expertise and specialized valley installation 
          experience, we deliver quality you can trust.
        </p>
      </section>

      {/* Local Challenges Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Sumner Valley Fencing Challenges</h2>
        <p className="text-lg mb-4">
          Sumner's Puyallup River valley location creates unique environmental conditions that significantly impact fence 
          installation and longevity. Understanding these valley-specific challenges is essential for proper fence design:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Heavy Clay Soils:</strong> Poor-draining valley clay causes frost heaving and post movement without deep footings and proper drainage</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>High Water Tables:</strong> Properties near Puyallup River require elevated post bases and special foundation techniques</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Fog Retention:</strong> Valley location traps moisture with 10-15% higher humidity than hillside communities</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Historic Requirements:</strong> Downtown preservation district mandates period-appropriate fence designs</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Agricultural Needs:</strong> Rural properties require farm-grade gates and extended perimeter fencing</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Our Valley-Specific Solutions</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Deep Concrete Footings:</strong> 36+ inch depth with gravel drainage collars preventing frost heaving in clay</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Elevated Installations:</strong> Above-grade concrete piers for flood-prone areas near river corridors</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Premium Treatments:</strong> High-moisture rated posts and advanced sealants for fog-retention conditions</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Historic Designs:</strong> Period-appropriate picket and board styles meeting preservation standards</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
            <span><strong>Agricultural Systems:</strong> Heavy-duty gate hinges and livestock-rated fencing for farms</span>
          </li>
        </ul>
      </section>

      {/* Permits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Sumner Fence Permits & Regulations</h2>
        <p className="text-lg mb-4">
          Sumner falls under Pierce County jurisdiction for building permits and regulations. Most residential fences require 
          permits, particularly those in the historic downtown district or exceeding standard height limits. Properties in the 
          downtown preservation district have additional aesthetic requirements.
        </p>
        <p className="text-lg mb-4">
          We handle all permit applications and ensure your fence complies with Pierce County codes and Sumner's historic 
          preservation guidelines. Our experience with downtown requirements streamlines the approval process for period 
          properties.
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
          </a>. For historic district requirements, contact the{" "}
          <a 
            href="https://www.sumnerwa.gov/departments/community-development" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Sumner Community Development Department
          </a>.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Sumner Fence Installation FAQs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Do I need a permit for a fence in Sumner?</h3>
            <p className="text-lg">
              Most residential fences in Sumner require a permit through Pierce County. Fences over 6 feet tall or within 
              setback areas have additional requirements. We handle all permit applications and ensure your fence meets local 
              codes including historic district requirements downtown.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What fence materials work best for Sumner's clay soil?</h3>
            <p className="text-lg">
              For Sumner's heavy clay valley soils, we use deep concrete footings (36+ inches) with gravel drainage collars 
              and premium pressure-treated posts rated for high-moisture ground contact. These techniques prevent frost heaving 
              and post movement common in clay soils.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How long does fence installation take in Sumner?</h3>
            <p className="text-lg">
              Most Sumner fence installations take 2-5 days depending on project size and soil conditions. Valley clay soils 
              may require additional time for proper deep footing installation to ensure long-term stability. We provide 
              detailed timelines during your consultation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Can you install historic-style fences for downtown Sumner?</h3>
            <p className="text-lg">
              Yes! We specialize in period-appropriate picket and board fence designs that complement Sumner's preserved 1890s 
              architecture. Our historic-style installations meet downtown preservation district requirements while providing 
              modern durability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <ServiceAreaTemplate 
      city="Sumner" 
      state="WA"
      heroTitle="Historic Sumner Fence Installation with Small-Town Service"
      heroDescription="Family-owned fence installation serving Sumner's historic downtown, valley neighborhoods, and Puyallup River properties. From Main Street to rural estates, we deliver quality craftsmanship with hometown values."
      metaTitle="Sumner Fence Installation | Historic Valley Properties"
      metaDescription="Expert fence installation for Sumner, WA. Serving historic downtown, valley properties & river areas. Clay soil specialists. Family-owned with 30+ years experience. Call (253) 455-1885."
      zipCodes={["98390", "98352"]}
      neighborhoods={[
        {
          name: "Historic Downtown Sumner",
          description: "Charming Main Street district with preserved 1890s architecture requiring historically-appropriate fence designs that complement period homes and commercial restoration projects"
        },
        {
          name: "Ryan Road Corridor",
          description: "Established residential area with mature properties and large lots demanding durable perimeter fencing for privacy and pet containment"
        },
        {
          name: "Valley Avenue District",
          description: "Mix of residential and agricultural properties with varied terrain requiring flexible installation approaches from suburban yards to rural acreage"
        },
        {
          name: "Puyallup River Vicinity",
          description: "Properties near river corridors with high water tables and seasonal flooding concerns requiring elevated post footings and moisture-resistant construction"
        },
        {
          name: "Sumner High Plateau",
          description: "Elevated neighborhoods above valley floor with better drainage but exposure to prevailing winds necessitating reinforced post systems"
        },
        {
          name: "East Sumner Rural Area",
          description: "Large-lot properties and small farms requiring extended fence runs, agricultural gates, and animal containment solutions"
        }
      ]}
      landmarks={[
        "Historic Downtown Sumner",
        "Ryan Park",
        "Sumner Depot Museum",
        "Main Street Plaza",
        "Valley Regional Medical Center",
        "Puyallup River Trail"
      ]}
      climateDescription="Sumner sits in the Puyallup River valley, creating unique conditions where cool air settles and morning fog persists longer than surrounding areas. The valley location traps moisture, with humidity often 10-15% higher than nearby hillside communities. Heavy clay soils dominate the area, presenting drainage challenges and requiring specialized post installation techniques to prevent frost heaving and post movement."
      localChallenges={[
        "Heavy clay valley soils with poor drainage requiring modified post setting techniques",
        "High water tables near Puyallup River affecting post depth and foundation stability",
        "Seasonal fog retention increasing wood moisture content and accelerating decay",
        "Historic district requirements for architecturally-compatible fence designs downtown",
        "Agricultural properties needing farm-grade gates and extended perimeter fencing",
        "Valley wind patterns creating uplift pressure on solid fence panels"
      ]}
      localSolutions={[
        "Deep concrete footings (36+ inches) with gravel drainage collars for clay soil stability",
        "Elevated post bases in flood-prone areas using above-grade concrete piers",
        "Premium pressure-treated posts rated for ground contact in high-moisture environments",
        "Historic-style picket and board designs approved for downtown preservation district",
        "Agricultural gate systems with heavy-duty hinges rated for frequent use and livestock pressure",
        "Board-on-board and horizontal designs allowing airflow to reduce wind load while maintaining privacy"
      ]}
      articleContent={articleContent}
      faqStructuredData={sumnerFaqLd}
    />
  );
};

export default Sumner;
