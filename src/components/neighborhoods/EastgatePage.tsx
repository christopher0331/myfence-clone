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
  Mountain,
  Droplets,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import OptimizedImage from "@/components/OptimizedImage";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import AboutTheArea from "@/components/AboutTheArea";

const CANONICAL = "https://myfence.com/service-areas/bellevue/eastgate";
const META_TITLE = "Eastgate Fence Installation | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Eastgate, Bellevue for hillside lots, drainage-sensitive yards, and privacy needs near I-90, Factoria, and Eastgate Park. Free quotes. (253) 455-1885.";

export default function EastgatePage() {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Eastgate, Bellevue",
    pageTitle: "Eastgate Bellevue Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit for a fence in Eastgate, Bellevue?",
        answer:
          "Bellevue generally requires permits for fences that exceed height limits or involve certain site conditions, and Eastgate properties may also be affected by drainage, easements, or slope-related review. MyFence.com helps confirm the applicable requirements before installation.",
      },
      {
        question: "What fence styles work best for Eastgate hillside lots?",
        answer:
          "Cedar privacy, hogwire, and hybrid aluminum/cedar systems perform well in Eastgate when they are designed for grade changes and runoff. We use terrain-aware layout methods to choose racked or stepped construction and set posts for long-term stability.",
      },
      {
        question: "How much does fence installation cost in Eastgate?",
        answer:
          "Pricing varies by fence style, access, slope, tree work, and drainage conditions. Eastgate projects with hillside grading or custom panel work often cost more than flat-lot installs, so we recommend a site visit for exact pricing.",
      },
      {
        question: "Can you work around mature trees and landscaping in Eastgate?",
        answer:
          "Yes. Eastgate has many wooded yards and established plantings, so we plan post locations carefully, reduce disturbance near roots when possible, and use installation methods that protect landscaping while still delivering a durable fence.",
      },
    ],
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
              href="/bellevue"
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
                    Serving Eastgate, Bellevue WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Eastgate Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence solutions for Eastgate homes near I-90, Factoria, and Eastgate Park. We build privacy, pet, and property-line fencing that works with hillside grades, drainage, and mature landscaping.
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
                  city="Bellevue"
                  state="WA"
                  radiusMiles={5}
                  zoom={11}
                  showBusinessInfo={false}
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

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing for Eastgate's Hillside and Commuter-Friendly Homes
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Eastgate blends established residential streets, wooded pockets, and quick access to the I-90 corridor, which makes fence planning feel different from flatter Bellevue neighborhoods. Lots near Eastgate Park, Lakemont Boulevard SE, and the edges of Factoria often face slope changes, drainage runoff, and privacy needs that call for a more deliberate fence design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs fences in Eastgate with terrain-aware layouts, durable post setting, and materials that hold up in Bellevue's wet climate. We use Fence Genius to help map grades and transitions, then recommend fence systems that fit the lot, protect landscaping, and match the way Eastgate homes sit on their sites.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Eastgate Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Hillside Fence Planning</h3>
                      <p className="text-muted-foreground">
                        Eastgate properties often step down toward ravines or collect runoff after seasonal rain. We design racked or stepped fence runs that suit the grade and keep the finished line looking intentional.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tree-Sensitive Installation</h3>
                      <p className="text-muted-foreground">
                        Mature trees and established landscaping are common in Eastgate. We place posts carefully, minimize disturbance near roots, and preserve the look of wooded yards whenever possible.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                      <p className="text-muted-foreground">
                        Every Eastgate install is backed by our workmanship warranty and a process built to hold up through wet winters, soil movement, and day-to-day use.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Drainage-Aware Builds</h3>
                      <p className="text-muted-foreground">
                        We account for water flow, retaining edges, and yard grading so the fence performs well even where Eastgate lots are affected by runoff or compacted soils.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Eastgate Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-1 mb-4 text-primary">
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Our Eastgate yard slopes more than we expected, and the crew handled it cleanly. The new cedar fence follows the grade, looks great from the street, and gives our kids a safer backyard."
                  </p>
                  <div className="text-sm font-medium">Megan in Eastgate</div>
                  <div className="text-sm text-muted-foreground">May 2026</div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-1 mb-4 text-primary">
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "We needed a fence that worked around mature trees near Eastgate Park. MyFence.com planned the post locations carefully and left our landscape looking intact."
                  </p>
                  <div className="text-sm font-medium">Daniel in Eastgate</div>
                  <div className="text-sm text-muted-foreground">April 2026</div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-1 mb-4 text-primary">
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "From estimate to cleanup, everything was straightforward. They helped us choose a privacy fence that fit our lot near Factoria and handled the whole job without delays."
                  </p>
                  <div className="text-sm font-medium">Priya in Eastgate</div>
                  <div className="text-sm text-muted-foreground">March 2026</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Work in Eastgate
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <OptimizedImage
                    src="/images/projects/eastgate-cedar-privacy.jpg"
                    alt="Cedar privacy fence project in Eastgate Bellevue"
                    width={800}
                    height={600}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">6' Cedar Privacy Fence</h3>
                    <p className="text-muted-foreground">
                      Built for a sloped backyard near Lakemont Boulevard SE with stepped panels and reinforced posts.
                    </p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <OptimizedImage
                    src="/images/projects/eastgate-hogwire.jpg"
                    alt="Hogwire fence project in Eastgate Bellevue"
                    width={800}
                    height={600}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Black Hogwire Boundary Fence</h3>
                    <p className="text-muted-foreground">
                      Installed for a wooded lot near Eastgate Park to preserve views and define a pet-safe yard.
                    </p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <OptimizedImage
                    src="/images/projects/eastgate-hybrid-fence.jpg"
                    alt="Hybrid fence project in Eastgate Bellevue"
                    width={800}
                    height={600}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Hybrid Aluminum/Cedar Fence</h3>
                    <p className="text-muted-foreground">
                      Designed for a modern Eastgate property where the owners wanted privacy, airflow, and a lighter visual profile.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured Eastgate Installation
              </h2>
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <OptimizedImage
                    src="/images/projects/eastgate-featured-install.jpg"
                    alt="Featured fence installation in Eastgate Bellevue"
                    width={900}
                    height={700}
                    className="w-full h-full object-cover min-h-[320px]"
                  />
                  <div className="p-8 lg:p-10">
                    <h3 className="text-2xl font-semibold mb-4">
                      Stepped Cedar Privacy Fence Near Eastgate Park
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      This Eastgate project involved a cedar privacy fence on a yard with a noticeable slope and several mature trees along the rear property line. We used stepped sections to follow the grade cleanly, then adjusted the post layout to protect roots and keep the fence line stable through the wet season.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The homeowner wanted privacy without losing the open feel of the yard, so we designed a layout that balanced height, visibility, and drainage. The project covered about 140 linear feet and was completed in three working days.
                    </p>
                    <p className="text-muted-foreground">
                      The result was a durable fence that fits the neighborhood, supports the property's slope, and works naturally with the wooded Eastgate setting.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Eastgate-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Eastgate Terrain Engineering</h3>
                  <p className="text-muted-foreground">
                    Many Eastgate lots sit on rolling ground or transition toward wooded slopes, so fence lines often need stepped panels, custom heights, or deeper post settings to stay straight and stable.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Eastgate Drainage and Moisture Control</h3>
                  <p className="text-muted-foreground">
                    Seasonal rain and soil saturation can affect post longevity, especially where water moves along side yards or collects near retaining edges. We use methods that help the fence handle moisture without unnecessary movement.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Eastgate Landscaping and Tree Preservation</h3>
                  <p className="text-muted-foreground">
                    Established trees and dense planting beds are part of Eastgate's character. Careful layout matters so the new fence respects roots, avoids major disturbance, and keeps mature landscaping intact.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Eastgate Privacy and Roadway Buffering</h3>
                  <p className="text-muted-foreground">
                    Homes near the I-90 corridor, commercial areas, or busier collector roads may benefit from taller privacy fencing or hybrid systems that soften noise and visual exposure while staying neighborhood-appropriate.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Fence Installation Cost in Eastgate
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                The right fence for an Eastgate property depends on slope, access, material choice, and whether the site needs additional drainage or tree-sensitive work. We provide transparent pricing after evaluating the property conditions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Cedar Privacy</h3>
                  <p className="text-muted-foreground">$52–$78 per linear foot</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Hogwire</h3>
                  <p className="text-muted-foreground">$38–$60 per linear foot</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground">$62–$92 per linear foot</p>
                </Card>
              </div>
              <div className="text-center">
                <Button asChild size="lg" variant="hero">
                  <Link href="/quote">Get an exact quote for your Eastgate property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Popular Fence Styles in Eastgate
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground mb-4">
                    A strong choice for Eastgate homeowners who want privacy, warmth, and a fence that complements wooded surroundings.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary hover:underline">
                    View styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground mb-4">
                    Good for preserving views and keeping a lighter visual profile on properties that back to trees or open space.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary hover:underline">
                    View styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground mb-4">
                    A modern option for Eastgate lots where homeowners want privacy, airflow, and a clean, durable finish.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary hover:underline">
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
              <LeadCaptureTabs fenceStyleName="Eastgate Bellevue fence" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Eastgate Installation Process
              </h2>
              <div className="grid md:grid-cols-5 gap-4">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">1. Eastgate Site Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    We review slope, access, drainage, and existing landscaping before recommending a fence plan.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">2. Eastgate Design & HOA Submission</h3>
                  <p className="text-sm text-muted-foreground">
                    If your property has covenant or community requirements, we help prepare a design that fits them.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">3. Custom Panel Manufacturing</h3>
                  <p className="text-sm text-muted-foreground">
                    Fence Genius mapping helps us build panels sized for the exact terrain on your lot.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">4. Eastgate Installation</h3>
                  <p className="text-sm text-muted-foreground">
                    We set posts, align panels, and use the right methods for hillside or tree-heavy sites.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-sm text-muted-foreground">
                    We review the finished work with you and stand behind it with our workmanship warranty.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <AboutTheArea
          title="Discover Eastgate"
          description="Eastgate combines Bellevue convenience with wooded residential pockets, schools, parks, and quick access to I-90."
          attractions={[
            {
              name: "Eastgate Park",
              url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/eastgate-park",
              description: "A neighborhood park with ball fields, tennis courts, playground space, and wooded trails.",
            },
            {
              name: "Eastgate Neighborhood Park",
              url: "https://bellevuewa.gov/city-government/departments/parks/planning-and-development/current-projects/eastgate-neighborhood-park",
              description: "A planned park project adding more recreation access for nearby residents.",
            },
            {
              name: "Factoria",
              url: "https://www.google.com/maps/search/Factoria+Bellevue+WA",
              description: "A nearby shopping and services district for errands, dining, and daily convenience.",
            },
          ]}
          popularServices={[
            {
              title: "Fence Installation",
              href: "/service-areas/bellevue",
              description: "Professional fencing for Bellevue homes and properties.",
            },
            {
              title: "Privacy Fencing",
              href: "/fence-styles/picture-frame-fence",
              description: "Solid privacy solutions for residential lots.",
            },
            {
              title: "Modern Hybrid Fences",
              href: "/fence-styles/cedar-steel-hybrid-fence",
              description: "A clean, durable option for contemporary homes.",
            },
          ]}
          relatedAreas={[
            {
              title: "Bellevue",
              href: "/bellevue",
              description: "Explore our Bellevue service area coverage.",
            },
            {
              title: "Newport Hills",
              href: "/service-areas/bellevue/newport-hills",
              description: "Another hillside Bellevue neighborhood we serve.",
            },
            {
              title: "Factoria",
              href: "/bellevue",
              description: "Nearby area information and service access.",
            },
          ]}
          localLivingContent={
            <div className="space-y-4 text-muted-foreground">
              <p>
                Eastgate sits between major commuter routes and established residential streets, giving homeowners a mix of privacy, convenience, and access to everyday services. For city and neighborhood context, many residents look to <a href="/bellevue">Bellevue</a> resources when planning exterior improvements.
              </p>
              <p>
                Homeowners with sloped or wooded lots often need a fence approach that handles drainage and changing elevations. That is especially true for homes closer to Eastgate Park, the I-90 corridor, and the greenbelts that shape the area.
              </p>
            </div>
          }
        />

        <section className="py-12 px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Eastgate Area</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tucked against the wooded slopes south of Interstate 90, Eastgate in Bellevue offers homeowners a quiet, residential feel with quick access to the rest of the Eastside. Once a more rural area, it is now a well-established neighborhood of primarily single-family homes, townhomes, and a few multifamily communities, with tree-lined streets and views toward the Cascades or Lake Washington in many spots. The neighborhood was annexed into Bellevue in 2012, bringing it fully under city services and planning.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For families, one of Eastgate’s big draws is its connection to the highly regarded Bellevue School District. Local students are typically served by neighborhood schools such as <a href="https://bsd405.org/schools/eastgate" target="_blank" rel="noopener noreferrer">Eastgate Elementary School</a> and nearby middle and high schools within the district, which are known for strong academics and a diverse student body. Being part of the Bellevue School District also means coordinated transportation, after-school programs, and access to district-wide resources.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Outdoor access is a core part of day-to-day life in Eastgate. The neighborhood’s namesake <a href="https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/eastgate-park" target="_blank" rel="noopener noreferrer">Eastgate Park</a> offers ball fields, tennis courts, a playground, picnic spaces, and access to wooded trails, all just minutes from many front doors. The City of Bellevue continues to invest in local green space, including the planned <a href="https://bellevuewa.gov/city-government/departments/parks/planning-and-development/current-projects/eastgate-neighborhood-park" target="_blank" rel="noopener noreferrer">Eastgate Neighborhood Park</a>, which is designed to fill gaps in neighborhood park access and add new recreation options.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Eastgate is particularly convenient for commuters. The neighborhood sits just south of I-90 and east of I-405, so trips to downtown Bellevue, Factoria, Issaquah, and Seattle are relatively straightforward by car or bus. Many residents work in tech, healthcare, education, and other professional fields in nearby employment centers, while enjoying a quieter residential setting at home.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Because Eastgate runs along hillside and wooded terrain, homeowners often deal with property issues tied to slope, drainage, and vegetation management. Seasonal rains can highlight the importance of well-planned yard grading, runoff control, and compliance with Bellevue’s stormwater and critical-areas rules. The city’s <a href="https://bellevuewa.gov/city-government/departments/development-services" target="_blank" rel="noopener noreferrer">Development Services</a> department provides guidance on permits, inspections, and code requirements that may apply to fences, retaining walls, or exterior improvements, helping residents keep projects safe and compliant.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As part of Bellevue, Eastgate is subject to local codes and enforcement that shape how properties look and function. Homeowners planning significant exterior projects often consult the city’s <a href="https://bellevuewa.gov/city-government/departments/development-services/codes-standards" target="_blank" rel="noopener noreferrer">Codes &amp; Ordinances</a> resources to understand height limits, setback rules, and other standards that help protect sightlines, utilities, and neighborhood character. Staying aligned with these regulations is especially important near slopes, greenbelts, or utility easements that run behind many homes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Daily life in Eastgate balances suburban calm with ready access to amenities. Residents are a short drive from shopping and dining in Factoria and Eastgate’s commercial pockets, as well as services across Bellevue. Parks, schools, and neighborhood associations foster a sense of community, while citywide resources like the <a href="https://kcls.org" target="_blank" rel="noopener noreferrer">King County Library System</a> and Bellevue community centers provide programs for all ages. For homeowners, this combination of convenience, strong civic infrastructure, and natural surroundings makes Eastgate a particularly appealing corner of Bellevue to call home.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}