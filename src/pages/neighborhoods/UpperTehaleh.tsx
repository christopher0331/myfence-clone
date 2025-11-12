import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";

const UpperTehaleh = () => {
  return (
    <>
      <Seo
        title="Upper Tehaleh Fence Installation | Premium Fencing Services | MyFence.com"
        description="Expert fence installation in Upper Tehaleh, Bonney Lake's premier master-planned community. Cedar, composite, vinyl & aluminum fencing. HOA-compliant designs. Free quotes."
        canonical="https://myfence.com/neighborhoods/upper-tehaleh"
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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Upper Tehaleh Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Premium fencing solutions for luxury homes with expansive lots and mountain views
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <GoogleBusinessMap
                  city="Upper Tehaleh"
                  state="Washington"
                  radiusMiles={1}
                  zoom={14}
                  showBusinessInfo={false}
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
                Expert Fencing for Upper Tehaleh's Luxury Homes
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Upper Tehaleh represents Bonney Lake's most exclusive residential area, featuring larger homes (typically 3,000+ sq ft) on spacious lots with commanding views of Mount Rainier and the Cascade foothills. These premium properties attract growing families with 4-6+ members who need expansive yards for children's activities, entertaining, and outdoor living. Your investment in an Upper Tehaleh home demands fencing solutions that match your property's sophistication while creating safe, private spaces for your active family lifestyle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The elevated terrain and substantial lot sizes in Upper Tehaleh require specialized fence installations that maximize your property's natural advantages. Our team excels at designing fences that preserve mountain views while creating distinct zones for kids' play areas, pet containment, and adult entertainment spaces. We understand that busy families with multiple children need durable, maintenance-free options that look beautiful for years while standing up to daily use from active kids, pets, and Pacific Northwest weather.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Upper Tehaleh Homeowners Choose MyFence.com
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
                        Expert installation on Upper Tehaleh's elevated terrain using stepped and raked designs that maintain aesthetic appeal on challenging grades.
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
                        Industry-leading {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty plus up to 20-year materials coverage protecting your investment.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
                      <p className="text-muted-foreground">
                        Clear-grade cedar, composite, and aluminum options matching Upper Tehaleh's luxury standards with marine-grade fasteners.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Upper Tehaleh Specific Considerations */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Upper Tehaleh-Specific Installation Considerations
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA Architectural Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upper Tehaleh maintains rigorous architectural review standards to preserve the community's aesthetic cohesion. We're intimately familiar with the Tehaleh Design Review Committee's requirements, including approved fence styles, colors, and materials. Our team prepares comprehensive submission packages with detailed plans, material specifications, and color samples to ensure swift approval. We've successfully completed dozens of Tehaleh fence installations and understand exactly what the review committee expects.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Topography and Slope Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upper Tehaleh's elevated homesites offer stunning views but present unique installation challenges. Our Fence Genius technology excels at creating custom panels that follow natural grade changes while maintaining consistent panel heights and professional appearance. We use specialized stepped designs for steeper slopes and raked panels for gentler grades, ensuring your fence complements rather than fights your property's natural contours.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">View Preservation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Upper Tehaleh properties feature premium mountain and valley views that shouldn't be compromised by fence installation. We offer semi-privacy designs, horizontal slat systems with strategic spacing, and aluminum options that provide security and definition without blocking sight lines. Our design consultations consider view corridors, neighboring properties, and optimal fence placement to maximize both privacy and views.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Premium Material Selections</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upper Tehaleh homes deserve fencing materials that match their quality and architectural sophistication. We offer clear-grade Western Red Cedar with minimal knots for superior appearance and longevity, premium composite systems in designer colorways, and powder-coated aluminum with custom finishes. All installations use marine-grade stainless steel fasteners and reinforced framework appropriate for Bonney Lake's climate and your property's value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Upper Tehaleh fence" />

        {/* Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Upper Tehaleh Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Initial Consultation & HOA Review</h3>
                  <p className="text-muted-foreground">
                    We meet at your Upper Tehaleh property to discuss your fencing needs, assess your terrain, and review HOA requirements. We measure using Fence Genius technology and provide detailed design options that comply with Tehaleh standards.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design Submission & Approval</h3>
                  <p className="text-muted-foreground">
                    We prepare comprehensive architectural review submissions with detailed plans, material specifications, and color samples. Our experience with Tehaleh's review process ensures efficient approval.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Fabrication</h3>
                  <p className="text-muted-foreground">
                    Using precision measurements from Fence Genius, we manufacture custom panels at our facility that perfectly match your property's slopes and dimensions, ensuring consistent quality and faster installation.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Professional Installation</h3>
                  <p className="text-muted-foreground">
                    Our experienced crew arrives fully prepared with pre-fabricated panels, specialized equipment for slope work, and all necessary materials. We complete most Upper Tehaleh installations in 1-2 days with minimal property disruption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Quality Inspection & Walkthrough</h3>
                  <p className="text-muted-foreground">
                    We conduct thorough quality checks and walk through the completed installation with you, ensuring every detail meets your expectations and Tehaleh's standards before considering the project complete.
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
                Ready to Enhance Your Upper Tehaleh Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Schedule a free consultation with Upper Tehaleh's trusted fence installation experts. We'll assess your property, discuss design options, and provide transparent pricing.
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

export default UpperTehaleh;
