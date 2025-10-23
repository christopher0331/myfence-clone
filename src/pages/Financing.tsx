import Seo from "@/components/Seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import PaymentCalculator from "@/components/PaymentCalculator";
import wisetackPhone from "@/assets/wisetack-phone-updated.png";

const Financing = () => {
  const faq = [
    { q: "Do you offer financing?", a: "Yes. We partner with trusted lenders so you can pay over time with competitive rates and fast approvals." },
    { q: "How long does approval take?", a: "Most applications receive a decision within minutes." },
    { q: "Is there a minimum project size?", a: "Financing typically starts at $2,500. Ask us for details based on your project." },
  ];

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myfence.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Financing",
        "item": "https://myfence.com/financing"
      }
    ]
  };

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
        structuredData={[breadcrumbData, faqLd]}
      />
      {/* Wisetack Financing Section */}
      <section>
        <style>{`
          .section-code-example {
            color: var(--dark-slate-blue);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 80px 6vw;
            font-family: Montserrat, sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 150%;
            display: flex;
            position: relative;
            overflow: hidden;
          }

          .container-code-example {
            z-index: 1;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
          }

          .content-code-example-1 {
            grid-column-gap: 40px;
            grid-row-gap: 40px;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            display: flex;
          }

          .box-code-example {
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            flex-direction: column;
            align-items: flex-start;
            max-width: 55%;
            display: flex;
          }

          .margin-bot-24-code-example {
            margin-bottom: 24px;
          }

          .title-code-example {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 50px;
            line-height: 140%;
          }

          .paragraph-code-example-lg {
            color:#31364c;
            margin-bottom: 0;
            margin-top: 0px;
            font-family: Montserrat, sans-serif;
            font-size: 18px;
            font-weight: 400;
            line-height: 150%;
          }

          .link-blue {
            color:#156ed7;
            font-weight: 600;
          }

          .list-code-example {
            grid-row-gap: 8px;
            flex-direction: column;
            margin-bottom: 0;
            margin-top:0px;
            font-size: 18px;
            display: flex;
          }

          .banner-code-example {
            background-color:#eafafb;
            justify-content: flex-start;
            align-items: center;
            padding: 20px;
            display: flex;
          }

          .text-weight-semibold {
            font-weight: 600;
          }

          .btn-code-example {
            background-color:#0c4e9e;
            color: #ffffff;
            text-transform: uppercase;
            border-radius: 2px;
            justify-content: center;
            align-items: center;
            padding: 12px 32px;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            transition: all .25s cubic-bezier(.25,.46,.45,.94);
            display: flex;
          }

          .link-green {
            color:#07c0ca;
            text-decoration: underline;
          }

          @media screen and (max-width: 991px) {
            .iphone-img-code-example {
              top: auto;
              bottom: 0px;
            }

            .title-code-example {
              font-size: 32px;
            }
          }

          @media screen and (max-width: 767px) {
            .iphone-img-code-example {
              width: 60%;
            }

            .box-code-example {
              max-width: 100%;
            }

            .paragraph-code-example {
              font-size: 16px;
            }

            .btn-code-example {
              font-size: 12px;
            }

            .content-code-example-1 {
              -webkit-box-orient: vertical;
              -webkit-box-direction: reverse;
              -webkit-flex-direction: column-reverse;
              -ms-flex-direction: column-reverse;
              flex-direction: column-reverse;
              grid-row-gap: 20px;
            }

            .title-code-example {
              font-size: 26px;
            }

            .paragraph-code-example-lg {
              font-size: 16px;
            }
          }

          @media screen and (max-width: 479px) {
            .section-code-example {
              padding: 60px 16px;
            }

            .iphone-img-code-example {
              position: relative;
              left: 0px;
              display: block;
              width: 100%;
              margin-right: auto;
              margin-left: auto;
            }

            .box-code-example {
              width: 100%;
              max-width: none;
              min-width: 100%;
            }

            .container-code-example {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
            }

            .btn-code-example {
              width: 100%;
              min-width: 0px;
            }

            .title-code-example {
              font-size: 24px;
            }
          }
        `}</style>
        
        <div className="section-code-example">
          <div className="container-code-example">
            <div className="content-code-example-1">
              <div className="box-code-example">
                <div className="margin-bot-24-code-example">
                  <h2 className="title-code-example">We offer financing</h2>
                </div>
                <div className="margin-bot-24-code-example">
                  <p className="paragraph-code-example-lg">
                    We've partnered with <a href="https://www.wisetack.com/" target="_blank" className="link-blue">Wisetack</a> to offer our customers flexible financing options, so you can pay over time rather than all at once. The application takes about a minute to complete, and checking your options does not impact your credit score.
                  </p>
                </div>
                <div className="margin-bot-24-code-example">
                  <ul role="list" className="list-code-example">
                    <li className="list-item-code-example">Finance projects up to $25,000*</li>
                    <li className="list-item-code-example">Loan options from 3 to 60 months*</li>
                    <li className="list-item-code-example">APRs range from 0 to 35.9%*</li>
                    <li className="list-item-code-example">No hidden fees or compounding interest</li>
                  </ul>
                </div>
                <div className="margin-bot-24-code-example">
                  <div className="banner-code-example">
                    <p className="paragraph-code-example-lg text-weight-semibold">
                      0% APR available up to 6 months* for eligible customers
                    </p>
                  </div>
                </div>
                <div className="margin-bot-24-code-example">
                  <p className="paragraph-code-example-lg">
                    <a href="https://wisetack.us/#/bu9cfkl/prequalify" target="_blank" rel="noopener noreferrer" className="link-blue">Prequalify today</a> with no impact to your credit and contact us to learn about financing your next project!
                  </p>
                </div>
                <div className="margin-bot-24-code-example">
                  <a href="https://wisetack.us/#/bu9cfkl/prequalify" target="_blank" rel="noopener noreferrer" className="btn-code-example w-button">PREQUALIFY NOW</a>
                </div>
                <p className="paragraph-code-example">
                  *All financing is subject to credit approval. Your terms may vary. Payment options through Wisetack are provided by our <a href="https://www.wisetack.com/lenders" target="_blank" className="link-green">lending partners</a>. For example, a $1,200 purchase could cost $104.89 a month for 12 months, based on an 8.9% APR, or $400 a month for 3 months, based on a 0% APR. Offers range from 0-35.9% APR based on creditworthiness. State interest rate caps may apply. No other financing charges or participation fees. See additional terms at <a href="https://www.wisetack.com/faqs" target="_blank" className="link-green">https://www.wisetack.com/faqs</a>.
                </p>
              </div>
              <img 
                src={wisetackPhone} 
                loading="lazy" 
                width="404" 
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 53vw, 35vw" 
                alt="Wisetack financing app showing 6 month interest-free payment options" 
                className="iphone-img-code-example"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Financing Made Easy</h1>
        <p className="text-muted-foreground max-w-2xl">Turn your project into an affordable monthly payment. We'll help you find a plan that fits your budget.</p>
      </section>

      {/* Payment Calculator */}
      <section className="container py-8">
        <PaymentCalculator />
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
