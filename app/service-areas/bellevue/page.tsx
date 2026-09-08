'use client';

import ServiceAreaTemplate from '@/components/templates/ServiceAreaTemplate';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import AboutTheArea, { type LocalAttraction } from '@/components/AboutTheArea';

const BELLEVUE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: 'Bellevue Botanical Garden',
    url: 'https://bellevuebotanical.org/',
    description:
      'A 53-acre public garden tucked between residential neighborhoods on Main Street. The grounds include native plantings, seasonal garden displays and quiet walking paths that show why Bellevue outdoor spaces need fences built for moisture and mature landscaping.',
  },
  {
    name: 'Bellevue Arts Museum',
    url: 'https://www.bellevuearts.org/',
    description:
      'A downtown Bellevue cultural stop focused on craft, design and regional art. It is close to Bellevue Way, office towers and condominium communities where homeowners often want clean, modern fence lines.',
  },
  {
    name: 'Mercer Slough Nature Park',
    url: 'https://parks.bellevuewa.gov/parks-open-spaces/parks/mercer-slough-nature-park/',
    description:
      'A large wetland and trail system near Bellevue Way SE. The park is a useful reminder of the citys high-moisture soils, drainage planning needs and habitat-conscious approach to outdoor improvements.',
  },
  {
    name: 'The Bellevue Collection',
    url: 'https://www.thebellevuecollection.com/',
    description:
      'Bellevues central shopping and dining destination. Many nearby neighborhoods balance urban convenience with private residential yards, making thoughtful privacy fencing a common priority.',
  },
  {
    name: 'Meydenbauer Beach Park',
    url: 'https://parks.bellevuewa.gov/parks-open-spaces/parks/meydenbauer-beach-park/',
    description:
      'A Lake Washington waterfront park near downtown Bellevue. Waterfront weather patterns, wind and moisture make durable materials and careful post planning important throughout the city.',
  },
];

const BellevueArticle = () => (
  <article className='space-y-12'>
    <section className='space-y-6'>
      <h2 className='text-3xl md:text-4xl font-bold'>Your Local Bellevue Fence Company</h2>
      <div className='grid md:grid-cols-4 gap-6'>
        <Card className='p-6 text-center'>
          <div className='text-3xl font-bold text-primary mb-2'>30+</div>
          <div className='text-sm text-muted-foreground'>Years Experience</div>
        </Card>
        <Card className='p-6 text-center'>
          <div className='text-3xl font-bold text-primary mb-2'>98%+</div>
          <div className='text-sm text-muted-foreground'>On-Time Installation Rate</div>
        </Card>
        <Card className='p-6 text-center'>
          <div className='text-3xl font-bold text-primary mb-2'>5.0</div>
          <div className='text-sm text-muted-foreground'>Average Star Rating</div>
        </Card>
        <Card className='p-6 text-center'>
          <div className='text-3xl font-bold text-primary mb-2'>150+</div>
          <div className='text-sm text-muted-foreground'>Five-Star Reviews</div>
        </Card>
      </div>
      <p className='text-muted-foreground leading-relaxed text-lg'>
        MyFence.com serves Bellevue homeowners with cedar, hogwire and hybrid aluminum cedar fencing designed for Eastside terrain, wet weather and neighborhood design expectations. From wooded Bridle Trails lots to hillside Somerset properties and busy Factoria yards, our team plans each project around access, drainage, privacy and long-term durability.
      </p>
    </section>

    <section className='space-y-4'>
      <h2 className='text-3xl md:text-4xl font-bold'>How We Install Fences on the Eastside</h2>
      <p className='text-muted-foreground leading-relaxed'>
        Bellevue fence projects require careful layout, clear communication and materials that can handle Pacific Northwest moisture. We use Fence Genius measurements to plan panel sizing, gate placement and grade changes before installation day. That preparation helps reduce disruption and supports our 98%+ on-time installation rate.
      </p>
      <p className='text-muted-foreground leading-relaxed'>
        Our Bellevue work commonly includes cedar privacy fencing for established neighborhoods, hogwire fencing for open garden and pet areas, and hybrid aluminum cedar designs for homeowners who want a modern look with reduced maintenance. We focus on the systems we install best rather than offering every possible material.
      </p>
    </section>

    <section className='space-y-6'>
      <h2 className='text-3xl md:text-4xl font-bold'>Fence Types & Materials We Install</h2>
      <div className='space-y-3'>
        <h3 className='text-2xl font-semibold'>Cedar Fencing for Bellevue Homes</h3>
        <p className='text-muted-foreground leading-relaxed'>
          Cedar remains a strong choice for Bellevue because it provides natural warmth, privacy and durability in residential settings. We recommend cedar privacy fencing for yards near trails, schools, busy streets and side-yard setbacks where homeowners want security without a commercial look.
        </p>
      </div>
      <div className='space-y-3'>
        <h3 className='text-2xl font-semibold'>Hogwire and Hybrid Designs</h3>
        <p className='text-muted-foreground leading-relaxed'>
          Hogwire works well for gardens, pets and wooded edges where visibility matters. Hybrid aluminum cedar fencing is popular for homeowners who prefer clean lines and less maintenance while keeping the warmth of wood framing.
        </p>
      </div>
      <p className='text-muted-foreground leading-relaxed'>
        Homeowners comparing upgrades can also review our <Link href='/fence-upgrades/post-on-pipe' className='text-primary underline decoration-2 underline-offset-2'>Post-on-Pipe upgrade</Link> and <Link href='/financing' className='text-primary underline decoration-2 underline-offset-2'>financing options</Link> while planning a Bellevue fence project.
      </p>
    </section>

    <section className='space-y-4'>
      <h2 className='text-3xl md:text-4xl font-bold'>What to Know Before Building a Fence in Bellevue</h2>
      <p className='text-muted-foreground leading-relaxed'>
        Bellevue properties can involve neighborhood covenants, tree preservation concerns, slopes, drainage and corner visibility requirements. Before installation, homeowners should verify current city rules, property lines and any HOA requirements that apply to their lot.
      </p>
      <Card className='p-6 bg-muted/50'>
        <h3 className='text-xl font-semibold mb-3'>Frequently Asked Questions</h3>
        <div className='space-y-4 text-muted-foreground'>
          <p><strong>How long does a Bellevue fence take?</strong> Most residential installations are completed quickly after layout, materials and access are confirmed.</p>
          <p><strong>What does a Bellevue fence cost?</strong> Pricing depends on fence style, linear footage, slope, gates, demolition and access.</p>
          <p><strong>Do I need to talk with neighbors?</strong> We recommend confirming property lines and discussing shared boundaries before work begins.</p>
          <p><strong>Which materials work best?</strong> Cedar, hogwire and hybrid aluminum cedar systems perform well when planned for moisture and drainage.</p>
        </div>
      </Card>
      <Card className='p-5 bg-primary/5 border-primary/20'>
        <p className='text-sm text-muted-foreground'>
          Building codes and HOA regulations are subject to change. Always verify current requirements with the City of Bellevue and your HOA before beginning any fence project.
        </p>
      </Card>
    </section>
  </article>
);

const Bellevue = () => {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a permit for a fence in Bellevue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Permit and review requirements depend on fence height, location, corner visibility, critical areas and HOA rules. Verify current Bellevue requirements before building.',
        },
      },
      {
        '@type': 'Question',
        name: 'What fence styles are popular in Bellevue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cedar privacy, hogwire and hybrid aluminum cedar fencing are common choices for Bellevue homes because they balance privacy, durability and design flexibility.',
        },
      },
    ],
  };

  return (
    <>
      <ServiceAreaTemplate
        city='Bellevue'
        state='WA'
        heroTitle='Bellevue Fence Installation'
        heroDescription='Professional cedar, hogwire and hybrid fence installation for Bellevue homes, wooded lots, hillside properties and Eastside neighborhoods.'
        metaTitle='Bellevue Fence Installation | Eastside Fence Experts | MyFence.com'
        metaDescription='Professional Bellevue fence installation. Cedar, hogwire and hybrid fencing built for Eastside terrain and wet weather. Call (253) 455-1885 for a free quote.'
        zipCodes={['98004', '98005', '98006', '98007', '98008']}
        neighborhoods={[
          { name: 'Somerset', description: 'Hillside properties with panoramic views and slope-sensitive fence layouts.', link: '/service-areas/bellevue/somerset' },
          { name: 'Newport Hills', description: 'Wooded hillside community where drainage, trees and grade changes shape fence planning.', link: '/service-areas/bellevue/newport-hills' },
          { name: 'Bridle Trails', description: 'Wooded equestrian-influenced neighborhood near Bridle Trails State Park with larger lots, privacy needs and mature landscaping.', link: '/service-areas/bellevue/bridle-trails' },
          { name: 'Crossroads', description: 'Established residential area with practical privacy, pet and side-yard fencing needs.' },
          { name: 'Factoria', description: 'Convenient South Bellevue neighborhood with busy streets, family yards and durable fence needs.' },
          { name: 'Eastgate', description: 'Residential lots near I-90 where privacy and noise buffering are common project goals.' },
          { name: 'Lake Hills', description: 'Classic Bellevue neighborhood with mature landscaping and family-friendly outdoor spaces.' },
          { name: 'Downtown Bellevue', description: 'Urban homes, townhomes and modern properties needing clean fence lines and careful access planning.' },
        ]}
        landmarks={['Bellevue Botanical Garden', 'Bellevue Arts Museum', 'Mercer Slough Nature Park', 'The Bellevue Collection', 'Meydenbauer Beach Park']}
        climateDescription='Bellevue fences must handle wet winters, shaded yards, mature trees, drainage changes and occasional wind exposure. We plan materials, post placement and gate details around Eastside conditions.'
        articleContent={<BellevueArticle />}
        faqStructuredData={faqStructuredData}
      />
      <AboutTheArea
        cityName='Bellevue'
        attractions={BELLEVUE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Bellevue homeowners are served by the{' '}
              <a href='https://bsd405.org/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>Bellevue School District</a>{' '}
              and enjoy quick access to parks, shopping and cultural destinations including{' '}
              <a href='https://www.thebellevuecollection.com/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>The Bellevue Collection</a>{' '}
              and the{' '}
              <a href='https://bellevuebotanical.org/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>Bellevue Botanical Garden</a>.
            </p>
            <p>
              Outdoor living varies from lake-adjacent homes to wooded Eastside neighborhoods. Nearby places such as{' '}
              <a href='https://parks.bellevuewa.gov/parks-open-spaces/parks/mercer-slough-nature-park/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>Mercer Slough Nature Park</a>{' '}
              and{' '}
              <a href='https://parks.bellevuewa.gov/parks-open-spaces/parks/meydenbauer-beach-park/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>Meydenbauer Beach Park</a>{' '}
              show why Bellevue fence designs need to account for moisture, privacy, views and mature landscaping.
            </p>
          </>
        }
      />
    </>
  );
};

export default Bellevue;