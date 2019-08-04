import React from "react";
import { connect } from "react-redux";
import { getProductsInCart, getQuantity, getTotal } from "./cart/selectors";
import { incQuantity } from "./cart/actions";
import { decQuantity } from "./cart/thunks";

const NoItems = () => <div className="no-items">No items yet :(</div>;

const CartContent = ({ forms, quantity, inc, dec, total }) => (
  <>
    <div className="cart-products">
      {forms.map(form => (
        <div key={form.id} className="cart-product">
          <div className="cart-product-title">{form.name}</div>
          <div className="cart-product-quantity">
            <button onClick={() => inc(form.id)}>+</button>
            <span>{quantity[form.id]}</span>
            <button onClick={() => dec(form.id)}>-</button>
          </div>
        </div>
      ))}
    </div>
    <div className="cart-summary">
      <div className="cart-summary-text">Total:</div>
      <div className="cart-summary-value">{total} $</div>
    </div>
    <div className="cart-checkout">
      <button>Proceed checkout</button>
    </div>
  </>
);

const Cart = props => (
  <div className="container cart">
    <h2>Cart</h2>
    {!props.forms.length ? <NoItems /> : <CartContent {...props} />}
  </div>
);

const mapState2Props = state => ({
  forms: getProductsInCart(state),
  quantity: getQuantity(state),
  total: getTotal(state)
});

const enhance = connect(
  mapState2Props,
  {
    inc: incQuantity,
    dec: decQuantity
  }
);

export default enhance(Cart);
