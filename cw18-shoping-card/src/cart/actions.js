import { createAction } from "redux-actions";

export const addToCart = createAction("CART::ADD");
export const removeFromCart = createAction("CART::REMOVE");
export const incQuantity = createAction("CART::INC");
export const decQuantity = createAction("CART::DEC");
