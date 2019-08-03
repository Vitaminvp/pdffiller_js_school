import { handleActions, createAction } from 'redux-actions';
import uniqueId from 'lodash/uniqueId';
// import { createSelector } from 'reselect';


export const SET_DATA   = 'CONTACTS/SET_DATA';
export const ADD_DATA   = 'CONTACTS/ADD_DATA';
export const RESET_DATA = 'CONTACTS/RESET_DATA';

export const REDUCER_NAME = 'contacts';

export const setContactsData   = createAction(SET_DATA);
export const addContactData    = createAction(ADD_DATA);
export const resetContactsData = createAction(RESET_DATA);

const initialState = [{ id: uniqueId('contact_'), name: 'vasia' }];

export default handleActions({
  [resetContactsData]: () => initialState,
  [setContactsData]: (state, { payload }) => payload,
  [addContactData]: (state, { payload }) => [...state, { id: uniqueId('contact_'), name: payload }],
}, initialState);


export const contactsSelector = state => state[REDUCER_NAME];
