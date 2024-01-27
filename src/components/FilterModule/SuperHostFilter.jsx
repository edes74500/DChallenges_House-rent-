import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleSuperHost } from "../../actions/filtre.action";
import styled from "styled-components";

const StyledSuperHostFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    -webkit-appearance: none;
    position: relative;
    width: 50px;
    background-color: var(--light-grey-2);
    height: 24px;
    border-radius: 25px;
    transition: background 0.3s;
    outline: none;
    cursor: pointer;
    &::after {
      content: "";
      top: 50%;
      left: 75%;
      transform: translate(-50%, -50%);
      position: absolute;
      border-radius: 50%;
      width: auto;
      height: 20px;
      aspect-ratio: 1/1;
      border-radius: 25px;
      background-color: white;
      /* transition: background 0.3s; */
      transition: 0.3s left;
    }
    &:checked {
      background-color: var(--blue-1);
      &::after {
        transition: 0.3s all ease-in-out;
        left: 25%;
      }
    }
  }
  label {
    margin: 0 20px 0 8px;
    font-size: 0.75rem;
  }
`;

const SuperHostFilter = () => {
  const superHost = useSelector((state) => state.filterList.superHost);
  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(toogleSuperHost());
  };

  return (
    <StyledSuperHostFilter>
      <input type="checkbox" name="superhost" id="superhost" onChange={handleOnChange} checked={superHost} />
      <label htmlFor="superhost">Superhost</label>
    </StyledSuperHostFilter>
  );
};

export default SuperHostFilter;
