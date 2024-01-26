import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTypeFilter } from "../../actions/filtre.action";

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
    <div>
      --------------
      <div>
        <select name="type" id="propertyType" defaultValue={"DEFAULT"} onChange={(e) => handleOnClick(e.target.value)}>
          <option value="DEFAULT" disabled hidden={!userHasInteracted}>
            Property Type
          </option>
          <option value="">All</option>
          {typeAvailable.map((type) => (
            <option key={type.place} value={type.place}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TypeFilter;
