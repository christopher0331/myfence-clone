import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";

const Enumclaw = () => {
  
  const enumclawAttractions: LocalAttraction[] = [
    {
      name: "Enumclaw Expo Center",
      description: "A major regional hub hosting the annual King County Fair, rodeos, trade shows, and community events throughout the year.",
      url: "https://www.enumclawexpo.com/"
    },
    {
      name: "Mud Mountain Dam",
      description: "A remarkable engineering feat offering beautiful recreation areas, hiking trails, and picnic spots along the White River.",
      url: "https://www.nws.usace.army.mil/Missions/Civil-Works/Recreation/Mud-Mountain-Dam/"
    },
    {
      name: "Nolte State Park",
      description: "A heavily forested 117-acre park featuring a serene trail looping around the picturesque Deep Lake, perfect for family outings.",
      url: "https://parks.wa.gov/find-parks/state-parks/nolte-state-park"
    },
    {
      name: "Pinnacle Peak Park",
      description: "A steep, challenging hike affectionately known as 'Mount Lee,' rewarding climbers with incredible views of Mount Rainier and the valley.",
      url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/pinnacle-peak"
    },
    {
      name: "Downtown Historic District",
      description: "A charming, walkable downtown core filled with local boutiques, historic architecture, and unique Pacific Northwest dining options.",
      url: "https://www.discoverenumclaw.com/"
    }
  ];

  const enumclawLivingContent = (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        Nestled at the foothills of the Cascade Mountains, Enumclaw serves as the "Gateway to Mount Rainier" and offers a rugged, authentic Pacific Northwest lifestyle. The city strikes a unique balance between a rich agricultural heritage and modern suburban growth. Families are served by the <a href="https://www.enumclaw.wednet.edu/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Enumclaw School District</a>, which is deeply integrated into the community. The <a href="https://www.discoverenumclaw.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">historic downtown area</a> remains the vibrant heart of the city, where locals gather for seasonal parades, block parties, and a highly active summer farmers market.
      </p>
      <p>
        Living in Enumclaw means having immediate access to some of the state's best outdoor recreation. Residents are just a short drive from the <a href="https://www.nps.gov/mora/index.htm" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Mount Rainier National Park</a> corridor, offering world-class hiking, skiing, and camping. Closer to home, the <a href="https://www.cityofenumclaw.net/229/Parks-Recreation-Cultural-Services" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">local parks system</a> and numerous equestrian trails highlight the area's spacious, rural character. Despite its proximity to major job centers in King and Pierce counties, Enumclaw fiercely protects its small-town atmosphere, making it a perfect haven for those seeking space, nature, and community connection.
      </p>
    </div>
  );

  return (
    <>
      <ServiceAreaTemplate 
      city="Enumclaw" 
      state="WA"
      heroTitle="Mountain-Ready Fencing at the Gateway to Mount Rainier"
      heroDescription="Heavy-duty fence installations engineered for Enumclaw's elevation, snow loads, and mountain winds. Protecting rural properties and managing wildlife while preserving your stunning Rainier views."
      metaTitle="Enumclaw Mountain Fences | Snow Load Rated"
      metaDescription="Mountain-ready fence installation for Enumclaw. Heavy-duty systems engineered for elevation, snow loads & mountain winds. Wildlife management solutions. Rural property experts. Call (253) 455-1885."
      zipCodes={["98022"]}
      neighborhoods={[
        {
          name: "Downtown Enumclaw",
          description: "Historic small-town center with traditional properties requiring classic fence designs that complement Main Street character"
        },
        {
          name: "Enumclaw Plateau",
          description: "Elevated residential area with mountain exposure demanding heavy-duty installations engineered for wind and snow loads"
        },
        {
          name: "Black Diamond",
          description: "Rural mining town heritage with larger lots needing extensive fencing solutions and cost-effective approaches for acreage"
        },
        {
          name: "Green Valley",
          description: "Agricultural and residential mix requiring farm-style fencing, livestock containment, and property line demarcation"
        },
        {
          name: "Mutual",
          description: "Country living community with forested boundaries needing wildlife-resistant fencing and secure installations for rural properties"
        },
        {
          name: "Franklin",
          description: "Mountain gateway neighborhood with elevated terrain demanding specialized post anchoring for challenging soil and slope conditions"
        }
      ]}
      landmarks={[
        "Mount Rainier National Park (nearby)",
        "Enumclaw Expo Center",
        "White River",
        "Federation Forest State Park",
        "Mud Mountain Dam",
        "Nolte State Park"
      ]}
      climateDescription="Enumclaw sits at the gateway to Mount Rainier, experiencing more dramatic weather patterns than lowland areas. The higher elevation brings cooler temperatures, increased precipitation including winter snow, and stunning mountain views that property owners want to preserve."
      localChallenges={[
        "Higher elevation weather with significant snow accumulation",
        "Mountain winds requiring reinforced fence installations",
        "Rural properties with larger acreage needing extensive fencing",
        "Wildlife activity from nearby forests and Mount Rainier corridor",
        "Temperature extremes causing wood expansion and contraction"
      ]}
      localSolutions={[
        "Heavy-duty installations designed for mountain weather",
        "Snow-load considerations in fence design and materials",
        "Efficient solutions for large rural properties",
        "Tall, secure fencing options for wildlife management",
        "Climate-appropriate materials resistant to freeze-thaw cycles"
      ]}
    />
      <AboutTheArea 
        cityName="Enumclaw"
        attractions={enumclawAttractions}
        localLivingContent={enumclawLivingContent}
      />
    </>
  );
};

export default Enumclaw;
