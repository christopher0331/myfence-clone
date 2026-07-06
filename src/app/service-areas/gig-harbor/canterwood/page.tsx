import type { Metadata } from 'next';
import CanterwoodPage from '@/components/neighborhoods/CanterwoodPage';

export const metadata: Metadata = {
  title: 'Canterwood Services | Gig Harbor',
  description: 'Professional services in Canterwood, Gig Harbor.',
  alternates: {
    canonical: 'https://myfence.com/service-areas/gig-harbor/canterwood',
  },
};

export default function CanterwoodGigHarborPage() {
  return <CanterwoodPage />;
}