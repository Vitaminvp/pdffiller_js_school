import { handleActions, createAction } from 'redux-actions';
// import { createSelector } from 'reselect';


const SET_VALUE = 'ADD_CONTACT/SET_VALUE';
const RESET_VALUE = 'ADD_CONTACT/RESET_VALUE';

export const REDUCER_NAME = 'addContact';

export const setValue = createAction(SET_VALUE);
export const resetValue = createAction(RESET_VALUE);

const initialState = { value: '' };

export default handleActions({
  [resetValue]: () => initialState,
  [setValue]: (state, { payload }) => ({ value: payload }),
}, initialState);


export const valueSelector = state => state[REDUCER_NAME].value;
