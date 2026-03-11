import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";

const Seattle = () => {
  
  const seattleAttractions: LocalAttraction[] = [
    {
      name: "Pike Place Market",
      description: "One of the oldest continuously operated public farmers' markets in the U.S., famous for flying fish, local artisans, and fresh produce.",
      url: "https://www.pikeplacemarket.org/"
    },
    {
      name: "Space Needle",
      description: "The iconic 605-foot observation tower offering breathtaking 360-degree views of the downtown skyline, Puget Sound, and the Olympic Mountains.",
      url: "https://www.spaceneedle.com/"
    },
    {
      name: "Discovery Park",
      description: "Seattle's largest public park, spanning 534 acres of tidal beaches, sea cliffs, and forested trails with a historic lighthouse.",
      url: "https://www.seattle.gov/parks/allparks/discovery-park"
    },
    {
      name: "Museum of Pop Culture (MoPOP)",
      description: "A stunning Frank Gehry-designed museum dedicated to contemporary popular culture, music history, and science fiction.",
      url: "https://www.mopop.org/"
    },
    {
      name: "Green Lake Park",
      description: "A beloved urban oasis featuring a 2.8-mile paved path around the lake, popular for jogging, rollerblading, and boating.",
      url: "https://www.seattle.gov/parks/allparks/green-lake-park"
    }
  ];

  const seattleLivingContent = (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        Seattle, the cultural and economic heart of the Pacific Northwest, is a city of distinct neighborhoods, each offering its own unique flavor and lifestyle. Families across the city are served by <a href="https://www.seattleschools.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Seattle Public Schools</a>, the largest K-12 school system in Washington state, alongside prestigious higher education institutions like the <a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">University of Washington</a>. The city is renowned for its world-class <a href="https://www.spl.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Seattle Public Library</a> system, highlighted by the architectural marvel of the Central Library downtown.
      </p>
      <p>
        Life in the Emerald City is characterized by a deep integration of urban amenities and stunning natural beauty. Residents enjoy an incredible <a href="https://www.seattle.gov/parks" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Parks and Recreation system</a> that provides access to everything from the sandy shores of <a href="https://www.seattle.gov/parks/allparks/alki-beach-park" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Alki Beach</a> to the dense canopy of <a href="https://www.seattle.gov/parks/allparks/seward-park" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-2 underline-offset-4">Seward Park</a>. The culinary scene is incredibly diverse, with neighborhoods like Ballard and Capitol Hill boasting some of the region's best dining and nightlife. Despite its rapid growth driven by major tech employers, Seattle retains its pioneering spirit, offering a vibrant arts scene, robust public transit, and a lifestyle that seamlessly blends city living with outdoor adventure.
      </p>
    </div>
  );

  return (
    <>
      <ServiceAreaTemplate 
      city="Seattle" 
      state="WA"
      heroTitle="Urban Fence Solutions for Seattle's Diverse Neighborhoods"
      heroDescription="From Capitol Hill townhomes to West Seattle backyards, we deliver city-smart fencing that maximizes privacy in tight urban spaces. Historic district-compliant designs and modern installations for the Emerald City."
      metaTitle="Seattle Fence Installation | Historic District Compliant"
      metaDescription="Urban fence solutions for Seattle's diverse neighborhoods. Capitol Hill to West Seattle. City-smart designs maximizing privacy. Historic district-compliant installations. Call (253) 455-1885."
      zipCodes={["98101", "98102", "98103", "98104", "98105", "98106", "98107", "98108", "98109", "98112", "98115", "98116", "98117", "98118", "98119", "98121", "98122", "98125", "98126", "98133", "98134", "98136", "98144", "98177", "98199"]}
      neighborhoods={[
        {
          name: "Capitol Hill",
          description: "Historic urban neighborhood with compact lots requiring creative privacy solutions and designs compliant with landmark district regulations"
        },
        {
          name: "Ballard",
          description: "Maritime district with Scandinavian heritage demanding salt-resistant installations and styles that complement historic craftsman architecture"
        },
        {
          name: "Fremont",
          description: "Eclectic arts district with unique properties needing custom designs that match the neighborhood's creative character"
        },
        {
          name: "Queen Anne",
          description: "Historic hilltop neighborhood with steep slopes requiring terraced installations and preservation-approved designs for landmark homes"
        },
        {
          name: "Wallingford",
          description: "Family-friendly residential area with bungalows needing traditional fence styles that maintain neighborhood charm and period character"
        },
        {
          name: "Green Lake",
          description: "Active lakeside community with recreational properties requiring durable fencing that handles high foot traffic and pet activity"
        },
        {
          name: "Magnolia",
          description: "Waterfront peninsula with Puget Sound exposure demanding marine-grade materials and wind-resistant installations"
        },
        {
          name: "West Seattle",
          description: "Diverse hillside neighborhoods with beach access requiring slope installations and salt-air resistant materials for waterfront proximity"
        },
        {
          name: "Georgetown",
          description: "Industrial-adjacent neighborhood with urban properties needing sound-dampening fence designs and secure boundary installations"
        },
        {
          name: "Beacon Hill",
          description: "Multicultural hillside community with varied housing types requiring flexible solutions from small city lots to larger properties"
        },
        {
          name: "Columbia City",
          description: "Revitalizing neighborhood with historic homes needing period-appropriate fence designs that complement ongoing restoration efforts"
        },
        {
          name: "Laurelhurst",
          description: "Waterfront luxury neighborhood on Lake Washington demanding premium materials and designs worthy of multi-million dollar properties"
        },
        {
          name: "Madison Park",
          description: "Lakefront community with established estates requiring high-end installations and marine-resistant hardware for waterfront exposure"
        },
        {
          name: "Ravenna",
          description: "Tree-lined residential area near university district needing installations that preserve mature trees while providing student-area security"
        },
        {
          name: "University District",
          description: "High-density student area with rental properties requiring durable, low-maintenance installations for investment properties"
        }
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
        "Premium cedar, hogwire, and hybrid aluminum systems for moisture resistance"
      ]}
    />
      <AboutTheArea 
        cityName="Seattle"
        attractions={seattleAttractions}
        localLivingContent={seattleLivingContent}
      />
    </>
  );
};

export default Seattle;
