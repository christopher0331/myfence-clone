import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Renton = () => {
  return (
    <ServiceAreaTemplate 
      city="Renton" 
      state="WA"
      zipCodes={["98055", "98056", "98057", "98058", "98059"]}
      neighborhoods={[
        "Renton Highlands",
        "Kennydale",
        "Fairwood",
        "Cascade",
        "East Renton Plateau",
        "Sunset",
        "Downtown Renton"
      ]}
      landmarks={[
        "Gene Coulon Memorial Beach Park",
        "Cedar River Trail",
        "The Landing",
        "Cougar Mountain Regional Wildland Park",
        "Philip Arnold Park",
        "Liberty Park",
        "Renton History Museum"
      ]}
      climateDescription="Renton's valley location creates a unique microclimate with slightly warmer summers and cooler winters than surrounding areas. Proximity to Lake Washington and the Cedar River means increased moisture in low-lying areas, while hillside properties face different drainage considerations."
      localChallenges={[
        "Varied elevation across neighborhoods requiring different approaches",
        "Moisture retention in valley areas accelerating wood weathering",
        "Mix of older and newer properties with different needs",
        "Boeing workforce seeking quick turnaround times",
        "Proximity to parks and trails requiring secure boundaries"
      ]}
      localSolutions={[
        "Elevation-appropriate drainage systems for hillside installs",
        "Fast, professional installation respecting busy schedules",
        "Renovation-friendly solutions for older properties",
        "Enhanced moisture protection for low-lying areas",
        "Pet-friendly secure fencing for active families"
      ]}
    />
  );
};

export default Renton;
