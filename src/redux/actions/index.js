import {
  ACTIVE_FILTER,
  SEARCH_BAR,
  SET_BODY_TYPES,
  SET_BRAND,
  SET_FUEL,
  SET_MODEL,
  SET_PRICE,
  SET_YEAR,
} from "../constants";

export const setBrand = (brand) => {
  return {
    type: SET_BRAND,
    payload: brand,
  };
};

export const setModel = (model) => {
  return {
    type: SET_MODEL,
    payload: model,
  };
};

export const setYear = (year) => {
  return {
    type: SET_YEAR,
    payload: year,
  };
};

export const setFuel = (fuel) => {
  return {
    type: SET_FUEL,
    payload: fuel,
  };
};

export const setBodyType = (bodyType) => {
  return {
    type: SET_BODY_TYPES,
    payload: bodyType,
  };
};

export const setPrice = (price) => {
  return {
    type: SET_PRICE,
    payload: price,
  };
};

export const setActiveFilter = (value) => {
  return {
    type: ACTIVE_FILTER,
    payload: value,
  };
};

export const setSearch = (value) => {
  return {
    type: SEARCH_BAR,
    payload: value,
  };
};
