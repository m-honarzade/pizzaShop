const Pizza = ({ pizzaData }) => {
  return (
    <li
      className={`card flex flex-row gap-x-6 ${
        pizzaData.soldOut ? "text-[#888] grayscale" : ""
      }`}
    >
      <img
        src={pizzaData.photoName}
        alt="pizza photo"
        className={`w-[100px] {
        pizzaData.soldOut ? "" : ""
      }`}
      />
      <div className="text-left mt-6  flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{pizzaData.name}</h3>
          <p className="text-base ">{pizzaData.ingredients}</p>
        </div>
        <div className="mb-6 ">
          <p className="font-semibold">
            {pizzaData.soldOut ? "soldOut" : pizzaData.price}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Pizza;
