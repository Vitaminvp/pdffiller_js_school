import React from "react";
import { connect } from "react-redux";
import { addToCart } from "./cart/actions";

const Forms = ({ forms, addItemToCart }) => (
  <div className="container products">
    <h2>Forms</h2>
    <div className="products-list">
      {forms.map(form => (
        <div key={form.id} className="list-item">
          <div className="list-item-title">{form.name}</div>
          <div className="list-item-price">Fields: {form.fields}</div>
          <div className="add-to-cart">
            <button onClick={() => addItemToCart(form.id)}>
              Edit Form
            </button>
            <button onClick={() => addItemToCart(form.id)}>
              Add Form
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const enhance = connect(
  null,
  {
    addItemToCart: addToCart
  }
);

export default enhance(Forms);
