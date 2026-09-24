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
  Home,
  RefreshCw,
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

const CANONICAL = "https://myfence.com/service-areas/renton/cascade";
const META_TITLE =
  "Cascade Fence Installation | Replacement & Mid-Century Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Cascade, Renton, WA. Cedar, hogwire & hybrid fencing for 116th Avenue SE lots, Cascade Park yards, and mid-century replacements. Free quotes. (253) 455-1885.";

const CASCADE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Cascade, Renton?",
    answer:
      "Most Cascade lots sit inside City of Renton limits, so Renton Municipal Code 4-4-040 applies. Side- and rear-yard fences six feet or under typically do not need a building permit; a fence taller than six feet does. Front-yard fencing in the required setback is usually limited to four feet, and corner lots on 116th Avenue SE, SE 160th Street, and SE 168th Street must keep sight triangles clear. A handful of 98058 parcels on the south edge sit in unincorporated King County instead — we check the parcel before we quote so you are not following the wrong book.",
  },
  {
    question:
      "What fence styles work best for Cascade's mid-century lots and replacement jobs?",
    answer:
      "Six-foot cedar privacy is the usual choice when a 1960s–1980s run has finally given out on SE 164th or 120th Avenue SE — it matches the height most neighbors already have and screens the side yards that sit close together. On lots that back toward Cascade Park or a wooded drainage, hogwire in a cedar frame holds dogs without walling off the trees. Hybrid aluminum-and-cedar on steel posts suits homeowners who are replacing a fence for the second time and do not want to restain every few winters. Fence Genius maps the existing pins so the new line meets the neighbor fence without a jog.",
  },
  {
    question: "How much does fence installation cost in Cascade?",
    answer:
      "Cascade fence installation typically runs $43–$65 per linear foot for six-foot cedar privacy, $38–$57 for hogwire with a cedar frame, and $53–$75 for hybrid aluminum/cedar. Tear-out of a failing mid-century fence, tight side-yard access off 116th, and hand-digging near older firs can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Cascade?",
    answer:
      "Most Cascade residential projects finish in one to three working days after any city paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from removing a leaning 1970s run, compact access on SE 162nd or 117th during Cascade Elementary pickup, or matching an existing neighbor height on a shared side. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Cascade?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Renton does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Cascade pins from the 1960s and 1970s do not always match later infill, so confirming the line before digging saves a redo on a tight side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const CASCADE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Cascade Park",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "A 10.9-acre wooded park at 16165 126th Avenue SE, four blocks east of Cascade Elementary. Walking paths, a playground, and picnic tables sit among the trees — lots that back this way usually want a fence that holds pets without boxing out the canopy.",
  },
  {
    name: "Cascade Elementary School",
    url: "https://cascade.rentonschools.us/",
    description:
      "The neighborhood campus at 16022 116th Avenue SE. Morning drop-off and afternoon pickup stack on 116th and the courts off SE 160th; we time material drops so a trailer is not sitting in that queue.",
  },
  {
    name: "Philip Arnold Park",
    url: "https://www.rentonwa.gov/city_hall/community_services/parks_and_trails/philip_arnold_park",
    description:
      "Hilltop fields and playgrounds at 720 Jones Avenue S, a short drive west toward Nelsen Middle School. Weekend tournaments fill Jones; fence jobs on that corridor get staged so game-day parking is not the problem.",
  },
  {
    name: "Henry Moses Aquatic Center",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "The city pool at 1719 Maple Valley Highway, next to the Renton Community Center. Summer lesson traffic on the highway is part of how we plan crew arrivals from the north edge of Cascade.",
  },
  {
    name: "Lindbergh High School",
    url: "https://lindbergh.rentonschools.us/",
    description:
      "The Renton School District high school that serves Cascade families. Friday traffic on the approach streets is how we stage equipment so a game-day stack does not sit behind a trailer.",
  },
];

const CascadePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Cascade, Renton",
    pageTitle: "Cascade Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: CASCADE_FAQS,
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
              href="/service-areas/renton"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Renton
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Cascade, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Cascade Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Replacement cedar for mid-century lots, hogwire toward Cascade Park, and hybrid systems built for the mix of 1960s pins and later infill along 116th Avenue SE.
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
                  city="Cascade, Renton"
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
                Replacing Tired Lines on 116th Avenue SE
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Cascade is the established south-Renton neighborhood that grew up around Cascade Elementary at 16022 116th Avenue SE. SE 160th, SE 164th, and SE 168th run east–west through ramblers from the 1960s and 1970s, later two-story infill, and the courts that feed 117th, 120th, and 126th. Cascade Park sits four blocks east of the school at 16165 126th. Lots here are tighter than a Fairwood plateau backyard and older than most East Plateau plats — the design conversation starts with what is already leaning, where the pins actually sit, and whether the street face on 116th needs to mute pickup traffic.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Renton, including full replacements in Cascade and neighboring Fairwood. We use Fence Genius to capture the existing line, tree locations, and the true length of a side yard before a post goes in the ground, so a 140-foot replacement meets the neighbor fence without a jog and the wet corner toward Maple Valley Highway gets hardware that will still be tight after a few Cascade winters. The goal is a fence that belongs on a mid-century street — not a new-construction panel forced onto a 1972 lot.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Cascade Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <RefreshCw className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Mid-Century Replacements
                      </h3>
                      <p className="text-muted-foreground">
                        Most Cascade jobs start with a fence that has already done thirty or forty years. We tear out the lean, match the neighbor height that is staying, and set a new line on the pins — not on the old posts that drifted.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        116th Avenue Screening
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the school-street face takes the edge off drop-off traffic; a more open back line toward Cascade Park keeps the yard from feeling boxed. We mix styles on one property so you are not choosing between quiet and light.
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
                        Full coverage on materials and labor, including hardware chosen for the extra damp that sits on lower Cascade lots toward Maple Valley Highway. We stand behind the install through south King County winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Renton Code, Not Guesswork
                      </h3>
                      <p className="text-muted-foreground">
                        Cascade is mostly City of Renton, not a single master HOA. We document height and setback under RMC 4-4-040, flag corner-lot sight triangles on 116th, and check the few 98058 parcels that sit in the county instead.
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
                What Cascade Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The old fence had been leaning toward the neighbor since we bought the house. They pulled it, found the pins, and the new cedar actually meets their remaining run instead of overlapping it.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Cascade</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We are on 116th across from the school. They used full cedar on the street so pickup noise dropped, then hogwire toward the park. They finished before afternoon pickup so we were not blocking the street.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Andre in Cascade</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;This is our second fence on the same lot. They put hybrid on steel posts at the wet corner so we are not staining again in five years. The walkthrough was picky in a good way.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Helen in Cascade</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Cascade Renton fence" />

        {/* 6. Photo Gallery — nearby Renton installs until Cascade-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Renton"
          title="Recent Fence Work Near Cascade"
          description="These photos are from nearby Renton jobs, including Fairwood, Maple Ridge Estates, and The Grove at Spring Lake. Same crew, same materials, and the same Fence Genius process we use on Cascade lots along 116th Avenue SE, SE 164th, and 126th near Cascade Park."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Renton" neighborhood="Cascade" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Cascade Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Cascade cedar privacy run sits on a mid-century lot south of SE 160th, close enough to 116th that weekday school traffic is part of the soundtrack. The job is usually a full replacement: tear out a leaning 1970s line, then one backyard plus two tight side yards. Full-height cedar screens the neighbors who sit close; hogwire or a mixed rail faces Cascade Park or a drainage so the trees stay in the room. Fence Genius maps the pins so panels do not creep onto the wrong lot, and we set footings so winter runoff from the Maple Valley Highway side does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Cascade yards run 110–190 linear feet and wrap in one to three working days after any city paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the school-street face and the wet corner are both accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Cascade-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Cascade Property Ages and Shared Pins
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Streets off 116th, 120th, and SE 164th mix original ramblers with later infill. The fence you are replacing may not sit on the recorded line, and the neighbor&apos;s remaining run may be a different height. We treat that as a layout problem, not a surprise on install day: Fence Genius captures both fences, we mark where the new line should land, and we talk through who owns which stretch before a post hole is dug.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Cascade Moisture Toward Maple Valley Highway
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The north and west edges of Cascade sit closer to the Cedar River valley and Maple Valley Highway than the Fairwood plateau. Lower yards hold water longer after a December rain. Pre-stained Western Red Cedar, stainless or hot-dipped fasteners, and optional steel posts at the wettest corners last longer than raw cedar and light galvanized nails. We also keep dirt from piling against the bottom rail so the first board does not sit in a puddle all winter.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Cascade Park Edges and Tree Roots
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that back to Cascade Park or the wooded stretch near 126th Avenue SE usually want a fence that holds dogs without looking like a warehouse wall against the trees. Hogwire in a cedar frame, or cedar on the neighbor sides with an open run toward the park, is the usual mix. We hand-dig around older firs rather than forcing an auger through a root that has had fifty years to own the side yard.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Cascade School-Street Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    116th Avenue SE is the neighborhood&apos;s weekday spine. Cascade Elementary pickup stacks on 116th and SE 160th; Nelsen Middle School on Jones Avenue S and Lindbergh to the south set the rest of the pattern. A six-foot cedar street face is the practical noise buffer; we do not claim it is a sound wall. We stage compact equipment so we are not blocking a queue, and we plan material drops away from the school lot when that block is already full.
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
                Fence Installation Cost in Cascade
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Cascade fence is often a replacement on a mid-century lot, plus a quieter face on 116th. Tear-out, gates, and mixed-style runs move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $43–$65 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $38–$57 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $53–$75 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Tear-out of an existing fence, tight side-yard access, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Cascade property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Cascade property</Link>
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
                Popular Fence Styles in Cascade
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and 116th street faces. Full height to match the run that is staying, pre-stained cedar that holds up on a wet corner, and a look that fits both 1970s ramblers and later two-story infill.
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
                    Cedar frame with black mesh for park-edge lots that still want the trees in the room. Dogs stay in, the lighter footprint is easier around fir roots than a solid wall, and the yard does not feel boxed after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a second replacement on the same lot makes staining a chore. Strong enough for family yards without looking commercial on SE 164th or 120th.
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
                Our Cascade Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Cascade Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the existing line, note the wet corner, map trees, and check whether a 116th or park-facing stretch should stay more open. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual yard, not a new-construction assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Cascade Design & City Review
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. Cascade does not have a single master HOA; we still document City of Renton height and setback rules under RMC 4-4-040 so the install is clean with the city. If your parcel sits in unincorporated King County, we follow county rules instead.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Cascade install days are mostly setting posts and hanging finished sections after the old line comes out.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Cascade Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 116th, SE 160th, SE 164th, and 126th. Tear-out first, drainage-aware footings on the wet corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Cascade Fence Installation FAQs"
          items={CASCADE_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Renton"
        neighborhoodName="Cascade"
        attractions={CASCADE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Cascade families are served by the{" "}
              <a
                href="https://www.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton School District
              </a>
              , with{" "}
              <a
                href="https://cascade.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cascade Elementary
              </a>{" "}
              on 116th Avenue SE as the neighborhood campus. Most addresses then feed{" "}
              <a
                href="https://nelsen.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Nelsen Middle School
              </a>{" "}
              on Jones Avenue S and{" "}
              <a
                href="https://lindbergh.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lindbergh High School
              </a>
              . Weekday life is built around those campuses, Cascade Park on 126th, and the short hop north to Maple Valley Highway for the rest of Renton.
            </p>
            <p>
              After-school hours split between Cascade Park and the hilltop fields at{" "}
              <a
                href="https://www.rentonwa.gov/city_hall/community_services/parks_and_trails/philip_arnold_park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Philip Arnold Park
              </a>
              . Summer swim lessons land at{" "}
              <a
                href="https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Henry Moses Aquatic Center
              </a>
              {" "}
              on Maple Valley Highway. Homework nights often use the{" "}
              <a
                href="https://kcls.org/locations/fairwood/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fairwood Library
              </a>
              {" "}
              a few minutes south. For fence height and permit questions,{" "}
              <a
                href="https://www.rentonwa.gov/City-Services/Permit-Services"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                City of Renton Permit Services
              </a>{" "}
              and{" "}
              <a
                href="https://www.codepublishing.com/WA/Renton/html/Renton04/Renton0404/Renton0404040.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton fence code 4-4-040
              </a>{" "}
              are the first check before we draw a line. 116th Avenue SE and Maple Valley Highway put I-405 and downtown Renton within a short drive — which is why so many Cascade lots want a fence that works as hard as the commute.
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
                Also Serving Nearby Renton Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Renton. From Cascade we also work in Fairwood on the plateau to the south, Maple Ridge Estates and Maple Valley Heights on the East Plateau, The Grove at Spring Lake, and Renton Highlands to the north.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/fairwood">Fairwood</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-ridge-estates">Maple Ridge Estates</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-valley-heights">Maple Valley Heights</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/the-grove-at-spring-lake">The Grove at Spring Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/renton-highlands">Renton Highlands</Link>
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
                Ready to Enhance Your Cascade Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Cascade. We&apos;ll walk the lot, talk through a mid-century replacement vs. a 116th street face, and quote a fence that fits your property.
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

export default CascadePage;
