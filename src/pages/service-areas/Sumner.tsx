import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Sumner = () => {
  return (
    <ServiceAreaTemplate 
      city="Sumner" 
      state="WA"
      heroTitle="Historic Sumner Fence Installation with Small-Town Service"
      heroDescription="Family-owned fence installation serving Sumner's historic downtown, valley neighborhoods, and Puyallup River properties. From Main Street to rural estates, we deliver quality craftsmanship with hometown values."
      metaTitle="Sumner Fence Installation | Historic Valley Properties"
      metaDescription="Expert fence installation for Sumner, WA. Serving historic downtown, valley properties & river areas. Clay soil specialists. Family-owned with 30+ years experience. Call (253) 455-1885."
      zipCodes={["98390", "98352"]}
      neighborhoods={[
        {
          name: "Historic Downtown Sumner",
          description: "Charming Main Street district with preserved 1890s architecture requiring historically-appropriate fence designs that complement period homes and commercial restoration projects"
        },
        {
          name: "Ryan Road Corridor",
          description: "Established residential area with mature properties and large lots demanding durable perimeter fencing for privacy and pet containment"
        },
        {
          name: "Valley Avenue District",
          description: "Mix of residential and agricultural properties with varied terrain requiring flexible installation approaches from suburban yards to rural acreage"
        },
        {
          name: "Puyallup River Vicinity",
          description: "Properties near river corridors with high water tables and seasonal flooding concerns requiring elevated post footings and moisture-resistant construction"
        },
        {
          name: "Sumner High Plateau",
          description: "Elevated neighborhoods above valley floor with better drainage but exposure to prevailing winds necessitating reinforced post systems"
        },
        {
          name: "East Sumner Rural Area",
          description: "Large-lot properties and small farms requiring extended fence runs, agricultural gates, and animal containment solutions"
        }
      ]}
      landmarks={[
        "Historic Downtown Sumner",
        "Ryan Park",
        "Sumner Depot Museum",
        "Main Street Plaza",
        "Valley Regional Medical Center",
        "Puyallup River Trail"
      ]}
      climateDescription="Sumner sits in the Puyallup River valley, creating unique conditions where cool air settles and morning fog persists longer than surrounding areas. The valley location traps moisture, with humidity often 10-15% higher than nearby hillside communities. Heavy clay soils dominate the area, presenting drainage challenges and requiring specialized post installation techniques to prevent frost heaving and post movement."
      localChallenges={[
        "Heavy clay valley soils with poor drainage requiring modified post setting techniques",
        "High water tables near Puyallup River affecting post depth and foundation stability",
        "Seasonal fog retention increasing wood moisture content and accelerating decay",
        "Historic district requirements for architecturally-compatible fence designs downtown",
        "Agricultural properties needing farm-grade gates and extended perimeter fencing",
        "Valley wind patterns creating uplift pressure on solid fence panels"
      ]}
      localSolutions={[
        "Deep concrete footings (36+ inches) with gravel drainage collars for clay soil stability",
        "Elevated post bases in flood-prone areas using above-grade concrete piers",
        "Premium pressure-treated posts rated for ground contact in high-moisture environments",
        "Historic-style picket and board designs approved for downtown preservation district",
        "Agricultural gate systems with heavy-duty hinges rated for frequent use and livestock pressure",
        "Board-on-board and horizontal designs allowing airflow to reduce wind load while maintaining privacy"
      ]}
    />
  );
};

export default Sumner;
