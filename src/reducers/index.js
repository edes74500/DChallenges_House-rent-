import { combineReducers } from "redux";
import { propertyList } from "./propertyList.reducer";
import { filterList } from "./filterList.reducer";

export default combineReducers({
  propertyList,
  filterList,
});
