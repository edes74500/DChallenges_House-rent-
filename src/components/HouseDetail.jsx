import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

const HouseDetail = () => {
  const title = useParams().title;
  //   const houseID = parseInt(id);
  const houses = useSelector((state) => state.propertyList.selected);
  const currentHouse = houses.find((house) => house.title === title);

  if (!currentHouse) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      TEST SINGLE HOUSE {currentHouse.title}
      <img src={currentHouse.image} alt="" />
      {/* <img src="" alt="" /> */}
    </div>
  );
};

export default HouseDetail;
