import ServiceAreaTemplate from "./ServiceAreaTemplate";

const FederalWay = () => {
  return (
    <ServiceAreaTemplate 
      city="Federal Way" 
      state="WA"
      zipCodes={["98003", "98023", "98063", "98093"]}
    />
  );
};

export default FederalWay;
