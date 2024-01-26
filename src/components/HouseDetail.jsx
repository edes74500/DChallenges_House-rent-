import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const HouseDetail = () => {
  const title = useParams().title;
  //   const houseID = parseInt(id);
  const houses = useSelector((state) => state.propertyList.selected);
  const currentHouse = houses.find((house) => house.title === title);
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  //stock la valeur de house dans le ref
  const prevHousesRef = useRef(houses);
  useEffect(() => {
    if (JSON.stringify(prevHousesRef.current) !== JSON.stringify(houses)) {
      setShouldRedirect(true);
    }
    prevHousesRef.current = houses;
    console.log(prevHousesRef.current);
  }, [houses]);

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/");
    }
  }, [shouldRedirect]);

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
