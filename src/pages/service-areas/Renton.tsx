import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Renton = () => {
  return (
    <ServiceAreaTemplate 
      city="Renton" 
      state="WA"
      zipCodes={["98055", "98056", "98057", "98058", "98059"]}
    />
  );
};

export default Renton;
