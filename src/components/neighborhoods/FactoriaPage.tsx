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
  Volume2,
  Home,
  Building2,
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

const CANONICAL = "https://myfence.com/service-areas/bellevue/factoria";
const META_TITLE =
  "Factoria Bellevue Fence Installation | I-90 Corridor Privacy | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Factoria, Bellevue, WA. Cedar, hogwire & hybrid fencing for freeway-adjacent lots, Monthaven hillsides, and family yards near Newport High. Free quotes. (253) 455-1885.";

const FACTORIA_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Factoria, Bellevue?",
    answer:
      "The City of Bellevue does not require a building permit for a typical residential fence unless it is taller than eight feet, sits in a critical area or critical-area buffer, or is built of concrete block or similar masonry. Factoria lots still have to follow Land Use Code 20.20.400 for height, setbacks, and sight triangles at corners such as Factoria Boulevard SE and SE 38th Street. Townhome and condo associations along the commercial core often want a drawing and material list before you install. MyFence.com checks the overlays and any HOA packet for your Factoria address before we quote.",
  },
  {
    question:
      "What fence styles work best for Factoria's freeway noise and mixed lots?",
    answer:
      "Solid six-foot cedar privacy is the usual pick on streets that sit against I-90 or I-405, because a continuous wood face cuts more traffic sound than an open mesh. Monthaven hillside lots near Tyee Middle School often mix cedar on the neighbor sides with hogwire on a downhill edge so the ravine stays in view. Hybrid aluminum-and-cedar systems suit owners who want the cedar look without restaining in the extra exhaust and moisture that hangs along the interchange. Fence Genius maps grade so panels step on the Monthaven ridge instead of leaving crawl gaps.",
  },
  {
    question: "How much does fence installation cost in Factoria, Bellevue?",
    answer:
      "Factoria fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Stepped runs on the Monthaven ridge, hand-digging around firs on older side yards, custom gates, and HOA drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Factoria?",
    answer:
      "Most Factoria residential projects finish in one to three working days after any city or association paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from tight side yards off Factoria Boulevard SE, stepped posts on Monthaven, or working around weekday pickup at Newport High. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Factoria?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Bellevue does not require a signature. A fence taller than six feet often needs a recorded agreement with the adjoining owner. Factoria has a mix of 1960s–1980s pin locations on older streets and newer townhome plats near the mall, so confirming the line before digging saves a redo. MyFence.com can help share a simple site plan covering height, style, and who pays for which stretch.",
  },
];

const FACTORIA_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Newport High School",
    url: "https://www.bsd405.org/schools/high-schools/newport",
    description:
      "The Bellevue School District campus on Factoria Boulevard SE, a few blocks from the I-90 ramps. Afternoon pickup and Friday-night games set the weekly rhythm for nearby family yards, which is why so many Factoria fences need self-closing gates and no crawl gaps at the bottom.",
  },
  {
    name: "Coal Creek Natural Area",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/coal-creek-natural-area",
    description:
      "Second-growth forest and creek habitat on the south edge of Factoria, with trailheads that Factoria and Newcastle households share. Lots that back toward the ravine often want screening from neighbors without a solid wall across the trees.",
  },
  {
    name: "Eastgate Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/eastgate-park",
    description:
      "Playfields and a playground just east of the Factoria commercial core. After-school traffic from this park and Tyee Middle is part of why Monthaven and Eastgate-edge yards get used hard on weeknights.",
  },
  {
    name: "Tyee Middle School",
    url: "https://www.bsd405.org/schools/middle-schools/tyee",
    description:
      "The district campus on the Monthaven side of the neighborhood, next to Sunset Ravine. Sixth-through-eighth-grade carpools stack on the residential streets east of Factoria Boulevard, and those same lots are where we install a lot of pet-safe cedar.",
  },
  {
    name: "Mountains to Sound Greenway",
    url: "https://mtsgreenway.org/",
    description:
      "The regional trail corridor that follows I-90 past Factoria along SE 36th Street. Cyclists and walkers use it as the non-freeway connection toward Issaquah and downtown Bellevue; backyard fences along this strip often double as a noise buffer from the interstate.",
  },
];

const FactoriaPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Factoria, Bellevue",
    pageTitle: "Factoria Bellevue Fence Installation",
    description: META_DESCRIPTION,
    faqItems: FACTORIA_FAQS,
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
                    Serving Factoria, Bellevue WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Factoria Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for Factoria&apos;s split personality — solid cedar privacy against I-90 and I-405, family-yard gates near Newport High, and stepped runs on the Monthaven ridge above Sunset Ravine.
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
                  city="Factoria, Bellevue"
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
                Privacy Fencing Where Two Freeways Meet South Bellevue
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Factoria sits at the I-90 and I-405 interchange, with Factoria Boulevard SE running through a commercial core of offices, grocery, and the indoor mall that still functions as the neighborhood&apos;s weekday hub. Single-family streets fill in around that core: a pocket between I-405 and Newport High School, and Monthaven on the east ridge next to Tyee Middle School and Sunset Ravine. There is no single master association like some Eastside planned communities — townhome and condo boards cluster near the mall, while many 1960s–1980s houses on SE 38th Street and 129th Place SE have no architectural committee at all. The fence conversation starts with the lot: freeway noise, kids walking to Newport, slope toward Coal Creek, and whichever small HOA (if any) owns the design rules.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across south Bellevue, including Factoria runs that sit a few hundred feet from the interstate and Monthaven lots that drop toward the ravine. We use Fence Genius to capture grade and post spacing before a hole is dug, so a six-foot privacy wall along a freeway-facing side yard stays even, and a hillside panel on Monthaven tracks the lawn instead of leaving a gap a dog can use. The goal is a fence that belongs on your street — not a mall-adjacent panel dropped onto a ridge lot, and not an open mesh where you actually needed a sound buffer.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Factoria Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        I-90 and I-405 Noise Buffering
                      </h3>
                      <p className="text-muted-foreground">
                        Continuous cedar faces along freeway-adjacent side yards. We plan height and solid vs. open runs with you so the wall actually cuts tire roar instead of decorating a sight line you did not need to keep.
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
                        Full coverage on materials and labor, including hardware chosen for south Bellevue humidity and the extra grit that blows off the interchange. We stand behind the install through wet winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        School-Area Family Yards
                      </h3>
                      <p className="text-muted-foreground">
                        Self-closing gates, no crawl gaps, and latch heights that work for households walking to Newport High or Tyee Middle. Built for after-school backyard use, not just the view from Factoria Boulevard.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Small HOA Packets, Not Guesswork
                      </h3>
                      <p className="text-muted-foreground">
                        Townhome and condo boards near the commercial core often want a one-page drawing. We assemble height, color, and material notes so the first submission is usable — and we still follow Bellevue height rules when there is no board at all.
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
                What Factoria Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our side yard faces the I-90 on-ramp noise. They put up a solid cedar run and it actually changed how we use the patio. Crew worked around pickup traffic at Newport without blocking the street all day.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Factoria</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Monthaven lot, slope toward the ravine. They stepped the panels so the dog cannot duck under, kept the downhill edge more open, and hand-dug around the firs. Looks like it belongs with the older houses on our street.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Evan in Factoria</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Townhome board wanted a sketch, not a 20-page packet. They sent height, stain, and post notes the first week and we got a yes. Appreciate that they did not treat us like a giant planned community.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marisol in Factoria</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Factoria Bellevue fence" />

        {/* 6. Photo Gallery — nearby Bellevue installs until Factoria-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Bellevue"
          title="Recent Fence Work Near Factoria"
          description="These photos are from nearby Bellevue jobs, including Sherwood Forest and other south and east Bellevue lots. Same crew, same materials, and the same Fence Genius process we use on Factoria and Monthaven properties."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Bellevue" neighborhood="Factoria" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Factoria-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Factoria Freeway Noise vs. Open Views
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots within a few blocks of I-90, I-405, or the Factoria Boulevard ramps hear tire roar that a hogwire panel will not touch. A continuous cedar face on the freeway side, with hogwire or a lower run where you still want light, is the mix we walk with most owners. We mark the line on site so you are not guessing from a catalog photo. Open mesh belongs on Monthaven downhill edges that look into Sunset Ravine — not on the side that faces the interchange.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Monthaven Grade and Coal Creek Drainage
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Monthaven sits on a ridge east of the commercial core. A fence built as one long level line either buries the bottom rail or leaves a gap. Fence Genius maps the drop, then we step or rack panels so the top stays even and the bottom tracks the lawn. On the steepest cuts toward Coal Creek we shorten panel bays rather than forcing a six-foot bay across a drop. We also watch how water already moves on the lot so posts do not dam a swale that already drains toward the ravine.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Factoria HOA Review and Bellevue Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Townhome and condo associations near the mall often want stain color, height, and a simple site sketch. Older streets between I-405 and Newport High usually have no board. Either way we follow Bellevue Land Use Code 20.20.400: typical side and rear runs stay at six feet unless you have a recorded neighbor agreement for something taller, and corner lots keep sight triangles clear at intersections like SE 38th and Factoria Boulevard. If the parcel sits in a mapped critical-area buffer along Coal Creek, we flag that before digging.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Tight Access Off Factoria Boulevard
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Factoria&apos;s street grid is not a tidy grid. Cul-de-sacs and unconnected local streets mean equipment has to stay compact, and weekday traffic on Factoria Boulevard SE and SE 36th Street is real. Prefabricated panels cut the time a trailer sits in front of your house. We schedule around Newport High pickup when the lot is on that walk-shed, and we hand-dig near the firs that line older side yards instead of chewing roots with an auger.
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
                Fence Installation Cost in Factoria
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Factoria fence is an investment in privacy from the interchange and, on family streets, a yard the kids can actually use. Slope, gates, and association drawings move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Stepped runs on Monthaven and hand-digging near mature trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Factoria property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Factoria property</Link>
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
                Popular Fence Styles in Factoria
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on freeway-adjacent lots and school-area yards near Newport High. Full screening, pre-stained cedar that holds up to south Bellevue winters, and a look that fits both 1970s ranches and newer townhome backs.
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
                    Cedar frame with black mesh for Monthaven downhill edges that still want the ravine. Dogs stay in, the trees stay in view, and the lighter footprint is easier around roots than a solid privacy wall.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when interchange grit and humidity make staining a chore. Strong enough for busy family yards without looking like a commercial lot behind the mall.
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
                Our Factoria Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Factoria Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note freeway-facing sides vs. ravine edges, map trees, and check whether the parcel sits in a Bellevue critical-area overlay along Coal Creek. Fence Genius captures grade so Monthaven panels are built to the actual drop.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Factoria Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If a townhome or condo board needs a sketch, we prepare height, stain, and material notes. If there is no board, we still document Bellevue height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Factoria install days are mostly setting posts and hanging finished sections on streets that already have enough traffic.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Factoria Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to cul-de-sacs off Factoria Boulevard, SE 38th, and 129th Place SE. Hand-digging near mature roots, stepped posts on Monthaven, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Factoria Fence Installation FAQs"
          items={FACTORIA_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Bellevue"
        neighborhoodName="Factoria"
        attractions={FACTORIA_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Factoria sits in the{" "}
              <a
                href="https://www.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue School District
              </a>
              , so most families feed{" "}
              <a
                href="https://www.bsd405.org/schools/elementary-schools/eastgate"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Eastgate Elementary
              </a>
              {" "}
              or{" "}
              <a
                href="https://www.bsd405.org/schools/elementary-schools/puesta-del-sol"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Puesta del Sol Elementary
              </a>
              , then{" "}
              <a
                href="https://www.bsd405.org/schools/middle-schools/tyee"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Tyee Middle School
              </a>{" "}
              on the Monthaven side, and later{" "}
              <a
                href="https://www.bsd405.org/schools/high-schools/newport"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Newport High School
              </a>{" "}
              on Factoria Boulevard. Weekday life is built around that school cluster and a short hop to the{" "}
              <a
                href="https://kcls.org/locations/newport-way/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Newport Way Library
              </a>{" "}
              on SE Newport Way.
            </p>
            <p>
              Groceries and errands stay inside the Factoria commercial core rather than requiring a drive into downtown Bellevue. Weekends split between playfields at{" "}
              <a
                href="https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/eastgate-park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Eastgate Park
              </a>
              , trail miles in{" "}
              <a
                href="https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/coal-creek-natural-area"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Coal Creek Natural Area
              </a>
              , and the I-90 path along the{" "}
              <a
                href="https://mtsgreenway.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Mountains to Sound Greenway
              </a>
              .{" "}
              <a
                href="https://bellevuewa.gov/city-government/departments/community-development/neighborhoods/neighborhood-improvement/neighborhood-enhancement-program/neighborhood-areas/eastgate-factoria"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The City of Bellevue&apos;s Eastgate/Factoria neighborhood program
              </a>{" "}
              is the local planning home for parks and street projects in this corner of south Bellevue.
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
                We install fences throughout Bellevue. From Factoria we also work in Newport Hills just to the southwest, Newcastle along Coal Creek, Somerset on the hillside above I-90, and Sherwood Forest farther east. Eastgate sits immediately east of Monthaven.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newport-hills">Newport Hills</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newcastle">Newcastle</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/somerset">Somerset</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/sherwood-forest">
                    Sherwood Forest
                  </Link>
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
                Ready to Enhance Your Factoria Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Factoria. We&apos;ll walk the freeway-facing sides, talk through noise vs. view, and quote a fence that fits your south Bellevue lot.
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

export default FactoriaPage;
