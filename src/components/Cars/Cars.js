import React from "react";
import Car from "./Car";
import "./styles.scss";

const Cars = ({ cars }) => (
  <div className={"cars-container"}>
    {cars.map((item) => (
      <div key={item.id}>
        <Car
          image={item.image}
          brand={item.brand}
          model={item.model}
          year={item.year}
          fuel={item.fuel}
          bodyType={item.bodyType}
          price={item.price}
        />
      </div>
    ))}
  </div>
);

export default Cars;
