import { useContext } from "react";
import { AppContext } from "./App";

const SERVICE_TYPES = ['NoPassengers', 'Normal', 'Special', 'Unknown'];

function ServiceTypeSelector() {
  const { setServiceType } = useContext(AppContext);

  function handleOptionChange(e) {
    setServiceType(e.target.value);
  }

  return (
    <div className="service-type-selector">
      <label>Train service type: </label>
      <select onChange={handleOptionChange} defaultValue={''}>
        <option key={'all'} value={''}>{'All'}</option>
        {SERVICE_TYPES.map((value, index, lineCodeArray) => {
          return (
            <option key={value} value={value}>{value}</option>
          );
        })}
      </select>
    </div>
  );
};

export default ServiceTypeSelector;