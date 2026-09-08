"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Shield,
  Star,
  Award,
  ArrowLeft,
  MapPin,
  Phone,
  TreePine,
  Droplets,
  Mountain,
  Ruler,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/covington/maple-hills";
const META_TITLE = "Maple Hills Fence Installation | Covington | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Maple Hills, Covington. Cedar, hogwire & hybrid fencing for hillside lots, clay soil and drainage. Free quotes. (253) 455-1885.";

const MAPLE_HILLS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Covington Community Park",
    url: "https://www.covingtonwa.gov/city_departments/parks_and_recreation/covington_community_park.php",
    description:
      "A central Covington gathering place with trails, playgrounds, sports areas and open space that Maple Hills residents can reach without leaving the city.",
  },
  {
    name: "Jenkins Creek Park",
    url: "https://www.covingtonwa.gov/city_departments/parks_and_recreation/jenkins_creek_park.php",
    description:
      "A wooded local park with creekside scenery, quiet walking routes and the kind of natural drainage patterns that shape many nearby fence projects.",
  },
  {
    name: "Covington Aquatic Center",
    url: "https://www.covingtonwa.gov/city_departments/parks_and_recreation/aquatic_center.php",
    description:
      "A year-round recreation facility for lessons, lap swim and family programs close to Covington's residential neighborhoods.",
  },
  {
    name: "Soaring Eagle Regional Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/soaring-eagle",
    description:
      "A large regional natural area east of Covington with forested trails, equestrian routes and mountain biking access for outdoor-focused households.",
  },
  {
    name: "Covington Farmers Market",
    url: "https://www.covingtonfarmersmarket.org/",
    description:
      "A seasonal community market where residents connect with local growers, makers and small businesses in the heart of Covington.",
  },
];

const MapleHillsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Maple Hills, Covington",
    pageTitle: "Maple Hills Covington Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Maple Hills, Covington?",
        answer:
          "Fence requirements in Maple Hills depend on the parcel, fence height, corner visibility, easements and any neighborhood or HOA rules that apply. MyFence.com reviews your site conditions before installation and recommends confirming current requirements with the City of Covington and any applicable HOA before work begins.",
      },
      {
        question: "What fence styles work best on Maple Hills' sloped lots?",
        answer:
          "Cedar privacy fences are popular for established residential lots, hogwire works well where homeowners want openness and drainage visibility, and hybrid aluminum/cedar systems are a strong fit for wet or shaded fence lines. The best choice depends on slope, soil, privacy goals and how much maintenance you want.",
      },
      {
        question: "How much does fence installation cost in Maple Hills?",
        answer:
          "Maple Hills fence installation commonly falls between $35 and $68 per linear foot depending on style, slope and access. Cedar privacy fences typically range from $40 to $58 per foot, hogwire from $35 to $50 per foot, and hybrid aluminum/cedar from $50 to $68 per foot. Steep grades and drainage corrections can affect the final quote.",
      },
      {
        question: "How long does a Maple Hills fence installation take?",
        answer:
          "Most Maple Hills residential fence installations take 1 to 3 days after materials are ready. Hillside layouts, difficult access, wet clay soil or custom gate work can extend the schedule, and we review timing with you before installation begins.",
      },
    ],
  });

  return (
    <>
      <Seo
        title={META_TITLE}
        description={META_DESCRIPTION}
        canonical={CANONICAL}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        {/* 1. Hero */}
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/covington"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Covington
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Maple Hills, Covington WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Maple Hills Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Hillside fencing for Maple Hills homes in Covington, built for varied elevations, wet winters and clay-rich soil. We design cedar, hogwire and hybrid fence systems that look clean while handling the grade changes common throughout the neighborhood.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="tel:12534551885">
                    <Button size="lg" variant="hero" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (253) 455-1885
                    </Button>
                  </a>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <Link href="/quote">Get Free Quote</Link>
                  </Button>
                </div>
              </div>
              <div className="w-full rounded-lg overflow-hidden shadow-lg min-h-[280px]">
                <GoogleBusinessMap
                  city="Covington"
                  state="WA"
                  radiusMiles={5}
                  zoom={11}
                  showBusinessInfo={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trust Badges Bar */}
        <section className="py-6 border-y bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Star className="h-5 w-5 text-primary fill-primary" />
                5.0 ★ Google Rating
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-5 w-5 text-primary" />
                {WARRANTY_CONSTANTS.YEARS}-Year Warranty
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                150+ Five-Star Reviews
              </span>
            </div>
          </div>
        </section>

        {/* 3. Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing for Covington's Established Hillside Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Maple Hills is known for established residential lots, mature landscaping and elevation changes that can make a simple fence line more complicated than it appears from the street. The same terrain that gives the neighborhood its privacy and character can create stepped grades, wet low spots and clay soil movement that affect post placement and long-term fence stability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com plans Maple Hills fence projects around Covington's hillside conditions instead of forcing a flat-yard approach onto sloped ground. Our Fence Genius measurement process captures grade changes, gate openings, drainage flow and tree positions so your fence layout is built around the actual property — whether your yard slopes toward Jenkins Creek, sits near Covington Community Park, or backs up to a more wooded edge of the neighborhood.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Maple Hills Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Slope-Aware Layouts</h3>
                      <p className="text-muted-foreground">
                        Maple Hills yards often need stepped or racked fence layouts to keep clean lines across changing elevations. We measure each run carefully so panels, gates and transitions fit the grade instead of fighting it.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Drainage-Focused Installation</h3>
                      <p className="text-muted-foreground">
                        Covington rainfall and hillside runoff can collect around posts if drainage is ignored. We account for wet areas, downspout flow and low points before setting the fence line.
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
                        Every Maple Hills installation is backed by our craftsmanship warranty, giving you confidence that your cedar, hogwire or hybrid fence is built for local soil and weather.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fence Genius Precision</h3>
                      <p className="text-muted-foreground">
                        Our measurement system helps identify panel lengths, grade breaks and gate clearances before build day, reducing surprises on Maple Hills lots with irregular slopes or landscaping.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Local Reviews */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Maple Hills Homeowners Can Expect
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Clear Site Planning</h3>
                  <p className="text-muted-foreground">
                    We walk the fence line with you, review slope transitions and explain where gates, panels and corners will land before installation starts.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Respect for Established Yards</h3>
                  <p className="text-muted-foreground">
                    Maple Hills properties often have mature trees and landscaping. Our crews plan access routes and work zones to limit unnecessary disruption.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Practical Fence Guidance</h3>
                  <p className="text-muted-foreground">
                    We help you compare privacy, visibility, maintenance and budget so the final design fits how you actually use your Covington yard.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Covington" neighborhood="Maple Hills" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Covington" neighborhood="Maple Hills" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Maple Hills-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Maple Hills Terrain Planning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The biggest fence challenge in Maple Hills is grade variation. A backyard may look level near the patio, then fall away at the side yard or dip toward a drainage path. We measure elevation changes across each run so the final fence follows the yard in a deliberate way, with transitions placed where they look natural and function properly.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Maple Hills Drainage and Wet Soil</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Covington's rainy season can saturate clay-rich soil, especially on lots where runoff travels across side yards or collects at rear property lines. Fence posts, gates and bottom rails need enough clearance and stability to handle that seasonal moisture. We identify low spots before installation and recommend materials and layouts that keep the fence performing through wet months.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Privacy Between Established Homes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Maple Hills homeowners want more backyard privacy without making the property feel boxed in. Cedar privacy fencing is a strong fit for close side yards and outdoor living spaces, while hogwire or hybrid sections can be used where you want to maintain openness toward landscaping or natural edges.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Trees, Roots and Mature Landscaping</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Established Maple Hills lots often include trees, shrubs, retaining edges and garden beds close to the property line. We plan access and post placement around those features whenever possible, balancing the need for a straight, durable fence with the goal of preserving the yard's existing character.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Pricing Transparency */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Maple Hills
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Maple Hills fence pricing depends on linear footage, fence style, slope, access and drainage conditions. Hillside lots can require more layout time than flat yards, but a precise on-site measurement keeps your quote clear before work begins.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Cedar privacy fence:</strong> $40–$58 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Hogwire fence:</strong> $35–$50 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Hybrid aluminum/cedar:</strong> $50–$68 per linear foot
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Slope transitions, difficult access, drainage corrections and custom gates can affect the final cost. Get an exact quote for your Maple Hills property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Maple Hills property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Maple Hills</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A natural choice for Maple Hills homeowners who want privacy between established yards. Cedar pairs well with mature landscaping and creates a warm residential look.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A practical option for sloped or landscaped portions of a Maple Hills yard where you want definition without blocking light, views or airflow.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A low-maintenance fit for wet or shaded fence lines in Covington, combining a modern look with strong performance through rainy seasons.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Maple Hills Covington fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Maple Hills Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Maple Hills Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We inspect the fence line, grade changes, wet areas, gates and landscaping so your estimate reflects the real conditions on your Maple Hills property.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Maple Hills Design Review</h3>
                  <p className="text-muted-foreground">
                    You choose the fence style, privacy level and gate locations. We review setbacks, neighbor-facing sections and any HOA or neighborhood requirements you need to confirm.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Planning with Fence Genius</h3>
                  <p className="text-muted-foreground">
                    Fence Genius measurements help us plan panel lengths, grade transitions and gate clearances before installation, which is especially helpful on Maple Hills' varied terrain.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Maple Hills Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs your fence with attention to slope, drainage and access. Most residential projects in the area complete in 1–3 days depending on length and complexity.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We complete a final walkthrough with you, review care recommendations and activate your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 13. About the Area */}
        <AboutTheArea
          cityName="Covington"
          neighborhoodName="Maple Hills"
          attractions={MAPLE_HILLS_ATTRACTIONS}
          localLivingContent={
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Maple Hills residents are part of a growing Covington community served by the{" "}
                <a href="https://www.kent.k12.wa.us/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Kent School District
                </a>{" "}
                and supported by nearby recreation hubs like{" "}
                <a href="https://www.covingtonwa.gov/city_departments/parks_and_recreation/covington_community_park.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Covington Community Park
                </a>{" "}
                and the{" "}
                <a href="https://www.covingtonwa.gov/city_departments/parks_and_recreation/aquatic_center.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Covington Aquatic Center
                </a>. The neighborhood's residential feel, mature yards and hillside lots make thoughtful fence design especially important for privacy, pets and outdoor living.
              </p>
              <p>
                Everyday errands and local business connections are close by through Covington's retail core and the{" "}
                <a href="https://covingtonchamber.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Covington Chamber of Commerce
                </a>, while weekend outdoor access is easy with nearby{" "}
                <a href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/soaring-eagle" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Soaring Eagle Regional Park
                </a>,{" "}
                <a href="https://www.covingtonfarmersmarket.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Covington Farmers Market
                </a>{" "}
                and the broader{" "}
                <a href="https://www.kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  King County regional trail network
                </a>.
              </p>
            </div>
          }
        />

        {/* 14. Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Covington Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Covington. If you're in Maple Hills, we also serve Jenkins Creek, Rock Creek, Lake Sawyer, Covington Woods, Shadow Lake and Timberlane.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington">Covington overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington/covington-woods">Covington Woods</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington/timberlane">Timberlane</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">Maple Valley</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 15. CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Maple Hills Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates are available in Maple Hills. We'll assess your slope, soil, access and privacy goals, then recommend the best fence design for your Covington property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="px-8 py-4" variant="default">
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
                <Button asChild className="px-8 py-4" variant="secondary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MapleHillsPage;