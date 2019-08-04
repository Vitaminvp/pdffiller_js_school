import { handleActions, createAction } from 'redux-actions';
import isNull from 'lodash/isNull';
import get from 'lodash/get';
import { createSelector } from 'reselect';
import { getReducerProp } from '../utils';

export const RESET_LOADIND = 'LOADING/RESET_LOADIND';
export const START_LOADING = 'LOADING/START_LOADING';
export const FINISH_LOADING = 'LOADING/FINISH_LOADING';

export const REDUCER_NAME = 'loading';

export const resetLoadind = createAction(RESET_LOADIND);
export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);

const initialState = {
  loading: [],
  loaded: [],
};

export default handleActions({
  [resetLoadind]: () => initialState,
  [startLoading]: ({ loading, loaded }, { payload: TAG }) => ({
    loading: TAG ? [...loading, TAG] : [...loading],
    loaded: loaded.filter(el => el !== TAG),
  }),
  [finishLoading]: ({ loading, loaded }, { payload: TAG }) => ({
    loading: loading.filter(el => el !== TAG),
    loaded: TAG ? [...loaded, TAG] : [...loaded],
  }),
}, initialState);

const stateSelector = (state) => get(state, REDUCER_NAME);
const loadedSelector = createSelector(stateSelector, getReducerProp('loaded'));
const loadingSelector = createSelector(stateSelector, getReducerProp('loading'));

export const isLoaded = (state, tag = null) => (isNull(tag)
  ? get(loadingSelector(state), 'length') === 0
  : !loadingSelector(state).includes(tag) && loadedSelector(state).includes(tag));
