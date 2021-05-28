import {
  setActiveFilter,
  setBodyType,
  setBrand,
  setFuel,
  setModel,
  setPrice,
  setSearch,
  setYear,
} from "../redux/actions";
import { connect } from "react-redux";

export const provideReduxData = (Component) => {
  const mapStateToProps = (store) => {
    return {
      brand: store.brand,
      model: store.model,
      year: store.year,
      fuel: store.fuel,
      bodyType: store.bodyType,
      price: store.price,
      activeFilter: store.activeFilter,
      search: store.search,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      setBrand: (brand) => dispatch(setBrand(brand)),
      setModel: (model) => dispatch(setModel(model)),
      setYear: (year) => dispatch(setYear(year)),
      setFuel: (fuel) => dispatch(setFuel(fuel)),
      setBodyType: (bodyType) => dispatch(setBodyType(bodyType)),
      setPrice: (price) => dispatch(setPrice(price)),
      setActiveFilter: (value) => dispatch(setActiveFilter(value)),
      setSearch: (value) => dispatch(setSearch(value)),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Component);
};
