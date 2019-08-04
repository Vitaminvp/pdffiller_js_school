import { handleActions } from "redux-actions";
import { add } from "./actions";

export const initialState = {};

const products = handleActions(
  {
    [add]: (state, { payload }) => ({
      ...state,
      [payload.id]: payload
    })
  },
  initialState
);

export default products;
