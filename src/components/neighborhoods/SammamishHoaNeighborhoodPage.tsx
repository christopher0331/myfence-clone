"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, ArrowLeft, MapPin, Phone, ClipboardCheck } from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

export interface SammamishHoaNeighborhoodConfig {
  slug: string;
  name: string;
  hoaName: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  aboutParagraphs: string[];
  hoaSummary: string;
  hoaBullets: string[];
  considerations: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  nearby: { label: string; href: string }[];
}

const SammamishHoaNeighborhoodPage = ({ config }: { config: SammamishHoaNeighborhoodConfig }) => {
  const canonical = `https://myfence.com/service-areas/sammamish/${config.slug}`;
  const hoaHref = `/service-areas/sammamish/${config.slug}/hoa-approved-fencing`;
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: `${config.name}, Sammamish`,
    pageTitle: `${config.name} Sammamish Fence Installation`,
    description: config.metaDescription,
    faqItems: config.faqs,
  });

  return (
    <>
      <Seo title={config.metaTitle} description={config.metaDescription} canonical={canonical} structuredData={structuredData} />
      <main className="min-h-screen">
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link href="/service-areas/sammamish" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Sammamish
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving {config.name}, Sammamish WA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{config.name} Fence Installation</h1>
                <p className="text-xl text-muted-foreground mb-8">{config.heroIntro}</p>
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
                <GoogleBusinessMap city={`${config.name}, Sammamish`} state="Washington" radiusMiles={5} zoom={11} showBusinessInfo={true} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 border-y bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground"><Shield className="h-5 w-5 text-primary" />Licensed & Insured</span>
              <span className="flex items-center gap-2 text-muted-foreground"><Award className="h-5 w-5 text-primary" />{WARRANTY_CONSTANTS.YEARS}-Year Warranty</span>
              <span className="flex items-center gap-2 text-muted-foreground"><ClipboardCheck className="h-5 w-5 text-primary" />We handle the HOA application</span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Fencing in {config.name}</h2>
              {config.aboutParagraphs.map((p) => (
                <p key={p.slice(0, 32)} className="text-muted-foreground leading-relaxed text-lg">{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{config.hoaName} Fence Rules</h2>
              <p className="text-muted-foreground leading-relaxed">{config.hoaSummary}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {config.hoaBullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
              <Link href={hoaHref} className="block">
                <Card className="p-5 hover:shadow-xl hover:border-primary hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-gradient-to-br from-background to-primary/5 border-2">
                  <h3 className="font-semibold text-primary text-lg mb-2">{config.name} HOA Approved Fencing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The full {config.hoaName} fencing guide: published rules, the association&apos;s own forms, and the approval steps. MyFence handles the HOA application for you.
                  </p>
                  <div className="mt-3 text-primary font-semibold text-sm flex items-center gap-1">Open the HOA fencing guide <span className="text-lg">→</span></div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName={`${config.name} Sammamish fence`} />

        <ServiceAreaPhotoGallery city="Sammamish" neighborhood={config.name} />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{config.name} Fencing Considerations</h2>
              {config.considerations.map((c) => (
                <div key={c.title}>
                  <h3 className="text-2xl font-semibold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{config.name} Fence FAQs</h2>
              <div className="space-y-4">
                {config.faqs.map((f) => (
                  <Card key={f.question} className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{f.question}</h3>
                    <p className="text-muted-foreground">{f.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Also Serving Nearby Sammamish Neighborhoods</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm"><Link href="/service-areas/sammamish">Sammamish overview</Link></Button>
                {config.nearby.map((n) => (
                  <Button key={n.href} asChild variant="outline" size="sm"><Link href={n.href}>{n.label}</Link></Button>
                ))}
                <Button asChild variant="outline" size="sm"><Link href="/service-areas">All service areas</Link></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a Quote for Your {config.name} Fence</h2>
              <p className="text-muted-foreground text-lg mb-8">Free on-site estimate. MyFence handles the HOA application and builds after approval.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="px-8 py-4" variant="default"><Link href="/quote">Get Free Quote</Link></Button>
                <Button asChild className="px-8 py-4" variant="secondary"><Link href="/contact">Contact Us</Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SammamishHoaNeighborhoodPage;
