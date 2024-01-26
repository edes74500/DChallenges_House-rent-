import React from "react";
import HouseList from "../components/HouseList";
import { Outlet } from "react-router-dom";
import FilterContainer from "../components/FilterModule/FilterContainer";

const Home = () => {
  return (
    <div>
      HERO SECTION <br />
      <FilterContainer />
      <Outlet />
    </div>
  );
};

export default Home;
