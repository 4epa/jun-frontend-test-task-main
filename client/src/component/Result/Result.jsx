import { useSelector } from "react-redux";


const Result = () => {
  
  const raceResults = useSelector((state) => state.raceResult.result);

  return (
    <div>
      {raceResults.map((raceHorseResult) => (
        <div key={raceResults.indexOf(raceHorseResult)}>
          {raceResults.indexOf(raceHorseResult) + 1} {raceHorseResult}
        </div>
      ))}
    </div>
  );
};

export default Result;