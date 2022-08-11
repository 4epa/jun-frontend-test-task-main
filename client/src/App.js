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
import { getHorsesSelector, getRaceIsStartSelector } from './redux/selectors'


function App() {

  const horses = useSelector(state => getHorsesSelector(state));
  const raceIsStart = useSelector(state => getRaceIsStartSelector(state));

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
