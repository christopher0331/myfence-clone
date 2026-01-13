"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight, DollarSign, Shield, Clock, Sparkles, Lock, Palette } from "lucide-react";
import { ArticleSummary } from "@/components/ArticleSummary";
import Seo from "@/components/Seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heroImg = "/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png";
const diagramImg = "/lovable-uploads/cedar-aluminum-hybrid-diagram.png";
const panelSingleImg = "/lovable-uploads/barrier-boss-panel-single.png";
const panelsCloseupImg = "/lovable-uploads/barrier-boss-panels-closeup.png";
const steelPostsFenceImg = "/lovable-uploads/black-steel-posts-fence.webp";
const steelPostCloseupImg = "/lovable-uploads/barrier-boss-steel-post-closeup.webp";

const CedarAluminumHybridFenceMDX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Cedar/Steel Hybrid Fence: The Ultimate Guide to Modern Privacy Fencing";
  const pageContent = `Discover the cedar/steel hybrid fence system - a revolutionary fencing solution that combines 26 gauge corrugated steel panels with HDP NoFade™ paint and natural cedar framing. Learn about Barrier Boss and ColorMax panels, the Ultimate Fence Package with 30-year warranty, pricing starting at $80/LF, and why this is the best investment for long-term privacy and security. Perfect for homeowners seeking modern industrial aesthetics with Pacific Northwest charm.`;

  const faqs = [
    {
      question: "What is a Cedar/Steel Hybrid Fence?",
      answer: "A cedar/steel hybrid fence combines 26 gauge corrugated steel panels with factory-finished HDP NoFade™ paint and traditional cedar framing. The steel panels replace wood fence boards, providing zero-gap privacy that never needs staining, while the cedar frame maintains that natural Pacific Northwest aesthetic."
    },
    {
      question: "How much does a Cedar/Steel Hybrid Fence cost?",
      answer: "Cedar/Steel Hybrid Fencing starts at approximately $80 per linear foot. While more expensive than traditional cedar fencing, the long-term savings from eliminating staining costs and the superior durability make it a smart investment for property perimeters."
    },
    {
      question: "Why do you prefer Barrier Boss panels over other suppliers?",
      answer: "We prefer Barrier Boss panels because they come in taller sheets. When panels are cut down to follow grade on sloped terrain, you still retain a full 6-foot fence height. With shorter panels from other suppliers, grade-following can significantly reduce your effective fence height."
    },
    {
      question: "What is the Ultimate Fence Package?",
      answer: "The Ultimate Fence Package combines 4x4x12-foot Black Steel Posts, a 6-foot cedar-framed corrugated steel panel fence, and a 2-foot cedar horizontal lattice topper. This configuration provides maximum privacy, exceptional durability, and a premium architectural appearance with a 30-year lifetime warranty option."
    },
    {
      question: "Can I get a lifetime warranty on a hybrid fence?",
      answer: "Yes! When you upgrade to 4x4 black steel fence posts, you qualify for a 30-year lifetime warranty on the system. The 26 gauge corrugated steel panels with HDP NoFade™ paint are incredibly durable, and combined with steel posts, this fence system will outlast traditional cedar by decades."
    },
    {
      question: "What colors are available for the steel panels?",
      answer: "The corrugated steel panels come in a variety of HDP NoFade™ paint colors from manufacturers like ColorMax and Barrier Boss, which we source through local distributors. Black is the most popular choice as it creates a striking contrast with natural cedar framing, but other colors are available upon request."
    },
    {
      question: "Do I need to maintain a Cedar/Steel Hybrid Fence?",
      answer: "The steel panels require zero maintenance - no staining, sealing, or treating ever. The cedar framing can optionally be stained for a uniform look, but the heavy lifting of privacy and durability is handled entirely by the maintenance-free steel panels."
    },
    {
      question: "Is this fence style good for sloped terrain?",
      answer: "Yes, particularly with Barrier Boss panels. Since they come in taller sheets, when we cut them to follow your property grade, you still maintain a full 6-foot fence height. Traditional cedar fencing and shorter panels often lose significant height on slopes."
    }
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

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageContent,
    "image": "https://myfence.com/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png",
    "author": {
      "@type": "Organization",
      "name": "MyFence.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MyFence.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myfence.com/myfence-logo.png"
      }
    },
    "datePublished": "2025-12-01",
    "dateModified": "2025-12-01"
  };

  return (
    <>
      <Seo
        title="Cedar/Steel Hybrid Fence Guide | Modern Privacy Fencing"
        description="Complete guide to cedar/steel hybrid fencing. Learn about Barrier Boss 26 gauge corrugated steel panels with HDP NoFade™ paint, pricing ($80/LF), 30-year warranty options, and why this is the ultimate privacy fence investment."
        canonical="https://myfence.com/blog/cedar-steel-hybrid-fence"
        image="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
        structuredData={[articleStructuredData, faqStructuredData]}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container">
            <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Cedar/Steel Hybrid Fence: The Ultimate Guide to Modern Privacy Fencing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-6">
              Discover why the cedar/steel hybrid fence system is revolutionizing privacy fencing in the Pacific Northwest - combining modern industrial aesthetics with zero-maintenance durability.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>December 2025</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>Premium Fencing</span>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="container py-8">
          <img
            src={heroImg}
            alt="Cedar/Steel Hybrid Fence with black corrugated steel panels and natural cedar framing installed in backyard"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </section>

        {/* AI Summary Section */}
        <section className="container py-8">
          <ArticleSummary 
            pageTitle={pageTitle}
            pageContent={pageContent}
          />
        </section>

        {/* Introduction */}
        <section className="container py-12">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If you have been looking for a fence that delivers the modern, industrial aesthetic while maintaining that authentic Pacific Northwest feel, the Cedar/Steel Hybrid Fence might be exactly what you need. This innovative fencing system replaces traditional cedar fence boards with 26 gauge corrugated steel panels featuring factory-finished HDP NoFade™ paint on both sides, creating a striking visual contrast with cedar framing while eliminating the ongoing maintenance burden of wood.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At MyFence.com, we have been installing these hybrid systems and watching them transform properties across the Greater Seattle area - from <Link href="/service-areas/seattle" className="text-primary hover:underline">Seattle</Link> and <Link href="/service-areas/bellevue" className="text-primary hover:underline">Bellevue</Link> to <Link href="/service-areas/kirkland" className="text-primary hover:underline">Kirkland</Link>, <Link href="/service-areas/redmond" className="text-primary hover:underline">Redmond</Link>, and <Link href="/service-areas/sammamish" className="text-primary hover:underline">Sammamish</Link>. In this comprehensive guide, we will walk you through everything you need to know about this premium fencing option - from the technology behind it to pricing and warranty options.
            </p>
          </div>
        </section>

        {/* What Makes It Different */}
        <section className="bg-muted/50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">What Makes Cedar/Steel Hybrid Different?</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={diagramImg}
                  alt="Diagram showing cedar/steel hybrid fence construction with cedar posts and framing surrounding corrugated steel panel"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cedar Frame Construction</h3>
                  <p className="text-muted-foreground">
                    The structural frame uses a <Link href="/fence-styles/picture-frame-fence" className="text-primary hover:underline">picture frame design</Link> with premium cedar posts, top rail, and bottom rail. This natural wood provides warmth and integrates beautifully with Pacific Northwest landscapes. The cedar can be left natural, <Link href="/pre-staining" className="text-primary hover:underline">pre-stained</Link>, or finished to match your property aesthetic.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">26 Gauge Corrugated Steel Panels</h3>
                  <p className="text-muted-foreground">
                    Instead of traditional cedar fence boards, deep-groove corrugated steel panels are secured within the cedar frame. The factory-finished HDP NoFade™ paint on both sides provides exceptional weather resistance and never needs refinishing, staining, or sealing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Zero-Gap Privacy</h3>
                  <p className="text-muted-foreground">
                    Unlike wood boards that can shrink, warp, and develop gaps over time, corrugated steel panels maintain 100% privacy from day one through year thirty. No gaps, no shrinkage, no warping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Homeowners Are Choosing Hybrid Fencing</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Eliminate Staining Costs</h3>
                  <p className="text-muted-foreground">
                    Traditional cedar fences need staining every 2-3 years at $1,500-3,000+ per application. Over 30 years, that is $15,000-45,000 in staining costs alone - eliminated with corrugated steel panels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Lock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Ultimate Privacy</h3>
                  <p className="text-muted-foreground">
                    Zero gaps between panels from installation through decades of use. No seasonal expansion and contraction creating sight lines through your fence.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">30-Year Warranty Option</h3>
                  <p className="text-muted-foreground">
                    Upgrade to 4x4 black steel posts to qualify for a lifetime warranty of 30 years. This fence system is built to outlast traditional cedar by decades.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Modern Industrial Look</h3>
                  <p className="text-muted-foreground">
                    Black corrugated steel panels create a striking modern aesthetic that is increasingly popular in contemporary home design while cedar framing retains natural warmth.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Superior Durability</h3>
                  <p className="text-muted-foreground">
                    HDP NoFade™ paint on 26 gauge steel resists rust, rot, insects, and UV damage. No board replacement, no rot board concerns, no maintenance headaches.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Palette className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Color Options</h3>
                  <p className="text-muted-foreground">
                    Panels come in multiple HDP NoFade™ paint colors. Black is most popular for contrast with cedar, but other options let you customize your look.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Preferred Supplier */}
        <section className="bg-muted/50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Why We Prefer Barrier Boss Panels</h2>
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="overflow-hidden pointer-events-none">
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      className="w-full h-full pointer-events-none"
                      src="https://www.youtube.com/embed/y1gHU5GDPt4?autoplay=1&mute=1&loop=1&playlist=y1gHU5GDPt4&controls=0&playsinline=1&modestbranding=1&rel=0"
                      title="Barrier Boss Deep Groove Panels"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerPolicy="no-referrer-when-downgrade"
                      loading="lazy"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <div>
                <img
                  src={panelSingleImg}
                  alt="Single Barrier Boss black deep groove corrugated steel panel"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-3 text-center">Deep groove profile for distinctive modern look</p>
              </div>
              <div>
                <img
                  src={panelsCloseupImg}
                  alt="Close-up of Barrier Boss black deep groove corrugated steel panels showing texture and HDP NoFade finish"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-3 text-center">Factory-finished HDP NoFade™ paint on both sides</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mb-6">
              Images courtesy of{" "}
              <a
                href="https://barrierbossusa.com/collections/unframed-corrugated-metal-fence-sheets/products/the-frontier-ribbed-sheet-metal-fence-panels-with-dualcoat%E2%84%A2-unframed?variant=46830827864283"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Barrier Boss USA
              </a>
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-6">
                We source our corrugated steel panels from two industry-leading manufacturers through local distributors: <strong className="text-foreground"><a
                  href="https://barrierbossusa.com/collections/unframed-corrugated-metal-fence-sheets/products/the-frontier-ribbed-sheet-metal-fence-panels-with-dualcoat%E2%84%A2-unframed?variant=46830827864283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors underline"
                >Barrier Boss</a></strong> and <strong className="text-foreground">ColorMax</strong>. While both produce quality 26 gauge corrugated steel fence panels with HDP NoFade™ paint, we generally prefer Barrier Boss for one critical reason:
              </p>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">The Height Advantage</h3>
                  <p className="text-muted-foreground">
                    Barrier Boss panels come in taller sheets. When panels are cut down to follow grade on sloped terrain - which is extremely common in the Pacific Northwest - you still retain a full 6-foot fence height. Our <Link href="/fence-genius" className="text-primary hover:underline">Fence Genius precision installation</Link> ensures panels are cut perfectly to follow your property's contours. With shorter panels from other suppliers, grade-following can significantly reduce your effective fence height, sometimes leaving you with only 5 feet or less of privacy where your property slopes. This grade-following capability is especially important in hilly areas like <Link href="/service-areas/issaquah" className="text-primary hover:underline">Issaquah</Link>, <Link href="/service-areas/maple-valley" className="text-primary hover:underline">Maple Valley</Link>, and <Link href="/service-areas/enumclaw" className="text-primary hover:underline">Enumclaw</Link>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Steel Post Upgrade Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Upgrade to Black Steel 4x4 Fence Posts</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img
                  src={steelPostsFenceImg}
                  alt="Cedar/Steel hybrid fence with black 4x4 steel posts and corrugated panels"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  While our standard hybrid fence uses traditional wood posts, upgrading to <strong className="text-foreground">black-coated 4x4 steel fence posts</strong> takes your investment to the next level. These posts are backed by Barrier Boss's robust <strong className="text-foreground">40-year warranty</strong> — a testament to their exceptional durability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional wood fence posts are the most common point of failure in any fence system. Over time, even pressure-treated posts absorb moisture at ground level, leading to rot and eventual structural failure. This is why so many fences lean, sag, or collapse entirely within 10-15 years.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Steel posts eliminate this problem entirely. They won't rot, warp, or weaken over time. Combined with Barrier Boss or ColorMax corrugated steel panels, you get a fence system where the structural components are designed to last for generations.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <img
                    src={steelPostCloseupImg}
                    alt="Close-up of black powder-coated steel fence post with fade and rust-proof finish"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">The Modern Industrial Aesthetic</h3>
                  <p className="text-muted-foreground">
                    The black steel posts perfectly complement the black corrugated panels, creating a cohesive modern industrial look. Paired with natural cedar framing, the contrast creates a striking visual that's both contemporary and warm — the perfect balance for Pacific Northwest properties.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Steel Posts Are Worth the Investment</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">40-year warranty</strong> from Barrier Boss</span>
                    </div>
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Zero rot or decay</strong> at ground level</span>
                    </div>
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">No leaning or sagging</strong> over time</span>
                    </div>
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Cohesive black finish</strong> matches steel panels</span>
                    </div>
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">True long-term investment</strong> for property perimeters</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ultimate Package */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">The Ultimate Fence Package</h2>
              <p className="text-xl text-muted-foreground">
                For homeowners seeking the absolute best in privacy, durability, and aesthetics, our Ultimate Fence Package delivers total perimeter security with a premium architectural appearance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">4x4x12-Foot Black Steel Posts</h3>
                  <p className="text-sm text-muted-foreground">
                    Heavy-duty steel posts backed by Barrier Boss's 40-year warranty provide unmatched rigidity. No rot, no lean, no replacement — ever.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">6-Foot Hybrid Panel Fence</h3>
                  <p className="text-sm text-muted-foreground">
                    Cedar-framed corrugated steel panels deliver zero-gap privacy with the modern industrial aesthetic that blends beautifully with PNW landscapes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">2-Foot Cedar Horizontal Lattice</h3>
                  <p className="text-sm text-muted-foreground">
                    Adds architectural elegance with our <Link href="/fence-upgrades/lattice-toppers" className="text-primary hover:underline">horizontal lattice topper</Link> and brings your total fence height to nearly 8 feet while complying with local building codes.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                This configuration represents the pinnacle of residential fencing - maximum privacy, exceptional durability, and a distinctive look that will make your property stand out for decades.
              </p>
              <Button size="lg" asChild>
                <Link href="/quote">Get a Quote for Ultimate Package</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing and Investment</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-primary">$80+</p>
                    <p className="text-muted-foreground">per linear foot starting price</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Premium 26 gauge corrugated steel panels with HDP NoFade™ paint</span>
                    </div>
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Cedar framing with posts, rails, and trim</span>
                    </div>
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Professional installation with <Link href="/fence-genius" className="text-primary hover:underline">Fence Genius</Link> precision</span>
                    </div>
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Grade-following installation on sloped terrain</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-2xl font-semibold mb-4">Is It Worth the Investment?</h3>
              <p className="text-muted-foreground mb-6">
                At $80+ per linear foot, the Cedar/Steel Hybrid Fence costs significantly more than traditional cedar fencing upfront. However, consider the total cost of ownership:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Staining costs eliminated:</strong> $15,000-45,000 saved over 30 years</span>
                </div>
                <div className="flex gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Board replacement eliminated:</strong> No rotting, warping, or falling boards</span>
                </div>
                <div className="flex gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">30-year warranty option:</strong> Peace of mind with steel post upgrade</span>
                </div>
                <div className="flex gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Property value increase:</strong> Premium fencing adds curb appeal</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                For homeowners planning to stay in their home long-term, or those who simply want the best available fencing solution, the Cedar/Steel Hybrid represents excellent value despite the higher initial cost. We serve homeowners throughout the Puget Sound region including <Link href="/service-areas/gig-harbor" className="text-primary hover:underline">Gig Harbor</Link>, <Link href="/service-areas/federal-way" className="text-primary hover:underline">Federal Way</Link>, <Link href="/service-areas/renton" className="text-primary hover:underline">Renton</Link>, and <Link href="/service-areas/covington" className="text-primary hover:underline">Covington</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Invest in Premium Privacy?</h2>
              <p className="text-muted-foreground mb-8">
                Get a personalized quote for your Cedar/Steel Hybrid Fence project. Our team will help you design the perfect solution for your property, whether you are looking for standard hybrid fencing or the Ultimate Fence Package.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Your Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence">View Fence Style Page</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Link href="/blog/cedar-board-grade">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/d27f46a0-cb41-4ed9-917a-44e0969e2f57.png" 
                        alt="Cedar fence board grades"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Choosing Cedar Fence Board Grade</h3>
                      <p className="text-sm text-muted-foreground">Learn about different cedar grades for traditional fencing</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Link href="/blog/seattle-fence-cost-2025">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/936790e3-e01a-4dcd-bf22-e5ac97188fd1.png" 
                        alt="Fence cost in Seattle 2025"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Wooden Fence Cost in Seattle 2025</h3>
                      <p className="text-sm text-muted-foreground">Compare hybrid fence costs to traditional options</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Link href="/fence-upgrades/lattice-toppers">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/23f4897d-5b29-491b-9810-3568c0cb6ebe.png" 
                        alt="Lattice topper upgrade"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Lattice Toppers for Extra Height</h3>
                      <p className="text-sm text-muted-foreground">Learn about the 2-foot lattice topper in Ultimate Package</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* References & Image Attribution */}
        <section className="py-12 border-t">
          <div className="container">
            <h2 className="text-xl font-semibold mb-4">References & Image Attribution</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Steel panels featured in this article are sourced from{" "}
                <a
                  href="https://barrierbossusa.com/collections/unframed-corrugated-metal-fence-sheets/products/the-frontier-ribbed-sheet-metal-fence-panels-with-dualcoat%E2%84%A2-unframed?variant=46830827864283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Barrier Boss USA
                </a>
                , a supplier of premium corrugated steel fence panels and metal fencing materials.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CedarAluminumHybridFenceMDX;
