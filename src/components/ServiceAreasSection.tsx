import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const serviceAreasByRegion = [
  {
    region: "King County",
    areas: [
      { to: "/service-areas/bellevue", label: "Bellevue" },
      { to: "/service-areas/issaquah", label: "Issaquah" },
      { to: "/service-areas/issaquah-highlands", label: "Issaquah Highlands" },
      { to: "/service-areas/kirkland", label: "Kirkland" },
      { to: "/service-areas/mountlake-terrace", label: "Mountlake Terrace" },
      { to: "/service-areas/redmond", label: "Redmond" },
      { to: "/service-areas/renton", label: "Renton" },
      { to: "/service-areas/sammamish", label: "Sammamish" },
      { to: "/service-areas/seattle", label: "Seattle" },
      { to: "/service-areas/seatac", label: "SeaTac" },
      { to: "/service-areas/tukwila", label: "Tukwila" },
    ],
  },
  {
    region: "Pierce County",
    areas: [
      { to: "/service-areas/bonney-lake", label: "Bonney Lake" },
      { to: "/service-areas/federal-way", label: "Federal Way" },
      { to: "/service-areas/gig-harbor", label: "Gig Harbor" },
      { to: "/service-areas/lake-tapps", label: "Lake Tapps" },
      { to: "/service-areas/orting", label: "Orting" },
      { to: "/service-areas/riverpoint", label: "Riverpoint" },
      { to: "/service-areas/sumner", label: "Sumner" },
      { to: "/service-areas/university-place", label: "University Place" },
    ],
  },
  {
    region: "East King County",
    areas: [
      { to: "/service-areas/black-diamond", label: "Black Diamond" },
      { to: "/service-areas/covington", label: "Covington" },
      { to: "/service-areas/enumclaw", label: "Enumclaw" },
      { to: "/service-areas/maple-valley", label: "Maple Valley" },
      { to: "/service-areas/north-bend", label: "North Bend" },
      { to: "/service-areas/snoqualmie", label: "Snoqualmie" },
    ],
  },
  {
    region: "Bonney Lake Communities",
    areas: [
      { to: "/service-areas/downtown-bonney-lake", label: "Downtown Bonney Lake" },
      { to: "/service-areas/falling-water", label: "Falling Water" },
      { to: "/service-areas/lower-tehaleh", label: "Lower Tehaleh" },
      { to: "/service-areas/mountain-creek", label: "Mountain Creek" },
      { to: "/service-areas/upper-tehaleh", label: "Upper Tehaleh" },
    ],
  },
  {
    region: "Neighborhoods",
    areas: [
      { to: "/service-areas/bellevue/sherwood-forest", label: "Sherwood Forest (Bellevue)" },
      { to: "/service-areas/black-diamond/lawson-hill-estates", label: "Lawson Hill Estates (Black Diamond)" },
      { to: "/service-areas/issaquah/mirrormont", label: "Mirrormont (Issaquah)" },
      { to: "/service-areas/kirkland/juanita", label: "Juanita (Kirkland)" },
      { to: "/service-areas/sammamish/klahanie", label: "Klahanie (Sammamish)" },
    ],
  },
];

const ServiceAreasSection = () => {
  return (
    <section className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional fence installation across King County, Pierce County, and East King County
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceAreasByRegion.map((region) => (
          <Card key={region.region} className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground text-center">{region.region}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
                {region.areas.map((area) => (
                  <Link
                    key={area.to}
                    href={area.to}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group pb-2"
                  >
                    <span>{area.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceAreasSection;
