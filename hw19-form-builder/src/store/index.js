import { createStore, applyMiddleware, combineReducers } from "redux";
// import throttle from "lodash/throttle";
// import { loadState, saveState } from "../localStorage";
import { save, load } from "redux-localstorage-simple";

export const configStore = (reducers, middlewares) => {
  // const preLoadedState = loadState();

  const createStoreWithMiddleware = applyMiddleware(
    save()
  )(createStore);

  const store = createStoreWithMiddleware(
    combineReducers(reducers),
    load(),
    applyMiddleware(...middlewares)
  );


  // store.subscribe(
  //   throttle(() => {
  //     saveState({
  //       lang: store.getState().lang
  //     });
  //   }, 1000)
  // );
  return store;
};
