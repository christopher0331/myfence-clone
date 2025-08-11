import Seo from "@/components/Seo";

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy - MyFence.com"
        description="Learn about MyFence.com's privacy policy and how we protect your personal information when you use our fencing services."
        canonical="/privacy-policy"
      />
      
      <main className="min-h-screen bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                At MyFence.com, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Request a quote for fencing services</li>
                <li>Contact us through our website or phone</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Apply for financing options</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide you with accurate fencing quotes and estimates</li>
                <li>Communicate with you about our services</li>
                <li>Process financing applications</li>
                <li>Improve our website and services</li>
                <li>Send you updates about our company (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To trusted service providers who assist us in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>To financing partners when you apply for financing options</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-medium">MyFence.com</p>
                <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                <p className="text-muted-foreground">Email: privacy@myfence.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;