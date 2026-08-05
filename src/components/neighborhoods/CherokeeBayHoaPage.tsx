"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  FileDown,
  Mail,
  MapPin,
  Phone,
  Shield,
  Waves,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const PARENT_URL = "https://myfence.com/service-areas/maple-valley/cherokee-bay-park";
const CANONICAL = `${PARENT_URL}/hoa-approved-fencing`;
const META_TITLE =
  "Cherokee Bay HOA Approved Fencing | Application | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Cherokee Bay HOA approved fencing in Maple Valley. Download the HOA fence application and get lakeside ARC-ready installs. Free quotes. (253) 455-1885.";

const STEPS = [
  {
    title: "Download the HOA fence application",
    body: "Use the official Cherokee Bay Fence Application for HOA to document your planned fence style, materials, and placement before work begins.",
  },
  {
    title: "Plan for lakeside and county rules",
    body: "Cherokee Bay Park lots near Lake Wilderness may also face King County shoreline buffers or critical-area limits. We check your parcel so the HOA plan and county rules don’t conflict.",
  },
  {
    title: "Install to the approved plan",
    body: "Once the association is satisfied with the application package, we build to the approved layout—often mixing privacy panels with view-preserving hogwire toward the lake.",
  },
  {
    title: "Mail completed documents after the project",
    body: "When the fence is finished, mail the completed application documents to service@agynbyte.com so the HOA can close out your file.",
  },
] as const;

const CherokeeBayHoaPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Cherokee Bay HOA Approved Fencing",
    pageTitle: "Cherokee Bay HOA Approved Fencing",
    description: META_DESCRIPTION,
    parent: { name: "Cherokee Bay Park, Maple Valley", url: PARENT_URL },
    faqItems: [
      {
        question: "What is Cherokee Bay HOA approved fencing?",
        answer:
          "Cherokee Bay HOA approved fencing means your project follows the association’s fence application and closeout process, with a design that fits neighborhood expectations and any lakeside constraints. Download the official application on this page and mail completed documents to service@agynbyte.com after install.",
      },
      {
        question: "Where can I download the Cherokee Bay HOA fence application?",
        answer:
          "Download the Cherokee Bay Fence Application for HOA on this page. MyFence.com hosts the official PDF so Maple Valley homeowners can start paperwork without hunting through association emails.",
      },
      {
        question: "Where do I send completed Cherokee Bay HOA fence documents?",
        answer:
          "After the project is complete, mail the finished application documents to service@agynbyte.com. Keep a copy for your records and confirm any additional HOA instructions on the form itself.",
      },
      {
        question: "Do Cherokee Bay Park fences also need King County shoreline review?",
        answer:
          "Properties closest to Lake Wilderness may fall within shoreline or critical-area buffers that limit height, placement, or materials. MyFence.com researches your parcel before quoting and designs a plan that can satisfy both HOA paperwork and county rules.",
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
              href="/service-areas/maple-valley/cherokee-bay-park"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Cherokee Bay Park fence installation
            </Link>
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-lg text-muted-foreground">
                  Cherokee Bay HOA · Maple Valley, WA
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Cherokee Bay HOA Approved Fencing
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                Download the official HOA fence application, learn how closeout works after install,
                and get lakeside fencing designed to clear association paperwork without fighting Lake
                Wilderness views.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#hoa-forms">
                  <Button size="lg" variant="hero" className="w-full sm:w-auto">
                    <FileDown className="mr-2 h-5 w-5" />
                    Download HOA application
                  </Button>
                </a>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="/quote">Get free HOA-ready quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 border-y bg-muted/30">
          <div className="container">
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center sm:text-left">
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <ClipboardList className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Official HOA application PDF</span>
              </div>
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  After completion: service@agynbyte.com
                </span>
              </div>
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <Waves className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Lakeside + HOA coordination</span>
              </div>
            </div>
          </div>
        </section>

        <section id="hoa-forms" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Download the form for Cherokee Bay HOA approved fencing
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Start with the association&apos;s fence application before install. When the project
                is finished, mail the completed documents to{" "}
                <a
                  href="mailto:service@agynbyte.com"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  service@agynbyte.com
                </a>
                .
              </p>
              <Card className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">
                      Required form
                    </p>
                    <h3 className="text-xl font-semibold mb-2">
                      Cherokee Bay Fence Application for HOA
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Official application for Cherokee Bay residents planning a new or replacement
                      fence. Complete before construction; mail the finished packet after the project
                      for HOA closeout.
                    </p>
                  </div>
                  <a
                    href="/docs/hoa/cherokee-bay-hoa-fence-application.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 shrink-0 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <FileDown className="h-4 w-4" aria-hidden />
                    Download PDF
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Cherokee Bay HOA fence process</h2>
              <div className="space-y-6">
                {STEPS.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">HOA paperwork meets lakeside realities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cherokee Bay Park is not a flat inland subdivision. Slope toward Lake Wilderness,
                wet soils, and shoreline buffers can change what you can build—even when the HOA
                application looks straightforward. We design with both layers in mind so you are not
                rewriting forms after a county setback surprise.
              </p>
              <ul className="space-y-3">
                {[
                  "HOA application filled with a clear style and materials plan",
                  "Parcel check for shoreline / critical-area constraints near Lake Wilderness",
                  "View-preserving designs that still satisfy privacy along neighbors",
                  "Moisture-ready materials and foundations for lakeside lots",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                For install pricing, styles, and lakeside engineering detail, visit the{" "}
                <Link
                  href="/service-areas/maple-valley/cherokee-bay-park"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  Cherokee Bay Park fence installation page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How MyFence.com helps Cherokee Bay homeowners
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <Shield className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Application-ready plans</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clear drawings and material choices you can attach to the HOA application without
                    guessing what the association needs to see.
                  </p>
                </Card>
                <Card className="p-6">
                  <Waves className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Lakeside engineering</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Slope-following panels, moisture-resistant details, and layouts that protect
                    views while meeting containment needs.
                  </p>
                </Card>
                <Card className="p-6">
                  <Mail className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Closeout reminders</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When the fence is done, we remind you to mail completed docs to
                    service@agynbyte.com so the HOA file closes cleanly.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Cherokee Bay HOA fence" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Cherokee Bay HOA approved fencing FAQs
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What is Cherokee Bay HOA approved fencing?",
                    a: "It means your project follows the association’s fence application and closeout process, with a design that fits neighborhood expectations and any lakeside constraints on your lot.",
                  },
                  {
                    q: "Where can I download the Cherokee Bay HOA fence application?",
                    a: "Use the Download PDF button on this page for the official Cherokee Bay Fence Application for HOA.",
                  },
                  {
                    q: "Where do I send completed documents?",
                    a: "After the project is complete, mail the finished application documents to service@agynbyte.com.",
                  },
                  {
                    q: "Do I also need King County shoreline review?",
                    a: "Maybe—lots near Lake Wilderness can fall in shoreline or critical-area buffers. We check your parcel before quoting.",
                  },
                ].map((item) => (
                  <div key={item.q}>
                    <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Cherokee Bay HOA approved fencing?
              </h2>
              <p className="text-muted-foreground mb-8">
                Download the application, or let us design an HOA-ready lakeside fence. Free on-site
                estimates in Cherokee Bay Park / Maple Valley.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </section>
      </main>
    </>
  );
};

export default CherokeeBayHoaPage;
