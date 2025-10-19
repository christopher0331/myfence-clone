import ServiceAreaTemplate from "./ServiceAreaTemplate";

const FederalWay = () => {
  console.log('[FederalWay] Component rendering');
  
  return (
    <ServiceAreaTemplate 
      city="Federal Way" 
      state="WA"
      zipCodes={["98003", "98023", "98063", "98093"]}
      neighborhoods={[
        "Dash Point",
        "Lakehaven",
        "Twin Lakes",
        "Steel Lake",
        "Adelaide",
        "Poverty Bay"
      ]}
      landmarks={[
        "Wild Waves Theme Park",
        "Dash Point State Park",
        "The Commons at Federal Way",
        "Celebration Park",
        "Steel Lake Park",
        "Dumas Bay Centre"
      ]}
      climateDescription="Federal Way experiences the Pacific Northwest's signature mild, wet winters and dry summers. The proximity to Puget Sound moderates temperatures but brings increased moisture, which significantly impacts fence longevity and maintenance requirements."
      localChallenges={[
        "High annual rainfall (38+ inches) accelerating wood rot",
        "Marine air causing faster weathering of untreated materials",
        "Wind exposure near Dash Point requiring stronger installations",
        "Clay-heavy soil in many neighborhoods affecting post stability"
      ]}
      localSolutions={[
        "Premium pressure-treated posts for moisture resistance",
        "Concrete post anchoring in high-wind coastal areas",
        "Regular maintenance schedules adapted to wet climate",
        "Specialized staining with UV and moisture protection"
      ]}
    />
  );
};

export default FederalWay;
