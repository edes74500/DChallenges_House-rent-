import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHouseCard = styled.div`
  border: 1px solid black;
  padding: 10px;
`;
const HouseCard = ({ houses }) => {
  return (
    <>
      {houses?.map((house) => (
        <StyledHouseCard key={house.id}>
          <Link to={`/${house.title}`}>{house.title}</Link>
          {house.location}
          <div>{house.superhost ? "superhost" : null}</div>
          <div>bedroom {house.capacity.bedroom}</div>
        </StyledHouseCard>
      ))}
    </>
  );
};

export default HouseCard;
