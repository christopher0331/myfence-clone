import Seo from "@/components/Seo";

const TermsConditions = () => {
  return (
    <>
      <Seo
        title="Terms & Conditions - MyFence.com"
        description="Read MyFence.com's terms and conditions for our professional fencing services, installation warranties, and service agreements."
        canonical="/terms-conditions"
      />
      
      <main className="min-h-screen bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By using MyFence.com's services, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Services</h2>
              <p className="text-muted-foreground mb-4">
                MyFence.com provides professional fencing services including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Residential and commercial fence installation</li>
                <li>Fence repair and maintenance services</li>
                <li>Custom fence design and consultation</li>
                <li>Materials supply and delivery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Quotes and Pricing</h2>
              <p className="text-muted-foreground mb-4">
                All quotes provided are estimates based on the information provided. Final pricing may vary based on:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Site conditions and accessibility</li>
                <li>Material availability and market prices</li>
                <li>Local permit requirements</li>
                <li>Changes to project scope</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms will be specified in your service agreement. Generally:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>A deposit may be required to begin work</li>
                <li>Progress payments may be scheduled for larger projects</li>
                <li>Final payment is due upon project completion</li>
                <li>Financing options are available for qualified customers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Warranty</h2>
              <p className="text-muted-foreground">
                We provide warranties on our workmanship and materials as specified in your service agreement. 
                Warranty terms vary by project type and materials used. Contact us for specific warranty information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                MyFence.com's liability is limited to the cost of the services provided. We are not liable for 
                indirect, incidental, or consequential damages arising from our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-medium">MyFence.com</p>
                <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                <p className="text-muted-foreground">Email: legal@myfence.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsConditions;