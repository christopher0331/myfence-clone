"use client";

import Seo from "@/components/Seo";
import { ReferralForm } from "@/components/forms/ReferralForm";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Phone, CheckCircle, Users, DollarSign, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ReferralsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Referral Program | $150 Amazon Gift Card | MyFence.com",
    description:
      "Refer a friend to MyFence.com and you both receive a $150 Amazon Gift Card after their fence is installed.",
    url: `${SITE_CONFIG.url}/referrals`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Referral Program",
          item: `${SITE_CONFIG.url}/referrals`,
        },
      ],
    },
  };

  const steps = [
    {
      icon: Users,
      title: "Refer a Friend",
      description: "Share your experience with someone who needs a fence",
    },
    {
      icon: Phone,
      title: "They Get a Quote",
      description: "Your friend contacts us and we schedule their estimate",
    },
    {
      icon: Gift,
      title: "You Both Get Rewarded",
      description: "After the project closes, you BOTH receive a $150 Amazon Gift Card",
    },
  ];

  const faqs = [
    {
      question: "How long until I receive my gift card?",
      answer:
        "Gift cards are typically delivered within 2-4 weeks after the referred project is completed and paid in full.",
    },
    {
      question: "Is there a limit to how many people I can refer?",
      answer:
        "No limit! You can refer as many friends as you'd like. Each successful referral earns you another $150 gift card.",
    },
    {
      question: "Does the person I refer need to mention my name?",
      answer:
        "We recommend submitting this referral form before your friend contacts us. This ensures we have your referral on record. Your friend should also mention your name when they reach out.",
    },
    {
      question: "What if I refer someone who already contacted MyFence.com?",
      answer:
        "Referrals must be submitted before the referred person's first contact with us to qualify for the reward.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Refer a Friend | $150 Amazon Gift Card | MyFence.com"
        description="Refer a friend to MyFence.com and you both receive a $150 Amazon Gift Card after their fence is installed. No limit on referrals!"
        canonical={`${SITE_CONFIG.url}/referrals`}
        structuredData={structuredData}
        ogTitle="Share the Love, Earn Rewards 🎁"
        image="/og-referrals.png"
      />

      <main className="flex-1 pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Gift className="h-5 w-5" />
              <span className="font-medium">Referral Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Share the Love, <span className="text-primary">Earn Rewards</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Refer a friend to MyFence.com and you <strong>both</strong> receive a
              <span className="text-primary font-bold"> $150 Amazon Gift Card</span> after their fence is installed.
            </p>
            <a
              href="#referral-form"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Submit a Referral
            </a>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Step {index + 1}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    For You (The Referrer)
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>$150 Amazon Gift Card after your friend's fence is installed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>No limit on referrals – refer multiple friends, earn multiple rewards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Help friends get quality fencing from a trusted contractor</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-primary" />
                    For Your Friend
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>$150 Amazon Gift Card as a welcome bonus</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Professional cedar fence installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>36-month workmanship warranty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Referral Form Section */}
        <section id="referral-form" className="py-16 md:py-20 bg-muted/30 scroll-mt-28">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Submit Your Referral</h2>
              <p className="text-center text-muted-foreground mb-10">
                Fill out the form below and we'll reach out to your friend. Once their fence project is complete, you'll both
                receive your $150 Amazon Gift Card!
              </p>
              <Card className="border-2">
                <CardContent className="pt-8 pb-8">
                  <ReferralForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Terms & FAQ */}
        <section className="py-16 md:py-20">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-3">Program Terms & Conditions</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  • Gift card is awarded after fence installation is complete and payment is received in full
                </li>
                <li>• Both parties must be valid individuals (not the same person/household)</li>
                <li>• Referral must be submitted before the referred person contacts MyFence.com</li>
                <li>
                  • Gift cards are typically delivered within 2-4 weeks of project completion
                </li>
                <li>
                  • Program details subject to change; current and past customers in good standing are eligible to refer
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReferralsPage;
