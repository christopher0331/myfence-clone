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
  Landmark,
  Volume2,
  Ruler,
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

const CANONICAL = "https://myfence.com/service-areas/seattle/capitol-hill";
const META_TITLE =
  "Capitol Hill Fence Installation | Seattle | Historic District Compliant | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Capitol Hill, Seattle, WA. Cedar, hogwire & hybrid fencing for compact lots, Harvard-Belmont review, and Broadway-adjacent yards. Free quotes. (253) 455-1885.";

const CAPITOL_HILL_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Capitol Hill, Seattle?",
    answer:
      "Most Capitol Hill side- and rear-yard fences six feet or under do not need a Seattle Department of Construction and Inspections building permit. Front and street-side setbacks are usually capped at four feet, and a solid fence taller than six feet is not the typical path even with paperwork. Lots inside the Harvard-Belmont Landmark District still need a Certificate of Approval from the Landmarks Preservation Board for work visible from the street, even when SDCI does not ask for a construction permit. Corner lots on Broadway, 15th Avenue E, E John Street, and Madison must keep sight triangles clear. MyFence.com checks the parcel zone and any landmark overlay before we quote.",
  },
  {
    question:
      "What fence styles work best for Capitol Hill's compact lots and landmark streets?",
    answer:
      "Six-foot cedar privacy is the usual choice on alley lots and shared side yards off 10th, 12th, and 15th Avenue E, where the neighbor's deck sits close enough that a shorter screen still reads the second floor. Broadway- and Pike-Pine-facing yards often want a solid street face for nightlife noise, then a lighter hogwire stretch toward Volunteer Park or Interlaken so the trees stay in view. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain after every wet Seattle winter. In Harvard-Belmont, we keep the street-facing run quieter in detail so it reads as a residential fence, not a commercial wall. Fence Genius maps short bays and alley gates so panels fit without blocking the only walk to the RPZ curb.",
  },
  {
    question: "How much does fence installation cost in Capitol Hill, Seattle?",
    answer:
      "Capitol Hill fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Tight alley access off Roy, Aloha, and Republican, extra gates on townhome courts, and hand-digging near older trees on Harvard Avenue E or Volunteer Park Way can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Capitol Hill?",
    answer:
      "Most Capitol Hill residential and townhome projects finish in one to three working days after any SDCI or Landmarks paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from hand-carrying materials down an alley off 12th or 13th, parking around Capitol Hill Station pickup on Broadway, or matching an existing neighbor height on a six-foot side yard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Capitol Hill?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Capitol Hill mixes century-old pins on Harvard and Belmont with later townhome courts near Cal Anderson and the light-rail station, so confirming the line before digging saves a redo on a short side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const CAPITOL_HILL_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Volunteer Park",
    url: "https://www.seattle.gov/parks/allparks/volunteer-park",
    description:
      "The 48-acre hilltop park at 1247 15th Avenue E — conservatory, water tower, and lawns that look west toward the Sound. Lots that face this green usually want a fence that holds pets without walling off the walk up Volunteer Park Way.",
  },
  {
    name: "Cal Anderson Park",
    url: "https://www.seattle.gov/parks/allparks/cal-anderson-park",
    description:
      "The neighborhood lawn and reservoir park on 11th Avenue, a block off Broadway and the light-rail station. Event days and evening use fill the surrounding alleys; we stage material drops so a trailer is not sitting in that curb lane.",
  },
  {
    name: "Seattle Asian Art Museum",
    url: "https://seattleartmuseum.org/asianartmuseum",
    description:
      "The 1933 Art Deco museum inside Volunteer Park. Nearby lots on 14th and 15th sit in the same tree-lined grid — we keep equipment off the small front lot that museum visitors use on weekend afternoons.",
  },
  {
    name: "Interlaken Park",
    url: "https://www.seattle.gov/parks/allparks/interlaken-park",
    description:
      "The wooded ravine between Capitol Hill and the Arboretum, reached from Interlaken Boulevard and 24th Avenue E. Yards that drop toward this canopy often keep a hogwire stretch so the trees stay in view instead of disappearing behind a solid downhill wall.",
  },
  {
    name: "Elliott Bay Book Company",
    url: "https://www.elliottbaybook.com/",
    description:
      "The independent bookstore at 1521 10th Avenue, in the Pike-Pine corridor. Evening foot traffic on 10th and Pine is part of how we time a crew on those blocks so the sidewalk stays open.",
  },
];

const CapitolHillPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Capitol Hill, Seattle",
    pageTitle: "Capitol Hill Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: CAPITOL_HILL_FAQS,
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
                    Serving Capitol Hill, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Capitol Hill Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on alley lots, hogwire that keeps Volunteer Park in view, and hybrid systems built for Broadway noise, Harvard-Belmont review, and the compact yards around Cal Anderson.
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
                  city="Capitol Hill, Seattle"
                  state="Washington"
                  radiusMiles={3}
                  zoom={14}
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
                <Award className="h-5 w-5 text-primary" />
                {WARRANTY_CONSTANTS.YEARS}-Year Warranty
              </span>
            </div>
          </div>
        </section>

        {/* 3. Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing Tight Lots Between Broadway and Volunteer Park
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Capitol Hill is the dense ridge east of downtown Seattle, west of the Arboretum and north of First Hill. Broadway and 15th Avenue E carry the commercial spine; Pike and Pine fill evenings; E John, E Thomas, and E Harrison drop toward the light-rail station; Harvard Avenue E, Belmont Avenue E, and 10th Avenue E hold the quieter residential blocks of the Harvard-Belmont Landmark District. Older craftsman and brick apartment yards sit a few streets off Volunteer Park while newer townhome courts fill infill parcels toward Cal Anderson. Yards here are shorter than a Ravenna side yard and louder than a Madison Park lot. The design conversation starts with how close the neighbor sits, whether the street face should mute Broadway, and whether a landmark packet is required before a post goes in.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Seattle, including compact-lot work on Capitol Hill and neighboring Ravenna. We use Fence Genius to capture tight alley widths, grade changes toward Interlaken, and the true length of a 12th Avenue run before a crew arrives. The goal is a fence that belongs on a hilltop city lot — not a long suburban kit squeezed onto a six-foot side yard that also happens to sit next to a bus stop on 15th.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Capitol Hill Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Landmark className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Harvard-Belmont Packet Ready
                      </h3>
                      <p className="text-muted-foreground">
                        Street-visible work inside the landmark district needs a Certificate of Approval, not just an SDCI height check. We document style, height, and a simple site plan so the Landmarks conversation happens before installation, not after a stop-work notice.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Alley Lots, Measured First
                      </h3>
                      <p className="text-muted-foreground">
                        Townhome courts and bungalow side yards off 10th, 12th, and 15th leave little room for a misplaced post. Fence Genius records the alley, the meter, and the neighbor fence so a gate still opens after the panels go up.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Broadway and Pike-Pine Noise
                      </h3>
                      <p className="text-muted-foreground">
                        Broadway, Pine, and the station plaza sit close enough that a solid cedar street face is often the first request. We keep the park-facing stretch lighter when you still want to see Volunteer Park or the Interlaken canopy.
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
                        Full coverage on materials and labor, including hardware chosen for damp hilltop yards and boulevard wind. We stand behind the install through Seattle winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Capitol Hill Seattle fence" />

        {/* 6. Photo Gallery — nearby Seattle installs until Capitol Hill-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Capitol Hill"
          description="These photos are from nearby Seattle jobs, including Ravenna and other city lots. Same crew, same materials, and the same Fence Genius process we use on Capitol Hill lots along 12th Avenue, Harvard Avenue E, and Volunteer Park Way."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Seattle" neighborhood="Capitol Hill" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Capitol Hill Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Capitol Hill cedar-and-hogwire run sits on a small lot off 12th Avenue or Harvard Avenue E, close enough to Volunteer Park that a solid downhill wall would erase the reason the house faces the trees. The job is usually two fences in one: full-height cedar on the Broadway and neighbor sides, then a lighter hogwire stretch toward the park so the living room still reads the canopy. Fence Genius maps the tight alley so panels fit without blocking the walk to E John, and we set footings so winter runoff between two roofs does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Capitol Hill yards run 60–140 linear feet and wrap in one to three working days after any city or landmark paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the street face, the wet corner, and the park side are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Capitol Hill–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Compact Lots and Alley Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Infill around Broadway and Cal Anderson produced townhome courts and leftover bungalow lots whose side yards are measured in feet, not tens of feet. A panel that works on an Eastside acre lot will not swing a gate here. We measure the alley, the utility meters, and the neighbor fence first, then build panels that leave a usable path to 12th, 15th, and E John. Restricted parking zones on Capitol Hill also mean we plan material drops instead of leaving a trailer in an RPZ stall all afternoon.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Harvard-Belmont Landmark Review
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Harvard-Belmont Landmark District covers the west-slope blocks of Harvard Avenue E, Belmont Avenue E, and neighboring streets. Work visible from the public right-of-way can require a Certificate of Approval from the Landmarks Preservation Board even when SDCI does not ask for a construction permit. We treat that packet as part of the design — height, finish, and a simple site plan — so you are not surprised after a neighbor flags the street face. Lots outside the district still follow Seattle height rules: six feet in side and rear yards, four feet in most front and street-side setbacks.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Broadway Nightlife and Hilltop Moisture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Broadway and the Pike-Pine corridor keep evenings loud; I-5 sits just west of the ridge. Lots that face those corridors usually want a solid cedar street face. Walling every side in the same height is the most common regret we hear when the Volunteer Park walk or Interlaken view was the reason someone bought the lot. Mixed styles — solid on the noisy face, open toward the trees — are the usual fix. Two roofs and a short side yard also dump a surprising amount of water into one strip. We keep soil off the first board and talk through whether the wet corner should be hybrid instead of a second round of stain.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Capitol Hill Terrain Toward Interlaken
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ridge drops east toward Interlaken Park and the Arboretum and west toward downtown. A flat-lot crew will leave a stepped gap or bury the low rail. Fence Genius maps the grade so each bay follows the yard instead of fighting it. On a sloping site Seattle allows the high point to read taller as long as the average height between posts stays within the six-foot rule — we design to that average instead of guessing from the sidewalk.
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
                Fence Installation Cost in Capitol Hill
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Capitol Hill fence is often a short, mixed-style run: a quieter face on Broadway plus an open stretch toward Volunteer Park. Access, gates, and landmark review move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Capitol Hill property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Capitol Hill property</Link>
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
                Popular Fence Styles in Capitol Hill
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and Broadway street faces. Full height for two-story townhomes, pre-stained cedar that holds up in a wet side yard, and a look that fits both older craftsman houses and later courts.
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
                    Cedar frame with black mesh for lots that still want Volunteer Park or Interlaken in the room. Dogs stay in, the lighter footprint takes less wind than a solid wall, and the trees do not disappear after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a wet alley corner has already eaten one fence. Strong enough for family yards without looking commercial on 15th or Broadway.
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
                Our Capitol Hill Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Capitol Hill Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the tight side yards, note the Broadway-facing stretch, map utilities, and check whether a park-facing run should stay more open. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual yard, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Capitol Hill Design & Landmark Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle height rules plus any Harvard-Belmont Certificate of Approval packet. Corner-lot sight triangles on Broadway, 15th Avenue E, E John Street, and Madison get marked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Capitol Hill install days are mostly setting posts and hanging finished sections that already match the tight side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Capitol Hill Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 12th, Harvard, 15th, and Aloha. Drainage-aware hardware on the wet corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Capitol Hill Fence Installation FAQs"
          items={CAPITOL_HILL_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="Capitol Hill"
        attractions={CAPITOL_HILL_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Capitol Hill households sit in{" "}
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
                href="https://stevenses.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Stevens Elementary
              </a>{" "}
              is at 1242 18th Avenue E, near Volunteer Park, and{" "}
              <a
                href="https://lowelles.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lowell Elementary
              </a>{" "}
              sits on E Mercer Street. Many families later attend{" "}
              <a
                href="https://garfieldhs.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Garfield High School
              </a>
              {" "}on 23rd Avenue. After school, the{" "}
              <a
                href="https://www.spl.org/hours-and-locations/capitol-hill-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Capitol Hill Branch of the Seattle Public Library
              </a>{" "}
              on Republican Street is a short walk from Broadway.
            </p>
            <p>
              Weekday life also clusters around{" "}
              <a
                href="https://seattlecentral.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle Central College
              </a>{" "}
              on Broadway and{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/capitol-hill-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Capitol Hill Station
              </a>
              , which is why we schedule crews around station hours on E John. For fence height and permit questions, start with{" "}
              <a
                href="https://www.seattle.gov/construction-and-inspections/permits/common-projects/fences"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle SDCI fence guidance
              </a>
              {" or the "}
              <a
                href="https://www.seattle.gov/neighborhoods/historic-preservation/historic-districts/harvard-belmont-landmark-district"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Harvard-Belmont Landmark District
              </a>{" "}
              page if your lot sits inside those west-slope blocks. The ridge puts downtown, the University District, and Madison Park within a short ride — which is why so many Capitol Hill lots want a fence that works as hard as the commute.
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
                Also Serving Nearby Seattle Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Seattle. From Capitol Hill we also work in Ravenna toward the University District and Ballard toward the Ship Canal, and we quote Queen Anne and Madison Park from the Seattle service-area page.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/ravenna">Ravenna</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Madison Park</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Queen Anne</Link>
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

        {/* 15. CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Capitol Hill Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Capitol Hill. We&apos;ll walk the lot, talk through a Broadway street face vs. a park-side stretch, and quote a fence that fits your property.
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

export default CapitolHillPage;
