import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Sammamish = () => {
  return (
    <ServiceAreaTemplate 
      city="Sammamish" 
      state="WA"
      zipCodes={["98074", "98075"]}
    />
  );
};

export default Sammamish;
