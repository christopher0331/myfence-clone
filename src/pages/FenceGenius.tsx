import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FenceGenius = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Fence Genius Technology | MyFence.com Seattle",
    "description": "Learn about Fence Genius, our patented technology that removes guesswork from fence construction and guarantees algorithmically perfect fences.",
    "url": "https://myfence.com/fence-genius",
    "mainEntity": {
      "@type": "TechArticle",
      "headline": "Fence Genius: Revolutionary Fence Construction Technology",
      "description": "Patented technology that ensures perfect fence installation through precise measurements and algorithmic calculations.",
      "author": {
        "@type": "Organization",
        "name": "MyFence.com"
      }
    }
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "What is Fence Genius and Why Does MyFence.com Use It?",
    "description": "MyFence.com has a unique competitive edge right now in the fence construction industry as they are one of few to be using the new Fence Genius technology. But what exactly does that mean? Fence Genius enables total pre fabrication of custom contour following fence and gate systems through advanced software calculation practices. Taking the guess work out of the construction process. Big issue in the industry today? You really don't know what you're going to get, or what to expect from your contractor. With us, and Fence Genius, you have total clarity over how it will look and how it'll be built.",
    "thumbnailUrl": "https://i.ytimg.com/vi/aO_Zrt5qyGg/maxresdefault.jpg",
    "uploadDate": "2025-11-26",
    "duration": "PT1M23S",
    "contentUrl": "https://www.youtube.com/watch?v=aO_Zrt5qyGg",
    "embedUrl": "https://www.youtube-nocookie.com/embed/aO_Zrt5qyGg",
    "publisher": {
      "@type": "Organization",
      "name": "MyFence.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myfence.com/myfence-logo.png"
      }
    }
  };

  return (
    <main>
      <Seo
        title="Fence Genius: Precision Cedar Fences Seattle"
        description="Revolutionary Fence Genius technology for perfect fence installation in Seattle, WA. Eliminate guesswork with algorithmic precision. Call (253) 455-1885 for consultation."
        canonical="https://myfence.com/fence-genius"
        structuredData={[structuredData, videoSchema]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed"
          style={{ backgroundImage: "url('/lovable-uploads/800f15ac-11f8-4b66-9a04-f21095de923d.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/60" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 md:mb-8">
              <img 
                src="/lovable-uploads/850adb64-a0e3-437e-a783-9c2df4f87989.png" 
                alt="Fence Genius Logo - Revolutionary fence construction technology"
                className="h-24 md:h-20 mx-auto mb-4"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-background">
              Fence Genius Technology
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-6 md:mb-8 px-4">
              Revolutionary patented technology that removes the guesswork from fence construction.
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-4 text-background/80 flex-wrap px-4">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 rounded-full text-xs md:text-sm font-medium">Patented</span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 rounded-full text-xs md:text-sm font-medium">Perfect Results</span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 rounded-full text-xs md:text-sm font-medium">No Guesswork</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Traditional Construction Problem</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-destructive">Uncertainty & Variables</h3>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
                    <li>• Every company has different standards</li>
                    <li>• Crews build differently based on conditions</li>
                    <li>• Foreman skill level varies greatly</li>
                    <li>• Weather impacts quality and timing</li>
                    <li>• No way to predict the final outcome</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-destructive">Inconsistent Results</h3>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
                    <li>• Quality varies from crew to crew</li>
                    <li>• Timeline uncertainty</li>
                    <li>• Material waste and inefficiency</li>
                    <li>• Unexpected visual outcomes</li>
                    <li>• Customer dissatisfaction</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-lg text-muted-foreground italic">
                "When you hire a traditional fence contractor, you really have no idea what you're going to get from them."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">The Fence Genius Solution</h2>
            <div className="text-center mb-8 md:mb-12">
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Our process removes uncertainty—trust the technology for a perfect fence.
              </p>
            </div>

            {/* Video Demonstration */}
            <div className="mb-8 md:mb-12 -mx-4 md:mx-0">
              <div className="aspect-video w-full md:rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/aO_Zrt5qyGg?autoplay=1&mute=1&controls=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&loop=1&playlist=aO_Zrt5qyGg"
                  title="Fence Genius Technology Demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl mb-4">1</div>
                    <div className="w-full">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Traditional Start</h3>
                      <p className="text-sm md:text-base text-muted-foreground">Demo old fence, set new posts traditionally.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl mb-4">2</div>
                    <div className="w-full">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Precision Measurements</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">Detailed measurements collected:</p>
                      <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                        <li>• Distance between posts (1/16")</li>
                        <li>• Post height above ground</li>
                        <li>• Grade change at each location</li>
                        <li>• Post-to-post rotation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl mb-4">3</div>
                    <div className="w-full">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Algorithmic Calculation</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">Software calculates the perfect build, maximizing material yield.</p>
                      <img 
                        src="/lovable-uploads/123b8fa8-bbd2-4d47-9776-532daa49bfd8.png" 
                        alt="Fence Genius software showing algorithmic calculations for terrain adaptation and fence contour optimization"
                        className="w-full max-w-2xl mx-auto rounded-lg mb-3 md:mb-4"
                      />
                      <p className="text-xs md:text-sm text-muted-foreground italic">Terrain adaptation and contour calculations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl mb-4">4</div>
                    <div className="w-full">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Smart Adaptation</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">Choose smoothed or stepped top with dynamic bottom adjustments.</p>
                      <img 
                        src="/lovable-uploads/44978e33-a78f-4e38-aee3-4ec81ae4d29e.png" 
                        alt="Fence Genius smart adaptation showing flat smoothed top versus stepped top fence configurations"
                        className="w-full max-w-2xl mx-auto rounded-lg mb-3 md:mb-4"
                      />
                      <p className="text-xs md:text-sm text-muted-foreground italic">Flat smoothed vs stepped configurations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl mb-4">5</div>
                    <div className="w-full">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Detailed Preview & Approval</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">Detailed PDF showing exactly what to expect. Changes are easy.</p>
                      <img 
                        src="/lovable-uploads/818b4ccb-e771-4819-84c3-b8cf621f070b.png" 
                        alt="Detailed PDF preview showing aerial view and 3D rendering of fence layout through customer's terrain"
                        className="w-full max-w-2xl mx-auto rounded-lg mb-3 md:mb-4"
                      />
                      <p className="text-xs md:text-sm text-muted-foreground italic">Aerial view and 3D rendering for approval</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl mb-4">6</div>
                    <div className="w-full">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Custom Manufacturing & Delivery</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">Custom manufactured fence system delivered ready for installation.</p>
                      <img 
                        src="/lovable-uploads/7394d658-efc7-4d06-bbd8-2b60655e4fb0.png" 
                        alt="Custom contour following fence system loaded on trailer ready for installation"
                        className="w-full max-w-2xl mx-auto rounded-lg mb-3 md:mb-4"
                      />
                      <p className="text-xs md:text-sm text-muted-foreground italic">Manufactured to exact specs, ready to install</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Proof of Perfection</h2>
            <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-4">
              Software rendering vs. actual results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <Link to="/fence-styles/craftsman-style-fence" className="block hover:opacity-80 transition-opacity">
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/44503efa-b853-47c1-8bd9-52b13e55fbd1.png" 
                    alt="Fence Genius software preview compared to actual installed fence showing perfect match"
                    className="w-full aspect-[4/3] md:aspect-square object-contain bg-muted/30"
                    width="1080"
                    height="1080"
                  />
                  <CardContent className="p-3 md:p-4">
                    <p className="text-xs md:text-sm text-muted-foreground">Perfect terrain adaptation</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/fence-styles/picture-frame-fence" className="block hover:opacity-80 transition-opacity">
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/3678984e-bf2a-455f-ad3d-bc681fb586d8.png" 
                    alt="Complex curved fence section showing software accuracy"
                    className="w-full aspect-[4/3] md:aspect-square object-contain bg-muted/30"
                    width="1080"
                    height="1080"
                  />
                  <CardContent className="p-3 md:p-4">
                    <p className="text-xs md:text-sm text-muted-foreground">Complex curved sections</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/fence-styles/picture-frame-fence" className="block hover:opacity-80 transition-opacity">
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/c62bb0dd-0907-4cbb-acd4-aa52eceb6fa2.png" 
                    alt="Stepped fence design matching software preview exactly"
                    className="w-full aspect-[4/3] md:aspect-square object-contain bg-muted/30"
                    width="1080"
                    height="1080"
                  />
                  <CardContent className="p-3 md:p-4">
                    <p className="text-xs md:text-sm text-muted-foreground">Stepped design precision</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/fence-styles/solid-board-fence" className="block hover:opacity-80 transition-opacity">
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/0bc68390-5573-45cd-ad88-fb9e8a21a5e9.png" 
                    alt="Gate integration calculated by Fence Genius software"
                    className="w-full aspect-[4/3] md:aspect-square object-contain bg-muted/30"
                    width="1080"
                    height="1080"
                  />
                  <CardContent className="p-3 md:p-4">
                    <p className="text-xs md:text-sm text-muted-foreground">Seamless gate integration</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/fence-styles/picture-frame-fence" className="block hover:opacity-80 transition-opacity">
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/5ea38495-32f1-4638-bc1f-4c1743d777f4.png" 
                    alt="Sloped terrain fence perfectly matching software calculations"
                    className="w-full aspect-[4/3] md:aspect-square object-contain bg-muted/30"
                    width="1080"
                    height="1080"
                  />
                  <CardContent className="p-3 md:p-4">
                    <p className="text-xs md:text-sm text-muted-foreground">Challenging slope mastered</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/fence-styles/3-rail-picture-frame-fence" className="block hover:opacity-80 transition-opacity">
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/09ec72a6-74c9-469d-b523-3b02ca8d85b4.png" 
                    alt="Multi-section fence showing consistent quality through Fence Genius"
                    className="w-full aspect-[4/3] md:aspect-square object-contain bg-muted/30"
                    width="1080"
                    height="1080"
                  />
                  <CardContent className="p-3 md:p-4">
                    <p className="text-xs md:text-sm text-muted-foreground">Multi-section consistency</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Leaders */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Innovation Leaders</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Eric Knudsen and Andrew Knudsen have spearheaded the development of this new patented technology, 
              and are bringing it to the industry at large through their fence contracting company, MyFence.com.
            </p>
            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Fence Genius Technology?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Choosing us means you are guaranteed to have an algorithmically perfect fence.
              </p>
              <p className="text-xl font-semibold text-primary">
                And who doesn't like certainty of outcome?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The Fence Genius Advantage</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-foreground/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Guaranteed Results</h3>
                <p className="text-primary-foreground/80">Algorithmically perfect fences, every time</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-foreground/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">$</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Maximum Value</h3>
                <p className="text-primary-foreground/80">Optimized material yield for more fence per dollar</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-foreground/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">No Surprises</h3>
                <p className="text-primary-foreground/80">See exactly what you'll get before installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FenceGenius;