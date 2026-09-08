import type { Metadata } from 'next';
import BridleTrailsPage from '@/components/neighborhoods/BridleTrailsPage';

export const metadata: Metadata = {
  title: 'Bridle Trails Fence Installation | MyFence.com',
  description:
    'Professional fence installation in Bridle Trails, Bellevue, WA. Cedar, hogwire and hybrid fencing for wooded lots, privacy, pets and estate-style properties. Call (253) 455-1885.',
  alternates: {
    canonical: 'https://myfence.com/service-areas/bellevue/bridle-trails',
  },
};

export default function Page() {
  return <BridleTrailsPage />;
}