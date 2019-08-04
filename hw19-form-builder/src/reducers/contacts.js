import { handleActions, createAction } from 'redux-actions';
import { uniqueId } from '../utils';
// import { createSelector } from 'reselect';


const SET_DATA = 'CONTACTS/SET_DATA';
const ADD_DATA = 'CONTACTS/ADD_DATA';
const RESET_DATA = 'CONTACTS/RESET_DATA';

export const REDUCER_NAME = 'contacts';

export const setContactsData = createAction(SET_DATA);
export const addContactData = createAction(ADD_DATA);
export const resetContactsData = createAction(RESET_DATA);

const initialState = [];

export default handleActions({
  [resetContactsData]: () => initialState,
  [setContactsData]: (state, { payload }) => payload,
  [addContactData]: (state, payload) => [...state, { id: uniqueId('contact_'), name: payload.payload }],
}, initialState);


export const contactsSelector = state => state[REDUCER_NAME];
