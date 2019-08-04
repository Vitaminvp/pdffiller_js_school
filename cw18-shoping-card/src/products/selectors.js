import { initialState } from "./reducers";

export const getProducts = state => state.products || initialState;

export const getProductsList = state => Object.values(getProducts(state));
