import Pizza from "../components/Pizza";

const Menu = (props) => {
  return (
    <>
      <div className="mb-12 border-b-2 border-t-2 border-black">
        <p className="px-4 py-3 text-4xl  ">Our Menu</p>
      </div>
      {props.pizzaNum > 0 ? (
        <>
          <p className="mb-10 text-lg text-center">
            Authenticate Italian Cuisine. 6 creative dishes to choose from. all
            from
            <br />
            our stone oven. all organic, all delicious.
          </p>
          <div className="max-w-4xl flex ">
            <ul className="grid grid-cols-2 gap-y-16 ">
              {props.pizzaData.map((item) => (
                <Pizza key={item.name} pizzaData={item} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}
    </>
  );
};

export default Menu;
