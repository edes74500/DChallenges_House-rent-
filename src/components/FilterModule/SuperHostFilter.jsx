import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleSuperHost } from "../../actions/filtre.action";

const SuperHostFilter = () => {
  const superHost = useSelector((state) => state.filterList.superHost);
  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(toogleSuperHost());
  };

  return (
    <div>
      <label htmlFor="superhost">Superhost</label>
      <input type="checkbox" name="superhost" id="superhost" onChange={handleOnChange} checked={superHost} />
    </div>
  );
};

export default SuperHostFilter;
