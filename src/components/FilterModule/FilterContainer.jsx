import React from "react";
import CountryFilter from "./CountryFilter";
import SuperHostFilter from "./SuperHostFilter";
import TypeFilter from "./TypeFilter";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const StyledFilterContainer = styled.div`
  border: 1px solid black;
  background-color: var(--dark-grey-2);
  position: absolute;
  bottom: 0;
  transform: translate(-50%, 50%);
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  /* margin: 10px; */
  /* width: 100%; */
  width: 90%;
  color: var(--white-1);
  min-height: 120px;
  padding: 32px 40px;
  border-radius: 10px;
  border: 1px solid var(--light-grey-1);
  @media screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
    padding: 18px 10px;
    gap: 18px;
  }
  .right-container {
    display: flex;
    gap: 20px;
    /* align-items: center; */
    /* justify-content: space-between; */
    /* max-width: 1100px; */
    /* width: 100%; */
  }
`;

const FilterContainer = () => {
  return (
    <StyledFilterContainer>
      <div className="left-container">
        <CountryFilter />
      </div>
      <div className="right-container">
        <SuperHostFilter />
        <TypeFilter />
      </div>
    </StyledFilterContainer>
  );
};

export default FilterContainer;
