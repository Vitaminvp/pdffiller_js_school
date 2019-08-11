import { handleActions, createAction } from "redux-actions";

const SET_LANG = "LANG/SET_LANG";

export const REDUCER_NAME = "lang";

export const setLang = createAction(SET_LANG);

const initialState = { lang: "en" };

export default handleActions(
  {
    [setLang]: () => (state, { payload }) => {
      lang: payload;
    }
  },
  initialState
);

export const langSelector = state => state[REDUCER_NAME];
