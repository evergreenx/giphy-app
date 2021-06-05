import { ActionTypes } from "../constants/action-types";
const intialState = {
  gifs: [],
};

export const gifsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_GIFS:
      return { ...state, gifs: payload };
    default:
      return state;
  }
};

export const selectedGifsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_GIF:
      return { ...state, ...payload };

    default:
      return state;
  }
};
