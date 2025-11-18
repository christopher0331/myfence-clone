import ServiceAreaTemplate from "./ServiceAreaTemplate";

const FederalWay = () => {
  return (
    <ServiceAreaTemplate 
      city="Federal Way" 
      state="WA"
      heroTitle="Coastal-Tough Fence Installation for Federal Way Homes"
      heroDescription="Specialized fencing built to withstand Federal Way's marine air and heavy rainfall. Serving Dash Point waterfront to Steel Lake neighborhoods with moisture-resistant solutions that last."
      metaTitle="Federal Way Fence Installation | Marine-Resistant"
      metaDescription="Coastal-tough fence installation for Federal Way. Moisture-resistant solutions for marine air & heavy rainfall. Serving Dash Point waterfront to Steel Lake. Expert craftsmanship. Call (253) 455-1885."
      zipCodes={["98003", "98023", "98063", "98093"]}
      neighborhoods={[
        {
          name: "Dash Point",
          description: "Coastal waterfront community with Puget Sound exposure requiring marine-grade materials and corrosion-resistant installations"
        },
        {
          name: "Twin Lakes",
          description: "Lakeside neighborhood with high moisture levels demanding enhanced weatherproofing and rot-resistant fence materials"
        },
        {
          name: "Steel Lake",
          description: "Established residential area with mature properties needing fence updates and replacements that match neighborhood character"
        },
        {
          name: "Lakehaven",
          description: "Family-oriented community with active yards requiring durable privacy fencing for children and pets"
        },
        {
          name: "Camelot",
          description: "Mid-century neighborhood with varied property conditions needing flexible installation approaches and repair options"
        },
        {
          name: "Adelaide",
          description: "Diverse residential area with mix of lot sizes requiring scalable fence solutions from compact to expansive properties"
        }
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
