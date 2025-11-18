import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Issaquah = () => {
  return (
    <ServiceAreaTemplate 
      city="Issaquah" 
      state="WA"
      heroTitle="Foothills Fence Experts Serving Issaquah's Mountain Communities"
      heroDescription="Custom fencing for Issaquah Highlands and Tiger Mountain properties. Wildlife-smart designs and slope installations that work with your forested surroundings while keeping your family and pets secure."
      metaTitle="Issaquah Mountain Fences | Wildlife-Smart | MyFence"
      metaDescription="Foothills fence experts for Issaquah Highlands & Tiger Mountain. Wildlife-smart designs & slope installations for forested properties. Custom solutions for mountain living. Call (253) 455-1885."
      zipCodes={["98027", "98029"]}
      neighborhoods={[
        {
          name: "Issaquah Highlands",
          description: "Master-planned community with HOA requirements demanding approved designs and premium materials for upscale properties"
        },
        {
          name: "Olde Town Issaquah",
          description: "Historic downtown area with traditional homes requiring classic fence styles that preserve small-town character"
        },
        {
          name: "Talus",
          description: "Luxury hillside development with steep slopes demanding expert terrain-adaptive installations and reinforced anchoring"
        },
        {
          name: "Providence Point",
          description: "Active adult community with specific design guidelines requiring low-maintenance solutions and committee-approved installations"
        },
        {
          name: "Grand Ridge",
          description: "Family-focused neighborhood with larger lots needing secure boundary fencing for children, pets, and outdoor living spaces"
        },
        {
          name: "Newcastle",
          description: "Wooded hillside properties with challenging terrain requiring specialized slope installations and drainage integration"
        },
        {
          name: "Montreux",
          description: "Exclusive golf course community with premium properties demanding high-end custom designs and luxury materials"
        }
      ]}
      landmarks={[
        "Cougar Mountain Regional Wildland Park",
        "Squak Mountain State Park",
        "Lake Sammamish State Park",
        "Gilman Village",
        "Issaquah Salmon Hatchery",
        "Tiger Mountain State Forest",
        "Issaquah Alps"
      ]}
      climateDescription="Nestled in the Issaquah Alps, this city experiences cooler temperatures and higher precipitation than nearby lowland areas. The dramatic topography and proximity to mountains create microclimates that significantly impact fence durability and installation methods."
      localChallenges={[
        "Mountain terrain with steep slopes requiring expert installation",
        "Higher rainfall totals accelerating wood weathering",
        "Upscale communities with strict aesthetic standards",
        "Wildlife corridors requiring secure, tall fencing options",
        "Premium property values demanding exceptional craftsmanship"
      ]}
      localSolutions={[
        "Terrain-adaptive installations for hillside properties",
        "Premium materials suited to wet mountain climate",
        "Custom designs meeting community architectural guidelines",
        "8-foot privacy fencing for wildlife security",
        "High-end finishes and clear cedar options for luxury homes"
      ]}
    />
  );
};

export default Issaquah;
