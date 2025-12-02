import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Tehaleh = () => {
  return (
    <>
      <Seo
        title="Tehaleh Fence Installation | HOA-Compliant Fencing | MyFence.com"
        description="Professional fence installation throughout Tehaleh, Bonney Lake. Serving Upper and Lower Tehaleh with HOA-compliant designs. Cedar, hogwire & hybrid aluminum fencing. Free quotes."
        canonical="https://myfence.com/neighborhoods/lower-tehaleh"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link 
              to="/service-areas/bonney-lake" 
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
                  <span className="text-lg text-muted-foreground">Serving Upper & Lower Tehaleh</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Professional Fence Installation in Tehaleh
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert HOA-compliant fence installation for Bonney Lake's premier master-planned community. Serving all Tehaleh neighborhoods with cedar, hogwire, and hybrid aluminum fencing solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="tel:12534551885">
                    <Button size="lg" variant="hero" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (253) 455-1885
                    </Button>
                  </a>
                  <Link to="/quote">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Service Area Map */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <GoogleBusinessMap
                  city="Tehaleh"
                  state="Washington"
                  radiusMiles={3}
                  zoom={11}
                  showBusinessInfo={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Expert Fencing Throughout Tehaleh
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Tehaleh is one of Bonney Lake's most sought-after master-planned communities, featuring diverse neighborhoods that cater to families of all sizes and lifestyles. From cozy starter homes to expansive luxury properties with mountain views, we provide premium fence installation services throughout the entire Tehaleh development—including both Upper and Lower Tehaleh neighborhoods.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you live in an elevated homesite with commanding views of Mount Rainier or a walkable neighborhood close to trails and community centers, your fence needs to match your home's character while meeting Tehaleh's HOA standards. We understand the unique requirements of this community and have completed installations throughout every section of Tehaleh, from properties backing to trail systems to homes on challenging slopes.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Tehaleh Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA Compliance Experts</h3>
                      <p className="text-muted-foreground">
                        Deep knowledge of Tehaleh's design standards and architectural review requirements. We handle all submission documentation and ensure first-time approval.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Slope Specialists</h3>
                      <p className="text-muted-foreground">
                        Expert installation on Tehaleh's varied terrain using stepped and raked designs that maintain aesthetic appeal on challenging grades.
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
                        Comprehensive {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty giving you peace of mind.
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
                        Safe, durable fencing solutions designed for active families with children and pets. Smooth finishes, secure gates, and child-safe hardware.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tehaleh Specific Considerations */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Tehaleh-Specific Installation Considerations
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA Architectural Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tehaleh maintains rigorous architectural review standards to preserve the community's aesthetic cohesion. We're intimately familiar with the Tehaleh Design Review Committee's requirements, including approved fence styles, colors, and materials. Our team prepares comprehensive submission packages with detailed plans, material specifications, and color samples to ensure swift approval throughout all Tehaleh neighborhoods.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Topography and Slope Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tehaleh's varied terrain—from elevated homesites with stunning views to gentler slopes near community centers—presents unique installation challenges. Our Fence Genius technology excels at creating custom panels that follow natural grade changes while maintaining consistent panel heights and professional appearance. We use specialized stepped designs for steeper slopes and raked panels for gentler grades.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Trail and Amenity Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Tehaleh properties back to trails, parks, or common areas that make this community special. We design fence installations that provide security while respecting these amenity connections. Strategic gate placement, decorative picket sections along trail sides, and compliant setbacks ensure your fence enhances rather than conflicts with Tehaleh's extensive trail network and community spaces.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Premium, Low-Maintenance Materials</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tehaleh homes deserve fencing materials that match their quality while minimizing maintenance demands on busy families. We offer clear-grade Western Red Cedar for superior appearance, hogwire fencing for properties wanting rustic elegance with open views, and our hybrid aluminum system (black panels with cedar framing) that never requires staining. All installations use marine-grade stainless steel fasteners and our optional Post-on-Pipe upgrade virtually eliminates the most common failure point: rotting posts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Tehaleh fence" />

        {/* Tehaleh Fencing Video Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Tehaleh Fencing
              </h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Watch our efficient installation process in Tehaleh. From elevated properties with mountain views to family-friendly neighborhoods near trails, we deliver quality fences that match your home and lifestyle.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every Tehaleh fence combines sophisticated aesthetics with family-friendly durability—creating safe, beautiful outdoor spaces whether you're in Upper or Lower Tehaleh.
                  </p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9/16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/gzAzQLdfqDA?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="Tehaleh Fencing"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Tehaleh Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Free Consultation & Measurement</h3>
                  <p className="text-muted-foreground">
                    We meet at your Tehaleh home to understand your family's needs, assess your property's terrain, and discuss design options that comply with HOA standards. Our Fence Genius technology provides precise measurements on the spot.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design Selection & HOA Approval</h3>
                  <p className="text-muted-foreground">
                    Choose from cedar, hogwire, or hybrid aluminum options with colors and styles approved for Tehaleh. We prepare and submit all required documentation to the architectural review committee.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Off-Site Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Using your exact measurements, we manufacture custom panels at our facility. This ensures consistent quality, reduces installation time, and minimizes disruption to your daily routine.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Professional Installation</h3>
                  <p className="text-muted-foreground">
                    Our experienced crew arrives fully prepared with pre-fabricated panels, specialized equipment for slope work, and all necessary materials. We complete most Tehaleh installations in 1-2 days with minimal property disruption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Final Walkthrough & Warranty</h3>
                  <p className="text-muted-foreground">
                    We inspect every detail with you, demonstrate gate operation, provide maintenance guidance, and ensure complete satisfaction before finalizing your {WARRANTY_CONSTANTS.YEARS}-year warranty coverage.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Tehaleh Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Schedule a free consultation with Tehaleh's trusted fence installation experts. We serve all neighborhoods throughout Upper and Lower Tehaleh with the same commitment to quality and HOA compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quote">
                  <button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors">
                    Get Free Quote
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-8 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg font-semibold transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tehaleh;