import { combineReducers } from "redux";
import { gifsReducer, selectedGifsReducer } from "./productsReducer";
const reducers = combineReducers({
  allGifs: gifsReducer,
  gif: selectedGifsReducer,
});
export default reducers;
