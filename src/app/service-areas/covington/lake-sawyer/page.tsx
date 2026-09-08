"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
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
  Waves,
  Droplets,
  Trees,
  Eye,
  PawPrint,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/covington/lake-sawyer";
const META_TITLE = "Lake Sawyer Fence Installation | Covington | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Lake Sawyer, Covington, WA. Cedar, hogwire & hybrid fencing for lakeside moisture, privacy, pets and views. Call (253) 455-1885.";

const LAKE_SAWYER_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Soaring Eagle Regional Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/soaring-eagle",
    description:
      "A large regional trail system near the Lake Sawyer area where wooded routes, equestrian access, and mountain bike paths show the forested edge conditions common around local homes.",
  },
  {
    name: "Jenkins Creek Park",
    url: "https://www.covingtonwa.gov/city_departments/parks_and_recreation/jenkins_creek_park.php",
    description:
      "A quiet creekside park with forested walking areas that reflects the moisture, shade, and native landscaping many Lake Sawyer-area properties manage year-round.",
  },
  {
    name: "Covington Community Park",
    url: "https://www.covingtonwa.gov/city_departments/parks_and_recreation/covington_community_park.php",
    description:
      "Covington's central recreation destination offers playgrounds, trails, sports courts, and community gathering space a short drive from Lake Sawyer homes.",
  },
  {
    name: "Covington Aquatic Center",
    url: "https://www.covingtonwa.gov/city_departments/parks_and_recreation/aquatic_center.php",
    description:
      "A year-round community facility for swim lessons, family programs, and recreation, adding to the active outdoor lifestyle around Covington and Lake Sawyer.",
  },
  {
    name: "Covington Farmers Market",
    url: "https://www.covingtonfarmersmarket.org/",
    description:
      "A seasonal neighborhood gathering place where local farms, food vendors, and artisans bring the community together during the warmer months.",
  },
];

const LakeSawyerPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Lake Sawyer, Covington",
    pageTitle: "Lake Sawyer Covington Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Lake Sawyer, Covington?",
        answer:
          "Fence requirements can vary by parcel, height, corner visibility, easements, shoreline influence, and HOA rules. MyFence.com reviews the location, planned fence height, and property-line conditions before installation so your Lake Sawyer fence is planned correctly.",
      },
      {
        question: "What fence styles work best for Lake Sawyer's moisture and views?",
        answer:
          "Cedar privacy fencing works well where screening is the priority, hogwire is useful where homeowners want pet containment without blocking views, and hybrid aluminum/cedar fencing is a strong option for lower-maintenance lake-area yards exposed to moisture and shade.",
      },
      {
        question: "How much does fence installation cost in Lake Sawyer?",
        answer:
          "Lake Sawyer fence installation commonly ranges from about $35–$68 per linear foot depending on material, slope, access, gates, and terrain. A site visit provides the most accurate price for lakeside moisture, drainage, and view-preservation needs.",
      },
      {
        question: "How long does a Lake Sawyer fence installation take?",
        answer:
          "Most residential Lake Sawyer fence installations take 1–3 days after design approval and materials are ready. Larger lots, tight lake-area access, custom gates, or complex terrain can extend the schedule.",
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
                    Serving Lake Sawyer, Covington WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Lake Sawyer Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Lakeside fencing for Lake Sawyer homes that need privacy, pet containment, moisture-resistant materials, and thoughtful sightlines. MyFence.com designs cedar, hogwire, and hybrid fences around water views, sloped yards, and wooded Covington terrain.
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

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing for Lakeside Lots, Wooded Edges, and Active Yards
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Lake Sawyer properties balance privacy with scenery. Some yards need screening from nearby streets and neighboring homes, while others need a lower-profile boundary that keeps pets in without closing off water views. Add Covington's wet winters, shaded tree lines, and sloped yard transitions, and a standard fence layout is rarely the best answer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com plans Lake Sawyer fencing around drainage, visibility, lake-area moisture, gates, pets, and property-line usability. Our Fence Genius measurement process helps map slopes and layout changes before installation so your fence follows the property naturally, protects everyday outdoor living, and supports the way your Lake Sawyer yard is actually used.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Lake Sawyer Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">View-Conscious Layouts</h3>
                      <p className="text-muted-foreground">
                        We help you choose where full privacy makes sense and where open styles preserve sightlines across outdoor living spaces, side yards, and lake-facing areas.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Moisture-Aware Materials</h3>
                      <p className="text-muted-foreground">
                        Lake-area yards stay damp longer after rain. We recommend cedar, hogwire, and hybrid systems based on shade, airflow, maintenance goals, and exposure.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Trees className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tree and Landscape Care</h3>
                      <p className="text-muted-foreground">
                        Many Lake Sawyer yards transition into mature landscaping and wooded edges. Our planning keeps fence lines practical while protecting established planting beds and access routes.
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
                        Every Lake Sawyer installation is backed by MyFence.com's craftsmanship warranty, with clear communication from the first measurement through final walkthrough.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Lake Sawyer Homeowners Care About
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <Eye className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Privacy Without Losing the Setting</h3>
                  <p className="text-muted-foreground">
                    Lake-area homeowners often want screening near patios, side yards, and neighboring windows while keeping lighter, more open fencing where the view matters.
                  </p>
                </Card>
                <Card className="p-6">
                  <PawPrint className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Pet and Wildlife Boundaries</h3>
                  <p className="text-muted-foreground">
                    Secure gates, appropriate heights, and careful bottom clearances help keep dogs in and reduce unwanted wildlife movement through the usable yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <Droplets className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Wet-Weather Performance</h3>
                  <p className="text-muted-foreground">
                    Fence design must account for wet soil, shaded sections, and airflow so the finished installation remains stable and easier to maintain through Pacific Northwest winters.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaPhotoGallery city="Covington" neighborhood="Lake Sawyer" />

        <FeaturedProject city="Covington" neighborhood="Lake Sawyer" />

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Lake Sawyer-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Lake Sawyer Moisture and Airflow</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fences near water, shade, and dense landscaping need room to dry. We evaluate airflow, sun exposure, and soil conditions before recommending full privacy, hogwire, or hybrid panels. On damp fence lines, spacing, gate placement, and material selection can make a noticeable difference in long-term maintenance.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">View Preservation Around Outdoor Living Areas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Lake Sawyer fence should not feel like a wall in the wrong place. We often blend taller screening near neighboring activity zones with more open styles along scenic edges, helping homeowners protect privacy while keeping the lake-area character that makes the property valuable.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Sloped Yard Transitions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Covington lots near natural areas include grade changes, drainage swales, and uneven side yards. Fence Genius measurements help us plan panel transitions and gate locations so the finished fence follows the terrain cleanly instead of leaving awkward gaps or abrupt steps.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Pets, Wildlife, and Yard Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lake Sawyer households often need fencing for dogs, children, and outdoor storage while still maintaining convenient access to side yards, trails, or water-oriented spaces. We plan gate swings, latch locations, and bottom clearances around daily use, not just the property line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Lake Sawyer
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Lake Sawyer fence pricing depends on fence style, linear footage, gates, terrain, access, and how much moisture or view-preservation planning the yard requires. These ranges provide a practical starting point for Covington homeowners.
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
                  Slopes, wet soil, custom gates, and limited access can affect final pricing. A site visit gives the most accurate number for your Lake Sawyer property.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Lake Sawyer property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Popular Fence Styles in Lake Sawyer
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A strong choice for patios, side yards, and neighbor-facing boundaries where Lake Sawyer homeowners want a warmer natural look with reliable privacy.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Hogwire works well where pets need a boundary but homeowners want light, airflow, and a more open feel near scenic or wooded parts of the property.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A lower-maintenance option for damp or shaded fence lines where Lake Sawyer homeowners want a clean modern look with less upkeep.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Lake Sawyer Covington fence" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Lake Sawyer Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Lake Sawyer Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We review slope, access, gates, drainage, visibility, landscaping, and the privacy goals for each side of your Lake Sawyer property.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Lake Sawyer Design Plan</h3>
                  <p className="text-muted-foreground">
                    You choose the style and layout, and we help balance screening, pet control, lake-area views, and any HOA or property-specific requirements that apply.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Fence Genius Measurements</h3>
                  <p className="text-muted-foreground">
                    Our digital measurement workflow captures dimensions and terrain changes so panels, posts, and gates are planned accurately before installation begins.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Lake Sawyer Installation</h3>
                  <p className="text-muted-foreground">
                    The crew installs with attention to wet soil, landscape protection, clean transitions, and secure gate function. Most residential projects are completed in 1–3 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We walk the finished fence with you, confirm gates and details, answer maintenance questions, and activate your MyFence.com warranty coverage.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <AboutTheArea
          cityName="Covington"
          neighborhoodName="Lake Sawyer"
          attractions={LAKE_SAWYER_ATTRACTIONS}
          localLivingContent={
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lake Sawyer homeowners enjoy a setting that feels close to water, woods, and Covington conveniences. Families in the area are served by the{" "}
                <a href="https://www.kent.k12.wa.us/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Kent School District
                </a>{" "}
                while everyday recreation is supported by nearby{" "}
                <a href="https://www.covingtonwa.gov/city_departments/parks_and_recreation/covington_community_park.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Covington Community Park
                </a>{" "}
                and the wooded trails at{" "}
                <a href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/soaring-eagle" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Soaring Eagle Regional Park
                </a>.
              </p>
              <p>
                The broader Covington community adds shopping, seasonal events, and local services without losing quick access to natural spaces. Residents can connect with the{" "}
                <a href="https://covingtonchamber.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Covington Chamber of Commerce
                </a>{" "}
                for local business activity, visit the{" "}
                <a href="https://www.covingtonfarmersmarket.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Covington Farmers Market
                </a>{" "}
                during the season, or use the{" "}
                <a href="https://www.covingtonwa.gov/city_departments/parks_and_recreation/aquatic_center.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">
                  Covington Aquatic Center
                </a>{" "}
                for year-round recreation.
              </p>
            </div>
          }
        />

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Covington Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Covington, including nearby wooded, hillside, and family-friendly neighborhoods with similar moisture, slope, and privacy needs.
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
                  <Link href="/service-areas/covington/maple-hills">Maple Hills</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Lake Sawyer Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates are available in Lake Sawyer when scheduling allows. Tell us what you need for privacy, views, pets, or moisture performance, and we will recommend a fence plan built for your Covington yard.
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

export default LakeSawyerPage;