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
  PawPrint,
  FileCheck,
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

const CANONICAL = "https://myfence.com/service-areas/sammamish/trossachs";
const META_TITLE =
  "Trossachs Sammamish Fence Installation | Wooded Lots & HOA | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Trossachs, Sammamish, WA. Cedar, hogwire & hybrid fencing for forested lots, wildlife edges, and Trossachs HOA review. Free quotes. (253) 455-1885.";

const TROSSACHS_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Trossachs, Sammamish?",
    answer:
      "The City of Sammamish generally does not require a building permit for residential fences six feet or shorter in side and rear yards. Front-yard fencing is typically limited to four feet, and corner lots have sight-triangle rules. Fences over six feet need a Type I construction permit and a recorded neighbor agreement. Many Trossachs lots also sit next to forested tracts or park buffers along Soaring Eagle, which can add critical-area review even when height is under six feet. MyFence.com checks city rules and Trossachs HOA expectations for your address before we quote.",
  },
  {
    question:
      "What fence styles work best for Trossachs' wooded lots and wildlife edges?",
    answer:
      "Cedar privacy fencing is the usual choice on interior Trossachs cul-de-sacs where families want a solid backyard. On lots that back onto Soaring Eagle Regional Park or a greenbelt, hogwire in a cedar frame is popular because it contains dogs without boxing in the forest view, and deer are less likely to tangle in a well-tensioned mesh than in a decorative rail. Hybrid aluminum-and-cedar systems fit homeowners who want the cedar look with less staining on long runs. Fence Genius maps roots, grade, and post locations so panels follow the lot instead of fighting the trees.",
  },
  {
    question: "How much does fence installation cost in Trossachs, Sammamish?",
    answer:
      "Trossachs fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $38–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Longer perimeter runs on larger lots, hand-digging around mature firs, and extra gates on corner properties can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Trossachs?",
    answer:
      "Most Trossachs residential projects finish in one to three working days after city and Trossachs HOA paperwork is complete. Pre-fabricated panels cut on-site time. Long rear lots, stepped runs toward the plateau edge, and tight access on courts off Trossachs Boulevard SE are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Trossachs?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when the city does not require their signature. If you want a fence taller than six feet, Sammamish does require a recorded agreement with the adjoining owner. Trossachs HOA review is a separate step from neighbor consent. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const TROSSACHS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Soaring Eagle Regional Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/soaring-eagle",
    description:
      "A 790-acre King County forest that starts at the south end of Trossachs Boulevard. Neighborhood trailheads put hiking, mountain biking, and horse traffic on the same dirt as backyard wildlife, so fence lines here have to respect both dogs and deer.",
  },
  {
    name: "Cascade Ridge Elementary",
    url: "https://cascaderidge.isd411.org/",
    description:
      "The Issaquah School District campus at 2020 Trossachs Boulevard SE — a walking school for most neighborhood kids. Morning drop-off and afternoon pickup set the daily rhythm on the boulevard, and many yards need a gate that actually latches after practice.",
  },
  {
    name: "Beaver Lake Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/beaver-lake-park/",
    description:
      "The city park just northwest of Trossachs, with a swimming beach, lodge, sports fields, and an off-leash dog area. Weekend traffic from 244th Avenue SE and SE 24th Street is the other reason a solid side-yard fence is popular on the north edge of the neighborhood.",
  },
  {
    name: "Sammamish Commons",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/sammamish-commons/",
    description:
      "The civic campus a short drive west on 228th Avenue SE — City Hall, the library, playfields, and the seasonal farmers market. Trossachs households treat it as the weekday errand stop between school and home.",
  },
  {
    name: "Duthie Hill Mountain Bike Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/duthie-hill",
    description:
      "The jump-line park at the south end of SE Duthie Hill Road, a few minutes from Trossachs. After-school bikes and weekend trailers are a regular sight on the corridor, and lots along that approach often want screening from road noise without a fortress look.",
  },
];

const TrossachsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Trossachs, Sammamish",
    pageTitle: "Trossachs Sammamish Fence Installation",
    description: META_DESCRIPTION,
    faqItems: TROSSACHS_FAQS,
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
              href="/service-areas/sammamish"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sammamish
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Trossachs, Sammamish WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Trossachs Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for Trossachs&apos; wooded lots — cedar privacy for family yards, hogwire along the Soaring Eagle edge, and HOA-ready designs that still look like they belong on Trossachs Boulevard SE.
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
                  city="Trossachs, Sammamish"
                  state="Washington"
                  radiusMiles={5}
                  zoom={13}
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
                Building Along the Forest Edge, Not a Tight Grid
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Trossachs sits on the east side of the Sammamish Plateau, where Trossachs Boulevard SE loops through larger lots and cul-de-sacs such as 266th Court SE, 263rd Lane SE, and SE 22nd Street. Many rear yards back onto mature firs or the Soaring Eagle trail system instead of a neighbor&apos;s patio. Unlike Klahanie to the west, the typical Trossachs parcel is wider, quieter, and more likely to see deer on the lawn. The Trossachs Homeowners Association still reviews exterior work, so a fence has to clear architectural standards and the trees — not just the tape measure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences throughout south Sammamish, including the Trossachs loop and the Klahanie edge a few blocks west. We use Fence Genius to capture grade and root zones before a post goes in the ground, so long rear runs stay even and the bottom rail does not float over a crawl gap a coyote or a small dog can use. The goal is a fence that reads as part of the street, not a stock panel dropped into a woodland lot.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Trossachs Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <FileCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Trossachs HOA Packet Ready
                      </h3>
                      <p className="text-muted-foreground">
                        We prepare height, material, and color notes the Trossachs architectural review expects, then keep Sammamish&apos;s six-foot side-and-rear rule in the same drawing so you are not juggling two sets of comments.
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
                        Full coverage on materials and labor, including hardware chosen for damp forest-edge soil. We stand behind the install through Sammamish winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <PawPrint className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Wildlife-Aware Backyard Edges
                      </h3>
                      <p className="text-muted-foreground">
                        Lots that face Soaring Eagle need a fence that keeps pets in without inviting deer through a gap. We plan mesh, height, and bottom clearance for that park-edge condition, not a downtown lot.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Root-Safe Post Placement
                      </h3>
                      <p className="text-muted-foreground">
                        Hand-digging around the firs that line Trossachs Boulevard and the courts off it. Fence Genius maps the run so we shift a post instead of cutting a root that is holding the slope.
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
                What Trossachs Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot backs onto the park trails and I did not want a solid wall. They ran hogwire in a cedar frame, kept the dog in, and the deer stopped cutting through the side yard. Crew was careful around the big firs.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Megan in Trossachs</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Long backyard off Trossachs Boulevard. The cedar privacy fence looks like it belongs with the houses on our court, the gates close cleanly after school, and they handled the HOA drawing so we were not guessing at colors.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Raj in Trossachs</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Slope toward the back of the lot and a bunch of roots. They stepped the panels instead of leaving a gap at the bottom. Finished in a couple of days and the street looked tidy each evening.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Lauren in Trossachs</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Trossachs Sammamish fence" />

        {/* 6. Photo Gallery — nearby Sammamish installs until Trossachs-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Sammamish"
          title="Recent Fence Work Near Trossachs"
          description="These photos are from nearby Sammamish jobs, including Klahanie just west of Trossachs. Same crew, same materials, and the same Fence Genius process we use on Trossachs lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Sammamish" neighborhood="Trossachs" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Trossachs-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Trossachs Terrain and Long Rear Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The boulevard sits on the plateau, but plenty of rear yards fall toward the Patterson Creek side of Soaring Eagle. A fence built as one long level line either buries the bottom rail or leaves a gap. We measure grade with Fence Genius, then step or rack panels so the top stays even and the bottom tracks the lawn. On longer Trossachs perimeters we shorten bays rather than forcing a six-foot panel across a drop.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Trossachs Trees, Roots, and Soil
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mature Douglas firs and cedars line Trossachs Boulevard SE and the courts that branch from it. Post holes fight roots and stay wetter under the canopy than on a bare Klahanie lot. We hand-dig near trunks, shift post locations when a root is doing structural work, and spec fasteners and post systems that hold up in that damp, organic soil instead of rusting out in a few winters.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Trossachs Wildlife and Pet Containment
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deer, coyotes, and the occasional bear move between Soaring Eagle, Beaver Lake Preserve, and backyard greenbelts. A decorative rail with a six-inch gap at the lawn is an invitation. Hogwire with a tight bottom, or cedar privacy with no crawl space, is the practical mix. We walk the lot with you and mark where a solid panel helps and where an open run keeps the forest in view without losing the dog.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Trossachs HOA Review and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Trossachs Homeowners Association reviews fence style, height, and finish so the street stays consistent. That is separate from Sammamish&apos;s six-foot side-and-rear limit and four-foot front-yard cap. We put both in one packet — materials, color, and a simple site plan — and we flag any shoreline or critical-area overlay before digging rather than after a hole is already in the ground.
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
                Fence Installation Cost in Trossachs
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Trossachs fence is an investment in a larger, often wooded lot. Linear footage, slope, and tree work move the number. These are typical ranges; your on-site measurement is the real quote.
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
                      $38–$58 per linear foot
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
                  Stepped runs toward the park edge and hand-digging near mature trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Trossachs property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Trossachs property</Link>
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
                Popular Fence Styles in Trossachs
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior Trossachs courts near Cascade Ridge. Full screening for after-school play, pre-stained cedar that holds up to Sammamish winters, and a look that fits the two-story homes along the boulevard.
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
                    Cedar frame with black mesh for lots that face Soaring Eagle. Dogs stay in, the forest stays in view, and the lighter footprint is easier around roots than a solid privacy wall.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a Trossachs perimeter is long enough that staining every few years is a real chore.
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
                Our Trossachs Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Trossachs Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward the park, map trees, and check whether the parcel sits in a Sammamish critical-area overlay. Fence Genius captures grade so panels are built to the actual drop, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Trossachs Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We prepare a drawing and material list for Trossachs HOA architectural review, and we still document Sammamish height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Trossachs install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Trossachs Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential courts off Trossachs Boulevard SE. Hand-digging near mature roots, stepped posts on downhill rear lots, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Trossachs Fence Installation FAQs"
          items={TROSSACHS_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Sammamish"
        neighborhoodName="Trossachs"
        attractions={TROSSACHS_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Trossachs families are served by the{" "}
              <a
                href="https://www.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah School District
              </a>
              . Most kids walk to{" "}
              <a
                href="https://cascaderidge.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cascade Ridge Elementary
              </a>{" "}
              on Trossachs Boulevard SE, then continue to{" "}
              <a
                href="https://beaverlake.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Beaver Lake Middle School
              </a>{" "}
              on SE 32nd Street and{" "}
              <a
                href="https://skyline.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Skyline High School
              </a>{" "}
              on 228th Avenue SE. Weekday life is built around that school triangle and the short hop west to the{" "}
              <a
                href="https://kcls.org/locations/sammamish/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish Library
              </a>{" "}
              at the Commons.
            </p>
            <p>
              Weekends split between trail miles in{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/soaring-eagle"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Soaring Eagle Regional Park
              </a>
              , swimming and the dog park at{" "}
              <a
                href="https://www.sammamish.us/our-community/recreation/parks-trails/beaver-lake-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Beaver Lake Park
              </a>
              , and bike days at{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/duthie-hill"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Duthie Hill Mountain Bike Park
              </a>
              .{" "}
              <a
                href="https://www.sammamish.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The City of Sammamish
              </a>{" "}
              handles permits and city parks; I-90 is a short run south via Duthie Hill Road when you need Issaquah Highlands or Seattle.
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
                Also Serving Nearby Sammamish Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                From Trossachs we also install in Klahanie just to the west, Pine Lake, Sahalee, Beaver Lake, and East Sammamish. Issaquah Highlands sits a short drive south on Duthie Hill Road.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/klahanie">Klahanie</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/pine-lake">Pine Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/sahalee/hoa-approved-fencing">
                    Sahalee
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah-highlands">Issaquah Highlands</Link>
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
                Ready to Enhance Your Trossachs Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Trossachs. We&apos;ll walk the trees, talk through HOA review, and quote a fence that fits your Sammamish lot.
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

export default TrossachsPage;
