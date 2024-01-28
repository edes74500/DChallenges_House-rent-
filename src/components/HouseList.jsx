import React from "react";
import { useSelector } from "react-redux";
import HouseCard from "./HouseCard";
import styled from "styled-components";
import breakpoints from "../styles/breakpoints";
import { AnimatePresence } from "framer-motion";

const StyledHouseList = styled.div`
  /* justify-content: center; */
  /* transition: 1s all; */
  .message-display {
    width: 90%;
    margin: 0 auto;
    color: white;
    margin-top: 48px;
    margin-bottom: 32px;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .houses-display {
    width: 90%;
    margin: 0 auto 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* display: flex;
    flex-wrap: wrap;
    flex-basis: 20%;
    flex-grow: 1; */
    /* justify-content: space-between; */
    /* flex-wrap: nowrap; */
    row-gap: 72px;
    column-gap: 32px;
  }
  @media screen and (max-width: ${breakpoints.desktop}px) {
    width: 80%;
    margin: 0 auto;
    .houses-display {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: ${breakpoints.tablet}px) {
    width: 70%;
    max-width: 500px;
    margin: 0 auto;
    .houses-display {
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
`;

const HouseList = () => {
  const houses = useSelector((state) => state.propertyList.selected);
  const allhouses = useSelector((state) => state.propertyList.available);
  const filters = useSelector((state) => state.filterList);

  return (
    <StyledHouseList>
      {houses.length > 0 && (
        <>
          <div className="message-display">
            Over {houses.length} stay{houses.length > 1 ? "s" : ""}
          </div>
          <div className="houses-display">
            <AnimatePresence>
              <HouseCard houses={houses} />
            </AnimatePresence>
          </div>
        </>
      )}
      {houses.length <= 0 && (
        <>
          <div className="message-display">
            <div>No house match your filters</div>
            <div>but you can check those ones:</div>
          </div>
          <div className="houses-display">
            <HouseCard houses={allhouses} />
          </div>
        </>
      )}
    </StyledHouseList>
  );
};

export default HouseList;
