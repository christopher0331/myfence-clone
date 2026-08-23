"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileDown,
  FileText,
  Mail,
  MapPin,
  Phone,
  Shield,
  Waves,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import type { HoaApprovedFencingConfig, HoaTrustIcon } from "@/components/hoa/types";

const TRUST_ICONS: Record<HoaTrustIcon, typeof ClipboardList> = {
  clipboard: ClipboardList,
  mail: Mail,
  shield: Shield,
  waves: Waves,
  mapPin: MapPin,
  file: FileText,
};

/**
 * Shared layout for HOA approved fencing pages.
 * Pass a config from `src/components/hoa/configs/` — see README in this folder.
 */
export default function HoaApprovedFencingPage({ config }: { config: HoaApprovedFencingConfig }) {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: config.canonical,
    neighborhoodName: config.h1,
    pageTitle: config.h1,
    description: config.metaDescription,
    parent: { name: config.parentCrumbName, url: config.parentUrl },
    faqItems: config.schemaFaqs,
  });

  return (
    <>
      <Seo
        title={config.metaTitle}
        description={config.metaDescription}
        canonical={config.canonical}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href={config.parentHref}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {config.parentLinkLabel}
            </Link>
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-lg text-muted-foreground">{config.locationLabel}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{config.h1}</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">{config.heroIntro}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#hoa-forms">
                  <Button size="lg" variant="hero" className="w-full sm:w-auto">
                    <FileDown className="mr-2 h-5 w-5" />
                    {config.downloadCtaLabel}
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
              {config.trustItems.map((item) => {
                const Icon = TRUST_ICONS[item.icon];
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 justify-center sm:justify-start"
                  >
                    <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="hoa-forms" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.formsHeading}</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {config.formsIntro}
                {config.formsSubmitEmail ? (
                  <>
                    {" "}
                    <a
                      href={`mailto:${config.formsSubmitEmail}`}
                      className="text-primary underline decoration-2 underline-offset-2"
                    >
                      {config.formsSubmitEmail}
                    </a>
                    .
                  </>
                ) : null}
              </p>
              {config.officialLinks?.length ? (
                <div className="mb-8 rounded-lg border bg-muted/30 p-5">
                  <h3 className="font-semibold mb-3">
                    {config.officialLinksHeading ?? "Official association resources"}
                  </h3>
                  <ul className="space-y-2">
                    {config.officialLinks.map((link) => {
                      const isWeb = /^https?:\/\//i.test(link.href);
                      return (
                        <li key={link.href} className="text-sm leading-relaxed">
                          <a
                            href={link.href}
                            {...(isWeb
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="text-primary underline decoration-2 underline-offset-2 inline-flex items-center gap-1.5"
                          >
                            {link.label}
                            {isWeb ? (
                              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                            ) : null}
                          </a>
                          {link.note ? (
                            <span className="text-muted-foreground"> — {link.note}</span>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
              <div className="grid gap-4">
                {config.forms.map((form) => {
                  const isExternal = /^https?:\/\//i.test(form.href);
                  return (
                    <Card key={form.href} className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">
                            {form.source ? `${form.source} · ${form.timing}` : form.timing}
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
                          {isExternal ? (
                            <ExternalLink className="h-4 w-4" aria-hidden />
                          ) : (
                            <FileDown className="h-4 w-4" aria-hidden />
                          )}
                          {form.ctaLabel ?? "Download PDF"}
                        </a>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{config.processHeading}</h2>
              <div className="space-y-6">
                {config.steps.map((step, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold">{config.reviewHeading}</h2>
              <p className="text-muted-foreground leading-relaxed">{config.reviewIntro}</p>
              <ul className="space-y-3">
                {config.reviewBullets.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                {config.reviewFooterBeforeLink}{" "}
                <Link
                  href={config.parentHref}
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  {config.reviewFooterLinkLabel}
                </Link>
                {config.reviewFooterAfterLink ?? "."}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{config.helpHeading}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {config.helpCards.map((card) => {
                  const Icon = card.icon ? TRUST_ICONS[card.icon] : null;
                  return (
                    <Card key={card.title} className="p-6">
                      {Icon ? <Icon className="h-6 w-6 text-primary mb-3" /> : null}
                      <h3 className="font-semibold mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName={config.leadFenceStyleName} />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{config.faqHeading}</h2>
              <div className="space-y-6">
                {config.faqs.map((item) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.ctaHeading}</h2>
              <p className="text-muted-foreground mb-8">{config.ctaBody}</p>
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
}
