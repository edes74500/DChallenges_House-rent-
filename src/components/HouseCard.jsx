import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import breakpoints from "../styles/breakpoints";
//CSS

const StyledHouseCard = styled(motion.div)`
  /* transition: 0.1s all; */
  border: 1px solid var(--light-grey-1);
  border-radius: 10px;
  /* padding: 10px; */
  /* width: 100%; */
  overflow: hidden;
  height: auto;
  display: flex;
  flex-direction: column;
  /* max-width: 400px; */
  /* min-width: 200px; */
  /* margin: 0 auto; */
  /* width: 360px; */
  color: white;
  font-size: 0.875rem;
  font-weight: 100;

  /* p {
    color: var(--white-1);
  } */
  .img-container {
    min-height: 200px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    .superhost-text {
      position: absolute;
      display: flex;
      letter-spacing: 1px;
      gap: 3px;
      top: 8px;
      left: 8px;
      background-color: var(--dark-grey-3);
      padding: 5px 10px;
      color: white;
      border-radius: 10px;
      font-size: 0.625rem;
      font-weight: 300;
      /* width: 100%; */
      /* height: 100%; */

      z-index: 10;
      img {
        /* display: flex; */
        /* align-items: center; */
        font-size: 0.625rem;
        height: 13px;
      }
    }
  }
  .info-container {
    margin: 20px;
    height: auto;
    display: grid;
    grid-template-rows: auto 1fr auto auto;
    flex-grow: 1;
    a {
      display: block;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 16px;
    }
    p {
      color: var(--white-2);
      font-weight: 400;
      font-size: 1rem;
    }
    .capacity {
      padding: 16px 0;
      gap: 16px;
      display: flex;
      border-bottom: 1px solid var(--light-grey-1);
      img {
        padding-right: 4px;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        color: var(--white-1);
      }
    }
    .price {
      display: flex;
      justify-content: space-between;
      padding-top: 16px;
      /* align-items: bottom; */
      div {
        display: flex;
        /* align-items: ; */
        align-items: flex-end;
        justify-content: center;
      }
      .rating {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--white-1);
        font-weight: 500;
      }
      color: var(--white-2);
      font-weight: 500;
      span {
        font-size: 1.25rem;
        color: var(--white-1);
        font-weight: 500;
      }
    }
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
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
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
              <div style={{ backgroundImage: `url(${house.image})` }} className="img-container">
                <AnimatePresence initial={false}>
                  {filters.superHost && house.superhost && (
                    <motion.div
                      key={house.id} // Utilisez house.id comme clé unique
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ x: 0, scale: 1, opacity: 1 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="superhost-text"
                    >
                      <p>Superhost</p>
                      <img src="./img/Starfill.svg" alt="" />
                      {/* <object type="image/svg+xml" data="./img/Starfill.svg" alt="" /> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>
            <div className="info-container">
              <Link to={`/${house.title}`}>{house.title}</Link>
              <p>{house.description}</p>
              <div className="capacity">
                <span>
                  <img src="./img/Home_duotone.svg" alt="" />
                  {house.capacity.bedroom} bedroom
                </span>
                <span>
                  <img src="./img/User_alt_duotone.svg" alt="" />
                  {house.capacity.people} guests
                </span>
              </div>
              <div className="price">
                <div>
                  <span>${house.price}</span>/night
                </div>
                <div className="rating">
                  <img src="./img/Starfill.svg" alt="" /> {house.rating}
                </div>
              </div>
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
