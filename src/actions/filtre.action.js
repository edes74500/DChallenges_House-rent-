export const TOGGLE_COUNTRY_FILTER = "TOGGLE_COUNTRY_FILTER";
export const DISABLE_COUNTRY_FILTER = "DISABLE_COUNTRY_FILTER";
export const TOGGLE_SUPER_HOST = "TOGGLE_SUPER_HOST";
export const TOGGLE_TYPE_FILTER = "TOGGLE_TYPE_FILTER";
export const SET_DISPLAYED_PROPERTIES = "SET_DISPLAYED_PROPERTIES";

export const toogleCountryFilter = (country) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_COUNTRY_FILTER,
      payload: country,
    });
    dispatch(filteredList());
  };
};

export const disableCountryFilter = () => {
  return (dispatch) => {
    dispatch({
      type: DISABLE_COUNTRY_FILTER,
      payload: null,
    });
    dispatch(filteredList());
  };
};

export const toogleSuperHost = () => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_SUPER_HOST,
      payload: null,
    });
    dispatch(filteredList());
  };
};

export const toogleTypeFilter = (type) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_TYPE_FILTER,
      payload: type,
    });
    dispatch(filteredList());
  };
};

export const filteredList = () => {
  return (dispatch, getState) => {
    const { filterList } = getState();
    const { propertyList } = getState();
    console.log(propertyList.available);
    let displayedList = propertyList.available
      .slice()
      .filter((house) => {
        return filterList.countries.selected.length > 0
          ? filterList.countries.selected.includes(house.location)
          : house;
      })
      .filter((house) => {
        return filterList.superHost ? house.superhost : house;
      })
      .filter((house) => {
        return filterList.type.selected.length > 0 ? house.capacity.bedroom == Number(filterList.type.selected) : house;
      });
    dispatch({
      type: SET_DISPLAYED_PROPERTIES,
      payload: displayedList,
    });
  };
};
