import { useState, useEffect, useRef } from "react";
import Seo from "@/components/Seo";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import { ArticleSummary } from "@/components/ArticleSummary";

const Index = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { toast } = useToast();

  const reviewsRef = useRef<HTMLDivElement | null>(null);
  
  // Load Trustindex reviews widget into the section container
  useEffect(() => {
    if (!reviewsRef.current) return;
    const s = document.createElement("script");
    s.src = "https://cdn.trustindex.io/loader.js?d273c79511b386516c861cd858a";
    s.async = true;
    s.defer = true;
    reviewsRef.current.appendChild(s);
    return () => {
      s.remove();
      if (reviewsRef.current) reviewsRef.current.innerHTML = "";
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting contact form with data:', formData);
      
      // Use Supabase client to call edge function
      const { data, error } = await supabase.functions.invoke('send-contact-form', {
        body: formData,
      });

      if (error) {
        console.error('Contact form error:', error);
        throw new Error(`Failed to send message: ${error.message}`);
      }

      console.log('Email sent successfully:', data);

      // Success - trigger effects
      const formElement = document.querySelector('#contact-form');
      if (formElement) {
        const rect = formElement.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        // Import effects dynamically to avoid blocking
        import("@/lib/effects").then(m => {
          m.burstFirework(x, y);
          m.popEmoji(x - 50, y - 100, "🎉");
        });
      }

      setIsFormSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error",
        description: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MyFence.com",
    image: "https://myfence.com/lovable-uploads/850adb64-a0e3-437e-a783-9c2df4f87989.png",
    url: "https://myfence.com",
    telephone: "+1-253-455-1885",
    priceRange: "$$",
    address: { 
      "@type": "PostalAddress", 
      addressLocality: "Seattle", 
      addressRegion: "WA", 
      addressCountry: "US" 
    },
    areaServed: [
      { "@type": "City", "name": "Seattle, WA" },
      { "@type": "City", "name": "Bellevue, WA" },
      { "@type": "City", "name": "Covington, WA" },
      { "@type": "City", "name": "Enumclaw, WA" },
      { "@type": "City", "name": "Federal Way, WA" },
      { "@type": "City", "name": "Gig Harbor, WA" },
      { "@type": "City", "name": "Issaquah, WA" },
      { "@type": "City", "name": "Kirkland, WA" },
      { "@type": "City", "name": "Lake Tapps, WA" },
      { "@type": "City", "name": "Maple Valley, WA" },
      { "@type": "City", "name": "Mountlake Terrace, WA" },
      { "@type": "City", "name": "Redmond, WA" },
      { "@type": "City", "name": "Renton, WA" },
      { "@type": "City", "name": "Sammamish, WA" }
    ],
    sameAs: [
      "https://www.facebook.com/myfence.com.official",
      "https://www.instagram.com/myfence.com.official/",
      "https://twitter.com/MyFenceDotCom",
      "https://www.youtube.com/@fencegenius",
      "https://www.linkedin.com/company/myfence-com/",
      "https://www.pinterest.com/MyFenceDotCom/",
      "https://www.tiktok.com/@myfence.com"
    ]
  };

  return (
    <main>
      <Seo
        title="Seattle Fence Contractor | MyFence.com"
        description="Father & son fence company in Seattle using Fence Genius technology. Wood styles: picture frame, 3-rail, horizontal lattice. Call (253) 455-1885."
        canonical="https://myfence.com/"
        structuredData={orgLd}
      />

      <section
        className="relative h-64 sm:h-72 md:h-screen w-full border-b"
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
          setPointer({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        style={{
          // signature interaction: responsive gradient following cursor
          // safely setting CSS variables used by the design system
          ['--pointer-x' as any]: `${pointer.x}px`,
          ['--pointer-y' as any]: `${pointer.y}px`,
        }}
      >
        <div className="relative h-full w-full">
          <div className="video-hero" aria-hidden="true">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LlFKNi-35Mk?autoplay=1&mute=1&loop=1&playlist=LlFKNi-35Mk&controls=0&playsinline=1&modestbranding=1&rel=0"
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MyFence.com installation montage"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-b from-transparent to-background" aria-hidden="true" />
        </div>
      </section>

      <section className="container relative z-10 -mt-24 md:-mt-36 lg:-mt-44 pt-10 md:pt-12 pb-0">
        <div className="grid md:grid-cols-[1fr_1fr] items-stretch rounded-xl shadow-elevated overflow-hidden">
          <div className="bg-foreground text-background p-6 md:p-10">
            <div className="text-xs uppercase tracking-wider opacity-80">About Us</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight">Your Local Seattle Fence Contractor</h2>
            <p className="mt-4 text-sm md:text-base opacity-90 leading-relaxed hidden md:block">
              MyFence.com is a Seattle-based startup founded by father and son duo Eric & Andrew Knudsen. We're not a franchise—just a local company with a killer name! As the original company using Fence Genius technology, we're spearheading efforts to modernize an outdated industry where traditional contractors build everything onsite with no customer clarity about what they'll receive. With zero subcontracting, everything is done in-house by our skilled team, combining traditional craftsmanship with innovative technology to deliver exceptional, transparent results.
            </p>
            <div className="mt-5">
              <Button size="lg" variant="secondary" onClick={() => setIsQuoteModalOpen(true)} className="hover-scale w-full sm:w-auto">Free Quotes</Button>
            </div>
          </div>
          <div className="bg-card text-foreground p-3 md:p-8 flex items-center justify-center order-first md:order-last">
            <div className="w-full rounded-xl overflow-hidden ring-2 ring-primary/60 shadow-glow">
              <AspectRatio ratio={16/9} className="md:aspect-[4/3]">
                <img
                  src="/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png"
                  alt="Father and son team at MyFence.com standing in front of a cedar fence in Seattle"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-20 md:pt-28 lg:pt-36 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">Cedar & Modern Styles</h2>
            <p className="text-muted-foreground mt-2">From classic cedar privacy to sleek horizontal and metal accents, we bring your vision to life.</p>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">Transparent Pricing</h2>
            <p className="text-muted-foreground mt-2">Use our Virtual Quote Tool for a fast estimate, then we confirm on-site with <Link to="/fence-genius" className="text-primary hover:underline">Fence Genius</Link>.</p>
          </div>
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-semibold">{WARRANTY_CONSTANTS.TITLE}</h2>
            <p className="text-muted-foreground mt-2">{WARRANTY_CONSTANTS.FULL_DESCRIPTION}</p>
          </div>
        </div>
      </section>

      {/* AI Company Summary */}
      <section className="container py-12 md:py-16">
        <ArticleSummary 
          pageTitle="MyFence.com Company Overview"
          pageContent="Write a professional company summary for MyFence.com, a Seattle-area wood fence contractor that is family-owned and operated by a father-and-son team of engineers. Highlight how MyFence.com leverages exclusive technology developed by its sister company, Fence Genius, to revolutionize the outdated fence construction industry. The Fence Genius system includes software and manufacturing technology that enables off-site prefabrication of custom, slope-following fence panels and gates, ensuring unmatched precision, quality, and efficiency. Emphasize that MyFence.com is the only contractor in the market using this patented system. Despite using advanced technology and delivering higher-quality results, their pricing remains competitive with traditional installers. The company is committed to raising standards in fence building and is rapidly growing in Seattle, WA and the surrounding region."
        />
      </section>

      {/* Popular styles */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Popular Fence Styles</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Our most requested builds in Seattle.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <Card className="glass-card">
            <CardContent className="p-3">
              <div className="glass-frame">
                <AspectRatio ratio={1}>
                  <img src="/lovable-uploads/83d708ee-9b9e-4c77-8965-6ab1e7d3b1d6.png" alt="Picture frame cedar fence by MyFence.com in Seattle" loading="lazy" className="w-full h-full object-cover" width={1080} height={1080} />
                </AspectRatio>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold">Picture Frame Fence</h3>
                <p className="text-sm text-muted-foreground">Clean lines, framed panels.</p>
                <Button className="mt-3 w-full" onClick={() => setIsQuoteModalOpen(true)} aria-label="Click here for Free Estimate for Picture Frame Fence">Click here for Free Estimate</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-3">
              <div className="glass-frame">
                <AspectRatio ratio={1}>
                  <img src="/lovable-uploads/3ec61262-f5b7-49bf-8010-8dff863ca81b.png" alt="3 rail picture frame cedar fence installation in Seattle" loading="lazy" className="w-full h-full object-cover" width={1080} height={1080} />
                </AspectRatio>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold">3 Rail Picture Frame Fence</h3>
                <p className="text-sm text-muted-foreground">Sturdy rails with a premium look.</p>
                <Button className="mt-3 w-full" onClick={() => setIsQuoteModalOpen(true)} aria-label="Click here for Free Estimate for 3 Rail Picture Frame Fence">Click here for Free Estimate</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card sm:col-span-2 lg:col-span-1">
            <CardContent className="p-3">
              <div className="glass-frame">
                <AspectRatio ratio={1}>
                  <img src="/lovable-uploads/6ca53c52-066f-4174-81fb-cf30fd6b64fd.png" alt="Horizontal lattice top cedar fence by MyFence.com" loading="lazy" className="w-full h-full object-cover" width={1080} height={1080} />
                </AspectRatio>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold">Horizontal Lattice Fence</h3>
                <p className="text-sm text-muted-foreground">Modern privacy with airflow.</p>
                <Button className="mt-3 w-full" onClick={() => setIsQuoteModalOpen(true)} aria-label="Click here for Free Estimate for Horizontal Lattice Fence">Click here for Free Estimate</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-12 md:py-16" aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className="text-2xl md:text-3xl font-bold">Our reviews are in, and we love them!</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Choosing a Seattle fence contractor is an investment—make it with the father & son team that builds it right the first time. If you're searching for a fence company near me, our customers agree you're in the right place.</p>
        <Card className="mt-6">
          <CardContent className="p-6">
            <div ref={reviewsRef} className="w-full" aria-live="polite"></div>
            <noscript>
              <p className="text-sm text-muted-foreground">Enable JavaScript to view our Trustindex reviews.</p>
            </noscript>
          </CardContent>
        </Card>
      </section>

      <section className="container py-12 md:py-16" aria-labelledby="instant-quote-heading">
        <h2 id="instant-quote-heading" className="text-2xl md:text-3xl font-bold">Instant Online Quote</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Build your fence estimate in minutes with real-time pricing.</p>
        
        {/* Mobile version - Simple button to external site */}
        <Card className="mt-6 glass-card overflow-hidden md:hidden">
          <CardContent className="p-6 text-center">
            <div className="text-xs uppercase tracking-wider text-primary/90 mb-2">Powered by <Link to="/fence-genius" className="underline hover:no-underline">Fence Genius</Link></div>
            <h3 className="text-xl font-semibold mb-4">Get Your Virtual Quote</h3>
            <p className="text-muted-foreground mb-6">Use our interactive tool to design your fence and get instant pricing.</p>
            <Button size="lg" className="w-full" asChild>
              <a href="https://SeattleFenceQuote.com" target="_blank" rel="noopener noreferrer" aria-label="Get Virtual Quote on SeattleFenceQuote.com">
                Get Virtual Quote
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Desktop version - Full layout */}
        <Card className="mt-6 glass-card overflow-hidden hidden md:block">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-wider text-primary/90">Powered by <Link to="/fence-genius" className="underline hover:no-underline">Fence Genius</Link></div>
                <h3 className="mt-2 text-2xl font-semibold">Start Building Your Estimate</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" /> Real-time pricing</li>
                  <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" /> Interactive map layout</li>
                  <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" /> No obligation — free to use</li>
                </ul>
                <div className="mt-6">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/quote" aria-label="Start Building Your Estimate on the quote page">Start Building Your Estimate</Link>
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[220px] lg:min-h-[320px] bg-gradient-primary p-4 md:p-6 flex items-center justify-center">
                <div className="w-full h-full rounded-xl overflow-hidden ring-2 ring-primary/60 shadow-glow">
                  <img
                    src="/lovable-uploads/f8a11a30-3a13-42cb-8880-f95fd7547c0e.png"
                    alt="Fence layout map example from SeattleFenceQuote"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-x-4 bottom-4">
                  <p className="text-xs md:text-sm bg-background/70 text-foreground rounded-md px-3 py-2 shadow-elevated backdrop-blur">
                    Pick your fence style, posts, and upgrades — then draw your fence on your property to get a quick quote.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Trellis systems */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Trellis & Pergola Systems</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Architectural trellis accents built to last — perfect for Northwest gardens.</p>
        <Card className="mt-6">
          <CardContent className="p-0 overflow-hidden">
            <img src="/lovable-uploads/881d3263-4c0d-4f6f-b48f-92eda8da6f09.png" alt="Cedar trellis and pergola system by MyFence.com, designed with Fence Genius technology" loading="lazy" className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] object-cover" />
          </CardContent>
        </Card>
      </section>

      {/* Contact form */}
      <section className="container py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Tell us about your project. We'll reply quickly.</p>
        
        <Card className="mt-6">
          <CardContent className="p-6">
            {isFormSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-700 mb-2">Form Successfully Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your message. We'll get back to you within 24 hours.
                </p>
                <Button variant="secondary" asChild>
                  <a href="tel:+12534551885" aria-label="Call (253) 455-1885">(253) 455-1885</a>
                </Button>
              </div>
            ) : (
              <form
                id="contact-form"
                className="grid lg:grid-cols-2 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                      aria-describedby="name-required"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      aria-describedby="email-required"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-sm font-medium">
                      Property Address
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Seattle, WA"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[200px] resize-none"
                      placeholder="Tell us about your fence project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full lg:w-auto px-8"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
};

export default Index;