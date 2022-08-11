import { useSelector } from "react-redux";


const Result = () => {
  
  const raceResults = useSelector((state) => state.raceResult.result);

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