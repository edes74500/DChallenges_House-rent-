import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const HouseDetail = () => {
  const title = useParams().title;
  const navigate = useNavigate();
  const houses = useSelector((state) => state.propertyList.selected);
  const prevHousesRef = useRef(houses);
  const isLoadingPopertyList = useSelector((state) => state.propertyList.isLoading);
  const currentHouse = houses.find((house) => house.title === title);
  // let decodedTitle = decodeURIComponent(title);

  //   const houseID = parseInt(id);

  // const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (currentHouse) {
      prevHousesRef.current = houses;
    }
  }, [currentHouse]);

  useEffect(() => {
    if (prevHousesRef.current && prevHousesRef.current !== houses && !isLoadingPopertyList) {
      // setShouldRedirect(true);
      console.log("changed filters : redirect");
      navigate("/");
    }
  }, [houses]);

  // useEffect(() => {
  //   if (shouldRedirect && !isLoadingPopertyList) {
  //     console.log("back avec use <effet></effet>");
  //   }
  // }, [shouldRedirect]);

  useEffect(() => {
    document.title = title
      ? ` ${title} | House Renting `
      : "House Renting | Find the next place to live an amazing retreat";
    return () => {
      document.title = "House Renting | Find the next place to live an amazing retreat";
    };
  }, [title, isLoadingPopertyList]);

  // if (!currentHouse && !isLoadingPopertyList) {
  //   console.log("WRONG ADRESS");
  //   return <Navigate to="/" />;
  // }

  return (
    <div>
      {!isLoadingPopertyList && currentHouse && (
        <>
          TEST SINGLE HOUSE {currentHouse.title}
          <img src={currentHouse.image} alt="" />
        </>
      )}
    </div>
  );
};

export default HouseDetail;
