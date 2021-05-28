import React, { useEffect, useState } from "react";
import Cars from "./Cars";
import { carData } from "../../api/CarData/CarData";
import "./styles.scss";

const CarsContainer = ({ state }) => {
  const [carDataFilter, setCarDataFilter] = useState(carData);
  const { activeFilter, search } = state;

  useEffect(() => {
    setCarDataFilter(
      carData.filter((item) =>
        Object.entries(activeFilter).reduce(
          (acc, [key, value]) => acc && item[key] === value,
          true
        )
      )
    );
  }, [activeFilter, state]);

  useEffect(() => {
    setCarDataFilter(
      carData.reduce((acc, item) => {
        if (
          item.brand.toLowerCase().includes(search) ||
          item.model.toLowerCase().includes(search)
        )
          return [...acc, item];
        return acc;
      }, [])
    );
  }, [search, state.search]);

  return <Cars cars={carDataFilter} />;
};

export default CarsContainer;
