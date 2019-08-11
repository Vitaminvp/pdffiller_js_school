import React, { Component } from "react";

import FormsList from "./containers/FormsList";
import {FormattedMessage, IntlProvider} from "react-intl";
// import "./styles/App.css";
import messages from "./constants/messages";
import { connect } from "react-redux";


class App extends Component {
  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div style={{ textAlign: "center" }}>

          <h1><FormattedMessage id="title" defaultMessage="Title default++++++" /></h1>
          <FormsList />
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ lang }) => ({
  lang: lang.value
});

export default connect(
  mapStateToProps,
  null
)(App);
