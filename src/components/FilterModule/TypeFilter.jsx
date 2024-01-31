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
    position: relative;
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

        top: 50%;
        left: 90%;
        z-index: 10;
        color: white;
        transition: 0.5s ease-in-out;
        transform: translate(-50%, -50%) ${({ $listIsOpen }) => ($listIsOpen ? "rotate(90deg)" : "rotate(0)")};
        fill: white;
      }
    }
    .select-dropdown {
      /* display: none; */
      transform: scaleY(0);
      opacity: 0;
      visibility: hidden;
      position: absolute;
      width: 100%;
      margin-top: 15px;
      /* border: 2px solid var(--light-grey-1); */
      border-radius: 10px;
      background-color: var(--light-grey-2);
      background-color: var(--light-grey-1);

      overflow: hidden;
      transition: 0.3s ease-in-out;
      &.is-open {
        /* display: none; */
        transform: scaleY(1);
        opacity: 1;
        visibility: visible;
      }
      input[type="radio"] {
        position: absolute;
        left: 0;
        opacity: 0;
      }
      input:checked ~ label {
        background-color: var(--light-grey-2);
        background-color: var(--blue-1);
      }
      input:focus ~ label {
        background-color: var(--blue-1);
      }
      .item-select {
        height: 40px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        label {
          padding-left: 12px;
          display: flex;
          align-items: center;
          /* border-radius: 10px; */
          height: 100%;
          width: 100%;
          cursor: pointer;
        }
        &:hover,
        &:checked {
          background-color: var(--light-grey-1);
          background-color: var(--blue-1);
        }
      }
    }
  }
`;

const TypeFilter = () => {
  const typeAvailable = useSelector((state) => state.filterList.type.available);
  const dispatch = useDispatch();
  const dropDownRef = React.useRef(null);
  const [listIsOpen, setListIsOpen] = React.useState(false);

  const handleOnChange = (e) => {
    const selectedValue = dropDownRef.current.querySelector(".selected-value");
    dispatch(toogleTypeFilter(e.target.value));
    // setUserHasInteracted(true);
    selectedValue.textContent = e.target.id;
    toogleList();
  };

  const handleOnClick = () => {
    toogleList();
    console.log(dropDownRef.current);
  };

  const toogleList = () => {
    const dropDownItems = dropDownRef.current.querySelector(".select-dropdown");
    const isOpen = !listIsOpen;
    setListIsOpen(isOpen);
    if (isOpen) {
      dropDownItems.classList.add("is-open");
    } else dropDownItems.classList.remove("is-open");
  };

  return (
    <StyledTypeFilter $listIsOpen={listIsOpen}>
      <div className="custom-select" ref={dropDownRef}>
        <div className="select-button" onClick={handleOnClick}>
          <span className="selected-value">Property Type</span>
        </div>
        <ul className="select-dropdown">
          <li className="item-select">
            <input type="radio" value="" id="Any type" name="type" onClick={(e) => handleOnChange(e)} />
            <label htmlFor="Any type">Any type</label>
          </li>
          {typeAvailable.map((type) => (
            <li className="item-select" key={type.name}>
              <input type="radio" value={type.place} id={type.name} name="type" onClick={(e) => handleOnChange(e)} />
              <label htmlFor={type.name}>{type.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </StyledTypeFilter>
  );
};

export default TypeFilter;
