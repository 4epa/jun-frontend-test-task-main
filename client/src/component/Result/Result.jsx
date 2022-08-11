import { useSelector } from "react-redux";
import { getRaceResultSelector } from "../../redux/selectors";

const Result = () => {
  
  const raceResults = useSelector((state) => getRaceResultSelector(state));

  return (
    <div className="result__tabl">
      {raceResults.map((raceHorseResult, index) => (
        <div className="result__box" key={index}>
          {index + 1} {raceHorseResult}
        </div>
      ))}
    </div>
  );
};

export default Result;