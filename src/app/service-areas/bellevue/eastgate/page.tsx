import type { Metadata } from 'next';
import EastgatePage from '@/components/neighborhoods/EastgatePage';

export const metadata: Metadata = {
  title: 'Eastgate Services | Bellevue',
  description: 'Professional services in Eastgate, Bellevue.',
  alternates: {
    canonical: 'https://myfence.com/service-areas/bellevue/eastgate',
  },
};

export default function EastgateBellevuePage() {
  return <EastgatePage />;
}