import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import breakpoints from "../styles/breakpoints";
//CSS

const StyledHouseCard = styled(motion.div)`
  transition: 0.1s all;
  border: 1px solid var(--light-grey-1);
  border-radius: 10px;
  /* padding: 10px; */
  /* width: 100%; */
  overflow: hidden;
  /* height: 400px; */
  /* max-width: 400px; */
  /* min-width: 200px; */
  /* margin: 0 auto; */
  /* width: 360px; */
  color: white;

  p {
    color: var(--white-1);
  }
  .img-container {
    min-height: 200px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .info-container {
  }
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: {
    // Déplacez l'élément vers la droite pendant la sortie
    opacity: 0,
    // width: 0,
    // scale: 0,
    positionTransition: {
      duration: 0.5,
      // layoutX: { type: "spring", stiffness: 200, damping: 25 }, // Durée de l'animation de sortie
    },
  },
  visible: {
    // width: 400,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5, // Durée de l'animation de sortie
    },
  },
};
const HouseCard = ({ houses }) => {
  const filters = useSelector((state) => state.filterList);
  return (
    <>
      {/* <AnimateSharedLayout> */}
      <AnimatePresence>
        {houses?.map((house, index) => (
          <StyledHouseCard
            key={house.id}
            className="item"
            variants={item}
            initial="hidden"
            animate="visible"
            // exit="hidden"
          >
            <Link to={`/${house.title}`}>
              <div style={{ backgroundImage: `url(${house.image})` }} className="img-container" />
            </Link>
            <div className="info-container">
              <Link to={`/${house.title}`}>{house.title}</Link>
              {house.location}
              <div>{house.superhost ? "superhost" : null}</div>
              <div>bedroom {house.capacity.bedroom}</div>
            </div>
            {/* </motion.div> */}
          </StyledHouseCard>
        ))}
      </AnimatePresence>
      {/* </AnimateSharedLayout> */}
    </>
  );
};

export default HouseCard;
