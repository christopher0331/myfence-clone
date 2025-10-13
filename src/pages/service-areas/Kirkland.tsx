import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Kirkland = () => {
  return (
    <ServiceAreaTemplate 
      city="Kirkland" 
      state="WA"
      zipCodes={["98033", "98034", "98083"]}
    />
  );
};

export default Kirkland;
