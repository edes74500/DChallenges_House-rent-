import React from "react";
import styled from "styled-components";
import breakpoints from "../styles/breakpoints";
import FilterContainer from "./FilterModule/FilterContainer";

const StyledHeroSection = styled.div`
  min-height: 620px;
  background-image: url(./img/hero-image.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  position: relative;
  margin-bottom: 100px;
  .text-container {
    padding-top: 180px;
    padding-left: 140px;
    @media screen and (min-width: ${breakpoints.tablet}px) {
      padding-left: 112px;
    }
    @media screen and (min-width: ${breakpoints.mobile}px) {
      padding-left: 64px;
    }
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;
const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className="text-container">
        <h1>
          Peace, nature, <br />
          dream
        </h1>
        <h2>Find and book a great experience.</h2>
      </div>
      <FilterContainer />
    </StyledHeroSection>
  );
};

export default HeroSection;
