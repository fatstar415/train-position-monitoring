import {useContext} from "react";
import { AppContext } from "./App";

const LINECODE = {
  RD: 'Red Line',
  BL: 'Blue Line',
  YL: 'Yellow Line',
  OR: 'Orange Line',
  GR: 'Green Line',
  SV: 'Sliver Line'
}

function LineCodeSelector() {
  const { setLineCode } = useContext(AppContext);

  function handleOptionChange(e) {
    setLineCode(e.target.value);
  }

  return (
    <div className="line-code-selector">
      <label>Line Color: </label>
      <select onChange={handleOptionChange} defaultValue={''}>
        <option key={'all'} value={''}>{'All'}</option>
        {Object.keys(LINECODE).map((value, index, lineCodeArray) => {
          return (
            <option key={value} value={value}>{LINECODE[value]}</option>
          );
        })}
      </select>
    </div>
  );
};

export default LineCodeSelector;