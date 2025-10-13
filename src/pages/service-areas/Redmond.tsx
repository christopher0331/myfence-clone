import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Redmond = () => {
  return (
    <ServiceAreaTemplate 
      city="Redmond" 
      state="WA"
      zipCodes={["98052", "98053", "98073"]}
    />
  );
};

export default Redmond;
