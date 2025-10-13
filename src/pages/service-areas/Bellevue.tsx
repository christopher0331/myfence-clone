import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Bellevue = () => {
  return (
    <ServiceAreaTemplate 
      city="Bellevue" 
      state="WA"
      zipCodes={["98004", "98005", "98006", "98007", "98008", "98009"]}
      neighborhoods={[
        "Downtown Bellevue",
        "Bridle Trails",
        "Somerset",
        "Crossroads",
        "Factoria",
        "Eastgate",
        "West Bellevue",
        "Wilburton",
        "Newport Hills"
      ]}
      landmarks={[
        "Bellevue Square",
        "Downtown Park",
        "Bellevue Botanical Garden",
        "Meydenbauer Bay Park",
        "Crossroads Park",
        "Kelsey Creek Park",
        "Bellevue Collection"
      ]}
      climateDescription="Bellevue's unique position between Lake Washington and Lake Sammamish creates a microclimate with moderate temperatures but high moisture levels year-round. This lakeside environment, combined with the city's mature landscaping and upscale developments, creates specific considerations for fence installation and longevity."
      localChallenges={[
        "High aesthetic standards in upscale neighborhoods requiring premium finishes",
        "Mature trees and established landscaping requiring careful installation planning",
        "Strict HOA requirements in many residential communities",
        "Waterfront properties needing marine-grade materials and corrosion resistance",
        "City code compliance for historic neighborhoods and tree preservation areas"
      ]}
      localSolutions={[
        "Premium cedar and composite materials matching high-end home aesthetics",
        "Custom fence designs coordinated with existing architectural styles",
        "Precision installation techniques protecting mature root systems and landscaping",
        "HOA-compliant designs with architectural review board approval assistance",
        "Marine-grade hardware and coatings for lakefront and high-moisture locations"
      ]}
    />
  );
};

export default Bellevue;
