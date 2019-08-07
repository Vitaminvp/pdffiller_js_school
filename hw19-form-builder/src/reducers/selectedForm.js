import { handleActions, createAction } from "redux-actions";
import { createSelector } from "reselect";
import { getFields } from "../utils";
import get from "lodash/get";

const SET_FORM = "SELECTED_FORM/SET_FORM";
const RESET_FORM = "SELECTED_FORM/RESET_FORM";
const ADD_FORM_FIELD = "SELECTED_FORM/ADD_FORM_FIELD";
const DEL_FORM_FIELD = "SELECTED_FORM/DEL_FORM_FIELD";

export const REDUCER_NAME = "selectedForm";

export const setForm = createAction(SET_FORM);
export const resetForm = createAction(RESET_FORM);
export const addFormField = createAction(ADD_FORM_FIELD);
export const deleteFormField = createAction(DEL_FORM_FIELD);

const initialState = null;

export default handleActions(
  {
    [resetForm]: () => initialState,
    [setForm]: (state, { payload }) => payload,
    [addFormField]: (state, { payload }) => ({
      ...state,
      fields: [...state.fields, payload]
    }),
    [deleteFormField]: (state, { payload }) => ({
      ...state,
      fields: [...state.fields.filter(field => field.name !== payload)]
    })
  },
  initialState
);

export const formSelector = state => state[REDUCER_NAME];
export const formFields = createSelector(
  formSelector,
  getFields("fields")
);

export const fieldTypeLength = (state, type = "") => get(formFields(state).filter(field => field.type === type), "length");
export const fieldLength = state => get(formFields(state), "length");

