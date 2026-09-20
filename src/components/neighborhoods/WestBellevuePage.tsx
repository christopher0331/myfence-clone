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
  Eye,
  Droplets,
  Home,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import {
  buildNeighborhoodStructuredData,
  type NeighborhoodFaqItem,
} from "@/components/neighborhoods/structuredData";
import NeighborhoodFaqSection from "@/components/neighborhoods/NeighborhoodFaqSection";

const CANONICAL = "https://myfence.com/service-areas/bellevue/west-bellevue";
const META_TITLE =
  "West Bellevue Fence Installation | Lake Washington Shoreline | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in West Bellevue, Bellevue, WA. Cedar, hogwire & hybrid fencing for Meydenbauer Bay, Enatai, and lakeshore lots. Free quotes. (253) 455-1885.";

const WEST_BELLEVUE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in West Bellevue?",
    answer:
      "The City of Bellevue typically requires a building permit for fences taller than six feet, and for any fence that sits in a mapped critical area, wetland buffer, or shoreline jurisdiction. Lakeshore parcels along Lake Washington Boulevard, 100th Avenue SE, and the streets that drop toward Meydenbauer Bay can fall under Bellevue's Shoreline Master Program even when the fence itself is six feet. Front-yard fencing is usually limited to four feet, and corner lots on Bellevue Way and Main Street must keep sight triangles clear. MyFence.com checks overlays for your West Bellevue address before we quote and handles the paperwork when a permit is required.",
  },
  {
    question:
      "What fence styles work best for West Bellevue's lakeshore lots and view corridors?",
    answer:
      "Lots that sit against Lake Washington often mix a solid cedar privacy run on the street and neighbor sides with hogwire or a lower hybrid stretch on the water side so the Seattle skyline and the bay stay in the picture. Compact Old Bellevue yards off Main Street usually want full-height cedar for privacy from downtown towers. Hybrid aluminum-and-cedar systems suit owners who want the cedar look without restaining in the extra humidity that hangs over the lake at night. Fence Genius maps grade so panels step toward the water instead of leaving crawl gaps on a downhill tilt.",
  },
  {
    question: "How much does fence installation cost in West Bellevue?",
    answer:
      "West Bellevue fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Hand-digging around shoreline trees, stepped runs toward the lake, custom gates, and shoreline-permit drawings can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in West Bellevue?",
    answer:
      "Most West Bellevue residential projects finish in one to three working days after any city or shoreline paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from hand-digging near older cedars and maples, tight side yards on Old Bellevue lots, or staging around weekday traffic on Bellevue Way. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in West Bellevue?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Bellevue does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. West Bellevue mixes older lakeshore pins, mid-century Enatai plats, and newer townhome lines near downtown, so confirming the line before digging saves a redo. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const WEST_BELLEVUE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Meydenbauer Bay Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/meydenbauer-beach-park",
    description:
      "Bellevue's rebuilt downtown waterfront at 9899 Lake Washington Boulevard NE, with a pier, beach house, and hillside path that West Bellevue households use as the short walk to the lake when they do not want to drive to a south-end beach.",
  },
  {
    name: "Enatai Beach Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/enatai-beach-park",
    description:
      "A three-acre Lake Washington beach at 3519 108th Avenue SE, just below the Enatai streets. Seasonal kayak rentals and the dock make it the after-school swim spot for families whose yards drop toward I-90 and the slough.",
  },
  {
    name: "Chism Beach Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/chism-beach-park",
    description:
      "A hillside beach and picnic lawn at 9600 SE 11th Street, tucked between Old Bellevue and Enatai. Neighbors treat the walk down from 100th Avenue SE as the quieter alternative when Meydenbauer's lot is full.",
  },
  {
    name: "Bellevue Downtown Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/bellevue-downtown-park",
    description:
      "Twenty-one acres of promenade, canal, and open lawn at 10201 NE 4th Street. West Bellevue streets feed this park on foot from Main Street, which is why so many Old Bellevue side yards want a gate that opens toward the downtown walk, not only the driveway.",
  },
  {
    name: "Bellevue Arts Museum",
    url: "https://www.bellevuearts.org/",
    description:
      "The museum at 510 Bellevue Way NE sits a few blocks from the lakeshore streets. Weekend exhibits and the walk down Bellevue Way are part of the weekly rhythm for households that live between the towers and the water.",
  },
];

const WestBellevuePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "West Bellevue, Bellevue",
    pageTitle: "West Bellevue Bellevue Fence Installation",
    description: META_DESCRIPTION,
    faqItems: WEST_BELLEVUE_FAQS,
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
              href="/service-areas/bellevue"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bellevue
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving West Bellevue, Bellevue WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  West Bellevue Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Humidity-ready cedar privacy, view-keeping hogwire, and hybrid systems for lakeshore lots from Meydenbauer Bay through Old Bellevue and down the Enatai hillside toward I-90.
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
                  city="West Bellevue, Bellevue"
                  state="Washington"
                  radiusMiles={5}
                  zoom={12}
                  showBusinessInfo={true}
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
                Shoreline Fencing Between Downtown Towers and Lake Washington
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                West Bellevue is the strip of Bellevue that actually touches the lake — Meydenbauer Bay at the north, Old Bellevue and Main Street in the middle, then Enatai dropping toward I-90 and Enatai Beach Park. Bellevue Way and 100th Avenue SE are the inland spines; Lake Washington Boulevard and the numbered streets off 92nd Avenue SE are the water-facing ones. There is no single master HOA the way Somerset or Klahanie have one. A few small lakeshore associations and newer downtown-adjacent plats want a drawing; most mid-century Enatai streets do not. The design conversation starts with the lot: shoreline overlay, a downhill tilt toward the water, overnight humidity, and whether you are screening a high-rise or keeping a view corridor open.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built cedar, hogwire, and hybrid fences across west-side Bellevue, including runs along Lake Washington Boulevard, 100th Avenue SE, and the Enatai streets that feed 108th. We use Fence Genius to capture grade and tree locations before a post goes in the ground, so panels on a lakeshore tilt stay even and Old Bellevue lots get a solid screen without boxing in a view that is the reason people bought the house. The goal is a fence that belongs on a waterfront street — not a flat-lot panel forced down a ravine.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why West Bellevue Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        View-First Fence Layouts
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the street and neighbor sides, then hogwire or a lower hybrid stretch toward the bay so Lake Washington stays in the evening picture. We plan height by compass point, not one wall around the whole lot.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Lakeshore Humidity Hardware
                      </h3>
                      <p className="text-muted-foreground">
                        Pre-stained Western Red Cedar, stainless or hot-dipped fasteners, and optional steel posts at the wettest downhill corners. The lake is freshwater, but overnight fog still eats light hardware faster than inland Bellevue lots.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {WARRANTY_CONSTANTS.YEARS}-Year Workmanship Warranty
                      </h3>
                      <p className="text-muted-foreground">
                        Full coverage on materials and labor, including hardware chosen for West Bellevue&apos;s shoreline damp. We stand behind the install through Bellevue winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Shoreline and City Paperwork
                      </h3>
                      <p className="text-muted-foreground">
                        Lots inside Bellevue&apos;s shoreline jurisdiction need more than a six-foot height check. We flag Shoreline Master Program overlays and small association packets before the quote, not after the crew is staged on Lake Washington Boulevard.
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
                What West Bellevue Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We wanted privacy from Bellevue Way without losing the water. They put cedar on the street side and hogwire toward the bay. The yard still feels open at sunset.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Maya in West Bellevue</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our Enatai lot drops hard toward 108th. They mapped every step, hand-dug around the old cedars, and the panels line up instead of leaving a gap a dog could use.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Chris in West Bellevue</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Tight Old Bellevue side yard and a shoreline question we did not expect. They flagged the overlay, sent a simple drawing, and the city piece was done before the crew showed up.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Helen in West Bellevue</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="West Bellevue Bellevue fence" />

        {/* 6. Photo Gallery — nearby Bellevue installs until West Bellevue-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Bellevue"
          title="Recent Fence Work Near West Bellevue"
          description="These photos are from nearby Bellevue jobs, including Sherwood Forest and other central Bellevue installs. Same crew, same materials, and the same Fence Genius process we use on West Bellevue lots along Lake Washington Boulevard and 100th Avenue SE."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Bellevue" neighborhood="West Bellevue" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured West Bellevue Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical West Bellevue cedar-and-hogwire run sits on a downhill lot west of 100th Avenue SE, close enough to Lake Washington Boulevard that the water is part of the evening view. The job is usually two fences in one: a full-height cedar screen on the street and neighbor sides, then a lighter hogwire stretch toward the bay so the skyline stays in frame. Fence Genius maps the drop toward the shoreline so panels step instead of leaving a gap a small dog can use, and we hand-dig around the cedars and maples that line so many Enatai and Meydenbauer side yards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable West Bellevue yards run 80–180 linear feet and wrap in one to three working days after any city or shoreline paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the view corridor and the tree drip lines are both accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                West Bellevue-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    West Bellevue Shoreline Overlays and Stepped Grade
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Parcels that sit inside Bellevue&apos;s shoreline jurisdiction — common on Lake Washington Boulevard, the numbered streets off 92nd, and the lowest Enatai blocks — can trigger extra review even for a six-foot fence. We check that overlay in the quote. On the same lots, grade often falls ten or more feet toward the water. Fence Genius maps the tilt so panels step cleanly instead of racking into a gap at the downhill end.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    West Bellevue View Corridors vs. Tower Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Old Bellevue lots near Main Street and Bellevue Way sit in the shadow of downtown towers; those yards usually want mass and height on the inland sides. Two blocks west, the same homeowner may refuse to put a solid six-foot wall across a lake view. We split styles by face — cedar where you need a screen, hogwire or a shorter hybrid where the water is the point of the property.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    West Bellevue Moisture Along the Lakeshore
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cool air and wet soil hang in the lower corners overnight, even in midsummer. Pre-stained Western Red Cedar, stainless or hot-dipped fasteners, and optional steel posts at the wettest downhill corners last longer than raw cedar and light galvanized nails. If your parcel sits in a mapped stream, wetland, or shoreline buffer, we flag that in the quote instead of after the crew is on site.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    West Bellevue Trees, Tight Lots, and Street Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mature cedars and maples line 100th Avenue SE, SE 16th, and the streets that feed Chism and Enatai Beach. Standard auger work will hit roots. We plan post locations with Fence Genius, then hand-dig at the critical points. Old Bellevue side yards are narrow; we stage compact equipment so we are not blocking a shared drive or a Main Street loading zone during weekday delivery hours.
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
                Fence Installation Cost in West Bellevue
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A West Bellevue fence is an investment in a lakeshore lot and, on the inland side, a quieter yard next to downtown. Slope, roots, gates, and shoreline paperwork move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $45–$68 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $39–$58 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $55–$76 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Hand-digging near mature trees and stepped runs toward Lake Washington may add 10–15%. Custom gates are itemized separately. Get an exact quote for your West Bellevue property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your West Bellevue property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Popular Fence Styles in West Bellevue
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on Old Bellevue and Bellevue Way lots that need a screen from towers and street traffic. Full height, tight bottoms, pre-stained cedar that holds up in shoreline humidity, and a look that fits both mid-century Enatai ranches and newer two-story builds.
                  </p>
                  <Link
                    href="/fence-styles/picture-frame-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Cedar frame with black mesh for water-facing edges that still want to see the bay. Dogs stay in, the lighter footprint is easier around shoreline roots than a solid wall, and it reads as a planted edge instead of a barrier across the view.
                  </p>
                  <Link
                    href="/fence-styles/black-hogwire-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when lakeshore damp makes staining a chore. Strong enough for family yards without looking like a commercial lot on Main Street.
                  </p>
                  <Link
                    href="/fence-styles/cedar-steel-hybrid-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View styles →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our West Bellevue Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. West Bellevue Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note lake exposure and view corridors, map trees, and check whether the parcel sits in a Bellevue shoreline or critical-area overlay. Fence Genius captures grade so panels are built to the actual tilt, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. West Bellevue Design & City / Shoreline Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your lakeshore association or downtown-adjacent plat has a small design committee, we prepare a simple drawing and material list. If your street has no association — which is most of older Enatai — we still document Bellevue height, setback, and shoreline rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so West Bellevue install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. West Bellevue Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off Bellevue Way, 100th Avenue SE, Lake Washington Boulevard, and the Enatai grid. Hand-digging near mature roots, stepped posts on the downhill drop, and full cleanup at the end of each day. Most jobs wrap in one to three days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    Final walkthrough covering every panel, post, and gate. Full {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty starts when the job is complete.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — visible content matches FAQPage JSON-LD */}
        <NeighborhoodFaqSection
          title="West Bellevue Fence Installation FAQs"
          items={WEST_BELLEVUE_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Bellevue"
        neighborhoodName="West Bellevue"
        attractions={WEST_BELLEVUE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              West Bellevue families are served by the{" "}
              <a
                href="https://www.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue School District
              </a>
              , with{" "}
              <a
                href="https://enatai.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Enatai Elementary
              </a>{" "}
              on SE 25th Street as the neighborhood campus for the south end of the lakeshore. Older students move on to{" "}
              <a
                href="https://chinook.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Chinook Middle School
              </a>{" "}
              and{" "}
              <a
                href="https://bellevuehigh.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue High School
              </a>
              , both a short hop inland from the water. Weekday life is built around those campuses, the walk to Downtown Park, and{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/downtown-bellevue-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Downtown Bellevue Station
              </a>{" "}
              for East Link trips into Seattle or out toward Redmond.
            </p>
            <p>
              Groceries and after-work food cluster on Main Street in Old Bellevue and a few blocks east in the downtown core. Dinner reservations often land at{" "}
              <a
                href="https://cactusrestaurants.com/location/bellevue/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cactus Bellevue
              </a>{" "}
              on Main Street or{" "}
              <a
                href="https://dintaifungusa.com/location/bellevue/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Din Tai Fung
              </a>{" "}
              at Bellevue Square — both a walk or a few minutes from the lakeshore streets, not a drive to Seattle. Weekends split between Meydenbauer Bay, Chism, Enatai Beach, and the rest of the{" "}
              <a
                href="https://bellevuewa.gov/city-government/departments/parks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue parks system
              </a>
              . Bellevue Way, I-405, and I-90 put downtown, Factoria, and the I-90 bridge within a few minutes.
            </p>
          </>
        }
      />

      <main>
        {/* 14. Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Bellevue Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Bellevue. From West Bellevue we also work in Downtown Bellevue just inland of Meydenbauer Bay, Wilburton across I-405, Factoria and Eastgate along I-90, and Newport Hills on the wooded ridge south of the freeway.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/wilburton">Wilburton</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/factoria">Factoria</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/eastgate">Eastgate</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newport-hills">Newport Hills</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
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
                Ready to Enhance Your West Bellevue Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in West Bellevue. We&apos;ll walk the lakeshore edge, talk through views vs. privacy, and quote a fence that fits your Bellevue lot.
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

export default WestBellevuePage;
