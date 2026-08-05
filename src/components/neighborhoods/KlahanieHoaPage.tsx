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
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const PARENT_URL = "https://myfence.com/service-areas/sammamish/klahanie";
const CANONICAL = `${PARENT_URL}/hoa`;
const META_TITLE = "Klahanie HOA Fence Forms & ARC Approval | Sammamish | MyFence.com";
const META_DESCRIPTION =
  "Download Klahanie HOA fence application, completion form, and design specs. ARC submission help for Sammamish homeowners. Free quotes. (253) 455-1885.";

const FORMS = [
  {
    href: "/docs/hoa/klahanie-hoa-fence-application.pdf",
    title: "Klahanie HOA Fence Application",
    timing: "Before install",
    blurb: "Start here. Submit with drawings, materials, and color samples before construction begins.",
  },
  {
    href: "/docs/hoa/klahanie-hoa-fence-completion-form.pdf",
    title: "Klahanie HOA Fence Completion Form",
    timing: "After install",
    blurb: "File after the project is finished so the association can close out your ARC approval.",
  },
  {
    href: "/docs/hoa/klahanie-fence-design-specifications.pdf",
    title: "Klahanie Fence Design & Specifications",
    timing: "Reference",
    blurb: "Approved design standards for height, materials, style, and placement in Klahanie.",
  },
] as const;

const STEPS = [
  {
    title: "Download & review the forms",
    body: "Grab the application, completion form, and design specifications. Confirm your planned fence style matches Klahanie’s approved look before you spend on materials.",
  },
  {
    title: "Build a complete ARC package",
    body: "Pair the application with elevation drawings, material specs, stain/color samples, and a site plan showing property lines and setbacks. Incomplete packets get rejected and add weeks.",
  },
  {
    title: "Submit to Architectural Controls",
    body: "Email completed documents to architecturalcontrols@klahanie.com and wait for ARC approval before installation starts.",
  },
  {
    title: "Install, then close out",
    body: "After the fence is built to the approved plan, file the completion form so the association can finalize your file.",
  },
] as const;

const KlahanieHoaPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Klahanie HOA Fence Forms",
    pageTitle: "Klahanie HOA Fence Forms & ARC Approval",
    description: META_DESCRIPTION,
    parent: { name: "Klahanie, Sammamish", url: PARENT_URL },
    faqItems: [
      {
        question: "What forms does the Klahanie HOA require for a new fence?",
        answer:
          "Most homeowners need the Klahanie HOA Fence Application before work starts and the Fence Completion Form after installation. Use the Design & Specifications PDF to confirm approved styles, heights, and materials. MyFence.com hosts all three downloads on this page.",
      },
      {
        question: "Where do I submit Klahanie HOA fence documents?",
        answer:
          "Submit completed ARC documents to architecturalcontrols@klahanie.com. MyFence.com can prepare drawings, material lists, and color samples so your package is ready for review.",
      },
      {
        question: "Do I need ARC approval before MyFence installs in Klahanie?",
        answer:
          "Yes. The Klahanie Association requires Architectural Review Committee approval before fence installation begins. We prepare the submission package and schedule install after approval so you avoid rework.",
      },
      {
        question: "What fence styles usually pass Klahanie ARC review?",
        answer:
          "Cedar privacy, hogwire with a cedar frame, and hybrid aluminum/cedar in natural tones are the most commonly approved looks. Review the Design & Specifications PDF and we will match materials and colors to what the ARC expects.",
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
              href="/service-areas/sammamish/klahanie"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Klahanie fence installation
            </Link>
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-lg text-muted-foreground">
                  Klahanie Association · Sammamish, WA
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Klahanie HOA Fence Forms &amp; ARC Approval
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                Everything Klahanie homeowners need to get fence projects approved: official HOA
                downloads, ARC submission steps, and a fence builder who prepares packages that pass
                the first time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#hoa-forms">
                  <Button size="lg" variant="hero" className="w-full sm:w-auto">
                    <FileDown className="mr-2 h-5 w-5" />
                    Download HOA forms
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
                <span className="text-sm text-muted-foreground">Official Klahanie fence PDFs</span>
              </div>
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Submit to architecturalcontrols@klahanie.com
                </span>
              </div>
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">ARC package prep included</span>
              </div>
            </div>
          </div>
        </section>

        <section id="hoa-forms" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Klahanie HOA fence forms</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                These are the documents residents generally need before and after a fence project.
                After you complete them, email the packet to{" "}
                <a
                  href="mailto:architecturalcontrols@klahanie.com"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  architecturalcontrols@klahanie.com
                </a>
                .
              </p>
              <div className="grid gap-4">
                {FORMS.map((form) => (
                  <Card key={form.href} className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">
                          {form.timing}
                        </p>
                        <h3 className="text-xl font-semibold mb-2">{form.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{form.blurb}</p>
                      </div>
                      <a
                        href={form.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 shrink-0 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <FileDown className="h-4 w-4" aria-hidden />
                        Download PDF
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Klahanie ARC fence process</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold">What the Klahanie ARC reviews</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Architectural Review Committee looks at design, materials, height, color, and
                placement. Designs that ignore the published specifications—or leave out drawings and
                samples—get bounced. MyFence.com builds Klahanie fences every season and prepares
                packages that already match what the association expects.
              </p>
              <ul className="space-y-3">
                {[
                  "Elevation drawings that match the Design & Specifications PDF",
                  "Material lists and stain/color samples in natural, neighborhood-friendly tones",
                  "Site plans with property lines, setbacks, and gate locations",
                  "Family-safe details: no ground gaps, secure latches, trail-adjacent options when needed",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Need the install side too? See our full{" "}
                <Link
                  href="/service-areas/sammamish/klahanie"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  Klahanie fence installation page
                </Link>{" "}
                for styles, pricing ranges, and local project examples.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How MyFence.com helps Klahanie homeowners</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">ARC package prep</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We assemble drawings, specs, and samples so your application is complete on day
                    one—no extra fee tacked on for HOA paperwork.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Spec-matched builds</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cedar privacy, hogwire, and hybrid systems built to the approved plan—not a
                    generic fence that fails review after the fact.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Closeout support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When install is done, we help you wrap the completion form so Architectural
                    Controls can close your file cleanly.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Klahanie HOA fence" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Klahanie HOA fence FAQs</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What forms does the Klahanie HOA require for a new fence?",
                    a: "Most homeowners need the Klahanie HOA Fence Application before work starts and the Fence Completion Form after installation. Use the Design & Specifications PDF to confirm approved styles, heights, and materials.",
                  },
                  {
                    q: "Where do I submit Klahanie HOA fence documents?",
                    a: "Email completed documents to architecturalcontrols@klahanie.com. We can prepare the supporting drawings and samples for you.",
                  },
                  {
                    q: "Do I need ARC approval before installation?",
                    a: "Yes. Do not start construction until the Architectural Review Committee approves your package. We schedule install after approval.",
                  },
                  {
                    q: "What styles usually pass review?",
                    a: "Cedar privacy, hogwire with cedar frame, and hybrid aluminum/cedar in natural tones are the most common approvals in Klahanie.",
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
                Ready for a Klahanie-approved fence?
              </h2>
              <p className="text-muted-foreground mb-8">
                Download the forms above, or let us handle the ARC package and build. Free on-site
                estimates for Klahanie / Sammamish properties.
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

export default KlahanieHoaPage;
