import ServiceAreaTemplate from "./ServiceAreaTemplate";

const Seattle = () => {
  return (
    <ServiceAreaTemplate 
      city="Seattle" 
      state="WA"
      zipCodes={["98101", "98102", "98103", "98104", "98105", "98106", "98107", "98108", "98109", "98112", "98115", "98116", "98117", "98118", "98119", "98121", "98122", "98125", "98126", "98133", "98134", "98136", "98144", "98177", "98199"]}
    />
  );
};

export default Seattle;
