import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import { data, getProducts } from "./api";
import Cart from "./Cart";
import Products from "./Products";
import reducers from "./reducers";

import "./style.css";
import "./cart.css";
import "./products.css";
import { Provider, connect } from "react-redux";
import middlewares from "./middlewares";
import { add } from "./products/actions";
import { getProductsList } from "./products/selectors";

const store = createStore(reducers, {}, middlewares);

class AppPure extends React.Component {
  componentDidMount() {
    const { addItem } = this.props;
    getProducts().then(products => products.forEach(addItem));
  }
  render() {
    const { products } = this.props;
    return (
      <div className="App">
        <Products products={products} />
        <Cart products={[]} />
      </div>
    );
  }
}

const App = connect(
  state => ({
    products: getProductsList(state)
  }),
  {
    addItem: add
  }
)(AppPure);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
