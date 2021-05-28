import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import SearchBar from "../SearchBar";
import Cars from "../Cars";
import Filters from "../Filters";
import { provideReduxData } from "../../hocs/provideReduxData";
import "./styles.scss";

const App = (props) => {
  return (
    <Theme preset={presetGpnDefault}>
      <SearchBar state={props} />
      <Filters state={props} />
      <Cars state={props} />
    </Theme>
  );
};

export default provideReduxData(App);
