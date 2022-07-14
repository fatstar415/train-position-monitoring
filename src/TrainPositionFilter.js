import {useContext} from "react";
import { AppContext } from "./App";
import LineCodeSelector from "./LineCodeSelector";
import ServiceTypeSelector from "./ServiceTypeSelector";
import CarCountSelector from "./CarCountSelector";

function TrainPositionFilter() {
  return (
    <div className="App-filter">
      <LineCodeSelector />
      <ServiceTypeSelector />
      <CarCountSelector />
    </div>
  );
};

export default TrainPositionFilter;