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
import Header from "./components/Header";
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";
import { addLocaleData } from "react-intl";
// import en from "react-intl/locale-data/en";
// import ru from "react-intl/locale-data/ru";
// import uk from "react-intl/locale-data/uk";

// addLocaleData(en);
// addLocaleData(ru);
// addLocaleData(uk);

const store = configStore(reducers, createMiddlewares());

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const RootComponent = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/new" component={FormNew} />
          <Route path="/edit/:formId" component={FormDetail} />
          <Route path="/fill/:formId" component={FormFill} />
          {/*<Route path="/profile" component={Profile} />*/}
          {/*<Route path="/callback" component={Callback} />*/}
          <Route component={Page404} />
        </Switch>
      </Provider>
    </Router>
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <RootComponent />
  </Auth0Provider>,

  document.getElementById("root")
);
