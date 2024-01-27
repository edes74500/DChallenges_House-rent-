import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTypeFilter } from "../../actions/filtre.action";
import styled from "styled-components";

const StyledTypeFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .select-wrapper {
    position: relative;
    svg {
      fill: white;
    }
    &::before {
      pointer-events: none;
      content: url(./img/down-arrow.svg);
      position: absolute;
      width: 35px;
      height: 35px;
      /* background-color: red; */
      top: 50%;
      left: 80%;
      z-index: 10;
      color: white;
      transform: translate(-50%, -50%);
      fill: white;
    }
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 180px;
    border: 2px solid var(--light-grey-1);
    padding: 12px 24px;
    border-radius: 15px;
    /* height: 40px; */
    outline: none;
    color: white;
    font-weight: 600;
    background-color: var(--dark-grey-2);

    &::before {
      content: url(./img/down-arrow.svg);
      position: absolute;
      width: 80px;
      height: 80px;
      background-color: red;
      /* top: 50%; */
      /* left: 80%; */
      z-index: 10;
      /* transform: translate(-50%, -50%); */
    }
    option {
      appearance: none;
      display: block;
      -webkit-appearance: none;
      -moz-appearance: none;
      font-size: 0.85rem;
      padding: 12px 24px;
      margin: 10px;
      height: 70px;
      font-family: "Outfit Variable";
      font-weight: 500;
      background-color: var(--dark-grey-2);
      &:hover {
        background-color: var(--orange-1); /* Adjust hover background color */
      }
    }
  }
  .test {
    padding: 40px;
  }

  .custom-select {
    .select-button {
      cursor: pointer;
      width: 200px;
      position: relative;
      border: 2px solid var(--light-grey-1);
      padding: 12px 24px;
      border-radius: 15px;
      /* height: 40px; */
      outline: none;
      color: white;
      font-weight: 500;
      background-color: var(--dark-grey-2);
      justify-content: left;
      font-size: 0.875rem;

      &::before {
        pointer-events: none;
        content: url(./img/down-arrow.svg);
        position: absolute;
        width: 35px;
        height: 35px;
        /* background-color: red; */
        top: 50%;
        left: 90%;
        z-index: 10;
        color: white;
        transform: translate(-50%, -50%);
        fill: white;
      }
    }
    .select-dropdown {
      display: none;
      margin-top: 15px;
      border: 2px solid var(--light-grey-1);
      border-radius: 10px;
      background-color: var(--light-grey-1);
      .item-select {
        height: 50px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        label {
          display: flex;
          align-items: center;
          height: 100%;
          width: 100%;
          cursor: pointer;
        }
        &:hover {
          background-color: var(--blue-1);
        }
      }
    }
  }
`;

const TypeFilter = () => {
  const typeAvailable = useSelector((state) => state.filterList.type.available);
  const [userHasInteracted, setUserHasInteracted] = React.useState(false);
  const dispatch = useDispatch();

  const handleOnClick = (type) => {
    console.log(type);
    dispatch(toogleTypeFilter(type));
    setUserHasInteracted(true);
  };

  return (
    <StyledTypeFilter>
      {/* <div className="select-wrapper">
        <select name="type" id="propertyType" defaultValue={"DEFAULT"} onChange={(e) => handleOnClick(e.target.value)}>
          <option value="DEFAULT" disabled hidden={!userHasInteracted}>
            Property Type
          </option>
          <option value="" style={{ padding: "20px" }} className="test">
            All
          </option>
          {typeAvailable.map((type) => (
            <option key={type.name} value={type.place}>
              {type.name}
            </option>
          ))}
        </select>
      </div> */}
      <div className="custom-select">
        <div className="select-button">
          <span className="selected-value">Property Type</span>
        </div>
        <ul className="select-dropdown">
          <li className="item-select">
            <input type="radio" value="" id="all" name="type" onChange={(e) => handleOnClick(e.target.value)} />
            <label htmlFor="all">All</label>
          </li>
          {typeAvailable.map((type) => (
            <li className="item-select" key={type.name}>
              <input
                type="radio"
                value={type.place}
                id={type.name}
                name="type"
                onChange={(e) => handleOnClick(e.target.value)}
              />
              <label htmlFor={type.name}>{type.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </StyledTypeFilter>
  );
};

export default TypeFilter;
