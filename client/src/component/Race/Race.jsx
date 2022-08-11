import RaceHorse from "../RaceHorseProces/RaceHorseProces";
import { useSelector, useDispatch } from "react-redux";
import Result from "../Result/Result";
import React, { useEffect } from "react";
import { setResultAC, setShowResultAC } from "../../redux/raceResultReducer";
import { disconnecToServer } from "../../api/api";

const Race = (props) => {

  const showResult = useSelector((state) => state.raceResult.showResult);
  const maxDistace = useSelector((state) => state.horseBetting.maxDistace);
  const raceResult = useSelector((state) => state.raceResult.result);

  const dispatch = useDispatch();
  

  const raceIsStop = () => {
    disconnecToServer();
    dispatch(setShowResultAC(true));
  }

  const checkRaceResult = (horses, result, distance) => {
    const finishHorses = horses.filter(
      (horse) => horse.distance === maxDistace
    );
    const finishHorse = finishHorses.filter(
      (horse) => !raceResult.includes(horse.name)
    );
    const currentResult = result;
    if (finishHorse.length !== 0) result.push(finishHorse[0].name);
    dispatch(setResultAC(currentResult));
    if (horses.every((horse) => horse.distance === distance)) raceIsStop()
  };

  useEffect(() => {
    if (props.horses) checkRaceResult(props.horses, raceResult, 1000)
  }, [props.horses]);

  let currentRaceResult = null;

  if (props.horses !== null)
    currentRaceResult = props.horses.map((horse) => (
      <RaceHorse key={horse.name} name={horse.name} distance={horse.distance} />
    ));

  return <div className="result__container">{showResult ? <Result /> : <div div className="result__tabl">{currentRaceResult}</div>}</div>;
};

export default Race;
