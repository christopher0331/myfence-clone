import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Seattle = () => {
  return (
    <ServiceAreaTemplate 
      city="Seattle" 
      state="WA"
      zipCodes={["98101", "98102", "98103", "98104", "98105", "98106", "98107", "98108", "98109", "98112", "98115", "98116", "98117", "98118", "98119", "98121", "98122", "98125", "98126", "98133", "98134", "98136", "98144", "98177", "98199"]}
      neighborhoods={[
        "Capitol Hill",
        "Ballard",
        "Fremont",
        "Queen Anne",
        "Wallingford",
        "Green Lake",
        "Magnolia",
        "West Seattle",
        "Georgetown",
        "Beacon Hill",
        "Columbia City",
        "Laurelhurst",
        "Madison Park",
        "Ravenna",
        "University District"
      ]}
      landmarks={[
        "Pike Place Market",
        "Space Needle",
        "Gas Works Park",
        "Discovery Park",
        "Alki Beach",
        "Green Lake Park",
        "University of Washington",
        "Seattle Center",
        "Golden Gardens Park",
        "Seward Park"
      ]}
      climateDescription="Seattle's maritime climate brings year-round moisture with mild temperatures, creating unique challenges for outdoor structures. The city's varied topography—from waterfront properties to hillside homes—means fence installations must account for elevation changes, salt air exposure, and the famous Seattle drizzle."
      localChallenges={[
        "Constant moisture exposure requiring rot-resistant materials",
        "Salt air corrosion in waterfront neighborhoods like Alki and Magnolia",
        "Historic district regulations in areas like Capitol Hill and Queen Anne",
        "Steep hillside properties requiring custom terracing solutions",
        "Urban density requiring noise reduction and privacy features"
      ]}
      localSolutions={[
        "Marine-grade hardware for waterfront installations",
        "Historic-appropriate fence designs meeting preservation guidelines",
        "Engineered terracing for hillside properties",
        "Sound-dampening fence configurations for urban settings",
        "Premium cedar and composite materials for moisture resistance"
      ]}
    />
  );
};

export default Seattle;
