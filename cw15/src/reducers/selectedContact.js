import { handleActions, createAction } from 'redux-actions';
// import { createSelector } from 'reselect';


const SET_CONTACT = 'SELECTED_CONTACT/SET_CONTACT';
const RESET_CONTACT = 'SELECTED_CONTACT/RESET_CONTACT';

export const REDUCER_NAME = 'selectedContact';

export const setContact = createAction(SET_CONTACT);
export const resetContact = createAction(RESET_CONTACT);

const initialState = null;

export default handleActions({
  [resetContact]: () => initialState,
  [setContact]: (state, { payload }) => (payload),
}, initialState);


export const contactSelector = state => state[REDUCER_NAME];
