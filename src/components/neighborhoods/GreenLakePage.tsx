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
  Mountain,
  Home,
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

const CANONICAL = "https://myfence.com/service-areas/seattle/green-lake";
const META_TITLE =
  "Green Lake Fence Installation | Seattle | Lake Loop Lots & Aurora Edge | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Green Lake, Seattle, WA. Cedar, hogwire & hybrid fencing for lake-loop bungalows, Aurora noise, and the climb off the path. Free quotes. (253) 455-1885.";

const GREEN_LAKE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Green Lake, Seattle?",
    answer:
      "Seattle's Department of Construction and Inspections says you do not need a permit for a fence 8 feet or less that has no masonry or concrete elements over 6 feet. You do need a construction permit if the fence is taller than 8 feet, and most of those taller jobs are a subject-to-field-inspection permit with a site plan and section drawings. Zoning is separate from the permit: in neighborhood residential and multifamily zones the fence is limited to 6 feet, plus up to 2 more feet of mostly open architectural features such as an arbor or trellis, and it is limited to 4 feet in a front or street-side setback. On a slope the fence may reach 8 feet if the average height between posts stays at 6 feet. A fence on a retaining wall that raises the grade is limited to 9 feet 6 inches combined; if the wall lowers the grade, the normal fence limit applies. Environmentally critical areas, including steep slopes and wetlands, follow different rules. Green Lake is not one of Seattle's seven landmark preservation districts, so a typical house does not need a district Certificate of Approval. The Green Lake Branch library at 7364 E Green Lake Drive N is a designated Carnegie landmark, and the Evans Pool roof structure at 7201 East Green Lake Drive N received landmark status in 2020; those designations do not automatically cover the bungalows around the lake. Lots that face E Green Lake Drive N or W Green Lake Way N often sit in a street-side setback facing the park, which is the 4-foot question we check before we quote. Call SDCI at (206) 684-8600 if the parcel is unclear.",
  },
  {
    question:
      "What fence styles work best for Green Lake's lake-loop lots and Aurora-edge blocks?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off Woodlawn Avenue NE, Latona Avenue NE, Wallingford Avenue N, and the alleys between N 65th and N 80th, where neighboring houses sit close and the second story looks straight into the yard. Lots that back the 2.8-mile path along E Green Lake Drive N or W Green Lake Drive N often want a solid neighbor face, then a lighter hogwire stretch toward the park so walkers stay in view and dogs stay in. Houses on the Aurora Avenue N edge, including blocks near Winona Avenue N and Linden Avenue N, usually want the solid run on the highway side, where traffic noise is the point of the fence. East-edge lots toward I-5 near 5th Avenue NE and NE Ravenna Boulevard make the same choice on the freeway face. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain a damp, lake-level corner after every wet winter. Fence Genius maps short bays and stepped panels so the climb from Green Lake Drive up toward N 80th and N 85th follows the grade instead of leaving a gap at the downhill post.",
  },
  {
    question: "How much does fence installation cost in Green Lake, Seattle?",
    answer:
      "Green Lake fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Stepped panels on the climb off the lake, extra gates on townhome courts near NE 72nd Street, and hand-carrying materials around loop traffic on E Green Lake Way N or W Green Lake Way N can move a quote. Removal of an old fence is priced separately. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Green Lake?",
    answer:
      "Most Green Lake bungalow and townhome projects finish in one to three working days after any SDCI paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from stepping a run up from Green Lake Drive, parking around weekend loop traffic at the community center and West Green Lake Beach, or matching an existing neighbor height on a short side yard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Green Lake?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Green Lake mixes 1920s pins on the bungalow grid with later infill near the commercial nodes at E Green Lake Drive and NE 72nd Street, so confirming the line before digging saves a redo on a short side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const GREEN_LAKE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Green Lake Park",
    url: "https://www.seattle.gov/parks/parks/green-lake-park",
    description:
      "The park at 7201 E Green Lake Drive N, with East Green Lake Beach next to the community center and West Green Lake Beach at 7312 W Green Lake Drive N. Weekend loop traffic on both Green Lake Drives is how we time trailer drops so a crew is not blocking the 2.8-mile path.",
  },
  {
    name: "Green Lake Community Center",
    url: "https://www.seattle.gov/parks/community-centers/green-lake-community-center",
    description:
      "The 1928 center at 7201 East Green Lake Drive N, sharing a building with Evans Pool on the east shore. School-day pickup and evening gym use fill Latona Avenue NE; we keep material staging off that curb when the play area and courts are busy.",
  },
  {
    name: "Green Lake Branch, Seattle Public Library",
    url: "https://www.spl.org/hours-and-locations/green-lake-branch",
    description:
      "The Carnegie library at 7364 E Green Lake Drive N, a short walk from the east-shore playground. The building itself is a designated landmark; the houses on the next block are not, which is a distinction we check before anyone assumes a district review.",
  },
  {
    name: "Seattle Public Theater",
    url: "https://www.seattlepublictheater.org/contact-us",
    description:
      "The Bathhouse theater at 7312 West Green Lake Drive North, next to West Green Lake Beach. Evening performances and the path in front of the lobby are why we avoid leaving a trailer on W Green Lake Drive N on show nights.",
  },
];

const GreenLakePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Green Lake, Seattle",
    pageTitle: "Green Lake Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: GREEN_LAKE_FAQS,
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
                    Serving Green Lake, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Green Lake Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on tight bungalow lots, hogwire that keeps the lake path in view, and hybrid systems for the climb off Green Lake Drive and the blocks that take Aurora and I-5 noise.
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
                  city="Green Lake, Seattle"
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
                Fencing the Basin Around the 2.8-Mile Loop
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Green Lake sits in a bowl around the park at 7201 E Green Lake Drive N, with Wallingford and Woodland Park to the south, Phinney Ridge across Aurora Avenue N, Roosevelt and Maple Leaf across I-5, and N 85th Street as the northern edge. The loop road changes names as it circles: East Green Lake Way N, East Green Lake Drive N, West Green Lake Drive N, and West Green Lake Way N. Residential streets climb away from the water on Woodlawn Avenue NE, Latona Avenue NE, Wallingford Avenue N, 1st Avenue NE, and 5th Avenue NE. Cross streets that matter for a fence quote are N 65th, N 71st, N 80th, and NE Ravenna Boulevard, the Olmsted diagonal that ties the east shore toward Roosevelt. Older 1920s bungalows fill most of that grid. Newer townhome courts cluster near the shops at E Green Lake Drive and NE 72nd Street. Yards are short, alleys are narrow, and a south or west lot line may sit a few steps from the path that thousands of people walk each day.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across Seattle, including lake-loop and highway-edge lots in Green Lake. Fence Genius records the rise from Green Lake Drive, the true length of a bungalow side yard, and the neighbor fence we have to meet before a crew arrives. The result is a fence sized for a Green Lake lot, with panels that fit an alley gate and a grade that is already stepping before the first post is set.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Green Lake Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Grade Off the Lake, Not a Flat Panel
                      </h3>
                      <p className="text-muted-foreground">
                        Lake-level lots along Green Lake Drive are relatively even. A few streets up toward N 80th Street the same blocks are stepping. Fence Genius maps each bay, and we design to Seattle&apos;s average-height rule on a slope instead of guessing from the sidewalk.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Bungalow Yards Next to a Public Path
                      </h3>
                      <p className="text-muted-foreground">
                        Side yards off Woodlawn Avenue NE and Latona Avenue NE are measured in feet, and the park loop is often the fourth neighbor. We measure the alley, the meter, and which face should stay open toward the water before we cut a single panel.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Aurora on One Edge, I-5 on the Other
                      </h3>
                      <p className="text-muted-foreground">
                        West-edge houses near Winona Avenue N hear Aurora Avenue N all day. East-edge houses toward 5th Avenue NE and NE Ravenna Boulevard hear I-5. A solid cedar run belongs on the noisy face; the lake side of the same lot can stay lighter.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Landmark className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        SDCI Rules, Not a Green Lake District
                      </h3>
                      <p className="text-muted-foreground">
                        Green Lake is not one of Seattle&apos;s seven landmark preservation districts. We still check height, front-yard limits on park-facing streets, and whether the parcel itself is a designated landmark — the library and the Evans Pool roof are, the typical bungalow is not.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Green Lake Seattle fence" />

        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Green Lake"
          description="These photos are from nearby Seattle jobs. Same crew, same materials, and the same Fence Genius process we use on Green Lake lots along Woodlawn Avenue NE, N 65th Street, and Green Lake Drive."
        />

        <FeaturedProject city="Seattle" neighborhood="Green Lake" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Green Lake Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Green Lake cedar-and-hogwire run sits on a bungalow lot off Woodlawn Avenue NE or N 65th Street, close enough to the park that a solid south or west wall would erase the water. The job is usually two fences in one: full-height cedar on the neighbor and alley sides, then a lighter hogwire stretch toward E Green Lake Drive N so the living room still reads the loop. On Winona Avenue N near Aurora, the solid face goes toward the highway instead, because traffic noise is the problem and the view is not. Fence Genius maps the rise so panels step with the grade, and we set footings so winter runoff between two close roofs does not sit against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Green Lake yards run 50–130 linear feet and wrap in one to three working days after any city paperwork. We use cedar privacy, hogwire, or hybrid aluminum/cedar, and we walk the line with you before posts go in so the park stretch, the wet corner, and the steepest bay are all accounted for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Green Lake-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    The Climb from Green Lake Drive to N 80th
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Blocks along East and West Green Lake Drive sit near lake elevation. A few streets north, the same lots are stepping toward N 80th Street and N 85th Street. A crew that treats Green Lake like a level Wallingford alley will leave a gap or bury a rail. Fence Genius maps the grade so each bay follows the yard. On a sloping site Seattle allows the high point to read taller when the average height between posts stays within the six-foot zoning limit. We design to that average, then check it against the four-foot cap if the run sits in a front or street-side setback on the loop road.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Loop Traffic, Beaches, and Weekend Crowds
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seattle Parks lists two guarded beaches: West Green Lake Beach at 7312 West Green Lake Drive N, next to Seattle Public Theater, and East Green Lake Beach at 7201 East Green Lake Drive N, next to the community center and Evans Pool. The 2.8-mile path fills both Green Lake Drives on weekends. Lots that back the path need a fence that holds pets without turning a public trail into a blank wall. We schedule deliveries outside peak loop hours so a trailer is not sitting in the curb lane at Latona Avenue NE or Stone Avenue N.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Highway Noise on the Aurora and I-5 Edges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aurora Avenue N is the west wall of the neighborhood; I-5 is the east wall. Houses near Winona Avenue N and Linden Avenue N take highway noise all day, and east-edge lots toward 5th Avenue NE and the NE Ravenna Boulevard freeway ramps do the same. A solid cedar run on that face does more work than an open panel. The opposite side of the same lot may still want hogwire if it opens toward a neighbor garden or the lake rather than the roadway. We do not wrap every side at the same height when only one side is taking the noise.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Seattle Fence Rules in a Neighborhood Without a Landmark District
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seattle&apos;s historic-preservation FAQ lists seven preservation districts. Green Lake is not one of them, so a street-visible fence on an ordinary house does not go through a district board the way a Ballard Avenue storefront does. SDCI still limits height: 6 feet in neighborhood residential and multifamily zones, 4 feet in a front or street-side setback, with the slope average and the retaining-wall combination rules on the same fence page. Park-facing lots on E Green Lake Drive N and W Green Lake Way N are the ones we check for that four-foot street-side cap. The Green Lake Branch at 7364 E Green Lake Drive N is a designated Carnegie landmark, and the Evans Pool roof at the community center received landmark status in 2020; work on those parcels is a different question from a fence on the house across the street. Steep-slope overlays on the climb toward N 85th Street follow the environmentally critical areas code. We check the parcel before we order materials.
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
                Fence Installation Cost in Green Lake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Green Lake fence is often a short, mixed-style run: a quieter neighbor face plus an open stretch toward the path, or a solid face toward Aurora or I-5. Access, gates, and stepped panels move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-carrying materials around loop traffic on Green Lake Drive are itemized separately. Get an exact quote for your Green Lake property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Green Lake property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Popular Fence Styles in Green Lake
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides, alleys, and the Aurora- or I-5-facing run. Pre-stained cedar holds up in a wet lake-level yard and fits both older bungalows and later townhomes near NE 72nd Street.
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
                    Cedar frame with black mesh for lots that still want the water or the path in the room. Dogs stay in, and the lighter face takes less wind off the basin than a solid wall on every side.
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
                    Aluminum panels in a cedar frame on steel posts for the damp corner along Green Lake Drive or a north-facing side yard that has already eaten one wood fence. Quiet enough for Woodlawn Avenue NE.
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
                Our Green Lake Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Green Lake Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the side yards, note whether the open stretch faces the path or should face away from Aurora or I-5, and map utilities. Fence Genius captures length and grade so panels are built to the actual hill, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. SDCI Height and Setback Check</h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle&apos;s 6-foot zoning limit, the 4-foot front and street-side setback on park-facing Green Lake Drive lots, the slope average, and whether a parcel is a designated landmark. Steep-slope overlays on the upper blocks get checked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Green Lake install days are mostly setting posts and hanging finished sections that already match the stepped side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Green Lake Installation</h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to alleys and residential streets off Woodlawn Avenue NE, Latona Avenue NE, N 65th Street, and Green Lake Drive. Drainage-aware hardware on the wet lake-level corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Green Lake Fence Installation FAQs"
          items={GREEN_LAKE_FAQS}
        />
      </main>

      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="Green Lake"
        attractions={GREEN_LAKE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Green Lake households sit in{" "}
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
                href="https://www.seattleschools.org/schools/greenlakees/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Green Lake Elementary
              </a>{" "}
              is at 2400 N 65th Street, a few blocks southwest of the east shore. After school, the{" "}
              <a
                href="https://www.spl.org/hours-and-locations/green-lake-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Green Lake Branch of the Seattle Public Library
              </a>{" "}
              at 7364 E Green Lake Drive N is next to the playground, and families also walk the loop to{" "}
              <a
                href="https://www.seattle.gov/parks/community-centers/green-lake-community-center"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Green Lake Community Center
              </a>
              .
            </p>
            <p>
              Weekday life also runs along E Green Lake Drive N and across Aurora to{" "}
              <a
                href="https://zoo.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Woodland Park Zoo
              </a>{" "}
              at 5500 Phinney Avenue N. For fence height and permit questions, start with{" "}
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
              names the seven preservation districts; Green Lake is not on that list. The neighborhood puts Wallingford, Fremont, and Ravenna within a short ride, which is why so many Green Lake lots want a fence that holds a dog on a small yard and still leaves a window to the lake.
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
                We install fences throughout Seattle. From Green Lake we also work in Fremont toward the Ship Canal, Ravenna across I-5, and Queen Anne and Capitol Hill farther south. Wallingford sits just south of Woodland Park on the Seattle service-area page.
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
                  <Link href="/service-areas/seattle/capitol-hill">Capitol Hill</Link>
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
                Ready to Enhance Your Green Lake Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Green Lake. We&apos;ll walk the lot, talk through a path-facing stretch versus a solid face toward Aurora or I-5, and quote a fence that fits your property.
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

export default GreenLakePage;
