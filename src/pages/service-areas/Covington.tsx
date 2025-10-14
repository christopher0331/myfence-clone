import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Covington = () => {
  return (
    <ServiceAreaTemplate 
      city="Covington" 
      state="WA"
      zipCodes={["98042"]}
      neighborhoods={[
        "Jenkins Creek",
        "Maple Hills",
        "Rock Creek",
        "Covington Woods",
        "Canyon Park",
        "Retreat at Covington"
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
  );
};

export default Covington;
