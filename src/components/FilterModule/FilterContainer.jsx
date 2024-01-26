import React from "react";
import CountryFilter from "./CountryFilter";
import SuperHostFilter from "./SuperHostFilter";
import TypeFilter from "./TypeFilter";
import styled from "styled-components";

const StyledFilterContainer = styled.div`
  border: 1px solid black;
  background-color: pink;
`;

const FilterContainer = () => {
  return (
    <StyledFilterContainer>
      filters :
      <CountryFilter />
      <SuperHostFilter />
      <TypeFilter />
    </StyledFilterContainer>
  );
};

export default FilterContainer;
