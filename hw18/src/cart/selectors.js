import { getForms } from "../forms/selectors";

const getCart = state => state.cart;
const getProductsIds = state => getCart(state).productIds;
export const getQuantity = state => getCart(state).quantity;

export const getProductsInCart = state => {
  const allProducts = getForms(state);
  const ids = getProductsIds(state);

  const productsInCart = ids.map(id => allProducts[id]);
  return productsInCart;
};

export const getTotal = state => {
  const products = getProductsInCart(state);
  const quantity = getQuantity(state);

  return products.reduce(
    (sum, product) => sum + product.price * quantity[product.id],
    0
  );
};
