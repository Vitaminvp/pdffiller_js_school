import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import App from "./App";
import FormNew from "./containers/FormNew";
import FormDetail from "./containers/FormDetail";
import FormFill from "./containers/FormFill";
import Page404 from "./components/Page404";
import { IntlProvider } from "react-intl";
import messages from "./constants/messages";

class Main extends Component {
  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Router>
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
        </Router>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ lang }) => ({
  lang: lang.value
});

export default connect(mapStateToProps)(Main);
