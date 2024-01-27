import React from "react";
import HouseList from "../components/HouseList";
import { Outlet } from "react-router-dom";
import FilterContainer from "../components/FilterModule/FilterContainer";
import HeroSection from "../components/HeroSection";
import styled from "styled-components";

const StyledHome = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const Home = () => {
  return (
    <StyledHome>
      <HeroSection />
      {/* <FilterContainer /> */}
      <Outlet />
    </StyledHome>
  );
};

export default Home;
