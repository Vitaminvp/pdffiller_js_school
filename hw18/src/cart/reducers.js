import { handleActions } from "redux-actions";
import { addToCart, incQuantity, decQuantity, removeFromCart } from "./actions";
import { include, exclude } from "../helper";

const initialState = {
  productIds: [],
  quantity: {}
};

const cart = handleActions(
  {
    [addToCart]: (state, { payload }) => ({
      ...state,
      productIds: include(state.productIds, payload),
      quantity: {
        ...state.quantity,
        [payload]: (state.quantity[payload] || 0) + 1
      }
    }),
    [removeFromCart]: (state, { payload }) => {
      const { [payload]: undefined, ...newStateQuantity } = state.quantity;
      return {
        ...state,
        productIds: exclude(state.productIds, payload),
        quantity: newStateQuantity
      };
    },
    [incQuantity]: (state, { payload }) => ({
      ...state,
      quantity: {
        ...state.quantity,
        [payload]: state.quantity[payload] + 1
      }
    }),
    [decQuantity]: (state, { payload }) => ({
      ...state,
      quantity: {
        ...state.quantity,
        [payload]: state.quantity[payload] - 1
      }
    })
  },
  initialState
);

export default cart;
