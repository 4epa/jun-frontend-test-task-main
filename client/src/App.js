import React, { useState, useEffect } from "react";
import { setRaceDateAC, setRaceIsStartAC } from "./redux/horseBettingReducer";
import { setResultAC, setShowResultAC } from "./redux/raceResultReducer";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  connectToServer,
  getTrackTickersStatus,
  startTrackTickers,
  disconnecToServer,
} from "./api/api";
import Race from "./component/Race/Race";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const horses = useSelector((state) => state.horseBetting.horses);
  const raceIsStart = useSelector((state) => state.horseBetting.raceIsStart);

  const dispatch = useDispatch();


  const setStartRace = (status) => {
    dispatch(setRaceIsStartAC(status));
  };

  const setRaceDate = (data) => {
    dispatch(setRaceDateAC(data));
  };

  

  useEffect(() => {
    if (raceIsStart) getTrackTickersStatus(setRaceDate);
  }, [raceIsStart]);

  useEffect(() => {
    connectToServer();
    setIsConnected(true);
  }, []);

  return (
    <div>
      {
        raceIsStart ? (
          <Race horses={horses} />
        ) : (
          <button onClick={() => startTrackTickers(setStartRace)}>start</button>
        )
      }
    </div>
  );
}

export default App;
