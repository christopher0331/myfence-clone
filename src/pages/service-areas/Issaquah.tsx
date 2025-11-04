import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Issaquah = () => {
  return (
    <ServiceAreaTemplate 
      city="Issaquah" 
      state="WA"
      heroTitle="Foothills Fence Experts Serving Issaquah's Mountain Communities"
      heroDescription="Custom fencing for Issaquah Highlands and Tiger Mountain properties. Wildlife-smart designs and slope installations that work with your forested surroundings while keeping your family and pets secure."
      zipCodes={["98027", "98029"]}
      neighborhoods={[
        "Issaquah Highlands",
        "Olde Town Issaquah",
        "Talus",
        "Providence Point",
        "Grand Ridge",
        "Newcastle",
        "Montreux"
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
