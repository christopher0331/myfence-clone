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
  Droplets,
  Trees,
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

const CANONICAL = "https://myfence.com/service-areas/covington/jenkins-creek";
const META_TITLE =
  "Jenkins Creek Covington Fence Installation | Creek-Side Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Jenkins Creek, Covington, WA. Cedar, hogwire & hybrid fencing for creek-adjacent lots near Jenkins Creek Park. Free quotes. (253) 455-1885.";

const JENKINS_CREEK_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Jenkins Creek, Covington?",
    answer:
      "Jenkins Creek sits inside City of Covington limits, so fence height, setbacks, and corner sight lines are governed by Covington Municipal Code rather than unincorporated King County rules. Typical six-foot side- and rear-yard fences are common here, but front-yard height, easements along Jenkins Creek, and sight triangles on corner lots off 180th Avenue SE, SE 267th Street, and Wax Road still matter. Some plats also carry private CC&Rs. MyFence.com reviews the parcel and recommends confirming current requirements with City of Covington Permit Services before installation.",
  },
  {
    question:
      "What fence styles work best for Jenkins Creek's creek-edge yards and clay soil?",
    answer:
      "Cedar privacy is the usual choice on neighbor sides and school-route lots near Jenkins Creek Elementary, where families want a closed backyard for kids and dogs. Hogwire with a cedar frame fits trail-facing runs along Jenkins Creek Park and the paved park path toward 186th Avenue SE, so Spring Pond and the creek corridor stay in view. Hybrid aluminum-and-cedar on steel posts is the practical pick for shaded, wet corners that collect winter runoff. Fence Genius maps low spots, roots, and gate swings before posts go in.",
  },
  {
    question: "How much does fence installation cost in Jenkins Creek?",
    answer:
      "Jenkins Creek fence installation typically runs $40–$58 per linear foot for six-foot cedar privacy, $35–$50 for hogwire with a cedar frame, and $50–$68 for hybrid aluminum/cedar. Creek-edge moisture, clay soil, extra gates on family lots, and hand-digging near the park trail can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Jenkins Creek?",
    answer:
      "Most Jenkins Creek residential projects finish in one to three working days after any city or plat paperwork is complete. Extra time usually comes from wet clay along the creek, staging around school pickup on 186th Avenue SE, or matching an existing neighbor height on a cul-de-sac off SE 260th Place or SE 261st Court. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Jenkins Creek?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Covington does not require a signature. Lots around Jenkins Creek Park, Timberlane Drive, and the 180th Avenue SE grid often share tight side yards and a common trail edge, so confirming the line before digging saves a redo. MyFence.com can help share a simple site plan covering height, style, and who pays for which stretch.",
  },
];

const JENKINS_CREEK_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Jenkins Creek Park",
    url: "https://www.covingtonwa.gov/city_departments/parks/jenkinscreekpark.php",
    description:
      "A 22-acre natural park at 18050 SE 267th Street with Jenkins Creek, Spring Pond, woodlands, and a paved east-west path that reaches Jenkins Creek Elementary. Lots that back this green usually want a fence that holds pets without walling off the boardwalk.",
  },
  {
    name: "Jenkins Creek Trail",
    url: "https://www.covingtonwa.gov/city_departments/parks/jenkinscreektrail.php",
    description:
      "A creek-side greenway near SR 18 and 180th Avenue SE, with a primary entrance off 261st. Isolated paved stretches already reach the cul-de-sacs at SE 260th Place and SE 261st Court — we keep those trail-facing runs open when the path is the reason you bought the lot.",
  },
  {
    name: "Jenkins Creek Elementary",
    url: "https://www.kent.k12.wa.us/o/jces/",
    description:
      "The Kent School District campus at 26915 186th Avenue SE, connected to the park by the paved trail. After-school traffic on 186th and Timberlane Drive is part of how we time material drops so a trailer is not sitting in the pickup queue.",
  },
  {
    name: "Founders Park",
    url: "https://www.covingtonwa.gov/parks/socopark.php",
    description:
      "A seven-acre lawn and walking park at 17081 SE Wax Road, a short hop from the Wax Road park entrance. Picnic tables and open grass make it a weekday stop for families whose yards already face Jenkins Creek Park.",
  },
  {
    name: "Covington Library",
    url: "https://kcls.org/locations/covington/",
    description:
      "The King County Library System branch at 27100 164th Avenue SE, at the Highway 18 and Kent-Kangley junction. Homework traffic and weekend visits sit west of the creek corridor — fence jobs on 180th still get staged so that curb is not the problem.",
  },
];

const JenkinsCreekPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Jenkins Creek, Covington",
    pageTitle: "Jenkins Creek Covington Fence Installation",
    description: META_DESCRIPTION,
    faqItems: JENKINS_CREEK_FAQS,
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
                    Serving Jenkins Creek, Covington WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Jenkins Creek Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy for family yards, hogwire that keeps Jenkins Creek Park in view, and hybrid systems built for wet clay along Spring Pond, 180th Avenue SE, and the trail to Jenkins Creek Elementary.
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
                  city="Jenkins Creek, Covington"
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
                Fencing Along the Creek Corridor, Not a Flat Suburban Kit
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Jenkins Creek is the residential pocket around Jenkins Creek Park, Spring Pond, and the Kent School District campus on 186th Avenue SE. SE 267th Street, 180th Avenue SE, Wax Road, and Timberlane Drive frame the park; cul-de-sacs at SE 260th Place and SE 261st Court already touch a paved creek-side path. Yards here sit closer to wetlands and clay than a Maple Hills hillside lot, and closer to school-route traffic than a Lake Sawyer waterfront. The design conversation starts with how wet the rear line gets in January, whether the park trail should stay in view, and how to keep dogs in without boxing off the boardwalk.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Covington, including creek-adjacent work in this neighborhood and neighboring Timberlane and Covington Woods. We use Fence Genius to capture grade changes toward Jenkins Creek, root zones along the park edge, and the true length of a 180th Avenue run before a post goes in the ground. The goal is a fence that belongs on a creek-corridor lot — not a dry-yard layout dropped onto soil that stays saturated after every winter storm.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Jenkins Creek Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Creek-Edge Moisture Planning
                      </h3>
                      <p className="text-muted-foreground">
                        Jenkins Creek, Spring Pond, and winter runoff keep rear lines wetter than a typical Covington side yard. We keep soil off the first board, choose hardware that holds up in that damp slot, and talk through whether the wet corner should be hybrid instead of a second round of stain.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Family Yards Near the Elementary
                      </h3>
                      <p className="text-muted-foreground">
                        Lots on 186th Avenue SE and Timberlane Drive are built around kids, dogs, and the walk to Jenkins Creek Elementary. We design closed neighbor sides, latch heights that stay out of small hands, and gates that still open after school pickup traffic fills the street.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Trees className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Park and Trail-Facing Runs
                      </h3>
                      <p className="text-muted-foreground">
                        A solid wall on every side is the most common regret when the park path was the reason someone bought the lot. Mixed styles — cedar toward neighbors, hogwire toward Jenkins Creek Park — keep pets in without erasing Spring Pond.
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
                        Full coverage on materials and labor, including hardware chosen for wet creek-side yards and Covington clay. We stand behind the install through south King County winters.
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
                What Jenkins Creek Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our backyard sits on the park trail toward the elementary. Full cedar on the neighbor sides, hogwire toward Spring Pond. They staged off 267th so Timberlane Drive stayed open for pickup.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Maya in Jenkins Creek</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The last fence leaned after one wet winter along the creek. They lifted the bottom board, used hybrid on the low corner, and the walkthrough checked every latch before they left.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Chris in Jenkins Creek</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Cul-de-sac lot off 261st with a dog and two kids. They measured twice, kept the gate off the only walk to the paved path, and the cedar still matches the neighbor height on 180th.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Jenkins Creek</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Jenkins Creek Covington fence" />

        {/* 6. Photo Gallery — nearby Covington installs until neighborhood-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Covington"
          title="Recent Fence Work Near Jenkins Creek"
          description="These photos are from nearby Covington jobs, including Timberlane, Covington Woods, and citywide installs. Same crew, same materials, and the same Fence Genius process we use on creek-adjacent lots along 180th Avenue SE, SE 267th Street, and the trail to Jenkins Creek Elementary."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Covington" neighborhood="Jenkins Creek" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Jenkins Creek Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Jenkins Creek cedar-and-hogwire run sits on a family lot off 180th Avenue SE or SE 267th Street, close enough to Jenkins Creek Park that a solid downhill wall would erase the reason the house faces the trail. The job is usually two fences in one: full-height cedar on the neighbor and school-route sides, then a lighter hogwire stretch toward Spring Pond so the living room still reads the trees. Fence Genius maps the wet corner so panels sit above winter ponding, and we set footings in clay that moves after every heavy rain.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Jenkins Creek yards run 80–160 linear feet and wrap in one to three working days after any city or plat paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the trail face, the wet corner, and the school-side gate are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Jenkins Creek-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Jenkins Creek Moisture and Clay Soil
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The creek, Spring Pond, and Covington&apos;s clay-rich soil keep winter ground wetter for longer than a Timberlane cul-de-sac that sits farther from the corridor. Two roofs and a short rear yard dump a surprising amount of water into one strip. A flat-lot crew will bury the low rail or leave cedar sitting in that puddle all winter. We keep soil off the first board, use hardware that holds up in the damp slot, and talk through whether the wet corner should be hybrid.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Jenkins Creek Park and Trail-Edge Lots
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Homes that back the paved park path or the 261st trail entrance often want pets contained without losing the walk to the elementary. Walling every side at six feet is the fastest way to hide Spring Pond. Mixed styles — solid cedar toward neighbors, hogwire toward the park — are the usual fix, with gates placed so a stroller still reaches SE 267th Street and 186th Avenue SE.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Jenkins Creek Wildlife and Pet Containment
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deer and smaller wildlife move along the creek and wooded park edge. A six-foot cedar privacy fence is the most effective residential barrier on garden sides; hogwire still holds dogs on trail-facing stretches without a closed-in look. We close ground gaps so pets stay in and keep climbable rails off the outside face on school-route lots.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Jenkins Creek School-Route Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pickup on 186th Avenue SE, parking on Timberlane Drive and 267th Place, and weekday traffic toward SR 18 set the pattern. We stage compact equipment so we are not blocking the park trail or the elementary queue, and we plan material drops away from Wax Road when that entrance is already full.
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
                Fence Installation Cost in Jenkins Creek
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Jenkins Creek fence is often a mixed-style run: a private neighbor face plus an open stretch toward the park. Moisture, clay, and extra gates move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $40–$58 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $35–$50 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $50–$68 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Slope transitions, creek-edge moisture, difficult access, and custom gates can affect the final cost. Get an exact quote for your Jenkins Creek property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Jenkins Creek property</Link>
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
                Popular Fence Styles in Jenkins Creek
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and school-route lots. Full height for family yards, pre-stained cedar that holds up in a wet rear line, and a look that fits homes along 180th Avenue SE and Timberlane Drive.
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
                    Cedar frame with black mesh for lots that still want Jenkins Creek Park in the room. Dogs stay in, the lighter footprint takes less wind than a solid wall, and the trail does not disappear after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a creek-side corner has already eaten one fence. Strong enough for family yards without looking commercial on 186th or Wax Road.
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
                Our Jenkins Creek Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Jenkins Creek Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, mark wet corners toward Jenkins Creek, note the park-facing stretch, map utilities, and check whether a trail-side run should stay more open. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual yard, not a dry-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Jenkins Creek Design & City Review
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document City of Covington rules plus any plat or CC&R packet on newer streets. Corner-lot sight lines on 180th Avenue SE, SE 267th Street, and Wax Road get marked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Jenkins Creek install days are mostly setting posts and hanging finished sections that already match the wet corner and the trail gate.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Jenkins Creek Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 180th, Timberlane Drive, and the 261st cul-de-sacs. Drainage-aware hardware on the creek-side corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Jenkins Creek Fence Installation FAQs"
          items={JENKINS_CREEK_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Covington"
        neighborhoodName="Jenkins Creek"
        attractions={JENKINS_CREEK_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Jenkins Creek households sit in the{" "}
              <a
                href="https://www.kent.k12.wa.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kent School District
              </a>
              .{" "}
              <a
                href="https://www.kent.k12.wa.us/o/jces/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Jenkins Creek Elementary
              </a>{" "}
              is on 186th Avenue SE, connected to the park by the paved trail, so weekday traffic on 186th and Timberlane Drive is part of how we schedule a crew. After school, many families walk through{" "}
              <a
                href="https://www.covingtonwa.gov/city_departments/parks/jenkinscreekpark.php"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Jenkins Creek Park
              </a>{" "}
              or continue on{" "}
              <a
                href="https://www.covingtonwa.gov/city_departments/parks/jenkinscreektrail.php"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Jenkins Creek Trail
              </a>{" "}
              toward the 261st entrance.
            </p>
            <p>
              Weekend errands cluster west at the{" "}
              <a
                href="https://kcls.org/locations/covington/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Covington Library
              </a>{" "}
              on 164th Avenue SE and the retail core promoted by the{" "}
              <a
                href="https://covingtonchamber.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Covington Chamber of Commerce
              </a>
              . Swim lessons and rec programs run at the{" "}
              <a
                href="https://www.covingtonwa.gov/city_departments/parks_and_recreation/aquatic_center.php"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Covington Aquatic Center
              </a>
              . For fence height and permit questions, start with{" "}
              <a
                href="https://www.covingtonwa.gov/permitservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                City of Covington Permit Services
              </a>
              . SR 18 and 180th Avenue SE put Kent, Maple Valley, and Auburn within a short drive — which is why so many creek-corridor lots want a fence that works as hard as the school week.
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
                Also Serving Nearby Covington Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Covington. From Jenkins Creek we also work in Timberlane along the park edge, Covington Woods, Maple Hills on the hillside, and Lake Sawyer to the east.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington">Covington overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington/timberlane">Timberlane</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington/covington-woods">Covington Woods</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington/maple-hills">Maple Hills</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington/lake-sawyer">Lake Sawyer</Link>
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
                Ready to Enhance Your Jenkins Creek Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Jenkins Creek. We&apos;ll walk the lot, talk through a park-facing stretch vs. a private neighbor side, and quote a fence that fits your creek-corridor yard.
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

export default JenkinsCreekPage;
