const SET_RESULT = 'SET_RESULT';
const SET_SHOW_RESULT = 'SET_SHOW_RESULT';

export const setResultAC = (result) => {
  return {
    type: SET_RESULT,
    result
  }
}

export const setShowResultAC = (status) => {
  return {
    type: SET_SHOW_RESULT,
    status
  }
}

const initialState = {
  result: [],
  showResult: false,
}

const raceResultReduce = (state =  initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.result
      }
    case SET_SHOW_RESULT:
      return {
        ...state,
        showResult: action.status
      }
    default:
      return state
  }
}

export default raceResultReduce;