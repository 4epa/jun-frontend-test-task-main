import RaceHorse from "../RaceHorseProces/RaceHorseProces";
import { useSelector, useDispatch } from "react-redux";
import Result from "../Result/Result";
import React, { useEffect } from "react";
import { setResultAC, setShowResultAC } from "../../redux/raceResultReducer";
import { disconnecToServer } from "../../api/api";
import { getShowResultStatusSelector, getRaceResultSelector, getMaxDistaceSelector } from "../../redux/selectors";

const RaceProces = (props) => {

  if (props.horses === null) return <div>...Loading</div>
    
  const currentRaceResult  = props.horses.map((horse) => (
    <RaceHorse key={horse.name} name={horse.name} distance={horse.distance} />
  ));;

  return (
    <div div className="result__tabl">
      {currentRaceResult}
      <div className="horse-race__img">
        <img
          src="https://i.pinimg.com/originals/6e/d3/66/6ed366195595dd359abb4941268ccce7.gif"
          alt="#"
        />
      </div>
    </div>
  );
};

const Race = (props) => {
  const showResult = useSelector((state) => getShowResultStatusSelector(state));
  const maxDistace = useSelector((state) => getMaxDistaceSelector(state));
  const raceResult = useSelector((state) => getRaceResultSelector(state));

  const dispatch = useDispatch();

  const raceIsStop = () => {
    disconnecToServer();
    dispatch(setShowResultAC(true));
  };

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
    if (horses.every((horse) => horse.distance === distance)) raceIsStop();
  };

  useEffect(() => {
    if (props.horses) checkRaceResult(props.horses, raceResult, 1000);
  }, [props.horses]);

  return (
    <div className="result__container">
      {showResult ? (
        <Result />
      ) : (
        <RaceProces horses={props.horses} />
      )}
    </div>
  );
};

export default Race;
