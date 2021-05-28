import React from "react";
import { Avatar } from "@consta/uikit/Avatar";
import "./styles.scss";

const Car = ({ brand, model, year, fuel, image, bodyType, price }) => (
  <div className="car-wrapper">
    <Avatar url={image} size="l" form="default" />
    <p>Фирма: {brand}</p>
    <p>Модель: {model}</p>
    <p>Год производства: {year}</p>
    <p>Тип топлива: {fuel}</p>
    <p>Тип Кузова: {bodyType}</p>
    <p>Стоимость: {price}р</p>
  </div>
);

export default Car;
