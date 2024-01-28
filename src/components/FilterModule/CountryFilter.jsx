import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { disableCountryFilter, toogleCountryFilter } from "../../actions/filtre.action";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const CountryFilter = () => {
  const countriesAvailable = useSelector((state) => state.filterList.countries.available);
  const countriesSelected = useSelector((state) => state.filterList.countries.selected);
  const dispatch = useDispatch();

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
    <StyledCountryFilter>
      <div className="checkbox">
        <input
          type="checkbox"
          id="disable-country-filter"
          onChange={handleAllDisplay}
          checked={checkIfAllCountriesAreDisplayed()}
        />
        <label htmlFor="disable-country-filter">All stays</label>
      </div>
      {countriesAvailable.map((country, index) => {
        return (
          <div key={index} data-country={country} className="checkbox">
            <input
              type="checkbox"
              name={country}
              id={country}
              onChange={() => handleOnClick(country)}
              checked={checkSelectedCountry(country)}
            />
            <label htmlFor={country}>{country}</label>
          </div>
        );
      })}
    </StyledCountryFilter>
  );
};

export default CountryFilter;

const StyledCountryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  user-select: none;

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* background-color: red; */
    label {
      transition: 0.3s all ease-in-out;
      cursor: pointer;
      padding: 8px 12px;
      border: 1px solid transparent;
      border-radius: 10px;
      @media screen and (max-width: ${breakpoints.mobile}px) {
        flex-direction: column;
        padding: 8px 6px;
        /* padding: 32px 10px; */
      }
      &:hover {
        border: 1px solid var(--light-grey-2);
        /* background-color: var(--light-grey-1); */
        /* background-color: ); */
      }
      &:active {
        /* background-color: var(--light-grey-2); */
      }
    }

    input[type="checkbox"]:checked + label {
      /* Styles à appliquer lorsque l'input est coché */
      background-color: var(--light-grey-1);
      /* color: blue; */
      /* font-weight: bold; */
    }

    input[type="checkbox"] {
      display: none;
    }
  }
`;
