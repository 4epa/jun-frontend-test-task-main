import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import horseBettingReducer from "./horseBettingReducer";
import raceResultReducer from "./raceResultReducer";

const reducers = combineReducers({
  horseBetting: horseBettingReducer,
  raceResult: raceResultReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;