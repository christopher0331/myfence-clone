import Seo from "@/components/Seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import PaymentCalculator from "@/components/PaymentCalculator";

const Financing = () => {
  const faq = [
    { q: "Do you offer financing?", a: "Yes. We partner with trusted lenders so you can pay over time with competitive rates and fast approvals." },
    { q: "How long does approval take?", a: "Most applications receive a decision within minutes." },
    { q: "Is there a minimum project size?", a: "Financing typically starts at $2,500. Ask us for details based on your project." },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <main>
      <Seo
        title="Fence Financing | MyFence.com Seattle"
        description="Flexible fence financing options for Seattle homeowners. Quick approvals and competitive rates."
        canonical="https://myfence.com/financing"
        structuredData={faqLd}
      />
      <section className="container py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Financing Made Easy</h1>
        <p className="text-muted-foreground max-w-2xl">Turn your project into an affordable monthly payment. We'll help you find a plan that fits your budget.</p>
      </section>

      {/* 1. Affordable Fence Financing with MyFence.com */}
      <section className="container py-8">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <div className="relative h-full w-full">
                  <img src="/lovable-uploads/e52411ee-d747-443a-8932-16c9c7d15783.png" alt="Affordable fence financing - real cedar fence by MyFence.com" className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute bottom-3 right-3 rounded-md bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur border border-border shadow">
                    <img
                      src="/lovable-uploads/d8855859-ffa0-433c-a0b1-310bea0772c7.png"
                      alt="Wisetack financing logo"
                      className="w-24 md:w-28 h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AspectRatio>
            </div>
            <CardContent className="p-6 md:p-10 flex items-center">
              <div>
                <h2 className="text-2xl font-semibold">Affordable Fence Financing with MyFence.com</h2>
                <p className="mt-3 text-muted-foreground">
                  At MyFence.com, we believe that securing the fence you need shouldn't be a financial burden. That's why we offer flexible and easy financing options through Wisetack, so you can enjoy the privacy, security, and curb appeal your property deserves without breaking the bank. Whether you need a new fence for your home, business, or anything in between, we've got you covered with affordable plans that fit your budget.
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* 2. Why Choose Financing through Wisetack? */}
      <section className="container py-8">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <CardContent className="order-2 md:order-1 p-6 md:p-10 flex items-center">
              <div>
                <h2 className="text-2xl font-semibold">Why Choose Financing through Wisetack?</h2>
                <p className="mt-3 text-muted-foreground">
                  Investing in a quality fence is a smart decision, but sometimes paying for it upfront isn't an option. With our financing options, you can get the fence you need today and pay over time with low monthly payments that suit your financial situation. Here's why financing with Wisetack makes sense:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Financing from $500 – $25,000 <span className="opacity-70">(1)</span></li>
                  <li>APRs from 0% to 35.9%*</li>
                  <li>Terms from 3 to 60 months* <span className="opacity-70">(2)</span></li>
                  <li>No penalties, late fees, or compounding interest</li>
                  <li>Some services have a max financeable amount of $15,000</li>
                  <li>Some services have terms up to 24 months only</li>
                </ul>
              </div>
            </CardContent>
            <div className="order-1 md:order-2">
              <AspectRatio ratio={16 / 9}>
                <div className="relative h-full w-full">
                  <img src="/lovable-uploads/163ba846-abc0-41a1-b5bf-320f68ae0051.png" alt="Wisetack fence financing - real fence photo" className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute bottom-3 right-3 rounded-md bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur border border-border shadow">
                    <img
                      src="/lovable-uploads/d8855859-ffa0-433c-a0b1-310bea0772c7.png"
                      alt="Wisetack financing logo"
                      className="w-24 md:w-28 h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </Card>
      </section>

      {/* 3. Flexible Financing Options */}
      <section className="container py-8">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div>
              <AspectRatio ratio={16 / 9}>
                <img src="/lovable-uploads/d7d271d5-5f96-4b02-94e4-06461d83440f.png" alt="Flexible fence financing options - real cedar fence with top window panels" className="h-full w-full object-cover" loading="lazy" />
              </AspectRatio>
            </div>
            <CardContent className="p-6 md:p-10 flex items-center">
              <div>
                <h2 className="text-2xl font-semibold">Flexible Financing Options</h2>
                <p className="mt-3 text-muted-foreground">
                  At MyFence.com, we offer a variety of financing options to fit a wide range of needs. Whether you're looking for low monthly payments or a no-interest promotional offer, we have a plan that works for you. Some of our financing features include:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Up to six payment plan options: There are multiple options to choose from and some even with zero interest.</li>
                  <li>Financing Options: You can finance from $500-$25,000.</li>
                  <li>No Prepayment Penalties: Pay off your balance early without any extra fees—you're in control of your financing.</li>
                </ul>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* 4. How It Works */}
      <section className="container py-8">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <CardContent className="order-2 md:order-1 p-6 md:p-10 flex items-center">
              <div>
                <h2 className="text-2xl font-semibold">How It Works</h2>
                <ol className="mt-4 list-decimal pl-5 space-y-4 text-muted-foreground">
                  <li>
                    <p className="text-foreground font-medium">Apply Online</p>
                    <p>Start the process by filling out our quick and easy application form. It only takes a few minutes to get started.</p>
                  </li>
                  <li>
                    <p className="text-foreground font-medium">Get Approved</p>
                    <p>Once you've applied, our financing partners will review your application. You'll receive a decision quickly, so you don't have to wait around.</p>
                  </li>
                  <li>
                    <p className="text-foreground font-medium">Choose Your Plan</p>
                    <p>Based on your approval, you can choose the financing option that works best for you—whether that's a short-term loan or a longer-term payment plan.</p>
                  </li>
                  <li>
                    <p className="text-foreground font-medium">Get Your Fence Installed</p>
                    <p>Once you're approved, we'll schedule your fence installation. You can rest easy knowing your fence is taken care of, and you can start enjoying the benefits immediately.</p>
                  </li>
                </ol>
              </div>
            </CardContent>
            <div className="order-1 md:order-2">
              <AspectRatio ratio={16 / 9}>
                <img src="/lovable-uploads/d01dc2d4-efdb-4442-87de-2ac676b59fa2.png" alt="How fence financing works - real fence and 3D design" className="h-full w-full object-cover" loading="lazy" />
              </AspectRatio>
            </div>
          </div>
        </Card>
      </section>

      {/* Payment Calculator */}
      <section className="container py-8">
        <PaymentCalculator />
      </section>

      {/* FAQ & Actions */}
      <section className="container py-10">
        <div className="mt-2">
          <Accordion type="single" collapsible className="w-full max-w-2xl">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 flex gap-3">
          <Button variant="hero" onClick={() => (window.location.href = "/contact")}>
            Start Application
          </Button>
          <Button variant="secondary" onClick={() => (window.location.href = "/quote")}>
            Estimate My Payment
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Financing;
