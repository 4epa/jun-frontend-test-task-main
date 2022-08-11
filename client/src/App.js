import React, { useState, useEffect } from "react";
import { setRaceDateAC, setRaceIsStartAC } from "./redux/horseBettingReducer";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  connectToServer,
  getTrackTickersStatus,
  startTrackTickers,
} from "./api/api";
import Race from "./component/Race/Race";
import Button from '@mui/material/Button';

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
    <div className="wrapper">
      {
        raceIsStart ? (
          <Race horses={horses} />
        ) : (
          <Button onClick={() => startTrackTickers(setStartRace)} variant="contained" disableElevation>
            Start
          </Button>
        )
      }
    </div>
  );
}

export default App;
