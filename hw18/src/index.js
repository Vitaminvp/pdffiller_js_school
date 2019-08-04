import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import { fetchFormsList } from "./api";
import Cart from "./Cart";
import Products from "./Forms";
import reducers from "./reducers";

import "./style.css";
import "./cart.css";
import "./products.css";
import { Provider, connect } from "react-redux";
import middlewares from "./middlewares";
import { add } from "./forms/actions";
import { getFormsList } from "./forms/selectors";

const store = createStore(reducers, {}, middlewares);

class AppPure extends React.Component {
  componentDidMount() {
    const { addForm } = this.props;
    fetchFormsList().then(forms => {
      forms.forEach(addForm);
      console.log(forms);
    });
  }

  render() {
    const { forms } = this.props;
    return (
      <div className="App">
        <Products forms={forms} />
        <Cart forms={[]}/>
      </div>
    );
  }
}

const App = connect(
  state => ({
    forms: getFormsList(state)
  }),
  {
    addForm: add
  }
)(AppPure);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
