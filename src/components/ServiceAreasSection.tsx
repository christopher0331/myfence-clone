import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const serviceAreasByRegion = [
  {
    region: "King County",
    areas: [
      { to: "/service-areas/bellevue", label: "Bellevue" },
      { to: "/service-areas/issaquah", label: "Issaquah" },
      { to: "/service-areas/kirkland", label: "Kirkland" },
      { to: "/service-areas/mountlake-terrace", label: "Mountlake Terrace" },
      { to: "/service-areas/redmond", label: "Redmond" },
      { to: "/service-areas/renton", label: "Renton" },
      { to: "/service-areas/sammamish", label: "Sammamish" },
      { to: "/service-areas/seattle", label: "Seattle" },
    ],
  },
  {
    region: "Pierce County",
    areas: [
      { to: "/service-areas/bonney-lake", label: "Bonney Lake" },
      { to: "/service-areas/federal-way", label: "Federal Way" },
      { to: "/service-areas/gig-harbor", label: "Gig Harbor" },
      { to: "/service-areas/lake-tapps", label: "Lake Tapps" },
    ],
  },
  {
    region: "East King County",
    areas: [
      { to: "/service-areas/covington", label: "Covington" },
      { to: "/service-areas/enumclaw", label: "Enumclaw" },
      { to: "/service-areas/maple-valley", label: "Maple Valley" },
      { to: "/service-areas/north-bend", label: "North Bend" },
    ],
  },
];

const ServiceAreasSection = () => {
  return (
    <section className="container py-8 md:py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Service Areas</h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Professional fence installation across King County, Pierce County, and East King County
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {serviceAreasByRegion.map((region) => (
          <Card key={region.region} className="border hover:border-primary/50 transition-colors">
            <CardContent className="p-3">
              <h3 className="text-lg font-semibold mb-2 text-foreground">{region.region}</h3>
              <ul className="space-y-1">
                {region.areas.map((area) => (
                  <li key={area.to}>
                    <Link
                      to={area.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group py-0.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceAreasSection;
