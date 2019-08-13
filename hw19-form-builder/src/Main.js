import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderAppBar from "./components/HeaderAppBar";
import App from "./App";
import FormNew from "./containers/FormNew";
import FormDetail from "./containers/FormDetail";
import FormFill from "./containers/FormFill";
import Page404 from "./components/Page404";
import { IntlProvider } from "react-intl";
import messages from "./constants/messages";
import {setLang} from "./reducers/lang";

class Main extends Component {
  render() {
    const { lang, setLang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Router>
          <HeaderAppBar setLang={setLang} />
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

const mapDispatchToProps = {
  setLang
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
