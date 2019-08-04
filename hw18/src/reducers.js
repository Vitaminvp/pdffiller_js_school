import forms from "./forms/reducers";
import cart from "./cart/reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  forms,
  cart
});

export default reducers;
