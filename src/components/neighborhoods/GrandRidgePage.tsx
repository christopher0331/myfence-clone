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
  Users,
  FileCheck,
  PawPrint,
  Wind,
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

const CANONICAL = "https://myfence.com/service-areas/issaquah/grand-ridge";
const META_TITLE =
  "Grand Ridge Issaquah Fence Installation | Family Lots & Trails | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Grand Ridge, Issaquah, WA. Cedar, hogwire & hybrid fencing for larger family lots, NE Park Drive school streets, and Grand Ridge Park trail edges. Free quotes. (253) 455-1885.";

const GRAND_RIDGE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Grand Ridge, Issaquah?",
    answer:
      "The City of Issaquah generally does not require a building permit for residential fences six feet or shorter, but a permit is required over six feet or if the run sits in a mapped critical area, wetland buffer, or steep-slope overlay. Front-yard fencing is typically limited to four feet, and corner lots on NE Park Drive, Grand Ridge Drive, and Highlands Drive NE must keep sight-distance triangles clear. Lots that back to Grand Ridge Park or drain toward Canyon Creek can trigger extra review even at standard height. Separate from the city, many Grand Ridge addresses sit under the Issaquah Highlands Community Association architectural process. MyFence.com checks city overlays and your HOA packet for the specific address before we quote.",
  },
  {
    question:
      "What fence styles work best for Grand Ridge's larger lots and trail-edge yards?",
    answer:
      "Interior family lots near Grand Ridge Elementary and Central Park usually choose six-foot cedar privacy so kids, dogs, and after-school traffic stay on the right side of the line. On trail-edge parcels along Grand Ridge Park and Grand Ridge Drive, hogwire in a cedar frame keeps a sightline into the trees while still containing pets. Hybrid aluminum-and-cedar systems suit homeowners who want the cedar look without restaining on a windy plateau. Fence Genius maps grade so panels step with the lot instead of leaving crawl gaps on the downhill corner. We prepare a simple drawing and material list for HOA architectural review when your plat requires it.",
  },
  {
    question: "How much does fence installation cost in Grand Ridge, Issaquah?",
    answer:
      "Grand Ridge fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Longer backyard runs on larger lots, stepped posts toward the park, hand-digging around firs on 24th Avenue NE, custom gates, and HOA-required finishes can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Grand Ridge?",
    answer:
      "Most Grand Ridge residential projects finish in one to three working days after city (if needed) and HOA architectural paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from longer linear footage on larger lots, tight side yards near Central Park, or working around morning drop-off on NE Park Drive at Grand Ridge Elementary. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Grand Ridge?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Issaquah does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Grand Ridge lots often share trail easements, greenbelt edges, and irregular pins on older plats, so confirming the line before digging saves a redo. HOA review is a separate step from neighbor consent. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const GRAND_RIDGE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Grand Ridge Elementary",
    url: "https://grandridge.isd411.org/",
    description:
      "The Issaquah School District campus at 1739 NE Park Drive, a short walk from Central Park. Morning drop-off stacks on NE Park Drive, so fence gates and driveway turns on those blocks have to work around school traffic, not just curb appeal.",
  },
  {
    name: "Central Park",
    url: "https://www.issaquahwa.gov/Facilities/Facility/Details/Central-Park-21",
    description:
      "Ballfields, playground, and tennis courts at 1907 NE Park Drive — the weekday gathering spot for Grand Ridge households. Trail connections from the east side of the park drop into Grand Ridge Park without getting back on Highlands Drive.",
  },
  {
    name: "Grand Ridge Park",
    url: "https://www.wta.org/go-hiking/hikes/grand-ridge-park",
    description:
      "The forested corridor east of the neighborhood, with trailheads reachable from Central Park and Grand Ridge Drive. Hikers, bikes, and the occasional deer use the same edges your back fence has to hold.",
  },
  {
    name: "Black Nugget Park",
    url: "https://www.issaquahwa.gov/Facilities/Facility/Details/Black-Nugget-Park-19",
    description:
      "A neighborhood pocket park at 1953 24th Avenue NE with a court and open lawn. Families on the eastern streets treat it as the after-dinner walk when Central Park's fields are booked.",
  },
  {
    name: "Grand Ridge Plaza",
    url: "https://www.grandridgeplaza.com/",
    description:
      "The grocery and errand cluster on the plateau, minutes from NE Park Drive. Weeknight dinners and last-minute hardware runs happen here instead of dropping down to Front Street.",
  },
];

const GrandRidgePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Grand Ridge, Issaquah",
    pageTitle: "Grand Ridge Issaquah Fence Installation",
    description: META_DESCRIPTION,
    faqItems: GRAND_RIDGE_FAQS,
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
              href="/service-areas/issaquah"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Issaquah
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Grand Ridge, Issaquah WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Grand Ridge Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy for larger family yards, hogwire that keeps Grand Ridge Park in view, and hybrid systems built for plateau wind, school-street lots on NE Park Drive, and trail-edge pins along Grand Ridge Drive.
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
                  city="Grand Ridge, Issaquah"
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
                Room for Kids, Dogs, and a Real Backyard
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Grand Ridge sits on the Issaquah plateau east of I-90 exit 18, where Highlands Drive NE climbs to NE Park Drive and the grid opens into larger family lots than the denser village core. Grand Ridge Elementary and Central Park share the same street; Black Nugget Park sits a few blocks over on 24th Avenue NE. Homes here back to trail easements, greenbelts, and Grand Ridge Park more often than they back to an alley. Many plats fall under the Issaquah Highlands Community Association architectural process, while some older ridge lots carry their own CCRs. The design conversation starts with how the yard is used: after-school play, dogs, a grill pad, and a fence that still reads as part of the street.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built cedar, hogwire, and hybrid fences across Issaquah&apos;s plateau neighborhoods, including Grand Ridge runs and the Highlands, Providence Point, and Olde Town edges nearby. We use Fence Genius to capture grade before a post goes in the ground, so longer backyard stretches stay even and trail-edge lots get tight, pet-safe bottoms. The goal is a fence that contains the household without looking like a commercial screen dropped onto a park-facing lot — and a packet the HOA reviewer can approve on the first pass.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Grand Ridge Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Larger Family-Lot Layouts
                      </h3>
                      <p className="text-muted-foreground">
                        Grand Ridge backyards often run longer than a typical Highlands courtyard. We plan gates where kids actually exit toward Central Park, and we keep panel lines straight across a wide rear so the fence does not wander on a 120-foot stretch.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <FileCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Issaquah Highlands Review Packets
                      </h3>
                      <p className="text-muted-foreground">
                        We prepare drawings, heights, and material lists for Issaquah Highlands Community Association architectural review so you are not guessing what the committee wants on NE Park Drive or Grand Ridge Drive.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <PawPrint className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Pet-Safe Bottoms on Trail Edges
                      </h3>
                      <p className="text-muted-foreground">
                        Self-closing gates, no crawl gaps at the downhill corner, and latch heights that work when a dog shares the yard with Grand Ridge Park wildlife. Built for daily use, not just the listing photo.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Wind className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Plateau Wind and Fastener Details
                      </h3>
                      <p className="text-muted-foreground">
                        The ridge catches more wind than the Issaquah valley floor. We spec pre-stained cedar, stainless or hot-dipped fasteners, and optional steel posts where open fetches along the park edge load a six-foot bay.
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
                What Grand Ridge Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We needed the backyard closed so the kids could walk to Grand Ridge Elementary without the dog slipping out. They stepped the cedar along the downhill side and the gates latch every time. HOA packet went through on the first try.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Jordan in Grand Ridge</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot backs to the park trail. I did not want a solid wall, but I also did not want coyotes at the slider. Hogwire in a cedar frame was the right mix, and they hand-dug around the firs on Grand Ridge Drive.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Mei in Grand Ridge</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Longer backyard than our last house, and the reviewer wanted a specific stain. They put together a drawing and material list that matched the Highlands guidelines. Crew finished before school pickup on NE Park Drive got ugly.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Derek in Grand Ridge</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Grand Ridge Issaquah fence" />

        {/* 6. Photo Gallery — nearby Issaquah installs until Grand Ridge-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Issaquah"
          title="Recent Fence Work Near Grand Ridge"
          description="These photos are from nearby Issaquah jobs, including Issaquah Highlands, Providence Point, and Mirrormont. Same crew, same materials, and the same Fence Genius process we use on Grand Ridge family lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Issaquah" neighborhood="Grand Ridge" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Grand Ridge-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Grand Ridge Lot Width and Longer Rear Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Grand Ridge parcels are wider than the attached-home courtyards closer to the village core. A fence built as a series of short, racked bays can look busy across a 100-foot rear. We measure with Fence Genius, then keep the top rail even and step only where the lawn actually drops toward 24th Avenue NE or the park. On the longest stretches we add a mid-run gate so you are not walking the full perimeter to let the dog out.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Grand Ridge Trail Edges and Wildlife
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that touch Grand Ridge Park, the Central Park trail connectors, or the Grand Ridge Drive crossing share space with hikers, bikes, deer, and the occasional coyote. A solid six-foot wall can feel like you walled off the reason you bought on the plateau; an open run with no bottom detail lets a small dog out. Hogwire in a cedar frame, or cedar privacy on the side yards with an open park-facing stretch, is the typical mix. We walk the lot with you and mark where a solid panel helps and where it just blocks the trees.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Grand Ridge Plateau Wind vs. Valley Moisture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ridge sits higher and more open than Olde Town or the Talus hillside, so wind loads a privacy bay harder than it does on the valley floor. At the same time, north-facing yards near the park canopy still hold overnight damp. We spec pre-stained Western Red Cedar and stainless or hot-dipped fasteners, and we talk through steel posts on the most exposed park-edge corners. Cheap galvanized nails start showing rust streaks faster up here than people expect.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Grand Ridge HOA Review and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Addresses inside the Issaquah Highlands Community Association go through architectural review for style, height, and finish before construction. Some older Grand Ridge plats have their own CCRs — we read the packet that matches your address rather than assuming one rule for the whole ridge. We still follow Issaquah height rules — six feet in most side and rear yards, four feet in the front setback — and we plan post holes around the firs and maples that line NE Park Drive and the park backs. If your parcel sits in a critical-area overlay, we flag that before digging rather than after.
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
                Fence Installation Cost in Grand Ridge
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Grand Ridge fence is an investment in a larger family lot and, on the park edge, a view. Linear footage, gates, HOA finish requirements, and wind details move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Longer rear runs and hand-digging near mature trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Grand Ridge property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Grand Ridge property</Link>
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
                Popular Fence Styles in Grand Ridge
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior lots near Grand Ridge Elementary and Central Park. Full screening for after-school play, pre-stained cedar that holds up to plateau winters, and a look that fits Highlands architectural review.
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
                    Cedar frame with black mesh for park-facing lots that still want the trees. Dogs stay in, the trail stays in view, and the lighter footprint is easier around roots than a solid privacy wall.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when plateau wind and park-edge humidity make staining a chore. Strong enough for busy family yards without looking like a commercial lot.
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
                Our Grand Ridge Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Grand Ridge Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward the park or 24th Avenue NE, map trees, and check whether the parcel sits in an Issaquah critical-area overlay. Fence Genius captures grade so panels are built to the actual drop, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Grand Ridge Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We prepare a drawing and material list for the Issaquah Highlands Community Association when your address is inside IHCA. Older Grand Ridge plats follow that community&apos;s packet. We still document Issaquah height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Grand Ridge install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Grand Ridge Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off NE Park Drive, Grand Ridge Drive, and 24th Avenue NE. We schedule around Grand Ridge Elementary drop-off when the job sits on the school blocks, hand-dig near mature roots, and clean up at the end of each day. Most jobs wrap in one to three days.
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
          title="Grand Ridge Fence Installation FAQs"
          items={GRAND_RIDGE_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Issaquah"
        neighborhoodName="Grand Ridge"
        attractions={GRAND_RIDGE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Grand Ridge families are served by the{" "}
              <a
                href="https://www.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah School District
              </a>
              . Many households walk to{" "}
              <a
                href="https://grandridge.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Grand Ridge Elementary
              </a>
              {" "}
              on NE Park Drive, then later{" "}
              <a
                href="https://pacificcascade.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Pacific Cascade Middle School
              </a>
              {" "}
              on SE Issaquah-Fall City Road and{" "}
              <a
                href="https://skyline.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Skyline High School
              </a>
              . Attendance boundaries do not automatically match every ridge address — confirm yours with the district. Lots inside the planned community follow{" "}
              <a
                href="https://www.issaquahhighlands.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah Highlands Community Association
              </a>{" "}
              architectural review.
            </p>
            <p>
              Groceries and weeknight errands stay on the plateau at{" "}
              <a
                href="https://www.grandridgeplaza.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Grand Ridge Plaza
              </a>
              . Weekends split between playground time at{" "}
              <a
                href="https://www.issaquahwa.gov/Facilities/Facility/Details/Central-Park-21"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Central Park
              </a>
              , trail miles through{" "}
              <a
                href="https://www.wta.org/go-hiking/hikes/grand-ridge-park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Grand Ridge Park
              </a>
              , and bike sessions at{" "}
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
                href="https://www.issaquahwa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The City of Issaquah
              </a>{" "}
              handles permits and parks; I-90 exits 17 and 18 connect you to downtown, Costco, and the rest of the Eastside.
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
                Also Serving Nearby Issaquah Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Issaquah. From Grand Ridge we also work in Issaquah Highlands next door, Providence Point toward the lake, Olde Town at the base of the hill, and Talus on Cougar Mountain.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah">Issaquah overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah-highlands">Issaquah Highlands</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah/providence-point">Providence Point</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah/olde-town">Olde Town</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah/talus">Talus</Link>
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
                Ready to Enhance Your Grand Ridge Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Grand Ridge. We&apos;ll walk the lot, talk through HOA review, pets, and trail-edge privacy, and quote a fence that fits your plateau yard.
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

export default GrandRidgePage;
