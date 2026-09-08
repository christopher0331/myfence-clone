import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import {
  getCityNameBySlug,
  getNeighborhoodsForCity,
  slugifyLocation,
} from "@/lib/serviceAreaPhotoUtils";

type ServiceAreaCityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export async function generateMetadata({ params }: ServiceAreaCityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = getCityNameBySlug(city);
  if (!cityName) {
    return {
      title: "Service Area | MyFence.com",
      description: "Professional fence installation and repair services.",
    };
  }

  return {
    title: `${cityName} Fence Installation & Repair | MyFence.com`,
    description: `Professional fence installation, repair, and replacement services in ${cityName}, WA.`,
    alternates: {
      canonical: `https://myfence.com/service-areas/${city}`,
    },
  };
}

export default async function ServiceAreaCityPage({ params }: ServiceAreaCityPageProps) {
  const { city } = await params;
  const cityName = getCityNameBySlug(city);
  if (!cityName) {
    notFound();
  }

  const neighborhoods = getNeighborhoodsForCity(city).map((name) => ({
    name,
    description: `Fence installation and replacement projects completed in ${name}.`,
    link: `/service-areas/${city}/${slugifyLocation(name)}`,
  }));

  return (
    <ServiceAreaTemplate
      city={cityName}
      state="WA"
      neighborhoods={neighborhoods}
      heroTitle={`Professional Fence Services in ${cityName}`}
      heroDescription={`See recent fence installations and neighborhood projects in ${cityName}. Get a free quote from MyFence.com today.`}
    />
  );
}

