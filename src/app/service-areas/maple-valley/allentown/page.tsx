import type { Metadata } from 'next';
import Link from 'next/link';

const canonical = 'https://myfence.com/service-areas/maple-valley/allentown';

export const metadata: Metadata = {
  title: 'Allentown Maple Valley Fence Installation | Cedar, Hogwire & Hybrid | MyFence.com',
  description:
    'Professional fence installation in Allentown, Maple Valley, WA. Cedar, hogwire and hybrid fence options with free quotes from MyFence.com.',
  alternates: {
    canonical,
  },
};

const trustBadges = [
  'Licensed & insured',
  'Cedar, hogwire & hybrid options',
  'Free fence quotes',
  'Serving Allentown, Maple Valley WA',
];

const reasons = [
  {
    title: 'Designed for Allentown Homes',
    description:
      'Every fence plan starts with the property itself, including access, grade changes, gates, pets, privacy goals and the way the yard connects to nearby homes.',
  },
  {
    title: 'Clear Material Guidance',
    description:
      'We help Allentown homeowners compare cedar privacy, hogwire and hybrid aluminum cedar options so the finished fence fits the property and the long-term maintenance plan.',
  },
  {
    title: 'Fence Genius Planning',
    description:
      'MyFence.com uses Fence Genius to support a more organized design and quoting process before installation begins.',
  },
  {
    title: 'Neighborhood-Focused Scheduling',
    description:
      'Our team plans installation around access, staging space and homeowner communication so the project is easier to manage from quote through walkthrough.',
  },
];

const considerations = [
  {
    title: 'Allentown Privacy Planning',
    description:
      'Privacy needs can vary from one Allentown property to the next. Some homes need full backyard screening, while others benefit from partial privacy panels paired with open sections that keep the yard feeling bright.',
  },
  {
    title: 'Allentown Drainage and Moisture',
    description:
      'Fence planning in Maple Valley should account for wet seasons, shaded yard areas and soil moisture. Material choice, gate placement and layout all matter when a fence needs to perform through the Pacific Northwest climate.',
  },
  {
    title: 'Allentown Pet and Family Use',
    description:
      'Many neighborhood fence projects are driven by daily use: safer play space, dog containment, cleaner side-yard access and clearer boundaries between neighboring yards.',
  },
  {
    title: 'Allentown Style Coordination',
    description:
      'A good fence should match the home, not just mark a line. Cedar, hogwire and hybrid designs can be adapted for privacy, curb appeal and a cleaner transition between front, side and backyard spaces.',
  },
];

const styles = [
  {
    title: 'Cedar Privacy Fence',
    href: '/fence-styles/picture-frame-fence',
    description:
      'A strong choice for Allentown backyards where privacy, warmth and a classic Pacific Northwest look are priorities.',
  },
  {
    title: 'Hogwire Fence',
    href: '/fence-styles/black-hogwire-fence',
    description:
      'A more open style for homeowners who want boundaries without fully closing off the yard.',
  },
  {
    title: 'Hybrid Aluminum/Cedar',
    href: '/fence-styles/cedar-steel-hybrid-fence',
    description:
      'A modern option that pairs wood character with a clean structural look for contemporary Allentown properties.',
  },
];

const processSteps = [
  'Allentown site assessment',
  'Allentown design review and quote',
  'Fence Genius planning support',
  'Allentown installation scheduling',
  'Final walkthrough and care guidance',
];

const faqs = [
  {
    question: 'Do I need a permit to build a fence in Allentown, Maple Valley?',
    answer:
      'Permit and code requirements can depend on fence height, location, corner visibility, property conditions and current City of Maple Valley rules. Homeowners should verify current requirements before work begins.',
  },
  {
    question: 'What fence styles work best for Allentown homes?',
    answer:
      'Cedar privacy fences are popular for screening, hogwire works well when homeowners want a more open feel, and hybrid aluminum cedar designs are a strong fit for a modern look.',
  },
  {
    question: 'How much does fence installation cost in Allentown?',
    answer:
      'Fence cost depends on linear footage, material, gate count, access, slope, removal needs and design details. MyFence.com provides property-specific quotes for Allentown homeowners.',
  },
  {
    question: 'How long does an Allentown fence installation take?',
    answer:
      'Timeline depends on project size, material selection, site conditions and scheduling. The quote process will outline the expected timeline for the specific Allentown property.',
  },
  {
    question: 'Should I talk with my neighbor before installing a fence in Allentown?',
    answer:
      'It is a good idea to discuss shared boundaries, access and expectations with neighbors before installation. A property survey may also be helpful when boundary location is uncertain.',
  },
];

function StructuredData() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Allentown Maple Valley Fence Installation',
      serviceType: 'Fence installation',
      provider: {
        '@type': 'LocalBusiness',
        name: 'MyFence.com',
        telephone: '(253) 455-1885',
        url: 'https://myfence.com',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Allentown, Maple Valley, WA',
      },
      url: canonical,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://myfence.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Service Areas',
          item: 'https://myfence.com/service-areas',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Maple Valley',
          item: 'https://myfence.com/service-areas/maple-valley',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Allentown',
          item: canonical,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function AllentownNeighborhoodPage() {
  return (
    <>
      <StructuredData />
      <main className='bg-background text-foreground'>
        <section className='border-b bg-muted/30'>
          <div className='mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16'>
            <div className='max-w-3xl'>
              <Link
                href='/service-areas/maple-valley'
                className='mb-6 inline-flex font-semibold text-primary underline decoration-2 underline-offset-4'
              >
                ← Back to Maple Valley
              </Link>
              <p className='mb-3 text-sm font-semibold uppercase tracking-wide text-primary'>
                Serving Allentown, Maple Valley WA
              </p>
              <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>
                Allentown Fence Installation
              </h1>
              <p className='mt-5 text-lg leading-8 text-muted-foreground'>
                MyFence.com helps Allentown homeowners plan and install cedar, hogwire and hybrid fences that fit the property, improve privacy and make outdoor spaces easier to use.
              </p>
              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <a
                  href='tel:2534551885'
                  className='inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-sm transition hover:opacity-90'
                >
                  Call (253) 455-1885
                </a>
                <Link
                  href='/quote'
                  className='inline-flex items-center justify-center rounded-md border px-6 py-3 font-semibold transition hover:bg-muted'
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className='rounded-2xl border bg-card p-6 shadow-sm lg:w-80'>
              <h2 className='text-xl font-semibold'>Plan Your Allentown Fence</h2>
              <p className='mt-3 text-muted-foreground'>
                Share your address, style goals and project timing to start a property-specific quote.
              </p>
              <Link
                href='/quote'
                className='mt-5 inline-flex font-semibold text-primary underline decoration-2 underline-offset-4'
              >
                Start online quote →
              </Link>
            </div>
          </div>
        </section>

        <section className='border-b bg-card'>
          <div className='mx-auto max-w-6xl px-6 py-5'>
            <ul className='grid gap-3 text-sm font-semibold sm:grid-cols-2 lg:grid-cols-4'>
              {trustBadges.map((badge) => (
                <li key={badge} className='rounded-full border bg-background px-4 py-3 text-center'>
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <article className='mx-auto max-w-5xl px-6 py-14'>
          <section className='mb-14'>
            <h2 className='text-3xl font-bold'>Fencing Built Around the Way Allentown Homes Are Used</h2>
            <p className='mt-5 text-lg leading-8 text-muted-foreground'>
              A neighborhood fence should do more than outline a yard. In Allentown, the right design can create usable outdoor space, protect pets, screen busy sightlines and give the home a more finished look from the street and backyard.
            </p>
            <p className='mt-5 leading-8 text-muted-foreground'>
              MyFence.com brings a structured planning process to each Allentown fence project. Fence Genius helps organize design details, material selections and property-specific requirements so homeowners can make confident decisions before installation begins.
            </p>
          </section>

          <section className='mb-14'>
            <h2 className='text-3xl font-bold'>Why Allentown Homeowners Trust MyFence.com</h2>
            <div className='mt-8 grid gap-5 md:grid-cols-2'>
              {reasons.map((reason) => (
                <div key={reason.title} className='rounded-xl border bg-card p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold'>{reason.title}</h3>
                  <p className='mt-3 leading-7 text-muted-foreground'>{reason.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mb-14 rounded-2xl border bg-muted/30 p-6'>
            <h2 className='text-3xl font-bold'>Allentown Project Planning Notes</h2>
            <p className='mt-4 leading-8 text-muted-foreground'>
              Neighborhood-specific project photos and customer testimonials should be added when verified Allentown assets are available. Until then, this page avoids unverified review quotes, stock photography or unsupported construction claims.
            </p>
          </section>

          <section className='mb-14'>
            <h2 className='text-3xl font-bold'>Allentown-Specific Fencing Considerations</h2>
            <div className='mt-8 space-y-6'>
              {considerations.map((item) => (
                <div key={item.title} className='rounded-xl border bg-card p-6'>
                  <h3 className='text-xl font-semibold'>{item.title}</h3>
                  <p className='mt-3 leading-7 text-muted-foreground'>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mb-14'>
            <h2 className='text-3xl font-bold'>Fence Installation Cost in Allentown</h2>
            <p className='mt-5 leading-8 text-muted-foreground'>
              Fence pricing depends on the final design, linear footage, gates, material selection, removal needs, access and property conditions. MyFence.com provides an exact quote after reviewing the Allentown property and project goals.
            </p>
            <div className='mt-6 overflow-hidden rounded-xl border'>
              <table className='w-full text-left text-sm'>
                <thead className='bg-muted'>
                  <tr>
                    <th className='px-4 py-3 font-semibold'>Fence style</th>
                    <th className='px-4 py-3 font-semibold'>Best fit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t'>
                    <td className='px-4 py-3 font-medium'>Cedar privacy</td>
                    <td className='px-4 py-3 text-muted-foreground'>Backyard privacy, pet areas and traditional wood appearance</td>
                  </tr>
                  <tr className='border-t'>
                    <td className='px-4 py-3 font-medium'>Hogwire</td>
                    <td className='px-4 py-3 text-muted-foreground'>Open boundaries and yards where visibility matters</td>
                  </tr>
                  <tr className='border-t'>
                    <td className='px-4 py-3 font-medium'>Hybrid aluminum/cedar</td>
                    <td className='px-4 py-3 text-muted-foreground'>Modern curb appeal with a clean mixed-material look</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link
              href='/quote'
              className='mt-6 inline-flex font-semibold text-primary underline decoration-2 underline-offset-4'
            >
              Get an exact quote for your Allentown property →
            </Link>
          </section>

          <section className='mb-14'>
            <h2 className='text-3xl font-bold'>Popular Fence Styles in Allentown</h2>
            <div className='mt-8 grid gap-5 md:grid-cols-3'>
              {styles.map((style) => (
                <div key={style.title} className='rounded-xl border bg-card p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold'>{style.title}</h3>
                  <p className='mt-3 leading-7 text-muted-foreground'>{style.description}</p>
                  <Link
                    href={style.href}
                    className='mt-4 inline-flex font-semibold text-primary underline decoration-2 underline-offset-4'
                  >
                    View styles →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className='mb-14 rounded-2xl border bg-card p-6 shadow-sm'>
            <h2 className='text-3xl font-bold'>Virtual Quote Tool</h2>
            <p className='mt-4 leading-8 text-muted-foreground'>
              Start with the online quote flow and tell us you are planning an Allentown Maple Valley fence. We will use that information to guide the next step.
            </p>
            <Link
              href='/quote'
              className='mt-5 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-sm transition hover:opacity-90'
            >
              Start Free Quote
            </Link>
          </section>

          <section className='mb-14'>
            <h2 className='text-3xl font-bold'>Our Allentown Installation Process</h2>
            <ol className='mt-8 grid gap-4 md:grid-cols-5'>
              {processSteps.map((step, index) => (
                <li key={step} className='rounded-xl border bg-card p-5'>
                  <span className='text-sm font-bold text-primary'>Step {index + 1}</span>
                  <h3 className='mt-2 font-semibold'>{step}</h3>
                </li>
              ))}
            </ol>
          </section>

          <section className='mb-14'>
            <h2 className='text-3xl font-bold'>Discover Allentown</h2>
            <div className='mt-6 grid gap-6 md:grid-cols-2'>
              <div className='rounded-xl border bg-card p-6'>
                <h3 className='text-xl font-semibold'>Neighborhood Character</h3>
                <p className='mt-3 leading-7 text-muted-foreground'>
                  Allentown is served as part of the Maple Valley area, where residential fencing often needs to balance privacy, pet containment, curb appeal and wet-weather durability.
                </p>
              </div>
              <div className='rounded-xl border bg-card p-6'>
                <h3 className='text-xl font-semibold'>Local Living</h3>
                <p className='mt-3 leading-7 text-muted-foreground'>
                  Homeowners planning a fence should consider how the new layout will support everyday use, including gate access, side-yard circulation, outdoor storage, play areas and neighbor-facing boundaries.
                </p>
              </div>
            </div>
          </section>

          <section className='mb-14'>
            <h2 className='text-3xl font-bold'>Also Serving Nearby Maple Valley Neighborhoods</h2>
            <p className='mt-5 leading-8 text-muted-foreground'>
              MyFence.com also serves homeowners throughout Maple Valley. Visit the parent Maple Valley service area page for nearby neighborhood coverage and city-level fencing information.
            </p>
            <Link
              href='/service-areas/maple-valley'
              className='mt-5 inline-flex font-semibold text-primary underline decoration-2 underline-offset-4'
            >
              View Maple Valley service area →
            </Link>
          </section>

          <section className='mb-14'>
            <h2 className='text-3xl font-bold'>Allentown Fence Installation FAQs</h2>
            <div className='mt-8 space-y-5'>
              {faqs.map((faq) => (
                <div key={faq.question} className='rounded-xl border bg-card p-6'>
                  <h3 className='text-lg font-semibold'>{faq.question}</h3>
                  <p className='mt-3 leading-7 text-muted-foreground'>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <section className='bg-primary text-primary-foreground'>
          <div className='mx-auto max-w-5xl px-6 py-14 text-center'>
            <h2 className='text-3xl font-bold'>Ready to Enhance Your Allentown Property?</h2>
            <p className='mx-auto mt-4 max-w-2xl text-lg opacity-90'>
              Request a free quote for your Allentown fence project and get clear guidance on design, materials and next steps.
            </p>
            <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row'>
              <Link
                href='/quote'
                className='inline-flex items-center justify-center rounded-md bg-background px-6 py-3 font-semibold text-foreground shadow-sm transition hover:opacity-90'
              >
                Get Free Quote
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center rounded-md border border-primary-foreground/50 px-6 py-3 font-semibold transition hover:bg-primary-foreground/10'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}