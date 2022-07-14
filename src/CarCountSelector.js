import { useContext } from "react";
import { AppContext } from "./App";

function CarCountSelector() {
  const { setCarCount } = useContext(AppContext);

  function handleOptionChange(e) {
    setCarCount(e.target.value);
  }

  return (
    <div className="car-count-selector">
      <label>Car count: </label>
      <input type="number" min={0} max={20} onChange={handleOptionChange}></input>
    </div>
  );
};

export default CarCountSelector;