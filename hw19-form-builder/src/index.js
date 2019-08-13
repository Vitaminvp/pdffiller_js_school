import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import { configStore } from "./store";
import createMiddlewares from "./store/middlewares";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";
import uk from "react-intl/locale-data/uk";
import Main from "./Main";

addLocaleData(en);
addLocaleData(ru);
addLocaleData(uk);

const store = configStore(reducers, createMiddlewares());

const RootComponent = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
