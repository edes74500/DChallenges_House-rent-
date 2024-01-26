import axios from "axios";

export const FETCH_PROPERTY_LIST = "FETCH_PROPERTY_LIST";
export const SET_COUNTRY_LIST = "SET_COUNTRY_LIST";
export const fetchPropertyList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json"
      )
      .then((response) => {
        dispatch({
          type: "FETCH_PROPERTY_LIST",
          payload: response.data,
        });
        const countryList = new Set(response.data.map((house) => house.location));
        // console.log(countryList);
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: Array.from(countryList),
        });
      });
  };
};

// https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json
