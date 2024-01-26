import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { disableCountryFilter, toogleCountryFilter } from "../../actions/filtre.action";

const CountryFilter = () => {
  const countriesAvailable = useSelector((state) => state.filterList.countries.available);
  const countriesSelected = useSelector((state) => state.filterList.countries.selected);
  const dispatch = useDispatch();

  //   React.useEffect(() => {
  //     console.log(countriesAvailable);
  //     console.log(countriesSelected);
  //   }, [countriesAvailable, countriesSelected]);

  const handleOnClick = (country) => {
    dispatch(toogleCountryFilter(country));
  };

  const handleAllDisplay = () => {
    dispatch(disableCountryFilter());
  };

  const checkIfAllCountriesAreDisplayed = () => {
    if (countriesSelected.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const checkSelectedCountry = (country) => {
    if (countriesSelected.includes(country)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <>
        <div>
          <label htmlFor="disable-country-filter">All countries</label>
          <input
            type="checkbox"
            id="disable-country-filter"
            onChange={handleAllDisplay}
            checked={checkIfAllCountriesAreDisplayed()}
          />
        </div>
        ---------------------
      </>
      {countriesAvailable.map((country, index) => {
        return (
          <div key={index} data-country={country}>
            <label htmlFor={country}>{country}</label>
            <input
              type="checkbox"
              name={country}
              id={country}
              onChange={() => handleOnClick(country)}
              checked={checkSelectedCountry(country)}
            />
          </div>
        );
      })}
      ---------------------
    </div>
  );
};

export default CountryFilter;
