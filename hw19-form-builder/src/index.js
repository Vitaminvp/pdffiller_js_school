import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { reducers } from "./reducers";
import { configStore } from "./store";
import App from "./App.js";
import FormDetail from "./containers/FormDetail";
import NewForm from "./components/NewForm";
import createMiddlewares from "./store/middlewares";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./components/Page404";

const store = configStore(reducers, createMiddlewares());

const RootComponent = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/new" component={NewForm} />
          <Route path="/form/:formId" component={FormDetail} />
          <Route component={Page404} />
        </Switch>
      </Provider>
    </Router>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
