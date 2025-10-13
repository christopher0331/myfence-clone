import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Redmond = () => {
  return (
    <ServiceAreaTemplate 
      city="Redmond" 
      state="WA"
      zipCodes={["98052", "98053", "98073"]}
      neighborhoods={[
        "Downtown Redmond",
        "Education Hill",
        "Overlake",
        "Grass Lawn",
        "Willows/Rose Hill",
        "Idylwood",
        "Bridle Trails"
      ]}
      landmarks={[
        "Microsoft Campus",
        "Marymoor Park",
        "Redmond Town Center",
        "Sammamish River Trail",
        "Bridle Trails State Park",
        "Anderson Park",
        "Idylwood Park"
      ]}
      climateDescription="Redmond enjoys a temperate climate typical of the Eastside, with drier summers than Seattle proper but still significant winter rainfall. The city's many parks and green spaces mean properties often border natural areas, and the tech-hub community values both aesthetics and functionality."
      localChallenges={[
        "Proximity to forested areas attracting deer and wildlife",
        "HOA requirements in newer developments requiring specific styles",
        "Tech-savvy homeowners expecting modern, low-maintenance solutions",
        "Property values demanding premium materials and craftsmanship"
      ]}
      localSolutions={[
        "Contemporary horizontal fence designs popular with tech professionals",
        "HOA-compliant custom designs with architectural appeal",
        "Low-maintenance composite and vinyl options",
        "Wildlife-deterrent height options without sacrificing aesthetics"
      ]}
    />
  );
};

export default Redmond;
