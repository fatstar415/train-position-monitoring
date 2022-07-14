import logo from './train.png';
import './App.css';
import { useState, useEffect, createContext } from 'react';
import TrainPosition from './TrainPosition';
import TrainPositionFilter from './TrainPositionFilter';

export const AppContext = createContext(null);

function App() {
  const [trainPosition, setTrainPosition] = useState([]);
  const [lineCode, setLineCode] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [carCount, setCarCount] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function filterTrainPosition(trainPositions) {
    let filteredPositions = trainPositions
    if (lineCode !== '') {
      filteredPositions = filteredPositions.filter((pos) => pos.LineCode === lineCode);
    }
    if (serviceType !== '') {
      filteredPositions = filteredPositions.filter((pos) => pos.ServiceType === serviceType);
    }
    if (carCount !== '') {
      filteredPositions = filteredPositions.filter((pos) => pos.CarCount == carCount);
    }
    return filteredPositions;
  }

  useEffect(() => {
    setTrainPosition([]);
    setIsLoaded(false);
    fetch("https://api.wmata.com/TrainPositions/TrainPositions?contentType=json", {
      method: "GET",
      headers: { api_key: '5bc33b9b23f148e88291c9aee432dbbd' },
      mode: "cors"
    })
      .then(res => res.json())
      .then(
        (result) => {
          let filteredResult = filterTrainPosition(result.TrainPositions)
          setIsLoaded(true);
          setTrainPosition(filteredResult);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [lineCode, serviceType, carCount]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Train position monitoring
      </header>
      <div className="App-content">
        <AppContext.Provider value={{
          trainPosition,
          lineCode,
          serviceType,
          carCount,
          error,
          isLoaded,
          setLineCode,
          setServiceType,
          setCarCount
          }}>
            <TrainPositionFilter />
            <TrainPosition />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
