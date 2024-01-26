import { SET_COUNTRY_LIST } from "../actions/fetch.action";
import {
  DISABLE_COUNTRY_FILTER,
  TOGGLE_COUNTRY_FILTER,
  TOGGLE_SUPER_HOST,
  TOGGLE_TYPE_FILTER,
} from "../actions/filtre.action";

const initialState = {
  countries: {
    available: [],
    selected: [],
  },
  superHost: false,
  type: {
    available: [
      {
        name: "single bedroom",
        place: 1,
      },
      {
        name: "double bedroom",
        place: 2,
      },
    ],
    selected: [],
  },
};

export const filterList = (state = initialState, action) => {
  const countrysSelected = state.countries.selected;
  switch (action.type) {
    case SET_COUNTRY_LIST:
      return {
        ...state,
        countries: {
          ...state.countries,
          available: action.payload,
        },
      };
    case TOGGLE_COUNTRY_FILTER:
      if (countrysSelected.includes(action.payload)) {
        const newCountrysSelected = countrysSelected.filter((country) => country !== action.payload);
        return {
          ...state,
          countries: {
            ...state.countries,
            selected: newCountrysSelected,
          },
        };
      } else {
        // console.log("add", action.payload);
        return {
          ...state,
          countries: {
            ...state.countries,
            selected: [...countrysSelected, action.payload],
          },
        };
      }
    case DISABLE_COUNTRY_FILTER:
      return {
        ...state,
        countries: {
          ...state.countries,
          selected: "",
        },
      };
    case TOGGLE_TYPE_FILTER:
      return {
        ...state,
        type: {
          ...state.type,
          selected: action.payload,
        },
      };

    case TOGGLE_SUPER_HOST:
      return {
        ...state,
        superHost: !state.superHost,
      };
    default:
      return state;
  }
};
