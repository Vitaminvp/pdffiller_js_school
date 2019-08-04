import { handleActions } from "redux-actions";
import { add } from "./actions";

export const initialState = {};

const forms = handleActions(
  {
    [add]: (state, { payload }) => ({
      ...state,
      [payload.id]: payload
    })
  },
  initialState
);

export default forms;
