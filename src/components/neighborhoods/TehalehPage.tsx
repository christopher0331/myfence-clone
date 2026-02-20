"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone, Star } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import OptimizedImage from "@/components/OptimizedImage";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

interface TehalehPageProps {
  canonical?: string;
  isUpper?: boolean;
  title?: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  videoUrl?: string;
}

const TehalehPage = ({ 
  canonical = "https://myfence.com/service-areas/bonney-lake/lower-tehaleh",
  isUpper = false,
  title,
  description,
  metaTitle,
  metaDescription,
  videoUrl = "gzAzQLdfqDA"
}: TehalehPageProps) => {
  const displayTitle = title || (isUpper ? "Upper Tehaleh Fence Installation" : "Lower Tehaleh Fence Installation");
  const displayMetaTitle = metaTitle || (isUpper ? "Upper Tehaleh Fence Installation | MyFence.com" : "Lower Tehaleh Fence Installation | MyFence.com");
  const displayMetaDesc = metaDescription || (isUpper 
    ? "Expert fence installation for Upper Tehaleh's elevated homesites. HOA-compliant cedar and hybrid fencing built for mountain views and plateau winds." 
    : "Professional fence installation for Lower Tehaleh's family neighborhoods. Serving walkable communities with HOA-approved cedar and hogwire fencing.");
  const neighborhoodLabel = isUpper ? "Upper Tehaleh" : "Lower Tehaleh";
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: `${neighborhoodLabel}, Bonney Lake`,
    pageTitle: displayTitle,
    description: displayMetaDesc,
    faqItems: [
      {
        question: `Do I need HOA approval to build a fence in ${neighborhoodLabel}?`,
        answer: "Yes. Tehaleh has architectural guidelines covering fence styles, heights, and colors. Most areas require earth-tone stains and prohibit chain-link. We prepare submission packages for the Tehaleh Design Review Committee and ensure your project meets requirements for first-time approval.",
      },
      {
        question: `What fence styles work best in ${neighborhoodLabel}?`,
        answer: isUpper
          ? "Our hybrid aluminum/cedar system is popular on the upper plateau for wind resistance and low maintenance. Cedar privacy and hogwire also meet HOA standards. We recommend styles that complement the newer architectural styles and handle elevation changes."
          : "Western Red Cedar privacy and hogwire systems are highly popular in Lower Tehaleh, offering a timeless Pacific Northwest look. Our hybrid system is also approved. We'll recommend options that fit your neighborhood phase and trailside setbacks.",
      },
      {
        question: `How much does fence installation cost in ${neighborhoodLabel}?`,
        answer: `Fence installation in ${neighborhoodLabel} typically runs $45–$70 per linear foot depending on style and terrain. HOA-approved materials and slope can affect price. Use our Virtual Quote Tool for an estimate, then we'll provide exact pricing after an on-site measurement.`,
      },
      {
        question: `How long does fence installation take in ${neighborhoodLabel}?`,
        answer: "Most Tehaleh projects complete in 1–2 days after HOA approval and panel manufacturing. We use Fence Genius to build panels off-site, which minimizes on-site time. Total timeline from approval to completion is typically 2–4 weeks including the design review process.",
      },
    ],
  });

  return (
    <>
      <Seo
        title={displayMetaTitle}
        description={displayMetaDesc}
        canonical={canonical}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/bonney-lake"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bonney Lake
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              {/* Hero Content */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving {isUpper ? "Upper Tehaleh" : "Lower Tehaleh"}, Bonney Lake WA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {displayTitle}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {description || (isUpper 
                    ? "Specialized HOA-compliant fence installation for Tehaleh's upper plateau. We build durable solutions engineered for elevated terrain and stunning mountain views."
                    : "Expert fence installation for Tehaleh's established family neighborhoods. Providing secure, beautiful, and HOA-approved fencing for your walkable community.")}
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

              {/* Service Area Map */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <GoogleBusinessMap
                  city={isUpper ? "Upper Tehaleh" : "Lower Tehaleh"}
                  state="Washington"
                  radiusMiles={5}
                  zoom={11}
                  showBusinessInfo={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges Bar */}
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

        {/* Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {isUpper ? "Fencing for the Upper Plateau" : "Fencing for Walkable Neighborhoods"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {isUpper 
                  ? "Upper Tehaleh represents the newest evolution of Bonney Lake's premier master-planned community. Living on the upper plateau offers unmatched proximity to nature and breathtaking views of Mt. Rainier, but it also brings unique challenges for fencing—including increased wind exposure and sharper terrain changes."
                  : "Lower Tehaleh is the heart of the community, characterized by established neighborhoods, the iconic Tehaleh Post, and miles of interconnected trails. Fencing here requires a balance between backyard privacy and the open, welcoming aesthetic that defines these walkable neighborhoods."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {isUpper
                  ? "We specialize in 'mountain-smart' installations for Upper Tehaleh. Our hybrid systems are particularly popular here, combining the natural look of cedar with the wind-resistant strength of aluminum posts. We ensure every fence meets the specific architectural standards of the upper neighborhoods while maximizing the longevity of your investment."
                  : "In Lower Tehaleh, we focus on family-friendly designs that provide security for pets and children without obstructing the community feel. We're intimately familiar with the HOA requirements for neighborhoods near the trail systems and community parks, ensuring your project gets approved quickly and builds lasting value."}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why {isUpper ? "Upper Tehaleh" : "Lower Tehaleh"} Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA Compliance Experts</h3>
                      <p className="text-muted-foreground">
                        Deep knowledge of Tehaleh's design standards. We handle
                        all submission documentation and ensure first-time approval for {isUpper ? "Plateau" : "Valley"} neighborhoods.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {isUpper ? "Wind & Slope Specialists" : "Trailside Specialists"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isUpper 
                          ? "Expert installation on the plateau's varied terrain using reinforced systems built for higher wind exposure."
                          : "Specialized designs for properties backing to Tehaleh's extensive trail network and community amenities."}
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
                        Comprehensive {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty giving you peace of mind in {isUpper ? "Upper" : "Lower"} Tehaleh.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Family-Focused Designs</h3>
                      <p className="text-muted-foreground">
                        Safe, durable fencing solutions designed for active Tehaleh families with children and pets.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Local Reviews */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What {neighborhoodLabel} Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    {isUpper
                      ? "We're on the plateau and needed a fence that could handle the wind. MyFence.com recommended the hybrid system and handled our HOA submission. The fence looks great and we had zero issues with approval."
                      : "Our backyard backs to the trail and we wanted privacy without blocking the community feel. They suggested hogwire with cedar posts—approved first try and the crew was in and out in two days."}
                  </p>
                  <p className="text-sm font-medium">— {isUpper ? "Chris" : "Sarah"} in {neighborhoodLabel}</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    {isUpper
                      ? "Professional from start to finish. They knew exactly what the design committee would approve and the cedar/hybrid combo has held up perfectly through two winters on the hill."
                      : "We needed a fence for the kids and dog. MyFence.com measured everything, got our HOA packet in, and installed in no time. Very happy with the result and the warranty gives us peace of mind."}
                  </p>
                  <p className="text-sm font-medium">— {isUpper ? "Jennifer" : "Mike"} in {neighborhoodLabel}</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Work in {neighborhoodLabel} & Tehaleh
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We've completed fence projects throughout Tehaleh—HOA-compliant cedar, hogwire, and hybrid installations built for Bonney Lake's master-planned community.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                      alt={`6' cedar privacy fence installation in ${neighborhoodLabel}, Bonney Lake`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">6' Cedar Privacy</h3>
                    <p className="text-sm text-muted-foreground">Tehaleh HOA-compliant</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/6_%20Black%20Hogwire/IMG_7356.webp?updatedAt=1762037826604"
                      alt={`Hogwire with cedar frame fence in ${neighborhoodLabel}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hogwire with Cedar Frame</h3>
                    <p className="text-sm text-muted-foreground">Trailside-friendly design</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
                      alt={`Cedar aluminum hybrid fence in ${neighborhoodLabel}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hybrid Aluminum/Cedar</h3>
                    <p className="text-sm text-muted-foreground">Wind-resistant plateau option</p>
                  </div>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                <Link href="/gallery" className="text-primary hover:underline">View full gallery</Link> for more Bonney Lake–area projects.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured {neighborhoodLabel} Installation
              </h2>
              <Card className="p-6 md:p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                    alt={`Featured ${neighborhoodLabel} installation: cedar fence, Bonney Lake`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isUpper
                    ? <>A homeowner on the Upper Tehaleh plateau needed an HOA-compliant fence that could handle wind and a slight grade change. We installed a 6' cedar privacy fence with our hybrid aluminum post option for extra stability, submitted the full design package to the Tehaleh Design Review Committee, and received first-time approval. Total linear footage was 180 feet; installation was completed in two days. The fence is under our {WARRANTY_CONSTANTS.YEARS}-year warranty.</>
                    : <>A Lower Tehaleh family near the community trails needed privacy from the path while keeping an open feel. We installed a hogwire fence with cedar posts and frame—approved by the HOA on first submission. The project included a gate for backyard access and careful placement to respect trail setbacks. Total linear footage was 145 feet; installation was completed in one day. The fence is under our {WARRANTY_CONSTANTS.YEARS}-year warranty.</>}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Style:</strong> {isUpper ? "Cedar privacy with hybrid posts" : "Hogwire with cedar frame"} · <strong>Location:</strong> {neighborhoodLabel}, Bonney Lake
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Tehaleh Specific Considerations */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">{neighborhoodLabel}-Specific Fencing Considerations</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{neighborhoodLabel} HOA Architectural Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tehaleh maintains rigorous architectural review standards. We're intimately familiar with the Tehaleh Design Review Committee's requirements for both the {isUpper ? "newest phases on the plateau" : "established neighborhoods near the community center"}. Our team prepares comprehensive submission packages to ensure swift approval.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">{neighborhoodLabel} Topography and {isUpper ? "Wind" : "Trail"} Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {isUpper 
                      ? "The upper plateau's unique geography requires fencing that can handle both steep grade changes and increased wind loads. We use Fence Genius technology to create custom panels that follow the terrain perfectly while maintaining structural integrity."
                      : "Lower Tehaleh's properties often border the community's signature trail system. We design installations that provide privacy while respecting the setbacks and aesthetic requirements for these shared spaces."}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">{neighborhoodLabel} Premium, Low-Maintenance Materials</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {isUpper 
                      ? "For the newer homes in Upper Tehaleh, we recommend our hybrid aluminum/cedar systems. They provide a modern look that complements the latest architectural styles while virtually eliminating maintenance requirements."
                      : "In Lower Tehaleh, our Western Red Cedar privacy fences and hogwire systems are highly popular, offering a timeless Pacific Northwest look that fits the established neighborhood character."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in {neighborhoodLabel}
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                HOA-compliant fencing is an investment in your Tehaleh property. Below are typical ranges; your exact price depends on linear footage, style, and terrain.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $45–$65 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $40–$56 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$70 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Slope and HOA-approved materials may affect cost. Get an exact quote for your {neighborhoodLabel} property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your {neighborhoodLabel} property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Fence Styles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in {neighborhoodLabel}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {isUpper ? "Meets Tehaleh design standards with earth-tone stain options. Board-on-board adds privacy and wind buffering on the plateau." : "The most popular choice for Lower Tehaleh backyards. Timeless cedar that fits the walkable neighborhood character and HOA requirements."}
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {isUpper ? "Open design reduces wind load while defining the property. Cedar frame with black or galvanized mesh—approved for Tehaleh phases." : "Ideal for trailside lots—defines the boundary without blocking the community feel. Cedar frame with mesh; popular near the Post and trails."}
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {isUpper ? "Our strongest system for plateau wind and slope. Black aluminum panels in cedar frame; zero staining. Often recommended for newer Upper Tehaleh homes." : "Low-maintenance option for busy Tehaleh families. Black aluminum and cedar; HOA-approved and durable for kids and pets."}
                  </p>
                  <Link href="/fence-styles/cedar-aluminum-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName={`${isUpper ? "Upper" : "Lower"} Tehaleh Bonney Lake fence`} />

        {/* Tehaleh Fencing Video Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{isUpper ? "Upper" : "Lower"} Tehaleh Fencing</h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Watch our efficient installation process in {isUpper ? "Upper" : "Lower"} Tehaleh. {isUpper 
                      ? "From plateau properties with mountain views to newer developments, we deliver mountain-smart fencing built for durability."
                      : "From family neighborhoods near the Post to trailside homes, we deliver quality fences that match the walkable community lifestyle."}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every {isUpper ? "Upper" : "Lower"} Tehaleh fence combines sophisticated aesthetics with family-friendly durability.
                  </p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoUrl}?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title={`${isUpper ? "Upper" : "Lower"} Tehaleh Fencing`}
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our {isUpper ? "Upper" : "Lower"} Tehaleh Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. {neighborhoodLabel} Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We meet at your home to understand your family's needs, assess your property's {isUpper ? "plateau" : "neighborhood"} terrain, and discuss HOA-compliant designs. Fence Genius captures precise measurements.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. {neighborhoodLabel} Design & HOA Submission</h3>
                  <p className="text-muted-foreground">
                    Choose from cedar, hogwire, or hybrid options approved for {isUpper ? "Upper" : "Lower"} Tehaleh. We handle all architectural committee documentation.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements. Custom panels ensure consistent quality and minimize disruption to your daily routine.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. {neighborhoodLabel} Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives prepared with pre-fabricated panels and specialized equipment for {isUpper ? "wind-resistant" : "precise"} installation. Most Tehaleh projects finished in 1-2 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Full walkthrough and activation of your {WARRANTY_CONSTANTS.YEARS}-year warranty coverage.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Bonney Lake Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout the Bonney Lake area. If you're in Tehaleh, we also serve Falling Water, Mountain Creek, Downtown Bonney Lake, and Lake Tapps.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake">Bonney Lake overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/falling-water">Falling Water</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/mountain-creek">Mountain Creek</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/downtown-bonney-lake">Downtown Bonney Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/lake-tapps">Lake Tapps</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your {neighborhoodLabel} Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in {neighborhoodLabel}. Schedule a free consultation with Tehaleh's trusted fence installation experts.
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
};

export default TehalehPage;
