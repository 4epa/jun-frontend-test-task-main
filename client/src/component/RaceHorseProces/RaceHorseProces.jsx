

const RaceHorse = (props) => {
  return (
    <div className={props.distance === 1000 ? "horse__result_finish" : "horse__result" }>
      <span>{props.name}</span>
      <span>{props.distance}</span>
      <span>m</span>
    </div>
  );
};

export default RaceHorse;