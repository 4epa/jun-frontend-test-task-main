import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const RaceHorse = (props) => {
  return (
    <div className={props.distance === 1000 ? "horse__result_finish" : "horse__result" }>
      <div className='horse__container'>
        <span>{props.name}</span>
        <span>{props.distance}</span>
        <span>m</span>
      </div>
      <Box sx={{ width: '100%' }}>
        <Slider
          size="small"
          value={props.distance}
          aria-label="Small"
          valueLabelDisplay="auto"
          max={1000}
        />
      </Box>
    </div>
  );
};

export default RaceHorse;