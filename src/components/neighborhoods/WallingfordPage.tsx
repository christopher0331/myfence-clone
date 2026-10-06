"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Award,
  ArrowLeft,
  MapPin,
  Phone,
  Home,
  Waves,
  Volume2,
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

const CANONICAL = "https://myfence.com/service-areas/seattle/wallingford";
const META_TITLE =
  "Wallingford Fence Installation | Seattle | Bungalow Lots & Northlake Grade | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Wallingford, Seattle, WA. Cedar, hogwire & hybrid fencing for N 45th bungalows, Gas Works edges, and the drop toward Northlake. Free quotes. (253) 455-1885.";

const WALLINGFORD_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Wallingford, Seattle?",
    answer:
      "Seattle's Department of Construction and Inspections says you do not need a permit for a fence 8 feet or less that has no masonry or concrete elements over 6 feet. You do need a construction permit if the fence is in a flood-prone area, and you need one if the fence is taller than 8 feet. Most of those taller jobs are a subject-to-field-inspection permit with a site plan and section drawings. Zoning is separate from the permit: in neighborhood residential and multifamily zones the fence is limited to 6 feet, plus up to 2 more feet of mostly open architectural features such as an arbor or trellis, and it is limited to 4 feet in a front or street-side setback. On a slope the fence may reach 8 feet if the average height between posts stays at 6 feet. A fence on a retaining wall that raises the grade is limited to 9 feet 6 inches combined; if the wall lowers the grade, the normal fence limit applies. Environmentally critical areas follow different rules. Wallingford is not one of Seattle's seven landmark preservation districts, so a typical bungalow on Wallingford Avenue N or Meridian Avenue N does not need a district Certificate of Approval. The Good Shepherd Center at 4649 Sunnyside Avenue N is itself a designated Seattle landmark; that status does not automatically cover the houses on the next block. Lots stepping down toward N Northlake Way and Gas Works Park are the ones we check for floodplain and steep-slope overlays before we quote. Call SDCI at (206) 684-8600 if the parcel is unclear.",
  },
  {
    question:
      "What fence styles work best for Wallingford's bungalow lots and Northlake grade?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off Wallingford Avenue N, Interlake Avenue N, and the alleys between N 42nd and N 47th, where neighboring houses sit close and a second-story window looks straight into the yard. South-facing lots above Gas Works Park and the Burke-Gilman Trail often want a solid neighbor face, then a lighter hogwire stretch toward Lake Union so the water and the old gas-plant towers stay in the room. Houses on the east edge near I-5 usually want the solid run on the freeway side, where traffic noise is the point of the fence. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain a damp Northlake corner after every wet winter. Fence Genius maps short bays and stepped panels so the drop from the N 45th Street plateau toward N Northlake Way follows the grade instead of leaving a gap at the downhill post.",
  },
  {
    question: "How much does fence installation cost in Wallingford, Seattle?",
    answer:
      "Wallingford fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Stepped panels on the drop toward N Northlake Way, extra gates on townhome courts near N 45th Street, and hand-carrying materials along a narrow alley off Meridian Avenue N can move a quote. Removal of an old fence is priced separately. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Wallingford?",
    answer:
      "Most Wallingford bungalow and townhome projects finish in one to three working days after any SDCI paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from stepping a run down toward Gas Works Park, parking around school-day traffic at Lincoln High School on Interlake Avenue N or Hamilton International Middle School on N 41st Street, or matching an existing neighbor height on a short side yard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Wallingford?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Wallingford mixes early-1900s pins on the bungalow grid with later townhome courts near N 45th Street and the I-5 edge, so confirming the line before digging saves a redo on a short side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const WALLINGFORD_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Gas Works Park",
    url: "https://www.seattle.gov/parks/parks/gas-works-park",
    description:
      "The park at 2101 N Northlake Way, on the north shore of Lake Union at Wallingford's south edge. The Burke-Gilman Trail runs the parking lot; we time material drops so a trailer is not sitting in that curb lane on a kite-hill weekend.",
  },
  {
    name: "Wallingford Playfield",
    url: "https://www.seattle.gov/parks/parks/wallingford-playfield",
    description:
      "The playfield at 4219 Wallingford Avenue N, with tennis courts, a wading pool, and a 2019 play area. School-hour pickup and weekend games set when we can unload on Wallingford Avenue N and N 42nd Street without blocking the park edge.",
  },
  {
    name: "Meridian Playground",
    url: "https://www.seattle.gov/parks/parks/meridian-playground",
    description:
      "The park at 4920 Meridian Avenue N, next to the Good Shepherd Center campus on Sunnyside Avenue N. Lots on Meridian, Sunnyside, and N 50th take playground noise and a steady stream of visitors walking between the lawn and N 45th Street.",
  },
  {
    name: "Wallingford Branch Library",
    url: "https://www.spl.org/hours-and-locations/wallingford-branch",
    description:
      "The Seattle Public Library branch at 1501 N 45th Street, on the commercial spine. Storefront parking and hold-pickup traffic on N 45th and Woodlawn Avenue N are part of how we stage a townhome job on those blocks.",
  },
];

const WallingfordPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Wallingford, Seattle",
    pageTitle: "Wallingford Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: WALLINGFORD_FAQS,
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
              href="/service-areas/seattle"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Seattle
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Wallingford, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Wallingford Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on tight bungalow lots, hogwire that keeps Lake Union in view from the Northlake slope, and hybrid systems for the N 45th Street grid and the I-5 edge.
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
                  city="Wallingford, Seattle"
                  state="Washington"
                  radiusMiles={3}
                  zoom={14}
                  showBusinessInfo={true}
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
                <Award className="h-5 w-5 text-primary" />
                {WARRANTY_CONSTANTS.YEARS}-Year Warranty
              </span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing Between N 45th Street and Lake Union
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Wallingford sits east of Stone Way N and Fremont, west of I-5 and the University District, south of the Green Lake ridge around N 50th Street, and north of Lake Union. N 45th Street is the commercial spine: the library at 1501 N 45th, storefronts, and later townhome courts mixed into the older grid. Residential streets — Wallingford Avenue N, Meridian Avenue N, Interlake Avenue N, Sunnyside Avenue N, Densmore Avenue N — fill out with early-1900s craftsman bungalows on short lots and narrow alleys. South of N 40th the grade drops toward N Northlake Way and{" "}
                <a
                  href="https://www.seattle.gov/parks/parks/gas-works-park"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  Gas Works Park
                </a>
                . East of about 5th Avenue NE, I-5 is close enough that a solid fence face is often about traffic noise, not a view. Yards are short, street trees are mature, and a south lot line may sit a few steps from the Burke-Gilman Trail.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across Seattle, including bungalow and Northlake-slope lots in Wallingford. Fence Genius records the drop from the N 45th plateau, the true length of a side yard off Interlake or Meridian, and the neighbor fence we have to meet before a crew arrives. The result is a fence sized for a Wallingford lot, with panels that fit an alley gate and a grade that is already stepping before the first post is set.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Wallingford Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Grade Toward Northlake, Not a Flat Grid
                      </h3>
                      <p className="text-muted-foreground">
                        The N 45th Street plateau feels level. A few blocks south, the same lots step toward Gas Works Park. Fence Genius maps each bay, and we design to Seattle&apos;s average-height rule on a slope instead of guessing from the sidewalk on Wallingford Avenue N.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Bungalow Side Yards Measured in Feet
                      </h3>
                      <p className="text-muted-foreground">
                        Lots off Meridian Avenue N, Interlake Avenue N, and Densmore Avenue N leave little room between houses. We measure the alley, the meter, and the neighbor fence first, then build panels that still leave a path to the gate.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        I-5 Noise on the East Edge
                      </h3>
                      <p className="text-muted-foreground">
                        Eastern Wallingford sits close to the freeway. A solid cedar run on that face does more work than an open panel. The west or south side of the same lot may still want hogwire if it opens toward a garden rather than I-5.
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
                        Full coverage on materials and labor, including hardware chosen for damp Northlake corners and the wind that comes off Lake Union. We stand behind the install through Seattle winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Wallingford Seattle fence" />

        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Wallingford"
          description="These photos are from nearby Seattle jobs. Same crew, same materials, and the same Fence Genius process we use on Wallingford lots along N 45th Street, Wallingford Avenue N, and the Northlake slope."
        />

        <FeaturedProject city="Seattle" neighborhood="Wallingford" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Wallingford Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Wallingford cedar-and-hogwire run sits on a bungalow lot off Meridian Avenue N or N 42nd Street, close enough to Lake Union that a solid south wall would erase the water and the Gas Works towers. The job is usually two fences in one: full-height cedar on the neighbor and alley sides, then a lighter hogwire stretch toward N Northlake Way so the living room still reads the lake. On the east edge near I-5, the solid face goes toward the freeway instead, because traffic noise is the problem and the view is not. Fence Genius maps the rise so panels step with the grade, and we set footings so winter runoff between two close roofs does not sit against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Wallingford yards run 50–130 linear feet and wrap in one to three working days after any city paperwork. We use cedar privacy, hogwire, or hybrid aluminum/cedar, and we walk the line with you before posts go in so the lake stretch, the wet corner, and the steepest bay toward Northlake are all accounted for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Wallingford-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    The Drop from N 45th Street to N Northlake Way
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Blocks around N 45th Street, N 47th Street, and Lincoln High School at 4400 Interlake Avenue N are relatively flat. A few streets south, the same lots are stepping toward Gas Works Park. A crew that treats Wallingford like a level Green Lake alley will leave a gap or bury a rail. Fence Genius maps the grade so each bay follows the yard. On a sloping site Seattle allows the high point to read taller when the average height between posts stays within the six-foot zoning limit. We design to that average, then check it against the four-foot cap if the run sits in a front or street-side setback.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Wallingford Moisture, the Trail, and Park-Edge Lots
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots backing Gas Works Park and the Burke-Gilman Trail stay damp longer than a yard at N 47th Street. Hardware that is fine on a dry upper block can streak here. We keep soil off the first board and talk through whether the Northlake corner should be hybrid. Seattle Parks notes that Gas Works draws kite flyers, picnic groups, and trail riders; Wallingford Playfield at 4219 Wallingford Avenue N draws after-school traffic. We schedule deliveries outside those peaks so a trailer is not blocking N Northlake Way, Wallingford Avenue N, or a trail crossing.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    I-5 Screening Versus Lake Union Views
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Eastern Wallingford hears I-5 all day. Houses near 5th Avenue NE and the freeway ramps usually want a solid cedar run on that face. The opposite side of the same lot may still want hogwire if it opens toward a neighbor garden or a slice of Lake Union rather than the roadway. We do not wrap every side at the same height when only one side is taking the noise. On the south slope, the open stretch is more often toward Gas Works Park, not toward the freeway.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Seattle Fence Rules Without a Wallingford Landmark District
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seattle&apos;s historic-preservation FAQ lists seven preservation districts. Wallingford is not one of them, so a street-visible fence on an ordinary bungalow does not go through a district board the way a Ballard Avenue storefront does. SDCI still limits height: 6 feet in neighborhood residential and multifamily zones, 4 feet in a front or street-side setback, with the slope average and the retaining-wall combination rules on the same fence page. A flood-prone Northlake lot needs a construction permit even when the fence is under 8 feet. Steep-slope overlays, more common on the drop toward the lake, follow the environmentally critical areas code. The Good Shepherd Center at 4649 Sunnyside Avenue N is a designated Seattle landmark; work on that parcel is a different question from a fence on the house across Meridian Playground. We check the parcel before we order materials.
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
                Fence Installation Cost in Wallingford
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Wallingford fence is often a short, mixed-style run: a quieter neighbor face plus an open stretch toward the lake, or a solid face toward I-5. Access, gates, and stepped panels move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $50–$74 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $45–$62 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $58–$80 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Tear-out of an existing fence, extra gates on a townhome court near N 45th Street, and hand-carrying materials down toward N Northlake Way are itemized separately. Get an exact quote for your Wallingford property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Wallingford property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Popular Fence Styles in Wallingford
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides, alleys, and the freeway-facing run near I-5. Pre-stained cedar holds up in a wet Northlake yard and fits both older bungalows and later townhomes off N 45th Street.
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
                    Cedar frame with black mesh for lots that still want Lake Union or a garden in the room. Dogs stay in, and the lighter face takes less wind off the water than a solid wall on every side.
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
                    Aluminum panels in a cedar frame on steel posts for the damp corner along N Northlake Way or a north-facing side yard that has already eaten one wood fence. Quiet enough for Wallingford Avenue N.
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

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Wallingford Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Wallingford Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the side yards, note whether the open stretch faces Lake Union or should face away from I-5, and map utilities. Fence Genius captures length and grade so panels are built to the actual hill, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. SDCI Height and Flood Check</h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle&apos;s 6-foot zoning limit, the 4-foot front and street-side setback, the slope average, and whether a Northlake parcel needs a permit because it is flood-prone. Steep-slope overlays on the drop toward Gas Works Park get checked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Wallingford install days are mostly setting posts and hanging finished sections that already match the stepped side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Wallingford Installation</h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to alleys and residential streets off Wallingford Avenue N, Meridian Avenue N, N 45th Street, and N Northlake Way. Drainage-aware hardware on the wet lake corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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

        <NeighborhoodFaqSection
          title="Wallingford Fence Installation FAQs"
          items={WALLINGFORD_FAQS}
        />
      </main>

      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="Wallingford"
        attractions={WALLINGFORD_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Wallingford households sit in{" "}
              <a
                href="https://www.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle Public Schools
              </a>
              .{" "}
              <a
                href="https://www.seattleschools.org/schools/hamiltonms/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Hamilton International Middle School
              </a>{" "}
              is at 1610 N 41st Street, in the neighborhood.{" "}
              <a
                href="https://www.seattleschools.org/schools/lincolnhs/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lincoln High School
              </a>{" "}
              is at 4400 Interlake Avenue N. School-day parking on Interlake and N 41st is part of how we time a nearby install.
            </p>
            <p>
              Weekday life also runs along N 45th Street. The{" "}
              <a
                href="https://www.spl.org/hours-and-locations/wallingford-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Wallingford Branch library
              </a>{" "}
              sits at 1501 N 45th Street. The{" "}
              <a
                href="https://historicseattle.org/project/good-shepherd/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Good Shepherd Center
              </a>{" "}
              at 4649 Sunnyside Avenue N is a Historic Seattle landmark next to Meridian Playground. For fence height and permit questions, start with{" "}
              <a
                href="https://www.seattle.gov/construction-and-inspections/permits/common-projects/fences"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle SDCI fence guidance
              </a>
              . Seattle&apos;s{" "}
              <a
                href="https://www.seattle.gov/neighborhoods/historic-preservation/frequently-asked-questions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                historic-preservation FAQ
              </a>{" "}
              names the seven preservation districts; Wallingford is not on that list. The neighborhood puts Fremont, Green Lake, and the University District within a short ride, which is why so many Wallingford lots want a fence that holds a dog on a small yard and still leaves a window to Lake Union.
            </p>
          </>
        }
      />

      <main>
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Seattle Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Seattle. From Wallingford we also work in Fremont across Stone Way N, Ravenna east of I-5, and Queen Anne and Ballard across the Ship Canal.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/fremont">Fremont</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/ravenna">Ravenna</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/queen-anne">Queen Anne</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/ballard">Ballard</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Wallingford Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Wallingford. We&apos;ll walk the lot, talk through a lake-facing stretch versus a solid face toward I-5, and quote a fence that fits your property.
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

export default WallingfordPage;
