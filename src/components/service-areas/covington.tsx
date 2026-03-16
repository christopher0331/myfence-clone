import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";

const Covington = () => {
  
  const covingtonAttractions: LocalAttraction[] = [
    {
      name: "Covington Community Park",
      description: "A premier local destination featuring an amphitheater, sports courts, expansive playgrounds, and scenic walking trails.",
      url: "https://www.covingtonwa.gov/city_departments/parks_and_recreation/covington_community_park.php"
    },
    {
      name: "Jenkins Creek Park",
      description: "A tranquil natural space offering beautiful forested trails and peaceful spots for observing local wildlife along the creek.",
      url: "https://www.covingtonwa.gov/city_departments/parks_and_recreation/jenkins_creek_park.php"
    },
    {
      name: "Covington Aquatic Center",
      description: "A state-of-the-art facility providing year-round swimming lessons, water aerobics, and family swim sessions.",
      url: "https://www.covingtonwa.gov/city_departments/parks_and_recreation/aquatic_center.php"
    },
    {
      name: "Soaring Eagle Regional Park",
      description: "A massive 600-acre natural area nearby, perfect for horseback riding, mountain biking, and exploring diverse ecosystems.",
      url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/soaring-eagle"
    },
    {
      name: "Covington Farmers Market",
      description: "A bustling summer gathering place connecting residents with local farmers, artisans, and fresh Pacific Northwest produce.",
      url: "https://www.covingtonfarmersmarket.org/"
    }
  ];

  const covingtonLivingContent = (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        Covington is a rapidly expanding city that has successfully transitioned from a rural crossroad into a thriving suburban center. The community places a strong emphasis on family and education, served by the highly regarded <a href="https://www.kent.k12.wa.us/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Kent School District</a>. The city's dedication to quality of life is evident in the impressive <a href="https://www.covingtonwa.gov/city_departments/parks_and_recreation/covington_community_park.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Covington Community Park</a>, a central gathering place that hosts seasonal events, outdoor concerts, and provides exceptional recreational facilities for residents of all ages.
      </p>
      <p>
        Despite its substantial commercial growth—anchored by a <a href="https://covingtonchamber.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">bustling retail core</a> that draws shoppers from surrounding towns—Covington retains its connection to the beautiful Pacific Northwest landscape. Residents easily access the extensive <a href="https://www.kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">King County regional trail network</a> for walking and cycling. The local <a href="https://www.covingtonwa.gov/city_departments/parks_and_recreation/aquatic_center.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Aquatic Center</a> and organized sports leagues foster a tight-knit community feel, making Covington an ideal place for those seeking modern amenities within a relaxed, suburban environment.
      </p>
    </div>
  );

  return (
    <>
      <ServiceAreaTemplate 
      city="Covington" 
      state="WA"
      heroTitle="Hillside Fence Installation Experts in Covington"
      heroDescription="Tackling Covington's challenging slopes and clay-rich soil with reinforced fence systems. From Jenkins Creek to Maple Hills, we engineer installations that handle your terrain and heavy Pacific Northwest rainfall."
      metaTitle="Covington Hillside Fences | Slope Experts | MyFence"
      metaDescription="Hillside fence installation experts in Covington WA. Reinforced systems for challenging slopes & clay soil. Jenkins Creek to Maple Hills. Engineered for terrain & rainfall. Call (253) 455-1885."
      zipCodes={["98042"]}
      neighborhoods={[
        {
          name: "Jenkins Creek",
          description: "Newer family-friendly development with modern homes requiring privacy fencing for growing families and active yards"
        },
        {
          name: "Maple Hills",
          description: "Established hillside neighborhood with varied elevations demanding specialized slope installation techniques and drainage solutions"
        },
        {
          name: "Rock Creek",
          description: "Wooded community backing onto natural areas needing wildlife-deterrent fencing and forest-edge installation expertise"
        },
        {
          name: "Lake Sawyer",
          description: "Lakeside properties requiring moisture-resistant materials and installations that preserve water views and access"
        },
        {
          name: "Covington Woods",
          description: "Mature tree-lined streets where installations must work around established root systems while maintaining property boundaries. Click to learn more →",
          link: "/service-areas/covington/covington-woods"
        },
        {
          name: "Shadow Lake",
          description: "Residential area with mix of property sizes needing flexible fence designs from compact yards to larger lots"
        },
        {
          name: "Timberlane",
          description: "Family-friendly neighborhood with well-maintained properties requiring durable fencing solutions for active households. Click to learn more →",
          link: "/service-areas/covington/timberlane"
        }
      ]}
      landmarks={[
        "Jenkins Creek Park",
        "Covington Community Park",
        "Soaring Eagle Regional Park",
        "Lake Sawyer Regional Park",
        "Covington Farmers Market",
        "Spring Glen Park"
      ]}
      climateDescription="Covington sits in the southern foothills of the Cascade Mountains, experiencing moderate temperatures with significant rainfall throughout the year. The area's elevation and proximity to forested areas create unique challenges for outdoor structures."
      localChallenges={[
        "Heavy seasonal rainfall requiring superior drainage solutions",
        "Sloped lots and hillside properties needing specialized installation",
        "Wildlife activity from adjacent forested areas",
        "Clay-rich soil conditions affecting post stability",
        "Growing community with mix of new construction and established homes"
      ]}
      localSolutions={[
        "Custom slope installations maintaining aesthetic alignment",
        "Enhanced drainage systems preventing water damage",
        "Reinforced post anchoring for challenging terrain",
        "Wildlife-deterrent fence heights and designs",
        "Flexible solutions for diverse property types and ages"
      ]}
    />
      <AboutTheArea 
        cityName="Covington"
        attractions={covingtonAttractions}
        localLivingContent={covingtonLivingContent}
      />
    </>
  );
};

export default Covington;
