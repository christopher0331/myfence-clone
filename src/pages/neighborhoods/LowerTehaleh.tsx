import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const LowerTehaleh = () => {
  return (
    <>
      <Seo
        title="Lower Tehaleh Fence Installation | Family-Friendly Fencing | MyFence.com"
        description="Professional fence installation in Lower Tehaleh, Bonney Lake. Family-friendly designs, HOA-compliant solutions. Cedar, composite, vinyl fencing. Free quotes. Call today."
        canonical="https://myfence.com/neighborhoods/lower-tehaleh"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container">
            <Link 
              to="/service-areas/bonney-lake" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bonney Lake
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Lower Tehaleh Fence Installation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Family-focused fencing solutions for Bonney Lake's vibrant master-planned community
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Expert Fencing for Lower Tehaleh Families
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Lower Tehaleh embodies the heart of Bonney Lake's premier master-planned community, with family-friendly neighborhoods, abundant amenities, and a strong sense of community. As Lower Tehaleh homeowners, you've chosen a neighborhood that values both active outdoor living and neighborhood connectivity. MyFence.com understands the unique balance Lower Tehaleh families need: fences that provide privacy and security for children and pets while maintaining the open, welcoming character that makes this community special.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Lower Tehaleh's more moderate terrain and closer proximity to trails, parks, and community amenities means your fence serves multiple purposes - creating safe play areas for kids, defining property boundaries with neighbors, and enhancing curb appeal throughout this thriving neighborhood. We've installed hundreds of fences in Lower Tehaleh and understand both the HOA requirements and the practical needs of active families living here.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Lower Tehaleh Families Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Family-Focused Designs</h3>
                      <p className="text-muted-foreground">
                        Safe, durable fencing solutions designed for active families with children and pets. Smooth finishes, secure gates, and child-safe hardware.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fast Installation</h3>
                      <p className="text-muted-foreground">
                        Fence Genius technology reduces installation time by 30-50%. Most Lower Tehaleh projects complete in 1-2 days with minimal disruption.
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
                        Comprehensive {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty plus up to 20-year materials coverage giving you peace of mind.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA Expertise</h3>
                      <p className="text-muted-foreground">
                        Complete knowledge of Tehaleh design standards. We handle architectural review submissions for hassle-free approval.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Lower Tehaleh Specific Considerations */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Lower Tehaleh-Specific Installation Considerations
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Family & Pet Safety</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lower Tehaleh's family-oriented atmosphere means fences serve critical safety functions. We design installations with smooth boards (no splinters), secure latches that children can't easily open but adults can operate smoothly, and minimal gaps that prevent small pets from escaping. Our cedar and composite options provide solid barriers without sharp edges, while our hardware selections prioritize both security and ease of use for busy families managing kids, pets, and daily life.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Neighborhood Character</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lower Tehaleh maintains a welcoming, community-focused atmosphere where neighbors connect while respecting privacy. We help homeowners select fence styles that balance these values - privacy panels for backyard living spaces while considering semi-privacy or lower fence options along side yards to maintain sight lines and neighborhood friendliness. Our design consultations address both your family's needs and the community's character.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Trail and Amenity Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Lower Tehaleh properties back to trails, parks, or common areas that make this neighborhood special. We design fence installations that provide security while respecting these amenity connections. Strategic gate placement, decorative picket sections along trail sides, and compliant setbacks ensure your fence enhances rather than conflicts with Lower Tehaleh's extensive trail network and community spaces.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Durable, Low-Maintenance Options</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lower Tehaleh families stay busy with community activities, work, and family life - fence maintenance shouldn't consume precious weekend time. We offer low-maintenance composite and vinyl options that never require staining or painting, perfect for busy families. For those preferring natural cedar, our premium pressure-treated posts and marine-grade fasteners maximize longevity while our optional Post-on-Pipe upgrade virtually eliminates the most common failure point: rotting posts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Lower Tehaleh fence" />

        {/* Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Lower Tehaleh Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Free Consultation & Measurement</h3>
                  <p className="text-muted-foreground">
                    We meet at your Lower Tehaleh home to understand your family's needs, assess your property, and discuss design options that comply with HOA standards. Our Fence Genius technology provides precise measurements on the spot.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design Selection & HOA Approval</h3>
                  <p className="text-muted-foreground">
                    Choose from cedar, composite, vinyl, or aluminum options with colors and styles approved for Tehaleh. We prepare and submit all required documentation to the architectural review committee.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Off-Site Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Using your exact measurements, we manufacture custom panels at our facility. This ensures consistent quality, reduces installation time, and minimizes disruption to your daily routine.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Efficient Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew completes most Lower Tehaleh fence installations in 1-2 days. We arrive fully prepared with pre-built panels, professional equipment, and all materials needed for your project.
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
                Ready to Secure Your Lower Tehaleh Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join hundreds of satisfied Lower Tehaleh families who trust MyFence.com for quality fence installation. Schedule your free consultation today.
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

export default LowerTehaleh;
