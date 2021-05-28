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

const initialFilterValue = { label: "", value: "" };

const initialState = {
  brand: initialFilterValue,
  model: initialFilterValue,
  year: initialFilterValue,
  fuel: initialFilterValue,
  bodyType: initialFilterValue,
  price: initialFilterValue,
  activeFilter: {},
  search: "",
};

const StatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRAND: {
      return {
        ...state,
        brand: action.payload,
      };
    }
    case SET_MODEL: {
      return {
        ...state,
        model: action.payload,
      };
    }
    case SET_YEAR: {
      return {
        ...state,
        year: action.payload,
      };
    }
    case SET_FUEL: {
      return {
        ...state,
        fuel: action.payload,
      };
    }
    case SET_BODY_TYPES: {
      return {
        ...state,
        bodyType: action.payload,
      };
    }
    case SET_PRICE: {
      return {
        ...state,
        price: action.payload,
      };
    }
    case ACTIVE_FILTER: {
      return {
        ...state,
        activeFilter: action.payload,
      };
    }
    case SEARCH_BAR: {
      return {
        ...state,
        search: action.payload,
      };
    }
    default:
      return state;
  }
};

export default StatReducer;
