import { FETCH_PROPERTY_LIST, IS_LOADING_PROPERTY_LIST, SET_COUNTRY_LIST } from "../actions/fetch.action";
import { SET_DISPLAYED_PROPERTIES } from "../actions/filtre.action";

const initialState = {
  available: [],
  selected: [],
  countries: [],
  isLoading: false,
};
export const propertyList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTY_LIST:
      return {
        available: action.payload,
        selected: action.payload,
      };
    case SET_DISPLAYED_PROPERTIES:
      return {
        ...state,
        selected: action.payload,
      };
    case SET_COUNTRY_LIST:
      return {
        ...state,
        countries: action.payload,
      };
    case IS_LOADING_PROPERTY_LIST:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
