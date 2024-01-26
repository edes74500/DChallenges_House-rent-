import React from "react";
import { useSelector } from "react-redux";
import HouseCard from "./HouseCard";

const HouseList = () => {
  const houses = useSelector((state) => state.propertyList.selected);
  const allhouses = useSelector((state) => state.propertyList.available);
  const filters = useSelector((state) => state.filterList);

  return (
    <div>
      {houses && <HouseCard houses={houses} />}
      {houses.length <= 0 && (
        <>
          <div>No house match your filters</div>
          <div>but you can check those ones:</div>
          <HouseCard houses={allhouses} />
        </>
      )}
    </div>
  );
};

export default HouseList;
