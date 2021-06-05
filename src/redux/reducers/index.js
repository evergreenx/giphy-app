import { combineReducers } from "redux";
import { gifsReducer, selectedGifsReducer } from "./gifsReducer";
const reducers = combineReducers({
  allGifs: gifsReducer,
  gif: selectedGifsReducer,
});
export default reducers;
