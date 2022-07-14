import React, {useContext} from "react";
import { AppContext } from "./App";

const DIRECTIONS = {
  1: "Northbound/Eastbound",
  2: "Southbound/Westbound"
}

const LINE_CODE_COLOR = {
  RD: 'red',
  BL: 'blue',
  YL: 'yellow',
  OR: 'orange',
  GR: 'green',
  SV: 'grey'
}

function TrainPosition() {
  const {trainPosition, isLoaded, error} = useContext(AppContext);

  function renderPositionElement(value) {
    let renderedElement = [(
      <>
      <div>Train ID: {value.TrainId}</div>
      <div>Circuit ID: {value.CircuitId}</div>
      <div>Train No.: {value.TrainNumber}</div>
      <div>ServiceType: {value.ServiceType}</div>
      <div>Seconds At Location: {value.SecondsAtLocation}</div>
      </>
    )];

    if (value.LineCode != null) {
      renderedElement.push(<div>LineCode: {value.LineCode} <span className={`line-color ${LINE_CODE_COLOR[value.LineCode]}`}> </span></div>)
    } 

    renderedElement.push(<div>Direction: {DIRECTIONS[value.DirectionNum]}</div>)

    if (value.DestinationStationCode != null) {
      renderedElement.push(<div>Destination: {value.DestinationStationCode}</div>)
    }

    renderedElement.push(<div>Car count: {value.CarCount}</div>)

    return (<>{renderedElement}</>);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if(trainPosition.length > 0) {
    return (<div className="train-position">
      {trainPosition.map((value, index, routes) => {
        let positionElement = renderPositionElement(value)
        return (<div className="route" key={value.TrainId}>
          {positionElement}
        </div>);
      })}
    </div>);
  } else {
    return (
      <div>No train data loaded.</div>
    )
  }
}

export default TrainPosition;