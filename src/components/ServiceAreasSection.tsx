import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mountain, Trees, Phone, ArrowRight, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AreaLink = {
  to: string;
  label: string;
};

type CityHub = {
  to: string;
  label: string;
  /** Neighborhood and HOA pages that exist as routes in this repo. */
  neighborhoods?: AreaLink[];
};

type RegionGroup = {
  region: string;
  blurb: string;
  icon: LucideIcon;
  accentClass: string;
  areas: CityHub[];
};

/**
 * County hubs and nested neighborhood/HOA links.
 * Only routes that exist under src/app/service-areas are listed.
 * Dead hubs (Orting, Puyallup, Riverpoint, Snoqualmie) intentionally omitted.
 */
const serviceAreasByRegion: RegionGroup[] = [
  {
    region: "King County",
    blurb: "Seattle metro, Eastside, and South King city hubs.",
    icon: MapPin,
    accentClass: "from-emerald-700/90 to-emerald-900/90",
    areas: [
      {
        to: "/service-areas/auburn",
        label: "Auburn",
        neighborhoods: [
          { to: "/service-areas/auburn/christopher", label: "Christopher" },
          { to: "/service-areas/auburn/highlands-at-woodbrook", label: "Highlands at Woodbrook" },
          {
            to: "/service-areas/auburn/highlands-at-woodbrook/hoa-approved-fencing",
            label: "Highlands at Woodbrook HOA",
          },
          { to: "/service-areas/auburn/lakeland-hills", label: "Lakeland Hills" },
          {
            to: "/service-areas/auburn/lakeland-hills/hoa-approved-fencing",
            label: "Lakeland Hills HOA",
          },
          { to: "/service-areas/auburn/riverpointe", label: "Riverpointe" },
          {
            to: "/service-areas/auburn/riverpointe/hoa-approved-fencing",
            label: "Riverpointe HOA",
          },
        ],
      },
      {
        to: "/service-areas/bellevue",
        label: "Bellevue",
        neighborhoods: [
          { to: "/service-areas/bellevue/bridle-trails", label: "Bridle Trails" },
          { to: "/service-areas/bellevue/crossroads", label: "Crossroads" },
          { to: "/service-areas/bellevue/downtown-bellevue", label: "Downtown Bellevue" },
          { to: "/service-areas/bellevue/eastgate", label: "Eastgate" },
          {
            to: "/service-areas/bellevue/eastgate/hoa-approved-fencing",
            label: "Eastgate HOA",
          },
          { to: "/service-areas/bellevue/factoria", label: "Factoria" },
          { to: "/service-areas/bellevue/newcastle", label: "Newcastle" },
          { to: "/service-areas/bellevue/newport-hills", label: "Newport Hills" },
          { to: "/service-areas/bellevue/sherwood-forest", label: "Sherwood Forest" },
          { to: "/service-areas/bellevue/somerset", label: "Somerset" },
          {
            to: "/service-areas/bellevue/somerset/hoa-approved-fencing",
            label: "Somerset HOA",
          },
          { to: "/service-areas/bellevue/west-bellevue", label: "West Bellevue" },
          { to: "/service-areas/bellevue/wilburton", label: "Wilburton" },
        ],
      },
      {
        to: "/service-areas/bothell",
        label: "Bothell",
        neighborhoods: [
          { to: "/service-areas/bothell/canyon-park", label: "Canyon Park" },
        ],
      },
      {
        to: "/service-areas/issaquah",
        label: "Issaquah",
        neighborhoods: [
          { to: "/service-areas/issaquah/grand-ridge", label: "Grand Ridge" },
          { to: "/service-areas/issaquah/mirrormont", label: "Mirrormont" },
          {
            to: "/service-areas/issaquah/mirrormont/hoa-approved-fencing",
            label: "Mirrormont HOA",
          },
          { to: "/service-areas/issaquah/montreux", label: "Montreux" },
          { to: "/service-areas/issaquah/olde-town", label: "Olde Town" },
          { to: "/service-areas/issaquah/providence-point", label: "Providence Point" },
          { to: "/service-areas/issaquah/talus", label: "Talus" },
        ],
      },
      {
        to: "/service-areas/issaquah-highlands",
        label: "Issaquah Highlands",
        neighborhoods: [
          {
            to: "/service-areas/issaquah-highlands/hoa-approved-fencing",
            label: "Issaquah Highlands HOA",
          },
        ],
      },
      {
        to: "/service-areas/kent",
        label: "Kent",
        neighborhoods: [
          { to: "/service-areas/kent/east-hill", label: "East Hill" },
          { to: "/service-areas/kent/kenton-firs", label: "Kenton Firs" },
          {
            to: "/service-areas/kent/kenton-firs/hoa-approved-fencing",
            label: "Kenton Firs HOA",
          },
          { to: "/service-areas/kent/panther-lake", label: "Panther Lake" },
          { to: "/service-areas/kent/wynaco", label: "Wynaco" },
        ],
      },
      {
        to: "/service-areas/kirkland",
        label: "Kirkland",
        neighborhoods: [
          { to: "/service-areas/kirkland/central-houghton", label: "Central Houghton" },
          { to: "/service-areas/kirkland/downtown-kirkland", label: "Downtown Kirkland" },
          { to: "/service-areas/kirkland/finn-hill", label: "Finn Hill" },
          {
            to: "/service-areas/kirkland/finn-hill/hoa-approved-fencing",
            label: "Finn Hill HOA",
          },
          { to: "/service-areas/kirkland/juanita", label: "Juanita" },
          { to: "/service-areas/kirkland/kingsgate", label: "Kingsgate" },
          { to: "/service-areas/kirkland/market", label: "Market" },
          { to: "/service-areas/kirkland/moss-bay", label: "Moss Bay" },
          { to: "/service-areas/kirkland/norkirk", label: "Norkirk" },
        ],
      },
      { to: "/service-areas/mountlake-terrace", label: "Mountlake Terrace" },
      {
        to: "/service-areas/redmond",
        label: "Redmond",
        neighborhoods: [
          { to: "/service-areas/redmond/downtown-redmond", label: "Downtown Redmond" },
          { to: "/service-areas/redmond/education-hill", label: "Education Hill" },
          { to: "/service-areas/redmond/grass-lawn", label: "Grass Lawn" },
          { to: "/service-areas/redmond/idylwood", label: "Idylwood" },
          { to: "/service-areas/redmond/overlake", label: "Overlake" },
          { to: "/service-areas/redmond/willows-rose-hill", label: "Willows / Rose Hill" },
        ],
      },
      {
        to: "/service-areas/renton",
        label: "Renton",
        neighborhoods: [
          { to: "/service-areas/renton/benson-hill", label: "Benson Hill" },
          { to: "/service-areas/renton/cascade", label: "Cascade" },
          { to: "/service-areas/renton/downtown-renton", label: "Downtown Renton" },
          { to: "/service-areas/renton/east-renton-plateau", label: "East Renton Plateau" },
          { to: "/service-areas/renton/fairwood", label: "Fairwood" },
          {
            to: "/service-areas/renton/fairwood/hoa-approved-fencing",
            label: "Fairwood HOA",
          },
          { to: "/service-areas/renton/kennydale", label: "Kennydale" },
          { to: "/service-areas/renton/maple-ridge-estates", label: "Maple Ridge Estates" },
          { to: "/service-areas/renton/maple-valley-heights", label: "Maple Valley Heights" },
          { to: "/service-areas/renton/renton-highlands", label: "Renton Highlands" },
          { to: "/service-areas/renton/sunset", label: "Sunset" },
          { to: "/service-areas/renton/talbot-hill", label: "Talbot Hill" },
          {
            to: "/service-areas/renton/the-grove-at-spring-lake",
            label: "The Grove at Spring Lake",
          },
          { to: "/service-areas/renton/west-hill", label: "West Hill" },
        ],
      },
      {
        to: "/service-areas/sammamish",
        label: "Sammamish",
        neighborhoods: [
          { to: "/service-areas/sammamish/autumn-wind", label: "Autumn Wind" },
          {
            to: "/service-areas/sammamish/autumn-wind/hoa-approved-fencing",
            label: "Autumn Wind HOA",
          },
          { to: "/service-areas/sammamish/beaver-lake", label: "Beaver Lake" },
          { to: "/service-areas/sammamish/cimarron", label: "Cimarron" },
          {
            to: "/service-areas/sammamish/cimarron/hoa-approved-fencing",
            label: "Cimarron HOA",
          },
          { to: "/service-areas/sammamish/east-sammamish", label: "East Sammamish" },
          { to: "/service-areas/sammamish/heritage-hills", label: "Heritage Hills" },
          {
            to: "/service-areas/sammamish/heritage-hills/hoa-approved-fencing",
            label: "Heritage Hills HOA",
          },
          { to: "/service-areas/sammamish/inglewood", label: "Inglewood" },
          { to: "/service-areas/sammamish/klahanie", label: "Klahanie" },
          {
            to: "/service-areas/sammamish/klahanie/hoa-approved-fencing",
            label: "Klahanie HOA",
          },
          { to: "/service-areas/sammamish/livingston", label: "Livingston" },
          {
            to: "/service-areas/sammamish/livingston/hoa-approved-fencing",
            label: "Livingston HOA",
          },
          { to: "/service-areas/sammamish/pine-lake", label: "Pine Lake" },
          {
            to: "/service-areas/sammamish/sahalee/hoa-approved-fencing",
            label: "Sahalee HOA",
          },
          { to: "/service-areas/sammamish/summer-ridge", label: "Summer Ridge" },
          {
            to: "/service-areas/sammamish/summer-ridge/hoa-approved-fencing",
            label: "Summer Ridge HOA",
          },
          { to: "/service-areas/sammamish/timberline-park", label: "Timberline Park" },
          {
            to: "/service-areas/sammamish/timberline-park/hoa-approved-fencing",
            label: "Timberline Park HOA",
          },
          { to: "/service-areas/sammamish/timberline-ridge", label: "Timberline Ridge" },
          {
            to: "/service-areas/sammamish/timberline-ridge/hoa-approved-fencing",
            label: "Timberline Ridge HOA",
          },
          { to: "/service-areas/sammamish/trossachs", label: "Trossachs" },
        ],
      },
      {
        to: "/service-areas/seattle",
        label: "Seattle",
        neighborhoods: [
          { to: "/service-areas/seattle/ballard", label: "Ballard" },
          { to: "/service-areas/seattle/beacon-hill", label: "Beacon Hill" },
          { to: "/service-areas/seattle/capitol-hill", label: "Capitol Hill" },
          { to: "/service-areas/seattle/fremont", label: "Fremont" },
          { to: "/service-areas/seattle/georgetown", label: "Georgetown" },
          { to: "/service-areas/seattle/green-lake", label: "Green Lake" },
          { to: "/service-areas/seattle/magnolia", label: "Magnolia" },
          { to: "/service-areas/seattle/queen-anne", label: "Queen Anne" },
          { to: "/service-areas/seattle/ravenna", label: "Ravenna" },
          { to: "/service-areas/seattle/wallingford", label: "Wallingford" },
          { to: "/service-areas/seattle/west-seattle", label: "West Seattle" },
        ],
      },
      {
        to: "/service-areas/seatac",
        label: "SeaTac",
        neighborhoods: [
          { to: "/service-areas/seatac/angle-lake", label: "Angle Lake" },
          { to: "/service-areas/seatac/bow-lake", label: "Bow Lake" },
          { to: "/service-areas/seatac/mcmicken-heights", label: "McMicken Heights" },
        ],
      },
      { to: "/service-areas/tukwila", label: "Tukwila" },
    ],
  },
  {
    region: "Pierce County",
    blurb: "Bonney Lake, Gig Harbor, Sumner, and nearby South Sound hubs.",
    icon: Trees,
    accentClass: "from-teal-700/90 to-teal-900/90",
    areas: [
      {
        to: "/service-areas/bonney-lake",
        label: "Bonney Lake",
        neighborhoods: [
          { to: "/service-areas/bonney-lake/downtown-bonney-lake", label: "Downtown Bonney Lake" },
          { to: "/service-areas/bonney-lake/falling-water", label: "Falling Water" },
          {
            to: "/service-areas/bonney-lake/falling-water/hoa-approved-fencing",
            label: "Falling Water HOA",
          },
          { to: "/service-areas/bonney-lake/lake-tapps", label: "Lake Tapps (Bonney Lake)" },
          { to: "/service-areas/bonney-lake/lower-tehaleh", label: "Lower Tehaleh" },
          { to: "/service-areas/bonney-lake/mountain-creek", label: "Mountain Creek" },
          {
            to: "/service-areas/bonney-lake/tehaleh/hoa-approved-fencing",
            label: "Tehaleh HOA",
          },
          { to: "/service-areas/bonney-lake/upper-tehaleh", label: "Upper Tehaleh" },
        ],
      },
      {
        to: "/service-areas/federal-way",
        label: "Federal Way",
        neighborhoods: [
          {
            to: "/service-areas/federal-way/meadowpark/hoa-approved-fencing",
            label: "Meadowpark HOA",
          },
          { to: "/service-areas/federal-way/twin-lakes", label: "Twin Lakes" },
        ],
      },
      {
        to: "/service-areas/gig-harbor",
        label: "Gig Harbor",
        neighborhoods: [
          { to: "/service-areas/gig-harbor/canterwood", label: "Canterwood" },
          {
            to: "/service-areas/gig-harbor/canterwood/hoa-approved-fencing",
            label: "Canterwood HOA",
          },
        ],
      },
      { to: "/service-areas/lake-tapps", label: "Lake Tapps" },
      { to: "/service-areas/sumner", label: "Sumner" },
      {
        to: "/service-areas/university-place",
        label: "University Place",
        neighborhoods: [
          {
            to: "/service-areas/university-place/devonshire-townhomes",
            label: "Devonshire Townhomes",
          },
        ],
      },
    ],
  },
  {
    region: "East King County",
    blurb: "Maple Valley, Covington, Black Diamond, and the foothills corridor.",
    icon: Mountain,
    accentClass: "from-amber-700/90 to-stone-900/90",
    areas: [
      {
        to: "/service-areas/black-diamond",
        label: "Black Diamond",
        neighborhoods: [
          { to: "/service-areas/black-diamond/lawson-hill-estates", label: "Lawson Hill Estates" },
          {
            to: "/service-areas/black-diamond/ten-trails/hoa-approved-fencing",
            label: "Ten Trails HOA",
          },
        ],
      },
      {
        to: "/service-areas/covington",
        label: "Covington",
        neighborhoods: [
          { to: "/service-areas/covington/covington-woods", label: "Covington Woods" },
          { to: "/service-areas/covington/jenkins-creek", label: "Jenkins Creek" },
          { to: "/service-areas/covington/lake-sawyer", label: "Lake Sawyer" },
          { to: "/service-areas/covington/maple-hills", label: "Maple Hills" },
          { to: "/service-areas/covington/timberlane", label: "Timberlane" },
        ],
      },
      {
        to: "/service-areas/enumclaw",
        label: "Enumclaw",
        neighborhoods: [
          { to: "/service-areas/enumclaw/buckley", label: "Buckley" },
        ],
      },
      {
        to: "/service-areas/maple-valley",
        label: "Maple Valley",
        neighborhoods: [
          { to: "/service-areas/maple-valley/barklay-woods", label: "Barklay Woods" },
          { to: "/service-areas/maple-valley/cherokee-bay-park", label: "Cherokee Bay Park" },
          {
            to: "/service-areas/maple-valley/cherokee-bay-park/hoa-approved-fencing",
            label: "Cherokee Bay Park HOA",
          },
          { to: "/service-areas/maple-valley/daybreak-at-river-ridge", label: "Daybreak at River Ridge" },
          { to: "/service-areas/maple-valley/elk-run", label: "Elk Run" },
          {
            to: "/service-areas/maple-valley/elk-run/hoa-approved-fencing",
            label: "Elk Run HOA",
          },
          {
            to: "/service-areas/maple-valley/highlands-at-cedar-downs",
            label: "Highlands at Cedar Downs",
          },
          {
            to: "/service-areas/maple-valley/highlands-at-cedar-downs/hoa-approved-fencing",
            label: "Highlands at Cedar Downs HOA",
          },
          { to: "/service-areas/maple-valley/lake-park", label: "Lake Park" },
          { to: "/service-areas/maple-valley/maple-woods", label: "Maple Woods" },
          { to: "/service-areas/maple-valley/patricks-faire", label: "Patrick's Faire" },
          { to: "/service-areas/maple-valley/ravensdale", label: "Ravensdale" },
        ],
      },
      { to: "/service-areas/north-bend", label: "North Bend" },
    ],
  },
];

interface ServiceAreasSectionProps {
  /**
   * Render as the standalone /service-areas page rather than a homepage section:
   * promotes the heading to the page h1 and clears the fixed header.
   */
  isPage?: boolean;
  /** Homepage: show city hubs only, without nested neighborhood lists. */
  hubsOnly?: boolean;
}

const ServiceAreasSection = ({ isPage = false, hubsOnly = false }: ServiceAreasSectionProps) => {
  const Heading = isPage ? "h1" : "h2";
  const showNeighborhoods = isPage && !hubsOnly;

  return (
    <section
      className={`container ${isPage ? "pt-24 md:pt-28 pb-12 md:pb-20" : "py-12 md:py-20"}`}
    >
      <div className="text-center mb-10 md:mb-12">
        <Heading className="text-3xl md:text-4xl font-bold mb-4">
          {isPage ? "Fence Installation Across Greater Seattle" : "Service Areas"}
        </Heading>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional fence installation across King County, Pierce County, and East King County.
          Pick your city hub below
          {showNeighborhoods ? ", then jump into a neighborhood or HOA guide" : ""}.
        </p>
      </div>

      {/* Centered 3-column county grid (no empty 4th slot). */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {serviceAreasByRegion.map((region) => {
          const Icon = region.icon;
          const cityCount = region.areas.length;
          const neighborhoodCount = region.areas.reduce(
            (sum, city) => sum + (city.neighborhoods?.length ?? 0),
            0,
          );

          return (
            <Card
              key={region.region}
              className="border-2 border-border/70 hover:border-primary/50 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col h-full"
            >
              <div
                className={`bg-gradient-to-br ${region.accentClass} px-5 py-4 text-white flex items-start gap-3`}
              >
                <div className="rounded-lg bg-white/15 p-2 shrink-0" aria-hidden>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight">{region.region}</h3>
                  <p className="text-xs text-white/85 mt-1">{region.blurb}</p>
                  <p className="text-xs font-medium text-white/95 mt-2">
                    {cityCount} {cityCount === 1 ? "city" : "cities"}
                    {showNeighborhoods && neighborhoodCount > 0
                      ? ` · ${neighborhoodCount} neighborhood & HOA pages`
                      : ""}
                  </p>
                </div>
              </div>

              <CardContent className="p-5 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {region.areas.map((area) => (
                    <li key={area.to} className="border-b border-border/40 last:border-0 pb-3 last:pb-0">
                      <Link
                        href={area.to}
                        className="group inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary transition-colors"
                      >
                        <span>{area.label}</span>
                        <ChevronRight
                          className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary"
                          aria-hidden
                        />
                      </Link>
                      {showNeighborhoods && area.neighborhoods && area.neighborhoods.length > 0 ? (
                        <ul className="mt-2 ml-0.5 pl-3 border-l border-border/60 space-y-1">
                          {area.neighborhoods.map((n) => (
                            <li key={n.to}>
                              <Link
                                href={n.to}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {n.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {!isPage ? (
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/service-areas" className="inline-flex items-center gap-2">
              View all service areas
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      ) : null}

      {isPage ? (
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto rounded-2xl border-2 border-primary/20 bg-muted/40 px-6 py-8 md:px-10 md:py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready for a free fence quote?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Tell us your city and fence style — or call and we will walk the property with you.
            Family-owned crews serving Greater Seattle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="lg" className="px-8" asChild>
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="tel:+12534551885" className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                (253) 455-1885
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ServiceAreasSection;
