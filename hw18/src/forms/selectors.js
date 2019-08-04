import { initialState } from "./reducers";

export const getForms = state => state.forms || initialState;

export const getFormsList = state => Object.values(getForms(state));
