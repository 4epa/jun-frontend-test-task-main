const SET_RACE_DATE = 'SET_RACE_DATE';
const SET_RACE_IS_START = 'SET_RACE_IS_START';

export const setRaceDateAC = (data) => {
  return {
    type: SET_RACE_DATE,
    data
  }
}

export const setRaceIsStartAC = (status) => {
  return {
    type: SET_RACE_IS_START,
    status
  }
}

const initialState = {
  raceIsStart: false,
  horses: null,
  maxDistace: 1000,
}

const horseBettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RACE_DATE:
      return {
        ...state,
        horses: action.data,
      }
      case SET_RACE_IS_START:
        return {
          ...state,
          raceIsStart: action.status,
        }
    default:
      return state
  }
}

export default horseBettingReducer;