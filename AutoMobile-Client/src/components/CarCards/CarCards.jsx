import React from "react";

const CarCards = ({ item }) => {
  const { brand, model, year, price, mileage, image } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl m-10">
        <figure>
          <img src={image} alt={brand} />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">
            {brand}
            <span>{model}</span>
            <span>{year}</span>
          </h2>
          <p className="text-left">Mileage:{mileage}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
