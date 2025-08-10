import Seo from "@/components/Seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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
        <p className="text-muted-foreground max-w-2xl">Turn your project into an affordable monthly payment. We’ll help you find a plan that fits your budget.</p>

        <div className="mt-8">
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
          <Button variant="hero" onClick={() => (window.location.href = "/contact")}>Start Application</Button>
          <Button variant="secondary" onClick={() => (window.location.href = "/quote")}>Estimate My Payment</Button>
        </div>
      </section>
    </main>
  );
};

export default Financing;
