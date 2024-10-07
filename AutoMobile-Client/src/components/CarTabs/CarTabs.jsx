import CarCards from "../carCards/carCards";

const CarTabs = ({items}) => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <CarCards key={item.id} item={item}></CarCards>
        ))}
      </div>
    </>
  );
};

export default CarTabs;
