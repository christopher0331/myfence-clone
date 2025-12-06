import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Sparkles, DollarSign, Clock, Palette, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import PaymentCalculator from "@/components/PaymentCalculator";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";
const heroImg = "/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png";
const diagramImg = "/lovable-uploads/cedar-aluminum-hybrid-diagram.png";
const panelSingleImg = "/lovable-uploads/barrier-boss-panel-single.png";
const panelsCloseupImg = "/lovable-uploads/barrier-boss-panels-closeup.png";

const faqs = [
  {
    question: "How does the Cedar/Steel Hybrid Fence compare to traditional cedar fencing?",
    answer: "The hybrid fence uses 26 gauge corrugated steel panels with factory-finished HDP NoFade™ paint instead of cedar boards, providing superior longevity without the need for staining or sealing. The cedar frame gives you the natural Pacific Northwest aesthetic while the steel panels deliver maintenance-free privacy for decades."
  },
  {
    question: "What colors are available for the steel panels?",
    answer: "The corrugated steel panels come in a variety of colors with HDP NoFade™ paint finish, though black is the most popular choice as it creates a striking contrast with the natural cedar framing. Other colors are available through our suppliers ColorMax and Barrier Boss."
  },
  {
    question: "Why do you prefer Barrier Boss panels?",
    answer: "We prefer Barrier Boss panels because they come in taller sheets. When panels are cut down to follow grade on sloped terrain, you still retain a full 6' fence height. With shorter panels from other suppliers, grade-following can reduce your effective fence height."
  },
  {
    question: "What is the Ultimate Fence Package?",
    answer: "The Ultimate Fence Package combines 4x4x12' Black Steel Posts, a 6' cedar-framed corrugated steel panel fence, and a 2' cedar horizontal lattice topper. This configuration provides maximum privacy, durability, and a premium architectural appearance with a lifetime warranty option."
  },
  {
    question: "How much does the Cedar/Steel Hybrid Fence cost?",
    answer: "Starting at approximately $80 per linear foot, this is a premium investment compared to traditional cedar fencing. However, the long-term value is significant when you factor in zero staining costs, superior durability, and the optional 30-year lifetime warranty with black steel posts."
  },
  {
    question: "Can I get a lifetime warranty on this fence?",
    answer: "Yes! When you upgrade to 4x4 black steel fence posts, you can qualify for a 30-year lifetime warranty on the system. The 26 gauge corrugated steel panels with HDP NoFade™ paint are incredibly durable and combined with steel posts, this fence will outlast traditional cedar by decades."
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const CedarAluminumHybridFence = () => {
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cedar/Steel Hybrid Fence",
    "image": "https://myfence.com/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png",
    "description": "Modern industrial fence combining 26 gauge corrugated steel panels with HDP NoFade™ paint and cedar framing. Ultimate privacy with zero maintenance on panels. Starting at $80/LF.",
    "brand": {
      "@type": "Brand",
      "name": "MyFence.com"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "80",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://myfence.com/fence-styles/cedar-steel-hybrid-fence"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "manufacturer": {
      "@type": "LocalBusiness",
      "name": "MyFence.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seattle",
        "addressRegion": "WA"
      },
      "telephone": "+1-253-455-1885"
    }
  };

  return (
    <>
      <Seo
        title="Cedar/Steel Hybrid Fence Seattle | Modern Privacy Fence"
        description="Premium cedar/steel hybrid fence in Seattle. 26 gauge corrugated steel panels with HDP NoFade™ paint and cedar framing. Zero maintenance, ultimate privacy. Starting at $80/LF. Call (253) 455-1885."
        canonical="https://myfence.com/fence-styles/cedar-steel-hybrid-fence"
        image="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
        structuredData={[productStructuredData, faqStructuredData]}
      />
      
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/fence-styles" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Fence Styles
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4" variant="default">Premium Investment</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Cedar/Steel Hybrid Fence
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  The perfect marriage of modern industrial aesthetics and Pacific Northwest charm. 26 gauge corrugated steel panels with factory-finished HDP NoFade™ paint replace traditional cedar boards for zero-maintenance privacy that lasts decades.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  <span className="font-semibold text-foreground">Starting at $80/LF</span> — a true investment for perimeter security and longevity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/quote">Get Quote</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={heroImg}
                  alt="Cedar/Steel Hybrid Fence with black corrugated steel panels and natural cedar framing installed in backyard"
                  className="rounded-lg shadow-2xl w-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cedar/Steel Hybrid?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Long-Term Savings</h3>
                  <p className="text-muted-foreground">
                    Eliminate recurring staining costs. Steel panels with HDP NoFade™ paint never need to be stained, sealed, or treated — saving thousands over the fence's lifetime.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Lock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Ultimate Privacy</h3>
                  <p className="text-muted-foreground">
                    Zero gaps between panels provide complete privacy. No shrinkage, warping, or gaps that develop over time like traditional wood fencing.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">30-Year Warranty Option</h3>
                  <p className="text-muted-foreground">
                    Upgrade to 4x4 black steel posts to qualify for a lifetime warranty of 30 years. Built to last for generations.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Modern Industrial Look</h3>
                  <p className="text-muted-foreground">
                    Black corrugated steel panels create a striking modern/industrial aesthetic that's increasingly popular in contemporary home design.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">PNW Character</h3>
                  <p className="text-muted-foreground">
                    Cedar framing retains that authentic Pacific Northwest warmth while steel panels handle the heavy lifting of privacy and durability.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Palette className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Color Options</h3>
                  <p className="text-muted-foreground">
                    Panels come in a variety of HDP NoFade™ paint colors. Black is the most popular for its contrast with cedar, but other options are available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works / Diagram Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How the Hybrid System Works</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={diagramImg}
                  alt="Diagram showing cedar/steel hybrid fence construction with cedar posts and framing surrounding corrugated steel panel"
                  className="rounded-lg shadow-lg w-full"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cedar Frame Construction</h3>
                  <p className="text-muted-foreground">
                    Premium cedar posts, top rail, and bottom rail create the structural frame. The natural cedar provides warmth and integrates beautifully with Pacific Northwest landscapes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">26 Gauge Corrugated Steel Panels</h3>
                  <p className="text-muted-foreground">
                    Deep-groove corrugated steel panels are secured within the cedar frame. The factory-finished HDP NoFade™ paint on both sides provides exceptional weather resistance and never needs refinishing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Grade-Following Installation</h3>
                  <p className="text-muted-foreground">
                    We use Barrier Boss panels specifically because they come in taller sheets. When cut to follow grade on sloped terrain, you still maintain a full 6' fence height.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panel Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Barrier Boss Deep Groove Panels</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <img
                  src={panelSingleImg}
                  alt="Single Barrier Boss black deep groove corrugated steel panel"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                  loading="lazy"
                />
                <p className="text-sm text-muted-foreground mt-3 text-center">Deep groove profile creates a distinctive modern look</p>
              </div>
              <div>
                <img
                  src={panelsCloseupImg}
                  alt="Close-up of Barrier Boss black deep groove corrugated steel panels showing texture and HDP NoFade finish"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                  loading="lazy"
                />
                <p className="text-sm text-muted-foreground mt-3 text-center">Factory-finished HDP NoFade™ paint on both sides</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We partner with <span className="font-semibold">Barrier Boss</span> and <span className="font-semibold">ColorMax</span> — two leading suppliers of 26 gauge corrugated steel fencing panels with HDP NoFade™ paint. We prefer Barrier Boss for their taller panel sheets, ensuring maximum height retention on sloped properties.
              </p>
            </div>
          </div>
        </section>

        {/* Ultimate Package Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4" variant="default">Ultimate Privacy Solution</Badge>
              <h2 className="text-3xl font-bold mb-6">The Ultimate Fence Package</h2>
              <p className="text-xl text-muted-foreground mb-8">
                For homeowners seeking the absolute best in privacy, durability, and aesthetics, our Ultimate Fence Package delivers it all.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">4x4x12' Black Steel Posts</h3>
                  <p className="text-sm text-muted-foreground">
                    Heavy-duty steel posts provide unmatched rigidity and qualify for the 30-year lifetime warranty.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">6' Hybrid Panel Fence</h3>
                  <p className="text-sm text-muted-foreground">
                    Cedar-framed corrugated steel panels deliver zero-gap privacy with the modern industrial aesthetic.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">2' Cedar Horizontal Lattice</h3>
                  <p className="text-sm text-muted-foreground">
                    Adds architectural elegance and brings your total fence height to nearly 8 feet.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link to="/quote">Get a Quote for Ultimate Package</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Specifications & Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Panel Specifications</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-foreground">Panel Material</p>
                      <p className="text-sm text-muted-foreground">26 gauge corrugated steel with HDP NoFade™ paint (both sides)</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Standard Height</p>
                      <p className="text-sm text-muted-foreground">6 feet (taller panels allow for grade following)</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Privacy Rating</p>
                      <p className="text-sm text-muted-foreground">100% — zero gaps between panels</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Preferred Supplier</p>
                      <p className="text-sm text-muted-foreground">Barrier Boss (taller sheets for grade following)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Pricing & Warranty</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-foreground">Starting Price</p>
                      <p className="text-sm text-muted-foreground">$80 per linear foot</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Standard Warranty</p>
                      <p className="text-sm text-muted-foreground">{WARRANTY_CONSTANTS.YEARS}-year workmanship warranty</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Lifetime Warranty Option</p>
                      <p className="text-sm text-muted-foreground">30 years with 4x4 black steel posts upgrade</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Maintenance Required</p>
                      <p className="text-sm text-muted-foreground">None for steel panels; cedar frame can be stained</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* About the Company */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="mb-12">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Family-Owned Excellence Since 1994</h2>
                    <p className="text-muted-foreground">
                      MyFence.com has been serving the Pacific Northwest with premium fencing solutions for three decades. Our Cedar/Steel Hybrid Fence represents the cutting edge of fence technology — combining traditional craftsmanship with modern materials.
                    </p>
                    <p className="text-muted-foreground">
                      {WARRANTY_CONSTANTS.ABOUT_TEXT}, we take pride in delivering exceptional results with Fence Genius precision planning.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">30+ Years Experience</Badge>
                      <Badge variant="secondary">Family Owned</Badge>
                      <Badge variant="secondary">{WARRANTY_CONSTANTS.BADGE_TEXT}</Badge>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={fatherSonImg}
                      alt="MyFence.com father and son team with over 37 years of fencing expertise"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Finance Calculator */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flexible Financing Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Make your Cedar/Steel Hybrid Fence investment more manageable with our financing options. Calculate your monthly payment and see how easy it is to get started.
              </p>
            </div>
            <PaymentCalculator />
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Cedar/Steel Hybrid Fence" />

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Ready to Invest in Premium Privacy?
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Get a personalized quote for your Cedar/Steel Hybrid Fence project. Our team will help you design the perfect solution for your property.
              </p>
              <InlineQuoteForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CedarAluminumHybridFence;
