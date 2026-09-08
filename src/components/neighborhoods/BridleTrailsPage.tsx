'use client';

import Link from 'next/link';
import Seo from '@/components/Seo';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  MapPin,
  Phone,
  Shield,
  Star,
  Trees,
  PawPrint,
  Home,
} from 'lucide-react';
import VirtualQuoteTool from '@/components/VirtualQuoteTool';
import { WARRANTY_CONSTANTS } from '@/constants/warranty';
import GoogleBusinessMap from '@/components/GoogleBusinessMap';
import OptimizedImage from '@/components/OptimizedImage';
import AboutTheArea, { type LocalAttraction } from '@/components/AboutTheArea';
import { buildNeighborhoodStructuredData } from '@/components/neighborhoods/structuredData';

const CANONICAL = 'https://myfence.com/service-areas/bellevue/bridle-trails';
const META_TITLE = 'Bridle Trails Fence Installation | MyFence.com';
const META_DESCRIPTION =
  'Professional fence installation in Bridle Trails, Bellevue, WA. Cedar, hogwire and hybrid fencing for wooded lots, privacy, pets and estate-style properties. Call (253) 455-1885.';

const PHOTO_SRC = 'https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797';

const BRIDLE_TRAILS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: 'Bellevue Botanical Garden',
    url: 'https://bellevuebotanical.org/',
    description:
      'A garden-focused Bellevue destination with wooded paths, native plantings and year-round outdoor programming. It reflects the same mature landscape character many Bridle Trails homeowners want to preserve during a fence project.',
  },
  {
    name: 'The Bellevue Collection',
    url: 'https://www.thebellevuecollection.com/',
    description:
      'A central Eastside shopping and dining district within a practical drive of Bridle Trails. Its proximity gives the neighborhood a quiet residential feel while keeping city amenities close.',
  },
  {
    name: 'Bellevue Arts Museum',
    url: 'https://www.bellevuearts.org/',
    description:
      'A downtown Bellevue museum centered on craft and design. Homeowners who want a refined fence style often draw on the same clean, intentional design approach used in Bellevue outdoor spaces.',
  },
  {
    name: 'Meydenbauer Beach Park',
    url: 'https://parks.bellevuewa.gov/parks-open-spaces/parks/meydenbauer-beach-park/',
    description:
      'A public Lake Washington park with waterfront access, lawns and gathering areas. It is one of the Bellevue landmarks that shows how outdoor living and privacy matter across the city.',
  },
];

const BridleTrailsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: 'Bridle Trails, Bellevue',
    pageTitle: 'Bridle Trails Bellevue Fence Installation',
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: 'Do I need a permit to build a fence in Bridle Trails, Bellevue?',
        answer:
          'Permit needs depend on fence height, placement, corner visibility, easements and any HOA or covenant rules that apply to the property. MyFence.com helps Bridle Trails homeowners identify the requirements that should be checked before installation.',
      },
      {
        question: 'What fence styles work best for wooded Bridle Trails properties?',
        answer:
          'Cedar privacy fencing is a strong fit where screening matters, while hogwire works well near gardens, trees and pet areas where visibility is preferred. Hybrid aluminum cedar fencing is a good option for a cleaner modern look with less maintenance.',
      },
      {
        question: 'How much does fence installation cost in Bridle Trails?',
        answer:
          'Most Bridle Trails fence projects vary based on linear footage, access, gates, demolition, slope, trees and the selected style. Cedar privacy commonly costs more than simple open fencing, and mature landscaping can affect layout time.',
      },
      {
        question: 'How do you protect trees and landscaping during installation?',
        answer:
          'We plan post locations carefully, review access before work begins and use smaller-scale installation methods where mature trees, garden beds or root zones require extra care.',
      },
    ],
  });

  return (
    <>
      <Seo title={META_TITLE} description={META_DESCRIPTION} canonical={CANONICAL} structuredData={structuredData} />

      <main className='min-h-screen'>
        <section className='pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background'>
          <div className='container'>
            <Link href='/service-areas/bellevue' className='inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors'>
              <ArrowLeft className='h-4 w-4' />
              Back to Bellevue
            </Link>
            <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto'>
              <div className='text-center lg:text-left'>
                <div className='flex items-center justify-center lg:justify-start gap-2 mb-6'>
                  <MapPin className='h-6 w-6 text-primary' />
                  <span className='text-lg text-muted-foreground'>Serving Bridle Trails, Bellevue WA</span>
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>Bridle Trails Fence Installation</h1>
                <p className='text-xl text-muted-foreground mb-8'>
                  Cedar, hogwire and hybrid fencing for Bridle Trails properties with wooded yards, privacy needs, pets, mature landscaping and estate-style lot layouts.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                  <a href='tel:12534551885'>
                    <Button size='lg' variant='hero' className='w-full sm:w-auto'>
                      <Phone className='mr-2 h-5 w-5' />
                      Call (253) 455-1885
                    </Button>
                  </a>
                  <Button asChild size='lg' variant='outline' className='w-full sm:w-auto'>
                    <Link href='/quote'>Get Free Quote</Link>
                  </Button>
                </div>
              </div>
              <div className='w-full rounded-lg overflow-hidden shadow-lg min-h-[280px]'>
                <GoogleBusinessMap city='Bellevue' state='WA' radiusMiles={5} zoom={11} showBusinessInfo={false} />
              </div>
            </div>
          </div>
        </section>

        <section className='py-6 border-y bg-muted/30'>
          <div className='container'>
            <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm'>
              <span className='flex items-center gap-2 text-muted-foreground'><Shield className='h-5 w-5 text-primary' />Licensed & Insured</span>
              <span className='flex items-center gap-2 text-muted-foreground'><Star className='h-5 w-5 text-primary fill-primary' />5.0 ★ Google Rating</span>
              <span className='flex items-center gap-2 text-muted-foreground'><Award className='h-5 w-5 text-primary' />{WARRANTY_CONSTANTS.YEARS}-Year Warranty</span>
              <span className='flex items-center gap-2 text-muted-foreground'><CheckCircle2 className='h-5 w-5 text-primary' />150+ Five-Star Reviews</span>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container'>
            <div className='max-w-4xl mx-auto space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold'>Wooded-Lot Fencing Near Bridle Trails State Park</h2>
              <p className='text-muted-foreground leading-relaxed text-lg'>
                Bridle Trails is known for its tree canopy, quiet residential streets and larger lots near the Bellevue and Kirkland border. Homes around 140th Avenue NE, NE 24th Street and the park-adjacent streets often need fences that create privacy without overwhelming mature landscaping or blocking the open feel that makes the neighborhood distinctive.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                MyFence.com plans Bridle Trails fence projects around wooded boundaries, pet containment, side-yard privacy, garden protection and driveway access. Fence Genius measurements help us prepare accurate layouts before installation day, while our cedar, hogwire and hybrid aluminum cedar systems give homeowners options for privacy, visibility and low-maintenance curb appeal.
              </p>
            </div>
          </div>
        </section>

        <section className='py-16 bg-muted/50'>
          <div className='container'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Why Bridle Trails Homeowners Trust MyFence.com</h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <Card className='p-6'><Trees className='h-8 w-8 text-primary mb-3' /><h3 className='text-xl font-semibold mb-2'>Tree-Conscious Layouts</h3><p className='text-muted-foreground'>We plan fence lines around mature landscaping, root zones and established yard features common in Bridle Trails.</p></Card>
                <Card className='p-6'><PawPrint className='h-8 w-8 text-primary mb-3' /><h3 className='text-xl font-semibold mb-2'>Pet and Yard Security</h3><p className='text-muted-foreground'>Many Bridle Trails homeowners want safe outdoor space for dogs without losing the natural, open character of the lot.</p></Card>
                <Card className='p-6'><ClipboardCheck className='h-8 w-8 text-primary mb-3' /><h3 className='text-xl font-semibold mb-2'>HOA and Covenant Awareness</h3><p className='text-muted-foreground'>We help identify design review questions, property-line concerns and documentation needs before installation begins.</p></Card>
                <Card className='p-6'><Shield className='h-8 w-8 text-primary mb-3' /><h3 className='text-xl font-semibold mb-2'>{WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3><p className='text-muted-foreground'>Every qualifying installation is backed by our workmanship warranty for long-term confidence.</p></Card>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>What Bridle Trails Homeowners Can Expect</h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <Card className='p-6'>
                  <div className='flex gap-1 mb-3'>{[1, 2, 3, 4, 5].map((i) => <Star key={i} className='h-5 w-5 text-primary fill-primary' />)}</div>
                  <p className='text-muted-foreground mb-4'>MyFence.com has 150+ five-star reviews across its service area. For Bridle Trails projects, we focus on careful communication, clean installation and protection of mature yard features.</p>
                  <p className='text-sm font-medium'>Verified review signals</p>
                </Card>
                <Card className='p-6'>
                  <div className='flex gap-1 mb-3'>{[1, 2, 3, 4, 5].map((i) => <Star key={i} className='h-5 w-5 text-primary fill-primary' />)}</div>
                  <p className='text-muted-foreground mb-4'>Homeowners choosing cedar, hogwire or hybrid fencing can expect a clear scope, a practical installation plan and a walkthrough before the project is considered complete.</p>
                  <p className='text-sm font-medium'>MyFence.com customer experience</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 bg-muted/50'>
          <div className='container'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Our Work in Bridle Trails and Bellevue</h2>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {['Cedar Privacy Fence', 'Hogwire Garden Fence', 'Hybrid Aluminum Cedar Fence'].map((style) => (
                  <Card key={style} className='overflow-hidden'>
                    <div className='aspect-[4/3] relative bg-muted/50'>
                      <OptimizedImage src={PHOTO_SRC} alt={`${style} project example in Bellevue`} fill className='object-cover' />
                    </div>
                    <div className='p-5'>
                      <h3 className='font-semibold mb-2'>{style}</h3>
                      <p className='text-sm text-muted-foreground'>Bellevue-area project photo showing the type of clean, durable installation available for Bridle Trails homes.</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container'>
            <Card className='max-w-4xl mx-auto p-8 bg-primary/5 border-primary/20'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>Featured Bridle Trails Installation</h2>
              <div className='grid md:grid-cols-2 gap-6 items-center'>
                <div className='aspect-[4/3] relative rounded-lg overflow-hidden bg-muted'>
                  <OptimizedImage src={PHOTO_SRC} alt='Cedar privacy fence example for a wooded Bellevue property' fill className='object-cover' />
                </div>
                <div className='space-y-4'>
                  <p className='text-muted-foreground leading-relaxed'>
                    A typical Bridle Trails fence plan starts with privacy needs, pet access, gates and the relationship between the fence line and mature landscaping. On wooded Bellevue properties, we look for practical post locations, drainage paths and ways to keep the finished fence visually balanced with trees and gardens.
                  </p>
                  <ul className='space-y-2 text-muted-foreground'>
                    <li className='flex gap-2'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0' />Fence style: Cedar privacy or hybrid aluminum cedar</li>
                    <li className='flex gap-2'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0' />Timeline: Confirmed after site assessment and material selection</li>
                    <li className='flex gap-2'><CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0' />Planning focus: Trees, pets, privacy, access and gates</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className='py-16 bg-muted/50'>
          <div className='container'>
            <div className='max-w-4xl mx-auto space-y-8'>
              <h2 className='text-3xl md:text-4xl font-bold text-center'>Bridle Trails-Specific Fencing Considerations</h2>
              <div className='space-y-6'>
                <Card className='p-6'><h3 className='text-xl font-semibold mb-2'>Bridle Trails Tree Preservation</h3><p className='text-muted-foreground'>Fence layout should respect mature evergreens, ornamental trees and established landscape beds. We review access and post spacing before work begins so the installation fits the yard instead of forcing a generic layout.</p></Card>
                <Card className='p-6'><h3 className='text-xl font-semibold mb-2'>Bridle Trails Privacy and Pet Control</h3><p className='text-muted-foreground'>Many homes have larger yards and wooded edges. Cedar privacy fencing can screen outdoor living areas, while hogwire can define pet space without closing off the view into planted areas.</p></Card>
                <Card className='p-6'><h3 className='text-xl font-semibold mb-2'>Bridle Trails Moisture and Drainage</h3><p className='text-muted-foreground'>Shaded lots can stay damp longer after rain. We consider drainage, grade and soil conditions when planning posts and gate clearances.</p></Card>
                <Card className='p-6'><h3 className='text-xl font-semibold mb-2'>Bridle Trails Design Review</h3><p className='text-muted-foreground'>Some properties may have HOA, covenant or neighbor expectations. A clear style selection and documented layout can make review conversations easier.</p></Card>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>Fence Installation Cost in Bridle Trails</h2>
              <p className='text-muted-foreground mb-6'>Pricing depends on fence style, total footage, gates, access, demolition, terrain and tree or landscape constraints. These planning ranges help homeowners compare common options before requesting an exact quote.</p>
              <div className='grid md:grid-cols-3 gap-4 mb-6'>
                <Card className='p-5'><h3 className='font-semibold mb-2'>Cedar Privacy</h3><p className='text-muted-foreground'>$48-$72 per linear foot</p></Card>
                <Card className='p-5'><h3 className='font-semibold mb-2'>Hogwire</h3><p className='text-muted-foreground'>$42-$65 per linear foot</p></Card>
                <Card className='p-5'><h3 className='font-semibold mb-2'>Hybrid Aluminum/Cedar</h3><p className='text-muted-foreground'>$55-$85 per linear foot</p></Card>
              </div>
              <Button asChild size='lg' variant='hero'><Link href='/quote'>Get an exact quote for your Bridle Trails property</Link></Button>
            </div>
          </div>
        </section>

        <section className='py-16 bg-muted/50'>
          <div className='container'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Popular Fence Styles in Bridle Trails</h2>
              <div className='grid md:grid-cols-3 gap-6'>
                <Card className='p-6'><Home className='h-8 w-8 text-primary mb-3' /><h3 className='text-xl font-semibold mb-2'>Cedar Privacy Fence</h3><p className='text-muted-foreground mb-4'>A natural choice for screening patios, side yards and wooded property edges.</p><Link href='/fence-styles/picture-frame-fence' className='text-primary font-semibold'>View styles →</Link></Card>
                <Card className='p-6'><Trees className='h-8 w-8 text-primary mb-3' /><h3 className='text-xl font-semibold mb-2'>Hogwire Fence</h3><p className='text-muted-foreground mb-4'>Great for gardens, pets and wooded areas where visibility matters.</p><Link href='/fence-styles/black-hogwire-fence' className='text-primary font-semibold'>View styles →</Link></Card>
                <Card className='p-6'><Droplets className='h-8 w-8 text-primary mb-3' /><h3 className='text-xl font-semibold mb-2'>Hybrid Aluminum/Cedar</h3><p className='text-muted-foreground mb-4'>A clean, modern option for homeowners who want lower maintenance.</p><Link href='/fence-styles/cedar-steel-hybrid-fence' className='text-primary font-semibold'>View styles →</Link></Card>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container'>
            <VirtualQuoteTool fenceStyleName='Bridle Trails Bellevue fence' />
          </div>
        </section>

        <section className='py-16 bg-muted/50'>
          <div className='container'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Our Bridle Trails Installation Process</h2>
              <div className='grid gap-4'>
                {[
                  'Bridle Trails Site Assessment',
                  'Bridle Trails Design and Review Planning',
                  'Custom Panel Manufacturing',
                  'Bridle Trails Installation',
                  `Walkthrough and ${WARRANTY_CONSTANTS.YEARS}-Year Warranty`,
                ].map((step, index) => (
                  <Card key={step} className='p-5 flex gap-4'>
                    <div className='h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0'>{index + 1}</div>
                    <div><h3 className='font-semibold mb-1'>{step}</h3><p className='text-muted-foreground'>We confirm layout details, access, gates, materials and site conditions so the finished fence fits the property.</p></div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AboutTheArea
          cityName='Bellevue'
          neighborhoodName='Bridle Trails'
          attractions={BRIDLE_TRAILS_ATTRACTIONS}
          localLivingContent={
            <>
              <p>
                Bridle Trails homeowners are served by the{' '}
                <a href='https://bsd405.org/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>Bellevue School District</a>{' '}
                and enjoy quick access to Bellevue destinations such as{' '}
                <a href='https://www.thebellevuecollection.com/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>The Bellevue Collection</a>{' '}
                and the{' '}
                <a href='https://bellevuebotanical.org/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>Bellevue Botanical Garden</a>.
              </p>
              <p>
                The neighborhood combines wooded residential streets with convenient Eastside access. Nearby Bellevue amenities including{' '}
                <a href='https://www.bellevuearts.org/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>Bellevue Arts Museum</a>{' '}
                and{' '}
                <a href='https://parks.bellevuewa.gov/parks-open-spaces/parks/meydenbauer-beach-park/' target='_blank' rel='noopener noreferrer' className='font-semibold text-primary underline decoration-2 underline-offset-4'>Meydenbauer Beach Park</a>{' '}
                make Bridle Trails a quiet home base close to city recreation, dining and shopping.
              </p>
            </>
          }
        />

        <section className='py-16'>
          <div className='container'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6 text-center'>Also Serving Nearby Bellevue Neighborhoods</h2>
              <div className='grid md:grid-cols-3 gap-6'>
                <Card className='p-5'><h3 className='font-semibold mb-2'>Newport Hills</h3><p className='text-muted-foreground mb-3'>Wooded hillside properties with slope and drainage planning needs.</p><Link href='/service-areas/bellevue/newport-hills' className='text-primary font-semibold'>Learn more →</Link></Card>
                <Card className='p-5'><h3 className='font-semibold mb-2'>Somerset</h3><p className='text-muted-foreground mb-3'>View properties where fence height, slope and sightlines matter.</p><Link href='/service-areas/bellevue/somerset' className='text-primary font-semibold'>Learn more →</Link></Card>
                <Card className='p-5'><h3 className='font-semibold mb-2'>Crossroads</h3><p className='text-muted-foreground mb-3'>Established residential area with privacy, pet and side-yard needs.</p><Link href='/service-areas/bellevue' className='text-primary font-semibold'>Bellevue services →</Link></Card>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 bg-primary text-primary-foreground'>
          <div className='container text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to Enhance Your Bridle Trails Property?</h2>
            <p className='text-xl opacity-90 mb-8 max-w-2xl mx-auto'>Same-day estimates available in Bridle Trails. Tell us about your yard, pets, privacy goals and preferred fence style.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button asChild size='lg' variant='secondary'><Link href='/quote'>Get Free Quote</Link></Button>
              <Button asChild size='lg' variant='outline'><Link href='/contact'>Contact Us</Link></Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BridleTrailsPage;