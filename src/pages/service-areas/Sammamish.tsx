import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Sammamish = () => {
  return (
    <ServiceAreaTemplate 
      city="Sammamish" 
      state="WA"
      heroTitle="Premium Fencing for Sammamish's Family-Focused Communities"
      heroDescription="Serving Sammamish's top-rated school neighborhoods with safe, durable fencing solutions. From Pine Lake to Sahalee, we build backyard boundaries that let kids and pets play while maintaining your property's natural beauty."
      zipCodes={["98074", "98075"]}
      neighborhoods={[
        "Pine Lake",
        "Beaver Lake",
        "Sahalee",
        "Trossachs",
        "Klahanie",
        "East Sammamish",
        "Inglewood"
      ]}
      landmarks={[
        "Lake Sammamish State Park",
        "Beaver Lake Park",
        "Pine Lake Park",
        "Sammamish Commons",
        "Big Rock Park",
        "Soaring Eagle Regional Park",
        "East Sammamish Trail"
      ]}
      climateDescription="Sammamish's location on the Eastside plateau provides a slightly drier climate than Seattle, though still plenty of rain. The city's suburban character features larger properties, many backing onto forested areas or greenbelts, with homeowners prioritizing privacy and property boundaries."
      localChallenges={[
        "Large properties requiring extensive fencing solutions",
        "Forested boundaries needing specialized installation techniques",
        "HOA guidelines in planned communities like Klahanie",
        "Wildlife presence requiring secure, tall fencing options",
        "Premium property values demanding high-end materials"
      ]}
      localSolutions={[
        "Clear cedar and premium wood options for upscale properties",
        "Extended fence runs with efficient installation for large lots",
        "Custom designs meeting community architectural standards",
        "Forest-edge installations respecting natural boundaries",
        "Decorative yet functional solutions for luxury homes"
      ]}
    />
  );
};

export default Sammamish;
