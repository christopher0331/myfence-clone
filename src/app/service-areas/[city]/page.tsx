import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import {
  getCityNameBySlug,
  getNeighborhoodsForCity,
  slugifyLocation,
} from "@/lib/serviceAreaPhotoUtils";

type ServiceAreaCityPageProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: ServiceAreaCityPageProps): Metadata {
  const cityName = getCityNameBySlug(params.city);
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
      canonical: `https://myfence.com/service-areas/${params.city}`,
    },
  };
}

export default function ServiceAreaCityPage({ params }: ServiceAreaCityPageProps) {
  const cityName = getCityNameBySlug(params.city);
  if (!cityName) {
    notFound();
  }

  const neighborhoods = getNeighborhoodsForCity(params.city).map((name) => ({
    name,
    description: `Fence installation and replacement projects completed in ${name}.`,
    link: `/service-areas/${params.city}/${slugifyLocation(name)}`,
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

