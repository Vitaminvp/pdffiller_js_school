import React from "react";
import { connect } from "react-redux";
import { addToCart } from "./cart/actions";

const Products = ({ products, addItemToCart }) => (
  <div className="container products">
    <h2>Products</h2>
    <div className="products-list">
      {products.map(product => (
        <div key={product.id} className="list-item">
          <div className="list-item-img">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="list-item-title">{product.title}</div>
          <div className="list-item-price">{product.price} $</div>
          <div className="add-to-cart">
            <button onClick={() => addItemToCart(product.id)}>
              Add to Cart
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

export default enhance(Products);
