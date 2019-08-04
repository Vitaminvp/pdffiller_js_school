import * as actions from "./actions";
import { getQuantity } from "./selectors";

export const decQuantity = id => (dispatch, getState) => {
  dispatch(actions.decQuantity(id));
  const quantity = getQuantity(getState())[id];
  if (!quantity) {
    dispatch(actions.removeFromCart(id));
  }
};
