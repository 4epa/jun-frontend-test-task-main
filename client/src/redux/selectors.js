export const getHorsesSelector = (state) => {
  return state.horseBetting.horses
}

export const getRaceIsStartSelector = (state) => {
  return state.horseBetting.raceIsStart
}

export const getShowResultStatusSelector = (state) => {
  return state.raceResult.showResult
}

export const getMaxDistaceSelector = (state) => {
  return state.horseBetting.maxDistace
}

export const getRaceResultSelector = (state) => {
  return state.raceResult.result
}
