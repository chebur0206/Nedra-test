import React from "react";
import { BasicSelect } from "@consta/uikit/BasicSelect";
import {
  bodyTypeData,
  brandData,
  fuelData,
  modelData,
  priceData,
  yearData,
} from "../../api/lists";
import "./styles.scss";
import { Text } from "@consta/uikit/Text";
import ResetButton from "../ResetButton";

const Filters = ({ state }) => {
  const getItemLabel = (option) => option.label;
  console.log(state.activeFilter);
  const handleChangeBrand = (e) => {
    state.setBrand(e);
    state.setActiveFilter({ ...state.activeFilter, brand: e.value });
  };
  const handleChangeModel = (e) => {
    state.setModel(e);
    state.setActiveFilter({ ...state.activeFilter, model: e.value });
  };
  const handleChangeYear = (e) => {
    state.setYear(e);
    state.setActiveFilter({ ...state.activeFilter, year: e.value });
  };
  const handleChangeFuel = (e) => {
    state.setFuel(e);
    state.setActiveFilter({ ...state.activeFilter, fuel: e.value });
  };
  const handleChangeBody = (e) => {
    state.setBodyType(e);
    state.setActiveFilter({ ...state.activeFilter, bodyType: e.value });
  };
  const handleChangePrice = (e) => {
    state.setPrice(e);
    state.setActiveFilter({ ...state.activeFilter, price: e.value });
  };

  return (
    <div className="filter-wrapper">
      <div className="filters-selector">
        <Text className="filters-text">Марка</Text>
        <BasicSelect
          id="brand"
          options={brandData}
          getOptionLabel={getItemLabel}
          size="s"
          onChange={handleChangeBrand}
          value={state.brand}
        />
      </div>
      <div className="filters-selector">
        <Text className="filters-text">Модель</Text>
        <BasicSelect
          id="model"
          options={modelData}
          getOptionLabel={getItemLabel}
          size="s"
          onChange={handleChangeModel}
          value={state.model}
        />
      </div>
      <div className="filters-selector">
        <Text className="filters-text">Год выпуска</Text>
        <BasicSelect
          id="year"
          options={yearData}
          getOptionLabel={getItemLabel}
          size="s"
          onChange={handleChangeYear}
          value={state.year}
        />
      </div>
      <div className="filters-selector">
        <Text className="filters-text">Тип топлива</Text>
        <BasicSelect
          id="fuel"
          options={fuelData}
          getOptionLabel={getItemLabel}
          size="s"
          onChange={handleChangeFuel}
          value={state.fuel}
        />
      </div>
      <div className="filters-selector">
        <Text className="filters-text">Тип кузова</Text>
        <BasicSelect
          id="bodyType"
          options={bodyTypeData}
          getOptionLabel={getItemLabel}
          size="s"
          onChange={handleChangeBody}
          value={state.bodyType}
        />
      </div>
      <div className="filters-selector">
        <Text className="filters-text">Стоимость</Text>
        <BasicSelect
          id="price"
          options={priceData}
          getOptionLabel={getItemLabel}
          size="s"
          onChange={handleChangePrice}
          value={state.price}
        />
      </div>
      <div className="filters-button">
        <ResetButton state={state} />
      </div>
    </div>
  );
};

export default Filters;
