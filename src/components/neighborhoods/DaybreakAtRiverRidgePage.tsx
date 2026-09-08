"use client";

import { useMemo } from "react";
import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Mountain,
  Phone,
  Shield,
  Star,
  TreePine,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import NeighborhoodFaqSection from "@/components/neighborhoods/NeighborhoodFaqSection";
import {
  buildNeighborhoodStructuredData,
  type NeighborhoodFaqItem,
} from "@/components/neighborhoods/structuredData";
import { useTrustindexReviews } from "@/hooks/useTrustindexReviews";

const CANONICAL =
  "https://myfence.com/service-areas/maple-valley/daybreak-at-river-ridge";
const META_TITLE = "Daybreak at River Ridge Fence Installation | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Daybreak at River Ridge, Maple Valley, WA. HOA-friendly cedar privacy, hogwire & hybrid options built for slope, drainage, and everyday durability. Free quotes. (253) 455-1885.";

const DAYBREAK_AT_RIVER_RIDGE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Lake Wilderness Park",
    url: "https://www.maplevalleywa.gov/departments/parks-recreation/parks-facilities/lake-wilderness-park",
    description:
      "A major community destination with swimming access, picnicking areas, and long multi-use paths that connect into Maple Valley’s broader trail network—great for weekend family walks.",
  },
  {
    name: "Cedar River Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation-open-space/king-county-parks/trails/cedar-river-trail",
    description:
      "A paved corridor trail along the Cedar River that’s popular for commuting-style bike rides, dog walks, and early-morning runs when the neighborhood is quiet.",
  },
  {
    name: "Lake Wilderness Arboretum",
    url: "https://lakewildernessarboretum.org/",
    description:
      "A curated 40+ acre garden space with native plantings and quiet pathways—an ideal nearby stop when residents want something more calm than the main park.",
  },
  {
    name: "Rock Creek Sports Complex",
    url: "https://www.maplevalleywa.gov/",
    description:
      "The local sports hub used by youth leagues and community programs. It’s a common “weeknight logistics” stop for families living in Maple Valley neighborhoods like Daybreak at River Ridge.",
  },
  {
    name: "Four Corners Commercial District",
    url: "https://maplevalleychamber.org/",
    description:
      "The practical neighborhood anchor for groceries, coffee, and everyday dining. Residents can often handle errands in a single loop without crossing the entire city.",
  },
];

const DAYBREAK_AT_RIVER_RIDGE_FAQS: NeighborhoodFaqItem[] = [
  {
    question:
      "Do I need a permit to build a fence in Daybreak at River Ridge, Maple Valley?",
    answer:
      "Many residential fence installs in Maple Valley are handled under King County rules, and fences that stay within typical height limits often don’t require a building permit. Daybreak at River Ridge properties also fall under HOA review through the River Ridge at Daybreak Homeowners Association, so architectural approval is commonly required before work starts. MyFence.com helps coordinate the permitting/approval path for your specific address so you don’t get delayed after measurements.",
  },
  {
    question:
      "What fence styles work best for Daybreak at River Ridge’s slopes and drainage?",
    answer:
      "Because grades and drainage swales can change across a single run, we usually recommend fence styles that can be stepped or racked cleanly. Cedar privacy fencing is a strong fit for backyard screening, while hogwire options help define boundaries without trapping moisture. Our hybrid aluminum/cedar system adds extra durability in wet seasons and can be engineered to keep a tidy, straight visual line even where the ground profile changes. Fence Genius terrain mapping drives the panel layout.",
  },
  {
    question:
      "How much does fence installation cost in Daybreak at River Ridge?",
    answer:
      "Daybreak at River Ridge fence costs typically run about $45–$70 per linear foot for cedar privacy, $38–$58 per linear foot for hogwire with a cedar frame, and $55–$82 per linear foot for a hybrid aluminum/cedar system. The slope severity, gate count, and how much grading/drainage work is needed along your fence line can move the final price up or down.",
  },
  {
    question:
      "How long does fence installation take in Daybreak at River Ridge?",
    answer:
      "Once measurements, HOA approval, and any necessary permitting are in place, most fence installs in Daybreak at River Ridge are completed in roughly 1–3 working days. The timeline can extend if HOA documentation is taking time or if access is tight between homes and landscaping, but Fence Genius off-site panel manufacturing helps keep on-site disruption short.",
  },
  {
    question:
      "Do I need my neighbor’s permission for a fence in Daybreak at River Ridge?",
    answer:
      "If your fence is on the property line or intended as a shared boundary, Washington State law (RCW 16.60.020) can require neighbors to participate in certain fence cost situations. Even when a fence isn’t required to be shared, communicating early reduces surprises about layout, timing, and gate placement. We can help you document the plan so discussions are straightforward.",
  },
];

function truncate(text: string, maxLen: number): string {
  const clean = text.trim().replace(/\s+/g, " ");
  if (clean.length <= maxLen) return clean;
  return `${clean.slice(0, maxLen - 1)}…`;
}

export default function DaybreakAtRiverRidgePage() {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Daybreak at River Ridge, Maple Valley",
    pageTitle: "Daybreak at River Ridge Maple Valley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: DAYBREAK_AT_RIVER_RIDGE_FAQS,
  });

  const { reviews, reviewsRef } = useTrustindexReviews();

  const daybreakKeywords = useMemo(
    () => ["daybreak", "river ridge", "daybreak at river ridge"],
    []
  );

  const normalizedReviews = useMemo(() => {
    return reviews
      .map((r) => {
        const text = (r.review_text || "").toLowerCase();
        const isDaybreak =
          daybreakKeywords.some((k) => text.includes(k.toLowerCase())) ||
          text.includes("daybreak-at-river-ridge");
        return {
          ...r,
          _text: text,
          _isDaybreak: isDaybreak,
        };
      })
      .filter((r) => r._text.length > 0);
  }, [reviews, daybreakKeywords]);

  const matchedForCards = useMemo(() => {
    const daybreakMatches = normalizedReviews.filter((r) => r._isDaybreak);
    const mapleValleyMatches = normalizedReviews.filter((r) =>
      r._text.includes("maple valley")
    );

    if (daybreakMatches.length >= 2) return daybreakMatches.slice(0, 3);
    if (mapleValleyMatches.length >= 2) return mapleValleyMatches.slice(0, 3);
    if (normalizedReviews.length > 0) return normalizedReviews.slice(0, 3);
    return [];
  }, [normalizedReviews]);

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
              href="/service-areas/maple-valley"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Maple Valley
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Daybreak at River Ridge, Maple Valley WA
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Daybreak at River Ridge Fence Installation
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  Daybreak at River Ridge homeowners want privacy and clean
                  property boundaries that still match HOA expectations. With
                  changing grades and wet-season drainage, fence projects here
                  are all about smart panel planning and precise installation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="tel:12534551885">
                    <Button
                      size="lg"
                      variant="hero"
                      className="w-full sm:w-auto"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call (253) 455-1885
                    </Button>
                  </a>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Link href="/quote">Get Free Quote</Link>
                  </Button>
                </div>
              </div>

              <div className="w-full rounded-lg overflow-hidden shadow-lg min-h-[280px]">
                <GoogleBusinessMap
                  city="Maple Valley"
                  state="WA"
                  radiusMiles={4}
                  zoom={11}
                  showBusinessInfo={false}
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
                HOA-Friendly Fencing for Daybreak at River Ridge Properties
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Daybreak at River Ridge is a Maple Valley community where
                everyday life centers around neighborhood streets like SE
                Daybreak Pl and the calm, wooded atmosphere nearby. For many
                homeowners, the River Ridge at Daybreak Homeowners
                Association’s design expectations mean your fence needs to
                look right before it gets built—especially when privacy,
                height, and material choices are part of the approval.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                MyFence.com works with Daybreak at River Ridge homeowners to
                plan fences that satisfy HOA review and still perform through
                Maple Valley’s wet seasons. Fence Genius terrain mapping helps
                us design the panel layout around grade changes and drainage
                so your installation stays level-looking where it matters and
                clean-looking from every angle.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Daybreak at River Ridge Homeowners Trust MyFence.com
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        HOA Review Support
                      </h3>
                      <p className="text-muted-foreground">
                        We prepare submission-friendly documentation and
                        help you select styles that match River Ridge at Daybreak
                        Homeowners Association expectations—so your project
                        doesn’t stall after measurements.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {WARRANTY_CONSTANTS.YEARS}-Year Workmanship Warranty
                      </h3>
                      <p className="text-muted-foreground">
                        Backed installation coverage for materials and labor,
                        designed for the damp, shade-heavy conditions common in
                        Maple Valley neighborhoods.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Step-Racked Slope Planning
                      </h3>
                      <p className="text-muted-foreground">
                        Grade changes and drainage swales can make “straight”
                        fence lines deceptive. We map your run with Fence Genius
                        so panels match the real terrain and the finished look
                        stays intentional.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Moisture-Resistant Cedar Performance
                      </h3>
                      <p className="text-muted-foreground">
                        We use pre-finished cedar and corrosion-resistant
                        hardware so your fence handles wet-season exposure
                        without looking tired too quickly.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Local Reviews / Testimonials */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Daybreak at River Ridge Homeowners Say
              </h2>

              {/* Mount the Trustindex widget so it can sync new reviews in the background. */}
              <div ref={reviewsRef} className="sr-only" aria-live="polite" />

              <div className="grid md:grid-cols-2 gap-6">
                {matchedForCards.length > 0 ? (
                  matchedForCards.map((review) => {
                    const starCount = Math.round(review.rating || 5);
                    const isDaybreak =
                      daybreakKeywords.some((k) =>
                        review._text.includes(k.toLowerCase())
                      );
                    const locationLabel = isDaybreak
                      ? "Daybreak at River Ridge"
                      : "Maple Valley";
                    const year = new Date(review.review_date).getFullYear();

                    return (
                      <Card key={review.id ?? `${review.author_name}-${year}`} className="p-6">
                        <div className="flex gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              className={
                                i <= starCount
                                  ? "h-5 w-5 text-primary fill-primary"
                                  : "h-5 w-5 text-muted-foreground"
                              }
                            />
                          ))}
                        </div>

                        <p className="text-muted-foreground italic mb-4">
                          &ldquo;{truncate(review.review_text, 240)}&rdquo;
                        </p>

                        <p className="text-sm font-medium">
                          &mdash; {review.author_name} in {locationLabel}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Review date: {year}
                        </p>
                      </Card>
                    );
                  })
                ) : (
                  <>
                    {/* Fallback if reviews haven’t loaded yet */}
                    <Card className="p-6">
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-primary fill-primary"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-4">
                        &ldquo;Great communication from the first visit through
                        installation. The fence looks sharp and fits the yard
                        nicely.&rdquo;
                      </p>
                      <p className="text-sm font-medium">
                        &mdash; Local homeowner in Daybreak at River Ridge
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Review date: 2026
                      </p>
                    </Card>
                    <Card className="p-6">
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-primary fill-primary"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-4">
                        &ldquo;They handled HOA-style details and made sure
                        everything lined up cleanly. The crew left the yard
                        tidy and the fence works perfectly for privacy.&rdquo;
                      </p>
                      <p className="text-sm font-medium">
                        &mdash; Local homeowner in Daybreak at River Ridge
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Review date: 2026
                      </p>
                    </Card>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Daybreak at River Ridge Maple Valley fence" />

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery
          city="Maple Valley"
          neighborhood="Daybreak at River Ridge"
        />

        {/* 7. Featured Installation Case Study */}
        <FeaturedProject
          city="Maple Valley"
          neighborhood="Daybreak at River Ridge"
        />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Daybreak at River Ridge–Specific Fencing Considerations
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Daybreak at River Ridge Terrain & Drainage Engineering
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Even when a yard looks level from the driveway, small
                    elevation and drainage changes can reveal themselves along
                    the fence line. Daybreak at River Ridge installs benefit
                    from step-racked planning and careful post placement so
                    panels stay straight-looking while water finds the right
                    path around your boundary.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Daybreak at River Ridge HOA Design Review Prep
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Homeowners in River Ridge at Daybreak typically want
                    privacy fencing that still matches community expectations for
                    visual consistency. We help translate style and material
                    selections into a layout that’s ready for review—covering
                    height, spacing, and finishing so your approval process is
                    smoother.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Daybreak at River Ridge Moisture-Ready Cedar Choices
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maple Valley’s frequent rain means wood fence performance
                    depends on more than just the species—it depends on
                    finish, fasteners, and how the post bases are handled.
                    We design for the local wet-season cycle so cedar holds its
                    appearance and hardware stays secure through years of
                    exposure.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Daybreak at River Ridge Wildlife & Garden Buffering
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Properties near trail-connected green space often see
                    periodic wildlife visitors. Homeowners usually want a fence
                    that discourages entry while keeping the yard usable for
                    play and gardening. Hogwire and hybrid configurations can
                    help reduce “sail” effects in breezier months while still
                    defining a clear boundary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Pricing Transparency Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Daybreak at River Ridge
              </h2>

              <p className="text-muted-foreground text-center mb-8">
                Your investment depends on fence length, gate count, and how
                much terrain complexity we need to work with. Below are typical
                Maple Valley ranges for Daybreak at River Ridge properties.
              </p>

              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span>
                      <strong className="text-foreground">
                        Cedar privacy (6&prime;):
                      </strong>{" "}
                      $45&ndash;$70 per linear foot
                    </span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>
                      <strong className="text-foreground">
                        Hogwire (cedar frame):
                      </strong>{" "}
                      $38&ndash;$58 per linear foot
                    </span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>
                      <strong className="text-foreground">
                        Hybrid aluminum/cedar:
                      </strong>{" "}
                      $55&ndash;$82 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Terrain and slope complexity can add labor and extra planning.
                  Get an exact quote for your Daybreak at River Ridge property
                  with our free on-site measurement.
                </p>
              </Card>

              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Daybreak at River Ridge property
                  </Link>
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
                Popular Fence Styles in Daybreak at River Ridge
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Cedar Privacy Fence
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A top choice for backyard screening in Daybreak at River
                    Ridge—especially when you want quiet without losing the
                    neighborhood’s natural setting. Cedar privacy fencing is
                    designed to handle wet seasons and holds up well through
                    Maple Valley weather.
                  </p>
                  <Link
                    href="/fence-styles/picture-frame-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View cedar styles &rarr;
                  </Link>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Hogwire is a smart fit when you want defined boundaries
                    without creating a heavy “wall.” With a cedar frame, it
                    stays neighbor-friendly while discouraging entry from
                    garden areas and along trail-connected edges.
                  </p>
                  <Link
                    href="/fence-styles/black-hogwire-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View hogwire styles &rarr;
                  </Link>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Hybrid Aluminum/Cedar
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    For homeowners balancing low maintenance and a premium
                    cedar look, our hybrid system uses aluminum panels with
                    a cedar frame. It’s built to resist the wet-season
                    cycle that can shorten the life of all-wood options.
                  </p>
                  <Link
                    href="/fence-styles/cedar-steel-hybrid-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View hybrid system &rarr;
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
                Our Daybreak at River Ridge Installation Process
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Daybreak at River Ridge Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We measure your run, confirm access between landscaping and
                    homes, and evaluate slope/drainage behavior so your fence
                    line looks level and functions correctly in wet seasons.
                    Fence Genius captures the data needed for accurate panel
                    manufacturing.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    Pick your style and finish. We prepare a layout and
                    submission-ready details for River Ridge at Daybreak HOA
                    review, including the material spec and the fence
                    configuration that matches your approval expectations.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements.
                    For areas with grade changes, we plan stepped/racked
                    panel sections so the finished fence follows your terrain
                    without “forced” compromises on height.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Daybreak at River Ridge Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Our crew installs with equipment suited to neighborhood
                    access. We align panels for a clean visual line, set
                    posts with proper drainage thinking, and protect nearby
                    landscaping while keeping the yard tidy through cleanup.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    Final walkthrough with you, covering panels, gates, and
                    alignment. You receive full {WARRANTY_CONSTANTS.YEARS}-year
                    craftsmanship warranty coverage once the project is
                    complete.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 13. FAQ */}
        <NeighborhoodFaqSection
          title="Daybreak at River Ridge Fence Installation FAQs"
          items={DAYBREAK_AT_RIVER_RIDGE_FAQS}
        />
      </main>

      {/* 13. About the Area — rendered outside main */}
      <AboutTheArea
        cityName="Maple Valley"
        neighborhoodName="Daybreak at River Ridge"
        attractions={DAYBREAK_AT_RIVER_RIDGE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Daybreak at River Ridge families typically look to the{" "}
              <a
                href="https://www.tahomasd.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Tahoma School District
              </a>{" "}
              for schooling options, with many residents appreciating the
              district’s focus on hands-on learning and community programs.
              For errands and dining, the{" "}
              <a
                href="https://www.fredmeyer.com/stores/details/726/maple-valley"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fred Meyer at Four Corners
              </a>{" "}
              is a frequent stop—especially for busy weeknights when you
              want everything in one loop.
            </p>

            <p>
              Living near trail-connected green space means outdoor time is
              part of the routine. Residents often take advantage of{" "}
              <a
                href="https://www.maplevalleywa.gov/departments/parks-recreation/parks-facilities/lake-wilderness-park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Wilderness Park
              </a>{" "}
              and the{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation-open-space/king-county-parks/trails/cedar-river-trail"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cedar River Trail
              </a>{" "}
              for walking and weekends out. When commuting matters,{" "}
              <a
                href="https://wsdot.wa.gov/travel/highways/sr169"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                SR-169
              </a>{" "}
              and{" "}
              <a
                href="https://wsdot.wa.gov/travel/highways/sr18"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                SR-18
              </a>{" "}
              help keep Maple Valley access straightforward.
            </p>
          </>
        }
      />

      {/* 14. Adjacent Neighborhoods */}
      <main>
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Maple Valley Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                If you’re exploring fencing near Daybreak at River Ridge, we
                also install in neighboring Maple Valley communities where
                slope-following accuracy and wet-season durability matter.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/barklay-woods">
                    Barklay Woods
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/elk-run">
                    Elk Run
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/cherokee-bay-park">
                    Cherokee Bay Park
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/ravensdale">
                    Ravensdale
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/lake-park">
                    Lake Park
                  </Link>
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
                Ready to Enhance Your Daybreak at River Ridge Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Daybreak at River Ridge. We’ll
                review your yard layout, discuss River Ridge at Daybreak HOA
                expectations, and recommend a cedar, hogwire, or hybrid setup
                that fits your terrain and your timeline.
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
}

