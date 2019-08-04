import products from "./products/reducers";
import cart from "./cart/reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  products,
  cart
});

export default reducers;
