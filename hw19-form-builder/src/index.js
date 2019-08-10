import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { reducers } from "./reducers";
import { configStore } from "./store";
import App from "./App.js";
import FormDetail from "./containers/FormDetail";
import createMiddlewares from "./store/middlewares";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./components/Page404";
import FormNew from "./containers/FormNew";
import FormFill from "./containers/FormFill";

const store = configStore(reducers, createMiddlewares());

const RootComponent = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/new" component={FormNew} />
          <Route path="/edit/:formId" component={FormDetail} />
          <Route path="/fill/:formId" component={FormFill} />
          <Route component={Page404} />
        </Switch>
      </Provider>
    </Router>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
